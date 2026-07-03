import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import ApiIntegrations from '@/components/ApiIntegrations';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import RobotHook from '@/components/RobotHook';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-color)] selection:bg-[var(--accent-cyan)] selection:text-black">
      <Hero />
      <About />
      <Skills />
      <ApiIntegrations />
      <Projects />
      <Contact />
      <RobotHook />
    </main>
  );
}
