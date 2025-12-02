import { useState } from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Team = () => {
  const [selectedYear, setSelectedYear] = useState(2024);

  const years = [2024, 2023, 2022];

  const teamMembers = {
    2024: [
      {
        name: "Adithya Raj",
        role: "President",
        department: "Computer Science",
        category: "Coordinators",
        image: "AR",
      },
      {
        name: "Sneha Krishnan",
        role: "Vice President",
        department: "Electronics",
        category: "Coordinators",
        image: "SK",
      },
      {
        name: "Rahul Menon",
        role: "Technical Head",
        department: "Computer Science",
        category: "Executive Committee",
        image: "RM",
      },
      {
        name: "Priya Thomas",
        role: "Events Head",
        department: "Mechanical",
        category: "Executive Committee",
        image: "PT",
      },
      {
        name: "Arun Kumar",
        role: "Design Lead",
        department: "Computer Science",
        category: "Design Team",
        image: "AK",
      },
      {
        name: "Meera Nair",
        role: "Content Lead",
        department: "Electronics",
        category: "Design Team",
        image: "MN",
      },
    ],
  };

  const currentTeam = teamMembers[selectedYear as keyof typeof teamMembers] || [];

  const categories = [
    "Coordinators",
    "Executive Committee",
    "Technical Team",
    "Design Team",
    "Volunteers",
  ];

  const getMembersByCategory = (category: string) => {
    return currentTeam.filter((member) => member.category === category);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <div className="microtext text-primary mb-6">IET MBCET TEAM</div>
            <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-primary leading-none editorial-spacing">
              OUR
              <span className="block text-5xl md:text-7xl lg:text-8xl mt-2">TEAM</span>
            </h1>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 microtext rotate-text-90 text-primary/40 hidden lg:block">
              LEADERSHIP • INNOVATION • COLLABORATION
            </div>
          </div>
        </div>
      </section>

      {/* Year Selector */}
      <section className="py-12 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6">
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
      </section>

      {/* Team Members by Category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {categories.map((category) => {
            const members = getMembersByCategory(category);
            if (members.length === 0) return null;

            return (
              <div key={category} className="mb-20">
                <h2 className="font-display font-bold text-4xl md:text-6xl text-primary mb-12 border-b-2 border-primary pb-4">
                  {category}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {members.map((member, idx) => (
                    <div
                      key={idx}
                      className="group animate-fade-in border-2 border-primary/20 hover:border-primary transition-smooth overflow-hidden"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      {/* Member Image Placeholder */}
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display font-bold text-8xl text-primary/30">
                            {member.image}
                          </span>
                        </div>
                      </div>

                      {/* Member Details */}
                      <div className="p-6 bg-background">
                        <h3 className="font-display font-bold text-2xl text-primary mb-2">
                          {member.name}
                        </h3>
                        <div className="microtext text-primary mb-1">{member.role}</div>
                        <p className="text-sm text-foreground/60 mb-4">{member.department}</p>

                        {/* Social Links */}
                        <div className="flex gap-3 pt-4 border-t border-primary/20">
                          <a
                            href="#"
                            className="w-10 h-10 border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-fast"
                            aria-label="LinkedIn"
                          >
                            <Linkedin size={16} />
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-fast"
                            aria-label="Instagram"
                          >
                            <Instagram size={16} />
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-fast"
                            aria-label="Email"
                          >
                            <Mail size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
