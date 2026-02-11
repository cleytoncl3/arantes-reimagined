import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Create a hidden iframe to handle the form submission
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'form-iframe';
    document.body.appendChild(iframe);
    
    // Create a hidden form to submit to FormSubmit.co
    const hiddenForm = document.createElement('form');
    hiddenForm.method = 'POST';
    hiddenForm.action = 'https://formsubmit.co/arantespapeis@hotmail.com';
    hiddenForm.target = 'form-iframe'; // Submit to the hidden iframe
    hiddenForm.style.display = 'none';
    
    // Add all form data to hidden form
    formData.forEach((value, key) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value.toString();
      hiddenForm.appendChild(input);
    });
    
    // Add FormSubmit.co configuration
    const configs = [
      { name: '_subject', value: 'Nova solicitação de orçamento - Arantes Papéis' },
      { name: '_captcha', value: 'false' },
      { name: '_template', value: 'table' },
      { name: '_autoresponse', value: 'Obrigado! Recebemos sua solicitação e retornaremos em breve.' }
    ];
    
    configs.forEach(config => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = config.name;
      input.value = config.value;
      hiddenForm.appendChild(input);
    });
    
    document.body.appendChild(hiddenForm);
    
    try {
      // Submit the hidden form to the iframe
      hiddenForm.submit();
      
      // Show success message and reset form
      setTimeout(() => {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Retornaremos seu contato em breve. Obrigado!",
        });
        form.reset();
        setIsLoading(false);
        
        // Clean up
        document.body.removeChild(hiddenForm);
        document.body.removeChild(iframe);
      }, 1000);
      
    } catch (error) {
      toast({
        title: "Erro no envio",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
      setIsLoading(false);
      
      // Clean up
      document.body.removeChild(hiddenForm);
      document.body.removeChild(iframe);
    }
  };

  return (
    <section id="contact" className="py-20 paper-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você! Entre em contato conosco e descubra 
            como podemos ajudar com suas necessidades de embalagem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-medium border-0 bg-card/90 backdrop-blur-sm animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <Send className="h-7 w-7" />
                Solicite seu Orçamento
              </CardTitle>
              <CardDescription className="text-base">
                Preencha o formulário e retornaremos em breve
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome *
                    </label>
                    <Input 
                      id="name" 
                      name="name"
                      required 
                      className="w-full" 
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <Input 
                      id="company" 
                      name="company"
                      className="w-full" 
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      required 
                      className="w-full" 
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefone *
                    </label>
                    <Input 
                      id="phone" 
                      name="phone"
                      required 
                      className="w-full" 
                      placeholder="(21) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium mb-2">
                    Produto de Interesse
                  </label>
                  <select 
                    id="product" 
                    name="product"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Selecione um produto</option>
                    <option value="kraft-paper">Papel Kraft</option>
                    <option value="custom-bags">Bolsas Personalizadas</option>
                    <option value="plotter">Papel para Plotter</option>
                    <option value="wrapping">Embrulho de Balcão</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <Textarea 
                    id="message" 
                    name="message"
                    required 
                    className="w-full h-32" 
                    placeholder="Descreva suas necessidades, quantidade, especificações..."
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
                  <Send className="mr-2 h-4 w-4" />
                  {isLoading ? "Enviando..." : "Enviar Solicitação"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <Card className="shadow-soft border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                    <p className="text-muted-foreground mb-2">
                      Ligue para nós ou envie um WhatsApp
                    </p>
                    <p className="font-medium text-primary text-lg">
                      (21) 99606-2282
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">E-mail</h3>
                    <p className="text-muted-foreground mb-2">
                      Envie-nos uma mensagem
                    </p>
                    <p className="font-medium text-secondary text-lg">
                      arantespapeis@hotmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Horário de Atendimento</h3>
                    <p className="text-muted-foreground mb-2">
                      Segunda a Sexta-feira
                    </p>
                    <p className="font-medium">8h às 17h</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Sábados: 8h às 12h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="shadow-medium border-0 accent-gradient text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl mb-2">Precisa de Urgência?</h3>
                <p className="mb-4 text-white/90">
                  Para pedidos urgentes, fale com nosso time direto no whatsapp
                </p>
                <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30" asChild>
                  <a href="https://api.whatsapp.com/send?l=pt_br&phone=5521996062282" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" />
                    Ligar Agora
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;