import { useEffect, useState } from "react";

import {
    Pill,
    Hotel,
    ShoppingCart,
    ArrowUpRight,
    X,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Users,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

// ============================================================
// TYPES
// ============================================================

type Project = {
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    images: string[];
    github?: string;
    demo?: string;
    icon: typeof Pill;
};

// ============================================================
// PROJECT DATA
// ============================================================

const projects: Project[] = [
    // ========================================================
    // 1. PHARMACY
    // ========================================================

    {
        title: "Pharmacy Sales & Inventory System",

        description:
            "A pharmacy management system designed to handle sales, inventory, product batches, stock monitoring, and FIFO/FEFO inventory processes. The system helps pharmacy staff manage products, sales transactions, expiry dates, and daily operations.",

        technologies: [
            "PHP",
            "MySQL",
            "JavaScript",
            "Tailwind CSS",
        ],

        features: [
            "Admin and cashier authentication",
            "Product management",
            "Category management",
            "Supplier management",
            "Batch and expiry tracking",
            "FIFO inventory processing",
            "FEFO inventory processing",
            "Barcode scanning",
            "Sales transactions",
            "Stock monitoring",
            "Low-stock alerts",
            "Sales reports",
            "Thermal receipt printing",
        ],

        images: [
            "/assets/pharmacy-1.png",
            "/assets/pharmacy-2.png",
            "/assets/pharmacy-3.png",
        ],

        github:
            "https://github.com/BrighterTech01/PharmacyPOS",

        icon: Pill,
    },

    // ========================================================
    // 2. HOTEL
    // ========================================================

    {
        title: "Hotel Reservation System",

        description:
            "A web-based hotel reservation system for managing room availability, customer information, reservations, and booking processes. The system provides hotel staff with tools to manage rooms and reservations efficiently.",

        technologies: [
            "Laravel",
            "React",
            "TypeScript",
            "MySQL",
        ],

        features: [
            "Room management",
            "Room availability",
            "Customer management",
            "Reservation management",
            "Booking processing",
            "Reservation status tracking",
            "Customer information",
            "Booking history",
        ],

        images: [
            "/assets/hotel-1.png",
            "/assets/hotel-2.png",
            "/assets/hotel-3.png",
        ],

        github:
            "https://github.com/BrighterTech01/Hotel-Reservation-system",

        icon: Hotel,
    },

    // ========================================================
    // 3. ALUMNI
    // ========================================================

    {
        title: "Alumni System",

        description:
            "A web-based alumni management system designed to maintain alumni records, manage profiles, track graduates, organize alumni activities, and provide an efficient platform for connecting alumni with their school community.",

        technologies: [
            "PHP",
            "MySQL",
            "JavaScript",
            "Tailwind CSS",
        ],

        features: [
            "Alumni registration",
            "Alumni profile management",
            "Graduate records management",
            "Batch and year management",
            "Alumni directory",
            "Search and filtering",
            "Alumni status tracking",
            "Events and activities management",
            "Announcements",
            "Contact information management",
            "Alumni reports",
            "Admin dashboard",
        ],

        images: [
            "/assets/alumni-1.png",
            "/assets/alumni-2.png",
            "/assets/alumni-3.png",
        ],

        github:
            "https://github.com/BrighterTech01/AlumniWeb",

        icon: Users,
    },

    // ========================================================
    // 4. SHOES POS
    // ========================================================

    {
        title: "Shoes POS System",

        description:
            "A point-of-sale system designed for shoe businesses to manage products, sizes, inventory, sales transactions, and daily business operations.",

        technologies: [
            "Laravel",
            "React",
            "TypeScript",
            "MySQL",
            "ReactNative",
        ],

        features: [
            "Shoe product management",
            "Size management",
            "Product variations",
            "Inventory tracking",
            "POS transactions",
            "Sales management",
            "Stock monitoring",
            "Sales reports",
        ],

        images: [
            "/assets/shoesapp-1.png",
            "/assets/shoesapp-2.png",
            "/assets/shoesapp-3.png",
        ],

        github:
            "https://github.com/BrighterTech01/ShoesApp",

        icon: ShoppingCart,
    },
];

// ============================================================
// PROJECT CARD
// ============================================================

function ProjectCard({
    project,
    onClick,
}: {
    project: Project;
    onClick: () => void;
}) {
    const Icon = project.icon;

    return (
        <button
            type="button"
            onClick={onClick}
            className="
                group
                w-full
                cursor-pointer
                rounded-xl
                border
                border-gray-200
                bg-transparent
                p-5
                text-left
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-cyan-500/50
                hover:bg-gray-50
                hover:shadow-md
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-500/30
            "
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-cyan-50
                        "
                    >
                        <Icon className="h-5 w-5 text-cyan-600" />
                    </div>

                    <h3
                        className="
                            text-sm
                            font-semibold
                            leading-5
                            text-cyan-600
                            transition
                            group-hover:text-cyan-700
                        "
                    >
                        {project.title}
                    </h3>
                </div>

                <ArrowUpRight
                    className="
                        h-4
                        w-4
                        shrink-0
                        text-gray-400
                        transition-all
                        duration-200
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-cyan-600
                    "
                />
            </div>

            <p className="mt-4 line-clamp-4 text-sm leading-6 text-gray-600">
                {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                    <span
                        key={technology}
                        className="
                            rounded-full
                            border
                            border-gray-200
                            px-2.5
                            py-1
                            text-[11px]
                            font-medium
                            text-gray-600
                        "
                    >
                        {technology}
                    </span>
                ))}
            </div>

            <div
                className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    text-cyan-600
                "
            >
                View Project Details

                <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
        </button>
    );
}

// ============================================================
// PROJECT DETAILS MODAL
// ============================================================

function ProjectDetailsModal({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) {
    const [currentImage, setCurrentImage] = useState(0);

    // ========================================================
    // RESET IMAGE WHEN PROJECT CHANGES
    // ========================================================

    useEffect(() => {
        setCurrentImage(0);
    }, [project]);

    // ========================================================
    // NEXT IMAGE
    // ========================================================

    const nextImage = () => {
        if (project.images.length === 0) {
            return;
        }

        setCurrentImage((current) =>
            current >= project.images.length - 1
                ? 0
                : current + 1
        );
    };

    // ========================================================
    // PREVIOUS IMAGE
    // ========================================================

    const previousImage = () => {
        if (project.images.length === 0) {
            return;
        }

        setCurrentImage((current) =>
            current <= 0
                ? project.images.length - 1
                : current - 1
        );
    };

    // ========================================================
    // KEYBOARD CONTROLS
    // ========================================================

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
                return;
            }

            if (event.key === "ArrowRight") {
                nextImage();
            }

            if (event.key === "ArrowLeft") {
                previousImage();
            }
        };

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [project, onClose]);

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
                z-[60]
                flex
                items-center
                justify-center
                bg-black/60
                p-3
                backdrop-blur-sm
                sm:p-4
            "
            onClick={onClose}
        >
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
                        bg-white/95
                        text-gray-500
                        shadow-md
                        transition
                        hover:bg-red-50
                        hover:text-red-500
                    "
                    aria-label="Close project details"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* ==================================================
                    SCROLLABLE CONTENT
                ================================================== */}

                <div className="overflow-y-auto">

                    {/* ==================================================
                        MAIN IMAGE
                    ================================================== */}

                    {project.images.length > 0 ? (
                        <div className="relative bg-gray-100">

                            <div
                                className="
                                    aspect-video
                                    w-full
                                    overflow-hidden
                                "
                            >
                                <img
                                    src={
                                        project.images[
                                            currentImage
                                        ]
                                    }
                                    alt={`${project.title} screenshot ${
                                        currentImage + 1
                                    }`}
                                    className="
                                        h-full
                                        w-full
                                        object-contain
                                    "
                                    onError={(event) => {
                                        event.currentTarget.src =
                                            "/assets/placeholder.png";
                                    }}
                                />
                            </div>

                            {/* Navigation */}

                            {project.images.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={
                                            previousImage
                                        }
                                        className="
                                            absolute
                                            left-3
                                            top-1/2
                                            flex
                                            h-10
                                            w-10
                                            -translate-y-1/2
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-black/60
                                            text-white
                                            transition
                                            hover:bg-black
                                        "
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft className="h-5 w-5" />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={nextImage}
                                        className="
                                            absolute
                                            right-3
                                            top-1/2
                                            flex
                                            h-10
                                            w-10
                                            -translate-y-1/2
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-black/60
                                            text-white
                                            transition
                                            hover:bg-black
                                        "
                                        aria-label="Next image"
                                    >
                                        <ChevronRight className="h-5 w-5" />
                                    </button>

                                    {/* Counter */}

                                    <div
                                        className="
                                            absolute
                                            bottom-3
                                            left-1/2
                                            -translate-x-1/2
                                            rounded-full
                                            bg-black/70
                                            px-3
                                            py-1
                                            text-xs
                                            font-medium
                                            text-white
                                        "
                                    >
                                        {currentImage + 1} /{" "}
                                        {project.images.length}
                                    </div>
                                </>
                            )}
                        </div>
                    ) : (
                        <div
                            className="
                                flex
                                aspect-video
                                items-center
                                justify-center
                                bg-gray-100
                                text-sm
                                text-gray-400
                            "
                        >
                            No project screenshot available.
                        </div>
                    )}

                    {/* ==================================================
                        THUMBNAILS
                    ================================================== */}

                    {project.images.length > 1 && (
                        <div
                            className="
                                flex
                                gap-3
                                overflow-x-auto
                                border-b
                                border-gray-100
                                p-4
                            "
                        >
                            {project.images.map(
                                (image, index) => (
                                    <button
                                        key={`${image}-${index}`}
                                        type="button"
                                        onClick={() =>
                                            setCurrentImage(
                                                index
                                            )
                                        }
                                        className={`
                                            h-16
                                            w-24
                                            shrink-0
                                            overflow-hidden
                                            rounded-lg
                                            border-2
                                            transition
                                            ${
                                                currentImage ===
                                                index
                                                    ? "border-cyan-500"
                                                    : "border-transparent"
                                            }
                                        `}
                                        aria-label={`View screenshot ${
                                            index + 1
                                        }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`Thumbnail ${
                                                index + 1
                                            }`}
                                            className="
                                                h-full
                                                w-full
                                                object-cover
                                            "
                                            onError={(event) => {
                                                event.currentTarget.src =
                                                    "/assets/placeholder.png";
                                            }}
                                        />
                                    </button>
                                )
                            )}
                        </div>
                    )}

                    {/* ==================================================
                        PROJECT INFORMATION
                    ================================================== */}

                    <div className="p-6 md:p-8">

                        {/* Section Label */}

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
                                Project Details
                            </span>
                        </div>

                        {/* Title */}

                        <h2
                            className="
                                text-2xl
                                font-bold
                                text-gray-900
                                md:text-3xl
                            "
                        >
                            {project.title}
                        </h2>

                        {/* Description */}

                        <p
                            className="
                                mt-4
                                max-w-4xl
                                text-sm
                                leading-7
                                text-gray-600
                            "
                        >
                            {project.description}
                        </p>

                        {/* ==================================================
                            TECHNOLOGIES
                        ================================================== */}

                        <div className="mt-7">

                            <h3
                                className="
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                "
                            >
                                Technologies
                            </h3>

                            <div className="mt-3 flex flex-wrap gap-2">

                                {project.technologies.map(
                                    (technology) => (
                                        <span
                                            key={technology}
                                            className="
                                                rounded-full
                                                border
                                                border-cyan-100
                                                bg-cyan-50
                                                px-3
                                                py-1.5
                                                text-xs
                                                font-medium
                                                text-cyan-700
                                            "
                                        >
                                            {technology}
                                        </span>
                                    )
                                )}

                            </div>
                        </div>

                        {/* ==================================================
                            FEATURES
                        ================================================== */}

                        <div className="mt-7">

                            <h3
                                className="
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                "
                            >
                                Key Features
                            </h3>

                            <div
                                className="
                                    mt-3
                                    grid
                                    gap-3
                                    sm:grid-cols-2
                                "
                            >
                                {project.features.map(
                                    (feature) => (
                                        <div
                                            key={feature}
                                            className="
                                                flex
                                                items-start
                                                gap-3
                                                text-sm
                                                leading-6
                                                text-gray-600
                                            "
                                        >
                                            <span
                                                className="
                                                    mt-2
                                                    h-1.5
                                                    w-1.5
                                                    shrink-0
                                                    rounded-full
                                                    bg-cyan-500
                                                "
                                            />

                                            <span>
                                                {feature}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* ==================================================
                            GITHUB / DEMO
                        ================================================== */}

                        {(project.github ||
                            project.demo) && (
                            <div
                                className="
                                    mt-8
                                    flex
                                    flex-wrap
                                    gap-3
                                    border-t
                                    border-gray-100
                                    pt-6
                                "
                            >

                                {/* GitHub */}

                                {project.github && (
                                    <a
                                        href={
                                            project.github
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            bg-black
                                            px-5
                                            py-2.5
                                            text-sm
                                            font-medium
                                            text-white
                                            transition
                                            hover:bg-gray-800
                                        "
                                    >
                                        <FaGithub className="h-4 w-4" />

                                        View Source Code
                                    </a>
                                )}

                                {/* Demo */}

                                {project.demo && (
                                    <a
                                        href={
                                            project.demo
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-xl
                                            border
                                            border-gray-200
                                            px-5
                                            py-2.5
                                            text-sm
                                            font-medium
                                            text-gray-700
                                            transition
                                            hover:border-cyan-500
                                            hover:bg-cyan-50
                                            hover:text-cyan-700
                                        "
                                    >
                                        <ExternalLink className="h-4 w-4" />

                                        Live Demo
                                    </a>
                                )}
                            </div>
                        )}

                        {/* ==================================================
                            CLOSE
                        ================================================== */}

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
                                    hover:bg-gray-50
                                "
                            >
                                Close
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============================================================
// PROJECTS COMPONENT
// ============================================================

export default function Projects() {
    const [showAll, setShowAll] =
        useState(false);

    const [selectedProject, setSelectedProject] =
        useState<Project | null>(null);

    // ========================================================
    // SHOW FIRST 4
    // ========================================================

    const visibleProjects =
        projects.slice(0, 4);

    const remainingProjects =
        projects.slice(4);

    // ========================================================
    // OPEN PROJECT
    // ========================================================

    const openProject = (
        project: Project
    ) => {
        setShowAll(false);
        setSelectedProject(project);
    };

    // ========================================================
    // CLOSE PROJECT
    // ========================================================

    const closeProject = () => {
        setSelectedProject(null);
    };

    // ========================================================
    // CLOSE ALL
    // ========================================================

    const closeAllProjects = () => {
        setShowAll(false);
    };

    return (
        <section className="p-8 md:p-10">

            {/* ==================================================
                HEADER
            ================================================== */}

            <div className="mb-7">

                <div className="mb-3 flex items-center gap-3">

                    <span className="h-px w-8 bg-cyan-600" />

                    <span
                        className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-cyan-600
                        "
                    >
                        Projects
                    </span>

                </div>

                <h2
                    className="
                        text-2xl
                        font-bold
                        text-gray-900
                        md:text-3xl
                    "
                >
                    Featured Projects
                </h2>

                <p
                    className="
                        mt-2
                        max-w-2xl
                        text-sm
                        leading-6
                        text-gray-500
                    "
                >
                    A selection of systems and
                    applications I have designed
                    and developed.
                </p>

            </div>

            {/* ==================================================
                FEATURED PROJECTS
            ================================================== */}

            <div className="grid gap-4 md:grid-cols-2">

                {visibleProjects.map(
                    (project) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            onClick={() =>
                                openProject(project)
                            }
                        />
                    )
                )}

            </div>

            {/* ==================================================
                SEE MORE
            ================================================== */}

            {remainingProjects.length > 0 && (
                <div className="mt-6 flex justify-center">

                    <button
                        type="button"
                        onClick={() =>
                            setShowAll(true)
                        }
                        className="
                            rounded-xl
                            border
                            border-gray-200
                            px-5
                            py-2.5
                            text-sm
                            font-medium
                            text-gray-700
                            transition
                            hover:border-cyan-500
                            hover:bg-cyan-50
                            hover:text-cyan-700
                        "
                    >
                        See More Projects
                    </button>

                </div>
            )}

            {/* ==================================================
                ALL PROJECTS MODAL
            ================================================== */}

            {showAll && (
                <div
                    className="
                        fixed
                        inset-0
                        z-50
                        flex
                        items-center
                        justify-center
                        bg-black/50
                        p-4
                        backdrop-blur-sm
                    "
                    onClick={
                        closeAllProjects
                    }
                >

                    <div
                        className="
                            relative
                            max-h-[85vh]
                            w-full
                            max-w-4xl
                            overflow-y-auto
                            rounded-2xl
                            bg-white
                            p-6
                            shadow-2xl
                            md:p-8
                        "
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        {/* Close */}

                        <button
                            type="button"
                            onClick={
                                closeAllProjects
                            }
                            className="
                                absolute
                                right-4
                                top-4
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-gray-200
                                text-gray-500
                                transition
                                hover:bg-red-50
                                hover:text-red-500
                            "
                            aria-label="Close projects"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {/* Header */}

                        <div className="mb-6 pr-12">

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
                                    Projects
                                </span>

                            </div>

                            <h3
                                className="
                                    text-2xl
                                    font-semibold
                                    text-gray-900
                                "
                            >
                                More Projects
                            </h3>

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    text-gray-500
                                "
                            >
                                Other projects and
                                systems I have worked
                                on.
                            </p>

                        </div>

                        {/* Remaining Projects */}

                        <div className="grid gap-4 md:grid-cols-2">

                            {remainingProjects.map(
                                (project) => (
                                    <ProjectCard
                                        key={
                                            project.title
                                        }
                                        project={
                                            project
                                        }
                                        onClick={() =>
                                            openProject(
                                                project
                                            )
                                        }
                                    />
                                )
                            )}

                        </div>

                        {/* Close */}

                        <div className="mt-6 flex justify-end">

                            <button
                                type="button"
                                onClick={
                                    closeAllProjects
                                }
                                className="
                                    rounded-xl
                                    bg-black
                                    px-5
                                    py-2.5
                                    text-sm
                                    font-medium
                                    text-white
                                    transition
                                    hover:bg-cyan-600
                                "
                            >
                                Close
                            </button>

                        </div>

                    </div>
                </div>
            )}

            {/* ==================================================
                PROJECT DETAILS MODAL
            ================================================== */}

            {selectedProject && (
                <ProjectDetailsModal
                    project={
                        selectedProject
                    }
                    onClose={
                        closeProject
                    }
                />
            )}

        </section>
    );
}