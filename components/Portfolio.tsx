import React from 'react';
import { ExternalLink, Check } from 'lucide-react';
import { PortfolioItem } from '../types';
import { motion } from 'motion/react';

const projects: PortfolioItem[] = [
  {
    tag: 'Barbearia Premium',
    name: 'CorteFácil Atração',
    description: 'Reposicionamento de marca e ecossistema digital focado em performance, garantindo autoridade e automação na atração de clientes.',
    services: ['Tráfego Local', 'Posicionamento de Marca', 'Foco em Conversão', 'Copywriting'],
    imageUrl: 'https://i.ibb.co/DHM632Lt/Captura-de-tela-2026-02-16-203220.png',
    link: 'https://siteteste-pied.vercel.app/'
  },
  {
    tag: 'Restaurante Alto Padrão',
    name: 'Estratégia Fuego Prime',
    description: 'Aumento de previsibilidade e atração de clientes qualificados combinando Google Ads, SEO e uma incrível Experiência do Usuário (UX).',
    services: ['Google Ads', 'SEO e Autoridade', 'Site Estratégico', 'Performance Web'],
    imageUrl: 'https://i.ibb.co/5gLbQ50q/Captura-de-tela-2026-02-16-203425.png',
    link: 'https://site-demo-5jen.vercel.app/'
  },
  {
    tag: 'Delivery Expresso',
    name: 'Escala Brasa Burguer',
    description: 'Máquina de vendas estruturada com Landing Page de alta conversão e Meta Ads, desenhada para rápida tomada de decisão e escala fluida.',
    services: ['Performance e Analytics', 'Design de Conversão', 'Tracking (Pixel)', 'Experiência do Usuário'],
    imageUrl: 'https://i.ibb.co/PZyZFSFP/Captura-de-tela-2026-02-16-203557.png',
    link: 'https://site-demo-delivery.vercel.app/'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium tracking-tight text-zinc-100 mb-4 md:mb-6">
            Projetos que fortalecem marcas e geram resultados
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            Confira exemplos de estruturas digitais desenvolvidas para atrair atenção, gerar confiança e apoiar o crescimento de negócios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col bg-[#0A0A0A] rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 group relative"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Image Container */}
              <div className="relative h-48 md:h-64 overflow-hidden bg-gray-100 border-b border-gray-100">
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={`Projeto ${project.name}`}
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                />
                <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20 bg-brand-dark/80 backdrop-blur-md text-zinc-100 border border-white/10 text-[10px] md:text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {project.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-[#0A0A0A]">
                <h3 className="text-xl md:text-2xl font-heading font-medium text-zinc-100 mb-2 md:mb-3 transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 md:mb-6 leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>

                <div className="mb-6 md:mb-8 space-y-2">
                  {project.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-zinc-500">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-zinc-400" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;