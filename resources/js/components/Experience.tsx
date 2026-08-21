import { useState } from 'react';
import { BriefcaseBusiness, X, ChevronRight } from 'lucide-react';

const experiences = [
    {
        role: 'IT Intern / QA Tester',
        company: 'Internship Experience',
        description:
            'Performed Quality Assurance testing, identified and reported system bugs, tested web applications, improved user interfaces, and assisted with system requirements and planning.',
        tags: ['QA Testing', 'Bug Reporting', 'UI Improvement'],
    },

    {
        role: 'Web Developer',
        company: 'Academic / Freelance Projects',
        description:
            'Developed responsive web applications using Laravel, React, TypeScript, PHP, JavaScript, and MariaDB. Worked on database design, system development, and frontend implementation.',
        tags: ['Laravel', 'React', 'TypeScript', 'MariaDB'],
    },

    
];

export default function Experience() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Only display 2 experiences in the main card
    const displayedExperiences = experiences.slice(0, 2);

    return (
        <>
            {/* =====================================================
                MAIN EXPERIENCE CARD
            ===================================================== */}

            <div
                id="experience"
                className="rounded-2xl border-gray-200 bg-transparent p-7"
            >
                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="mb-6">
                    <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-6 bg-cyan-600" />

                        <span className="text-xs font-semibold tracking-[0.2em] text-cyan-600 uppercase">
                            Experience
                        </span>
                    </div>

                    <h3 className="text-xl font-semibold text-cyan-600">
                        Professional Experience
                    </h3>
                </div>

                {/* =================================================
                    EXPERIENCE TIMELINE
                ================================================= */}

                <div className="relative">
                    {/* Timeline */}

                    <div className="absolute top-2 left-[7px] h-[calc(100%-8px)] w-px bg-gray-200" />

                    <div className="space-y-8">
                        {displayedExperiences.map((experience, index) => (
                            <div
                                key={`${experience.role}-${index}`}
                                className="relative flex gap-4"
                            >
                                {/* Timeline Dot */}

                                <div className="relative z-10 mt-1 h-4 w-4 shrink-0 rounded-full border-2 border-white bg-cyan-600 shadow-sm" />

                                {/* =================================================
                                        CONTENT
                                    ================================================= */}

                                <div className="min-w-0 flex-1">
                                    {/* Role */}

                                    <div className="flex items-start gap-3">
                                        <BriefcaseBusiness className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />

                                        <h4 className="text-sm leading-5 font-semibold text-cyan-600">
                                            {experience.role}
                                        </h4>
                                    </div>

                                    {/* Company */}

                                    <p className="mt-3 text-sm font-medium text-gray-700">
                                        {experience.company}
                                    </p>

                                    {/* Description */}

                                    <p className="mt-3 text-sm leading-6 text-gray-600">
                                        {experience.description}
                                    </p>

                                    {/* Tags */}

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {experience.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 transition-all duration-200 hover:border-cyan-500 hover:text-cyan-600"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* =================================================
                    SEE MORE BUTTON
                ================================================= */}

                {experiences.length > 2 && (
                    <div className="mt-8 flex justify-center">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="group flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-cyan-500 hover:bg-gray-50 hover:text-cyan-600"
                        >
                            See More
                            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </button>
                    </div>
                )}
            </div>

            {/* =====================================================
                EXPERIENCE MODAL
            ===================================================== */}

            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8 backdrop-blur-sm"
                    onClick={() => setIsModalOpen(false)}
                >
                    {/* =================================================
                        MODAL CARD
                    ================================================= */}

                    <div
                        className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* =================================================
                            MODAL HEADER
                        ================================================= */}

                        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5 md:px-8">
                            <div>
                                <div className="mb-2 flex items-center gap-3">
                                    <span className="h-px w-6 bg-cyan-600" />

                                    <span className="text-xs font-semibold tracking-[0.2em] text-cyan-600 uppercase">
                                        Experience
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold text-black">
                                    Professional Experience
                                </h3>
                            </div>

                            {/* Close */}

                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                aria-label="Close experience modal"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-200 hover:border-red-300 hover:bg-red-50 hover:text-red-500"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* =================================================
                            MODAL CONTENT
                        ================================================= */}

                        <div className="max-h-[calc(85vh-100px)] overflow-y-auto px-6 py-6 md:px-8">
                            <div className="relative">
                                {/* Timeline */}

                                <div className="absolute top-2 left-[7px] h-[calc(100%-8px)] w-px bg-gray-200" />

                                <div className="space-y-10">
                                    {experiences.map((experience, index) => (
                                        <div
                                            key={`${experience.role}-modal-${index}`}
                                            className="relative flex gap-4"
                                        >
                                            {/* Dot */}

                                            <div className="relative z-10 mt-1 h-4 w-4 shrink-0 rounded-full border-2 border-white bg-cyan-600 shadow-sm" />

                                            {/* Content */}

                                            <div className="min-w-0 flex-1">
                                                {/* Role */}

                                                <div className="flex items-start gap-3">
                                                    <BriefcaseBusiness className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />

                                                    <h4 className="text-base font-semibold text-black">
                                                        {experience.role}
                                                    </h4>
                                                </div>

                                                {/* Company */}

                                                <p className="mt-2 text-sm font-medium text-gray-700">
                                                    {experience.company}
                                                </p>

                                                {/* Description */}

                                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                                    {experience.description}
                                                </p>

                                                {/* Tags */}

                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    {experience.tags.map(
                                                        (tag) => (
                                                            <span
                                                                key={tag}
                                                                className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:border-cyan-500 hover:text-cyan-600"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
