import { NAV_LINKS, CONTACT } from '@/data/content';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <span className="text-3xl font-serif font-bold text-accent">AHA Office</span>
            <p className="text-white/60 font-light text-sm leading-relaxed max-w-sm">
              مكتب عبد الرؤوف حسّان - محاسب قانوني معتمد. حلول مالية وتدقيق حسابات بمعايير عالمية وخبرة يمنية أصيلة منذ ١٩٩٦.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-accent border-r-2 border-accent pr-3">روابط سريعة</h4>
            <div className="flex flex-col gap-3 font-light text-sm">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-white/60 hover:text-accent hover:pr-2 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-accent border-r-2 border-accent pr-3">معلومات التواصل</h4>
            <div className="space-y-3 font-light text-sm text-white/60">
              <p>{CONTACT.address}</p>
              <p dir="ltr" className="text-right flex items-center justify-end gap-2">
                {CONTACT.email} <Mail size={16} />
              </p>
              <div className="flex flex-col items-end gap-1" dir="ltr">
                {CONTACT.phones.slice(0, 2).map((phone, i) => (
                  <span key={i} className="flex items-center gap-2">{phone} <Phone size={16} /></span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 text-xs text-white/40 font-light">
          <p>© {currentYear} مكتب عبد الرؤوف حسان. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">
              واتساب <MessageSquare size={14} />
            </a>
            <span>عضو في شبكة طلال أبوغزاله العالمية (TAG-Audit)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
