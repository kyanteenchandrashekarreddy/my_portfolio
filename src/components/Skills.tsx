import skillsData from '@/data/skills.json';
import Image from 'next/image';

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                    SKILLS <span className="text-[var(--accent-cyan)]">MODULES</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
                    {skillsData.map((skill) => (
                        <div
                            key={skill.name}
                            className="group flex flex-col items-center justify-center p-6 bg-[var(--card-bg)] rounded-xl glow-on-hover-cyan w-32 h-32 md:w-40 md:h-40 cursor-pointer"
                        >
                            <div className="w-16 h-16 relative mb-4 transition-all duration-300">
                                <Image
                                    src={skill.logo}
                                    alt={`${skill.name} logo`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--accent-cyan)] transition-colors duration-300">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}