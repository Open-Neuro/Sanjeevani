## 2025-07-05 - DemoModal UX & Accessibility Enhancements

**Learning:** High-fidelity UIs benefit greatly from simulated network delays (e.g., 800ms) during form submissions. Without it, the transition from 'submitting' to 'success' can be jarringly fast, making the user miss the visual confirmation of the process. Also, proper ARIA attributes (role="dialog", aria-modal="true", aria-labelledby) are essential for modal accessibility.

**Action:** Always implement a 'loading' state with a brief delay for async-simulated operations and ensure standard ARIA attributes are present in all modal components.

## 2025-07-05 - Architecture & Prop Cleanup

**Learning:** In a sticky navbar architecture where the Navbar is rendered at the top-level (App.jsx), passing navigation props (like onMenuClick) to section components (like LandingHero) is redundant if they don't render navigation elements.

**Action:** Periodically check for and remove unused props in section components when navigation has been moved to global layout components to maintain clean code and pass linting.
