import { Link } from "react-router";
import { ArrowRight, BadgeCheck, Gem, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Reveal, StaggerGroup, StaggerItem } from "../components/animations";
import { destinations } from "../data/travel";
import destinationsHero from "../../assets/images/destiantions.jpg";
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

const luxuryNotes: Record<string, string> = {
  rwanda: "Gorilla trekking, Kigali culture, Volcanoes lodges, and lakeside recovery designed with a polished private pace.",
  uganda: "Primate forests, boat safaris, crater lakes, and adventurous luxury for travelers who want depth and variety.",
  kenya: "Masai Mara wildlife, private conservancies, elegant camps, and classic safari service from Nairobi outward.",
  tanzania: "Serengeti, Ngorongoro, Tarangire, and Zanzibar pairings for big wildlife days and refined lodge evenings.",
  zanzibar: "Barefoot luxury, Stone Town heritage, spice farms, private beach time, and romantic Indian Ocean finishes.",
};

export function Destinations() {
  return (
    <div className="pt-20">
      <section className="relative flex min-h-[72vh] items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${destinationsHero})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        <Reveal className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.34em] text-[var(--ea-gold)]">Explore East Africa</p>
          <h1 className="mb-5 max-w-4xl text-5xl leading-[0.95] md:text-7xl lg:text-8xl">Destinations with room for wonder.</h1>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-white/88 md:text-2xl">
            Rwanda, Uganda, Kenya, Tanzania, and Zanzibar each offer a different kind of luxury: wild, coastal, cultural, romantic, restorative.
          </p>
        </Reveal>
      </section>

      <section className="bg-[var(--ea-sand)] px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--ea-bronze)]">Country Collections</p>
            <h2 className="mb-4 text-4xl leading-tight md:text-6xl">Choose your landscape. We will design the journey around it.</h2>
            <p className="text-lg text-muted-foreground">
              Each destination below links to refined package ideas, private routing, lodge selections, and the kind of travel moments that make East Africa feel personal.
            </p>
          </Reveal>

          <div className="space-y-12">
            {destinations.map((destination, index) => (
              <Reveal key={destination.slug}>
                <article className="grid overflow-hidden border border-[var(--ea-border-strong)] bg-background shadow-[var(--premium-shadow)] lg:grid-cols-2">
                  <div className={`relative min-h-[360px] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <ImageWithFallback
                      src={countryImages[destination.slug] ?? destination.heroImage}
                      alt={destination.name}
                      className="h-full w-full object-cover interactive-media"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="mb-2 text-xs uppercase tracking-[0.24em] text-[var(--ea-gold)]">{destination.tagline}</p>
                      <h3 className="text-5xl leading-none md:text-6xl">{destination.name}</h3>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-6 md:p-10">
                    <div className="mb-6 flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 3).map((highlight) => (
                        <span key={highlight} className="border border-[var(--ea-border-strong)] bg-[var(--ea-sand)] px-3 py-1 text-xs text-muted-foreground">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <h4 className="mb-4 text-3xl leading-tight md:text-4xl">{luxuryNotes[destination.slug]}</h4>
                    <p className="mb-6 text-muted-foreground">{destination.intro}</p>

                    <div className="mb-7 grid grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
                      <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-[var(--ea-bronze)]" />{destination.name}</span>
                      <span className="inline-flex items-center gap-2"><Gem size={16} className="text-[var(--ea-bronze)]" />Luxury stays</span>
                      <span className="inline-flex items-center gap-2"><BadgeCheck size={16} className="text-[var(--ea-forest)]" />Private planning</span>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link
                        to={`/destinations/${destination.slug}`}
                        className="interactive-button inline-flex items-center justify-center gap-2 bg-[var(--ea-forest)] px-6 py-3 text-sm uppercase tracking-[0.12em] text-white hover:bg-[var(--ea-forest)]/90"
                      >
                        Explore {destination.name} <ArrowRight size={16} />
                      </Link>
                      <Link
                        to={`/packages#${destination.slug}`}
                        className="interactive-button inline-flex items-center justify-center gap-2 border border-[var(--ea-border-strong)] px-6 py-3 text-sm uppercase tracking-[0.12em] text-foreground hover:bg-[var(--ea-sand)]"
                      >
                        View Packages
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--ea-bronze)]">Travel Styles</p>
            <h2 className="text-4xl leading-tight md:text-6xl">Luxury can mean many things here.</h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {[
              "Private gorilla trekking",
              "Honeymoon & proposal safaris",
              "Elderly-friendly 50+ travel",
              "Safari and Zanzibar coast",
            ].map((style) => (
              <StaggerItem key={style} className="interactive-card border border-[var(--ea-border-strong)] bg-card p-6 text-center">
                <Gem className="mx-auto mb-4 text-[var(--ea-bronze)]" size={26} />
                <h3 className="text-2xl leading-snug">{style}</h3>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <Reveal className="bg-[var(--ea-night)] px-4 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-5 text-4xl leading-tight md:text-6xl">Not sure where your trip should begin?</h2>
          <p className="mx-auto mb-9 max-w-2xl text-lg text-white/75">
            Tell us your dates, travel style, and must-see moments. We will recommend the country sequence and package level that fits.
          </p>
          <Link
            to="/custom-trips"
            className="interactive-button inline-flex items-center justify-center gap-2 bg-[var(--ea-gold)] px-8 py-4 text-sm uppercase tracking-[0.12em] text-[var(--ea-night)] hover:bg-[var(--ea-gold)]/90"
          >
            Plan Your Journey <ArrowRight size={18} />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
