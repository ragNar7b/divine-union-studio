import { motion } from 'framer-motion';
import { Heart, Cross, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 text-gold opacity-30"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cross size={60} />
      </motion.div>
      
      <motion.div 
        className="absolute top-40 right-20 text-gold-light opacity-40"
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Heart size={40} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 left-20 text-gold opacity-25"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Sparkles size={50} />
      </motion.div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose/50 border border-gold/20 mb-8"
          >
            <Heart className="w-4 h-4 text-burgundy" fill="currentColor" />
            <span className="text-sm font-medium text-burgundy">
              Mais de 2.000 casais transformados
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6"
          >
            Transforme Seu Casamento em uma{' '}
            <span className="text-gradient-gold">Aliança Sagrada</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
          >
            Descubra os ensinamentos bíblicos que vão reconectar você e seu cônjuge 
            espiritualmente, emocionalmente e fisicamente — sob as bênçãos de Deus.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-divine text-primary-foreground hover:opacity-90 shadow-divine px-8 py-6 text-lg font-semibold rounded-full transition-all hover:scale-105"
            >
              <Cross className="w-5 h-5 mr-2" />
              Quero Transformar Meu Casamento
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-burgundy/30 text-burgundy hover:bg-burgundy hover:text-primary-foreground px-8 py-6 text-lg rounded-full transition-all"
            >
              Assistir Depoimentos
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-divine border-2 border-background"
                  />
                ))}
              </div>
              <span className="text-sm">+2.000 casais</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-gold">★</span>
              ))}
              <span className="text-sm ml-1">4.9/5 avaliações</span>
            </div>
            <div className="text-sm">
              🔒 Garantia de 7 dias
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2">
          <motion.div 
            className="w-1.5 h-3 rounded-full bg-gold"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
