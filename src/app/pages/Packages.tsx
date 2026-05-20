import { Link } from "react-router";
import { ArrowRight, CalendarDays, Check, Gem, MapPin, Star, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Reveal, StaggerGroup, StaggerItem } from "../components/animations";
import { destinations, multiCountryPackages } from "../data/travel";
import toursHero from "../../assets/images/Tours$Safaris.jpg";
import rwandaImg from "../../assets/images/rwanda.jpg";
import ugandaImg from "../../assets/images/uganda2.jpg";
import kenyaImg from "../../assets/images/kenya2.jpg";
import tanzaniaImg from "../../assets/images/tanzania2.jpg";
import zanzibarImg from "../../assets/images/zanzibar2.jpg";

const countryImages: Record<string, string> = {
  rwanda: rwandaImg,
  uganda: ugandaImg,
  kenya: kenyaImg,
  tanzania: tanzaniaImg,
  zanzibar: zanzibarImg,
};

function luxuryLevel(style: string, days: number) {
  if (days >= 7) return "Signature Luxury";
  if (style.toLowerCase().includes("short")) return "Boutique Luxury";
  return "Tailor-Made Luxury";
}

export function Packages() {
  return (
    <div className="pt-20">
      <section className="relative flex min-h-[68vh] items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${toursHero})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/55 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        <Reveal className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.34em] text-[var(--ea-gold)]">Tours & Safaris</p>
          <h1 className="mb-5 max-w-4xl text-5xl leading-[0.95] md:text-7xl lg:text-8xl">Luxury safari packages with a private rhythm.</h1>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-white/88 md:text-2xl">
            Use these itineraries as elegant starting points. We refine the lodges, routing, pace, and special moments around you.
          </p>
        </Reveal>
      </section>

      <Reveal className="bg-[var(--ea-sand)] px-4 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-4">
          {[
            ["Duration", "Short stays to 14-day grand safaris"],
            ["Destination", "Rwanda, Uganda, Kenya, Tanzania, Zanzibar"],
            ["Luxury Level", "Boutique, signature, and fully bespoke"],
            ["Pricing", "Transparent starting-from guidance"],
          ].map(([title, text]) => (
            <div key={title} className="border border-[var(--ea-border-strong)] bg-background p-5">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--ea-bronze)]">{title}</p>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--ea-bronze)]">Single-Country Safaris</p>
            <h2 className="mb-4 text-4xl leading-tight md:text-6xl">Refined package cards by destination.</h2>
            <p className="text-lg text-muted-foreground">
              Each package shows the essentials travelers need to compare quickly: duration, destination, luxury level, and starting price.
            </p>
          </Reveal>

          <div className="space-y-16">
            {destinations.map((destination) => (
              <div key={destination.slug} id={destination.slug}>
                <Reveal className="mb-8 flex flex-col gap-4 border-b border-[var(--ea-border-strong)] pb-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-[0.25em] text-muted-foreground">{destination.tagline}</p>
                    <h3 className="text-4xl leading-tight md:text-5xl">{destination.name}</h3>
                    <p className="mt-2 max-w-2xl text-muted-foreground">{destination.intro}</p>
                  </div>
                  <Link
                    to={`/destinations/${destination.slug}`}
                    className="interactive-button inline-flex items-center justify-center gap-2 border border-[var(--ea-border-strong)] px-5 py-3 text-sm uppercase tracking-[0.12em] hover:bg-[var(--ea-sand)]"
                  >
                    Destination Guide <ArrowRight size={15} />
                  </Link>
                </Reveal>

                <StaggerGroup className="grid grid-cols-1 gap-7 xl:grid-cols-2">
                  {destination.packageOptions.map((pkg, pkgIndex) => {
                    const level = luxuryLevel(pkg.style, pkg.days);
                    return (
                      <StaggerItem key={pkg.slug} className="interactive-card overflow-hidden border border-[var(--ea-border-strong)] bg-card shadow-[var(--premium-shadow)]">
                        <div className="grid min-h-full grid-cols-1 md:grid-cols-[0.95fr_1.05fr]">
                          <div className="relative min-h-[280px] overflow-hidden">
                            <ImageWithFallback
                              src={pkgIndex === 0 ? countryImages[destination.slug] ?? destination.cardImage : destination.heroImage}
                              alt={pkg.name}
                              className="h-full w-full object-cover interactive-media"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/10 to-transparent" />
                            <div className="absolute left-5 top-5 bg-[var(--ea-gold)] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[var(--ea-night)]">
                              {level}
                            </div>
                            <div className="absolute bottom-5 left-5 right-5 text-white">
                              <p className="mb-1 text-xs uppercase tracking-[0.22em] text-white/70">{destination.name}</p>
                              <p className="font-[var(--font-heading)] text-4xl leading-none">{pkg.startingPrice}</p>
                              <p className="text-sm text-white/75">starting from, per person basis varies by season</p>
                            </div>
                          </div>

                          <div className="flex flex-col p-6">
                            <h4 className="mb-3 text-3xl leading-tight">{pkg.name}</h4>
                            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{pkg.summary}</p>

                            <div className="mb-5 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                              <span className="inline-flex items-center gap-2"><CalendarDays size={15} className="text-[var(--ea-bronze)]" />{pkg.duration}</span>
                              <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-[var(--ea-bronze)]" />{destination.name}</span>
                              <span className="inline-flex items-center gap-2"><Gem size={15} className="text-[var(--ea-bronze)]" />{level}</span>
                              <span className="inline-flex items-center gap-2"><Users size={15} className="text-[var(--ea-bronze)]" />Private or small group</span>
                            </div>

                            <div className="mb-5 border-t border-[var(--ea-border-strong)] pt-5">
                              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">Experience Preview</p>
                              <div className="space-y-2">
                                {pkg.itinerary.slice(0, 3).map((day) => (
                                  <p key={day} className="text-xs leading-relaxed text-muted-foreground">{day}</p>
                                ))}
                              </div>
                            </div>

                            <div className="mb-6 space-y-2">
                              {pkg.includes.slice(0, 3).map((item) => (
                                <div key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                                  <Check size={13} className="mt-0.5 shrink-0 text-[var(--ea-forest)]" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>

                            <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                              <Link
                                to={`/custom-trips?destination=${encodeURIComponent(destination.name)}&trip=${encodeURIComponent(pkg.name)}`}
                                className="interactive-button inline-flex items-center justify-center gap-2 bg-[var(--ea-forest)] px-5 py-3 text-sm uppercase tracking-[0.12em] text-white hover:bg-[var(--ea-forest)]/90"
                              >
                                Request This Itinerary <ArrowRight size={15} />
                              </Link>
                              <Link
                                to={`/destinations/${destination.slug}`}
                                className="interactive-button inline-flex items-center justify-center gap-2 border border-[var(--ea-border-strong)] px-5 py-3 text-sm uppercase tracking-[0.12em] hover:bg-[var(--ea-sand)]"
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </StaggerGroup>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--ea-night)] px-4 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--ea-gold)]">Multi-Country Safaris</p>
            <h2 className="mb-4 text-4xl leading-tight md:text-6xl">Flagship East Africa combinations.</h2>
            <p className="text-lg text-white/72">
              For travelers who want gorillas, classic safari, and coast in one journey, these routes show how the region can flow beautifully.
            </p>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {multiCountryPackages.map((pkg) => (
              <StaggerItem key={pkg.slug} className="interactive-card overflow-hidden border border-white/10 bg-white/[0.06]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback src={pkg.image} alt={pkg.name} className="h-full w-full object-cover interactive-media" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--ea-gold)]">Fully Customizable</p>
                    <h3 className="text-3xl leading-tight">{pkg.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-5 grid grid-cols-1 gap-3 text-sm text-white/70">
                    <span className="inline-flex items-center gap-2"><CalendarDays size={15} className="text-[var(--ea-gold)]" />{pkg.duration}</span>
                    <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-[var(--ea-gold)]" />{pkg.destinations.join(" + ")}</span>
                    <span className="inline-flex items-center gap-2"><Star size={15} className="text-[var(--ea-gold)]" />Signature Luxury</span>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-white/72">{pkg.summary}</p>
                  <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-white/50">Starting from</p>
                      <p className="font-[var(--font-heading)] text-3xl text-[var(--ea-gold)]">{pkg.startingPrice}</p>
                    </div>
                    <Link
                      to={`/custom-trips?destination=${encodeURIComponent(pkg.destinations.join(", "))}&trip=${encodeURIComponent(pkg.name)}`}
                      className="interactive-button inline-flex items-center gap-2 bg-white px-4 py-2 text-sm text-[var(--ea-night)] hover:bg-[var(--ea-gold)]"
                    >
                      Customize <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <Reveal className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-5 text-4xl leading-tight md:text-6xl">Need something more personal?</h2>
          <p className="mx-auto mb-9 max-w-2xl text-lg text-muted-foreground">
            Share your preferred luxury level, dates, mobility needs, celebration plans, and dream wildlife moments. We will turn a sample package into a proper itinerary.
          </p>
          <Link
            to="/custom-trips"
            className="interactive-button inline-flex items-center justify-center gap-2 bg-[var(--ea-forest)] px-8 py-4 text-sm uppercase tracking-[0.12em] text-white hover:bg-[var(--ea-forest)]/90"
          >
            Request Custom Itinerary <ArrowRight size={18} />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
