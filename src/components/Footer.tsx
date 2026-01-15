import { Heart, Cross } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground/70">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative">
              <Heart className="w-8 h-8 text-gold" />
              <Cross className="w-4 h-4 text-primary-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <span className="font-serif font-bold text-xl text-primary-foreground">
              Aliança Sagrada
            </span>
          </div>

          <p className="text-sm max-w-md mb-6">
            Transformando casamentos através da Palavra de Deus desde 2020.
          </p>

          <div className="flex gap-6 text-sm mb-8">
            <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gold transition-colors">Contato</a>
          </div>

          <div className="pt-6 border-t border-primary-foreground/10 w-full text-center text-xs">
            <p>© 2024 Aliança Sagrada. Todos os direitos reservados.</p>
            <p className="mt-2">
              "O que Deus uniu, não separe o homem." - Mateus 19:6
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
