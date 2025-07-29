import { Card } from "@/components/ui/card";
import { Gift, Calendar, UtensilsCrossed } from "lucide-react";

const BonusSection = () => {
  const bonuses = [
    {
      icon: Calendar,
      title: "Bônus #1: Checklist de 7 Dias",
      description: "Um guia passo a passo para sua primeira semana perfeita",
      value: "R$ 47,90"
    },
    {
      icon: UtensilsCrossed,
      title: "Bônus #2: Mini Cardápio Prático",
      description: "20 refeições deliciosas e adequadas para o jejum",
      value: "R$ 37,00"
    }
  ];

  return (
    <section className="py-16 px-4 bg-wellness/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Gift className="w-12 h-12 text-primary" />
          </div>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bônus Exclusivos
          </h2>
          <p className="font-poppins text-lg text-muted-foreground">
            Para garantir seu sucesso desde o primeiro dia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="p-6 text-center border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <bonus.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h3 className="font-poppins font-bold text-xl text-foreground mb-3">
                {bonus.title}
              </h3>
              
              <p className="font-poppins text-muted-foreground mb-4 leading-relaxed">
                {bonus.description}
              </p>
              
              <div className="text-primary font-bold text-lg">
                Valor: {bonus.value}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="font-poppins text-lg text-foreground">
            <span className="line-through text-muted-foreground">Total: R$ 84,90</span>
            <span className="block text-2xl font-bold text-primary mt-2">
              Hoje: GRÁTIS com sua compra!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
