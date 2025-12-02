import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4];

  const links = [
    { to: "/", label: "Home" },
    { to: "/team", label: "Team" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-primary">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/iet-logo.png"
              alt="IET Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>


          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body font-medium transition-smooth relative ${isActive(link.to) ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
                )}
              </Link>
            ))}

            {/* Events Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsEventsDropdownOpen(true)}
              onMouseLeave={() => setIsEventsDropdownOpen(false)}
            >
              <Link
                to={`/events/${currentYear}`}
                className={`font-body font-medium transition-smooth relative ${location.pathname.startsWith('/events') ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
              >
                Events
                {location.pathname.startsWith('/events') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
                )}
              </Link>

              {isEventsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border-2 border-primary/20 shadow-lg z-50 animate-fade-in">
                  <div className="py-2">
                    <div className="px-4 py-2 microtext text-foreground/60">SELECT YEAR</div>
                    {years.map((year) => (
                      <Link
                        key={year}
                        to={`/events/${year}`}
                        className="block px-4 py-2 text-foreground hover:bg-primary/10 hover:text-primary transition-smooth font-medium"
                        onClick={() => setIsEventsDropdownOpen(false)}
                      >
                        {year}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Button variant="default" size="sm" asChild>
              <Link to="/contact">Join IET</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary/20 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`font-body font-medium py-2 transition-smooth ${isActive(link.to) ? "text-primary" : "text-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Events Mobile */}
              <div className="border-t border-primary/20 pt-4">
                <div className="microtext text-foreground/60 mb-2">EVENTS BY YEAR</div>
                {years.map((year) => (
                  <Link
                    key={year}
                    to={`/events/${year}`}
                    onClick={() => setIsOpen(false)}
                    className={`block font-body font-medium py-2 transition-smooth ${location.pathname === `/events/${year}` ? "text-primary" : "text-foreground"
                      }`}
                  >
                    {year}
                  </Link>
                ))}
              </div>

              <Button variant="default" size="sm" asChild className="w-full">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Join IET</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
