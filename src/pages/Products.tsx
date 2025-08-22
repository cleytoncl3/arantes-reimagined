import { ArrowLeft, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import images
import kraftPaper from "@/assets/kraft-paper.jpg";
import customBags from "@/assets/custom-bags.jpg";
import plotterPaper from "@/assets/plotter-paper-roll.jpg";
import counterWrapping from "@/assets/counter-wrapping.jpg";
import automotiveMasking from "@/assets/automotive-masking-paper.jpg";
import plasticFilm from "@/assets/plastic-film-cutting.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Papel Kraft Puro",
      description: "Papel kraft de alta qualidade para embalagens e proteção",
      image: kraftPaper,
      category: "Papel",
      features: [
        "100% kraft puro",
        "Alta resistência",
        "Ecológico",
        "Diversas gramaturas"
      ]
    },
    {
      id: 2,
      name: "Bolsas Personalizadas", 
      description: "Bolsas kraft personalizadas com sua marca",
      image: customBags,
      category: "Bolsas",
      features: [
        "Impressão personalizada",
        "Várias medidas",
        "Kraft de qualidade",
        "Design exclusivo"
      ]
    },
    {
      id: 3,
      name: "Papel para Plotter",
      description: "Bobinas de papel para plotter em diversas medidas",
      image: plotterPaper,
      category: "Papel",
      features: [
        "Papel de alta qualidade",
        "Várias larguras",
        "Ideal para projetos",
        "Boa absorção de tinta"
      ]
    },
    {
      id: 4,
      name: "Embrulho de Balcão",
      description: "Soluções práticas para embalagem no ponto de venda",
      image: counterWrapping,
      category: "Papel",
      features: [
        "Papel resistente",
        "Fácil manuseio",
        "Econômico",
        "Diversas cores"
      ]
    },
    {
      id: 5,
      name: "Papel de Mascaramento Automotivo",
      description: "Papel especializado para proteção em pintura automotiva",
      image: automotiveMasking,
      category: "Especializado",
      features: [
        "Papel semi kraft",
        "Cor parda",
        "Proteção de vidros",
        "Resistente a tinta"
      ]
    },
    {
      id: 6,
      name: "Filme Plástico",
      description: "Filme plástico para proteção e embalagem",
      image: plasticFilm,
      category: "Plástico",
      features: [
        "Material resistente",
        "Transparente",
        "Proteção contra umidade",
        "Diversas espessuras"
      ]
    }
  ];

  const categories = ["Todos", "Papel", "Bolsas", "Especializado", "Plástico"];

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
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === "Todos" ? "default" : "secondary"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

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
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
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