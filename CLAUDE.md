# Pixopharm LMS — Working Directory

**Product:** Caribbean pharmacy training LMS  
**Live:** https://pixopharm-lms.vercel.app  
**GitHub:** https://github.com/ian-angus/pixopharm-lms

## Session Start
1. Read `progress.md` to restore context
2. Check open PRs for Coderabbit/Codex comments

## Tech Stack
- **Frontend:** React 19 + Vite + TypeScript
- **UI:** shadcn/ui components, Tailwind CSS
- **Backend/DB:** Supabase (auth + database)
- **Deploy:** Vercel (`npx vercel --prod`)
- **Video:** Remotion (`remotion/`)

## Dev Commands
```bash
pnpm dev          # local dev server
pnpm build        # production build
pnpm lint         # lint check
npx vercel --prod # deploy to production (ALWAYS use this, not git push)
```

> **Warning:** Git auto-deploy to Vercel has silently failed before — always use `npx vercel --prod` and verify the bundle hash changed.

## Database State (as of 2026-03-30)
- **13 courses**, 90 modules, 334 lessons, 833 quiz questions
- All content stored in Supabase; CoursePlayer fetches exclusively via `fetchCourseBySlug()`
- Sync content: `npx tsx scripts/sync-lessons-to-supabase.ts`
- Export DB: `npx tsx scripts/db-export.ts`
- Restore DB: `npx tsx scripts/db-restore.ts`

## Key Directories
```
src/
├── components/      # React components (UI + course player)
│   └── ui/          # shadcn/ui primitives
scripts/             # DB sync, export, restore, video render
remotion/            # Remotion video compositions
waitlist/            # Legacy waitlist component (use ../waitlist/ repo instead)
docs/                # (at parent level) research files
```

## Skills — Use These
| Skill | When |
|-------|------|
| `engineering-advanced-skills:engineering` | Feature work, code review, architecture |

## MCP Servers — Use These
| Server | Purpose |
|--------|---------|
| `supabase` | Query/update database, check schema |
| `vercel` | Check deployment status |
| `playwright` | UI testing, screenshot verification |
| `filesystem` | File operations |

## Rules
- Always PR after branch work — never push directly to main
- Check Coderabbit and OpenAI Codex comments on every PR
- Always use `npx vercel --prod` for deploys
- Keep `progress.md` updated every session
