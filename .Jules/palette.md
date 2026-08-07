# Palette's UX & Accessibility Journal

## 2025-02-18 - DemoModal Focus Management and Form Accessibility
**Learning:** For interactive modals with GSAP entrance animations, synchronous 'onComplete' focus management provides precise timing for screen readers and auto-focusing form elements without race conditions. Additionally, associating labels and inputs with specific IDs ('demo-name', etc.) and using aria-labelledby with 'demo-modal-title' significantly enhances structural accessibility.
**Action:** Always coordinate focus actions inside GSAP 'onComplete' hooks rather than generic setTimeout delays, and strictly associate all form inputs with explicit matching labels and ARIA descriptors.
