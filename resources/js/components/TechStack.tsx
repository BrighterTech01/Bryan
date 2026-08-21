import { useState } from "react";

import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
    type DragEndEvent,
} from "@dnd-kit/core";

import {
    arrayMove,
    SortableContext,
    useSortable,
    horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiHtml5,
    SiTailwindcss,
    SiPhp,
    SiLaravel,
    SiMysql,
    SiGit,
    SiGithub,
    SiFigma,
    SiCanvas,
} from "react-icons/si";

import {
    TestTube,
    MonitorCheck,
    Video,
    PenTool,
} from "lucide-react";

import { FaBullhorn } from "react-icons/fa";

// ============================================================
// TYPES
// ============================================================

type Skill = {
    name: string;
    icon: any;
    color: string;
};

// ============================================================
// SKILLS
// ============================================================

const frontend: Skill[] = [
    {
        name: "React",
        icon: SiReact,
        color: "text-cyan-500",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-600",
    },
    {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-500",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-500",
    },
    {
        name: "HTML5",
        icon: SiHtml5,
        color: "text-orange-600",
    },
];

const backend: Skill[] = [
    {
        name: "Laravel",
        icon: SiLaravel,
        color: "text-red-600",
    },
    {
        name: "PHP",
        icon: SiPhp,
        color: "text-indigo-500",
    },
    {
        name: "MariaDB / MySQL",
        icon: SiMysql,
        color: "text-blue-600",
    },
];

const testingQA: Skill[] = [
    {
        name: "Playwright",
        icon: MonitorCheck,
        color: "text-green-600",
    },
    {
        name: "QA Testing",
        icon: TestTube,
        color: "text-purple-600",
    },
];

const tools: Skill[] = [
    {
        name: "Git",
        icon: SiGit,
        color: "text-orange-600",
    },
    {
        name: "GitHub",
        icon: SiGithub,
        color: "text-gray-900",
    },
];

const uiux: Skill[] = [
    {
        name: "UI / UX",
        icon: PenTool,
        color: "text-pink-500",
    },
    {
        name: "Figma",
        icon: SiFigma,
        color: "text-purple-600",
    },
    {
        name: "Canva",
        icon: SiCanvas,
        color: "text-cyan-500",
    },
];

const contentMarketing: Skill[] = [
    {
        name: "CapCut",
        icon: Video,
        color: "text-gray-900",
    },
    {
        name: "Marketing",
        icon: FaBullhorn,
        color: "text-pink-600",
    },
];

// ============================================================
// SORTABLE SKILL
// ============================================================

function SortableSkill({
    skill,
}: {
    skill: Skill;
}) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: skill.name,
    });

    const Icon = skill.icon;

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 50 : undefined,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`
                flex
                cursor-grab
                select-none
                items-center
                gap-2
                text-sm
                text-gray-700
                transition-all
                duration-200
                active:cursor-grabbing
                hover:text-cyan-600
                ${
                    isDragging
                        ? "scale-105 text-cyan-600"
                        : ""
                }
            `}
        >
            <Icon
                className={`
                    h-4
                    w-4
                    shrink-0
                    ${skill.color}
                `}
            />

            <span>{skill.name}</span>
        </div>
    );
}

// ============================================================
// SKILL GROUP
// ============================================================

function SkillGroup({
    title,
    skills,
    setSkills,
}: {
    title: string;
    skills: Skill[];
    setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
}) {
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        })
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (!over || active.id === over.id) {
            return;
        }

        setSkills((items) => {
            const oldIndex = items.findIndex(
                (item) => item.name === active.id
            );

            const newIndex = items.findIndex(
                (item) => item.name === over.id
            );

            if (oldIndex === -1 || newIndex === -1) {
                return items;
            }

            return arrayMove(
                items,
                oldIndex,
                newIndex
            );
        });
    }

    return (
        <div className="mb-6 last:mb-0">
            {/* Group Title */}

            <h3
                className="
                    mb-3
                    text-sm
                    font-semibold
                    text-gray-900
                "
            >
                {title}
            </h3>

            {/* Skills */}

            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={skills.map(
                        (skill) => skill.name
                    )}
                    strategy={
                        horizontalListSortingStrategy
                    }
                >
                    <div
                        className="
                            border-l-4
                            border-gray-300
                            pl-5
                        "
                    >
                        <div className="flex flex-wrap gap-x-2 gap-y-2">
                            {skills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center"
                                >
                                    <SortableSkill
                                        skill={skill}
                                    />

                                    {index <
                                        skills.length -
                                            1 && (
                                        <span className="ml-2 text-gray-400">
                                            ·
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </SortableContext>
            </DndContext>
        </div>
    );
}

// ============================================================
// TECH STACK
// ============================================================

export default function TechStack() {
    const [frontendSkills, setFrontendSkills] =
        useState(frontend);

    const [backendSkills, setBackendSkills] =
        useState(backend);

    const [testingSkills, setTestingSkills] =
        useState(testingQA);

    const [toolSkills, setToolSkills] =
        useState(tools);

    const [uiuxSkills, setUiuxSkills] =
        useState(uiux);

    const [contentSkills, setContentSkills] =
        useState(contentMarketing);

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
                        My Skills
                    </span>
                </div>

                <p
                    className="
                        mt-2
                        max-w-2xl
                        text-sm
                        leading-6
                        text-gray-500
                    "
                >
                    Technologies and tools I use for
                    development, testing, design,
                    content creation, and marketing.
                </p>
            </div>

            {/* ==================================================
                SKILLS
            ================================================== */}

            <div className="max-w-4xl">
                <SkillGroup
                    title="Frontend"
                    skills={frontendSkills}
                    setSkills={setFrontendSkills}
                />

                <SkillGroup
                    title="Backend"
                    skills={backendSkills}
                    setSkills={setBackendSkills}
                />

                <SkillGroup
                    title="Testing & QA"
                    skills={testingSkills}
                    setSkills={setTestingSkills}
                />

                <SkillGroup
                    title="Tools & Version Control"
                    skills={toolSkills}
                    setSkills={setToolSkills}
                />

                <SkillGroup
                    title="UI / UX & Design"
                    skills={uiuxSkills}
                    setSkills={setUiuxSkills}
                />

                <SkillGroup
                    title="Content & Marketing"
                    skills={contentSkills}
                    setSkills={setContentSkills}
                />
            </div>
        </section>
    );
}