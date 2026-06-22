import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { TechMarquee } from './components/TechMarquee';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { CpStats } from './sections/CpStats';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { MagicWand } from './components/MagicWand';
import { ScrollProgress } from './components/ScrollProgress';
import { ParticleField } from './components/ParticleField';

function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <ParticleField />
      <MagicWand />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Education />
        <Projects />
        <CpStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
