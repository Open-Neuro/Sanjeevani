## 2025-05-15 - Enhanced Modal Accessibility and Focus Management
**Learning:** For components with GSAP entrance animations, using `onComplete` for auto-focusing elements is more reliable than `useEffect` or `setTimeout` as it ensures the element is visually ready and the transition is finished. Also, in this architecture, `Navbar` is sticky at the `App.jsx` level, making section-level navigation props redundant.
**Action:** Always synchronize focus management with animation callbacks and verify component nesting in `App.jsx` before assuming prop requirements.
