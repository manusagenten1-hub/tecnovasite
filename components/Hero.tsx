import React, { useRef } from 'react';
import Button from './Button';
import { CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });



  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 1.2 
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: "150%", rotate: 4 },
    visible: { 
      opacity: 1, 
      y: "0%", 
      rotate: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const phraseVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 1.5 
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 bg-brand-dark overflow-hidden">
      
      {/* Premium Minimalist Background */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center max-w-7xl mx-auto"
        >
          
          {/* Content */}
          <div className="w-full md:w-3/5 text-left pr-0 md:pr-12">
            <h1 className="flex flex-wrap justify-start items-center gap-x-2 sm:gap-x-3 mb-4 md:mb-6">
              {["Estruturas", "Digitais", "Projetadas", "para"].map((word, i) => (
                <span key={i} className="overflow-hidden inline-flex pb-1 sm:pb-3">
                  <motion.span variants={wordVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-zinc-100 leading-[1.1] tracking-tight origin-bottom-left">
                    {word}
                  </motion.span>
                </span>
              ))}
              <span className="overflow-hidden flex flex-wrap justify-start pb-1 sm:pb-3 w-full mt-2 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-[1.2] tracking-tighter text-brand-accent">
                <motion.span variants={phraseVariants} initial="hidden" animate="visible" className="flex flex-wrap justify-start gap-x-2 sm:gap-x-3" style={{ perspective: "1000px" }}>
                  {"Escalar Empresas".split(' ').map((word, index) => (
                    <motion.span key={index} variants={letterVariants} className="inline-block origin-bottom uppercase tracking-tight">
                      {word}
                    </motion.span>
                  ))}
                </motion.span>
              </span>
            </h1>
            
            <motion.h2 variants={itemVariants} className="text-lg md:text-2xl text-gray-400 font-medium mb-8 max-w-2xl leading-relaxed">
              Centralize sua presença digital e transforme marketing em uma ferramenta de crescimento.
            </motion.h2>

            {/* Mobile Logo */}
            <motion.div variants={itemVariants} className="md:hidden flex justify-center w-full mb-8 mt-4">
              <img src="https://i.ibb.co/67gXgsw6/Chat-GPT-Image-5-de-jun-de-2026-18-38-29.png" alt="TecNova Logo" className="h-[88px] sm:h-24 w-auto object-contain block drop-shadow-sm" />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-start mb-10 md:mb-12 w-full sm:w-auto mt-2 md:mt-6">
              <Button variant="primary" icon="arrow" onClick={() => window.dispatchEvent(new CustomEvent('open-quiz-modal'))} className="w-full sm:w-auto text-base md:text-lg px-8 py-4 md:px-10 md:py-5 font-bold tracking-wide">
                Começar Meu Projeto
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-gray-400 text-xs md:text-sm border-t border-brand-accent/20 pt-6 md:pt-8 w-full max-w-2xl">
              {[
                "Entregas rápidas",
                "Suporte humanizado",
                "Pagamento facilitado",
                "Pequenos e grandes negócios"
              ].map((text, i) => (
                <div key={i} className="flex items-center justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-accent flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Logo on Desktop (Right Side) */}
          <div className="w-full md:w-2/5 hidden md:flex items-center justify-center pl-4 lg:pl-12 relative z-10">
            <motion.img 
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              src="https://i.ibb.co/67gXgsw6/Chat-GPT-Image-5-de-jun-de-2026-18-38-29.png" 
              alt="TecNova" 
              className="w-full max-w-[350px] lg:max-w-[450px] h-auto object-contain" 
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;