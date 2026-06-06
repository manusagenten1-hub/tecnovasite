import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS, getWhatsAppLink } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform-gpu ${
        isScrolled 
          ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo removed per user request */}
          <div className="w-10"></div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="relative text-gray-300 hover:text-white font-medium py-2 transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-brand-accent origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
              </a>
            ))}
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-quiz-modal'))}
              className="relative overflow-hidden group border border-white/10 bg-white/5 text-zinc-100 px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-black"
            >
              <span className="relative z-10 tracking-wide">Falar com Consultor</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-accent p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              exit={{ clipPath: 'inset(0 0 100% 0)' }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="md:hidden absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-t border-white/5 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex flex-col p-6 gap-6">
                {NAVIGATION_LINKS.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="block text-zinc-300 hover:text-white text-xl font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => {
                    setIsOpen(false);
                    window.dispatchEvent(new CustomEvent('open-quiz-modal'));
                  }}
                  className="bg-white text-center text-black py-4 rounded-xl font-medium mt-4 w-full"
                >
                  Começar Meu Projeto
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Header;