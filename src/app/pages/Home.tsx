import { Link } from "react-router";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const destinations = [
    {
      country: "Rwanda",
      slug: "rwanda",
      description: "Mountain gorillas, vibrant culture, and the land of a thousand hills",
      image: "https://images.unsplash.com/photo-1722291731448-3afe029611a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb3VudGFpbiUyMGdvcmlsbGElMjByd2FuZGF8ZW58MXx8fHwxNzc0NzI5MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      country: "Tanzania",
      slug: "tanzania",
      description: "Serengeti plains, Mount Kilimanjaro, and the Great Migration",
      image: "https://images.unsplash.com/photo-1716297468621-c6e6c34fa2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW56YW5pYSUyMHNlcmVuZ2V0aSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzQ3MjkyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      country: "Kenya",
      slug: "kenya",
      description: "Masai Mara wildlife, diverse ecosystems, and rich traditions",
      image: "https://images.unsplash.com/photo-1704494766450-23bdda6676e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMG1hc2FpJTIwbWFyYSUyMHNhZmFyaXxlbnwxfHx8fDE3NzQ3MjkyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      country: "Zanzibar",
      slug: "zanzibar",
      description: "Pristine beaches, turquoise waters, and Swahili culture",
      image: "https://images.unsplash.com/photo-1646667640485-f21def63ed50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx6YW56aWJhciUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzc0NzI5MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Expert Local Guides",
      description: "Experience East Africa through the eyes of knowledgeable local experts",
    },
    {
      icon: Calendar,
      title: "Flexible Itineraries",
      description: "Customize every aspect of your journey to match your interests",
    },
    {
      icon: Users,
      title: "Small Group Sizes",
      description: "Intimate experiences with personalized attention throughout your trip",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1617198920209-220e1e8a652e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2FmYXJpJTIwd2lsZGxpZmUlMjBlbGVwaGFudHN8ZW58MXx8fHwxNzc0NzI5MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="African safari elephants"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
            Discover East Africa
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto font-light">
            Curated safari experiences across Rwanda, Tanzania, Kenya, Uganda, and Zanzibar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Explore Safaris
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/custom-trips"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground hover:bg-white/90 transition-colors"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Destinations</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the diverse landscapes and wildlife of East Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              to={`/destinations/${dest.slug}`}
              className="group relative overflow-hidden bg-card aspect-[3/4] block"
            >
              <ImageWithFallback
                src={dest.image}
                alt={dest.country}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl mb-2">{dest.country}</h3>
                <p className="text-white/80 text-sm">{dest.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Why D&S Journeys</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We create unforgettable experiences tailored to your dreams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary mb-6 rounded-full">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Let us create a personalized safari experience that exceeds your expectations
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Get in Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
