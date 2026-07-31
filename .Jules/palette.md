# Palette Journal

## 2025-02-23 - Enhancing Accessibility and Focus Management in Animated Modals
**Learning:** For components with GSAP entrance animations, auto-focus must be synchronized using the GSAP `onComplete` callback rather than React's direct `useEffect` or timeouts. This ensures focus is set precisely when the elements become interactive and visible. Additionally, explicitly associating form labels via `htmlFor`/`id` and declaring `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` ensures high fidelity screen reader compliance.
**Action:** Always use the GSAP `onComplete` hook combined with React `useRef` (rather than `document.getElementById`) to target elements for focus actions post-animation. Add aria-required and explicit label mapping across all user-facing forms.
