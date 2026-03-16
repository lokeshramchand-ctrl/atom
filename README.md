# Atomity 

## My Approach 

I started off the project by looking for inspiration in the websites like dribbble , awwwards and pinterest and after some time of searching and exploring the design I have taken inspiration of the components from various webistes and 


- Built a Container in the middle 
- Added Table with static data 
- Added the bar graph with static data
- Added the DummyJson API to call the mock data
- Attached with the BarGraph and Table
- Removed the static data 
- Add animations
- Added loading and error states 
- Fix the setup of Tailwind CSS
- Changed various colors to try out the new designs 
- Fixed animations and micro animations 
- Worked on the Accessibility as per the document 
- Added loading and error states 


## Feature Chosen And Why

I chose Option A (0:30–0:40) from the product video, which shows a cluster cost analysis view. This section stood out because it combines both visual comparison and detailed metrics, which makes it a good candidate for demonstrating animation, data handling, and component structure in a single section.

The section includes:

- A bar chart that visually compares the relative cost of each cluster.

- A detailed table showing the cost breakdown across CPU, RAM, storage, network, and GPU.

- Animated number counters so values feel dynamic rather than static.

- Smooth entrance animations so the section appears naturally as the user scrolls.

I chose this feature because it reflects a real-world SaaS dashboard pattern where users need both a quick visual summary and precise numerical insight at the same time.

The dashboard presents:

- A bar chart for quick comparison of cluster costs.
- A table for exact per-cluster cost distribution.
- A theme toggle for light and dark viewing.

## Animation Approach

Animation is handled with GSAP in the main dashboard component.

The approach is:

- Animate the card container in first.
- Stagger the header text and theme toggle.
- Animate chart bars upward with staggered timing.
- Fade and slide table headers and rows in after the chart.

This sequencing keeps the screen feeling deliberate instead of animating every element independently.

Reduced motion is respected in two layers:

- In [app/src/components/index.tsx](/home/lowsl/code/atom/app/src/components/index.tsx), `gsap.matchMedia()` checks `prefers-reduced-motion` and swaps the animated timeline for immediate rendering.
- In [app/globals.css](/home/lowsl/code/atom/app/globals.css), a `prefers-reduced-motion: reduce` rule collapses animation and transition durations as a defensive fallback.

## Tokens And Style Structure

Styles are split between global design tokens and component-level utility classes.

### Global Tokens

In [app/globals.css](/home/lowsl/code/atom/app/globals.css), CSS custom properties define the visual system:

- `--bg-primary`, `--bg-card`
- `--text-main`, `--text-muted`
- `--border-subtle`, `--hover-bg`
- Chart-specific tokens such as `--chart-bar-via`, `--chart-bar-to`, `--chart-bar-hover`, and `--chart-top`

These are declared in `:root` for light mode and overridden inside `.dark` for dark mode.

### Component Styling

The styling strategy is:

- Use Tailwind utilities for spacing, layout, sizing, and responsive behavior.
- Use CSS variables for theme-aware colors.
- Keep repeated layout styles in shared component classes such as `.premium-card`, `.premium-card-wrapper`, `.chart-container`, and `.table-wrapper`.

That split keeps layout fast to build while centralizing color behavior in one place.

## Data Fetching And Caching

Data is fetched in a client-side hook: [app/src/hooks/useData.ts](/home/lowsl/code/atom/app/src/hooks/useData.ts).

The flow is:

- Fetch product data from `https://dummyjson.com/products?limit=4` on mount.
- Transform the response into dashboard-friendly cluster data.
- Derive `name`, `cost`, and `efficiency` values for each row.
- Expose `data`, `loading`, and `error` state back to the page.

Current caching behavior:

- There is no dedicated cache layer like SWR, React Query, or Next.js server caching.
- The fetched result is only retained in React component state for the lifetime of the mounted page.
- A refresh triggers a fresh request and a fresh transform.

This was a deliberate simplicity tradeoff for a small single-screen dashboard. It keeps the data path obvious, but it is not ideal for production-grade caching or revalidation.

## Libraries Used And Why

- `next`: App framework, routing, layout model, and production build tooling.
- `react` and `react-dom`: Component model and client-side state/effects.
- `gsap`: Precise sequencing and staggered motion for the dashboard entrance animations.
- `next-themes`: Theme switching using a class-based dark/light model without reinventing color-mode state management.
- `tailwindcss`: Utility-first layout and responsive styling, combined with custom CSS variables for tokens.
- `typescript`: Safer component contracts and easier refactoring.

## Tradeoffs And Decisions

- Client-side fetching instead of server-side fetching: simpler iteration, but weaker caching and slower first meaningful data on slower connections.
- CSS variables for tokens instead of a larger design-system abstraction: fast and flexible, but less formally typed than a dedicated token pipeline.
- Div-based chart rendering instead of SVG: quick to style and animate, but less structurally expressive than a chart built from semantic SVG or a charting library.
- Lightweight custom chart instead of a charting package: more control over visuals and bundle discipline, but more manual work for accessibility and interaction states.
- Randomized efficiency values in the transform step: useful for visual variety during prototyping, but not stable or realistic production data.

## What I Would Improve With More Time

- Move data fetching to a server component or route handler and add proper caching/revalidation.
- Add loading skeletons instead of text-only loading state.
- Add tests for data transformation, theme behavior, and reduced-motion behavior.
- Add a summary metrics row above the chart, including animated totals and deltas.

## Project Structure

- [app/src/components/index.tsx](/home/lowsl/code/atom/app/src/components/index.tsx): main dashboard composition and GSAP entry animation.
- [app/src/components/features/BarChart.tsx](/home/lowsl/code/atom/app/src/components/features/BarChart.tsx): chart rendering and keyboard-accessible data inspection.
- [app/src/components/features/Table.tsx](/home/lowsl/code/atom/app/src/components/features/Table.tsx): detailed cost breakdown table.
- [app/src/components/ui/ThemeToggle.tsx](/home/lowsl/code/atom/app/src/components/ui/ThemeToggle.tsx): light/dark theme switch.
- [app/src/hooks/useData.ts](/home/lowsl/code/atom/app/src/hooks/useData.ts): data fetching and shaping.
- [app/globals.css](/home/lowsl/code/atom/app/globals.css): tokens, shared component styles, and reduced-motion overrides.

## Deployment 


Deployed in Vercel
