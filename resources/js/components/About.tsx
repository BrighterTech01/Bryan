import TechStack from "./TechStack";

import Education from "./Education";
import Experience from "./Experience";
import Certificates from "./Certificates";
import Projects from "./Projects";
import Contact from "./Contact";

export default function About() {
    return (
        <section id="about" className="relative py-2">
            <div className="mx-auto max-w-7xl px-6">

                {/* =====================================================
                    MAIN 70 / 30 LAYOUT
                ===================================================== */}

                <div className="grid items-start gap-6 lg:grid-cols-[7fr_3fr]">

                    {/* =================================================
                        LEFT SIDE — 70%
                    ================================================= */}

                    <div
                        className="
                            overflow-hidden
                            rounded-2xl
                            border
                            border-gray-200
                            bg-transparent
                        "
                    >

                        {/* =================================================
                            EXPERIENCE — MOVED TO TOP
                        ================================================= */}

                        <Experience />

                        {/* =================================================
                            DIVIDER
                        ================================================= */}

                        <div className="mx-8 border-t border-gray-200 md:mx-10" />

                        {/* =================================================
                            TECH STACK
                        ================================================= */}

                        <TechStack />

                        {/* =================================================
                            DIVIDER
                        ================================================= */}

                        <div className="mx-8 border-t border-gray-200" />

                        {/* =================================================
                            PROJECTS — INSIDE MAIN CARD
                        ================================================= */}

                        <div id="projects">
                            <Projects />
                        </div>

                        {/* =================================================
                            DIVIDER
                        ================================================= */}

                        <div className="mx-8 border-t border-gray-200" />

                        {/* =================================================
                            CONTACT — INSIDE MAIN CARD
                        ================================================= */}

                        <Contact />

                    </div>


                    {/* =================================================
                        RIGHT SIDE — 30%
                    ================================================= */}

                    <div className="space-y-6">

                        {/* =================================================
                            ABOUT ME — MOVED HERE
                        ================================================= */}

                        <div
                            id="about"
                            className="
                                overflow-hidden
                                rounded-2xl
                                border
                                border-gray-200
                                bg-transparent
                            "
                        >

                            <div className="p-8">

                                {/* Header */}

                                <div className="mb-6">

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
                                            About Me
                                        </span>

                                    </div>

                                </div>


                                {/* Description */}

                                <div
                                    className="
                                        space-y-5
                                        text-[15px]
                                        leading-7
                                        text-gray-600
                                    "
                                >

                                    <p>
                                        I am a passionate and motivated
                                        Information Technology graduate with
                                        hands-on experience in web application
                                        development using Laravel, React,
                                        TypeScript, PHP, JavaScript, and
                                        MariaDB.
                                    </p>

                                   


                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            CORE FOCUS
                        ================================================= */}

                       


                        {/* =================================================
                            EDUCATION
                        ================================================= */}

                        <Education />


                        {/* =================================================
                            CERTIFICATES
                        ================================================= */}

                        <Certificates />

                    </div>

                </div>

            </div>
        </section>
    );
}