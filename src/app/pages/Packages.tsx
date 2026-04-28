import { Link } from "react-router";
import { ArrowRight, Check, Clock, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Reveal, StaggerGroup, StaggerItem } from "../components/animations";
import { destinations, multiCountryPackages } from "../data/travel";
import toursHero from "../../assets/images/Tours$Safaris.jpg";

// Second image per country (used on the longer-experience card)
import rwandaImg from "../../assets/images/rwanda.jpg";
import uganda2Img from "../../assets/images/uganda2.jpg";
import kenya2Img from "../../assets/images/kenya2.jpg";
import tanzania2Img from "../../assets/images/tanzania2.jpg";
import zanzibar2Img from "../../assets/images/zanzibar2.jpg";

const countrySecondImages: Record<string, string> = {
  rwanda: rwandaImg,
  uganda: uganda2Img,
  kenya: kenya2Img,
  tanzania: tanzania2Img,
  zanzibar: zanzibar2Img,
};

export function Packages() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[440px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${toursHero})` }} />
        <div className="absolute inset-0 bg-black/45" />
        <Reveal className="relative z-10 text-center text-white px-4">
          <p className="uppercase tracking-[0.3em] text-sm text-white/75 mb-4">Browse by Country</p>
          <h1 className="text-5xl md:text-6xl mb-4">Tours &amp; Safaris</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-light">
            Every trip is built around a country. Find the destination that speaks to you, then choose the experience that fits your time and style.
          </p>
        </Reveal>
      </section>

      {/* Intro */}
      <Reveal className="py-14 px-4 max-w-6xl mx-auto">
        <div className="rounded-3xl bg-secondary p-8 text-center">
          <h2 className="text-3xl mb-4">How Our Trips Work</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Each package below is a starting point. We use it as a base to build your final itinerary around your dates, group size, and accommodation preferences. Nothing is fixed until you say so.
          </p>
        </div>
      </Reveal>

      {/* Single-country packages by destination */}
      <section className="pb-16 px-4 max-w-7xl mx-auto">
        <Reveal className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--ea-terracotta)] mb-3">Single-Country Trips</p>
          <h2 className="text-4xl mb-4">Safaris &amp; Tours by Country</h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Each destination offers a short stay and a longer experience. Both can be tailored to your exact needs.
          </p>
        </Reveal>

        <div className="space-y-20">
          {destinations.map((destination) => (
            <div key={destination.slug}>
              {/* Country header */}
              <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-border">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-1">{destination.tagline}</p>
                  <h3 className="text-4xl">{destination.name}</h3>
                  <p className="text-muted-foreground mt-2 max-w-xl">{destination.intro}</p>
                </div>
                <Link
                  to={`/destinations/${destination.slug}`}
                  className="interactive-button inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:bg-secondary transition-colors text-sm flex-shrink-0"
                >
                  {destination.name} Guide <ArrowRight size={16} />
                </Link>
              </Reveal>

              {/* Package cards */}
              <StaggerGroup className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {destination.packageOptions.map((pkg, pkgIndex) => (
                  <StaggerItem
                    key={pkg.slug}
                    className="interactive-card overflow-hidden border border-border bg-card"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr]">
                      {/* Image — first card uses original cardImage, second uses local country image */}
                      <div className="relative min-h-[220px] overflow-hidden">
                        <ImageWithFallback
                          src={pkgIndex === 0 ? destination.cardImage : (countrySecondImages[destination.slug] ?? destination.heroImage)}
                          alt={destination.name}
                          className="w-full h-full object-cover interactive-media"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute left-4 bottom-4 text-white">
                          <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-1">{pkg.style}</p>
                          <p className="text-2xl">{pkg.duration}</p>
                          <p className="text-lg text-[var(--ea-golden)]">{pkg.startingPrice}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h4 className="text-2xl mb-2">{pkg.name}</h4>
                        <p className="text-muted-foreground text-sm mb-4">{pkg.summary}</p>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                          <Users size={14} className="text-[var(--ea-terracotta)]" />
                          <span>{pkg.idealFor}</span>
                        </div>

                        {/* Itinerary preview */}
                        <div className="space-y-1.5 mb-5">
                          {pkg.itinerary.slice(0, 3).map((day) => (
                            <p key={day} className="text-xs text-muted-foreground leading-relaxed">{day}</p>
                          ))}
                          {pkg.itinerary.length > 3 && (
                            <p className="text-xs text-muted-foreground italic">+ {pkg.itinerary.length - 3} more days</p>
                          )}
                        </div>

                        {/* Includes preview */}
                        <div className="space-y-1 mb-5">
                          {pkg.includes.slice(0, 3).map((item) => (
                            <div key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <Check size={12} className="mt-0.5 text-[var(--ea-sage)] flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        <Link
                          to={`/custom-trips?destination=${encodeURIComponent(destination.name)}&trip=${encodeURIComponent(pkg.name)}`}
                          className="interactive-button inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors text-sm"
                        >
                          Plan This Trip <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-country packages */}
      <section className="py-16 px-4 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--ea-terracotta)] mb-3">Multi-Country Trips</p>
            <h2 className="text-4xl mb-4">Combination Itineraries</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              These sample itineraries show how safari, primates, and beach time can fit together across multiple countries. All are fully customizable.
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
                    className="w-full h-full object-cover interactive-media"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute left-5 bottom-5 right-5 text-white">
                    <h3 className="text-2xl mb-1">{pkg.name}</h3>
                    <p className="text-white/80 text-sm">{pkg.summary}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-2 text-sm text-muted-foreground mb-5">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-[var(--ea-terracotta)]" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[var(--ea-terracotta)]" />
                      <span>{pkg.destinations.join(" · ")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-[var(--ea-terracotta)]" />
                      <span>{pkg.idealFor}</span>
                    </div>
                  </div>

                  <div className="mb-5 border-t border-border pt-5">
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Sample Itinerary</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {pkg.itinerary.slice(0, 4).map((day) => (
                        <li key={day}>{day}</li>
                      ))}
                      {pkg.itinerary.length > 4 && (
                        <li className="italic text-xs">+ more available on inquiry</li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-border pt-5">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting from</p>
                      <p className="text-2xl text-[var(--ea-terracotta)]">{pkg.startingPrice}</p>
                    </div>
                    <Link
                      to={`/custom-trips?destination=${encodeURIComponent(pkg.destinations.join(", "))}&trip=${encodeURIComponent(pkg.name)}`}
                      className="interactive-button inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors text-sm"
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

      {/* CTA */}
      <Reveal className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Build Your Trip?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Every package above is a starting point. Share your dates and preferences and we will put together a tailored itinerary.
          </p>
          <Link
            to="/custom-trips"
            className="interactive-button inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors"
          >
            Start Planning <ArrowRight size={18} />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
