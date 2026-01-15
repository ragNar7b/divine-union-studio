import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria e João Silva',
    location: 'São Paulo, SP',
    years: '15 anos de casados',
    text: 'Depois de 15 anos, pensávamos que nosso casamento não tinha mais jeito. O programa Aliança Sagrada nos mostrou que Deus tinha um plano maior. Hoje oramos juntos todos os dias e nossa intimidade foi restaurada!',
    rating: 5,
  },
  {
    name: 'Ana e Pedro Costa',
    location: 'Belo Horizonte, MG',
    years: '8 anos de casados',
    text: 'A comunicação era nosso maior problema. Brigas constantes, silêncios dolorosos. Os ensinamentos bíblicos do curso nos ensinaram a falar com amor e a ouvir com o coração. Glória a Deus!',
    rating: 5,
  },
  {
    name: 'Carla e Marcos Oliveira',
    location: 'Rio de Janeiro, RJ',
    years: '22 anos de casados',
    text: 'Estávamos à beira do divórcio. Uma amiga nos indicou e decidimos dar uma última chance. Foi a melhor decisão da nossa vida! Renovamos nossos votos e estamos mais apaixonados que nunca.',
    rating: 5,
  },
  {
    name: 'Juliana e Roberto Santos',
    location: 'Curitiba, PR',
    years: '5 anos de casados',
    text: 'Como casal jovem, achávamos que sabíamos tudo. O curso nos mostrou a profundidade do amor de Deus pelo casamento. Agora temos uma base sólida para construir nossa família.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-sacred relative overflow-hidden">
      {/* Decorative cross pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 0v18H0v4h18v18h4V22h18v-4H22V0h-4z' fill='%23000' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-burgundy font-medium text-sm uppercase tracking-wider">
            Testemunhos Reais
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Casais <span className="text-gradient-gold">Transformados</span> pela Graça
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Histórias reais de casais que experimentaram a restauração de Deus 
            em seus relacionamentos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="relative p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-shadow duration-300">
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/20" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-foreground font-body leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-divine flex items-center justify-center text-primary-foreground font-serif font-bold">
                    {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[2][0]}
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location} • {testimonial.years}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '2.347', label: 'Casais Transformados' },
            { value: '98%', label: 'Taxa de Satisfação' },
            { value: '4.9', label: 'Avaliação Média' },
            { value: '12', label: 'Estados do Brasil' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-gradient-gold">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1 font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
