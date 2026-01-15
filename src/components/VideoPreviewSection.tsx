import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Play, CheckCircle } from 'lucide-react';

const modules = [
  'Módulo 1: Os Fundamentos Bíblicos do Casamento',
  'Módulo 2: Comunicação Cristã no Casamento',
  'Módulo 3: Restaurando a Intimidade',
  'Módulo 4: Orações e Devocionais em Casal',
  'Módulo 5: Perdão e Reconciliação',
  'Módulo 6: Construindo um Legado de Fé',
];

export const VideoPreviewSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 bg-cream relative overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-burgundy font-medium text-sm uppercase tracking-wider">
            Conheça o Método
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Veja o Que Você Vai <span className="text-gradient-gold">Aprender</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Video Preview */}
          <motion.div
            style={{ scale, opacity }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-elevated group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-burgundy/90 to-burgundy flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-divine"
              >
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </motion.div>
            </div>
            
            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
              <p className="text-primary-foreground font-serif text-lg">
                Assista uma aula gratuita
              </p>
              <p className="text-primary-foreground/70 text-sm">
                5 minutos que podem mudar seu casamento
              </p>
            </div>

            {/* Decorative glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold/30 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* Modules list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              12 Módulos Completos
            </h3>
            
            {modules.map((module, index) => (
              <motion.div
                key={module}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-divine flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-body text-foreground">{module}</span>
              </motion.div>
            ))}

            <p className="text-muted-foreground font-body pt-4">
              + 6 módulos bônus sobre temas específicos como finanças, 
              criação de filhos e ministério familiar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
