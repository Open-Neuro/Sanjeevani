## 2025-05-15 - [Modal Focus Management & Accessibility]
**Learning:** For components with GSAP entrance animations, focus management should be synchronized with the animation's `onComplete` callback. This prevents the "focus jump" where the focus ring appears before the element is fully visible or in its final position. Additionally, mandatory form fields should always include `aria-required="true"` even if the `required` attribute is present for better screen reader compatibility.

**Action:** Always use `useRef` for focus targets in animated modals and trigger `.focus()` within the entrance animation's completion hook.

## 2025-05-15 - [Sticky Navbar Architecture]
**Learning:** In a landing page with complex pinned animations (like GSAP ScrollTrigger), the Navbar should be rendered at the highest layout level (e.g., `App.jsx`) to ensure it remains persistent and isn't affected by section-specific transforms or pinning.

**Action:** Move navigation elements to `App.jsx` and pass state/callbacks down only when necessary, or manage modal/sidebar state at the root.
