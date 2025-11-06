import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const BOOT_LINES = [
  '> Initializing secure connection...',
  '> Loading profile: MD_SAIFUR_RAHMAN.exe',
  '> Access granted. Welcome.'
];

const SUBTITLES = [
  '$ Software Engineering Student',
  '$ Cybersecurity Explorer | Ethical Hacking Aspirant',
  '$ Building Skills to Protect & Teach'
];

function useType(lines, speed = 35, delayBetween = 600) {
  const [output, setOutput] = useState([]);
  useEffect(() => {
    let mounted = true;
    const run = async () => {
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        let s = '';
        for (let j = 0; j < line.length; j++) {
          if (!mounted) return;
          s += line[j];
          setOutput((prev) => {
            const copy = [...prev];
            copy[i] = s;
            return copy;
          });
          await new Promise((r) => setTimeout(r, speed));
        }
        await new Promise((r) => setTimeout(r, delayBetween));
      }
    };
    run();
    return () => {
      mounted = false;
    };
  }, [lines, speed, delayBetween]);
  return output;
}

export default function HackerHero() {
  const [showSubtitleIndex, setShowSubtitleIndex] = useState(0);
  const typedBoot = useType(BOOT_LINES, 30, 500);

  useEffect(() => {
    const t = setInterval(() => {
      setShowSubtitleIndex((i) => (i + 1) % SUBTITLES.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  const gradientMask = useMemo(
    () => ({ background: 'radial-gradient(800px 400px at 50% 20%, rgba(0,255,65,0.10), transparent 60%)' }),
    []
  );

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0" style={gradientMask} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_center,transparent_40%,#001100_41%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0) 95%, rgba(0,255,65,0.2) 96%, rgba(0,0,0,0) 97%)',
          backgroundSize: '100% 3px'
        }} />
      </div>

      <div className="relative z-10 flex h-full items-center px-6">
        <div className="mx-auto max-w-6xl w-full">
          <div className="rounded-md border border-[#00ff41]/30 bg-[#0a0a0a]/70 p-4 backdrop-blur">
            <pre className="text-[#00ff41] text-sm leading-relaxed">
              {BOOT_LINES.map((_, i) => (
                <div key={i}>
                  {typedBoot[i] || ''}
                  {i === typedBoot.length - 1 && <span className="animate-pulse">▮</span>}
                </div>
              ))}
            </pre>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            <span className="relative inline-block">
              <span className="text-white drop-shadow-[0_0_20px_rgba(0,255,65,0.35)]">MD. Saifur Rahman</span>
              <span className="absolute left-0 top-0 text-[#ff0040] opacity-50 translate-x-0.5 -translate-y-0.5 select-none" aria-hidden>
                MD. Saifur Rahman
              </span>
              <span className="absolute left-0 top-0 text-[#00d9ff] opacity-50 -translate-x-0.5 translate-y-0.5 select-none" aria-hidden>
                MD. Saifur Rahman
              </span>
            </span>
          </motion.h1>

          <div className="mt-2 text-[#00ff41] text-lg">
            <span className="whitespace-pre">{SUBTITLES[showSubtitleIndex]}</span>
            <span className="ml-1 animate-pulse">_</span>
          </div>

          <div className="mt-6 rounded-md border border-[#00ff41]/30 bg-black/60 p-4">
            <pre className="text-[#00ff41]/90 text-sm leading-relaxed">
{`> "Right now, right here. Surpass your limits. There is no other way."
> - YAMI SUKEHIRO`}
            </pre>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 inset-x-0 z-10 text-center">
        <span className="text-[#00ff41]/80 text-sm">> Press ↓ to continue</span>
      </div>
    </section>
  );
}
