import { Download, MapPin, Sun, Moon } from 'lucide-react';

import {
    FaGithub,
    FaFacebook,
    FaInstagram,
} from 'react-icons/fa';

import reactImage from './assets/4520.png';
import resumePdf from './assets/Bryan-Jay-Barrientos-Resume.pdf';

type HeroProps = {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Hero({
    darkMode,
    setDarkMode,
}: HeroProps) {
    return (
        <section className="mx-auto max-w-7xl px-6 py-6">
            <div
                className={`relative min-h-[20vh] rounded-2xl border p-6 shadow-sm transition-all duration-300 md:p-8 ${
                    darkMode
                        ? 'border-gray-800 bg-[#0B0F19]'
                        : 'border-gray-200 bg-white'
                }`}
            >
                {/* Theme Button */}

                <button
                    type="button"
                    onClick={() =>
                        setDarkMode((value) => !value)
                    }
                    aria-label={
                        darkMode
                            ? 'Switch to light mode'
                            : 'Switch to dark mode'
                    }
                    className={`absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 ${
                        darkMode
                            ? 'border-gray-700 bg-gray-900 text-yellow-400 hover:bg-gray-800'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-cyan-500 hover:text-cyan-600'
                    }`}
                >
                    {darkMode ? (
                        <Sun size={18} />
                    ) : (
                        <Moon size={18} />
                    )}
                </button>

                {/* Content */}

                <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:gap-10">

                    {/* Left */}

                    <div className="flex items-center gap-6">

                        {/* Social Buttons */}

                        <div className="flex flex-col gap-3">

                            <a
                                href="https://github.com/BrighterTech01"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 ${
                                    darkMode
                                        ? 'border-gray-700 bg-gray-900 text-gray-300 hover:border-cyan-500 hover:bg-cyan-600 hover:text-white'
                                        : 'border-gray-200 bg-white text-gray-700 hover:border-cyan-600 hover:bg-cyan-600 hover:text-white'
                                }`}
                            >
                                <FaGithub size={18} />
                            </a>

                            <a
                                href="https://facebook.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 ${
                                    darkMode
                                        ? 'border-gray-700 bg-gray-900 text-gray-300 hover:border-cyan-500 hover:bg-cyan-600 hover:text-white'
                                        : 'border-gray-200 bg-white text-gray-700 hover:border-cyan-600 hover:bg-cyan-600 hover:text-white'
                                }`}
                            >
                                <FaFacebook size={18} />
                            </a>

                            <a
                                href="https://instagram.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 ${
                                    darkMode
                                        ? 'border-gray-700 bg-gray-900 text-gray-300 hover:border-cyan-500 hover:bg-cyan-600 hover:text-white'
                                        : 'border-gray-200 bg-white text-gray-700 hover:border-cyan-600 hover:bg-cyan-600 hover:text-white'
                                }`}
                            >
                                <FaInstagram size={18} />
                            </a>

                        </div>

                        {/* Profile Image */}

                        <img
                            src={reactImage}
                            alt="Bryan Jay E. Barrientos"
                            className="h-32 w-28 rounded-xl border-4 border-cyan-500 object-cover"
                        />

                    </div>

                    {/* Right */}

                    <div className="flex-1">

                        <p
                            className={`text-sm font-semibold ${
                                darkMode
                                    ? 'text-gray-400'
                                    : 'text-gray-600'
                            }`}
                        >
                            Hello, I'm
                        </p>

                        <h1
                            className={`mt-1 text-3xl font-bold tracking-tight md:text-4xl ${
                                darkMode
                                    ? 'text-white'
                                    : 'text-gray-900'
                            }`}
                        >
                            Bryan Jay E. Barrientos
                        </h1>

                        <div
                            className={`mt-2 flex items-center gap-2 text-sm ${
                                darkMode
                                    ? 'text-gray-400'
                                    : 'text-gray-500'
                            }`}
                        >
                            <MapPin size={16} />

                            <span>
                                Tangub City, Misamis Occidental
                            </span>
                        </div>

                        <p
                            className={`mt-3 text-sm font-semibold md:text-base ${
                                darkMode
                                    ? 'text-gray-200'
                                    : 'text-gray-800'
                            }`}
                        >
                            Aspiring Fullstack Developer

                            <span className="mx-2 text-cyan-600">
                                |
                            </span>

                            Freelancer

                            <span className="mx-2 text-cyan-600">
                                |
                            </span>

                            UI/UX

                            <span className="mx-2 text-cyan-600">
                                |
                            </span>

                            QA Tester
                        </p>

                        {/* Download Resume */}

                        <a
                            href={resumePdf}
                            download="Bryan-Jay-Barrientos-Resume.pdf"
                            className="
                                mt-4
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-black
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-white
                                transition
                                hover:bg-cyan-600
                            "
                        >
                            <Download size={16} />

                            Download Resume
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
}