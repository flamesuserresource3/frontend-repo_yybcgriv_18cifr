import { motion } from 'framer-motion';
import { Shield, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0a0a0f] py-24 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="group perspective">
            <div className="relative aspect-square w-full rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f3ff]/20 via-transparent to-[#8b00ff]/20" />
              <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#39ff14]/20 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#00f3ff]/20 blur-3xl" />
              <div className="relative z-10 flex h-full items-center justify-center">
                <Shield className="text-[#00f3ff] drop-shadow-[0_0_12px_rgba(0,243,255,0.6)]" size={80} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
          <p className="mt-4 text-[#e0e0e0]/90 leading-relaxed">
            I’m a Software Engineering student at Daffodil International University, exploring the edges of Cybersecurity and Ethical Hacking. I love building secure, scalable systems and sharing what I learn along the way.
          </p>
          <p className="mt-3 text-[#e0e0e0]/80 leading-relaxed">
            Mission: <span className="font-semibold text-white">protect people, not just systems</span>. With curiosity and ethics as compass, I aim to become an ethical hacker and a university lecturer in cybersecurity.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {['Programming', 'Cybersecurity', 'AI Tools', 'Soft Skills'].map((text) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#e0e0e0] backdrop-blur-md hover:border-[#00f3ff]/40 hover:shadow-[0_0_20px_rgba(0,243,255,0.25)] transition"
              >
                <Sparkles size={16} className="text-[#39ff14]" /> {text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
