import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/destinations", label: "Destinations" },
    { to: "/packages", label: "Tours & Safaris" },
    { to: "/custom-trips", label: "Plan a Trip" },
    { to: "/about", label: "About" },
    { to: "/travel-guide", label: "Travel Tips" },
    { to: "/faqs", label: "FAQs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(251,248,241,0.96)] backdrop-blur-md border-b border-[var(--ea-border-strong)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-[3px]">
              <div className="h-7 w-[3px] bg-[#20A0D6] rounded-full" />
              <div className="h-7 w-[3px] bg-[#FAD201] rounded-full" />
              <div className="h-7 w-[3px] bg-[#20603D] rounded-full" />
            </div>
            <span
              className="text-[1.35rem] tracking-[-0.01em] text-foreground"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              DS Tours <span style={{ fontWeight: 400, fontStyle: "italic" }}>Africa</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `nav-link text-[0.82rem] font-medium tracking-[0.01em] transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--ea-bronze)] active"
                      : "text-foreground/65 hover:text-foreground"
                  }`
                }
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/custom-trips"
              className="ml-2 inline-flex items-center px-5 py-2 text-[0.78rem] font-medium tracking-[0.04em] bg-[var(--ea-forest)] text-white transition-all duration-200 hover:bg-[var(--ea-bronze)]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-[var(--ea-border-strong)] bg-[var(--ea-ivory)]">
          <div className="px-6 py-7 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-[0.95rem] font-medium border-b border-[var(--ea-border-strong)] transition-colors ${
                    isActive
                      ? "text-[var(--ea-bronze)]"
                      : "text-foreground/70 hover:text-foreground"
                  }`
                }
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-5">
              <Link
                to="/custom-trips"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-3 bg-[var(--ea-forest)] text-white text-sm font-medium tracking-[0.04em]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
