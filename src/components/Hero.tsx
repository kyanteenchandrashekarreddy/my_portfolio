import profileData from '@/data/profile.json';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Cyber Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-purple)] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Side: Avatar/Image */}
                <div className="flex justify-center lg:justify-end order-2 lg:order-1 relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full relative p-2 glow-border-cyan cyber-image-container">
                        <div className="w-full h-full rounded-full overflow-hidden bg-[#1a1a1a] border-2 border-[var(--border-color)]">
                            <img
                                src="/profile.jpeg"
                                alt="Chandra Shekar Reddy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Cyberpunk decorative elements */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-[var(--accent-cyan)] opacity-70"></div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-[var(--accent-cyan)] opacity-70"></div>
                    </div>
                </div>

                {/* Right Side: Hero Text */}
                <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                        CHANDRA <span className="text-[var(--accent-cyan)] glow-text-cyan">SHEKAR</span>_
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium leading-relaxed max-w-2xl">
                        {profileData.heroText}
                    </p>
                    <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="#projects" className="cyber-button">
                            View Work
                        </a>
                        <a href="#contact" className="px-6 py-3 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent-purple)] transition-all duration-300 uppercase tracking-wider font-semibold">
                            Contact Me
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}