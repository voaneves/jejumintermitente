import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import ebookMockup from "@/assets/ebook-mockup.jpg";

const ProductSection = () => {
  const contents = [
    "O que é jejum intermitente e como funciona no seu corpo",
    "Os 3 tipos principais de jejum e qual escolher",
    "Como começar de forma gradual e segura",
    "Cardápio completo para cada fase do jejum",
    "Como lidar com a fome inicial (dicas práticas)",
    "Erros mais comuns e como evitá-los",
    "Exercícios ideais durante o jejum",
    "Como manter os resultados a longo prazo"
  ];

  const handleCTAClick = () => {
    window.open("https://hotmart.com/produto/jejum-intermitente-ebook", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-soft-beige/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-5xl font-bold text-foreground mb-6">
            Conheça o Método Completo
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Um guia prático e detalhado para você dominar o jejum intermitente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Card className="p-8 shadow-lg">
              <h3 className="font-poppins text-2xl font-bold text-foreground mb-6">
                O que você vai aprender:
              </h3>
              
              <div className="space-y-3 mb-8">
                {contents.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-poppins text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleCTAClick}
                className="w-full"
              >
                Quero Ter Acesso Agora
              </Button>
            </Card>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src={ebookMockup} 
              alt="E-book Jejum Intermitente" 
              className="max-w-md w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;