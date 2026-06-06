import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, ArrowLeft, MessageCircle, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppLink } from '../constants';

const services = [
  {
    id: 'personalizado',
    title: 'Personalizado para meu estado atual',
    description: 'Aqui nós analisamos sua situação atual e entramos com a melhor estratégia para você.',
    isRecommended: true
  },
  {
    id: 'trafego_pago',
    title: 'Gestão de Tráfego Pago',
    description: 'Campanhas hiper-segmentadas em Meta e Google Ads focadas em ROI direto para seu serviço ou produto corporativo.',
  },
  {
    id: 'seo_estrategico',
    title: 'SEO e Posicionamento Orgânico',
    description: 'Domínio nas buscas orgânicas na sua região ou país, atraindo clientes qualificados do Google sem custo por clique.',
  },
  {
    id: 'site_conversao',
    title: 'Site de Alta Conversão',
    description: 'Construção de plataformas sólidas: Landing Pages, Sites Institucionais e E-commerces focados em venda e autoridade.',
  },
  {
    id: 'aceleracao_total',
    title: 'Projeto 360 (Tráfego + SEO + Site)',
    description: 'Nosso ecossistema completo para empresas que desejam dominar o mercado local ou escalar verticalmente nas metas de venda.',
  }
];

const deadlines = [
  'O quanto antes (Ativos não gerando venda)',
  'Próximo mês (Planejando escala)',
  'Próximos 3 meses',
  'Apenas mapeando mercado'
];

const QuizModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    empresa: '',
    servico: '',
    prazo: '',
    mensagem_adicional: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true);
      setStep(0);
    };

    window.addEventListener('open-quiz-modal', handleOpenModal);
    return () => window.removeEventListener('open-quiz-modal', handleOpenModal);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('quiz-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('quiz-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('quiz-open');
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep(0);
      setFormData({ nome: '', whatsapp: '', email: '', empresa: '', servico: '', prazo: '', mensagem_adicional: '' });
      setErrors({});
    }, 300);
  };

  const handleNextStep = () => {
    if (step === 1) {
      // Validate Step 1
      const newErrors: Record<string, string> = {};
      if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
      if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp é obrigatório';
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'E-email válido é obrigatório';
      if (!formData.empresa.trim()) newErrors.empresa = 'Nome da empresa é obrigatório';

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setErrors({});
    }
    
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFormSubmit = () => {
    let mensagem = `Olá! Tenho interesse em um projeto.
Nome: ${formData.nome}
Empresa: ${formData.empresa}
E-mail: ${formData.email}
Serviço: ${formData.servico || 'Não definido'}
Prazo: ${formData.prazo || 'Não definido'}`;

    if (formData.mensagem_adicional.trim()) {
      mensagem += `\nMensagem Adicional: ${formData.mensagem_adicional}`;
    }

    window.open(getWhatsAppLink(mensagem), '_blank');
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pt-20 sm:pt-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm" 
            onClick={closeModal} 
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-brand-dark p-6 flex justify-between items-center text-white shrink-0 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
               <div>
                 <h2 className="text-2xl font-heading font-bold text-white relative z-10">
                   {step === 0 ? 'Fale com a TecNova' : 'Vamos iniciar seu projeto'}
                 </h2>
                 {step > 0 && (
                   <p className="text-brand-accent text-sm mt-1 flex items-center gap-2 relative z-10">
                     <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                     Etapa {step} de 4
                   </p>
                 )}
               </div>
               <button 
                 onClick={closeModal}
                 className="p-2 rounded-full hover:bg-white/10 transition-colors relative z-10"
               >
                 <X className="w-6 h-6" />
               </button>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 overflow-y-auto grow" data-lenis-prevent="true">
              {step === 0 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg md:text-xl font-heading font-medium text-zinc-100 mb-4 md:mb-6">Como você prefere falar com a gente?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <button 
                       onClick={() => setStep(1)}
                       className="flex flex-row md:flex-col items-center md:justify-center p-4 md:p-8 rounded-2xl border-2 border-white/5 bg-[#141414] hover:bg-[#1a1a1a] hover:border-brand-accent transition-all group text-left md:text-center gap-4 md:gap-0"
                    >
                       <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform md:mb-4 border border-white/10">
                          <FileText className="w-5 h-5 md:w-6 md:h-6" />
                       </div>
                        <div>
                         <p className="font-medium text-zinc-100 mb-0.5 md:mb-2 text-base md:text-lg">Preencher formulário</p>
                         <p className="text-xs md:text-sm text-zinc-400">Responda um quiz rápido para já chegarmos com uma proposta ideal.</p>
                       </div>
                    </button>
                    
                    <button 
                       onClick={() => {
                          window.open(getWhatsAppLink(), '_blank');
                          closeModal();
                       }}
                       className="flex flex-row md:flex-col items-center md:justify-center p-4 md:p-8 rounded-2xl border-2 border-white/5 bg-[#141414] hover:bg-[#1a1a1a] hover:border-brand-green transition-all group text-left md:text-center gap-4 md:gap-0"
                    >
                       <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform md:mb-4 border border-white/10">
                          <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                       </div>
                        <div>
                         <p className="font-medium text-zinc-100 mb-0.5 md:mb-2 text-base md:text-lg">Mensagem direta</p>
                         <p className="text-xs md:text-sm text-zinc-400">Fale com um consultor agora mesmo sem preencher nada.</p>
                       </div>
                    </button>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-center gap-2 text-sm text-zinc-500">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                    </span>
                    <p>Respondemos em até 24 horas</p>
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-heading font-semibold text-brand-dark mb-6">Seus Dados</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome e Sobrenome *</label>
                    <input 
                      type="text" 
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all text-zinc-100"
                      placeholder="Ex: João da Silva"
                    />
                    {errors.nome && <span className="text-red-500 text-xs mt-1">{errors.nome}</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp (com DDD) *</label>
                    <input 
                      type="text" 
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all text-zinc-100"
                      placeholder="Ex: (11) 99999-9999"
                    />
                    {errors.whatsapp && <span className="text-red-500 text-xs mt-1">{errors.whatsapp}</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail Principal *</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all text-zinc-100"
                      placeholder="Ex: joao@empresa.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome da Empresa/Comércio/Produto *</label>
                    <input 
                      type="text" 
                      value={formData.empresa}
                      onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all text-zinc-100"
                      placeholder="Ex: Loja do João"
                    />
                    {errors.empresa && <span className="text-red-500 text-xs mt-1">{errors.empresa}</span>}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-heading font-semibold text-brand-dark mb-1">Qual o tipo de serviço que você deseja?</h3>
                  <p className="text-sm text-gray-500 mb-6">Escolha a primeira opção caso você não saiba o que precisa ainda.</p>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((svc) => (
                      <div 
                        key={svc.id}
                        onClick={() => setFormData({...formData, servico: svc.title})}
                        className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 flex items-start gap-3 ${formData.servico === svc.title || (svc.isRecommended && !formData.servico) ? 'border-brand-accent bg-brand-accent/5' : 'border-gray-100 hover:border-brand-accent/30'} ${svc.isRecommended ? 'shadow-[0_0_15px_rgba(230,0,0,0.1)]' : ''}`}
                      >
                        {svc.isRecommended && (
                          <div className="absolute -top-3 right-4 bg-brand-accent text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                            Mais recomendada
                          </div>
                        )}
                        <div className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${formData.servico === svc.title ? 'border-brand-accent bg-brand-accent' : (svc.isRecommended && !formData.servico) ? 'border-brand-accent/50' : 'border-gray-300'}`}>
                          {formData.servico === svc.title && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        <div>
                          <p className="font-semibold text-brand-dark text-sm mb-1">{svc.title}</p>
                          <p className="text-xs text-gray-600 leading-relaxed">{svc.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-heading font-semibold text-brand-dark mb-6">Qual seu prazo de entrega desejado?</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {deadlines.map((prazo) => (
                      <div 
                        key={prazo}
                        onClick={() => setFormData({...formData, prazo})}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 flex items-center gap-3 ${formData.prazo === prazo ? 'border-brand-accent bg-brand-accent/5' : 'border-gray-100 hover:border-brand-accent/30'}`}
                      >
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${formData.prazo === prazo ? 'border-brand-accent bg-brand-accent' : 'border-gray-300'}`}>
                          {formData.prazo === prazo && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        <p className="font-medium text-brand-dark text-sm">{prazo}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {step === 4 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-heading font-semibold text-brand-dark mb-1">Para finalizar, quer enviar alguma mensagem adicional?</h3>
                  <p className="text-sm text-gray-500 mb-6">Descreva detalhes do seu projeto ou dúvidas (Opcional).</p>
                  
                  <div>
                    <textarea 
                      value={formData.mensagem_adicional}
                      onChange={(e) => setFormData({...formData, mensagem_adicional: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all text-brand-dark min-h-[120px] resize-y"
                      placeholder="Ex: Quero um site parecido com o da empresa X, e preciso de integração com o meu sistema atual..."
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            {step > 0 && (
              <div className="bg-gray-50 p-4 sm:px-8 border-t border-gray-100 flex justify-between items-center shrink-0">
                 {step > 1 ? (
                   <button 
                    onClick={handlePrevStep}
                    className="px-4 py-2 text-gray-600 font-medium hover:text-brand-dark transition-colors flex items-center gap-2"
                   >
                     <ArrowLeft className="w-4 h-4" /> Voltar
                   </button>
                 ) : (
                   <div />
                 )}
                 
                 {step < 4 ? (
                   <button 
                    onClick={handleNextStep}
                    className="px-6 py-3 bg-brand-dark text-white rounded-lg font-medium hover:bg-[#0a1a35] transition-colors flex items-center gap-2"
                   >
                     Avançar <ArrowRight className="w-4 h-4" />
                   </button>
                 ) : (
                   <button 
                    onClick={handleFormSubmit}
                    className="px-6 py-3 bg-brand-accent text-white rounded-lg font-medium hover:bg-[#CC0000] transition-colors flex items-center gap-2"
                   >
                     Enviar e Falar <ArrowRight className="w-4 h-4" />
                   </button>
                 )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuizModal;
