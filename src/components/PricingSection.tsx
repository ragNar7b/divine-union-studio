import { motion } from 'framer-motion';
import { Check, Clock, Shield, Gift, Zap, BookOpen, Video, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from './CountdownTimer';

const included = [
  { icon: Video, text: '12 módulos em vídeo (40+ horas)' },
  { icon: BookOpen, text: 'E-book "Orações para Casais"' },
  { icon: Users, text: 'Acesso à comunidade exclusiva' },
  { icon: Gift, text: 'Bônus: Retiro Virtual de Casais' },
];

const guarantees = [
  'Garantia incondicional de 7 dias',
  'Acesso vitalício ao conteúdo',
  'Suporte por email prioritário',
  'Atualizações gratuitas',
];

export const PricingSection = () => {
  return (
    <section className="py-24 bg-ivory relative overflow-hidden" id="pricing">
      {/* Animated glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl animate-pulse-glow" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-burgundy font-medium text-sm uppercase tracking-wider">
            Oferta Especial por Tempo Limitado
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Invista no Seu <span className="text-gradient-gold">Casamento Abençoado</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Um investimento único para uma transformação que durará toda a vida.
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="bg-burgundy/10 border border-burgundy/20 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-burgundy" />
              <span className="text-burgundy font-semibold">Oferta expira em:</span>
            </div>
            <CountdownTimer />
          </div>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="relative">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-burgundy text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Zap className="w-4 h-4" />
                MAIS POPULAR
              </div>
            </div>

            <div className="relative bg-card rounded-3xl border-2 border-gold/30 shadow-elevated overflow-hidden">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
              
              <div className="relative p-8 md:p-10">
                {/* Price */}
                <div className="text-center mb-8">
                  <p className="text-muted-foreground line-through text-lg mb-1">
                    De R$ 497,00
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl font-body text-foreground">R$</span>
                    <span className="text-6xl md:text-7xl font-serif font-bold text-gradient-gold">
                      197
                    </span>
                    <span className="text-muted-foreground text-lg self-end mb-2">,00</span>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    ou 12x de R$ 19,70 sem juros
                  </p>
                </div>

                {/* What's included */}
                <div className="space-y-4 mb-8">
                  {included.map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-rose flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-burgundy" />
                      </div>
                      <span className="font-body text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-divine text-primary-foreground hover:opacity-90 shadow-divine py-7 text-lg font-semibold rounded-full transition-all hover:scale-[1.02]"
                >
                  Quero Transformar Meu Casamento
                </Button>

                {/* Guarantees */}
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex items-center gap-2 mb-4 text-center justify-center">
                    <Shield className="w-5 h-5 text-gold" />
                    <span className="font-semibold text-foreground">Garantias Incluídas</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {guarantees.map((guarantee) => (
                      <div key={guarantee} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{guarantee}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scarcity */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-burgundy font-medium animate-pulse">
            ⚠️ Apenas 23 vagas restantes com esse preço especial
          </p>
        </motion.div>
      </div>
    </section>
  );
};
