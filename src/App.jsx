import TerminalNavbar from './components/TerminalNavbar';
import HackerHero from './components/HackerHero';
import TerminalAbout from './components/TerminalAbout';
import TerminalSkills from './components/TerminalSkills';
import TerminalContact from './components/TerminalContact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00ff41]/20 selection:text-white font-mono">
      <TerminalNavbar />
      <main>
        <HackerHero />
        <TerminalAbout />
        <TerminalSkills />
        <TerminalContact />
      </main>
      <footer className="border-t border-white/10 bg-[#0a0a0a] py-8 text-center text-white/70">
        <p>
          © {new Date().getFullYear()} MD. Saifur Rahman — Secure. Focused. Evolving.
        </p>
      </footer>
    </div>
  );
}

export default App;
