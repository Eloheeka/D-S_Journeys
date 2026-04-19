import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            We're here to answer your questions and help plan your adventure
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--ea-terracotta)]/10 text-[var(--ea-terracotta)] mb-4 rounded-full">
              <Mail size={28} />
            </div>
            <h3 className="text-xl mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-2">Send us a message anytime</p>
            <a
              href="mailto:info@rwandacurated.com"
              className="text-[var(--ea-terracotta)] hover:underline"
            >
              info@D&S Journeys.com
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--ea-sage)]/10 text-[var(--ea-sage)] mb-4 rounded-full">
              <Phone size={28} />
            </div>
            <h3 className="text-xl mb-2">Call Us</h3>
            <p className="text-muted-foreground mb-2">Mon-Fri 9am-6pm EAT</p>
            <a
              href="tel:+250788123456"
              className="text-[var(--ea-terracotta)] hover:underline"
            >
              +250 788 123 456
            </a>
            <br />
            <a
              href="tel:+15551234567"
              className="text-[var(--ea-terracotta)] hover:underline"
            >
              +1 (555) 123-4567
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--ea-golden)]/20 text-[var(--ea-golden)] mb-4 rounded-full">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl mb-2">Visit Us</h3>
            <p className="text-muted-foreground">
              KG 123 Street
              <br />
              Kigali, Rwanda
              <br />
              East Africa
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-3">When is the best time to visit East Africa?</h3>
              <p className="text-muted-foreground">
                The best time depends on your destination and what you want to see. Generally,
                June to October is ideal for wildlife viewing in Kenya and Tanzania during the
                Great Migration. For gorilla trekking in Rwanda and Uganda, June to September
                and December to February offer drier conditions. We can help you choose the
                perfect time for your specific interests.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3">How far in advance should I book?</h3>
              <p className="text-muted-foreground">
                We recommend booking at least 6-9 months in advance, especially for gorilla
                trekking permits which are limited and in high demand. However, we can
                sometimes accommodate shorter notice bookings depending on availability.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3">Do I need vaccinations or special medications?</h3>
              <p className="text-muted-foreground">
                Yes, certain vaccinations are recommended or required for East Africa travel.
                We provide detailed health information once you book, but we always recommend
                consulting with a travel medicine specialist at least 8 weeks before your trip.
                Malaria prophylaxis is recommended for most areas.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3">What's included in your packages?</h3>
              <p className="text-muted-foreground">
                Our packages typically include accommodations, meals as specified, park fees,
                game drives, airport transfers, and an expert guide. International flights are
                usually not included but we can help arrange them. Each package details
                exactly what's included, and we're happy to customize based on your needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3">Is it safe to travel to East Africa?</h3>
              <p className="text-muted-foreground">
                Yes, the destinations we operate in are generally very safe for tourists.
                Rwanda, in particular, is one of the safest countries in Africa. We work with
                experienced local guides, stay in secure accommodations, and provide 24/7
                support throughout your journey.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3">Can you accommodate special dietary requirements?</h3>
              <p className="text-muted-foreground">
                Absolutely! We work with lodges and restaurants that can accommodate various
                dietary needs including vegetarian, vegan, gluten-free, and other restrictions.
                Just let us know your requirements when booking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
