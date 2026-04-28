import { Link } from "react-router";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Reveal, StaggerGroup, StaggerItem } from "../components/animations";
import { destinations, multiCountryPackages } from "../data/travel";
import landingPageImage from "../../assets/images/landingPageImage.png";

export function Home() {
  const featuredDestinations = destinations.slice(0, 5);

  const features = [
    {
      icon: MapPin,
      title: "Country-first planning",
      description: "Travelers can start with Rwanda, Uganda, Kenya, Tanzania, or Zanzibar and explore packages from there.",
    },
    {
      icon: Calendar,
      title: "Short and longer options",
      description: "Each destination offers a short stay and a more complete itinerary to keep decisions simple.",
    },
    {
      icon: Users,
      title: "Flexible for every traveler",
      description: "Trips are built for solo travelers, couples, families, and groups with room to personalize.",
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={landingPageImage}
            alt="African safari"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        </div>

        <Reveal className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.32em] text-sm text-white/75 mb-4">East Africa, Made Easy</p>
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">Choose a destination. Pick a package. Plan your trip.</h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto font-light">
            Clear country pages, flexible packages, and smooth inquiry flow for safari and beach
            trips across East Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/destinations"
              className="interactive-button inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Explore Destinations
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/packages"
              className="interactive-button inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground hover:bg-white/90 transition-colors"
            >
              View Packages
            </Link>
          </div>
        </Reveal>
      </section>

      <Reveal className="py-16 px-4 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-secondary p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--ea-terracotta)] mb-3">
                How The Site Works
              </p>
              <h2 className="text-4xl md:text-5xl mb-4">A simpler structure for travelers</h2>
              <p className="text-muted-foreground text-lg">
                Visitors can move naturally from destination pages to package options and then to
                a prefilled inquiry form without digging through cluttered menus or long generic lists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-3xl bg-background p-5">
                  <feature.icon className="text-[var(--ea-terracotta)] mb-4" size={28} />
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--ea-terracotta)] mb-3">
            Start With The Destination
          </p>
          <h2 className="text-4xl md:text-5xl mb-4">Country Pages With Clear Options</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Each page introduces the country, highlights traveler types, and presents a short stay
            and longer experience.
          </p>
        </div>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {featuredDestinations.map((destination) => (
            <StaggerItem key={destination.slug}>
              <Link
                to={`/destinations/${destination.slug}`}
                className="interactive-card group relative overflow-hidden bg-card aspect-[3/4] block"
              >
                <ImageWithFallback
                  src={destination.cardImage}
                  alt={destination.name}
                  className="interactive-media w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-2">
                    {destination.tagline}
                  </p>
                  <h3 className="text-2xl mb-2">{destination.name}</h3>
                  <p className="text-white/80 text-sm mb-4">{destination.intro}</p>
                  <div className="flex gap-2 flex-wrap">
                    {destination.packageOptions.map((pkg) => (
                      <span key={pkg.slug} className="rounded-full bg-white/15 px-3 py-1 text-xs">
                        {pkg.duration}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Reveal>

      <Reveal className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--ea-terracotta)] mb-3">
              Multi-Country Trips
            </p>
            <h2 className="text-4xl md:text-5xl mb-4">A Few Strong Combination Ideas</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Start with a sample combination, then customize it around budget, pace, and travel goals.
            </p>
          </div>

          <StaggerGroup className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {multiCountryPackages.map((pkg) => (
              <StaggerItem key={pkg.slug} className="interactive-card bg-background overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <ImageWithFallback
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl mb-2">{pkg.name}</h3>
                    <p className="text-sm text-white/80">{pkg.destinations.join(" • ")}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{pkg.summary}</p>
                  <div className="flex items-center justify-between gap-4">
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
        </div>
      </Reveal>

      <Reveal className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Start Your East Africa Journey?</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Tell us the destination or package you like, and we will shape it around your dates,
            budget, and travel style.
          </p>
          <Link
            to="/custom-trips"
            className="interactive-button inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Plan Your Trip
            <ArrowRight size={20} />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
