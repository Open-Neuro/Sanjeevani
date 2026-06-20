## 2025-05-14 - [Focus Management with GSAP Animations]
**Learning:** For components with GSAP entrance animations, synchronizing auto-focus on interactive elements using GSAP's `onComplete` callback is more reliable than standard `useEffect` or timeouts. This ensures focus is set only after the element is visually present and stable.
**Action:** Always use GSAP's `onComplete` hook for managing focus in animated modals or sidebars.

## 2025-05-14 - [Submission Feedback in Modals]
**Learning:** In high-fidelity immersive UIs, users expect immediate and clear feedback for async operations like form submissions. Adding a "loading" state with a spinner and disabling the button prevents duplicate submissions and aligns the interaction with the overall polished feel.
**Action:** Implement loading states for all form submission buttons, providing both visual (spinner) and behavioral (disabled) feedback.
