import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Quote, Handshake, GraduationCap, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { events } from "@/data/events";

const Index = () => {
  const latestEvents = [...events].sort((a, b) => b.id - a.id).slice(0, 3);

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
                <div className="w-full h-full relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent mix-blend-overlay z-10" />
                  <img
                    src="/hero.svg"
                    alt="IET MBCET Hero"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-4 left-8 bg-primary text-primary-foreground px-6 py-3">
                  <div className="font-display font-bold text-2xl">EST. 2016</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-cream-dark dark:bg-maroon-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div className="animate-fade-in">
              <h2 className="font-display font-bold text-5xl md:text-7xl text-primary mb-6 leading-tight">
                About
                <span className="block text-4xl md:text-6xl mt-2">IET MBCET</span>
              </h2>
            </div>

            <div className="space-y-6 animate-fade-in-right">
              <p className="text-lg text-primary leading-relaxed" style={{ textAlign: "justify" }}>
                IET MBCET On Campus is a vibrant student chapter with around <strong>200 active members</strong> from
                <strong> EEE, ECE, CSE, and Mechanical Engineering</strong> streams. Supported by
                <strong> six faculty members from the EEE department</strong>, the chapter serves as a strong academic
                and professional community within the institution.
              </p>

              <p className="text-lg text-primary leading-relaxed" style={{ textAlign: "justify" }}>
                Since its induction, IET MBCET has been an integral part of the
                <strong> IET Kanyakumari Local Network</strong>. The chapter actively works towards
                inspiring, promoting, and guiding both members and non-members through
                <strong> skill development programmes, outreach initiatives, and life skill programmes</strong>,
                fostering holistic professional and personal growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                <div className="border-l-4 border-primary pl-4">
                  <div className="font-display font-bold text-4xl text-primary mb-1">200+</div>
                  <div className="microtext text-foreground/60">Student Members</div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <div className="font-display font-bold text-4xl text-primary mb-1">6</div>
                  <div className="microtext text-foreground/60">Faculty Mentors</div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <div className="font-display font-bold text-4xl text-primary mb-1">4</div>
                  <div className="microtext text-foreground/60">Engineering Streams</div>
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

      {/* Vision & Core Values */}
      <section className="py-24">
        {/* Vision */}
        <div className="max-w-7xl mx-auto px-6 mb-24 animate-fade-in-up delay-200">
          <div className="border-l-4 border-primary pl-8 py-2">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6">VISION</h2>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl leading-relaxed">
              To Inspire, Inform & Influence the global engineering community. Provide international exposure through international events.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-primary/5 py-24 animate-fade-in-up delay-300">
          <div className="max-w-7xl mx-auto px-6">
            <div className="border-l-4 border-primary pl-8 pt-2">
              <div className="text-left mb-16">
                <h2 className="font-display font-bold text-4xl md:text-6xl text-primary">OUR CORE VALUES</h2>
              </div>
            </div>

            <div className="flex flex-col mt-12 bg-primary/5 px-7">
              {/* Integrity */}
              <div className="group flex flex-col md:flex-row gap-8 py-12 border-t border-primary/20 animate-fade-in-up delay-400">
                <div className="flex-1 flex gap-6">
                  <ArrowUpRight className="text-primary mt-2 flex-shrink-0" size={24} />
                  <h3 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight">
                    Integrity
                  </h3>
                </div>
                <div className="flex-1 md:max-w-xl">
                  <p className="text-lg text-foreground/80 leading-relaxed" style={{ textAlign: "justify" }}>
                    Operate professionally and ethically to gain trust. Be open and honest with each other. Respect everyone and value each other's contribution.
                  </p>
                </div>
              </div>

              {/* Excellence */}
              <div className="group flex flex-col md:flex-row gap-8 py-12 border-t border-primary/20 animate-fade-in-up delay-500">
                <div className="flex-1 flex gap-6">
                  <ArrowUpRight className="text-primary mt-2 flex-shrink-0" size={24} />
                  <h3 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight">
                    Excellence
                  </h3>
                </div>
                <div className="flex-1 md:max-w-xl">
                  <p className="text-lg text-foreground/80 leading-relaxed" style={{ textAlign: "justify" }}>
                    Work towards the highest level of service and satisfaction. Use agile methods and seek innovative solutions to add value. Continually improve and adopt best practices.
                  </p>
                </div>
              </div>

              {/* Teamwork */}
              <div className="group flex flex-col md:flex-row gap-8 py-12 border-t border-primary/20 border-b animate-fade-in-up delay-700">
                <div className="flex-1 flex gap-6">
                  <ArrowUpRight className="text-primary mt-2 flex-shrink-0" size={24} />
                  <h3 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight">
                    Teamwork
                  </h3>
                </div>
                <div className="flex-1 md:max-w-xl">
                  <p className="text-lg text-foreground/80 leading-relaxed" style={{ textAlign: "justify" }}>
                    Encourage staff and volunteers to work together. Recognise the value of talented individuals working in teams. Be collaborative and partner with other organisations.
                  </p>
                </div>
              </div>
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
            {latestEvents.map((event, idx) => (
              <Link
                key={event.id}
                to={`/events/details/${event.id}`}
                className="group cursor-pointer animate-fade-in border-2 border-primary/20 hover:border-primary transition-smooth overflow-hidden block"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Event Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Calendar size={48} className="text-primary/30" />
                    </div>
                  )}
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
