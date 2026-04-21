import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import sunsetHero from "../../assets/images/sunset.jpg";

export function Destinations() {
  const destinations = [
    {
      country: "Rwanda",
      slug: "rwanda",
      tagline: "Land of a Thousand Hills",
      description: "Home to mountain gorillas, lush rainforests, and vibrant culture",
      image: "https://images.unsplash.com/photo-1722291731448-3afe029611a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb3VudGFpbiUyMGdvcmlsbGElMjByd2FuZGF8ZW58MXx8fHwxNzc0NzI5MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      country: "Tanzania",
      slug: "tanzania",
      tagline: "The Serengeti Experience",
      description: "Witness the Great Migration and explore Africa's highest peak",
      image: "https://images.unsplash.com/photo-1500549158481-49dcc08a37ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0YW56YW5pYSUyMHNlcmVuZ2V0aSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzQ3MjkyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      country: "Kenya",
      slug: "kenya",
      tagline: "The Classic Safari",
      description: "World-renowned wildlife viewing in the Masai Mara and beyond",
      image: "https://images.unsplash.com/photo-1704494766450-23bdda6676e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMG1hc2FpJTIwbWFyYSUyMHNhZmFyaXxlbnwxfHx8fDE3NzQ3MjkyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      country: "Uganda",
      slug: "uganda",
      tagline: "The Pearl of Africa",
      description: "Gorilla trekking, chimpanzees, and stunning natural beauty",
      image: "https://images.unsplash.com/photo-1659132814891-ef346422b339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhZnJpY2FuJTIwc2FmYXJpJTIwd2lsZGxpZmUlMjBlbGVwaGFudHN8ZW58MXx8fHwxNzc0NzI5MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      country: "Zanzibar",
      slug: "zanzibar",
      tagline: "Tropical Paradise",
      description: "White sand beaches, crystal waters, and rich Swahili heritage",
      image: "https://images.unsplash.com/photo-1646667640485-f21def63ed50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx6YW56aWJhciUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzc0NzI5MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sunsetHero})` }}
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4">Destinations</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Explore the diverse landscapes and wildlife of East Africa
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="space-y-24">
          {destinations.map((dest, index) => (
            <div
              key={dest.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Link to={`/destinations/${dest.slug}`} className="block group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={dest.image}
                      alt={dest.country}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-[var(--ea-terracotta)] mb-2">{dest.tagline}</p>
                <h2 className="text-4xl mb-4">{dest.country}</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {dest.description}
                </p>
                <Link
                  to={`/destinations/${dest.slug}`}
                  className="inline-flex items-center gap-2 text-[var(--ea-terracotta)] hover:gap-3 transition-all"
                >
                  Learn More
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
