import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Users, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { events } from "@/data/events"

const EventDetails = () => {
  const { id } = useParams();

  const event = events.find(e => e.id === parseInt(id || "0"));

  if (!event) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="font-display font-bold text-4xl text-primary mb-4">Event Not Found</h1>
            <Button asChild>
              <Link to="/events">Back to Events</Link>
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute -right-12 top-1/2 -translate-y-1/2 microtext rotate-text-90 text-primary-foreground/20 hidden lg:block text-8xl">
          EVENT • IET MBCET
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-smooth"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Events</span>
          </Link>

          <div className="microtext text-primary-foreground/60 mb-4">{event.category}</div>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
            {event.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>{event.venue}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Image */}
      <section className="border-b-4 border-primary">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[21/9] bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
            {event.image ? (
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Calendar size={120} className="text-primary/20" />
              </div>
            )}
            <div className="absolute top-8 right-8 px-6 py-3 bg-primary text-primary-foreground microtext font-bold text-lg">
              {event.status}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-display font-bold text-4xl text-primary mb-6">About This Event</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-3xl text-primary mb-6">Highlights</h3>
                <ul className="space-y-3">
                  {event.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="border-2 border-primary/20 p-6">
                <h3 className="font-display font-bold text-2xl text-primary mb-6">Event Details</h3>
                <div className="space-y-4 text-foreground/80">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="microtext text-foreground/60 mb-1">STATUS</div>
                    <div className="font-bold text-primary">{event.status}</div>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="microtext text-foreground/60 mb-1">CAPACITY</div>
                    <div className="font-bold">{event.capacity}</div>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="microtext text-foreground/60 mb-1">REGISTRATION</div>
                    <div className="font-bold">{event.registration}</div>
                  </div>
                </div>
              </div>

              {/* Registration CTA */}
              <div className="bg-primary text-primary-foreground p-6">
                <h3 className="font-display font-bold text-2xl mb-4">Interested?</h3>
                <p className="mb-6 text-primary-foreground/90">
                  Register now to secure your spot for this event.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full font-display font-bold"
                  asChild
                >
                  <Link to="/contact">Register Now</Link>
                </Button>
              </div>

              {/* Organizers */}
              <div className="border-2 border-primary/20 p-6">
                <h3 className="font-display font-bold text-xl text-primary mb-4">Organized By</h3>
                <div className="space-y-2">
                  {event.organizers.map((org, idx) => (
                    <div key={idx} className="text-foreground/80">• {org}</div>
                  ))}
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

export default EventDetails;
