import { Link } from "react-router";
import { Heart, Shield, Users, Globe } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1701303641107-c77e4526d3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhZnJpY2FuJTIwc2FmYXJpJTIwd2lsZGxpZmUlMjBlbGVwaGFudHN8ZW58MXx8fHwxNzc0NzI5MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Dasam Journeys"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4">About Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Creating unforgettable East African safari experiences since 2015
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              D&S Journeys was born from a passion for East Africa's incredible wildlife,
              stunning landscapes, and rich cultures. Founded in 2015, we started with a
              simple mission: to share the magic of this remarkable region with travelers
              from around the world.
            </p>
            <p>
              What sets us apart is our deep connection to the communities we serve. As a
              locally-rooted company based in Nairobi, Kenya, we work directly with expert
              guides, conservation projects, and sustainable lodges across East Africa. We
              believe that authentic travel experiences come from genuine relationships and
              local knowledge.
            </p>
            <p>
              Today, we're proud to have helped thousands of travelers discover the wonders
              of Rwanda, Tanzania, Kenya, Uganda, and Zanzibar. Each journey we curate is
              designed not just to showcase wildlife and landscapes, but to create meaningful
              connections between our guests and the incredible people and places of East
              Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--ea-terracotta)]/10 text-[var(--ea-terracotta)] mb-4 rounded-full">
                <Heart size={28} />
              </div>
              <h3 className="text-xl mb-3">Passion</h3>
              <p className="text-muted-foreground">
                We love what we do and it shows in every detail of your journey
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--ea-sage)]/20 text-[var(--ea-forest)] mb-4 rounded-full">
                <Shield size={28} />
              </div>
              <h3 className="text-xl mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                Protecting wildlife and supporting local communities is at our core
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--ea-golden)]/20 text-[var(--ea-earth)] mb-4 rounded-full">
                <Users size={28} />
              </div>
              <h3 className="text-xl mb-3">Personalization</h3>
              <p className="text-muted-foreground">
                Every traveler is unique, and your safari should reflect that
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--ea-sunset)]/10 text-[var(--ea-sunset)] mb-4 rounded-full">
                <Globe size={28} />
              </div>
              <h3 className="text-xl mb-3">Expertise</h3>
              <p className="text-muted-foreground">
                Local knowledge and decades of combined experience in East Africa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Why Choose Dasam Journeys</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-4">Locally Owned & Operated</h3>
            <p className="text-muted-foreground">
              As an East African company, we have deep roots in the region. Our team lives and
              works across East Africa, giving us unparalleled local knowledge and connections.
              When you travel with us, you're directly supporting local businesses and
              communities.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-4">Expert Guides</h3>
            <p className="text-muted-foreground">
              Our guides aren't just knowledgeable—they're passionate storytellers who bring
              East Africa to life. Many have been with us for years and are experts in
              wildlife, birding, photography, and cultural interpretation.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-4">Small Group Sizes</h3>
            <p className="text-muted-foreground">
              We believe in intimate, personalized experiences. Our small group sizes ensure
              you get the attention you deserve and have the flexibility to follow your
              interests, whether that's photography, birding, or simply soaking in the views.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-4">Responsible Tourism</h3>
            <p className="text-muted-foreground">
              We're committed to sustainable practices that benefit both wildlife and people.
              We partner with eco-lodges, support conservation initiatives, and ensure our
              presence contributes positively to the places we visit.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-4">24/7 Support</h3>
            <p className="text-muted-foreground">
              From your first inquiry to your return home, we're here for you. Our team
              provides round-the-clock support to ensure every aspect of your journey goes
              smoothly.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-4">Flexible & Customizable</h3>
            <p className="text-muted-foreground">
              While we offer curated packages, we understand that every traveler is different.
              We're happy to customize any itinerary to match your pace, interests, and budget.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Ready to Explore East Africa?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Let us share our home with you and create memories that will last a lifetime
          </p>
          <Link
            to="/custom-trips"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary hover:bg-white/90 transition-colors"
          >
            Start Planning Your Safari
          </Link>
        </div>
      </section>
    </div>
  );
}
