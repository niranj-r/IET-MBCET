import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type EventStatus = "ALL" | "UPCOMING" | "ONGOING" | "COMPLETED";

const Events = () => {
  const { year } = useParams();
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(parseInt(year || currentYear.toString()));
  const [selectedStatus, setSelectedStatus] = useState<EventStatus>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (year) {
      setSelectedYear(parseInt(year));
    }
  }, [year]);

  const years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3];

  const events = [
    {
      id: 1,
      title: "Tech Workshop 2024",
      date: "15 DEC 2024",
      venue: "Seminar Hall A",
      status: "UPCOMING",
      category: "WORKSHOP",
      year: 2024,
      description: "Hands-on workshop on emerging technologies"
    },
    {
      id: 2,
      title: "Innovation Hackathon",
      date: "20 DEC 2024",
      venue: "Main Auditorium",
      status: "ONGOING",
      category: "COMPETITION",
      year: 2024,
      description: "24-hour coding marathon for innovative solutions"
    },
    {
      id: 3,
      title: "Industry Connect Seminar",
      date: "05 JAN 2025",
      venue: "Conference Hall",
      status: "UPCOMING",
      category: "SEMINAR",
      year: 2024,
      description: "Guest lectures from industry experts"
    },
    {
      id: 4,
      title: "Project Expo 2024",
      date: "10 NOV 2024",
      venue: "Exhibition Center",
      status: "COMPLETED",
      category: "EXHIBITION",
      year: 2024,
      description: "Showcase of student innovation projects"
    },
    {
      id: 5,
      title: "Code Sprint",
      date: "15 SEP 2024",
      venue: "Computer Lab",
      status: "COMPLETED",
      category: "COMPETITION",
      year: 2024,
      description: "Competitive programming competition"
    },
    {
      id: 6,
      title: "AI/ML Workshop Series",
      date: "20 MAR 2024",
      venue: "Seminar Hall B",
      status: "COMPLETED",
      category: "WORKSHOP",
      year: 2024,
      description: "Three-day intensive workshop on AI and Machine Learning"
    },
  ];

  const filteredEvents = events.filter(event => {
    const matchesYear = event.year === selectedYear;
    const matchesStatus = selectedStatus === "ALL" || event.status === selectedStatus;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <div className="microtext text-primary mb-6">IET MBCET EVENTS</div>
            <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-primary leading-none editorial-spacing">
              EVENTS
            </h1>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 microtext rotate-text-90 text-primary/40 hidden lg:block">
              INNOVATION • LEARNING • COLLABORATION
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Year Selector */}
          <div className="mb-8">
            <div className="microtext text-foreground/60 mb-4">SELECT YEAR</div>
            <div className="flex flex-wrap gap-3">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-3 font-display font-bold transition-smooth border-2 ${
                    selectedYear === year
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-primary border-primary hover:bg-primary/10"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="mb-8">
            <div className="microtext text-foreground/60 mb-4">FILTER BY STATUS</div>
            <div className="flex flex-wrap gap-3">
              {(["ALL", "UPCOMING", "ONGOING", "COMPLETED"] as EventStatus[]).map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-6 py-3 font-medium transition-smooth border-2 microtext ${
                    selectedStatus === status
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-primary/30 hover:border-primary"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
            <Input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 border-2 border-primary/30 focus:border-primary"
            />
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-xl text-foreground/60">No events found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, idx) => (
                <Link
                  key={event.id}
                  to={`/events/${event.id}`}
                  className="group cursor-pointer animate-fade-in border-2 border-primary/20 hover:border-primary transition-smooth overflow-hidden block"
                  style={{ animationDelay: `${idx * 0.05}s` }}
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
                  <div className="p-6">
                    <div className="microtext text-primary mb-3">{event.category}</div>
                    <h3 className="font-display font-bold text-2xl text-primary mb-3 group-hover:translate-x-2 transition-smooth">
                      {event.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 text-sm text-foreground/60 border-t border-primary/20 pt-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        {event.venue}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full mt-6" size="sm">
                      View Details
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
