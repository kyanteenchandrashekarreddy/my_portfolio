'use client';
import { useEffect, useRef } from 'react';

export default function BackgroundGlobs() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let stars: { x: number; y: number; size: number; speed: number }[] = [];
        let asteroids: { x: number; y: number; r: number; vx: number; vy: number; points: number[] }[] = [];

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Generate Stars
            stars = Array.from({ length: 250 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5,
                speed: Math.random() * 0.3 + 0.1
            }));

            // Generate Asteroids
            asteroids = Array.from({ length: 6 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 20 + 10,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                points: Array.from({ length: 10 }, () => Math.random() * 10 - 5)
            }));
        };

        const draw = () => {
            ctx.fillStyle = '#050505'; // The base dark color
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Stars
            ctx.fillStyle = '#ffffff';
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
                star.y += star.speed;
                if (star.y > canvas.height) star.y = 0;
            });

            // Draw Asteroids
            ctx.strokeStyle = '#222';
            ctx.lineWidth = 1;
            asteroids.forEach(ast => {
                ctx.beginPath();
                for (let i = 0; i < 10; i++) {
                    const angle = (i * Math.PI * 2) / 10;
                    const r = ast.r + ast.points[i];
                    ctx.lineTo(ast.x + Math.cos(angle) * r, ast.y + Math.sin(angle) * r);
                }
                ctx.closePath();
                ctx.stroke();

                ast.x += ast.vx;
                ast.y += ast.vy;

                if (ast.x < -50) ast.x = canvas.width + 50;
                if (ast.x > canvas.width + 50) ast.x = -50;
                if (ast.y < -50) ast.y = canvas.height + 50;
                if (ast.y > canvas.height + 50) ast.y = -50;
            });

            requestAnimationFrame(draw);
        };

        init();
        draw();
        window.addEventListener('resize', init);
        return () => window.removeEventListener('resize', init);
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
}