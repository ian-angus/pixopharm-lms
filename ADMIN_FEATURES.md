# PIXOPHARM LMS -- Admin Features Specification

**Version**: 1.0.0
**Last Updated**: 2026-03-24
**Platform**: PIXOPHARM Learning Management System
**Stack**: React 18 + TypeScript + Vite + Supabase + Tailwind CSS + shadcn/ui

---

## Table of Contents

1. [Overview](#1-overview)
2. [Admin User Setup](#2-admin-user-setup)
3. [Database Schema](#3-database-schema)
4. [Security and RLS Policies](#4-security-and-rls-policies)
5. [Admin Dashboard Features](#5-admin-dashboard-features)
6. [API Functions](#6-api-functions)
7. [Frontend Integration](#7-frontend-integration)
8. [Technical Architecture](#8-technical-architecture)
9. [UX Design Decisions](#9-ux-design-decisions)

---

## 1. Overview

The PIXOPHARM Admin System provides a full-featured administration console for managing all aspects of the learning management system. It enables authorized administrators to create and manage courses, track student progress, view platform analytics, and preview content as a student would see it.

### Who Has Access

Only users whose `profiles.role` column is set to `'admin'` can access the admin dashboard. All other users (including those with `role = 'student'` or `role = 'instructor'`) are denied access and shown an "Access Denied" screen if they attempt to reach the admin console.

### What the Admin System Does

- **Content Management**: Full CRUD (Create, Read, Update, Delete) for courses, modules, lessons, and quiz questions
- **Student Tracking**: View all registered students, their enrollment status, course progress, and quiz scores
- **Analytics**: Aggregate platform statistics including enrollment counts, completion rates, average quiz scores, course popularity, and progress distribution
- **Preview Mode**: View any course as a student would see it, with a clearly marked preview banner
- **Data Export**: Export student data as CSV files for external analysis
- **Platform Settings**: View admin profile information and platform-level statistics

---

## 2. Admin User Setup

### Designating an Admin

Admin status is controlled by the `role` column in the `profiles` table. To grant admin access to a user, execute the following SQL in the Supabase SQL Editor:

```sql
-- Set a user as admin by their UUID
UPDATE public.profiles
SET role = 'admin'
WHERE id = '<user-uuid-here>';
```

To find a user's UUID, query the profiles table:

```sql
-- Find a user by email (email is in auth.users, not profiles)
SELECT p.id, p.full_name, p.role, u.email
FROM public.profiles p
JOIN auth.users u ON u.id = p.id
WHERE u.email = 'user@example.com';
```

To revoke admin access:

```sql
UPDATE public.profiles
SET role = 'student'
WHERE id = '<user-uuid-here>';
```

### Current Admin Users

| Name | UUID | Email |
|------|------|-------|
| Ian Thomson | `082ea382-d5d6-4708-be39-6047a55bbe7f` | (set as `created_by` on all seeded courses) |

### Role Values

The `role` column supports the following values:

| Role | Description |
|------|-------------|
| `student` | Default role. Can view published courses, enroll, track progress, earn certificates. |
| `instructor` | Reserved for future use. Currently has the same permissions as student. |
| `admin` | Full platform access. Can manage all content, view all student data, access analytics. |

---

## 3. Database Schema

### 3.1 `courses` Table

Stores all course definitions. Admins see courses in any status; students see only `status = 'published'`.

| Column | Type | Description |
|--------|------|-------------|
| `id` | `uuid` (PK) | Auto-generated unique identifier |
| `title` | `text` | Course display title (e.g., "Foundations of Pharmacy Practice") |
| `slug` | `text` (unique) | URL-friendly identifier (e.g., "foundations-pharmacy-practice") |
| `description` | `text` | Full course description shown on course cards |
| `skill_level` | `text` | One of: "Beginner", "Intermediate", "Advanced" |
| `duration_weeks` | `integer` | Estimated course duration in weeks |
| `icon` | `text` | Icon identifier (e.g., "GraduationCap", "Calculator", "Pill") |
| `color` | `text` | Theme color (e.g., "blue", "emerald", "violet", "rose") |
| `image_url` | `text` | Optional URL for course cover image |
| `status` | `text` | Publication status: "draft", "published", or "archived" |
| `order` | `integer` | Display order in course listings |
| `prerequisites` | `jsonb` | Array of course UUIDs that must be completed first |
| `what_youll_learn` | `jsonb` | Array of learning outcome strings |
| `created_by` | `uuid` | Reference to the admin user who created the course |
| `created_at` | `timestamptz` | Auto-set on creation |
| `updated_at` | `timestamptz` | Auto-updated via trigger |

**Indexes**: `slug` (unique), `status`, `order`

### 3.2 `modules` Table

Organizes course content into sequential modules.

| Column | Type | Description |
|--------|------|-------------|
| `id` | `uuid` (PK) | Auto-generated unique identifier |
| `course_id` | `uuid` (FK) | References `courses.id` -- cascading delete |
| `title` | `text` | Module display title (e.g., "Introduction to Pharmacy") |
| `description` | `text` | Module summary description |
| `order_index` | `integer` | Sequential position within the course |
| `created_at` | `timestamptz` | Auto-set on creation |
| `updated_at` | `timestamptz` | Auto-updated via trigger |

**Indexes**: `course_id` (FK index)

### 3.3 `lessons` Table

Individual learning units within modules. Content is stored as structured JSONB.

| Column | Type | Description |
|--------|------|-------------|
| `id` | `uuid` (PK) | Auto-generated unique identifier |
| `module_id` | `uuid` (FK) | References `modules.id` -- cascading delete |
| `title` | `text` | Lesson display title |
| `content` | `jsonb` | Array of ContentBlock objects (see Content Block Types below) |
| `order_index` | `integer` | Sequential position within the module |
| `duration_minutes` | `integer` | Estimated reading/completion time in minutes |
| `created_at` | `timestamptz` | Auto-set on creation |
| `updated_at` | `timestamptz` | Auto-updated via trigger |

**Indexes**: `module_id` (FK index)

#### Content Block Types

The `content` JSONB column stores an array of typed blocks:

| Block Type | Description |
|------------|-------------|
| `heading` | Section heading with level (h2, h3, h4) |
| `text` | Paragraph text content |
| `callout` | Highlighted box (info, warning, tip, example variants) |
| `table` | Tabular data with headers and rows |
| `island_comparison` | Side-by-side comparison across Caribbean islands |
| `key_terms` | Glossary-style term definitions |
| `case_study` | Detailed scenario-based learning exercise |
| `video_placeholder` | Placeholder for future video content |
| `image_placeholder` | Placeholder for future image content |
| `divider` | Visual separator between sections |
| `list` | Bulleted or numbered list |

### 3.4 `quiz_questions` Table

Multiple-choice assessment questions tied to modules.

| Column | Type | Description |
|--------|------|-------------|
| `id` | `uuid` (PK) | Auto-generated unique identifier |
| `module_id` | `uuid` (FK) | References `modules.id` -- cascading delete |
| `question` | `text` | The quiz question text |
| `options` | `jsonb` | Array of 4 answer option strings |
| `correct_answer` | `integer` | 0-based index of the correct option (0-3) |
| `explanation` | `text` | Explanation shown after the student answers |
| `order_index` | `integer` | Sequential position within the module's quiz |
| `created_at` | `timestamptz` | Auto-set on creation |

**Indexes**: `module_id` (FK index)

### 3.5 Pre-existing Tables (from `supabase-schema.sql`)

These tables were created before the admin system and are referenced by admin queries:

| Table | Purpose |
|-------|---------|
| `profiles` | User profiles (extends `auth.users`). Contains `role` column used for admin checks. |
| `enrollments` | Tracks which users are enrolled in which courses. `status`: "active", "completed", "paused". |
| `course_progress` | Per-user, per-course progress tracking. Stores `completed_lessons` (JSONB array) and `quiz_scores` (JSONB object). |
| `certificates` | Records of certificates issued upon course completion. |

### 3.6 Database Triggers

An `update_updated_at()` trigger function automatically sets `updated_at = now()` on row update for the `courses`, `modules`, and `lessons` tables.

### 3.7 Cascade Delete Behavior

- Deleting a **course** cascades to all its **modules**, which cascades to all **lessons** and **quiz_questions**
- Deleting a **module** cascades to all its **lessons** and **quiz_questions**
- Deleting a **lesson** or **quiz_question** has no further cascade effect

---

## 4. Security and RLS Policies

All tables have Row Level Security (RLS) enabled. Access control is enforced at the database level through Supabase RLS policies.

### 4.1 The `is_admin()` Function

A PostgreSQL helper function checks whether the currently authenticated user has admin privileges:

```sql
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid()
    AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER STABLE;
```

Key characteristics:
- **SECURITY DEFINER**: Executes with the privileges of the function owner (bypasses RLS on the `profiles` table itself)
- **STABLE**: Can be safely cached within a single transaction
- Returns `true` only if the authenticated user's profile has `role = 'admin'`
- Used as the gating condition in all admin-level RLS policies

### 4.2 Content Tables (courses, modules, lessons, quiz_questions)

| Operation | Students | Admins |
|-----------|----------|--------|
| **SELECT** | Published courses only (via `status = 'published'` check on courses; modules/lessons/quizzes visible only if parent course is published) | All records regardless of status |
| **INSERT** | Denied | Allowed |
| **UPDATE** | Denied | Allowed |
| **DELETE** | Denied | Allowed |

**Student SELECT policy for modules, lessons, and quiz_questions**: These policies use a JOIN or subquery to verify that the parent course has `status = 'published'`. For example, a student can only see lessons whose module belongs to a published course.

### 4.3 User Tables (profiles, enrollments, course_progress, certificates)

| Table | Students | Admins |
|-------|----------|--------|
| **profiles** | Can view all profiles (public read). Can insert/update only own profile. | Can view **and update** all profiles. |
| **enrollments** | Can view/insert/update only own enrollments. | Can view **all** enrollments (read-only). |
| **course_progress** | Can view/insert/update only own progress. | Can view **all** progress records (read-only). |
| **certificates** | Can view/insert only own certificates. | Can view **all** certificates (read-only). |

### 4.4 Security Notes

- Admin privileges are enforced at **both** the database level (RLS) and the frontend level (the `useAdmin` hook and the admin dashboard guard)
- The frontend guard prevents non-admins from seeing the admin UI, but even if the UI check were bypassed, the RLS policies would prevent unauthorized data access
- There is no API endpoint or UI for self-promotion to admin status; it must be done via direct SQL

---

## 5. Admin Dashboard Features

The admin dashboard is a standalone full-page view that replaces the main application when activated. It uses a sidebar navigation pattern with five sections.

### 5.1 Dashboard Overview Page

The landing page after entering the admin console.

**Welcome Header**: Personalized greeting using the admin's first name (e.g., "Welcome back, Ian").

**Stat Cards** (4-card grid):

| Card | Data Source | Description |
|------|-------------|-------------|
| Total Courses | `courses` table | Count of all courses (any status). Shows published count below. |
| Total Students | `profiles` table | Count of users with `role = 'student'` |
| Active Enrollments | `enrollments` table | Sum of all enrollment records across all students and courses |
| Avg Completion Rate | `analytics` calculation | Percentage of enrollments with `status = 'completed'` |

**Quick Actions Panel**:
- "Create New Course" -- navigates to Courses page and opens the create dialog
- "View All Students" -- navigates to the Students page
- "View Analytics" -- navigates to the Analytics page

**Recent Activity Feed**: Displays the 5 most recent course completions, showing student name, course title, and completion date. Each entry has an avatar-style icon.

### 5.2 Course Management

Full CRUD interface for the course content hierarchy.

#### Course List View
- Displays all courses in a vertically stacked card list, ordered by the `order` field
- Each course row shows: title, status badge (Draft/Published/Archived), skill level, duration in weeks, module count, enrolled student count
- Action buttons per course: Preview (eye icon), Edit (pencil icon), Delete (trash icon)
- Clicking a course row expands it to reveal its modules

#### Course Create/Edit Dialog
A modal form with the following fields:

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Title | Text input | Yes | Auto-generates slug on new courses |
| Slug | Text input | Yes | URL-friendly identifier, auto-populated from title |
| Description | Textarea | Yes | Full course description |
| Skill Level | Select dropdown | No | Beginner (default), Intermediate, Advanced |
| Duration (weeks) | Number input | No | Default: 4 |
| Icon | Select dropdown | No | 8 options: GraduationCap, Calculator, Pill, HeartPulse, Scale, BrainCircuit, MessageCircleHeart, ShieldCheck |
| Color | Select dropdown | No | 8 options with color swatches: blue, emerald, violet, rose, amber, cyan, teal, orange |
| Prerequisites | Multi-select badges | No | Toggle badges for other courses |
| What You Will Learn | Dynamic text list | No | Add/remove learning outcome items |
| Status | Select dropdown | No | Draft (default), Published, Archived |

#### Expanded Course Detail
When a course is expanded, it shows:
- Module count header with "Add Module" button
- List of all modules with order index prefix (e.g., "M1", "M2")
- Each module shows lesson count and quiz question count
- Modules are expandable to reveal their lessons and quiz questions

### 5.3 Module Management

Modules are managed within the context of their parent course (expanded view).

#### Module Create/Edit Dialog

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Title | Text input | Yes | Module display name |
| Description | Textarea | No | Module summary |
| Display Order | Number input | No | Sequential position within the course |

### 5.4 Lesson Management

Lessons are managed within the context of their parent module (expanded view).

#### Lesson List
Each lesson row displays: order number, title, duration in minutes. Edit and delete buttons appear on hover.

#### Lesson Create/Edit Dialog

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Title | Text input | Yes | Lesson display name |
| Duration (minutes) | Number input | No | Default: 15 |
| Display Order | Number input | No | Default: 99 |

Note: The lesson `content` (JSONB content blocks) is not editable through the admin UI dialog. Content editing requires direct database manipulation or a future rich content editor.

### 5.5 Quiz Question Management

Quiz questions are managed within the context of their parent module (expanded view).

#### Quiz Question List
Each question row displays: question number (Q1, Q2...), truncated question text. Edit and delete buttons appear on hover.

#### Quiz Question Create/Edit Dialog

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Question | Textarea | Yes | The question text |
| Options | 4 text inputs with radio buttons | Yes (min 2) | Radio button selects the correct answer |
| Explanation | Textarea | No | Shown to students after answering |
| Display Order | Number input | No | Default: 99 |

Validation: At least 2 options must be filled in.

### 5.6 Student Tracking

#### Student Table
A full-width data table with the following columns:

| Column | Description |
|--------|-------------|
| Name | Student's full name (clickable to open detail view) |
| Island | Caribbean island/territory |
| Courses | Number of enrolled courses |
| Progress | Visual progress bar + percentage |
| Status | "Active" (has enrollments) or "Inactive" badge |
| Joined | Account creation date |

#### Search and Sort
- **Search**: Real-time text filter on student name and island
- **Sort options**: By Name (alphabetical, default), By Progress (highest first), By Recent (newest accounts first)

#### Student Detail Dialog
Opens when clicking a student row. Shows:
- Profile information: name, island, joined date, enrolled course count
- Per-course progress cards with:
  - Course title
  - Progress bar with percentage
  - Lessons completed count
  - Quizzes taken count
  - Average quiz score (if quizzes taken)

#### CSV Export
The "Export CSV" button generates and downloads a CSV file with the following columns:
- Name, Island, Enrolled Courses, Progress %, Status, Created

Filename format: `pixopharm-students-YYYY-MM-DD.csv`

### 5.7 Analytics

#### Stat Cards (4-card grid)

| Card | Metric | Description |
|------|--------|-------------|
| Total Enrollments | Count | Total enrollment records across all courses |
| Completion Rate | Percentage | Enrollments with `status = 'completed'` / total enrollments |
| Avg Quiz Score | Percentage | Average across all quiz scores in all `course_progress` records |
| Certificates Issued | Count | Number of completed enrollments (used as proxy for certificates) |

#### Course Popularity Chart
A CSS-rendered horizontal bar chart showing enrollment count per published course, sorted by popularity (highest first). Each bar is proportionally sized relative to the most popular course.

#### Student Progress Distribution
A horizontal bar chart showing how students are distributed across progress buckets:
- 0-25% complete
- 26-50% complete
- 51-75% complete
- 76-100% complete

Note: Progress estimation uses an assumption of 30 lessons per course.

#### Recent Completions
A list of the 10 most recent course completions showing student name (with initials avatar), course title, and completion date.

### 5.8 Preview as Student Mode

Available from the course list via the eye icon button on each course row.

When activated:
- The admin dashboard is replaced by the `CoursePlayer` component (the same one students use)
- A sticky amber banner at the top reads "ADMIN PREVIEW MODE -- Viewing as student"
- An "Exit Preview" button returns to the admin dashboard
- The preview uses the admin's own user context

### 5.9 Settings Page

A read-only information page showing:

**Admin Profile Card**:
- Name, Email, Role, Island

**Platform Stats Card**:
- Total Courses count
- Published Courses count
- Registered Students count
- Platform Version (currently "1.0.0")

---

## 6. API Functions

All admin API functions are defined in `src/lib/admin-api.ts`. They wrap Supabase client queries and return typed results.

### Courses

| Function | Signature | Description |
|----------|-----------|-------------|
| `fetchCourses` | `() => Promise<Course[]>` | Fetches all courses (any status), enriched with `modules_count` and `enrolled_count` per course. Ordered by `order` ascending. |
| `fetchCourse` | `(id: string) => Promise<{course, modules}>` | Fetches a single course with its full module/lesson/quiz tree. Modules include nested `lessons[]` and `quiz_questions[]`. |
| `createCourse` | `(data: Partial<Course>) => Promise<Course>` | Creates a new course with provided fields. Defaults: title="Untitled Course", skill_level="Beginner", status="draft", etc. |
| `updateCourse` | `(id: string, data: Partial<Course>) => Promise<Course>` | Updates specified fields on a course. Automatically sets `updated_at`. |
| `deleteCourse` | `(id: string) => Promise<void>` | Deletes a course. Cascading DB constraints remove all child modules, lessons, and quiz questions. |

### Modules

| Function | Signature | Description |
|----------|-----------|-------------|
| `createModule` | `(courseId: string, data: Partial<Module>) => Promise<Module>` | Creates a new module within the specified course. |
| `updateModule` | `(id: string, data: Partial<Module>) => Promise<Module>` | Updates specified fields on a module. |
| `deleteModule` | `(id: string) => Promise<void>` | Deletes a module and all its child lessons and quiz questions (via cascade). |

### Lessons

| Function | Signature | Description |
|----------|-----------|-------------|
| `createLesson` | `(moduleId: string, data: Partial<Lesson>) => Promise<Lesson>` | Creates a new lesson within the specified module. Default content is an empty array. |
| `updateLesson` | `(id: string, data: Partial<Lesson>) => Promise<Lesson>` | Updates specified fields on a lesson. |
| `deleteLesson` | `(id: string) => Promise<void>` | Deletes a single lesson. |

### Quiz Questions

| Function | Signature | Description |
|----------|-----------|-------------|
| `createQuizQuestion` | `(moduleId: string, data: Partial<QuizQuestion>) => Promise<QuizQuestion>` | Creates a new quiz question. Default: 4 empty options, correct_answer=0. |
| `updateQuizQuestion` | `(id: string, data: Partial<QuizQuestion>) => Promise<QuizQuestion>` | Updates a quiz question's fields. |
| `deleteQuizQuestion` | `(id: string) => Promise<void>` | Deletes a single quiz question. |

### Students

| Function | Signature | Description |
|----------|-----------|-------------|
| `fetchStudents` | `() => Promise<StudentProfile[]>` | Fetches all student profiles with their enrollments and course progress data joined. Sorted by name ascending. |

### Analytics

| Function | Signature | Description |
|----------|-----------|-------------|
| `fetchAnalytics` | `() => Promise<AnalyticsData>` | Computes aggregate analytics by fetching all enrollments, student profiles, course progress, and published courses in parallel. Returns total enrollments, active students, completion rate, average score, certificates issued, course popularity rankings, progress distribution buckets, and recent completions. |

### Error Handling

All API functions use a shared `handleError` helper that:
1. Extracts the error message (from Error objects or JSON stringification)
2. Logs to console with context (e.g., `admin-api [fetchCourses]:`)
3. Throws a new Error with the context prefix for upstream handling

---

## 7. Frontend Integration

### Entry Point

The admin dashboard is accessed from the main `App.tsx` component through the following flow:

1. **Role Detection**: `App.tsx` calls `useAdmin(user)` to determine if the logged-in user has admin privileges
2. **Navbar Button**: When `isAdmin` is `true`, an "Admin" button appears in the top navigation bar, styled with a teal border to match the brand
3. **State Toggle**: Clicking the "Admin" button sets `showAdmin = true` in `App.tsx`
4. **View Switch**: When `showAdmin && user && isAdmin` is true, `App.tsx` renders `<AdminDashboard>` instead of the main marketing/course view
5. **Exit**: The "Exit Admin" button in the admin top bar calls `onExit()`, which sets `showAdmin = false`, returning to the main site

### Component Hierarchy

```
App.tsx
  |-- useAdmin(user)                    # Hook: checks admin role
  |-- Navbar                            # Conditionally shows "Admin" button
  |-- AdminDashboard                    # Full-page admin console
       |-- useAdmin(user)               # Double-checks admin status
       |-- Sidebar navigation           # Dashboard, Courses, Students, Analytics, Settings
       |-- Dashboard overview           # Stats, quick actions, recent activity
       |-- Course management            # CRUD with expandable modules/lessons/quizzes
       |    |-- ModuleCard              # Sub-component for module display
       |-- Student tracking             # Table with search, sort, detail dialog, CSV export
       |-- Analytics                    # Charts, stats, recent completions
       |-- Settings                     # Profile info, platform stats
       |-- Preview mode                 # CoursePlayer with preview banner
       |-- Dialog components            # Course, Module, Lesson, Quiz, Delete, Student detail
```

### Routing

There is no client-side router (e.g., React Router). Navigation is handled via React state:

- `showAdmin` boolean in `App.tsx` toggles between the admin dashboard and the main site
- `activePage` state within `AdminDashboard` switches between sidebar sections
- `expandedCourseId` state controls which course's module tree is visible
- `previewCourseId` state toggles the student preview mode

---

## 8. Technical Architecture

### Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | React | 18 |
| Language | TypeScript | 5.9.3 |
| Build Tool | Vite | 8.0.2 |
| Styling | Tailwind CSS | 3.4.1 |
| UI Components | shadcn/ui + Radix UI | Latest |
| Backend / Database | Supabase (PostgreSQL) | Hosted |
| Deployment | Vercel | Auto-deploy |
| Font | DM Sans | Google Fonts |

### React Hooks Used

| Hook | Source | Purpose |
|------|--------|---------|
| `useState` | React | All component state (pages, data, forms, dialogs) |
| `useEffect` | React | Data loading on mount/page switch, keyboard listeners |
| `useCallback` | React | Memoized data-loading functions to prevent stale closures |
| `useMemo` | React | Computed values: filtered students list, dashboard stats |
| `useRef` | React (in useAdmin) | Cache admin profile fetch by user ID |
| `useAdmin` | Custom (`src/hooks/useAdmin.ts`) | Checks if user has admin role, returns profile data |
| `useToast` | shadcn/ui (`src/hooks/use-toast.ts`) | Toast notification system for success/error messages |

### Component Structure

The admin dashboard is implemented as a single large component (`AdminDashboard.tsx`, ~2170 lines) with one extracted sub-component (`ModuleCard`).

**Design rationale**: All admin pages share significant state (courses, students, analytics, dialog visibility) and cross-reference each other's data. Keeping them in one component avoids prop-drilling or context overhead for what is a self-contained admin experience.

### Data Flow

```
AdminDashboard
  |
  |-- [useAdmin hook] --> Supabase profiles table --> isAdmin check
  |
  |-- [loadCourses] --> fetchCourses() --> Supabase courses + modules + enrollments
  |-- [loadStudents] --> fetchStudents() --> Supabase profiles + enrollments + course_progress
  |-- [loadAnalytics] --> fetchAnalytics() --> Supabase enrollments + profiles + course_progress + courses
  |-- [loadCourseDetail] --> fetchCourse(id) --> Supabase course + modules + lessons + quiz_questions
  |
  |-- CRUD operations --> create/update/delete functions --> Supabase tables --> reload data
```

Data is loaded lazily based on which page is active. When the user navigates to "Courses", courses are fetched. When navigating to "Students", students are fetched. The "Dashboard" overview page loads all three data sets (courses, students, analytics).

### Icons

All icons in the admin dashboard are implemented as inline SVG React components (e.g., `IconDashboard`, `IconCourses`, `IconStudents`, `IconAnalytics`, `IconSettings`, `IconPlus`, `IconEdit`, `IconTrash`, `IconSearch`, `IconDownload`, `IconEye`, `IconLogOut`, `IconAward`, `IconChevronRight`). This avoids adding the Lucide React icon library as a dependency.

### TypeScript Types

All data structures are strongly typed:

- `Course`, `Module`, `Lesson`, `QuizQuestion`, `StudentProfile`, `AnalyticsData` -- exported from `admin-api.ts`
- `AdminProfile`, `UseAdminReturn` -- exported from `useAdmin.ts`
- `AdminDashboardProps`, `AdminPage`, `ModuleCardProps` -- defined in `AdminDashboard.tsx`
- All form state objects are typed inline with explicit type annotations

---

## 9. UX Design Decisions

### 9.1 Loading States

Every data-dependent section uses **skeleton placeholders** while data loads:

- **Stat Cards**: `StatCardSkeleton` -- shows gray animated bars in place of numbers
- **Tables**: `TableSkeleton` -- shows rows of gray animated bars matching table layout
- **Course Detail**: Shows skeleton rows while the module/lesson tree loads
- **Admin Check**: While determining admin status, a centered Pixopharm logo with skeleton text is shown

Skeleton components use the shadcn/ui `<Skeleton>` component, which renders animated gray placeholder bars.

### 9.2 Error Handling

Errors are communicated through the **toast notification system**:

- All API call failures trigger a destructive (red) toast with the error message
- Success operations trigger a default toast confirming the action (e.g., "Course updated", "Module deleted")
- Form validation errors are displayed inline below the relevant field in red text
- Non-critical failures (e.g., failing to load module counts) are logged to console with `console.warn` but do not block the UI

### 9.3 Empty States

When no data exists for a section, a centered empty state is shown with:
- A circular icon placeholder
- A descriptive title (e.g., "No courses yet")
- A helper description (e.g., "Create your first course to get started with the PIXOPHARM LMS.")
- An optional action button (e.g., "Create Course")

The empty state also adapts to search context (e.g., "No matching students" with "Try adjusting your search criteria.").

### 9.4 Form Validation

Validation is performed client-side before submitting to the API:

| Entity | Required Fields | Validation Rules |
|--------|----------------|------------------|
| Course | Title, Slug, Description | Non-empty after trim |
| Module | Title | Non-empty after trim |
| Lesson | Title | Non-empty after trim |
| Quiz Question | Question, Options | Question non-empty; at least 2 options filled |

Validation errors are stored in a `formErrors` state object and cleared as the user types in the errored field.

### 9.5 Delete Confirmation

All delete operations require confirmation through a dedicated dialog that:
- Names the entity type being deleted ("course", "module", "lesson", "quiz")
- Shows the entity name/title in quotes
- Warns about cascading effects (e.g., "All modules and lessons within this course will also be deleted.")
- Provides Cancel and Delete buttons, with Delete styled as destructive (red)

### 9.6 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Escape` | Closes any open dialog (course, module, lesson, quiz, delete, student detail) and exits preview mode |

The keyboard listener is registered globally via `window.addEventListener("keydown")` and cleaned up on component unmount.

### 9.7 Responsive Design

- **Sidebar**: Collapsible between full width (240px) and icon-only width (64px) via a toggle button at the bottom
- **Stat Cards**: 1 column on mobile, 2 columns on small screens (`sm`), 4 columns on large screens (`lg`)
- **Quick Actions + Recent Activity**: Stacked on mobile, side-by-side on large screens
- **Student Search/Sort**: Wraps on small screens using flex-wrap
- **Dialogs**: Use `max-w-2xl` (course) or `max-w-lg` (module, lesson, quiz) with `max-h-[85vh] overflow-y-auto` for scrollable content on small viewports
- **Top Bar**: Sticky positioned (`sticky top-0 z-40`) so it remains visible while scrolling

### 9.8 Visual Design System

The admin dashboard follows the PIXOPHARM brand guidelines:

| Element | Value |
|---------|-------|
| Primary Color | `hsl(174, 62%, 32%)` -- Teal (buttons, active states, progress bars) |
| Dark Background | `hsl(213, 50%, 16%)` -- Navy (sidebar) |
| Font | DM Sans (Google Fonts) |
| Status Badges | Emerald (Published), Amber (Draft), Slate (Archived) |
| Destructive Actions | Red (`text-destructive` / `variant="destructive"`) |
| Hover States | Edit/delete buttons on lessons and quizzes appear on hover (`opacity-0 group-hover:opacity-100`) |

### 9.9 Auto-Slug Generation

When creating a new course, typing in the Title field automatically generates a URL-friendly slug:
- Converts to lowercase
- Replaces non-alphanumeric characters with hyphens
- Strips leading/trailing hyphens

When editing an existing course, the slug is not auto-updated (to avoid breaking existing URLs).

### 9.10 Data Refresh Strategy

After any CRUD operation:
- The relevant data set is reloaded from the database (e.g., `loadCourses()` after creating/editing/deleting a course)
- When operating within a course detail view, both the course list and the course detail are refreshed
- No optimistic updates are used -- the UI waits for the database operation to complete before refreshing

---

## Appendix: File Reference

| File | Path | Purpose |
|------|------|---------|
| Admin Hook | `src/hooks/useAdmin.ts` | Custom hook for admin role detection |
| Admin API | `src/lib/admin-api.ts` | All Supabase query wrappers (15 functions) |
| Admin Dashboard | `src/components/AdminDashboard.tsx` | Full admin console UI (~2170 lines) |
| Main App | `src/App.tsx` | Admin integration point (navbar button, view toggle) |
| Database Schema | `supabase-schema.sql` | Original schema (profiles, enrollments, progress, certificates) |
| Course Player | `src/components/CoursePlayer.tsx` | Student-facing course view (used in preview mode) |
| Supabase Client | `src/lib/supabase.ts` | Supabase client initialization |
