import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import RobotHook from '@/components/RobotHook';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-color)] selection:bg-[var(--accent-cyan)] selection:text-black">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <RobotHook />
    </main>
  );
}
