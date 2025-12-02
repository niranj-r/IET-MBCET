import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Lightbulb, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <div className="microtext text-primary mb-6">INSTITUTION OF ENGINEERING AND TECHNOLOGY</div>
              <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-primary leading-none mb-6 editorial-spacing">
                IET
                <span className="block text-5xl md:text-7xl lg:text-8xl mt-2">MBCET</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-md font-light">
                Empowering engineers through innovation, collaboration, and technical excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="font-display font-bold">
                  <Link to="/contact">
                    Join IET
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="font-display font-bold border-2 border-primary">
                  <Link to="/contact">Connect With Us</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="aspect-square bg-primary/5 border-4 border-primary p-8 relative">
                <div className="absolute -top-8 -right-8 microtext rotate-text-90 text-primary">
                  ENGINEERING • INNOVATION • EXCELLENCE
                </div>
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Lightbulb size={120} className="text-primary" />
                </div>
                <div className="absolute -bottom-4 left-8 bg-primary text-primary-foreground px-6 py-3">
                  <div className="font-display font-bold text-2xl">EST. 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-in">
              <h2 className="font-display font-bold text-5xl md:text-7xl text-primary mb-6 leading-tight">
                About
                <span className="block text-4xl md:text-6xl mt-2">IET MBCET</span>
              </h2>
            </div>
            
            <div className="space-y-6 animate-fade-in-right">
              <p className="text-lg text-foreground/80 leading-relaxed">
                The Institution of Engineering and Technology (IET) MBCET chapter is a student-led organization dedicated to fostering technical excellence and innovation among engineering students.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We organize workshops, technical events, and collaborative projects that bridge the gap between academic learning and industry requirements, preparing students for successful engineering careers.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                <div className="border-l-4 border-primary pl-4">
                  <div className="font-display font-bold text-4xl text-primary mb-1">500+</div>
                  <div className="microtext text-foreground/60">Active Members</div>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="font-display font-bold text-4xl text-primary mb-1">50+</div>
                  <div className="microtext text-foreground/60">Events Conducted</div>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="font-display font-bold text-4xl text-primary mb-1">10+</div>
                  <div className="microtext text-foreground/60">Years Legacy</div>
                </div>
              </div>
              
              <Button variant="outline" size="lg" className="mt-8" asChild>
                <Link to="/team">
                  Meet Our Team
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="microtext text-primary mb-3">UPCOMING & ONGOING</div>
              <h2 className="font-display font-bold text-5xl md:text-7xl text-primary">
                Latest Events
              </h2>
            </div>
            <Link 
              to="/events" 
              className="hidden md:block microtext text-primary hover:text-primary/80 transition-fast"
            >
              VIEW ALL EVENTS →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Tech Workshop 2024",
                description: "Hands-on workshop on emerging technologies",
                date: "15 DEC 2024",
                status: "UPCOMING",
                category: "WORKSHOP"
              },
              {
                id: 2,
                title: "Innovation Hackathon",
                description: "24-hour coding marathon for innovative solutions",
                date: "20 DEC 2024",
                status: "ONGOING",
                category: "COMPETITION"
              },
              {
                id: 3,
                title: "Industry Connect",
                description: "Guest lectures from industry experts",
                date: "05 JAN 2025",
                status: "UPCOMING",
                category: "SEMINAR"
              },
            ].map((event, idx) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="group cursor-pointer animate-fade-in border-2 border-primary/20 hover:border-primary transition-smooth overflow-hidden block"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Event Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calendar size={48} className="text-primary/30" />
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground microtext">
                    {event.status}
                  </div>
                </div>
                
                {/* Event Details */}
                <div className="p-8">
                  <div className="microtext text-primary mb-3">{event.category}</div>
                  <h3 className="font-display font-bold text-2xl text-primary mb-3 group-hover:translate-x-2 transition-smooth">
                    {event.title}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-foreground/60 mb-6">
                    <Calendar size={14} />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-smooth">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="microtext text-primary-foreground/60 mb-6 text-center">MEMBERS CORNER</div>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-center mb-16">
            What Our Members Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "IET MBCET has been instrumental in shaping my technical skills and professional network.",
                name: "Rahul Krishnan",
                role: "Final Year, CSE"
              },
              {
                quote: "The workshops and events organized by IET have given me practical industry exposure.",
                name: "Priya Menon",
                role: "Third Year, ECE"
              },
              {
                quote: "Being part of IET's organizing committee taught me leadership and event management.",
                name: "Arun Kumar",
                role: "Alumni, 2023"
              },
            ].map((testimonial, idx) => (
              <div 
                key={idx} 
                className="border border-primary-foreground/20 p-8 animate-fade-in hover:bg-primary-foreground/5 transition-smooth"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Quote className="text-primary-foreground/40 mb-4" size={32} />
                <p className="text-lg mb-6 leading-relaxed text-primary-foreground/90">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-primary-foreground/20 pt-4">
                  <div className="font-display font-bold text-lg">{testimonial.name}</div>
                  <div className="microtext text-primary-foreground/60">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
