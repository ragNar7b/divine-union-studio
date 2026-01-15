import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Heart, Users, Sparkles, Cross, Crown } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Fundamentos Bíblicos',
    description: 'Ensinamentos diretos das Escrituras sobre o propósito divino do casamento.',
  },
  {
    icon: Heart,
    title: 'Restauração da Intimidade',
    description: 'Técnicas e princípios para reconectar corpo, alma e espírito com seu cônjuge.',
  },
  {
    icon: Users,
    title: 'Comunicação Cristã',
    description: 'Aprenda a dialogar com amor, paciência e graça — como Cristo nos ensinou.',
  },
  {
    icon: Cross,
    title: 'Oração em Casal',
    description: 'Roteiros e práticas para fortalecer a vida devocional juntos.',
  },
  {
    icon: Crown,
    title: 'Papéis no Casamento',
    description: 'Entenda os papéis bíblicos sem machismo, com amor e respeito mútuos.',
  },
  {
    icon: Sparkles,
    title: 'Renovação Diária',
    description: 'Práticas simples para manter a chama acesa todos os dias.',
  },
];

export const SolutionSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-24 bg-ivory relative overflow-hidden">
      {/* Animated background orb */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-rose/20 blur-3xl"
      />

      <div className="container relative z-10 px-4">
        <motion.div
          style={{ opacity }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-dark font-medium text-sm uppercase tracking-wider">
            A Solução
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            O Método <span className="text-gradient-gold">Aliança Sagrada</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Um programa completo baseado na Palavra de Deus para transformar 
            seu casamento em uma união abençoada e plena.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative h-full p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated hover:border-gold/30 transition-all duration-300">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-divine opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-divine flex items-center justify-center mb-6 shadow-divine group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
