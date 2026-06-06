import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from './Button';
import { motion } from 'motion/react';

const benefits = [
  "Estratégia de conversão bem definida",
  "Autoridade digital para sua marca",
  "Comunicação clara e profissional",
  "Entrega ágil e organizada",
  "Serviços alinhados ao seu objetivo",
  "Suporte pós-entrega com foco em evolução"
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-brand-dark overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
        <div className="flex flex-col items-center">
          
          {/* Content Side */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium tracking-tight text-zinc-100 mb-10 md:mb-14 leading-tight">
                Marketing pensado para gerar crescimento, não apenas <span className="text-brand-accent">presença</span>.
              </h2>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-10 md:mb-14"
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  key={index} 
                  className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-xl bg-[#0A0A0A] hover:bg-white/5 transition-colors border border-white/5 hover:border-white/10 group cursor-default"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-brand-accent group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <p className="text-zinc-100 font-medium text-base md:text-lg text-left">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center"
            >
                <Button variant="primary" icon="arrow" onClick={() => window.dispatchEvent(new CustomEvent('open-quiz-modal'))} className="w-full md:w-auto">
                    Quero minha presença digital estratégica
                </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;