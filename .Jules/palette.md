# Palette's Journal

## 2025-02-14 - [Accessible Forms and Global Action Consistency]
**Learning:** In immersive, animation-heavy React apps, core actions (like "Book a Demo") are often scattered across multiple components but rarely unified in their implementation. Ensuring that all "Contact" or "CTA" triggers point to a single, highly accessible modal improves both the UX flow and accessibility compliance without disrupting the cinematic experience. Modal accessibility requires not just roles and labels, but also explicit association of labels with inputs and marking required fields for screen readers.

**Action:** Always check for duplicate/fragmented CTA triggers and unify them under a single prop-driven pattern. Ensure every modal implemented follows the `role="dialog"` + `aria-modal="true"` + `aria-labelledby` pattern.
