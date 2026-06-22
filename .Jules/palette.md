## 2025-05-14 - Modal Focus Management with GSAP
**Learning:** When using GSAP for entrance animations on modals, using `onComplete` to focus the first input ensures the focus doesn't trigger before the element is visually positioned, providing a smoother transition for keyboard users.
**Action:** Always use GSAP's `onComplete` callback to synchronize auto-focus with the end of entrance animations.

## 2025-05-14 - Simulated Network Delay for UX Perception
**Learning:** Immediate transitions from form submission to success states can feel jarring or "too fast" for users to trust. Adding a small (800ms) artificial delay with a loading state makes the process feel more substantial and credible.
**Action:** Include a 'Processing...' state with a minimum duration in high-fidelity forms to improve perceived reliability.
