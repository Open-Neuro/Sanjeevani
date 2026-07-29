# Sanjeevani Care — UX & Accessibility Journal

## 2025-02-18 - Sticky Navbar Architecture & ESLint Prop Cleanup
**Learning:** In highly interactive, multi-layered scroll-based web designs (using GSAP and ScrollTrigger), high-level layout components like `Navbar` must reside at the top-level application component (`App.jsx`) to remain persistent, sticky, and accessible without nesting them inside section containers (like `LandingHero`). Redundant or unused props passed down to section components can trigger ESLint compile errors (e.g., `no-unused-vars` on `onMenuClick` inside `LandingHero.jsx`).
**Action:** Always verify top-level layout hierarchies in `App.jsx` when addressing layout reviews. Remove unused navigation callbacks from section component definitions and their call sites to ensure a clean compilation.

## 2025-02-18 - Modal Accessibility & Focus Management with GSAP
**Learning:** For overlay components and modals (like `DemoModal`), proper ARIA labels, roles (`role="dialog"`, `aria-modal="true"`, and `aria-labelledby`), and focus management are mandatory. When GSAP entrance transitions are utilized, synchronizing auto-focus with GSAP's `onComplete` callback ensures a seamless, accessible screen reader flow and avoids jerky transitions.
**Action:** Ensure all modals have an interactive Close button with an explicit `aria-label`, associate form inputs explicitly with labels using unique matching `id`/`htmlFor` pairs (e.g. `demo-name` for `Name`), and set `aria-required="true"` on mandatory fields.
