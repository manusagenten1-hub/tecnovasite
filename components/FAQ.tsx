import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: 'Quanto tempo leva para o projeto ficar pronto?',
    answer: (
      <p>O desenvolvimento de um <strong>site profissional</strong> leva em torno de 2 semanas, dependendo da complexidade do projeto. Já as estratégias de <strong>Tráfego Pago</strong> e <strong>SEO</strong> variam por segmento, podendo levar de 1 a 3 meses para maturação e resultados consistentes.</p>
    )
  },
  {
    question: 'Eu preciso entender de marketing ou tecnologia para acompanhar o trabalho?',
    answer: (
      <p><strong>Não.</strong> Nós construímos a arquitetura e apresentamos os relatórios de forma clara e executiva. Nosso objetivo é que você tome decisões focadas no crescimento da sua empresa, sem precisar operar as ferramentas complexas de tracking (Pixel, GTM, Analytics) ou a gestão das campanhas.</p>
    )
  },
  {
    question: 'A TecNova trabalha com tráfego pago, SEO e sites?',
    answer: (
      <p><strong>Sim.</strong> Somos uma agência especializada em posicionamento e performance. Construímos sua presença digital através de um <strong>Site de Alta Conversão</strong>, posicionamos sua marca no longo prazo com <strong>SEO</strong> e aceleramos as oportunidades de vendas com campanhas escaláveis de <strong>Tráfego Pago</strong>.</p>
    )
  },
  {
    question: 'O que está incluso no serviço?',
    answer: (
      <>
        <p className="mb-3">Você recebe o ecossistema completo para a sua tração comercial:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Criação de Site Profissional ou Landing Page focada em conversão</li>
          <li>Setup completo de Tracking (GTM, Pixel, Conversions API, Analytics)</li>
          <li>Gestão proficiente de Campanhas em Google Ads e Meta Ads</li>
          <li>Otimização de SEO (on-page e off-page)</li>
          <li>Copywriting persuasivo visando dor e desejo do público</li>
        </ul>
      </>
    )
  },
  {
    question: 'Posso solicitar ajustes depois da entrega?',
    answer: (
      <p><strong>Com certeza.</strong> O marketing não é estático. Ajustamos o site, otimizamos o SEO, trocamos criativos das campanhas (vídeos/imagens) e redirecionamos as estratégias ao longo do percurso para sempre buscar o melhor resultado.</p>
    )
  },
  {
    question: 'Como funciona o pagamento?',
    answer: (
      <p>Os valores e formas de pagamento são sempre discutidos de forma transparente antes do fechamento. No geral, nossos projetos de sites operam com <strong>pagamentos únicos (sem mensalidades)</strong>. Adaptamos cada proposta baseando-se no volume de entrega exigido.</p>
    )
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 pt-20 md:py-24 pb-48 md:pb-64 bg-[#0A0A0A] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium tracking-tight text-zinc-100 mb-4 md:mb-6">
            Dúvidas? Veja algumas perguntas frequentes
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-brand-dark border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
              >
                <h3 className="font-heading font-medium text-zinc-100 text-base md:text-lg group-hover:text-brand-accent transition-colors pr-4">
                  {faq.question}
                </h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === index ? 'bg-brand-accent text-white rotate-180' : 'bg-white/5 text-zinc-100 group-hover:bg-white/10'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 md:px-8 md:pb-6 text-zinc-400 text-sm md:text-base border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
