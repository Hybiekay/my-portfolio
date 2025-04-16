import { Typewriter } from "react-simple-typewriter";

// 3. Hero.tsx
export function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-purple-800/20 to-black/70 opacity-60 z-0" />
            <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse -top-10 -left-10" />
            <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse top-10 right-0" />
            <h1 className="text-4xl md:text-6xl font-bold z-10">
                Hi, I'm{' '}
                <Typewriter
                    words={[
                        'Ademola Ibukunoluwa',
                        'a Fullstack Engineer',
                        'a Tech Entrepreneur'
                    ]}
                    loop={true}
                    cursorColor="#3b82f6" // blue-500
                    typeSpeed={100}
                    deleteSpeed={50}
                />
            </h1>
            <p className="mt-4 text-lg z-10">Fullstack Engineer | Flutter & Node.js | CEO of Eulogia Technologies</p>
            <div className="mt-6 z-10">
                <a href="#projects" className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-500 transition-all duration-300 shadow-lg">View Projects</a>
            </div>
        </section>
    );
}