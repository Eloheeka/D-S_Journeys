import { Link } from "react-router";
import { Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Packages() {
  const packages = [
    {
      id: 1,
      name: "Gorilla Encounter",
      duration: "7 Days",
      countries: "Rwanda",
      groupSize: "2-6 people",
      price: "$4,500",
      image: "https://images.unsplash.com/photo-1722293094576-424bd9b4aef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb3VudGFpbiUyMGdvcmlsbGElMjByd2FuZGF8ZW58MXx8fHwxNzc0NzI5MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "An intimate journey through Rwanda's stunning landscapes with mountain gorilla trekking in Volcanoes National Park",
      itinerary: [
        "Day 1-2: Kigali city tour and transfer to Volcanoes National Park",
        "Day 3-4: Mountain gorilla trekking and golden monkey tracking",
        "Day 5-6: Cultural village visits and Lake Kivu relaxation",
        "Day 7: Return to Kigali for departure",
      ],
    },
    {
      id: 2,
      name: "Classic East Africa",
      duration: "10 Days",
      countries: "Kenya & Tanzania",
      groupSize: "4-8 people",
      price: "$5,800",
      image: "https://images.unsplash.com/photo-1739097108468-9364ea62383d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx0YW56YW5pYSUyMHNlcmVuZ2V0aSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzQ3MjkyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Experience the best of Kenya and Tanzania with game drives through world-famous parks and witnessing the Great Migration",
      itinerary: [
        "Day 1-2: Arrive Nairobi, transfer to Masai Mara",
        "Day 3-4: Full days in Masai Mara with game drives",
        "Day 5-6: Serengeti National Park safari",
        "Day 7-8: Ngorongoro Crater exploration",
        "Day 9-10: Tarangire National Park and return to Arusha",
      ],
    },
    {
      id: 3,
      name: "Safari & Beach Paradise",
      duration: "14 Days",
      countries: "Tanzania & Zanzibar",
      groupSize: "2-6 people",
      price: "$7,200",
      image: "https://images.unsplash.com/photo-1646667642307-e2bf4541284e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6YW56aWJhciUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzc0NzI5MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "The ultimate combination of thrilling safari adventures in Tanzania followed by pure relaxation on Zanzibar's pristine beaches",
      itinerary: [
        "Day 1-3: Serengeti National Park game drives",
        "Day 4-5: Ngorongoro Crater and cultural experiences",
        "Day 6-7: Tarangire and Lake Manyara National Parks",
        "Day 8: Fly to Zanzibar",
        "Day 9-13: Beach relaxation, spice tours, Stone Town, water activities",
        "Day 14: Departure from Zanzibar",
      ],
    },
    {
      id: 4,
      name: "Primate Adventure",
      duration: "10 Days",
      countries: "Rwanda & Uganda",
      groupSize: "2-6 people",
      price: "$6,200",
      image: "https://images.unsplash.com/photo-1667504319000-8133f9021cf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGdvcmlsbGElMjByd2FuZGF8ZW58MXx8fHwxNzc0NzI5MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Track mountain gorillas in Rwanda and chimpanzees in Uganda, combined with stunning landscapes and cultural encounters",
      itinerary: [
        "Day 1-2: Kigali and transfer to Volcanoes National Park",
        "Day 3-4: Gorilla trekking in Rwanda",
        "Day 5: Cross border to Uganda, Bwindi Forest",
        "Day 6-7: Gorilla trekking in Uganda",
        "Day 8-9: Chimpanzee tracking in Kibale Forest",
        "Day 10: Return to Kigali via scenic route",
      ],
    },
    {
      id: 5,
      name: "Grand East Africa",
      duration: "14 Days",
      countries: "Kenya, Tanzania, Rwanda",
      groupSize: "4-8 people",
      price: "$8,900",
      image: "https://images.unsplash.com/photo-1617198920209-220e1e8a652e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2FmYXJpJTIwd2lsZGxpZmUlMjBlbGVwaGFudHN8ZW58MXx8fHwxNzc0NzI5MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "The ultimate East African experience combining the best wildlife viewing with gorilla trekking across three incredible countries",
      itinerary: [
        "Day 1-3: Masai Mara, Kenya",
        "Day 4-6: Serengeti and Ngorongoro, Tanzania",
        "Day 7-8: Fly to Kigali, city tour",
        "Day 9-11: Volcanoes National Park gorilla trekking",
        "Day 12-13: Lake Kivu relaxation",
        "Day 14: Departure from Kigali",
      ],
    },
    {
      id: 6,
      name: "Coastal & Culture",
      duration: "7 Days",
      countries: "Zanzibar",
      groupSize: "2-10 people",
      price: "$2,800",
      image: "https://images.unsplash.com/photo-1646667844634-1eac4e8f5b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx6YW56aWJhciUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzc0NzI5MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Immerse yourself in Swahili culture and unwind on some of Africa's most beautiful beaches in this tropical paradise",
      itinerary: [
        "Day 1-2: Stone Town exploration and spice plantation tours",
        "Day 3-5: North coast beach relaxation and water activities",
        "Day 6: Dhow cruise and snorkeling at Mnemba Atoll",
        "Day 7: Departure",
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--ea-sage)]" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4">Safari Packages</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Curated itineraries designed for unforgettable experiences
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            All packages are customizable to suit your preferences, schedule, and budget.
            Starting prices shown are per person based on double occupancy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>

                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[var(--ea-terracotta)]" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[var(--ea-terracotta)]" />
                    <span>{pkg.countries}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-[var(--ea-terracotta)]" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Sample Itinerary:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {pkg.itinerary.slice(0, 3).map((day, index) => (
                      <li key={index} className="text-xs">
                        {day}
                      </li>
                    ))}
                    {pkg.itinerary.length > 3 && (
                      <li className="text-xs italic">+ more...</li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="text-2xl text-[var(--ea-terracotta)]">{pkg.price}</p>
                  </div>
                  <Link
                    to="/custom-trips"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors text-sm"
                  >
                    Inquire
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Don't See What You're Looking For?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Every traveler is unique. Let us create a completely custom itinerary tailored
            to your dreams, interests, and schedule.
          </p>
          <Link
            to="/custom-trips"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors"
          >
            Create Custom Trip
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
