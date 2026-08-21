import { GraduationCap } from "lucide-react";


export default function Education() {
    return (
        <div
            id="education"
            className="rounded-2xl border border-gray-200 bg-transparent p-7"
        >

            {/* Header */}

            <div className="mb-6">

                <div className="mb-3 flex items-center gap-3">

                    <span className="h-px w-6 bg-cyan-600" />

                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
                        Education
                    </span>

                </div>

                <h3 className="text-xl font-semibold text-cyan-600">
                    Academic Background
                </h3>

            </div>


            {/* Education Timeline */}

            <div className="relative">

                <div className="absolute left-[7px] top-2 h-[calc(100%-8px)] w-px bg-gray-200" />


                <div className="relative flex gap-4">

                    {/* Timeline Dot */}

                    <div className="relative z-10 mt-1 h-4 w-4 shrink-0 rounded-full border-2 border-white bg-cyan-600 shadow-sm" />


                    {/* Content */}

                    <div className="min-w-0">

                        <div className="flex items-start gap-3">

                            <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />

                            <h4 className="text-sm font-semibold leading-5 text-cyan-600">
                                Bachelor of Science in
                                Information Technology
                            </h4>

                        </div>


                        <p className="mt-3 text-sm font-medium leading-5 text-gray-700">
                            University of Northwestern Mindanao
                        </p>


                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            Focused on Web development,
                            database management
                        </p>


                        <div className="mt-4 inline-flex rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500">
                            Information Technology Graduate
                        </div>

                    </div>

                </div>

            </div>


            {/* Tags */}

            <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600">
                    Web Development
                </span>

                <span className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600">
                    Database
                </span>

                <span className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600">
                    Web Development
                </span>

            </div>

        </div>
    );
}