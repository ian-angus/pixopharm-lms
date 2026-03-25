const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const IMG_DIR = path.join(__dirname, 'src', 'assets', 'generated');
const AUTH_STATE = path.join(__dirname, '.auth-state.json');

const prompts = [
  {
    name: 'hero.png',
    prompt: 'Professional photograph of a modern Caribbean pharmacy interior, diverse pharmacy technicians in white coats working behind counter, tropical sunlight through windows, medicine shelves organized, warm professional atmosphere'
  },
  {
    name: 'about-classroom.png',
    prompt: 'Caribbean pharmacy students in bright modern training classroom, diverse professionals studying with laptops and pharmaceutical textbooks, whiteboard with diagrams, professional educational environment'
  },
  {
    name: 'course-dispensing.png',
    prompt: 'Professional flat illustration of pharmaceutical dispensing, medicine bottles, prescription pad, mortar and pestle, clean design, teal and navy blue color palette, corporate educational graphic'
  },
  {
    name: 'course-ai.png',
    prompt: 'Professional flat illustration of artificial intelligence in healthcare pharmacy, digital brain connected to pharmacy symbols, analytics dashboard, teal and navy blue palette, clean educational graphic'
  },
  {
    name: 'caribbean-aerial.png',
    prompt: 'Stunning aerial photograph of Caribbean island coastline, crystal clear turquoise ocean, white sand beach, lush green tropical vegetation, golden hour lighting'
  },
  {
    name: 'logo-concept.png',
    prompt: 'Professional minimalist corporate logo for PIXOPHARM pharmaceutical company, mortar and pestle with digital pixels, teal and dark navy blue on white background, clean vector flat design'
  }
];

async function run() {
  fs.mkdirSync(IMG_DIR, { recursive: true });

  console.log('Launching visible Chrome browser...');
  console.log('*** YOU WILL NEED TO SIGN IN TO GOOGLE WHEN THE WINDOW OPENS ***\n');

  const browser = await chromium.launch({
    channel: 'chrome',
    headless: false,
    args: ['--window-size=1400,900', '--disable-blink-features=AutomationControlled'],
  });

  const context = await browser.newContext({
    viewport: { width: 1400, height: 900 },
  });

  // Try to restore auth state
  if (fs.existsSync(AUTH_STATE)) {
    console.log('Found saved auth state, attempting to restore...');
    try {
      const cookies = JSON.parse(fs.readFileSync(AUTH_STATE, 'utf8'));
      await context.addCookies(cookies);
    } catch(e) { console.log('Could not restore auth state'); }
  }

  const page = await context.newPage();

  // Navigate to ImageFX
  console.log('Opening ImageFX...');
  await page.goto('https://labs.google/fx/tools/image-fx', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);

  // Accept cookies
  try {
    const agreeBtn = page.getByRole('button', { name: 'Agree' });
    if (await agreeBtn.isVisible({ timeout: 2000 })) {
      await agreeBtn.click();
      await page.waitForTimeout(1000);
    }
  } catch(e) {}

  // Check if sign-in needed
  const bodyText = await page.textContent('body');
  if (bodyText.includes('Sign in with Google')) {
    console.log('\n==================================================');
    console.log('  PLEASE SIGN IN TO GOOGLE IN THE BROWSER WINDOW');
    console.log('  Use: ian.a.n.thomson@gmail.com');
    console.log('  Waiting up to 120 seconds...');
    console.log('==================================================\n');

    // Click the sign in button to start the flow
    try {
      await page.locator('button:has-text("Sign in with Google")').first().click();
      await page.waitForTimeout(2000);
    } catch(e) {}

    // Wait for user to complete sign-in and return to ImageFX
    let signedIn = false;
    for (let attempt = 0; attempt < 60; attempt++) {
      await page.waitForTimeout(2000);
      const url = page.url();
      if (url.includes('image-fx') || url.includes('labs.google/fx')) {
        const text = await page.textContent('body').catch(() => '');
        if (!text.includes('Sign in with Google')) {
          console.log('Sign-in detected! Proceeding...');
          signedIn = true;
          break;
        }
      }
      if (attempt % 10 === 0 && attempt > 0) {
        console.log(`Still waiting... (${attempt * 2}s)`);
      }
    }

    if (!signedIn) {
      console.log('Timed out waiting for sign-in. Trying anyway...');
    }

    // Save auth state for next time
    try {
      const cookies = await context.cookies();
      fs.writeFileSync(AUTH_STATE, JSON.stringify(cookies, null, 2));
      console.log('Auth state saved for future runs');
    } catch(e) {}
  } else {
    console.log('Already signed in!');
  }

  // Wait for page to be fully ready
  await page.waitForTimeout(3000);
  await page.screenshot({ path: path.join(IMG_DIR, '_ready.png') });
  console.log('\nStarting image generation...\n');

  for (let i = 0; i < prompts.length; i++) {
    const { name, prompt } = prompts[i];
    console.log(`[${i+1}/${prompts.length}] Generating: ${name}`);
    console.log(`  Prompt: ${prompt.substring(0, 60)}...`);

    try {
      // Reload ImageFX for clean state (except first time)
      if (i > 0) {
        await page.goto('https://labs.google/fx/tools/image-fx', { waitUntil: 'domcontentloaded', timeout: 20000 });
        await page.waitForTimeout(3000);
      }

      // Find prompt input
      let inputEl = null;
      for (const sel of ['div[contenteditable="true"]', 'div[role="textbox"]', 'textarea:not([name="g-recaptcha-response"]):visible']) {
        try {
          const el = page.locator(sel).first();
          if (await el.isVisible({ timeout: 3000 })) {
            inputEl = el;
            break;
          }
        } catch(e) {}
      }

      if (!inputEl) {
        // Try aria label
        try {
          inputEl = page.getByLabel('Describe what you want to create');
          if (!(await inputEl.isVisible({ timeout: 2000 }))) inputEl = null;
        } catch(e) {}
      }

      if (!inputEl) {
        await page.screenshot({ path: path.join(IMG_DIR, `_no-input-${i}.png`) });
        console.log('  ERROR: Could not find prompt input');
        continue;
      }

      // Enter prompt
      await inputEl.click();
      await page.keyboard.press('Meta+a');
      await page.keyboard.press('Backspace');
      await page.waitForTimeout(200);
      await inputEl.pressSequentially(prompt, { delay: 3 });
      await page.waitForTimeout(500);

      // Click generate
      let clicked = false;
      for (const btnText of ['Generate', 'Create', 'Go']) {
        try {
          const btn = page.getByRole('button', { name: btnText });
          if (await btn.isVisible({ timeout: 1500 })) {
            await btn.click();
            clicked = true;
            console.log(`  Clicked: ${btnText}`);
            break;
          }
        } catch(e) {}
      }
      if (!clicked) {
        await page.keyboard.press('Enter');
        console.log('  Pressed Enter to submit');
      }

      // Wait for generation
      console.log('  Generating... (waiting 30s)');
      await page.waitForTimeout(30000);

      // Save result screenshot
      await page.screenshot({ path: path.join(IMG_DIR, `_result-${i}.png`) });

      // Try to download generated image
      let saved = false;

      // Look for generated images
      const imgLocators = [
        page.locator('img[alt*="generated"]'),
        page.locator('img[alt*="A generated image"]'),
        page.locator('img[src*="lh3.googleusercontent"]'),
      ];

      for (const imgs of imgLocators) {
        const count = await imgs.count();
        if (count > 0) {
          console.log(`  Found ${count} generated images`);
          const firstImg = imgs.first();
          await firstImg.click();
          await page.waitForTimeout(1500);

          // Try download button
          try {
            const dlBtn = page.locator('button:has-text("Download"), button:has-text("download")').first();
            if (await dlBtn.isVisible({ timeout: 3000 })) {
              const downloadPromise = page.waitForEvent('download', { timeout: 15000 });
              await dlBtn.click();
              const download = await downloadPromise;
              await download.saveAs(path.join(IMG_DIR, name));
              console.log(`  DOWNLOADED: ${name}`);
              saved = true;
              break;
            }
          } catch(e) {}

          // Fallback: screenshot the image element
          if (!saved) {
            try {
              await firstImg.screenshot({ path: path.join(IMG_DIR, name) });
              console.log(`  CAPTURED: ${name}`);
              saved = true;
              break;
            } catch(e) {}
          }
        }
      }

      if (!saved) {
        console.log(`  WARNING: Could not save ${name}`);
      }

    } catch(err) {
      console.log(`  ERROR: ${err.message}`);
    }

    await page.waitForTimeout(2000);
  }

  // Final summary
  console.log('\n================================');
  console.log('IMAGE GENERATION COMPLETE');
  console.log('================================');
  const files = fs.readdirSync(IMG_DIR).filter(f => !f.startsWith('_'));
  if (files.length > 0) {
    console.log('Generated files:');
    files.forEach(f => {
      const size = (fs.statSync(path.join(IMG_DIR, f)).size / 1024).toFixed(1);
      console.log(`  ${f} (${size} KB)`);
    });
  } else {
    console.log('Debug files:');
    fs.readdirSync(IMG_DIR).forEach(f => {
      console.log(`  ${f}`);
    });
  }

  // Keep browser open briefly so user can see
  console.log('\nClosing browser in 5 seconds...');
  await page.waitForTimeout(5000);
  await browser.close();
}

run().catch(e => {
  console.error('Fatal:', e.message);
  process.exit(1);
});
