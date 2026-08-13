## 2025-02-18 - Modal Accessibility & Focus Sync in GSAP Animations

**Learning:** When using modal components that feature entrance animations (like GSAP's `fromTo` transforms), standard React synchronous focus on mount doesn't always register correctly because the element might still be hidden or moving. Synchronizing auto-focus to trigger exactly in GSAP's `onComplete` callback ensures a smooth, non-jarring user experience and reliable screen reader announcement. Additionally, to avoid duplicate submissions, wrapping asynchronous form actions with an intermediate submitting state and a simulated high-fidelity network delay (e.g., 800ms) gives clear loading feedback to the user.

**Action:**
1. Use `useRef` to target the first interactive form field (e.g., the name input).
2. Attach the `onComplete` parameter inside the GSAP animation configuration object to invoke `.focus()` on the reference element once the entrance finishes.
3. For modal layouts, always apply the correct interactive role roles (`role="dialog"`, `aria-modal="true"`, `aria-labelledby="[id]"`), ensure clear label-input associations using `htmlFor` and `id`, specify `aria-required="true"` on mandatory fields, and add visual/textual loading states with disabled buttons.
