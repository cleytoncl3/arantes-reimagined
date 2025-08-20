import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
      <section id="services" className="py-20">
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Saiba Mais
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3">
                        <Printer className="h-6 w-6 text-secondary" />
                        Serviços de Plotter
                      </DialogTitle>
                      <DialogDescription>
                        Papéis especiais para impressão em plotter com qualidade profissional
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Tipos de Papel Disponíveis:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span>Papel bond 75g/m² - ideal para desenhos técnicos</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span>Papel vegetal 90g/m² - transparente para sobreposições</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span>Papel fotográfico - para impressões de alta qualidade</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span>Papel para CAD - resistente e durável</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Formatos Disponíveis:</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <p className="font-medium">A0 - 841 x 1189mm</p>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <p className="font-medium">A1 - 594 x 841mm</p>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <p className="font-medium">A2 - 420 x 594mm</p>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <p className="font-medium">Medidas personalizadas</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <p className="text-sm">
                          <strong>Aplicações:</strong> Projetos arquitetônicos, plantas baixas, mapas, 
                          desenhos técnicos, impressões fotográficas de grande formato e muito mais.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Saiba Mais
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3">
                        <Gift className="h-6 w-6 text-accent" />
                        Embrulho de Balcão
                      </DialogTitle>
                      <DialogDescription>
                        Materiais práticos e elegantes para embrulho no seu estabelecimento
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Produtos Disponíveis:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span>Papel kraft liso em bobinas - 60cm, 80cm e 100cm</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span>Papel kraft colorido - diversas cores disponíveis</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span>Papel crepom - textura especial para presentes</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span>Papel contact transparente - proteção e acabamento</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span>Fitas decorativas - laços e acabamentos</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Características:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <p className="font-medium">Resistente</p>
                            <p className="text-sm text-muted-foreground">Suporta produtos pesados</p>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <p className="font-medium">Versátil</p>
                            <p className="text-sm text-muted-foreground">Para diversos tipos de produto</p>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <p className="font-medium">Econômico</p>
                            <p className="text-sm text-muted-foreground">Ótimo custo-benefício</p>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <p className="font-medium">Sustentável</p>
                            <p className="text-sm text-muted-foreground">Material reciclável</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Saiba Mais
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3">
                        <Package className="h-6 w-6 text-primary" />
                        Consultoria Especializada
                      </DialogTitle>
                      <DialogDescription>
                        Orientação profissional para escolher as melhores soluções em embalagens
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Nossos Serviços de Consultoria:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Análise das necessidades do seu negócio</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Seleção de materiais adequados por tipo de produto</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Otimização de custos sem perder qualidade</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Soluções sustentáveis e eco-friendly</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Desenvolvimento de embalagens personalizadas</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Como Funciona:</h4>
                        <div className="space-y-3">
                          <div className="flex gap-3">
                            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">1</div>
                            <div>
                              <p className="font-medium">Análise Inicial</p>
                              <p className="text-sm text-muted-foreground">Entendemos seu negócio e necessidades</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">2</div>
                            <div>
                              <p className="font-medium">Proposta Personalizada</p>
                              <p className="text-sm text-muted-foreground">Apresentamos soluções sob medida</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">3</div>
                            <div>
                              <p className="font-medium">Implementação</p>
                              <p className="text-sm text-muted-foreground">Acompanhamos todo o processo</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <p className="text-sm">
                          <strong>Agende uma consulta gratuita</strong> e descubra como podemos 
                          ajudar a melhorar suas soluções de embalagem com mais de 30 anos de experiência no mercado.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;