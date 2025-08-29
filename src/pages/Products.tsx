import { ArrowLeft, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import images
import kraftPaper from "@/assets/kraft-paper.jpg";
import plotterPaper from "@/assets/plotter-paper-roll.jpg";
import counterWrapping from "@/assets/counter-wrapping.jpg";
import automotiveMasking from "/lovable-uploads/4808232a-407c-4f4b-8470-bb67fee34280.png";
import plasticFilm from "@/assets/plastic-film-cutting.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Papel Kraft Puro",
      description: "Papel kraft de alta qualidade para embalagens e proteção",
      image: kraftPaper,
      features: [
        "100% kraft puro",
        "Alta resistência", 
        "Ecológico",
        "Diversas gramaturas"
      ]
    },
    {
      id: 2,
      name: "Papel para Plotter",
      description: "Bobinas de papel para plotter em diversas medidas",
      image: plotterPaper,
      features: [
        "Papel de alta qualidade",
        "Várias larguras",
        "Ideal para projetos",
        "Boa absorção de tinta"
      ]
    },
    {
      id: 3,
      name: "Embrulho de Balcão",
      description: "Soluções práticas para embalagem no ponto de venda",
      image: counterWrapping,
      features: [
        "Papel resistente",
        "Fácil manuseio",
        "Econômico",
        "Sustentável"
      ]
    },
    {
      id: 4,
      name: "Papel de Mascaramento Automotivo",
      description: "Proteção profissional para pintura automotiva e muito mais",
      image: automotiveMasking,
      features: [
        "Papel semi kraft",
        "Cor parda",
        "Proteção de vidros",
        "Resistente a tinta"
      ]
    },
    {
      id: 5,
      name: "Filme Plástico para Máquinas de Corte",
      description: "Filme plástico especializado para máquinas de corte têxtil",
      image: plasticFilm,
      features: [
        "Material reciclado",
        "Alta resistência",
        "Proteção contra sujeiras",
        "Resistente a rasgos"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Nossos Produtos
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Conheça nossa linha completa de produtos para embalagem e proteção
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="shadow-soft hover:shadow-medium transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="hero" 
                    className="w-full"
                    asChild
                  >
                    <a 
                      href="https://api.whatsapp.com/send?l=pt_br&phone=5521996062282"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Package className="h-4 w-4 mr-2" />
                      Solicitar Orçamento
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto shadow-medium border-0 bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Não encontrou o que procura?</h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato conosco! Temos soluções personalizadas para suas necessidades específicas.
                </p>
                <Button 
                  variant="accent" 
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://api.whatsapp.com/send?l=pt_br&phone=5521996062282"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com Especialista
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;