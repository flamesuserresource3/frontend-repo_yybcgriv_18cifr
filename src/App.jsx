import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] selection:bg-[#00f3ff]/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Showcase />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-[#0a0a0f] py-8 text-center text-[#e0e0e0]/70">
        <p>
          © {new Date().getFullYear()} MD. Saifur Rahman — Crafted with passion for cybersecurity and learning.
        </p>
      </footer>
    </div>
  );
}

export default App;
