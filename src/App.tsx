import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Services } from './components/pages/Services';
import { Contact } from './components/pages/Contact';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      lenis.destroy();
    };
  }, []);

  const renderPage = () => {
    switch (currentHash) {
      case '#/about':
        return <About />;
      case '#/services':
        return <Services />;
      case '#/contact':
        return <Contact />;
      case '#/':
      default:
        return <Home />;
    }
  };

  return (
    <div className="font-sans min-h-screen bg-background text-foreground selection:bg-accent/30 relative" dir="rtl">
      <div className="fixed inset-0 z-[9999] pointer-events-none bg-noise" />
      <Navbar />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
