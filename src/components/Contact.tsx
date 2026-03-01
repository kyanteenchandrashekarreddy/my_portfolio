import profileData from '@/data/profile.json';
import { Github, Phone, Mail, Linkedin } from 'lucide-react';

export default function Contact() {
    return (
        <footer id="contact" className="py-12 border-t border-[var(--border-color)] bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Cyber Element */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent opacity-50"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-center space-y-8">

                    <h2 className="text-2xl font-bold text-center text-white w-full">
                        ESTABLISH <span className="text-[var(--accent-purple)] glow-text-purple">CONNECTION</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">

                        {/* GitHub - Increased container to w-20 h-20 and icon to size 36 */}
                        <a
                            href={profileData.contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-all duration-300"
                        >
                            <div className="w-40 h-40 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:glow-border-cyan group-hover:scale-110 transition-all duration-300 bg-[var(--card-bg)]">
                                <Github size={50} />
                            </div>
                            <span className="text-xs tracking-widest uppercase font-medium">GitHub</span>
                        </a>

                        {/* LinkedIn - Increased container to w-20 h-20 and icon to size 36 */}
                        <a
                            href={profileData.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-3 text-[var(--text-secondary)] hover:text-[#0077b5] transition-all duration-300"
                        >
                            <div className="w-40 h-40 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:border-[#0077b5] group-hover:shadow-[0_0_15px_rgba(0,119,181,0.6)] group-hover:scale-110 transition-all duration-300 bg-[var(--card-bg)]">
                                <Linkedin size={50} />
                            </div>
                            <span className="text-xs tracking-widest uppercase font-medium">LinkedIn</span>
                        </a>

                        {/* Email - Increased container to w-20 h-20 and icon to size 36 */}
                        <a
                            href={profileData.contact.email}
                            className="group flex flex-col items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--accent-purple)] transition-all duration-300"
                        >
                            <div className="w-40 h-40 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:glow-border-purple group-hover:scale-110 transition-all duration-300 bg-[var(--card-bg)]">
                                <Mail size={50} />
                            </div>
                            <span className="text-xs tracking-widest uppercase font-medium">Email</span>
                        </a>

                        {/* Phone - Increased container to w-20 h-20 and icon to size 36 */}
                        <div className="group flex flex-col items-center gap-3 text-[var(--text-secondary)] hover:text-white transition-all duration-300">
                            <div className="w-40 h-40 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:border-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-all duration-300 bg-[var(--card-bg)] cursor-pointer">
                                <Phone size={50} />
                            </div>
                            <span className="text-xs tracking-widest uppercase font-medium">{profileData.contact.phone}</span>
                        </div>

                    </div>

                    <div className="pt-8 text-sm text-[var(--text-secondary)] uppercase tracking-wider text-center w-full">
                        <span className="opacity-50">© {new Date().getFullYear()}</span> CHANDRA SHEKAR REDDY <span className="text-[var(--accent-cyan)]">▮</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}