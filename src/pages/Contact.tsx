import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <div className="microtext text-primary mb-6">GET IN TOUCH</div>
            <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-primary leading-none editorial-spacing">
              CONTACT
              <span className="block text-5xl md:text-7xl lg:text-8xl mt-2">US</span>
            </h1>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 microtext rotate-text-90 text-primary/40 hidden lg:block">
              CONNECT • COLLABORATE • CREATE
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-8">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block microtext text-foreground/60 mb-2">
                    FULL NAME
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-2 border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block microtext text-foreground/60 mb-2">
                    EMAIL ADDRESS
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-2 border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block microtext text-foreground/60 mb-2">
                    PHONE NUMBER
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-2 border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block microtext text-foreground/60 mb-2">
                    SUBJECT
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="border-2 border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block microtext text-foreground/60 mb-2">
                    YOUR MESSAGE
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="border-2 border-primary/30 focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in-right">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-start gap-4 mb-2">
                    <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-display font-bold text-xl text-primary mb-2">Address</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Mar Baselios College of Engineering and Technology<br />
                        Nalanchira, Trivandrum<br />
                        Kerala, India - 695015
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-start gap-4 mb-2">
                    <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-display font-bold text-xl text-primary mb-2">Email</h3>
                      <a
                        href="mailto:iet@mbcet.ac.in"
                        className="text-foreground/80 hover:text-primary transition-fast"
                      >
                        iet@mbcet.ac.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-start gap-4 mb-2">
                    <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-display font-bold text-xl text-primary mb-2">Phone</h3>
                      <a
                        href="tel:+919876543210"
                        className="text-foreground/80 hover:text-primary transition-fast"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 border-4 border-primary aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-primary mx-auto mb-4" />
                  <p className="microtext text-foreground/60">MAP VIEW</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
