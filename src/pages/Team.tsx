import { useState } from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Team = () => {
  const [selectedYear, setSelectedYear] = useState(2026);

  const years = [2026, 2025, 2024];

  const teamMembers = {
    2026: [
      {
        name: "Ms. Soumya A V",
        role: "Chairperson",
        department: "Computer Science & Engineering Artificial Intelligence",
        category: "Core Team",
        image: "/Team/26/Soumya.svg",
        linkedin: "https://www.linkedin.com/in/soumya-a-v-61346661",
        instagram: "https://www.instagram.com/soumyanirudh",
        email: "soumyanirudh83@gmail.com",
      },
      {
        name: "Johan S Varughese",
        role: "Chairperson",
        department: "Computer Science & Engineering Artificial Intelligence",
        category: "Core Team",
        image: "/Team/26/Johan.svg",
        linkedin: "https://www.linkedin.com/in/johan-s-varughese",
        instagram: "https://www.instagram.com/_jo.varkey_",
        email: "mail2joshvarkey@gmail.com",
      },
      {
        name: "V. S. Sabarinath",
        role: "Vice Chairperson",
        department: "Mechanical Engineering",
        category: "Core Team",
        image: "/Team/26/Sabarinath.svg",
        linkedin: "https://www.linkedin.com/in/vssabarinath/",
        instagram: "https://www.instagram.com/sabarinath31._._/",
        email: "vssabarinath2005@gmail.com",
      },
      {
        name: "Jayasree G Kalkura",
        role: "Secretary",
        department: "Electrical Engineering",
        category: "Core Team",
        image: "/Team/26/Jayasree.svg",
        linkedin: "https://www.linkedin.com/in/jayasreegkalkura",
        instagram: "https://www.instagram.com/",
        email: "jayasreegk05@gmail.com",
      },
      {
        name: "Antony Vijay",
        role: "Treasurer",
        department: "Mechanical Engineering",
        category: "Core Team",
        image: "/Team/26/Antony.svg",
        linkedin: "",
        instagram: "https://www.instagram.com/",
        email: "",
      },
      {
        name: "Niranj",
        role: "Design Team Member",
        department: "Computer Science & Engineering",
        category: "Design Team",
        image: "/Team/26/Niranj.svg",
        linkedin: "https://www.linkedin.com/in/niranj-r/",
        instagram: "https://www.instagram.com/cre.a.tor_nj",
        email: "niranj.njai@gmail.com",
      },
      {
        name: "Daliya Saji John",
        role: "Design Team Member",
        department: "Computer Science & Engineering",
        category: "Design Team",
        image: "/Team/26/Daliya.svg",
        linkedin: "https://www.linkedin.com/in/daliya-saji-john-b0bbb9327",
        instagram: "https://www.instagram.com/d_s_j_chronicles",
        email: "daliyasajijohn.b24cs1124@mbcet.ac.in",
      },
      {
        name: "Emil Beny",
        role: "Design Team Member",
        department: "Computer Science & Engineering",
        category: "Design Team",
        image: "/Team/26/Emil.svg",
        linkedin: "https://www.linkedin.com/in/emil-benny-19a622327",
        instagram: "https://www.instagram.com/_aemil_ius",
        email: "emilbenny.b24cs1128@mbcet.ac.in",
      },
      {
        name: "Amritha",
        role: "PR & Content Team Member",
        department: "Not specified",
        category: "PR & Content",
        image: "/Team/26/Amritha.svg",
        linkedin: "",
        instagram: "https://www.instagram.com/",
        email: "",
      },
      {
        name: "Abhaya Saiju",
        role: "PR & Content Team Member",
        department: "Mechanical Engineering",
        category: "PR & Content",
        image: "/Team/26/Abhaya.svg",
        linkedin: "https://www.linkedin.com/in/abhaya-saiju-80877635b",
        instagram: "https://www.instagram.com/abhayaeee_",
        email: "abhayasaiju07@gmail.com",
      },
      {
        name: "Krishnendu K V",
        role: "PR & Content Team Member",
        department: "Civil Engineering",
        category: "PR & Content",
        image: "/Team/26/Krishnendu.svg",
        linkedin: "https://www.linkedin.com/in/krishnendu-kv-33a3363a6/",
        instagram: "https://www.instagram.com/krishnendu_kv_",
        email: "kvkrishnendu07@gmail.com",
      },
      {
        name: "Shreyas Jayakrishnan",
        role: "Outreach Team Member",
        department: "Mechanical Engineering",
        category: "Outreach",
        image: "/Team/26/Shreyas.svg",
        linkedin: "https://www.linkedin.com/in/shreyas-jkps/",
        instagram: "https://www.instagram.com/shreyas.jkps",
        email: "shreyas.jkps@gmail.com",
      },
      {
        name: "Nadha Shine",
        role: "Outreach Team Member",
        department: "Mechanical Engineering",
        category: "Outreach",
        image: "/Team/26/Nadha.svg",
        linkedin: "https://www.linkedin.com/in/nadha-shine-82538b3a6",
        instagram: "https://www.instagram.com/_ zera_x_",
        email: "nadhalija@gmail.com",
      },
      {
        name: "Aathil Muhammed S",
        role: "Outreach Team Member",
        department: "Mechanical Engineering",
        category: "Outreach",
        image: "/Team/26/Aathil.svg",
        linkedin: "",
        instagram: "https://www.instagram.com/",
        email: "",
      },
    ],
  };

  const currentTeam = teamMembers[selectedYear as keyof typeof teamMembers] || [];

  const categories = [
    "Coordinators",
    "Executive Committee",
    "Technical Team",
    "Design Team",
    "PR & Content",
    "Outreach",
    "Volunteers",
  ];

  const getMembersByCategory = (category: string) => {
    return currentTeam.filter((member) => member.category === category);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b-4 border-primary animate-fade-in-up">
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
      <section className="py-12 border-b border-primary/20 animate-fade-in delay-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="microtext text-foreground/60 mb-4">SELECT YEAR</div>
          <div className="flex flex-wrap gap-3">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 font-display font-bold transition-smooth border-2 ${selectedYear === year
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
      <section className="py-16 animate-fade-in-up delay-300">
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
                          {member.image.includes("/") ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="font-display font-bold text-8xl text-primary/30">
                              {member.image}
                            </span>
                          )}
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
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-fast"
                              aria-label="LinkedIn"
                            >
                              <Linkedin size={16} />
                            </a>
                          )}
                          {member.instagram && (
                            <a
                              href={member.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-fast"
                              aria-label="Instagram"
                            >
                              <Instagram size={16} />
                            </a>
                          )}
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="w-10 h-10 border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-fast"
                              aria-label="Email"
                            >
                              <Mail size={16} />
                            </a>
                          )}
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
