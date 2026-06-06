import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import Strategy from './components/Strategy';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Preloader from './components/Preloader';

import QuizModal from './components/QuizModal';
import Lenis from 'lenis';

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main className="min-h-screen bg-brand-dark text-brand-text overflow-hidden">

      <QuizModal />
      <Preloader />
      <Header />
      <Hero />
      <TargetAudience />
      <Strategy />
      <Features />
      <Portfolio />
      <Process />
      <WhyChooseUs />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default App;