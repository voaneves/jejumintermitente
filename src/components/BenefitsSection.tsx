import { Scale, Zap, Heart } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Scale,
      title: "Perda de peso com equilíbrio",
      description: "Emagreça de forma saudável e sustentável, sem dietas restritivas"
    },
    {
      icon: Zap,
      title: "Mais foco e energia",
      description: "Sinta-se mais disposto e concentrado no seu dia a dia"
    },
    {
      icon: Heart,
      title: "Aplicação simples",
      description: "Método fácil de seguir, sem sofrimento ou complicações"
    }
  ];

  return (
    <section className="py-16 px-4 bg-soft-green/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="font-poppins text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;