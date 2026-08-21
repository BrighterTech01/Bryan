import { useEffect, useState } from "react";

import {
    Award,
    ShieldCheck,
    Video,
    X,
    Maximize2,
} from "lucide-react";

// ============================================================
// TYPES
// ============================================================

type Certificate = {
    title: string;
    provider: string;
    description: string;
    image: string;
    icon: typeof Award;
};

// ============================================================
// CERTIFICATE DATA
// ============================================================

const certificates: Certificate[] = [
    {
        title: "OJT Training — Certificate of Completion",
        provider: "Grafiknine Inc. | 2026",
        description:
            "Certificate of completion for On-the-Job Training (OJT) at Grafiknine Inc.",
        image: "/assets/certificate-ojt.png",
        icon: Award,
    },

    {
        title: "CyberConnect Capture the Flag (CTF) Training & Challenge",
        provider: "DICT | 2025",
        description:
            "Training and challenge focused on cybersecurity concepts and Capture the Flag activities.",
        image: "/assets/certificate-ctf.png",
        icon: ShieldCheck,
    },

    {
        title: "Introduction to Content Creation",
        provider: "February 9, 2026",
        description:
            "Training focused on the fundamentals and practices of content creation.",
        image: "/assets/certificate-content-creation.png",
        icon: Video,
    },
];

// ============================================================
// CERTIFICATE MODAL
// ============================================================

function CertificateModal({
    certificate,
    onClose,
}: {
    certificate: Certificate;
    onClose: () => void;
}) {
    // ========================================================
    // ESC KEY
    // ========================================================

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [onClose]);

    // ========================================================
    // PREVENT BODY SCROLL
    // ========================================================

    useEffect(() => {
        const originalOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow =
                originalOverflow;
        };
    }, []);

    return (
        <div
            className="
                fixed
                inset-0
                z-[70]
                flex
                items-center
                justify-center
                bg-black/70
                p-3
                backdrop-blur-sm
                sm:p-5
            "
            onClick={onClose}
        >
            {/* ==================================================
                MODAL
            ================================================== */}

            <div
                className="
                    relative
                    flex
                    max-h-[95vh]
                    w-full
                    max-w-5xl
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-2xl
                "
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                {/* ==================================================
                    CLOSE BUTTON
                ================================================== */}

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close certificate"
                    className="
                        absolute
                        right-3
                        top-3
                        z-30
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-gray-200
                        bg-white
                        text-gray-500
                        shadow-md
                        transition
                        hover:bg-red-50
                        hover:text-red-500
                    "
                >
                    <X className="h-5 w-5" />
                </button>

                {/* ==================================================
                    CERTIFICATE IMAGE
                ================================================== */}

                <div
                    className="
                        flex
                        max-h-[75vh]
                        min-h-[300px]
                        items-center
                        justify-center
                        overflow-auto
                        bg-gray-100
                        p-4
                        sm:p-8
                    "
                >
                    <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="
                            max-h-[70vh]
                            max-w-full
                            rounded-lg
                            object-contain
                            shadow-xl
                        "
                    />
                </div>

                {/* ==================================================
                    INFORMATION
                ================================================== */}

                <div
                    className="
                        max-h-[25vh]
                        overflow-y-auto
                        border-t
                        border-gray-100
                        bg-white
                        p-5
                        sm:p-7
                    "
                >
                    {/* Label */}

                    <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-7 bg-cyan-600" />

                        <span
                            className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-cyan-600
                            "
                        >
                            Certificate
                        </span>
                    </div>

                    {/* Title */}

                    <h2
                        className="
                            pr-8
                            text-xl
                            font-bold
                            text-gray-900
                            sm:text-2xl
                        "
                    >
                        {certificate.title}
                    </h2>

                    {/* Provider */}

                    <p
                        className="
                            mt-2
                            text-sm
                            font-medium
                            text-cyan-600
                        "
                    >
                        {certificate.provider}
                    </p>

                    {/* Description */}

                    <p
                        className="
                            mt-3
                            max-w-3xl
                            text-sm
                            leading-6
                            text-gray-600
                        "
                    >
                        {certificate.description}
                    </p>

                    {/* Close */}

                    <div className="mt-5 flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                rounded-xl
                                border
                                border-gray-200
                                px-5
                                py-2.5
                                text-sm
                                font-medium
                                text-gray-600
                                transition
                                hover:border-cyan-500
                                hover:bg-cyan-50
                                hover:text-cyan-700
                            "
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================
// CERTIFICATES COMPONENT
// ============================================================

export default function Certificates() {
    const [selectedCertificate, setSelectedCertificate] =
        useState<Certificate | null>(null);

    // ========================================================
    // OPEN CERTIFICATE
    // ========================================================

    const openCertificate = (
        certificate: Certificate
    ) => {
        setSelectedCertificate(certificate);
    };

    // ========================================================
    // CLOSE CERTIFICATE
    // ========================================================

    const closeCertificate = () => {
        setSelectedCertificate(null);
    };

    return (
        <>
            {/* ==================================================
                CERTIFICATES SECTION
            ================================================== */}

            <section
                id="certificates"
                className="
                    rounded-2xl
                    border
                    border-gray-200
                    bg-transparent
                    p-7
                "
            >
                {/* ==================================================
                    HEADER
                ================================================== */}

                <div className="mb-6">
                    <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-6 bg-cyan-600" />

                        <span
                            className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-cyan-600
                            "
                        >
                            Credentials
                        </span>
                    </div>

                    <h3
                        className="
                            text-xl
                            font-semibold
                            text-cyan-600
                        "
                    >
                        Certificates
                    </h3>

                    <p
                        className="
                            mt-2
                            max-w-2xl
                            text-sm
                            leading-6
                            text-gray-500
                        "
                    >
                        Training, certifications, and
                        professional development credentials.
                    </p>
                </div>

                {/* ==================================================
                    CERTIFICATE LIST
                ================================================== */}

                <div className="space-y-4">
                    {certificates.map((certificate) => {
                        const Icon = certificate.icon;

                        return (
                            <button
                                key={certificate.title}
                                type="button"
                                onClick={() =>
                                    openCertificate(
                                        certificate
                                    )
                                }
                                className="
                                    group
                                    w-full
                                    rounded-xl
                                    border
                                    border-gray-200
                                    bg-transparent
                                    p-4
                                    text-left
                                    transition-all
                                    duration-200
                                    hover:border-cyan-500/50
                                    hover:bg-gray-50
                                    hover:shadow-sm
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-cyan-500/30
                                "
                            >
                                <div className="flex items-start gap-3">
                                    {/* Icon */}

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-cyan-50
                                        "
                                    >
                                        <Icon
                                            className="
                                                h-5
                                                w-5
                                                text-cyan-600
                                            "
                                        />
                                    </div>

                                    {/* Content */}

                                    <div className="min-w-0 flex-1">
                                        <h4
                                            className="
                                                text-sm
                                                font-semibold
                                                leading-5
                                                text-cyan-600
                                                transition
                                                group-hover:text-cyan-700
                                            "
                                        >
                                            {certificate.title}
                                        </h4>

                                        <p
                                            className="
                                                mt-1
                                                text-xs
                                                text-gray-500
                                            "
                                        >
                                            {certificate.provider}
                                        </p>

                                        <p
                                            className="
                                                mt-2
                                                text-xs
                                                leading-5
                                                text-gray-500
                                            "
                                        >
                                            {
                                                certificate.description
                                            }
                                        </p>
                                    </div>

                                    {/* View Icon */}

                                    <div
                                        className="
                                            flex
                                            shrink-0
                                            items-center
                                            gap-1
                                            text-xs
                                            font-medium
                                            text-cyan-600
                                            opacity-70
                                            transition
                                            group-hover:opacity-100
                                        "
                                    >
                                        <Maximize2 className="h-4 w-4" />

                                        <span className="hidden sm:block">
                                            View
                                        </span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* ==================================================
                    NOTE
                ================================================== */}

                <div
                    className="
                        mt-5
                        border-t
                        border-gray-100
                        pt-4
                    "
                >
                    <p
                        className="
                            text-xs
                            leading-5
                            text-gray-400
                        "
                    >
                        Additional certifications and training
                        can be added as they are completed.
                    </p>
                </div>
            </section>

            {/* ==================================================
                CERTIFICATE MODAL
            ================================================== */}

            {selectedCertificate && (
                <CertificateModal
                    certificate={selectedCertificate}
                    onClose={closeCertificate}
                />
            )}
        </>
    );
}