import { FileText, CreditCard, Shield, Plane, Camera, Heart } from "lucide-react";
import travelHero from "../../assets/images/travel.jpg";

export function TravelGuide() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${travelHero})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4">Travel Guide</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Everything you need to know before your East African adventure
          </p>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="space-y-16">
          {/* Visa & Documentation */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--ea-terracotta)]/10 text-[var(--ea-terracotta)] rounded-full flex items-center justify-center">
                <FileText size={24} />
              </div>
              <h2 className="text-3xl">Visa & Documentation</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Rwanda:</strong> Most nationalities can
                obtain a visa on arrival or apply online in advance. US citizens can enter
                visa-free for up to 90 days.
              </p>
              <p>
                <strong className="text-foreground">Tanzania & Kenya:</strong> E-visas are
                available online and recommended to obtain before arrival. Processing usually
                takes 5-10 business days.
              </p>
              <p>
                <strong className="text-foreground">Uganda:</strong> E-visa required for most
                nationalities. Apply at least 2 weeks before travel.
              </p>
              <p>
                <strong className="text-foreground">East Africa Tourist Visa:</strong> If
                visiting multiple countries, consider the East Africa Tourist Visa ($100),
                which covers Rwanda, Kenya, and Uganda for 90 days.
              </p>
              <p>
                <strong className="text-foreground">Passport:</strong> Must be valid for at
                least 6 months beyond your intended departure date with at least 2 blank pages.
              </p>
            </div>
          </div>

          {/* Health & Vaccinations */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--ea-sage)]/10 text-[var(--ea-sage)] rounded-full flex items-center justify-center">
                <Heart size={24} />
              </div>
              <h2 className="text-3xl">Health & Vaccinations</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Yellow Fever:</strong> Proof of
                vaccination is required for entry to Rwanda, Uganda, Tanzania, and Kenya if
                arriving from a yellow fever endemic country.
              </p>
              <p>
                <strong className="text-foreground">Recommended Vaccinations:</strong> Hepatitis
                A & B, Typhoid, Tetanus, and routine vaccinations. Consult your doctor at least
                8 weeks before travel.
              </p>
              <p>
                <strong className="text-foreground">Malaria:</strong> Prophylaxis is
                recommended for most areas. Rwanda and high-altitude regions have lower risk.
                Discuss options with your healthcare provider.
              </p>
              <p>
                <strong className="text-foreground">Travel Insurance:</strong> Highly
                recommended to cover medical emergencies, evacuation, and trip cancellation.
              </p>
            </div>
          </div>

          {/* Money & Costs */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--ea-golden)]/20 text-[var(--ea-golden)] rounded-full flex items-center justify-center">
                <CreditCard size={24} />
              </div>
              <h2 className="text-3xl">Money & Costs</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Currency:</strong> Rwandan Franc (RWF),
                Tanzanian Shilling (TZS), Kenyan Shilling (KES), Ugandan Shilling (UGX). US
                dollars are widely accepted for safaris and lodges.
              </p>
              <p>
                <strong className="text-foreground">ATMs:</strong> Available in major cities
                and towns. Carry some cash for rural areas.
              </p>
              <p>
                <strong className="text-foreground">Credit Cards:</strong> Major cards accepted
                at hotels and restaurants in cities. Cash is preferred in rural areas.
              </p>
              <p>
                <strong className="text-foreground">Tipping:</strong> Guides: $10-20 per day
                per person. Porters: $5-10. Lodge staff: $5-10 per day. Restaurant servers:
                10% if not included.
              </p>
            </div>
          </div>

          {/* What to Pack */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--ea-terracotta)]/10 text-[var(--ea-terracotta)] rounded-full flex items-center justify-center">
                <Plane size={24} />
              </div>
              <h2 className="text-3xl">What to Pack</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <strong className="text-foreground">Clothing:</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Neutral colors (khaki, green, brown) for game drives</li>
                  <li>Light, breathable layers for warm days</li>
                  <li>Warm jacket for early morning drives and high altitudes</li>
                  <li>Long pants and long-sleeved shirts for sun and insect protection</li>
                  <li>Comfortable walking shoes and sandals</li>
                  <li>Hat, sunglasses, and sunscreen</li>
                </ul>
              </div>
              <div>
                <strong className="text-foreground">Essentials:</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Binoculars for wildlife viewing</li>
                  <li>Camera with zoom lens and extra batteries</li>
                  <li>Insect repellent (DEET-based)</li>
                  <li>Basic first aid kit and medications</li>
                  <li>Reusable water bottle</li>
                  <li>Power adapter (Type C & G plugs)</li>
                  <li>Headlamp or flashlight</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Photography Tips */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--ea-sage)]/10 text-[var(--ea-sage)] rounded-full flex items-center justify-center">
                <Camera size={24} />
              </div>
              <h2 className="text-3xl">Photography Tips</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Equipment:</strong> Bring a telephoto lens
                (at least 200mm, ideally 300-400mm) for wildlife. A wide-angle lens is great
                for landscapes. Extra memory cards and batteries are essential.
              </p>
              <p>
                <strong className="text-foreground">Best Light:</strong> Early morning and late
                afternoon provide the best light for photography. The golden hour before sunset
                is magical.
              </p>
              <p>
                <strong className="text-foreground">Gorilla Trekking:</strong> No flash
                photography allowed. Keep your distance (7 meters minimum). Use high ISO and
                fast shutter speeds in low light forests.
              </p>
              <p>
                <strong className="text-foreground">Respect:</strong> Always ask permission
                before photographing people, especially in villages. Some sites may charge a
                photo fee.
              </p>
            </div>
          </div>

          {/* Safety & Etiquette */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--ea-golden)]/20 text-[var(--ea-golden)] rounded-full flex items-center justify-center">
                <Shield size={24} />
              </div>
              <h2 className="text-3xl">Safety & Etiquette</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Safety:</strong> East Africa is generally
                safe for tourists. Stay aware of your surroundings in cities, avoid displaying
                expensive items, and follow your guide's instructions during wildlife
                encounters.
              </p>
              <p>
                <strong className="text-foreground">Wildlife:</strong> Never exit your vehicle
                during game drives unless instructed. Keep a safe distance from all animals.
                Never feed wildlife.
              </p>
              <p>
                <strong className="text-foreground">Cultural Respect:</strong> Dress modestly,
                especially in rural areas and Muslim regions like Zanzibar. Learn a few words
                in Swahili—locals appreciate the effort.
              </p>
              <p>
                <strong className="text-foreground">Environment:</strong> Practice
                leave-no-trace principles. Use biodegradable products. Avoid single-use
                plastics (banned in Rwanda and Kenya).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Have More Questions?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our team is here to help you prepare for your East African adventure
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
