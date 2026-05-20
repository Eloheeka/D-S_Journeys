import { Link } from "react-router";
import { CreditCard, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

const destinations = ["Rwanda", "Uganda", "Kenya", "Tanzania", "Zanzibar"];

export function Footer() {
  return (
    <footer className="bg-[var(--ea-night)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_0.75fr_0.75fr_1fr]">
          <div>
            <Link to="/" className="mb-5 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="h-9 w-[3px] bg-[#20A0D6] rounded-full" />
                <div className="h-9 w-[3px] bg-[#FAD201] rounded-full" />
                <div className="h-9 w-[3px] bg-[#20603D] rounded-full" />
              </div>
              <span
                className="text-2xl tracking-[-0.01em]"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
              >
                DS Tours <span style={{ fontWeight: 400, fontStyle: "italic" }}>Africa</span>
              </span>
            </Link>
            <p
              className="mb-2 text-[var(--ea-gold)] text-xs tracking-[0.22em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Discover Africa Beyond the Ordinary
            </p>
            <p className="mt-3 max-w-md text-white/60 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Luxury East African safaris, gorilla trekking journeys, honeymoon escapes, and Zanzibar beach retreats curated across Rwanda, Uganda, Kenya, Tanzania, and Zanzibar.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                [Instagram, "Instagram"],
                [Facebook, "Facebook"],
                [Linkedin, "LinkedIn"],
              ].map(([Icon, label]) => (
                <a
                  key={label as string}
                  href="#"
                  aria-label={label as string}
                  className="interactive-button inline-flex size-10 items-center justify-center border border-white/15 text-white/75 hover:bg-white hover:text-[var(--ea-night)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm uppercase tracking-[0.22em] text-[var(--ea-gold)]">Destinations</h4>
            <ul className="space-y-2">
              {destinations.map((destination) => (
                <li key={destination}>
                  <Link to={`/destinations/${destination.toLowerCase()}`} className="text-white/68 transition-colors hover:text-white">
                    {destination}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm uppercase tracking-[0.22em] text-[var(--ea-gold)]">Quick Links</h4>
            <ul className="space-y-2">
              {[
                ["/packages", "Safari Packages"],
                ["/custom-trips", "Custom Itinerary"],
                ["/about", "About Us"],
                ["/travel-guide", "Travel Guide"],
                ["/faqs", "FAQs"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/68 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm uppercase tracking-[0.22em] text-[var(--ea-gold)]">Contact</h4>
            <ul className="space-y-3 text-white/68">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 shrink-0 text-[var(--ea-gold)]" />
                <a href="mailto:info@dasamjourneys.com" className="hover:text-white">info@dasamjourneys.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-[var(--ea-gold)]" />
                <a href="tel:+250793547972" className="hover:text-white">+250 793 547 972</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-[var(--ea-gold)]" />
                <span>Kigali, Kampala, Nairobi, Dar es Salaam & Zanzibar</span>
              </li>
            </ul>

            <Link
              to="/custom-trips"
              className="interactive-button mt-6 inline-flex items-center justify-center bg-[var(--ea-gold)] px-5 py-3 text-sm uppercase tracking-[0.12em] text-[var(--ea-night)] hover:bg-[var(--ea-gold)]/90"
            >
              Send Inquiry
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 border-y border-white/10 py-6 text-sm text-white/62 md:grid-cols-3">
          <div className="flex items-center gap-2">
            <CreditCard size={18} className="text-[var(--ea-gold)]" />
            <span>Visa, Mastercard, bank transfer, and mobile money supported</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-[var(--ea-gold)]" />
            <span>Secure inquiry and guided payment process</span>
          </div>
          <div className="text-left md:text-right">
            <span>TripAdvisor and Trustpilot profiles coming soon</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} DS Tours Africa. All rights reserved.</p>
          <p className="text-white/40 italic" style={{ fontFamily: "'Playfair Display', serif" }}>Discover Africa Beyond the Ordinary</p>
        </div>
      </div>
    </footer>
  );
}
