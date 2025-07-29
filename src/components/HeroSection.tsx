import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const handleCTAClick = () => {
    window.open("https://pay.kiwify.com.br/gf4I9Ei", "_blank");
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 bg-background/60"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="font-poppins text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Transforme sua saúde com um
          <span className="text-primary block">método leve e natural</span>
        </h1>
        
        <p className="font-poppins text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Aprenda como o jejum intermitente pode te ajudar a emagrecer com consciência e bem-estar
        </p>
        
        <Button 
          variant="cta-large" 
          size="xl" 
          onClick={handleCTAClick}
          className="animate-pulse hover:animate-none mb-4"
        >
          Quero Começar Agora
        </Button>
        
        <p className="text-sm text-muted-foreground">
          ✓ Download imediato • ✓ Garantia de 7 dias • ✓ Método comprovado
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
