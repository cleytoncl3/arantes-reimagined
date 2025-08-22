import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/lovable-uploads/c6b97b98-8817-4bd3-8fa9-f094a25b4e17.png" 
                alt="Arantes Papéis Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold">ARANTES PAPÉIS & APAPÉIS</h3>
                <p className="text-sm text-primary-foreground/70">
                  CNPJ: 47.821.127/0001-35
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Especialistas em papéis kraft, bolsas personalizadas e soluções completas 
              para embalagens há mais de 10 anos no mercado.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(21) 99606-2282</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>arantespapeis@hotmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#papers" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Papéis Kraft
                </a>
              </li>
              <li>
                <a href="#bags" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Bolsas
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Produtos</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-primary-foreground/80">Papel Kraft Puro</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Bolsas Personalizadas</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Papel para Plotter</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Embrulho de Balcão</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © {new Date().getFullYear()} Arantes Papéis & Apapéis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;