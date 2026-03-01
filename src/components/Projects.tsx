import projectsData from '@/data/projects.json';
import Image from 'next/image';

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                    EXECUTED <span className="text-[var(--accent-cyan)]">DIRECTIVES</span>_
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="bg-[var(--card-bg)] overflow-hidden rounded-lg flex flex-col glow-on-hover-cyan"
                        >
                            <div className="relative w-full aspect-video overflow-hidden">
                                <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3 text-white">
                                    {project.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cyber-button text-sm w-full text-center mt-auto"
                                >
                                    View Project / Live URL
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}