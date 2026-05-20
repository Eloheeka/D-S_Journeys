import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowRight, BedDouble, ChevronDown,
  Clock, DollarSign, HeartHandshake,
  MapPin, ShieldCheck, Sparkles,
} from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Reveal, StaggerGroup, StaggerItem } from "../components/animations";
import { destinations } from "../data/travel";
import landingHero from "../../assets/images/landingPageImage.png";
import rwandaImg from "../../assets/images/rwanda.jpg";
import ugandaImg from "../../assets/images/uganda2.jpg";
import kenyaImg from "../../assets/images/kenya2.jpg";
import tanzaniaImg from "../../assets/images/tanzania2.jpg";
import zanzibarImg from "../../assets/images/zanzibar2.jpg";
import safariVehicle from "../../assets/images/safari1.jpg";
import elephantWater from "../../assets/images/drinkElephant.jpg";

const destinationImages: Record<string, string> = {
  rwanda: rwandaImg,
  uganda: ugandaImg,
  kenya: kenyaImg,
  tanzania: tanzaniaImg,
  zanzibar: zanzibarImg,
};

const trustItems = [
  { icon: BedDouble,     title: "Luxury Lodges",     text: "Boutique camps, beach resorts, and trusted safari partners across East Africa." },
  { icon: ShieldCheck,   title: "Local Expertise",   text: "On-ground support in Kigali, Kampala, Nairobi, Arusha, and Zanzibar." },
  { icon: HeartHandshake,title: "Personal Journeys", text: "Honeymoons, proposals, family safaris, and milestone celebrations." },
  { icon: Sparkles,      title: "Tailor-Made",       text: "Private guides, lodge upgrades, gorilla permits, and seamless routing." },
];

const premiumPackages = [
  {
    name: "Gorilla & Serengeti Luxury Safari",
    duration: "7 Days",
    destination: "Rwanda + Tanzania",
    badge: "Signature",
    price: "From $6,850",
    image: rwandaImg,
    summary: "Gorillas, private guiding, and classic northern Tanzania wildlife.",
  },
  {
    name: "Rwanda, Tanzania & Zanzibar Escape",
    duration: "10 Days",
    destination: "Rwanda + Tanzania + Zanzibar",
    badge: "Honeymoon",
    price: "From $7,950",
    image: zanzibarImg,
    summary: "Gorillas, game drives, and a barefoot Indian Ocean finish.",
  },
  {
    name: "Grand East Africa Private Journey",
    duration: "14 Days",
    destination: "5 Countries",
    badge: "Bespoke",
    price: "From $10,900",
    image: safariVehicle,
    summary: "Primates, savannah wildlife, culture, and coast in one private route.",
  },
];

// ── Trip Search Widget ────────────────────────────────────────────────────────
function TripSearchWidget() {
  const navigate = useNavigate();
  const [dest, setDest] = useState("");
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (dest) params.set("destination", dest);
    if (activity) params.set("activity", activity);
    if (duration) params.set("duration", duration);
    if (budget) params.set("budget", budget);
    navigate(`/custom-trips?${params.toString()}`);
  }

  const selectClass =
    "w-full appearance-none bg-white border-0 px-5 py-4 text-[0.95rem] text-foreground/80 focus:outline-none cursor-pointer";

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
    >
      {/* Destination */}
      <div className="relative border-b border-gray-100">
        <MapPin size={17} className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--ea-forest)] pointer-events-none" />
        <select
          value={dest}
          onChange={(e) => setDest(e.target.value)}
          className={`${selectClass} pl-11`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <option value="">Destination</option>
          {destinations.map((d) => (
            <option key={d.slug} value={d.name}>{d.name}</option>
          ))}
          <option value="Multi-Country">Multi-Country</option>
        </select>
        <ChevronDown size={15} className="absolute right-5 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none" />
      </div>

      {/* Activity */}
      <div className="relative border-b border-gray-100">
        <Sparkles size={17} className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--ea-forest)] pointer-events-none" />
        <select
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className={`${selectClass} pl-11`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <option value="">Activity</option>
          <option value="Gorilla Trekking">Gorilla Trekking</option>
          <option value="Safari">Safari</option>
          <option value="Beach">Beach & Island</option>
          <option value="Chimpanzee Tracking">Chimpanzee Tracking</option>
          <option value="Cultural">Cultural Experience</option>
          <option value="Mountain Climbing">Mountain Climbing</option>
        </select>
        <ChevronDown size={15} className="absolute right-5 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none" />
      </div>

      {/* Duration */}
      <div className="relative border-b border-gray-100">
        <Clock size={17} className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--ea-forest)] pointer-events-none" />
        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className={`${selectClass} pl-11`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <option value="">Duration</option>
          <option value="1-4">1 – 4 Days</option>
          <option value="5-7">5 – 7 Days</option>
          <option value="8-10">8 – 10 Days</option>
          <option value="11-14">11 – 14 Days</option>
          <option value="14+">14+ Days</option>
        </select>
        <ChevronDown size={15} className="absolute right-5 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none" />
      </div>

      {/* Budget */}
      <div className="relative">
        <DollarSign size={17} className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--ea-forest)] pointer-events-none" />
        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className={`${selectClass} pl-11`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <option value="">Budget (per person)</option>
          <option value="under-2000">Under $2,000</option>
          <option value="2000-5000">$2,000 – $5,000</option>
          <option value="5000-10000">$5,000 – $10,000</option>
          <option value="10000+">$10,000+</option>
        </select>
        <ChevronDown size={15} className="absolute right-5 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none" />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-4 bg-[var(--ea-gold)] text-[var(--ea-night)] text-sm font-semibold tracking-[0.08em] uppercase transition-colors hover:bg-[var(--ea-bronze)] hover:text-white"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Search Tours
      </button>
    </form>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export function Home() {
  const whatsappHref =
    "https://wa.me/250793547972?text=Hello%2C%20I%27d%20like%20to%20plan%20a%20luxury%20East%20Africa%20journey%20with%20Dasam%20Journeys.";

  return (
    <div className="pt-[72px]">

      {/* WhatsApp FAB */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="interactive-button fixed bottom-6 right-6 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 hover:bg-[#1ebe5d]"
      >
        <WhatsAppIcon fontSize="medium" />
      </a>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--ea-night)]">
        <ImageWithFallback
          src={landingHero}
          alt="East Africa safari"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-24">

            {/* Left — headline */}
            <Reveal>
              <p
                className="text-[var(--ea-gold)] text-xs tracking-[0.3em] mb-6 uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Private East African Safaris
              </p>
              <h1
                className="text-white mb-4 leading-[1.05]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                  fontWeight: 500,
                }}
              >
                Where the wild{" "}
                <span style={{ fontStyle: "italic", fontWeight: 400 }}>calls</span>
                ,<br />
                we answer.
              </h1>
              <p
                className="text-white/50 mb-6 tracking-[0.18em] uppercase text-xs"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Discover Africa Beyond the Ordinary
              </p>
              <p
                className="text-white/75 mb-10 max-w-lg leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", fontWeight: 300 }}
              >
                Gorilla trekking, safari plains, and Indian Ocean escapes — crafted privately around your pace.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/custom-trips"
                  className="interactive-button inline-flex items-center gap-2 bg-[var(--ea-gold)] px-7 py-3.5 text-[var(--ea-night)] text-sm font-semibold tracking-[0.05em] hover:bg-[var(--ea-bronze)] hover:text-white transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Plan Your Journey <ArrowRight size={17} />
                </Link>
                <Link
                  to="/destinations"
                  className="interactive-button inline-flex items-center gap-2 border border-white/35 bg-white/8 px-7 py-3.5 text-white text-sm font-medium tracking-[0.03em] backdrop-blur-sm hover:bg-white hover:text-[var(--ea-night)] transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Explore Destinations
                </Link>
              </div>
            </Reveal>

            {/* Right — search widget */}
            <Reveal delay={0.15} className="flex justify-center lg:justify-end">
              <TripSearchWidget />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-[var(--ea-night)] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["5", "Destinations"],
            ["Private", "Guides & Vehicles"],
            ["Bespoke", "Itineraries"],
            ["Trusted", "On-Ground Support"],
          ].map(([val, label]) => (
            <div key={label}>
              <p
                className="text-[var(--ea-gold)] mb-1"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 500 }}
              >
                {val}
              </p>
              <p
                className="text-white/55 text-xs tracking-[0.18em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Destinations ── */}
      <Reveal className="bg-[var(--ea-sand)] px-6 lg:px-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
            <div>
              <p
                className="text-[var(--ea-bronze)] text-xs tracking-[0.28em] uppercase mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Where to Go
              </p>
              <h2
                className="leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}
              >
                Five countries.{" "}
                <span style={{ fontStyle: "italic", fontWeight: 400 }}>One region.</span>
              </h2>
            </div>
            <Link
              to="/destinations"
              className="interactive-button inline-flex items-center gap-2 border border-[var(--ea-border-strong)] px-5 py-2.5 text-sm font-medium tracking-[0.03em] hover:bg-background transition-colors flex-shrink-0"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              All Destinations <ArrowRight size={15} />
            </Link>
          </div>

          <StaggerGroup className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
            {destinations.map((destination) => (
              <StaggerItem key={destination.slug}>
                <Link
                  to={`/destinations/${destination.slug}`}
                  className="interactive-card group block overflow-hidden border border-[var(--ea-border-strong)] bg-background"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <ImageWithFallback
                      src={destinationImages[destination.slug] ?? destination.cardImage}
                      alt={destination.name}
                      className="h-full w-full object-cover interactive-media"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <p
                        className="mb-1.5 text-[0.65rem] uppercase tracking-[0.24em] text-[var(--ea-gold)]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {destination.tagline}
                      </p>
                      <h3
                        style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 500 }}
                      >
                        {destination.name}
                      </h3>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <span
                      className="inline-flex items-center gap-2 text-[0.78rem] font-medium tracking-[0.06em] uppercase text-[var(--ea-forest)] transition-all group-hover:gap-3"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Explore <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Reveal>

      {/* ── Signature Packages ── */}
      <Reveal className="bg-[var(--ea-night)] px-6 lg:px-10 py-20 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
            <div>
              <p
                className="text-[var(--ea-gold)] text-xs tracking-[0.28em] uppercase mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Signature Packages
              </p>
              <h2
                className="leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}
              >
                Popular luxury{" "}
                <span style={{ fontStyle: "italic", fontWeight: 400 }}>journeys.</span>
              </h2>
            </div>
            <Link
              to="/packages"
              className="interactive-button inline-flex items-center gap-2 border border-white/25 px-5 py-2.5 text-sm font-medium tracking-[0.03em] text-white hover:bg-white hover:text-[var(--ea-night)] transition-colors flex-shrink-0"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              All Safaris <ArrowRight size={15} />
            </Link>
          </div>

          <StaggerGroup className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {premiumPackages.map((pkg) => (
              <StaggerItem key={pkg.name} className="interactive-card overflow-hidden border border-white/10 bg-white/[0.05]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback src={pkg.image} alt={pkg.name} className="h-full w-full object-cover interactive-media" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                  <div className="absolute left-5 top-5 bg-[var(--ea-gold)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-[var(--ea-night)]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {pkg.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="mb-3 leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 500 }}
                  >
                    {pkg.name}
                  </h3>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4 text-[0.78rem] text-white/60"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <span className="inline-flex items-center gap-1.5"><Clock size={13} className="text-[var(--ea-gold)]" />{pkg.duration}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin size={13} className="text-[var(--ea-gold)]" />{pkg.destination}</span>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-white/65" style={{ fontFamily: "'DM Sans', sans-serif" }}>{pkg.summary}</p>
                  <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <p
                      className="text-[var(--ea-gold)]"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", fontWeight: 500 }}
                    >
                      {pkg.price}
                    </p>
                    <Link
                      to={`/custom-trips?trip=${encodeURIComponent(pkg.name)}`}
                      className="interactive-button inline-flex items-center gap-2 bg-white px-4 py-2 text-[0.78rem] font-medium text-[var(--ea-night)] hover:bg-[var(--ea-gold)] transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Inquire <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Reveal>

      {/* ── Why Us ── */}
      <Reveal className="bg-[var(--ea-sand)] px-6 lg:px-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-14 items-center">
            <div>
              <p
                className="text-[var(--ea-bronze)] text-xs tracking-[0.28em] uppercase mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Why DS Tours Africa
              </p>
              <h2
                className="leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 500 }}
              >
                Crafted for those who{" "}
                <span style={{ fontStyle: "italic", fontWeight: 400 }}>travel with intention.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem" }}>
                We are a small, specialist team with deep roots across East Africa. Every itinerary is built from scratch — no fixed departures, no group tours.
              </p>
              <Link
                to="/about"
                className="interactive-button inline-flex items-center gap-2 border border-[var(--ea-border-strong)] px-5 py-2.5 text-sm font-medium tracking-[0.03em] hover:bg-background transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                About Us <ArrowRight size={15} />
              </Link>
            </div>

            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {trustItems.map((item) => (
                <StaggerItem key={item.title} className="interactive-card border border-[var(--ea-border-strong)] bg-background p-6">
                  <item.icon className="mb-4 text-[var(--ea-bronze)]" size={26} />
                  <h3
                    className="mb-2 leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 500 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {item.text}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Reveal>

      {/* ── Mood image strip ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 h-52 md:h-64 overflow-hidden">
        {[elephantWater, rwandaImg, tanzaniaImg, zanzibarImg].map((img, i) => (
          <div key={i} className="relative overflow-hidden group">
            <ImageWithFallback src={img} alt="" className="w-full h-full object-cover interactive-media scale-105 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
          </div>
        ))}
      </div>

      {/* ── Final CTA ── */}
      <Reveal className="px-6 lg:px-10 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-[var(--ea-bronze)] text-xs tracking-[0.28em] uppercase mb-5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Begin With a Conversation
          </p>
          <h2
            className="mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 500 }}
          >
            Ready to plan your{" "}
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>East Africa journey?</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem" }}>
            Tell us your dates, destination dreams, and travel style. We will shape the itinerary around you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/custom-trips"
              className="interactive-button inline-flex items-center justify-center gap-2 bg-[var(--ea-forest)] px-8 py-4 text-sm font-semibold tracking-[0.05em] text-white hover:bg-[var(--ea-bronze)] transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Request Custom Itinerary <ArrowRight size={17} />
            </Link>
            <Link
              to="/packages"
              className="interactive-button inline-flex items-center justify-center gap-2 border border-[var(--ea-border-strong)] px-8 py-4 text-sm font-medium tracking-[0.03em] hover:bg-[var(--ea-sand)] transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Browse Packages
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
