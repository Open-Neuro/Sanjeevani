## 2025-05-14 - GSAP Focus Management in React Modals
**Learning:** When using GSAP for entrance animations in React modals, standard `autoFocus` attributes may fail if the element is not yet visible or fully rendered when the browser attempts to apply focus. Synchronizing focus via GSAP's `onComplete` callback ensures the field is interactive and visible before focus is applied.
**Action:** Use a `useRef` for the target input and trigger `.focus()` inside the GSAP `onComplete` or `onStart` (with appropriate delay) callback for a reliable user experience.
