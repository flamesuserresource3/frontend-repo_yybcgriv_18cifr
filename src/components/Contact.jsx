import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Copy } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'saifur.rahman@example.com';

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <section id="contact" className="relative w-full bg-[#0a0a0f] py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s Connect</h2>
        <p className="mt-2 text-[#e0e0e0]/80">Open to internships, collaborations, and security-focused projects.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-xl hover:ring-1 hover:ring-[#00f3ff]/50"
          >
            <Linkedin className="text-[#00f3ff]" />
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-sm text-[#e0e0e0]/80">Connect professionally</p>
            </div>
          </motion.a>

          <motion.button
            onClick={copy}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-xl hover:ring-1 hover:ring-[#39ff14]/50"
          >
            <Mail className="text-[#39ff14]" />
            <div className="text-left">
              <p className="font-medium">Email</p>
              <p className="text-sm text-[#e0e0e0]/80">{email}</p>
            </div>
            <Copy size={16} className="ml-auto opacity-70" />
            <span className={`ml-2 text-xs ${copied ? 'text-[#39ff14]' : 'text-transparent'}`}>Copied!</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-xl"
          >
            <MapPin className="text-[#8b00ff]" />
            <div>
              <p className="font-medium">Dhaka, Bangladesh</p>
              <p className="text-sm text-[#e0e0e0]/80">Available worldwide (remote)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
