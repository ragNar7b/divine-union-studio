import { motion } from 'framer-motion';
import { Cross, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FinalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-burgundy relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gold/20 blur-2xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-rose/20 blur-3xl"
      />

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Heart className="w-16 h-16 text-gold" />
                <Cross className="w-8 h-8 text-primary-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Seu Casamento Merece uma{' '}
              <span className="text-gold-light">Nova Chance</span>
            </h2>

            <p className="text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto mb-10">
              Deus não desiste de você. Não desista do seu casamento. 
              Hoje pode ser o primeiro dia de uma nova história de amor e fé.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-light text-foreground shadow-divine px-10 py-7 text-lg font-semibold rounded-full transition-all group"
              >
                Transformar Meu Casamento Agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <p className="mt-6 text-primary-foreground/60 text-sm">
              🔒 Pagamento 100% seguro • Garantia de 7 dias
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
