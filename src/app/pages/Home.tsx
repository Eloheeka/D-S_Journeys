import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Reveal, StaggerGroup, StaggerItem } from "../components/animations";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { destinations, multiCountryPackages } from "../data/travel";

export function Home() {
  const [heroCarousel, setHeroCarousel] = useState<CarouselApi>();
  const featuredDestinations = [...destinations].sort((a, b) => {
    if (a.slug === "rwanda") return -1;
    if (b.slug === "rwanda") return 1;
    return 0;
  });

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

  useEffect(() => {
    if (!heroCarousel) return;

    const interval = window.setInterval(() => {
      heroCarousel.scrollNext();
    }, 5000);

    return () => window.clearInterval(interval);
  }, [heroCarousel]);

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden">
        <Carousel
          setApi={setHeroCarousel}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {featuredDestinations.map((destination) => (
              <CarouselItem
                key={destination.slug}
                className="pl-0 basis-full"
              >
                <div className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
                  <ImageWithFallback
                    src={destination.heroImage}
                    alt={destination.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15" />

                  <div className="relative z-10 min-h-[calc(100vh-5rem)] flex items-end">
                    <Reveal className="w-full max-w-7xl mx-auto px-4 pb-16 md:pb-20 text-white">
                      <p className="uppercase tracking-[0.32em] text-sm text-white/75 mb-4">East Africa, Made Easy</p>
                      <h1 className="text-6xl md:text-8xl mb-5 tracking-tight">{destination.name}</h1>
                      <p className="text-sm uppercase tracking-[0.26em] text-white/65 mb-4">{destination.tagline}</p>
                      <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl font-light">
                        {destination.intro}
                      </p>

                      <div className="flex gap-2 flex-wrap mb-8">
                        {destination.packageOptions.map((pkg) => (
                          <span key={pkg.slug} className="rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm text-white/90">
                            {pkg.duration}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to={`/destinations/${destination.slug}`}
                          className="interactive-button inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-colors"
                        >
                          Explore {destination.name}
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
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-auto right-20 top-auto bottom-8 bg-white/15 border-white/20 text-white hover:bg-white/25" />
          <CarouselNext className="right-8 top-auto bottom-8 bg-white/15 border-white/20 text-white hover:bg-white/25" />
        </Carousel>
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
