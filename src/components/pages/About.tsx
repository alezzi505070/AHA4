import { motion } from 'framer-motion';
import { VALUES } from '@/data/content';
import { Award, Target, BookOpen, Users, Compass, ShieldAlert } from 'lucide-react';

const iconsMap: Record<string, any> = {
  "السرية التامة": ShieldAlert,
  "علاقات طويلة الأجل": Users,
  "المسئولية المهنية": Compass,
  "الجودة والرضاء": Award,
  "الإشراف والتنفيذ": Target,
  "العمل كفريق متكامل": BookOpen,
};

export const About = () => {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen text-textPrimary">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent tracking-widest text-sm font-semibold uppercase mb-4 block">من نحن</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">مسيرتنا الممتدة منذ عام ١٩٩٦</h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg leading-relaxed font-light text-textMuted text-justify"
          >
            <p>
              إن مكتب عبد الرؤوف حسان لتدقيق الحسابات هو واحد من مكاتب التدقيق والاستشارات الرائدة في الجمهورية اليمنية، تأسس في عام ١٩٩٦م ليقدم خدمات متكاملة في مجالات تدقيق الحسابات وتأسيس وتشكيل الشركات، والخدمات الإدارية، والمشورة الضريبية والزكوية.
            </p>
            <p>
              يقود عمليات المكتب كفاءات مهنية مؤهلة تأهيلاً عالياً وتدعمها خبرات عربية وإقليمية متراكمة. نسعى دوماً لتزويد عملائنا بأفضل الحلول والخدمات المهنية التي تسهم بفعالية في تبسيط سير أعمالهم وتوفر عليهم الوقت والجهد والتكاليف.
            </p>
            <p>
              علاقتنا المهنية الوثيقة وتحالفاتنا الممتدة تمنحنا بعداً دولياً وتغطية ممتازة تضمن تقديم خدمات استشارية ومحاسبية بمعايير مهنية فائقة الجودة تلبي تطلعات عملائنا وتسهم في رفع كفاءة أداء مؤسساتهم.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-[3rem] bg-gradient-to-br from-accent to-primary/30 p-[1px] shadow-lg">
              <div className="w-full h-full bg-surface rounded-[3rem] flex flex-col items-center justify-center p-12 text-center">
                <span className="text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-accent to-[#8A733F] mb-4">٣٠+</span>
                <p className="text-xl font-medium text-primary">عاماً من العطاء والالتزام المهني</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="glass-card p-10 rounded-3xl bg-surface border border-black/5 shadow-sm">
            <h3 className="text-2xl font-bold text-primary mb-4">رسالتنـــا</h3>
            <p className="text-textMuted leading-relaxed font-light">
              نعمل بشكل دؤوب لكسب ثقة العملاء والتركيز على تحقيق رضاهم من خلال المصداقية والإتقان والتفاني بالعمل، عبر توفير جميع الخدمات والاستشارات المالية والمحاسبية والمراجعة القانونية التي يمكن أن يحتاجها العملاء في مكان واحد، لتلبية كافة احتياجاتهم وتحقيق أهدافهم بكفاءة.
            </p>
          </div>
          <div className="glass-card p-10 rounded-3xl bg-surface border border-black/5 shadow-sm">
            <h3 className="text-2xl font-bold text-primary mb-4">رؤيتنــــــــا</h3>
            <p className="text-textMuted leading-relaxed font-light">
              رؤيتنا هي الاستمرار في الحفاظ على مكانتنا كمكتب رائد من خلال تقديم خدمة متميزة من حيث الجودة وبأيدي أشخاص مؤهلين. كما نعتبر تأثيرنا المباشر على جودة الأداء واستمرارية الخدمة لعملائنا من خلال خبرتنا العميقة بمثابة الركيزة الأساسية لمكتبنا في فهم وتجاوب متطلبات عملائنا.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">قيمنا ومبادئنا المهنية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((val, idx) => {
              const Icon = iconsMap[val.title] || Award;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-br from-white/95 to-white/60 backdrop-blur-xl p-8 rounded-3xl border border-black/5 hover:border-accent/40 shadow-sm hover:shadow-[0_20px_45px_rgba(184,155,88,0.12)] flex flex-col h-full transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">{val.title}</h4>
                  <p className="text-textMuted leading-relaxed font-light text-sm">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Effectiveness Section */}
        <div className="bg-surface rounded-3xl p-10 md:p-12 border border-black/5 shadow-sm">
          <h3 className="text-2xl font-bold text-primary mb-6">فعالية خدماتنا ومنهجية عملنا</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-textMuted leading-relaxed font-light">
            <ul className="space-y-3 list-disc list-inside">
              <li>نمتلك منهجاً فكرياً تقييمياً يبحث عن الحقائق ويقيم البدائل لتقديم قرارات مقنعة.</li>
              <li>معرفة وتطبيق المعايير المهنية الدولية بفعالية في كافة قطاعات عملنا.</li>
              <li>البحث الدائم عن التطوير والابتكار وعدم الارتباط بالوضع الراهن أو الطرق التقليدية.</li>
            </ul>
            <ul className="space-y-3 list-disc list-inside">
              <li>متابعة التعليم المستمر والتطوير المهني لكادرنا ولمساعدة عملائنا على فهم التطورات.</li>
              <li>الريادة في مجال اتخاذ الأحكام المهنية المناسبة في الوقت الفعلي لدعم جودة الأداء.</li>
              <li>تحمل المسؤولية الفردية والجماعية عن كل خدمة نقدمها لعملائنا.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
