// Render a Remotion composition to MP4
// Usage: npx tsx scripts/render-video.ts [compositionId]

import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const compositionId = process.argv[2] || "DashboardOverview";
const outDir = path.join(projectRoot, "public", "tutorials");

async function main() {
  // Ensure output directory exists
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log(`Bundling Remotion project...`);
  const bundleLocation = await bundle({
    entryPoint: path.resolve(projectRoot, "remotion/src/index.ts"),
    publicDir: path.resolve(projectRoot, "remotion/public"),
  });
  console.log(`Bundle created at: ${bundleLocation}`);

  console.log(`Selecting composition: ${compositionId}`);
  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id: compositionId,
  });

  const outputLocation = path.join(outDir, `${compositionId}.mp4`);
  console.log(`Rendering to: ${outputLocation}`);
  console.log(`Duration: ${composition.durationInFrames} frames (${composition.durationInFrames / composition.fps}s)`);

  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: "h264",
    outputLocation,
    onProgress: ({ progress }) => {
      process.stdout.write(`\rProgress: ${(progress * 100).toFixed(1)}%`);
    },
  });

  console.log(`\nDone! Video saved to: ${outputLocation}`);
  const stats = fs.statSync(outputLocation);
  console.log(`File size: ${(stats.size / 1024 / 1024).toFixed(1)} MB`);
}

main().catch((err) => {
  console.error("Render failed:", err);
  process.exit(1);
});
