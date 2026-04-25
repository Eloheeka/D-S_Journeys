import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, Check, Clock, Sparkles, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Reveal, StaggerGroup, StaggerItem } from "../components/animations";
import { destinationMap } from "../data/travel";

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

  return (
    <div className="pt-20">
      <section className="relative min-h-[560px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
        </div>

        <Reveal className="relative z-10 text-white px-4 max-w-7xl mx-auto w-full pb-12">
          <Link
            to="/destinations"
            className="interactive-button inline-flex items-center gap-2 mb-6 text-white/90 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Destinations
          </Link>
          <p className="text-sm uppercase tracking-[0.25em] text-white/75 mb-3">{destination.tagline}</p>
          <h1 className="text-5xl md:text-6xl max-w-3xl mb-4">{destination.name}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl font-light">{destination.intro}</p>
        </Reveal>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          <Reveal>
            <h2 className="text-3xl mb-5">Why {destination.name} Works So Well</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {destination.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {destination.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3 rounded-2xl border border-border p-4 bg-card">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--ea-terracotta)]/10">
                    <Check size={14} className="text-[var(--ea-terracotta)]" />
                  </div>
                  <p className="text-muted-foreground">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-secondary p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-[var(--ea-terracotta)]" size={22} />
                <h3 className="text-2xl">Flexible For Different Travelers</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                These packages are easy to personalize based on pace, accommodation level, and
                who is traveling with you.
              </p>
              <div className="flex flex-wrap gap-3">
                {destination.travelStyles.map((style) => (
                  <span key={style} className="rounded-full bg-background px-4 py-2 text-sm">
                    {style}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="interactive-card sticky top-28 border border-border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-[var(--ea-terracotta)]" size={20} />
                <h3 className="text-xl">Trip Snapshot</h3>
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Best Time To Visit
              </p>
              <p className="text-muted-foreground mb-6">{destination.bestTime}</p>

              <div className="space-y-3 mb-8">
                {destination.packageOptions.map((pkg) => (
                  <div key={pkg.slug} className="rounded-2xl border border-border bg-secondary/40 px-4 py-3">
                    <p className="text-sm text-[var(--ea-terracotta)]">{pkg.style}</p>
                    <p className="font-medium">{pkg.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {pkg.duration} • {pkg.startingPrice}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to={`/custom-trips?destination=${encodeURIComponent(destination.name)}`}
                className="interactive-button block w-full text-center px-6 py-3 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors"
              >
                Plan This Trip
              </Link>
              <Link
                to="/packages"
                className="interactive-button block w-full text-center px-6 py-3 mt-3 border border-border hover:bg-muted transition-colors"
              >
                View All Packages
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 px-4 max-w-7xl mx-auto">
        <Reveal className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--ea-terracotta)] mb-3">
            Featured Packages
          </p>
          <h2 className="text-4xl mb-4">Choose Your {destination.name} Experience</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Start with one of these sample packages, then we can tailor the final itinerary
            around your dates, budget, and travel style.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {destination.packageOptions.map((pkg) => (
            <StaggerItem
              key={pkg.slug}
              className="interactive-card overflow-hidden border border-border bg-card"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-[var(--ea-terracotta)] mb-2">
                      {pkg.style}
                    </p>
                    <h3 className="text-3xl mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground max-w-2xl">{pkg.summary}</p>
                  </div>
                  <div className="rounded-2xl bg-secondary px-5 py-4 min-w-[160px]">
                    <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                    <p className="text-2xl text-[var(--ea-terracotta)]">{pkg.startingPrice}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
                  <div className="inline-flex items-center gap-2">
                    <Clock size={16} className="text-[var(--ea-terracotta)]" />
                    {pkg.duration}
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Users size={16} className="text-[var(--ea-terracotta)]" />
                    {pkg.idealFor}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 mb-8">
                  <div>
                    <h4 className="text-xl mb-4">Day-by-Day Outline</h4>
                    <ul className="space-y-3">
                      {pkg.itinerary.map((day) => (
                        <li key={day} className="rounded-2xl border border-border bg-secondary/30 px-4 py-3 text-muted-foreground">
                          {day}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl mb-4">Included</h4>
                      <ul className="space-y-2">
                        {pkg.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-muted-foreground">
                            <Check size={16} className="mt-1 text-[var(--ea-terracotta)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl mb-4">Not Included</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {pkg.excludes.map((item) => (
                          <li key={item}>{item}</li>
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
                    Plan This Trip
                    <ArrowRight size={18} />
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
    </div>
  );
}
