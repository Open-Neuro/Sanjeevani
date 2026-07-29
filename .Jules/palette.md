# Palette's Journal - Critical UX/Accessibility Learnings

This journal documents critical learnings and reusable patterns specific to Sanjeevani Care.

## 2025-02-17 - Initial Palette setup
**Learning:** Found that there is an unused prop 'onMenuClick' in `LandingHero.jsx` which was causing `no-unused-vars` warning/error in the eslint task because the layout structure changed to make the sticky Navbar higher level in `App.jsx`.
**Action:** Always verify top-level layout structure and clean up props that have been moved to higher level layouts to adhere to strict lint rules.
