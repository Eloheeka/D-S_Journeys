import { useState } from "react";
import { Link, useParams } from "react-router";
import {
  ArrowLeft, ArrowRight, Check, Clock, Landmark, MapPin,
  Mountain, Sparkles, TreePine, Users, Waves, Star,
  Building2, Tent, Sun, ChevronDown, ChevronUp,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Reveal, StaggerGroup, StaggerItem } from "../components/animations";
import { destinationMap, type Attraction } from "../data/travel";

// ─── helpers ────────────────────────────────────────────────────────────────

function typeIcon(type: Attraction["type"], size = 18) {
  switch (type) {
    case "national_park": return <TreePine size={size} className="text-[var(--ea-sage)]" />;
    case "lake":          return <Waves size={size} className="text-blue-500" />;
    case "museum":        return <Landmark size={size} className="text-[var(--ea-golden)]" />;
    case "cultural":      return <Star size={size} className="text-[var(--ea-golden)]" />;
    case "city":          return <Building2 size={size} className="text-[var(--ea-terracotta)]" />;
    case "mountain":      return <Mountain size={size} className="text-[var(--ea-earth)]" />;
    case "beach":         return <Sun size={size} className="text-yellow-500" />;
    case "landmark":      return <MapPin size={size} className="text-[var(--ea-terracotta)]" />;
    case "wildlife":      return <Tent size={size} className="text-[var(--ea-sage)]" />;
    default:              return <MapPin size={size} className="text-[var(--ea-terracotta)]" />;
  }
}

function typeLabel(type: Attraction["type"]) {
  switch (type) {
    case "national_park": return "National Park";
    case "lake":          return "Lake / Coast";
    case "museum":        return "Museum";
    case "cultural":      return "Cultural Site";
    case "city":          return "City";
    case "mountain":      return "Mountain";
    case "beach":         return "Beach";
    case "landmark":      return "Landmark";
    case "wildlife":      return "Wildlife";
    default:              return "Attraction";
  }
}

const SECTION_ORDER: Attraction["type"][] = [
  "national_park", "lake", "mountain", "beach", "city", "museum", "cultural", "landmark", "wildlife",
];

const SECTION_LABELS: Record<Attraction["type"], string> = {
  national_park: "National Parks & Reserves",
  lake:          "Lakes & Waterways",
  mountain:      "Mountains & Landscapes",
  beach:         "Beaches & Coast",
  city:          "Cities & Towns",
  museum:        "Museums",
  cultural:      "Cultural Sites",
  landmark:      "Landmarks",
  wildlife:      "Wildlife",
};

// ─── expandable attraction card ─────────────────────────────────────────────

function AttractionCard({ attraction }: { attraction: Attraction }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="interactive-card rounded-2xl border border-border bg-card overflow-hidden">
      <button
        className="w-full text-left p-5 flex items-start gap-4"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
          {typeIcon(attraction.type, 16)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-0.5">
                {typeLabel(attraction.type)}
              </p>
              <h4 className="text-lg leading-snug">{attraction.name}</h4>
              {attraction.highlight && (
                <p className="text-sm text-[var(--ea-terracotta)] mt-1">{attraction.highlight}</p>
              )}
            </div>
            <div className="flex-shrink-0 mt-1 text-muted-foreground">
              {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>
        </div>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0 border-t border-border">
          <p className="text-muted-foreground text-sm leading-relaxed pt-4">{attraction.description}</p>
        </div>
      )}
    </div>
  );
}

// ─── main page ───────────────────────────────────────────────────────────────

export function DestinationDetail() {
  const { country } = useParams();
  const destination = country ? destinationMap[country] : null;

  if (!destination) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Destination Not Found</h1>
          <Link to="/destinations" className="text-[var(--ea-terracotta)] hover:underline">
            Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  // Group attractions by type, preserving section order
  const grouped = SECTION_ORDER.reduce<Record<string, Attraction[]>>((acc, type) => {
    const items = destination.attractions.filter((a) => a.type === type);
    if (items.length) acc[type] = items;
    return acc;
  }, {});

  const sectionKeys = Object.keys(grouped) as Attraction["type"][];

  return (
    <div className="pt-20">

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-14">
          <Reveal>
            <Link
              to="/destinations"
              className="interactive-button inline-flex items-center gap-2 mb-8 text-white/80 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft size={16} /> Back to Destinations
            </Link>

            <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-3">{destination.tagline}</p>
            <h1 className="text-6xl md:text-7xl text-white mb-5 max-w-3xl">{destination.name}</h1>
            <p className="text-xl text-white/85 max-w-2xl font-light leading-relaxed mb-8">{destination.intro}</p>

            {/* Quick stats bar */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm text-white">
                <Clock size={14} className="text-[var(--ea-golden)]" />
                Best time: {destination.bestTime}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm text-white">
                <TreePine size={14} className="text-[var(--ea-sage)]" />
                {destination.attractions.filter(a => a.type === "national_park").length} National Parks
              </span>
              {destination.attractions.filter(a => a.type === "lake").length > 0 && (
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm text-white">
                  <Waves size={14} className="text-blue-400" />
                  {destination.attractions.filter(a => a.type === "lake").length} Lakes
                </span>
              )}
              {destination.attractions.filter(a => a.type === "museum" || a.type === "cultural").length > 0 && (
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm text-white">
                  <Landmark size={14} className="text-[var(--ea-golden)]" />
                  {destination.attractions.filter(a => a.type === "museum" || a.type === "cultural").length} Cultural Sites
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Sticky sidebar layout ── */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">

          {/* ── Left: all content ── */}
          <div className="space-y-20 min-w-0">

            {/* ── Packages FIRST ── */}
            <section>
              <Reveal className="mb-10">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--ea-terracotta)] mb-3">Safaris & Tours</p>
                <h2 className="text-4xl mb-3">Choose Your {destination.name} Experience</h2>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Start with one of these sample packages — we tailor the final itinerary around your dates, budget, and travel style.
                </p>
              </Reveal>

              <StaggerGroup className="space-y-8">
                {destination.packageOptions.map((pkg) => (
                  <StaggerItem
                    key={pkg.slug}
                    className="interactive-card overflow-hidden border border-border bg-card"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-[var(--ea-terracotta)] mb-2">{pkg.style}</p>
                          <h3 className="text-3xl mb-2">{pkg.name}</h3>
                          <p className="text-muted-foreground max-w-xl">{pkg.summary}</p>
                        </div>
                        <div className="rounded-2xl bg-secondary px-5 py-4 min-w-[150px] text-right">
                          <p className="text-xs text-muted-foreground mb-1">Starting from</p>
                          <p className="text-2xl text-[var(--ea-terracotta)]">{pkg.startingPrice}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
                        <span className="inline-flex items-center gap-2">
                          <Clock size={15} className="text-[var(--ea-terracotta)]" /> {pkg.duration}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Users size={15} className="text-[var(--ea-terracotta)]" /> {pkg.idealFor}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 mb-8">
                        <div>
                          <h4 className="text-lg mb-4">Day-by-Day Outline</h4>
                          <ul className="space-y-2">
                            {pkg.itinerary.map((day) => (
                              <li key={day} className="rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-muted-foreground">
                                {day}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg mb-4">Included</h4>
                            <ul className="space-y-2">
                              {pkg.includes.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                  <Check size={14} className="mt-0.5 text-[var(--ea-terracotta)] flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg mb-4">Not Included</h4>
                            <ul className="space-y-1.5 text-sm text-muted-foreground">
                              {pkg.excludes.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                  <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to={`/custom-trips?destination=${encodeURIComponent(destination.name)}&trip=${encodeURIComponent(pkg.name)}`}
                          className="interactive-button inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors"
                        >
                          Plan This Trip <ArrowRight size={17} />
                        </Link>
                        <Link
                          to="/packages"
                          className="interactive-button inline-flex items-center justify-center gap-2 px-6 py-3 border border-border hover:bg-secondary transition-colors"
                        >
                          Compare All Packages
                        </Link>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </section>

            {/* ── Overview ── */}
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--ea-terracotta)] mb-3">Overview</p>
              <h2 className="text-4xl mb-6">Why {destination.name}?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{destination.whyVisit}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                    <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[var(--ea-terracotta)]/10 flex items-center justify-center">
                      <Check size={13} className="text-[var(--ea-terracotta)]" />
                    </div>
                    <p className="text-muted-foreground text-sm">{h}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ── Attractions by section ── */}
            {sectionKeys.map((type) => (
              <section key={type}>
                <Reveal>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                    {typeIcon(type, 22)}
                    <h2 className="text-3xl">{SECTION_LABELS[type]}</h2>
                    <span className="ml-auto text-sm text-muted-foreground">
                      {grouped[type].length} {grouped[type].length === 1 ? "entry" : "entries"}
                    </span>
                  </div>
                </Reveal>
                <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {grouped[type].map((attraction) => (
                    <StaggerItem key={attraction.name}>
                      <AttractionCard attraction={attraction} />
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </section>
            ))}

            {/* ── Travel styles ── */}
            <Reveal>
              <div className="rounded-3xl bg-secondary p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-[var(--ea-terracotta)]" size={22} />
                  <h3 className="text-2xl">Who This Destination Suits</h3>
                </div>
                <p className="text-muted-foreground mb-5">
                  All packages can be personalized around your pace, accommodation level, and group size.
                </p>
                <div className="flex flex-wrap gap-3">
                  {destination.travelStyles.map((style) => (
                    <span key={style} className="rounded-full bg-background border border-border px-4 py-2 text-sm">
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right: sticky sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">

              {/* Trip snapshot */}
              <div className="interactive-card border border-border bg-card rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Sparkles className="text-[var(--ea-terracotta)]" size={18} />
                  <h3 className="text-lg">Trip Snapshot</h3>
                </div>

                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Best Time to Visit</p>
                <p className="text-sm text-muted-foreground mb-5">{destination.bestTime}</p>

                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Available Packages</p>
                <div className="space-y-2 mb-6">
                  {destination.packageOptions.map((pkg) => (
                    <div key={pkg.slug} className="rounded-xl border border-border bg-secondary/40 px-4 py-3">
                      <p className="text-xs text-[var(--ea-terracotta)]">{pkg.style}</p>
                      <p className="text-sm font-medium">{pkg.name}</p>
                      <p className="text-xs text-muted-foreground">{pkg.duration} · {pkg.startingPrice}</p>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/custom-trips?destination=${encodeURIComponent(destination.name)}`}
                  className="interactive-button block w-full text-center px-5 py-3 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors text-sm"
                >
                  Plan This Trip
                </Link>
                <Link
                  to="/packages"
                  className="interactive-button block w-full text-center px-5 py-3 mt-2 border border-border hover:bg-muted transition-colors text-sm"
                >
                  All Tours & Safaris
                </Link>
              </div>

              {/* What's here */}
              <div className="border border-border bg-card rounded-3xl p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">What's Here</p>
                <div className="space-y-2">
                  {sectionKeys.map((type) => (
                    <div key={type} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        {typeIcon(type, 14)}
                        {SECTION_LABELS[type]}
                      </span>
                      <span className="text-xs font-medium text-foreground bg-secondary rounded-full px-2 py-0.5">
                        {grouped[type].length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Travel styles */}
              <div className="border border-border bg-card rounded-3xl p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Ideal For</p>
                <div className="flex flex-wrap gap-2">
                  {destination.travelStyles.map((style) => (
                    <span key={style} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <Reveal className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Visit {destination.name}?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Tell us your dates and travel style and we will put together a tailored itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/custom-trips?destination=${encodeURIComponent(destination.name)}`}
              className="interactive-button inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors"
            >
              Start Planning <ArrowRight size={18} />
            </Link>
            <Link
              to="/destinations"
              className="interactive-button inline-flex items-center justify-center gap-2 px-8 py-4 border border-border hover:bg-background transition-colors"
            >
              Other Destinations
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
