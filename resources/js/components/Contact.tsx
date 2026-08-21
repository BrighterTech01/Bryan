import {
    Mail,
    Phone,
} from "lucide-react";

import {
    FaGithub,
    FaInstagram,
} from "react-icons/fa";

// ============================================================
// CONTACT COMPONENT
// ============================================================

export default function Contact() {
    const phoneNumber = "09203921783";
    const email = "jayzero177@gmail.com";
    const github = "https://github.com/BrighterTech01";

    return (
        <div className="p-8 md:p-10">

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
                        Contact
                    </span>

                </div>

                <h3
                    className="
                        text-2xl
                        font-semibold
                        tracking-tight
                        text-cyan-600
                        md:text-3xl
                    "
                >
                    Let&apos;s Work Together
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
                    I am currently available for job opportunities,
                    freelance projects, and collaborations.
                </p>

            </div>


            {/* ==================================================
                AVAILABILITY
            ================================================== */}

            <div className="mb-6 flex items-center gap-3">

                <span className="relative flex h-3 w-3">

                    <span
                        className="
                            absolute
                            inline-flex
                            h-full
                            w-full
                            animate-ping
                            rounded-full
                            bg-cyan-400
                            opacity-75
                        "
                    />

                    <span
                        className="
                            relative
                            inline-flex
                            h-3
                            w-3
                            rounded-full
                            bg-cyan-600
                        "
                    />

                </span>

                <span className="text-sm font-semibold text-gray-800">
                    Available for opportunities
                </span>

            </div>


            {/* ==================================================
                DESCRIPTION
            ================================================== */}

            <div
                className="
                    max-w-3xl
                    space-y-4
                    text-[15px]
                    leading-7
                    text-gray-600
                "
            >

                <p>
                    I am currently available for work opportunities,
                    freelance projects, internships, and collaborations.
                    I am interested in web development, UI/UX design,
                    software testing, and other technology-related
                    projects.
                </p>

                <p>
                    If you have a project, job opportunity, or idea you
                    would like to discuss, feel free to reach out through
                    any of my contact or social media accounts.
                </p>

            </div>


            {/* ==================================================
                CONTACT INFORMATION CARD
            ================================================== */}

            <div
                className="
                    mt-8
                    rounded-xl
                    border
                    border-gray-200
                    p-5
                "
            >

                <div className="mb-5">

                    <p
                        className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            text-cyan-600
                        "
                    >
                        Contact Information
                    </p>

                    <h4 className="mt-1 text-lg font-semibold text-black">
                        Get in touch
                    </h4>

                </div>


                <div className="grid gap-3 sm:grid-cols-3">

                    {/* ==================================================
                        PHONE
                    ================================================== */}

                    <a
                        href={`tel:${phoneNumber}`}
                        className="
                            group
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-gray-200
                            p-4
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:border-cyan-500/50
                            hover:bg-gray-50
                        "
                    >

                        <div
                            className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                bg-gray-50
                                transition-colors
                                group-hover:bg-cyan-50
                            "
                        >

                            <Phone
                                className="
                                    h-5
                                    w-5
                                    text-gray-500
                                    group-hover:text-cyan-600
                                "
                            />

                        </div>

                        <div className="min-w-0">

                            <p className="text-xs text-gray-400">
                                Phone
                            </p>

                            <p
                                className="
                                    truncate
                                    text-sm
                                    font-medium
                                    text-gray-800
                                "
                            >
                                {phoneNumber}
                            </p>

                        </div>

                    </a>


                    {/* ==================================================
                        EMAIL
                    ================================================== */}

                    <a
                        href={`mailto:${email}`}
                        className="
                            group
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-gray-200
                            p-4
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:border-cyan-500/50
                            hover:bg-gray-50
                        "
                    >

                        <div
                            className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                bg-gray-50
                                transition-colors
                                group-hover:bg-cyan-50
                            "
                        >

                            <Mail
                                className="
                                    h-5
                                    w-5
                                    text-gray-500
                                    group-hover:text-cyan-600
                                "
                            />

                        </div>

                        <div className="min-w-0">

                            <p className="text-xs text-gray-400">
                                Email
                            </p>

                            <p
                                className="
                                    truncate
                                    text-sm
                                    font-medium
                                    text-gray-800
                                "
                            >
                                {email}
                            </p>

                        </div>

                    </a>


                    {/* ==================================================
                        GITHUB
                    ================================================== */}

                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-gray-200
                            p-4
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:border-cyan-500/50
                            hover:bg-gray-50
                        "
                    >

                        <div
                            className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                bg-gray-50
                                transition-colors
                                group-hover:bg-cyan-50
                            "
                        >

                            <FaGithub
                                className="
                                    h-5
                                    w-5
                                    text-gray-500
                                    group-hover:text-cyan-600
                                "
                            />

                        </div>

                        <div className="min-w-0">

                            <p className="text-xs text-gray-400">
                                GitHub
                            </p>

                            <p
                                className="
                                    truncate
                                    text-sm
                                    font-medium
                                    text-gray-800
                                "
                            >
                                @BrighterTech01
                            </p>

                        </div>

                    </a>

                </div>

            </div>


            {/* ==================================================
                SOCIAL LINKS
            ================================================== */}

           

          


        </div>
    );
}