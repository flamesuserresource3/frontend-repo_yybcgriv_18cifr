import { motion } from 'framer-motion';

export default function TerminalAbout() {
  return (
    <section id="about" className="relative w-full bg-[#0a0a0a] py-24 px-6 text-[#00ff41]">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-md border border-[#00ff41]/30 bg-black/70 p-4 shadow-[0_0_40px_rgba(0,255,65,0.05)]">
          <div className="mb-4 text-white/80">$ cat about.txt</div>
          <pre className="whitespace-pre-wrap text-sm">
{`[INFO] Location: Dhaka, Bangladesh
[INFO] Institution: Daffodil International University
[INFO] Focus: Ethical Hacking & Cybersecurity
[MISSION] "Not just to protect systems, but to protect people"
[GOAL] University Lecturer in Cybersecurity | Ethical Hacker
[STATUS] Learning through action: workshops, certifications, community`}
          </pre>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[{
              label: 'Certifications Earned', val: '50+'
            }, { label: 'Workshops Attended', val: '15+' }, { label: 'Community Contributions', val: 'Multiple' }].map((m) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="rounded-md border border-[#00ff41]/30 bg-black/60 p-4 text-center"
              >
                <div className="text-3xl text-white drop-shadow-[0_0_12px_rgba(0,255,65,0.35)]">{m.val}</div>
                <div className="mt-1 text-xs text-white/70">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
