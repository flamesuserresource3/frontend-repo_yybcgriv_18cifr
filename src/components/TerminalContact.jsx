import { Mail, Linkedin, MapPin } from 'lucide-react';

export default function TerminalContact() {
  return (
    <section id="contact" className="relative w-full bg-black py-20 px-6 text-[#00ff41]">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-md border border-[#00ff41]/30 bg-[#0a0a0a] p-4">
          <div className="text-white/80">$ netstat -an | grep "ESTABLISHED"</div>
          <div className="mt-4 text-sm text-white/90 space-y-1">
            <div className="flex items-center gap-2"><MapPin size={16} className="text-[#00ff41]"/> Dhaka, Bangladesh</div>
            <div>Institution: Daffodil International University</div>
            <div>Status: OPEN_TO_OPPORTUNITIES</div>
          </div>
        </div>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-md border border-[#00ff41]/30 bg-[#0a0a0a] p-4 hover:border-[#00ff41]/60">
          <div className="flex items-center gap-2 text-white/90"><Linkedin size={18}/> LinkedIn</div>
          <div className="mt-2 text-xs text-white/70">/in/md-saifur-rahman-yourhandle</div>
        </a>
        <a href="mailto:someone@example.com" className="rounded-md border border-[#00ff41]/30 bg-[#0a0a0a] p-4 hover:border-[#00ff41]/60">
          <div className="flex items-center gap-2 text-white/90"><Mail size={18}/> Email</div>
          <div className="mt-2 text-xs text-white/70">your-email@domain</div>
        </a>
      </div>
    </section>
  );
}
