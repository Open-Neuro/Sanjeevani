## 2025-05-15 - Synchronizing Focus with Entrance Animations
**Learning:** For components with GSAP entrance animations (like modals), using standard `autoFocus` or immediate `useEffect` focus can result in focus being lost or occurring before the element is visible/stable, leading to a jarring experience for screen reader users.
**Action:** Use GSAP's `onComplete` callback to trigger `.focus()` on the primary interactive element only after the entrance animation has finished.

## 2025-05-15 - Explicit ARIA Requirements
**Learning:** While the HTML `required` attribute provides validation, screen readers sometimes benefit from the explicit `aria-required="true"` attribute to announce field requirements more reliably across different browser/SR combinations.
**Action:** Always include `aria-required="true"` on mandatory input fields alongside the standard `required` attribute.

## 2025-05-15 - Managing Off-screen Accessibility
**Learning:** Elements animated off-screen using `transform: translateX(-100%)` (like sidebars) remain in the DOM and may still be discoverable by screen readers or keyboard navigation if not properly hidden.
**Action:** Toggle `visibility: hidden` and `aria-hidden="true"` on off-screen containers to ensure they are completely ignored by assistive technologies when not active.
