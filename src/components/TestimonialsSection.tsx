import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      location: "São Paulo, SP",
      text: "Perdi 12kg em 3 meses seguindo o método. O melhor é que não senti que estava fazendo dieta, foi muito natural!",
      rating: 5,
      result: "-12kg em 3 meses"
    },
    {
      name: "Rafael Santos",
      location: "Rio de Janeiro, RJ", 
      text: "Estava cético no início, mas os resultados apareceram rápido. Mais energia, menos ansiedade com comida. Recomendo!",
      rating: 5,
      result: "-8kg em 2 meses"
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