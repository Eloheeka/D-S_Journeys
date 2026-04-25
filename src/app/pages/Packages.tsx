import { Link } from "react-router";
import { ArrowRight, Clock, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Reveal, StaggerGroup, StaggerItem } from "../components/animations";
import { destinations, multiCountryPackages } from "../data/travel";
import safariHero from "../../assets/images/safari1.jpg";

export function Packages() {
  return (
    <div className="pt-20">
      <section className="relative h-[52vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${safariHero})` }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <Reveal className="relative z-10 text-center text-white px-4">
          <p className="uppercase tracking-[0.3em] text-sm text-white/75 mb-4">Simple Trip Planning</p>
          <h1 className="text-5xl md:text-6xl mb-4">Packages</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-light">
            Browse single-country trip first, then explore a few strong multi-country ideas if
            you want something bigger.
          </p>
        </Reveal>
      </section>

      <Reveal className="py-16 px-4 max-w-6xl mx-auto">
        <div className="rounded-3xl bg-secondary p-6 md:p-8 text-center">
          <h2 className="text-3xl mb-4">Built for Real Travel Decisions</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Each package includes a simple itinerary outline, a starting price, what is included,
            what is not included, and a direct inquiry route for customization.
          </p>
        </div>
      </Reveal>

      <section className="pb-12 px-4 max-w-7xl mx-auto">
        <Reveal className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--ea-terracotta)] mb-3">
            Single-Country Packages
          </p>
          <h2 className="text-4xl mb-4">Choose a Country, Then a Trip Length</h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Every destination features two clear starting points: a short stay and a longer
            experience. That keeps the package options easy to scan on desktop and mobile.
          </p>
        </Reveal>

        <StaggerGroup className="space-y-10">
          {destinations.map((destination) => (
            <StaggerItem
              key={destination.slug}
              className="interactive-card overflow-hidden border border-border bg-card"
            >
              <div className="grid grid-cols-1 xl:grid-cols-[0.85fr_1.15fr]">
                <div className="relative min-h-[320px]">
                  <ImageWithFallback
                    src={destination.cardImage}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute left-6 bottom-6 right-6 text-white">
                    <p className="text-sm uppercase tracking-[0.25em] text-white/75 mb-2">
                      {destination.tagline}
                    </p>
                    <h3 className="text-4xl mb-3">{destination.name}</h3>
                    <p className="text-white/85 max-w-xl">{destination.intro}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {destination.packageOptions.map((pkg) => (
                      <div key={pkg.slug} className="rounded-3xl border border-border bg-secondary/35 p-5">
                        <p className="text-sm uppercase tracking-[0.2em] text-[var(--ea-terracotta)] mb-2">
                          {pkg.style}
                        </p>
                        <h4 className="text-2xl mb-2">{pkg.name}</h4>
                        <p className="text-muted-foreground mb-4">{pkg.summary}</p>

                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-[var(--ea-terracotta)]" />
                            <span>{pkg.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users size={16} className="text-[var(--ea-terracotta)]" />
                            <span>{pkg.idealFor}</span>
                          </div>
                        </div>

                        <div className="border-t border-border pt-4">
                          <p className="text-sm text-muted-foreground mb-2">Starting from</p>
                          <p className="text-2xl text-[var(--ea-terracotta)] mb-4">{pkg.startingPrice}</p>
                          <Link
                            to={`/custom-trips?destination=${encodeURIComponent(destination.name)}&trip=${encodeURIComponent(pkg.name)}`}
                            className="interactive-button inline-flex items-center gap-2 text-[var(--ea-terracotta)] hover:gap-3 transition-all"
                          >
                            Plan This Trip
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/destinations/${destination.slug}`}
                    className="interactive-button inline-flex items-center gap-2 px-5 py-3 border border-border hover:bg-secondary transition-colors"
                  >
                    View full {destination.name} details
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <Reveal className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--ea-terracotta)] mb-3">
            Multi-Country Packages
          </p>
          <h2 className="text-4xl mb-4">A Few Strong Combination Ideas</h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            These sample itineraries show how safari, primates, and beach time can fit together.
            They are meant to be customized rather than treated as fixed departures.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {multiCountryPackages.map((pkg) => (
            <StaggerItem
              key={pkg.slug}
              className="interactive-card overflow-hidden border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute left-5 bottom-5 right-5 text-white">
                  <h3 className="text-2xl mb-2">{pkg.name}</h3>
                  <p className="text-white/80 text-sm">{pkg.summary}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-2 text-sm text-muted-foreground mb-5">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[var(--ea-terracotta)]" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[var(--ea-terracotta)]" />
                    <span>{pkg.destinations.join(" • ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-[var(--ea-terracotta)]" />
                    <span>{pkg.idealFor}</span>
                  </div>
                </div>

                <div className="mb-5 border-t border-border pt-5">
                  <p className="text-sm text-muted-foreground mb-3">Sample itinerary</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {pkg.itinerary.slice(0, 4).map((day) => (
                      <li key={day}>{day}</li>
                    ))}
                    {pkg.itinerary.length > 4 ? <li className="italic">+ more available in inquiry</li> : null}
                  </ul>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-border pt-5">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="text-2xl text-[var(--ea-terracotta)]">{pkg.startingPrice}</p>
                  </div>
                  <Link
                    to={`/custom-trips?destination=${encodeURIComponent(pkg.destinations.join(", "))}&trip=${encodeURIComponent(pkg.name)}`}
                    className="interactive-button inline-flex items-center justify-center gap-2 px-4 py-2 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors text-sm"
                  >
                    Customize
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </div>
  );
}
