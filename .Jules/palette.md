## 2025-05-14 - [Modal Accessibility and Focus Management]
**Learning:** For modals using GSAP entrance animations, triggering auto-focus on the first input via the `onComplete` callback is a reliable pattern to ensure the keyboard focus is moved correctly after the transition finish, improving screen reader and keyboard-only experiences.
**Action:** Always implement `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` for modals, and use `useRef` + `onComplete` (for GSAP) or `useEffect` (for static modals) to manage initial focus.
