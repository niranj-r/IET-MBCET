import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type EventStatus = "ALL" | "UPCOMING" | "ONGOING" | "COMPLETED";

const Events = () => {
  const { year } = useParams();
  const currentYear = new Date().getFullYear();

  const [selectedYear, setSelectedYear] = useState<number>(
    parseInt(year || currentYear.toString())
  );
  const [selectedStatus, setSelectedStatus] = useState<EventStatus>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    if (year) setSelectedYear(parseInt(year));
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
      description: "Hands-on workshop on emerging technologies",
    },
    {
      id: 2,
      title: "Innovation Hackathon",
      date: "20 DEC 2024",
      venue: "Main Auditorium",
      status: "ONGOING",
      category: "COMPETITION",
      year: 2024,
      description: "24-hour coding marathon for innovative solutions",
    },
    {
      id: 3,
      title: "Industry Connect Seminar",
      date: "05 JAN 2025",
      venue: "Conference Hall",
      status: "UPCOMING",
      category: "SEMINAR",
      year: 2024,
      description: "Guest lectures from industry experts",
    },
    {
      id: 4,
      title: "Project Expo 2024",
      date: "10 NOV 2024",
      venue: "Exhibition Center",
      status: "COMPLETED",
      category: "EXHIBITION",
      year: 2024,
      description: "Showcase of student innovation projects",
    },
    {
      id: 5,
      title: "Code Sprint",
      date: "15 SEP 2024",
      venue: "Computer Lab",
      status: "COMPLETED",
      category: "COMPETITION",
      year: 2024,
      description: "Competitive programming competition",
    },
  ];

  // filtering
  const filteredEvents = events.filter((event) => {
    const matchesYear = event.year === selectedYear;
    const matchesStatus = selectedStatus === "ALL" || event.status === selectedStatus;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesYear && matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="microtext text-primary mb-6">IET MBCET EVENTS</div>
          <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-primary leading-none">
            EVENTS
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">

          {/* Search */}
          <div className="relative w-full md:w-1/3">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40"
              size={20}
            />
            <Input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 border-2 border-primary/30 focus:border-primary rounded-none"
            />
          </div>

          {/* Filters Button */}
          <div className="relative w-full md:w-auto">
            <Button
              onClick={() => setFiltersOpen((prev) => !prev)}
              className="w-full md:w-auto px-6 py-2 border-accent text-accent bg-background hover:bg-accent hover:text-accent-foreground rounded-none"
            >
              Filters
            </Button>

            {filtersOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-background border border-primary/30 shadow-xl p-5 z-50 rounded-none animate-fade-in">

                {/* Year */}
                <div className="mb-6">
                  <div className="microtext text-foreground/60 mb-3">YEAR</div>
                  <div className="flex flex-wrap gap-2">
                    {years.map((yr) => (
                      <button
                        key={yr}
                        onClick={() => setSelectedYear(yr)}
                        className={`px-4 py-2 border text-sm ${
                          selectedYear === yr
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-primary/40 text-primary hover:bg-primary/10"
                        }`}
                      >
                        {yr}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div>
                  <div className="microtext text-foreground/60 mb-3">STATUS</div>
                  <div className="flex flex-wrap gap-2">
                    {(["ALL", "UPCOMING", "ONGOING", "COMPLETED"] as EventStatus[]).map(
                      (status) => (
                        <button
                          key={status}
                          onClick={() => setSelectedStatus(status)}
                          className={`px-4 py-2 border text-sm ${
                            selectedStatus === status
                              ? "bg-primary text-primary-foreground border-primary"
                              : "border-primary/40 text-foreground hover:bg-primary/10"
                          }`}
                        >
                          {status}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedStatus !== "ALL" || searchQuery || selectedYear !== currentYear) && (
          <div className="max-w-7xl mx-auto px-6 mt-4 flex flex-wrap items-center gap-3">

            {/* Year filter tag */}
            {selectedYear !== currentYear && (
              <div className="px-4 py-1 border border-primary/40 text-primary text-sm flex items-center gap-2">
                Year: {selectedYear}
                <button
                  onClick={() => setSelectedYear(currentYear)}
                  className="text-primary hover:text-accent"
                >
                  ×
                </button>
              </div>
            )}

            {/* Status */}
            {selectedStatus !== "ALL" && (
              <div className="px-4 py-1 border border-primary/40 text-primary text-sm flex items-center gap-2">
                Status: {selectedStatus}
                <button
                  onClick={() => setSelectedStatus("ALL")}
                  className="text-primary hover:text-accent"
                >
                  ×
                </button>
              </div>
            )}

            {/* Search */}
            {searchQuery && (
              <div className="px-4 py-1 border border-primary/40 text-primary text-sm flex items-center gap-2">
                Search: "{searchQuery}"
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-primary hover:text-accent"
                >
                  ×
                </button>
              </div>
            )}

            {/* Clear all */}
            <button
              onClick={() => {
                setSelectedStatus("ALL");
                setSelectedYear(currentYear);
                setSearchQuery("");
              }}
              className="microtext text-accent hover:underline ml-2"
            >
              Clear All
            </button>
          </div>
        )}
      </section>

      {/* Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-24 text-xl text-foreground/60">
              No events found matching your criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <Link
                  key={event.id}
                  to={`/events/${event.id}`}
                  className="group border-2 border-primary/20 hover:border-primary transition-smooth overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Calendar size={48} className="text-primary/30" />
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground microtext">
                      {event.status}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="microtext text-primary mb-2">{event.category}</div>
                    <h3 className="font-display font-bold text-2xl text-primary mb-3 group-hover:translate-x-2 transition">
                      {event.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="space-y-2 text-sm text-foreground/60 border-t border-primary/20 pt-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} /> {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} /> {event.venue}
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
