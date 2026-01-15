import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle, HeartCrack, MessageCircleOff, Moon } from 'lucide-react';

const problems = [
  {
    icon: MessageCircleOff,
    title: 'Comunicação Quebrada',
    description: 'Conversas que viram discussões, silêncios que machucam mais que palavras.',
  },
  {
    icon: HeartCrack,
    title: 'Intimidade Perdida',
    description: 'A conexão física e emocional que existia parece ter desaparecido.',
  },
  {
    icon: Moon,
    title: 'Distância Espiritual',
    description: 'Vocês não oram mais juntos, não buscam a Deus como casal.',
  },
  {
    icon: AlertCircle,
    title: 'Medo do Futuro',
    description: 'Incerteza sobre se o casamento vai resistir às tempestades.',
  },
];

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-cream relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60M0 30L60 30' stroke='%23000' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-burgundy font-medium text-sm uppercase tracking-wider">
            Você não está sozinho
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Milhares de casais cristãos enfrentam{' '}
            <span className="text-burgundy">as mesmas lutas</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Se você se identifica com alguma dessas situações, saiba que existe um caminho 
            de restauração através da Palavra de Deus.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-burgundy opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              <div className="relative p-6 bg-card rounded-2xl border border-border shadow-card hover:border-burgundy/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-rose group-hover:bg-rose/80 transition-colors">
                    <problem.icon className="w-6 h-6 text-burgundy" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg text-foreground mb-2 group-hover:text-foreground">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground font-body group-hover:text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
