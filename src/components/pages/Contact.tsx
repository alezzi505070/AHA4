import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CONTACT } from '@/data/content';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const contactSchema = z.object({
  fullName: z.string().min(3, { message: 'يجب أن يكون الاسم 3 حروف على الأقل' }),
  email: z.string().email({ message: 'البريد الإلكتروني غير صحيح' }),
  phone: z.string().min(7, { message: 'رقم الهاتف غير صحيح' }),
  message: z.string().min(10, { message: 'يجب أن تكون الرسالة 10 حروف على الأقل' }),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    console.log("Submitting contact message:", data);
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    reset();
  };

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen text-textPrimary">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent tracking-widest text-sm font-semibold uppercase mb-4 block">اتصل بنا</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">يسعدنا تواصلكم معنا</h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Details Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">معلومات الاتصال</h2>
              <p className="text-textMuted font-light">تواصل معنا للاستفسار عن خدماتنا أو لحجز موعد استشاري مهني.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <MapPin className="text-accent mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-primary">العنوان</h4>
                  <p className="text-textMuted">{CONTACT.address}</p>
                  <p className="text-textMuted text-sm font-light mt-1">{CONTACT.poBox}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <Mail className="text-accent mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-primary">البريد الإلكتروني</h4>
                  <p className="text-textMuted" dir="ltr">{CONTACT.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <Phone className="text-accent mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-primary">الهاتف</h4>
                  <div className="text-textMuted flex flex-col items-start gap-1" dir="ltr">
                    {CONTACT.phones.map((phone, i) => (
                      <span key={i}>{phone}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <Clock className="text-accent mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-primary">ساعات العمل</h4>
                  <p className="text-textMuted">{CONTACT.hours}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card bg-surface p-8 rounded-3xl border border-black/5 shadow-sm"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto text-accent text-3xl font-serif">✓</div>
                <h3 className="text-2xl font-bold text-primary">شكرًا لتواصلك معنا</h3>
                <p className="text-textMuted font-light">تم استلام رسالتك بنجاح. سنقوم بالرد عليك في أقرب وقت ممكن.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-accent hover:underline focus:outline-none"
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form className="space-y-6 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    type="text"
                    placeholder="الاسم الكامل"
                    {...register('fullName')}
                    className={`w-full bg-background border rounded-xl px-4 py-3 text-textPrimary placeholder-textMuted focus:outline-none focus:border-accent shadow-sm ${errors.fullName ? 'border-red-500' : 'border-black/10'}`}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    {...register('email')}
                    className={`w-full bg-background border rounded-xl px-4 py-3 text-textPrimary placeholder-textMuted focus:outline-none focus:border-accent shadow-sm ${errors.email ? 'border-red-500' : 'border-black/10'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="رقم الهاتف"
                    {...register('phone')}
                    className={`w-full bg-background border rounded-xl px-4 py-3 text-textPrimary placeholder-textMuted focus:outline-none focus:border-accent shadow-sm ${errors.phone ? 'border-red-500' : 'border-black/10'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <textarea
                    placeholder="رسالتك الاستفسارية"
                    rows={4}
                    {...register('message')}
                    className={`w-full bg-background border rounded-xl px-4 py-3 text-textPrimary placeholder-textMuted focus:outline-none focus:border-accent shadow-sm ${errors.message ? 'border-red-500' : 'border-black/10'}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-white hover:opacity-90 shadow-md transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال'} <Send size={18} className="rotate-180" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
