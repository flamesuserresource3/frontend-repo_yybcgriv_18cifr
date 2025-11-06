import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Wireless Signals – The Physics Behind Hacking Tools',
    desc: 'A visual deep-dive into EM waves and how wireless hacking tools leverage signal properties.',
    link: '#',
    tags: ['Physics', 'Cybersecurity', 'Visualization'],
  },
  {
    title: 'Digital Forensics Workshop',
    desc: 'Hands-on volunteer work assisting participants with forensic tooling and methodology.',
    link: '#',
    tags: ['Forensics', 'Volunteer', 'Workshop'],
  },
];

export default function Showcase() {
  return (
    <section id="projects" className="relative w-full bg-[#0a0a0f] py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects & Highlights</h2>
            <p className="mt-2 text-[#e0e0e0]/80">Interactive 3D cards with depth on hover</p>
          </div>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-[#e0e0e0] hover:text-white inline-flex items-center gap-2">
            <Github size={18} /> GitHub
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link === '#' ? undefined : '_blank'}
              rel={p.link === '#' ? undefined : 'noreferrer'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f3ff]/10 via-transparent to-[#8b00ff]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <ExternalLink className="text-[#00f3ff] opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                </div>
                <p className="mt-2 text-[#e0e0e0]/80">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-[#e0e0e0] ring-1 ring-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
