import { Card } from "@/components/ui/card";
import authorPhoto from "@/assets/author-photo.jpg";

const AuthorSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <Card className="p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
                Uma transformação real começa com uma decisão
              </h2>
              
              <div className="space-y-4 font-poppins text-foreground/80 leading-relaxed">
                <p>
                  <strong>Já cheguei a pesar impressionantes 120kg.</strong> Tentei dietas malucas, 
                  remédios "milagrosos" e nada funcionava de verdade.
                </p>
                
                <p>
                  Foi quando descobri o jejum intermitente que tudo mudou. Não foi só o peso que perdi - 
                  foram 35kg -, mas toda a minha relação com a comida e com meu corpo.
                </p>
                
                <p>
                  <strong>O melhor de tudo:</strong> foi simples, natural e sem sofrimento. 
                  Hoje vivo com mais energia, disposição e, principalmente, autoestima.
                </p>
                
                <p className="text-primary font-medium">
                  "Se eu consegui, você também consegue. E eu vou te mostrar exatamente como."
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <img 
                  src={authorPhoto} 
                  alt="Foto do autor" 
                  className="w-80 h-80 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm">
                  -35kg perdidos
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AuthorSection;