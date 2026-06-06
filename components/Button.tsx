import React from 'react';
import { getWhatsAppLink } from '../constants';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import Magnetic from './Magnetic';
import { cn } from '../lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'outline';
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  icon?: 'whatsapp' | 'arrow' | 'none';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  fullWidth = false,
  onClick,
  icon = 'none'
}) => {
  const baseStyles = "relative overflow-hidden group inline-flex items-center justify-center gap-1.5 md:gap-2 px-5 py-3 md:px-8 md:py-4 rounded-full font-heading font-medium tracking-wide transition-all duration-300 ease-out";
  
  const variants = {
    primary: "bg-brand-accent text-white hover:bg-[#CC0000]",
    success: "bg-brand-green text-white hover:bg-[#27AE60]",
    outline: "border border-white/10 text-zinc-100 hover:bg-white hover:text-brand-dark"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.dispatchEvent(new CustomEvent('open-quiz-modal'));
    }
  };

  const buttonContent = (
    <button 
      onClick={handleClick}
      className={cn(baseStyles, variants[variant], widthClass, className)}
    >
      {/* Content wrapper */}
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
        {icon === 'whatsapp' && (
          <div className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            <MessageCircle className="w-5 h-5" />
          </div>
        )}
        <span>{children}</span>
        {icon === 'arrow' && (
          <div className="transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight className="w-5 h-5" />
          </div>
        )}
      </span>
    </button>
  );

  return (
    <Magnetic intensity={0.2}>
      {buttonContent}
    </Magnetic>
  );
};

export default Button;