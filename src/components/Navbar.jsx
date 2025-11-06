import { useEffect, useState } from 'react';
import { Menu, X, Linkedin, Mail } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean);
      const y = window.scrollY + 100;
      for (const s of sections) {
        if (s && s.offsetTop <= y && y < s.offsetTop + s.offsetHeight) {
          setActive('#' + s.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[92%] md:w-auto">
      <div className="mx-auto flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl text-white shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
        <a href="#home" className="font-semibold tracking-wide">SR</a>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-full px-3 py-1 text-sm transition hover:bg-white/10 ${active === l.href ? 'bg-white/10 ring-1 ring-white/20' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3 text-sm">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-[#00f3ff]">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="#contact" className="inline-flex items-center gap-1 hover:text-[#39ff14]">
            <Mail size={16} /> Contact
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mt-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl text-white md:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={`rounded-lg px-3 py-2 ${active === l.href ? 'bg-white/10 ring-1 ring-white/20' : ''}`}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
