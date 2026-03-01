'use client';

import { useEffect, useRef } from 'react';

export default function RobotHook() {
    const headRef = useRef<HTMLDivElement>(null);
    const leftEyeRef = useRef<HTMLDivElement>(null);
    const rightEyeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!headRef.current) return;

            const rect = headRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            // Rotation logic
            const rotateX = -deltaY / 15;
            const rotateY = deltaX / 15;

            const constrainedX = Math.max(Math.min(rotateX, 20), -20);
            const constrainedY = Math.max(Math.min(rotateY, 20), -20);

            headRef.current.style.transform = `perspective(500px) rotateX(${constrainedX}deg) rotateY(${constrainedY}deg)`;

            // Eye tracking
            const moveEye = (eye: HTMLDivElement | null) => {
                if (!eye) return;
                const rad = Math.atan2(deltaY, deltaX);
                const maxDist = 4;
                const tx = Math.cos(rad) * maxDist;
                const ty = Math.sin(rad) * maxDist;

                const pupil = eye.querySelector('.pupil') as HTMLElement;
                if (pupil) {
                    pupil.style.transform = `translate(${tx}px, ${ty}px)`;
                }
            };

            moveEye(leftEyeRef.current);
            moveEye(rightEyeRef.current);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="fixed bottom-6 right-6 z-50 cursor-pointer group"
            title="AI Assistant Active"
        >
            <div
                ref={headRef}
                className="relative w-20 h-24 transition-transform duration-100 ease-out will-change-transform"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Antenna - UPDATED TO RED */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-red-600"></div>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ff0000]"></div>

                {/* Main Head Body - UPDATED TO WHITE */}
                <div className="absolute bottom-0 w-20 h-20 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden flex flex-col items-center justify-center p-2 group-hover:border-[var(--accent-cyan)] transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">

                    {/* Face Mask (Dark glass area for eyes) */}
                    <div className="w-full bg-[#0a0a0a] border border-gray-800 h-9 rounded-lg mb-2 flex justify-between items-center px-2">

                        {/* Left Eye - KEPT CYAN */}
                        <div ref={leftEyeRef} className="w-5 h-5 bg-[#121212] rounded-full border border-[var(--accent-cyan)] relative overflow-hidden flex items-center justify-center shadow-[inset_0_0_5px_rgba(0,240,255,0.5)]">
                            <div className="pupil w-2 h-2 bg-[var(--accent-cyan)] rounded-full transition-transform duration-75 shadow-[0_0_8px_#00f0ff]"></div>
                        </div>

                        {/* Right Eye - KEPT CYAN */}
                        <div ref={rightEyeRef} className="w-5 h-5 bg-[#121212] rounded-full border border-[var(--accent-cyan)] relative overflow-hidden flex items-center justify-center shadow-[inset_0_0_5px_rgba(0,240,255,0.5)]">
                            <div className="pupil w-2 h-2 bg-[var(--accent-cyan)] rounded-full transition-transform duration-75 shadow-[0_0_8px_#00f0ff]"></div>
                        </div>

                    </div>

                    {/* Mouth/Speaker area */}
                    <div className="w-8 h-1 flex gap-1 justify-center">
                        <div className="w-full h-full bg-gray-300 rounded-full"></div>
                        <div className="w-full h-full bg-gray-300 rounded-full"></div>
                        <div className="w-full h-full bg-gray-300 rounded-full"></div>
                    </div>
                </div>

                {/* Decorative Side Elements (Ears) */}
                <div className="absolute top-1/2 right-0 w-1.5 h-4 bg-gray-200 rounded-l-md transform translate-x-full"></div>
                <div className="absolute top-1/2 left-0 w-1.5 h-4 bg-gray-200 rounded-r-md transform -translate-x-full"></div>
            </div>
        </div>
    );
}
