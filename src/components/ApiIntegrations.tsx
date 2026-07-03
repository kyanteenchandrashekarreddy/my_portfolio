import apiData from '@/data/apiIntegrations.json';

export default function ApiIntegrations() {
    return (
        <section id="api-integrations" className="py-24 relative bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                    API <span className="text-[var(--accent-purple)]">INTEGRATIONS</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
                    {apiData.map((api) => (
                        <div
                            key={api.name}
                            className="group flex flex-col items-center justify-center p-6 bg-[var(--card-bg)] rounded-xl glow-on-hover-purple w-32 h-32 md:w-40 md:h-40 cursor-pointer"
                        >
                            <div className="w-16 h-16 relative mb-4 transition-all duration-300">
                                <img
                                    src={api.logo}
                                    alt={`${api.name} logo`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--accent-purple)] transition-colors duration-300 text-center">
                                {api.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
