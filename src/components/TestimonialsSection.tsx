import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jandérik Marins",
      location: "Palmas, TO",
      text: "O guia é super prático e fácil de seguir. Consegui eliminar 10kg em apenas dois meses sem passar fome. Me sinto outra pessoa!",
      rating: 5,
      result: "-10kg em 2 meses"
    },
    {
      name: "Maria José",
      location: "Goiânia, GO",
      text: "Sempre achei que jejum era sofrimento, mas este e-book mudou minha visão. Perdi 7kg de forma tranquila e ganhei muita disposição!",
      rating: 5,
      result: "-7kg em 3 meses"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
            Veja os Resultados Reais
          </h2>
          <p className="font-poppins text-lg text-muted-foreground">
            Pessoas como você que transformaram suas vidas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 shadow-lg hover:shadow-xl transition-shadow relative">
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-6" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="font-poppins text-foreground/80 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-poppins font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </p>
                  <p className="font-poppins text-muted-foreground text-sm">
                    {testimonial.location}
                  </p>
                </div>
                
                <div className="bg-primary/10 px-3 py-1 rounded-full">
                  <span className="font-poppins text-primary font-bold text-sm">
                    {testimonial.result}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
