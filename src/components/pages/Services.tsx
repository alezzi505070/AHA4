import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '@/data/content';
import { ChevronDown, ArrowLeft } from 'lucide-react';

export const Services = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen text-textPrimary">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent tracking-widest text-sm font-semibold uppercase mb-4 block">خبراتنا</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">خدماتنا المهنية المتكاملة</h1>
          <p className="text-textMuted max-w-2xl mx-auto text-lg leading-relaxed font-light">
            نقدم حلولاً وخدمات متخصصة تدعم الاستقرار المالي وتساعد في تطوير هياكل حوكمة قوية لشركات الأعمال.
          </p>
        </motion.div>

        <div className="space-y-6">
          {SERVICES.map((service, idx) => {
            const isOpen = activeId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-surface rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-accent shadow-md' : 'border-black/5 hover:border-accent/20 shadow-sm'}`}
              >
                <button
                  onClick={() => toggleAccordion(service.id)}
                  className="w-full flex items-center justify-between p-8 text-right focus:outline-none hover:bg-black/5 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-3xl font-serif text-accent w-12 h-12 bg-background rounded-xl flex items-center justify-center border border-black/5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                      <p className="text-textMuted text-sm font-light mt-1 hidden md:block">{service.preview}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={24}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-black/5"
                    >
                      <div className="p-8 bg-background/30 text-textPrimary leading-loose whitespace-pre-wrap font-light text-base md:text-lg">
                        {service.details}
                        <div className="mt-8">
                          <a
                            href="#/contact"
                            className="inline-flex items-center gap-2 text-accent hover:text-primary font-semibold transition-colors text-sm"
                          >
                            اطلب استشارة حول هذه الخدمة
                            <ArrowLeft size={16} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
