import { BackgroundPaths } from '@/components/ui/background-paths';
import { StatsBar } from '@/components/sections/StatsBar';
import { About } from '@/components/sections/About';
import { TagAffiliation } from '@/components/sections/TagAffiliation';
import { Services } from '@/components/sections/Services';
import { Sectors } from '@/components/sections/Sectors';
import { WhyUs } from '@/components/sections/WhyUs';

export const Home = () => {
  return (
    <>
      <section id="hero">
        <BackgroundPaths 
          title="AHA Office" 
          slogan="شركاؤكم في النمو والتميز المهني - خبرات متراكمة منذ عام ١٩٩٦" 
        />
      </section>
      <StatsBar />
      <div className="relative">
        <About />
        <div className="text-center pb-20 bg-background relative z-10">
          <a
            href="#/about"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-md"
          >
            اقرأ المزيد عن مكتبنا
          </a>
        </div>
      </div>
      <TagAffiliation />
      <WhyUs />
      <Services />
      <Sectors />
    </>
  );
};
