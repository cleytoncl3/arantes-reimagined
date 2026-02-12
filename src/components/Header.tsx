import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: "Início", href: "#home", isRoute: false },
    { name: "Papéis Kraft", href: "#papers", isRoute: false },
    { name: "Linha de Papéis", href: "#services", isRoute: false },
    { name: "Filme Plástico", href: "#plastic-film", isRoute: false },
    { name: "Produtos", href: "/produtos", isRoute: true },
    { name: "Contato", href: "#contact", isRoute: false },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
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
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 sm:gap-4">
              <img 
                src="/lovable-uploads/c6b97b98-8817-4bd3-8fa9-f094a25b4e17.png" 
                alt="Arantes Papéis Logo" 
                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain"
              />
              <div className="min-w-0 flex-1">
                <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-primary leading-tight">
                  ARANTES PAPÉIS
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Embalagens e Soluções</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                if (item.isRoute) {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    >
                      {item.name}
                    </Link>
                  );
                } else if (isHomePage) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    >
                      {item.name}
                    </a>
                  );
                } else {
                  return (
                    <Link
                      key={item.name}
                      to={`/${item.href}`}
                      className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    >
                      {item.name}
                    </Link>
                  );
                }
              })}
              <Button variant="hero" size="sm" asChild>
                <a href="https://api.whatsapp.com/send?l=pt_br&phone=5521996062282" target="_blank" rel="noopener noreferrer">
                  Orçamento
                </a>
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t animate-fade-in">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  if (item.isRoute) {
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-foreground hover:text-primary transition-colors duration-300 px-2 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  } else if (isHomePage) {
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors duration-300 px-2 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    );
                  } else {
                    return (
                      <Link
                        key={item.name}
                        to={`/${item.href}`}
                        className="text-foreground hover:text-primary transition-colors duration-300 px-2 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  }
                })}
                <Button variant="hero" size="sm" className="mt-4 w-fit" asChild>
                  <a href="https://api.whatsapp.com/send?l=pt_br&phone=5521996062282" target="_blank" rel="noopener noreferrer">
                    Orçamento
                  </a>  
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;