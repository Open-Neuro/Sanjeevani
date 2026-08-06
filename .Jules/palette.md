# Palette's UX & Accessibility Journal - Sanjeevani Care

## 2025-05-14 - [Focus Management in GSAP Modals]
**Learning:** For modals using GSAP entrance animations, triggering auto-focus on the first input via GSAP's `onComplete` callback is more reliable than a simple `setTimeout`, as it ensures the element is fully visible and ready before receiving focus.
**Action:** Always use `onComplete` in GSAP transitions to trigger focus management or other post-animation interactions.

## 2025-05-14 - [Modal Accessibility Standards]
**Learning:** Proper modal accessibility requires more than just a backdrop. It must implement `role="dialog"`, `aria-modal="true"`, and be linked to a title via `aria-labelledby` for screen readers to correctly interpret the context change.
**Action:** Implement these four ARIA attributes as a baseline for all new modal components.

## 2025-05-14 - [Explicit vs Implicit Requirements]
**Learning:** Even if the `required` HTML attribute is present, screen readers benefit from explicit `aria-required="true"` to ensure the mandatory nature of the field is announced clearly across all assistive technologies.
**Action:** Pair `required` with `aria-required="true"` on all critical form inputs.

## 2025-05-14 - [Form Accessibility: Label Association]
**Learning:** For screen readers to correctly identify the purpose of an input, it must be explicitly associated with its label using `htmlFor` and `id` attributes. Implicit wrapping or just placing them near each other is insufficient.
**Action:** Always use `htmlFor` on labels and matching `id` on inputs.
