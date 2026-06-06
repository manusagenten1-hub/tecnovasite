import React from 'react';
import { PenTool, Layout, MousePointerClick, Zap, Search, Plug } from 'lucide-react';
import { StrategyItem } from '../types';
import { motion } from 'motion/react';

const strategies: StrategyItem[] = [
  {
    icon: Search,
    title: 'SEO e Autoridade Local',
    description: 'Estratégias avançadas para posicionar sua empresa no topo das buscas do Google e dominar sua região.'
  },
  {
    icon: Layout,
    title: 'Sites de Alta Performance',
    description: 'Plataformas web profissionais e rápidas, desenvolvidas especificamente para converter visitantes em leads.'
  },
  {
    icon: Zap,
    title: 'Gestão de Tráfego Pago',
    description: 'Campanhas hiper-segmentadas no Meta e Google Ads para atrair clientes prontos para comprar diariamente.'
  },
  {
    icon: PenTool,
    title: 'Copywriting Estratégico',
    description: 'Comunicação persuasiva e alinhada ao nível de consciência do seu cliente para eliminar objeções.'
  },
  {
    icon: MousePointerClick,
    title: 'Otimização de Conversão (CRO)',
    description: 'Análise de métricas e ajustes contínuos para garantir que cada centavo do seu investimento traga retorno.'
  },
  {
    icon: Plug,
    title: 'Estruturação de Vendas',
    description: 'Integramos ferramentas para que seu time receba leads organizados e prontos para fechamento via WhatsApp.'
  }
];

const Strategy: React.FC = () => {
  return (
    <section id="strategy" className="py-16 md:py-24 bg-brand-dark text-white relative border-t border-brand-accent/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium tracking-tight mb-4 md:mb-6">
            Muito mais do que cliques. <br className="hidden md:block" />
            <span className="text-brand-accent">Escala previsível.</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto">
            Na TecNova, sua empresa não contrata apenas serviços soltos, ganha uma engrenagem de vendas completa. Dominamos todas as etapas de aquisição de clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {strategies.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-[#0A0A0A] border border-white/5 p-6 md:p-8 rounded-2xl hover:border-white/10 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-start mb-4 md:mb-6 transition-all duration-300 relative z-10">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-zinc-400 group-hover:text-brand-accent transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-medium mb-2 md:mb-3 transition-colors duration-300 relative z-10 text-zinc-100">{item.title}</h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300 relative z-10">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Strategy;