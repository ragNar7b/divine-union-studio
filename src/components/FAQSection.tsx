import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'O programa é apenas para casais em crise?',
    answer: 'Não! O programa é para qualquer casal que deseja fortalecer seu casamento à luz da Palavra de Deus. Seja você recém-casado querendo começar com o pé direito, ou um casal de décadas buscando renovação, os ensinamentos são aplicáveis a todos.',
  },
  {
    question: 'Meu cônjuge não quer participar. Posso fazer sozinho(a)?',
    answer: 'Sim! Muitos casais começaram com apenas um dos cônjuges participando. Os princípios que você aprenderá podem transformar sua atitude e comportamento, o que naturalmente influenciará positivamente seu relacionamento. Muitos cônjuges resistentes acabam se interessando ao ver as mudanças.',
  },
  {
    question: 'Em quanto tempo verei resultados?',
    answer: 'Muitos casais relatam melhorias já na primeira semana, especialmente na comunicação e na vida devocional. Transformações mais profundas costumam acontecer ao longo de 30-60 dias de aplicação consistente dos ensinamentos.',
  },
  {
    question: 'O conteúdo é de qual denominação?',
    answer: 'Os ensinamentos são baseados exclusivamente na Bíblia e nos princípios universais do cristianismo. Casais de todas as denominações evangélicas, católicas e protestantes têm aproveitado e se beneficiado do conteúdo.',
  },
  {
    question: 'Como funciona a garantia de 7 dias?',
    answer: 'Você tem 7 dias para acessar todo o conteúdo e, se por qualquer motivo sentir que o programa não é para você, basta enviar um email solicitando o reembolso. Devolvemos 100% do seu investimento, sem perguntas.',
  },
  {
    question: 'Por quanto tempo terei acesso ao conteúdo?',
    answer: 'Seu acesso é vitalício! Você pode assistir quantas vezes quiser, no seu ritmo, e terá acesso a todas as atualizações futuras sem custo adicional.',
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-burgundy font-medium text-sm uppercase tracking-wider">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border shadow-card px-6 data-[state=open]:border-gold/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-serif font-semibold text-lg hover:no-underline hover:text-gold py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
