import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Programming',
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'Python', level: 90 },
      { name: 'C/C++', level: 70 },
      { name: 'Node.js', level: 75 },
    ],
  },
  {
    name: 'Cybersecurity',
    skills: [
      { name: 'Network Security', level: 80 },
      { name: 'Digital Forensics', level: 65 },
      { name: 'Threat Modeling', level: 72 },
      { name: 'OWASP Top 10', level: 78 },
    ],
  },
  {
    name: 'AI Tools',
    skills: [
      { name: 'Copilot', level: 85 },
      { name: 'NVIDIA AI', level: 70 },
      { name: 'LangChain', level: 60 },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Leadership', level: 80 },
      { name: 'Communication', level: 85 },
      { name: 'Teaching', level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#0a0a0f] py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills & Expertise</h2>
        <p className="mt-2 text-[#e0e0e0]/80">Hover to reveal proficiency levels</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{cat.name}</h3>
                <div className="h-2 w-2 rounded-full bg-[#39ff14] shadow-[0_0_10px_#39ff14]" />
              </div>

              <div className="mt-4 space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name} className="group">
                    <div className="flex items-center justify-between">
                      <span className="text-[#e0e0e0]">{s.name}</span>
                      <span className="text-[#00f3ff] opacity-0 transition-opacity group-hover:opacity-100">{s.level}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#00f3ff] via-[#8b00ff] to-[#39ff14] shadow-[0_0_12px_rgba(0,243,255,0.6)]"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
