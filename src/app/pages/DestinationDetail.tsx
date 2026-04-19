import { useParams, Link } from "react-router";
import { ArrowLeft, Check } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function DestinationDetail() {
  const { country } = useParams();

  const destinationData: Record<string, any> = {
    rwanda: {
      name: "Rwanda",
      tagline: "Land of a Thousand Hills",
      heroImage: "https://images.unsplash.com/photo-1722291731448-3afe029611a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb3VudGFpbiUyMGdvcmlsbGElMjByd2FuZGF8ZW58MXx8fHwxNzc0NzI5MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Rwanda offers one of the world's most extraordinary wildlife experiences: mountain gorilla trekking in Volcanoes National Park. Beyond gorillas, discover vibrant culture, pristine landscapes, and warm hospitality in Africa's cleanest and safest nation.",
      highlights: [
        "Mountain gorilla trekking in Volcanoes National Park",
        "Chimpanzee tracking in Nyungwe Forest",
        "Game drives in Akagera National Park",
        "Kigali city tours and genocide memorial",
        "Lake Kivu relaxation and water activities",
        "Cultural village experiences",
      ],
      bestTime: "June to September, December to February",
    },
    tanzania: {
      name: "Tanzania",
      tagline: "The Serengeti Experience",
      heroImage: "https://images.unsplash.com/photo-1500549158481-49dcc08a37ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0YW56YW5pYSUyMHNlcmVuZ2V0aSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzQ3MjkyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Home to the legendary Serengeti, the magnificent Ngorongoro Crater, and Africa's highest peak Mount Kilimanjaro, Tanzania delivers the classic African safari experience with unparalleled wildlife viewing and dramatic landscapes.",
      highlights: [
        "Witness the Great Migration in Serengeti",
        "Explore Ngorongoro Crater's unique ecosystem",
        "Visit Tarangire's elephant herds",
        "Climb Mount Kilimanjaro",
        "Relax on Zanzibar's beaches",
        "Cultural experiences with Maasai communities",
      ],
      bestTime: "June to October for the migration, January to February for calving season",
    },
    kenya: {
      name: "Kenya",
      tagline: "The Classic Safari",
      heroImage: "https://images.unsplash.com/photo-1704494766450-23bdda6676e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMG1hc2FpJTIwbWFyYSUyMHNhZmFyaXxlbnwxfHx8fDE3NzQ3MjkyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Kenya is the birthplace of the safari, offering world-class wildlife viewing in the Masai Mara, diverse ecosystems from savannas to coastal beaches, and rich cultural traditions that bring the African experience to life.",
      highlights: [
        "Masai Mara game drives and Big Five viewing",
        "Visit Amboseli with views of Kilimanjaro",
        "Explore Lake Nakuru's flamingos",
        "Samburu's unique wildlife species",
        "Coastal relaxation in Mombasa or Diani Beach",
        "Maasai cultural interactions",
      ],
      bestTime: "July to October for the Great Migration, January to February for calving",
    },
    uganda: {
      name: "Uganda",
      tagline: "The Pearl of Africa",
      heroImage: "https://images.unsplash.com/photo-1659132814891-ef346422b339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhZnJpY2FuJTIwc2FmYXJpJTIwd2lsZGxpZmUlMjBlbGVwaGFudHN8ZW58MXx8fHwxNzc0NzI5MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Uganda offers incredible primate encounters with mountain gorillas and chimpanzees, stunning natural beauty including the source of the Nile, and diverse wildlife in less crowded parks, making it perfect for adventurous travelers.",
      highlights: [
        "Mountain gorilla trekking in Bwindi Impenetrable Forest",
        "Chimpanzee tracking in Kibale Forest",
        "Game drives in Queen Elizabeth National Park",
        "White water rafting on the Nile",
        "Murchison Falls boat safaris",
        "Bird watching in diverse ecosystems",
      ],
      bestTime: "June to September, December to February",
    },
    zanzibar: {
      name: "Zanzibar",
      tagline: "Tropical Paradise",
      heroImage: "https://images.unsplash.com/photo-1646667640485-f21def63ed50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx6YW56aWJhciUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzc0NzI5MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "The perfect complement to any safari, Zanzibar offers pristine beaches, turquoise waters, historic Stone Town, and rich Swahili culture. It's the ideal place to relax and unwind after days of adventure on the mainland.",
      highlights: [
        "Pristine beaches and crystal-clear waters",
        "Historic Stone Town UNESCO site",
        "Spice plantation tours",
        "Snorkeling and diving in coral reefs",
        "Swimming with dolphins",
        "Sunset dhow cruises",
      ],
      bestTime: "June to October, January to February",
    },
  };

  const destination = country ? destinationData[country] : null;

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
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 text-white px-4 max-w-7xl mx-auto w-full pb-12">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 mb-6 text-white/90 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Destinations
          </Link>
          <p className="text-white/90 mb-2">{destination.tagline}</p>
          <h1 className="text-5xl md:text-6xl">{destination.name}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl mb-6">About {destination.name}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {destination.description}
            </p>

            <h3 className="text-2xl mb-6">Highlights & Activities</h3>
            <ul className="space-y-4">
              {destination.highlights.map((highlight: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--ea-terracotta)]/10 flex items-center justify-center">
                    <Check size={14} className="text-[var(--ea-terracotta)]" />
                  </div>
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-secondary p-8 sticky top-32">
              <h3 className="text-xl mb-4">Best Time to Visit</h3>
              <p className="text-muted-foreground mb-8">{destination.bestTime}</p>

              <Link
                to="/custom-trips"
                className="block w-full text-center px-6 py-3 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors"
              >
                Plan Your Trip
              </Link>
              <Link
                to="/packages"
                className="block w-full text-center px-6 py-3 mt-3 border border-border hover:bg-muted transition-colors"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
