import React from 'react';
import { Briefcase, Stethoscope, Users, HardHat, Truck, Factory, Wrench, TrendingUp, ArrowRight } from 'lucide-react';
import { AudienceItem } from '../types';
import { motion } from 'motion/react';

const audiences: AudienceItem[] = [
  { label: 'Empresas B2B', icon: Briefcase },
  { label: 'Clínicas e Consultórios', icon: Stethoscope },
  { label: 'Escritórios Profissionais', icon: Users },
  { label: 'Construção Civil', icon: HardHat },
  { label: 'Logística e Transportes', icon: Truck },
  { label: 'Indústrias', icon: Factory },
  { label: 'Empresas de Serviços', icon: Wrench },
  { label: 'Negócios em Expansão', icon: TrendingUp },
];

const TargetAudience: React.FC = () => {
  return (
    <section id="audience" className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-zinc-100 mb-6 md:mb-8">
            Ideal para negócios que querem crescer no digital
          </h2>
          <p className="text-zinc-300 font-medium text-lg md:text-2xl leading-relaxed mb-8 md:mb-10">
            Trabalhamos com empresas que entendem a importância de uma presença digital forte para gerar oportunidades, fortalecer sua marca e escalar resultados.
          </p>
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#0A0A0A] border border-white/10 shadow-sm">
            <span className="text-zinc-400 text-xs md:text-sm font-medium tracking-widest uppercase">
              Alguns exemplos de segmentos atendidos:
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            const isB2B = item.label === 'Empresas B2B';
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                key={index}
                className="group rounded-2xl overflow-hidden cursor-default transform hover:-translate-y-1 transition-transform duration-500 border border-white/5 bg-[#0A0A0A] hover:bg-white/5 hover:border-white/10"
              >
                <div className="relative flex flex-col items-center justify-center p-4 md:p-6 w-full h-full text-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center mb-2 md:mb-3 transition-colors duration-500 text-zinc-400 group-hover:text-brand-accent">
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <h3 className="font-heading font-medium text-zinc-100 text-xs md:text-sm transition-colors duration-300">
                    {item.label}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-8 max-w-3xl mx-auto"
        >
          <p className="text-gray-400 text-xs md:text-sm italic">
            *Estes são apenas exemplos. A TecNova desenvolve estratégias para empresas que buscam autoridade, visibilidade e crescimento digital.
          </p>
        </motion.div>

        {/* Final Phrase & CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group bg-[#0A0A0A] rounded-3xl p-6 md:p-12 text-center relative overflow-hidden border border-white/5"
        >
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
              <div className="text-center md:text-left">
                <p className="text-white text-base md:text-xl font-medium mb-1 relative overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="block"
                  >
                    Independentemente do tamanho do seu negócio,
                  </motion.span>
                </p>
                <p className="text-brand-accent font-heading font-medium tracking-tight text-lg md:text-2xl relative overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }} 
                    whileInView={{ y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="block"
                  >
                    sua presença digital precisa transmitir autoridade.
                  </motion.span>
                </p>
              </div>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-quiz-modal'))}
                className="w-full md:w-auto relative inline-flex justify-center items-center gap-2 bg-brand-accent hover:bg-[#CC0000] text-white px-5 py-3 md:px-8 md:py-4 rounded-xl font-medium transition-colors group/btn text-sm md:text-base"
              >
                <span className="relative z-10 whitespace-normal text-center md:whitespace-nowrap">Vamos conversar</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1 shrink-0" />
              </button>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;