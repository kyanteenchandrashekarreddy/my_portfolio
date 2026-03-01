import profileData from '@/data/profile.json';

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white glow-text-purple">
                    ABOUT <span className="text-[var(--accent-purple)]">SYSTEM</span>_
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Block 1: Qualifications */}
                    <div className="bg-[var(--card-bg)] p-8 border border-[var(--border-color)] hover:glow-border-cyan transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-cyan)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        <h3 className="text-xl font-semibold mb-6 text-[var(--accent-cyan)] uppercase tracking-wider">
                            {'>'} Qualifications
                        </h3>
                        <ul className="space-y-4">
                            {profileData.qualifications.map((qual, index) => (
                                <li key={index} className="flex items-start text-[var(--text-secondary)]">
                                    <span className="text-[var(--accent-purple)] mr-3 mt-1">✓</span>
                                    <span>{qual}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Block 2: Summary */}
                    <div className="bg-[var(--card-bg)] p-8 border border-[var(--border-color)] hover:glow-border-purple transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-purple)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        <h3 className="text-xl font-semibold mb-6 text-[var(--accent-purple)] uppercase tracking-wider">
                            {'>'} Summary
                        </h3>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            {profileData.summary}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
