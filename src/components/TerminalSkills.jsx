import { motion } from 'framer-motion';

const sections = [
  {
    title: '$ ls -la /skills/technical/',
    bars: [
      { label: 'Python Development', pct: 80 },
      { label: 'SQL Database', pct: 70 },
      { label: 'ISO 27001 Lead Auditor', pct: 90 },
      { label: 'Critical Infrastructure Protection', pct: 70 },
    ],
  },
];

const SkillList = () => (
  <ul className="text-sm space-y-1 text-white/90">
    <li>C Programming 
<span className="text-[#ffb000]">⭐⭐⭐</span> — Certificates: Introduction to C, C Programming (10 Minute School)</li>
    <li>Python 
<span className="text-[#ffb000]">⭐⭐⭐</span> — Certificates: Python Developer, Python Intermediate, Introduction to Python</li>
    <li>SQL 
<span className="text-[#ffb000]">⭐⭐⭐</span> — Certificates: Introduction to SQL, SQL Intermediate</li>
    <li>HTML/CSS 
<span className="text-[#ffb000]">⭐⭐</span> — Certificate: Coding Foundations</li>
    <li>Data Analysis 
<span className="text-[#ffb000]">⭐⭐</span> — Certificate: Coding for Data</li>
    <li className="mt-3 text-[#00d9ff]">Cybersecurity & Ethical Hacking</li>
    <li>Intro to Cyber Security — SimpliLearn ⭐⭐⭐</li>
    <li>Intro to Cybercrime — SimpliLearn ⭐⭐⭐</li>
    <li>CIP — OPSWAT ICIP Certified ⭐⭐⭐</li>
    <li>ISO/IEC 27001:2022 Lead Auditor — 16 credit hours ⭐⭐⭐⭐</li>
    <li>Web Pentesting — Advanced Workshop (DIU) ⭐⭐</li>
    <li>Digital Forensics — Bangladesh Police Workshop (Volunteer) ⭐⭐</li>
    <li className="mt-3 text-[#00d9ff]">AI & Emerging Tech</li>
    <li>AI Fundamentals — NVIDIA: AI for All ⭐⭐⭐</li>
    <li>Prompt Engineering — AICERTs + SimpliLearn ⭐⭐⭐</li>
    <li>Microsoft 365 Copilot — 3 modules ⭐⭐⭐</li>
    <li>ChatGPT for Everyone ⭐⭐</li>
    <li>AI for Business — HP LIFE ⭐⭐</li>
    <li className="mt-3 text-[#00d9ff]">Microsoft Office & Productivity</li>
    <li>Excel ⭐⭐⭐ · Word ⭐⭐⭐ · PowerPoint ⭐⭐⭐ · Access ⭐⭐ · Digital Literacy ⭐⭐⭐ (ICT Division)</li>
  </ul>
);

export default function TerminalSkills() {
  return (
    <section id="skills" className="relative w-full bg-[#0a0a0a] py-24 px-6 text-[#00ff41]">
      <div className="mx-auto max-w-6xl space-y-6">
        {sections.map((s) => (
          <div key={s.title} className="rounded-md border border-[#00ff41]/30 bg-black/70 p-4">
            <div className="mb-4 text-white/80">{s.title}</div>
            <SkillList />

            <div className="mt-6 space-y-3">
              {s.bars.map((b) => (
                <motion.div key={b.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="w-full">
                  <div className="mb-1 text-xs text-white/70">{b.label}</div>
                  <div className="h-3 w-full rounded-sm bg-white/10 overflow-hidden">
                    <div className="h-full bg-[#00ff41]" style={{ width: `${b.pct}%` }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
