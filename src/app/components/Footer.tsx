import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-1 h-8 bg-[var(--ea-terracotta)]" />
                <div className="w-1 h-8 bg-[var(--ea-golden)]" />
                <div className="w-1 h-8 bg-[var(--ea-sage)]" />
              </div>
              <span className="text-2xl tracking-tight">
                Dasam <span className="font-light">Journeys</span>
              </span>
            </div>
            <p className="text-white/70 max-w-md">
              Curating extraordinary safari experiences across East Africa.
              Discover Rwanda, Tanzania, Kenya, Uganda, and Zanzibar with expert
              guidance and personalized itineraries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations" className="text-white/70 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-white/70 hover:text-white transition-colors">
                  Safari Packages
                </Link>
              </li>
              <li>
                <Link to="/custom-trips" className="text-white/70 hover:text-white transition-colors">
                  Custom Trips
                </Link>
              </li>
              <li>
                <Link to="/travel-guide" className="text-white/70 hover:text-white transition-colors">
                  Travel Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>info@dasamjourneys.com</span>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Dasam Journeys. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
