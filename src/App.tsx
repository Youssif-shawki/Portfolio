import { useTheme } from '@/hooks/useTheme';
import AmbientBackground from '@/components/AmbientBackground';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <AmbientBackground />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
