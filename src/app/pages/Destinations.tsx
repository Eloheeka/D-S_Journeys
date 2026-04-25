import { Link } from "react-router";
import { ArrowRight, Compass, MapPinned } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Reveal, StaggerGroup, StaggerItem } from "../components/animations";
import { destinations } from "../data/travel";
import sunsetHero from "../../assets/images/sunset.jpg";

export function Destinations() {
  return (
    <div className="pt-20">
      <section className="relative h-[65vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sunsetHero})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <Reveal className="relative z-10 text-center text-white px-4">
          <p className="uppercase tracking-[0.3em] text-sm text-white/75 mb-4">
            Explore by Country
          </p>
          <h1 className="text-5xl md:text-6xl mb-4">Destinations</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-light">
            Start with the country that fits your style, then choose a short stay or a longer
            tailor-made journey.
          </p>
        </Reveal>
      </section>

      <Reveal className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="interactive-card bg-secondary/75 p-6">
            <Compass className="text-[var(--ea-terracotta)] mb-4" size={28} />
            <h2 className="text-2xl mb-2">Destination-first flow</h2>
            <p className="text-muted-foreground">
              Every country now has a dedicated page with a clear introduction and featured
              itinerary options.
            </p>
          </div>
          <div className="interactive-card bg-secondary/75 p-6">
            <MapPinned className="text-[var(--ea-terracotta)] mb-4" size={28} />
            <h2 className="text-2xl mb-2">Flexible travel styles</h2>
            <p className="text-muted-foreground">
              Solo travelers, couples, and groups are all catered for with adaptable trip
              pacing and accommodation options.
            </p>
          </div>
          <div className="interactive-card bg-secondary/75 p-6">
            <ArrowRight className="text-[var(--ea-terracotta)] mb-4" size={28} />
            <h2 className="text-2xl mb-2">Easy next step</h2>
            <p className="text-muted-foreground">
              Each page leads naturally into a package view and a prefilled trip inquiry.
            </p>
          </div>
        </div>
      </Reveal>

      <section className="pb-20 px-4 max-w-7xl mx-auto">
        <StaggerGroup className="space-y-12">
          {destinations.map((destination) => (
            <StaggerItem
              key={destination.slug}
              className="interactive-card overflow-hidden border border-border bg-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[320px]">
                  <ImageWithFallback
                    src={destination.cardImage}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute left-6 bottom-6 text-white max-w-lg">
                    <p className="text-sm uppercase tracking-[0.25em] text-white/75 mb-2">
                      {destination.tagline}
                    </p>
                    <h2 className="text-4xl mb-3">{destination.name}</h2>
                    <p className="text-white/85">{destination.intro}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {destination.packageOptions.map((pkg) => (
                      <div key={pkg.slug} className="rounded-2xl border border-border bg-secondary/50 p-4">
                        <p className="text-sm text-[var(--ea-terracotta)] mb-1">{pkg.style}</p>
                        <h3 className="text-xl mb-1">{pkg.duration}</h3>
                        <p className="text-sm text-muted-foreground">{pkg.startingPrice} starting price</p>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
                      Ideal For
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {destination.travelStyles.map((style) => (
                        <span
                          key={style}
                          className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
                        >
                          {style}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{destination.description}</p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={`/destinations/${destination.slug}`}
                      className="interactive-button inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors"
                    >
                      Explore {destination.name}
                      <ArrowRight size={18} />
                    </Link>
                    <Link
                      to={`/custom-trips?destination=${encodeURIComponent(destination.name)}`}
                      className="interactive-button inline-flex items-center justify-center gap-2 px-6 py-3 border border-border hover:bg-secondary transition-colors"
                    >
                      Plan This Trip
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </div>
  );
}
