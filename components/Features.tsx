import React from 'react';
import { Laptop, Zap, Target, Search, Server, Globe, UserCheck, LayoutDashboard } from 'lucide-react';
import { ServiceItem } from '../types';
import { motion } from 'motion/react';

const features: ServiceItem[] = [
  { icon: Target, title: 'Tráfego Pago', description: 'Campanhas estratégicas para alcançar mais pessoas certas.' },
  { icon: Search, title: 'SEO Estratégico', description: 'Otimização para melhorar a presença orgânica da marca.' },
  { icon: Laptop, title: 'Sites Profissionais', description: 'Páginas modernas, rápidas e pensadas para conversão.' },
  { icon: Globe, title: 'Landing Pages', description: 'Páginas objetivas para campanhas, captação de leads e vendas.' },
  { icon: Zap, title: 'Estratégia de Conversão', description: 'Estrutura pensada para transformar visitantes em oportunidades.' },
  { icon: LayoutDashboard, title: 'Acompanhamento', description: 'Análise de desempenho para orientar decisões com clareza.' },
];

const Features: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* Left Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
                Tudo o que seu negócio precisa para crescer no digital
              </h2>
              <motion.div 
                initial={{ scaleX: 0 }} 
                whileInView={{ scaleX: 1 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="h-[2px] w-16 md:w-24 bg-brand-accent mb-6 md:mb-8 origin-left"
              ></motion.div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Você não precisa se preocupar com a parte técnica. A <strong className="text-brand-accent">TecNova</strong> estrutura sua presença digital para gerar autoridade, visibilidade e clientes.
              </p>
            </motion.div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#0A0A0A] p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-start mb-4 md:mb-6">
                    <Icon className="w-6 h-6 text-zinc-400 group-hover:text-brand-accent transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-medium text-zinc-100 mb-2 md:mb-3 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed relative z-10 transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;