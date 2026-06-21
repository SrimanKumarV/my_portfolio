import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { CustomCursor } from './components/CustomCursor';
import { NoiseOverlay } from './components/NoiseOverlay';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-white selection:text-black">
      <NoiseOverlay />
      <CustomCursor />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
