import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowDown, Quote } from 'lucide-react';

const QUOTES = [
  'Black Clover - Yami Sukehiro: “Surpass your limits. Right here. Right now.”',
  '“Security is not a product, but a process.” — Bruce Schneier',
  '“The quieter you become, the more you are able to hear.” — Ram Dass',
  '“The only real mistake is the one from which we learn nothing.” — John Powell',
];

export default function Hero() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rxMV = useMotionValue(0);
  const ryMV = useMotionValue(0);
  const rotateX = useSpring(rxMV, { stiffness: 150, damping: 15 });
  const rotateY = useSpring(ryMV, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex((q) => (q + 1) % QUOTES.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const onMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    const rX = ((y / rect.height) - 0.5) * -12;
    const rY = ((x / rect.width) - 0.5) * 12;
    rxMV.set(rX);
    ryMV.set(rY);
  };

  const gradientMask = useMemo(
    () => ({
      background:
        'radial-gradient(800px 400px at 50% 20%, rgba(0,243,255,0.15), transparent 60%), radial-gradient(600px 300px at 80% 80%, rgba(57,255,20,0.15), transparent 60%)',
    }),
    []
  );

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0" style={gradientMask} />
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white tracking-tight"
            >
              <span className="relative inline-block">
                <span className="[text-shadow:_0_0_20px_rgba(0,243,255,0.6)] hover:animate-pulse">MD. Saifur Rahman</span>
                <span className="absolute inset-0 mix-blend-lighten opacity-0 hover:opacity-100 transition-opacity duration-300" aria-hidden>
                  <span className="absolute inset-0 blur-sm text-[#00f3ff] select-none">MD. Saifur Rahman</span>
                </span>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mt-4 text-lg sm:text-xl text-[#e0e0e0]/90"
            >
              Software Engineering Student | Cybersecurity Enthusiast | Ethical Hacker in the Making
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-6 flex items-center gap-3 rounded-xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-4 shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
            >
              <Quote className="text-[#39ff14]" size={22} />
              <p className="text-[#e0e0e0]">{QUOTES[quoteIndex]}</p>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              ref={cardRef}
              onMouseMove={onMouseMove}
              onMouseLeave={() => { rxMV.set(0); ryMV.set(0); }}
              style={{ transformStyle: 'preserve-3d', rotateX, rotateY }}
              className="group relative aspect-[4/3] w-full rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_10px_60px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00f3ff]/20 via-transparent to-[#8b00ff]/20" />
              <div className="relative h-full w-full flex items-center justify-center p-6">
                <div className="h-40 w-40 rounded-full bg-gradient-to-tr from-[#00f3ff] via-[#8b00ff] to-[#39ff14] opacity-80 blur-3xl" />
                <div className="absolute inset-6 rounded-xl bg-[#0a0a0f]/60 ring-1 ring-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm tracking-widest text-[#e0e0e0]/70">INTERACTIVE PROFILE CARD</p>
                    <p className="mt-2 text-2xl font-semibold text-white">Cyberpunk Aesthetic</p>
                    <p className="mt-1 text-[#e0e0e0]/80">Move your mouse to tilt</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <a href="#about" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-md ring-1 ring-white/20 hover:ring-[#00f3ff]/50 transition shadow-lg">
          <span className="text-sm">Scroll</span>
          <ArrowDown className="animate-bounce" size={18} />
        </a>
      </div>
    </section>
  );
}
