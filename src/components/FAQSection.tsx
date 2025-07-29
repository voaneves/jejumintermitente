import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O jejum intermitente é seguro para qualquer pessoa?",
      answer: "O jejum intermitente é seguro para a maioria das pessoas saudáveis. No entanto, recomendamos consultar um médico antes de começar, especialmente se você tem condições médicas preexistentes, está grávida ou amamentando."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os primeiros resultados podem aparecer já na primeira semana, como mais energia e menos inchaço. A perda de peso consistente geralmente é notada a partir da segunda semana, dependendo do seu metabolismo e aderência ao método."
    },
    {
      question: "Posso beber água durante o jejum?",
      answer: "Sim! Durante o período de jejum, você pode beber água, chás sem açúcar e café sem adoçantes. A hidratação é fundamental e não quebra o jejum. O e-book explica detalhadamente o que é permitido em cada fase."
    },
    {
      question: "E se eu não conseguir seguir o método?",
      answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito com o conteúdo, devolvemos 100% do seu dinheiro. Sem perguntas, sem complicações."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
            Dúvidas Frequentes
          </h2>
          <p className="font-poppins text-lg text-muted-foreground">
            Esclarecemos as principais questões sobre o jejum intermitente
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
              <AccordionTrigger className="font-poppins text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;