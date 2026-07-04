## 2025-05-14 - [Focus Management in GSAP Modals]
**Learning:** For components with GSAP entrance animations, using `useEffect` or standard React lifecycle hooks for auto-focusing elements often fails because the element may be hidden or still animating (e.g., `scale: 0` or `opacity: 0`).
**Action:** Synchronize focus management with GSAP's `onComplete` callback in the entrance animation to ensure the element is fully visible and ready to receive focus.

## 2025-05-14 - [Simulated Loading for Micro-UX]
**Learning:** Instantaneous form submissions on high-fidelity UIs can feel jarring or like a bug (did it really send?).
**Action:** Implement a brief (e.g., 800ms) simulated network delay with a disabled 'loading' button state to provide clear visual feedback and prevent duplicate submissions.
