import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-3xl mb-2">IET MBCET</div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Institution of Engineering and Technology
            </p>
            <p className="microtext text-primary-foreground/60">
              Empowering engineers through innovation and collaboration
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">
                Home
              </Link>
              <Link to="/events" className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">
                Events
              </Link>
              <Link to="/team" className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">
                Team
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Mar Baselios College of Engineering and Technology, Trivandrum
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:iet@mbcet.ac.in" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-fast">
                  iet@mbcet.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-fast"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-fast"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="microtext text-primary-foreground/60">
            © {new Date().getFullYear()} IET MBCET. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
