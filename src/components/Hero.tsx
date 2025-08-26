import { ArrowRight, Package, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background-improved.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Embalagens que
              <span className="block text-accent">Encantam</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              Especialistas em papéis kraft, e muitos outros tipos de papéis, soluções completas para embalagens. Verifique nosso catálogo. 
              Qualidade premium para seu negócio.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-slide-up">
            <Button variant="accent" size="lg" className="group w-full sm:w-auto" asChild>
              <Link to="/produtos">
                Ver Nossos Produtos
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto" asChild>
              <a href="#contact">
                Entre em Contato
              </a>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-slide-up">
            <div className="flex items-center space-x-3 text-white/90">
              <div className="p-2 bg-white/20 rounded-lg">
                <Package className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">Produtos Premium</p>
                <p className="text-sm text-white/70">Kraft puro de alta qualidade</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white/90">
              <div className="p-2 bg-white/20 rounded-lg">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">Entrega Rápida</p>
                <p className="text-sm text-white/70">Logística eficiente</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white/90">
              <div className="p-2 bg-white/20 rounded-lg">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">Garantia Total</p>
                <p className="text-sm text-white/70">Qualidade assegurada</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Element */}
      <div className="absolute bottom-8 right-8 hidden lg:block animate-float">
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Package className="h-8 w-8 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;