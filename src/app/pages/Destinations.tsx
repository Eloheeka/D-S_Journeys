import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Reveal, StaggerGroup, StaggerItem } from "../components/animations";
import { destinations } from "../data/travel";
import destinationsHero from "../../assets/images/destiantions.jpg";

// Per-country local images
import rwandaImg from "../../assets/images/rwanda.jpg";
import uganda2Img from "../../assets/images/uganda2.jpg";
import kenya2Img from "../../assets/images/kenya2.jpg";
import tanzania2Img from "../../assets/images/tanzania2.jpg";
import zanzibar2Img from "../../assets/images/zanzibar2.jpg";

const countryImages: Record<string, string> = {
  rwanda: rwandaImg,
  uganda: uganda2Img,
  kenya: kenya2Img,
  tanzania: tanzania2Img,
  zanzibar: zanzibar2Img,
};

export function Destinations() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${destinationsHero})` }} />
        <div className="absolute inset-0 bg-black/45" />
        <Reveal className="relative z-10 text-center text-white px-4">
          <p className="uppercase tracking-[0.3em] text-sm text-white/75 mb-4">Explore by Country</p>
          <h1 className="text-5xl md:text-6xl mb-4">Destinations</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-light">
            Five countries. One region. Each with its own wildlife, culture, and character. Choose where you want to go.
          </p>
        </Reveal>
      </section>

      {/* Country cards */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <StaggerItem key={destination.slug}>
              <Link
                to={`/destinations/${destination.slug}`}
                className="interactive-card group block overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={countryImages[destination.slug] ?? destination.cardImage}
                    alt={destination.name}
                    className="w-full h-full object-cover interactive-media"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute left-5 bottom-5 text-white">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/65 mb-1">{destination.tagline}</p>
                    <h2 className="text-3xl">{destination.name}</h2>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{destination.intro}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {destination.highlights.slice(0, 2).map((h) => (
                      <span key={h} className="rounded-full bg-secondary border border-border px-3 py-1 text-xs text-muted-foreground">
                        {h}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm text-[var(--ea-terracotta)] group-hover:gap-3 transition-all">
                    Explore {destination.name} <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* CTA */}
      <Reveal className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Not Sure Where to Start?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Tell us what kind of trip you have in mind and we will suggest the right destination and itinerary for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/custom-trips"
              className="interactive-button inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors"
            >
              Plan Your Trip <ArrowRight size={18} />
            </Link>
            <Link
              to="/packages"
              className="interactive-button inline-flex items-center justify-center gap-2 px-8 py-4 border border-border hover:bg-background transition-colors"
            >
              Browse All Safaris
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
