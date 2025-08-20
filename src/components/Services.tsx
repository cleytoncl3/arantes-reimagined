import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, FileText, Printer, Gift } from "lucide-react";
import kraftPaper from "@/assets/kraft-paper.jpg";
import customBags from "@/assets/custom-bags.jpg";

const Services = () => {
  const paperSpecs = [
    "Papel Kraft puro 60gr",
    "Papel Kraft puro 80gr", 
    "Papel Kraft puro 115gr",
    "Papel Kraft puro 125gr",
    "Papel Kraft puro 150gr",
    "Papel Kraft puro 200gr",
    "Papel Kraft puro 300gr",
    "Papel Kraft puro 420gr",
    "Strong 60gr",
    "S/Kraft 45gr e 80gr",
    "Kraftmix 40gr (com riscos)",
    "Papel para sublimação",
    "Papel para proteção de calandra",
    "Papel intercalar 20gr",
    "Plástico tubular 0,12 esp.",
  ];

  return (
    <>
      {/* Papers Section */}
      <section id="papers" className="py-20 paper-texture">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Papéis & Embalagens
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos uma linha completa de papéis kraft e materiais para embalagem, 
              com qualidade superior e todas as especificações técnicas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img 
                src={kraftPaper} 
                alt="Papéis kraft em bobinas" 
                className="w-full h-96 object-cover rounded-2xl shadow-medium"
              />
            </div>
            
            <div className="animate-slide-up">
              <Card className="shadow-medium border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-3">
                    <FileText className="h-8 w-8" />
                    Especificações Técnicas
                  </CardTitle>
                  <CardDescription className="text-base">
                    Papéis kraft em bobinas de 1,20lg a 1,60lg
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {paperSpecs.map((spec, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="hero" className="mt-6 w-full">
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Bags Section */}
      <section id="bags" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Bolsas Personalizadas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Criamos bolsas exclusivas para sua marca, com design personalizado 
              e materiais de alta qualidade que valorizam seus produtos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up order-2 lg:order-1">
              <Card className="shadow-medium border-0 bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-3">
                    <Gift className="h-8 w-8" />
                    Bolsas Premium
                  </CardTitle>
                  <CardDescription className="text-base">
                    Soluções personalizadas para presentes e varejo
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Package className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="font-semibold">Diversos Tamanhos</p>
                      <p className="text-sm text-muted-foreground">Sob medida</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Printer className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="font-semibold">Impressão Personalizada</p>
                      <p className="text-sm text-muted-foreground">Sua marca</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Características:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Alças resistentes e confortáveis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Papel kraft de alta gramatura</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Impressão em cores vibrantes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Acabamento premium</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button variant="accent" className="w-full">
                    Criar Bolsa Personalizada
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-slide-up order-1 lg:order-2">
              <img 
                src={customBags} 
                alt="Bolsas personalizadas" 
                className="w-full h-96 object-cover rounded-2xl shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section id="plotter" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Serviços Adicionais
            </h2>
            <p className="text-xl text-muted-foreground">
              Soluções completas para todas as suas necessidades de embalagem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Printer className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Plotter</CardTitle>
                <CardDescription>
                  Papéis para plotter em várias medidas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Embrulho de Balcão</CardTitle>
                <CardDescription>
                  Soluções práticas para o dia a dia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Consultoria</CardTitle>
                <CardDescription>
                  Ajudamos você a escolher a melhor solução
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Agendar Consulta
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;