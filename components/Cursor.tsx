import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const Cursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Configuramos a física da mola para rastreamento (Ravi Klaassens style - smooth follow)
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Apenas rodar em telas maiores (+ desktop)
    // Omitimos a troca de cursores customizados em mobile puro por responsividade natural de toque
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setIsDesktop(false);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Define todos os casos interativos onde o cursor deve crescer
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.group\\/btn') // Suporte para portfolio cards/botoes aninhados
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    if (isDesktop) {
      // Injeta CSS puramente via react para ocultar o ponteiro padrao e exibir apenas a bola invertida
      const style = document.createElement('style');
      style.innerHTML = `
        body:not(.quiz-open) * { cursor: none !important; }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 w-6 h-6 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        scale: isHovered ? 2.5 : 1,
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Quando damos hover, mostramos um pequeno ponto interior para mais precisão visual */}
      <AnimateDot isHovered={isHovered} />
    </motion.div>
  );
};

// Componente extraído para gerenciar limpeza do dot interno
const AnimateDot = ({ isHovered }: { isHovered: boolean }) => {
  if (!isHovered) return null;
  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="w-1.5 h-1.5 bg-black rounded-full mix-blend-difference" 
    />
  )
}

export default Cursor;
