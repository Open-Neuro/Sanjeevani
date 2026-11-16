import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function DemoModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        pharmacyName: "",
        phone: "",
        email: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const modalRef = useRef(null);
    const contentRef = useRef(null);
    const formRef = useRef(null);
    const nameInputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            gsap.fromTo(modalRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.5, ease: "power2.out" }
            );
            gsap.fromTo(contentRef.current,
                { opacity: 0, y: 60, scale: 0.92 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    delay: 0.15,
                    onComplete: () => {
                        nameInputRef.current?.focus();
                    }
                }
            );
            gsap.fromTo(".demo-form-field",
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, delay: 0.3, ease: "power2.out" }
            );
            gsap.fromTo(".demo-submit-btn",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, delay: 0.6, ease: "power2.out" }
            );
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            gsap.to(formRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.4,
                ease: "power2.in",
                onComplete: () => {
                    setSubmitted(true);
                    setIsSubmitting(false);
                }
            });
        }, 800);
    };

    const handleClose = () => {
        gsap.to(contentRef.current, {
            opacity: 0,
            y: 40,
            scale: 0.95,
            duration: 0.35,
            ease: "power2.in"
        });
        gsap.to(modalRef.current, {
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
            onComplete: onClose
        });
    };

    if (!isOpen) return null;

    return (
        <div
            ref={modalRef}
            className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto p-2 md:p-4"
            onClick={handleClose}
            style={{
                background: "rgba(10, 17, 3, 0.9)",
                backdropFilter: "blur(12px)",
                paddingTop: "max(10px, 2vh)",
                paddingBottom: "max(10px, 2vh)"
            }}
        >
            {/* Animated background glow */}
            <div style={{
                position: "absolute",
                width: "600px",
                height: "600px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(183, 194, 94, 0.15) 0%, transparent 70%)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none"
            }} />
            <div style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(112, 127, 72, 0.2) 0%, transparent 70%)",
                top: "30%",
                left: "20%",
                pointerEvents: "none"
            }} />

            <div
                ref={contentRef}
                className="relative w-full"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="demo-modal-title"
                style={{
                    maxWidth: "700px",
                    maxHeight: "calc(100vh - 20px)",
                    background: "linear-gradient(160deg, rgba(43, 54, 24, 0.95) 0%, rgba(13, 20, 8, 0.98) 100%)",
                    borderRadius: "24px",
                    border: "1px solid rgba(183, 194, 94, 0.25)",
                    boxShadow: "0 40px 100px rgba(0, 0, 0, 0.6), 0 0 60px rgba(183, 194, 94, 0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
                    overflowY: "auto",
                    margin: "auto 0"
                }}
            >
                {/* Top decorative bar */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, transparent, rgba(183, 194, 94, 0.6), transparent)"
                }} />

                <button
                    onClick={handleClose}
                    aria-label="Close dialog"
                    style={{
                        position: "absolute",
                        top: "18px",
                        right: "18px",
                        background: "rgba(244, 237, 230, 0.08)",
                        border: "1px solid rgba(244, 237, 230, 0.12)",
                        borderRadius: "12px",
                        width: "36px",
                        height: "36px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(244, 237, 230, 0.6)",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        zIndex: 10
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(244, 237, 230, 0.15)";
                        e.currentTarget.style.color = "#f4ede6";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(244, 237, 230, 0.08)";
                        e.currentTarget.style.color = "rgba(244, 237, 230, 0.6)";
                    }}
                >
                    <i className="ri-close-line" />
                </button>

                <div className="p-4 md:p-6" ref={formRef}>
                    {/* Logo/Brand */}
                    <div className="demo-form-field mb-2">
                        <div style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            marginBottom: "8px"
                        }}>
                            <div style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "9px",
                                background: "linear-gradient(135deg, #b7c25e 0%, #8E956C 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 15px rgba(183, 194, 94, 0.3)"
                            }}>
                                <i className="ri-medicine-bag-line" style={{ color: "#0a1103", fontSize: "1.1rem" }} />
                            </div>
                            <span style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 800,
                                fontSize: "1rem",
                                color: "#b7c25e",
                                letterSpacing: "0.02em"
                            }}>
                                Sanjeevani
                            </span>
                        </div>
                    </div>

                    <div className="demo-form-field">
                        <h2
                            id="demo-modal-title"
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 900,
                                fontSize: "clamp(1.2rem, 3vw, 1.65rem)",
                                color: "#f4ede6",
                                marginBottom: "4px",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.2
                            }}
                        >
                            Book Your Free Demo
                        </h2>
                    </div>

                    <div className="demo-form-field">
                        <p style={{
                            color: "rgba(244, 237, 230, 0.55)",
                            fontSize: "0.82rem",
                            marginBottom: "14px",
                            fontFamily: "'Outfit', sans-serif",
                            lineHeight: 1.4
                        }}>
                            See how Sanjeevani can transform your pharmacy. Get a personalized walkthrough with our team.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div className="demo-form-field demo-input-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                            <div>
                                <label
                                    htmlFor="demo-name"
                                    style={{
                                        display: "block",
                                        color: "rgba(244, 237, 230, 0.7)",
                                        fontSize: "0.68rem",
                                        fontWeight: 600,
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                        marginBottom: "6px",
                                        fontFamily: "'Outfit', sans-serif"
                                    }}
                                >
                                    Name
                                </label>
                                <input
                                    id="demo-name"
                                    ref={nameInputRef}
                                    type="text"
                                    className="demo-input"
                                    required
                                    aria-required="true"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="demo-pharmacy"
                                    style={{
                                        display: "block",
                                        color: "rgba(244, 237, 230, 0.7)",
                                        fontSize: "0.68rem",
                                        fontWeight: 600,
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                        marginBottom: "6px",
                                        fontFamily: "'Outfit', sans-serif"
                                    }}
                                >
                                    Pharmacy Name
                                </label>
                                <input
                                    id="demo-pharmacy"
                                    type="text"
                                    className="demo-input"
                                    required
                                    aria-required="true"
                                    value={formData.pharmacyName}
                                    onChange={(e) => setFormData({ ...formData, pharmacyName: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="demo-form-field">
                            <label
                                htmlFor="demo-phone"
                                style={{
                                    display: "block",
                                    color: "rgba(244, 237, 230, 0.7)",
                                    fontSize: "0.68rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    marginBottom: "6px",
                                    fontFamily: "'Outfit', sans-serif"
                                }}
                            >
                                Phone Number
                            </label>
                            <input
                                id="demo-phone"
                                type="tel"
                                className="demo-input"
                                required
                                aria-required="true"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>

                        <div className="demo-form-field">
                            <label
                                htmlFor="demo-email"
                                style={{
                                    display: "block",
                                    color: "rgba(244, 237, 230, 0.7)",
                                    fontSize: "0.68rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    marginBottom: "6px",
                                    fontFamily: "'Outfit', sans-serif"
                                }}
                            >
                                Email
                            </label>
                            <input
                                id="demo-email"
                                type="email"
                                className="demo-input"
                                required
                                aria-required="true"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="demo-form-field">
                            <label
                                htmlFor="demo-message"
                                style={{
                                    display: "block",
                                    color: "rgba(244, 237, 230, 0.7)",
      
                @media (max-width: 640px) {
                    .demo-input-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
}
