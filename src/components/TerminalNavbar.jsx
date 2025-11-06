import { useEffect, useState } from 'react';

const links = [
  { href: '#home', label: '~/home' },
  { href: '#about', label: '~/about' },
  { href: '#skills', label: '~/skills' },
  { href: '#contact', label: '~/contact' },
];

export default function TerminalNavbar() {
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handler = () => {
      const sections = links.map((l) => document.querySelector(l.href));
      let current = '#home';
      sections.forEach((sec, i) => {
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) current = links[i].href;
      });
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="mt-4 flex items-center justify-between rounded-md border border-[#00ff41]/30 bg-[#0a0a0a]/80 px-3 py-2 shadow-[0_0_40px_rgba(0,255,65,0.06)] backdrop-blur">
          <div className="text-[#00ff41] text-sm">
            <span className="text-[#00ff41]/80">user@secure-shell</span>:
            <span className="text-white">~</span>$ ls
          </div>
          <ul className="flex items-center gap-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`px-2 py-1 rounded-sm transition-colors duration-200 border border-transparent hover:border-[#00ff41]/40 ${
                    active === l.href ? 'text-[#00ff41]' : 'text-white/80'
                  }`}
                >
                  [{l.label}]
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
