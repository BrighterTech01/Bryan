import { useState } from 'react';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Welcome() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <main
            className={`min-h-screen transition-colors duration-300 ${
                darkMode
                    ? 'dark bg-[#05070F] text-white'
                    : 'bg-[#F5F5F5] text-gray-900'
            } `}
        >
            <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
            <About />
            <Footer />
        </main>
    );
}
