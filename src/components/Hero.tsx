import { ArrowRight, Package, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
// Background image will be used directly from uploads

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/7f008e3a-fd51-4e59-97bc-242eee2ce529.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Embalagens que
              <span className="block text-accent">Encantam</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Especialistas em papéis kraft, bolsas personalizadas e soluções completas para embalagens. 
              Qualidade premium para seu negócio.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
            <Button variant="accent" size="xl" className="group">
              Ver Nossos Produtos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Entre em Contato
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
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