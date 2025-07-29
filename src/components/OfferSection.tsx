import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Download, Shield } from "lucide-react";
import guaranteeBadge from "@/assets/guarantee-badge.png";

const OfferSection = () => {
  const handleCTAClick = () => {
    window.open("https://hotmart.com/produto/jejum-intermitente-ebook", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-soft-green/20 to-soft-beige/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-5xl font-bold text-foreground mb-6">
            Oferta Especial por Tempo Limitado
          </h2>
          <p className="font-poppins text-lg text-muted-foreground">
            Invista na sua transformação hoje mesmo
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-2xl border-2 border-primary/20">
          <div className="text-center">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h3 className="font-poppins text-2xl font-bold text-foreground mb-4">
                  E-book + Bônus Exclusivos
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Download className="w-5 h-5 text-primary" />
                    <span className="font-poppins">Download Imediato</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="font-poppins">Garantia de 7 dias</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-poppins">Acesso vitalício</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src={guaranteeBadge} 
                  alt="Garantia de 7 dias" 
                  className="w-32 h-32"
                />
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-center items-center gap-4 mb-4">
                <span className="font-poppins text-2xl text-muted-foreground line-through">
                  De R$ 39,90
                </span>
                <span className="font-poppins text-4xl md:text-5xl font-bold text-primary">
                  R$ 19,90
                </span>
              </div>
              <p className="font-poppins text-sm text-muted-foreground">
                Oferta por tempo limitado
              </p>
            </div>

            <Button 
              variant="cta-large" 
              size="xl" 
              onClick={handleCTAClick}
              className="w-full md:w-auto mb-4 pulse"
            >
              SIM, Quero Baixar Agora!
            </Button>
            
            <p className="font-poppins text-sm text-muted-foreground">
              Pagamento 100% seguro • Acesso imediato após compra
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default OfferSection;