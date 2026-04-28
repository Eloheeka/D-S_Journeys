import { Link } from "react-router";
import { ArrowRight, Backpack, FileText, Heart, ShieldCheck, Thermometer } from "lucide-react";
import travelHero from "../../assets/images/travel.jpg";
import { Reveal, StaggerGroup, StaggerItem } from "../components/animations";

const visaInfo = [
  {
    country: "Rwanda",
    details:
      "Most nationalities receive a visa on arrival or can apply online via the Rwanda e-visa portal. US, UK, and EU citizens can enter visa-free for up to 30 days. The East Africa Tourist Visa ($100) covers Rwanda, Kenya, and Uganda for 90 days.",
  },
  {
    country: "Uganda",
    details:
      "An e-visa is required for most nationalities. Apply at least two weeks before travel at the Uganda e-visa portal. The East Africa Tourist Visa also covers Uganda.",
  },
  {
    country: "Kenya",
    details:
      "Kenya uses an Electronic Travel Authorization (ETA) system. Apply online before departure — processing takes 1–3 business days. The East Africa Tourist Visa is also valid here.",
  },
  {
    country: "Tanzania",
    details:
      "An e-visa is available online and strongly recommended before arrival. Processing typically takes 5–10 business days. Zanzibar is part of Tanzania and uses the same visa.",
  },
  {
    country: "Zanzibar",
    details:
      "Zanzibar is a semi-autonomous region of Tanzania. Your Tanzania visa covers entry. No separate visa is required.",
  },
];

const gorillaPacking = [
  { category: "Clothing", items: ["Long-sleeved shirt (neutral colors: khaki, green, grey)", "Long trousers — no shorts", "Waterproof jacket or poncho", "Sturdy ankle-supporting hiking boots", "Gaiters to protect against nettles and mud", "Thin gloves for gripping vegetation"] },
  { category: "Gear", items: ["Day pack (small, 20–30L)", "Trekking poles (optional but helpful)", "Reusable water bottle (2L minimum)", "Energy snacks for the trail", "Insect repellent (DEET-based)", "Sunscreen and lip balm"] },
  { category: "Camera", items: ["Camera with fast lens (no flash allowed)", "Extra batteries and memory cards", "Waterproof bag or dry sack for electronics", "Binoculars for forest birds"] },
  { category: "Health", items: ["Personal medications", "Basic first aid kit", "Hand sanitizer", "Altitude sickness tablets if trekking above 2,500m"] },
];

const climateInfo = [
  {
    region: "Rwanda & Uganda",
    summary: "Tropical highland climate with two dry seasons.",
    details:
      "The main dry season runs June to September — the best time for gorilla trekking and game drives. A shorter dry season occurs December to February. Expect cool mornings and evenings at altitude, with temperatures ranging from 15°C to 27°C. Rain can occur year-round in the forests.",
  },
  {
    region: "Kenya",
    summary: "Varied climate from coast to highlands to savannah.",
    details:
      "The best safari season is July to October (dry, Great Migration) and January to March (dry, calving season). The long rains fall April to June, short rains October to December. Nairobi sits at 1,700m and stays mild year-round (15–25°C). The coast is hot and humid.",
  },
  {
    region: "Tanzania",
    summary: "Classic safari seasons with a beach extension option.",
    details:
      "The northern circuit is best June to October and January to February. The Serengeti migration peaks July to September. Zanzibar is warm year-round (25–32°C) with the best beach weather June to October and December to February. Avoid the long rains (April–May) for safari.",
  },
  {
    region: "Zanzibar",
    summary: "Tropical island climate, warm year-round.",
    details:
      "Zanzibar is warm and humid throughout the year. The best time to visit is June to October (dry, cooler) and December to February (dry, hot). The long rains fall March to May and the short rains October to November. Sea temperatures stay around 26–29°C year-round.",
  },
];

const healthTips = [
  {
    title: "Yellow Fever",
    body: "Proof of yellow fever vaccination is required for entry to Rwanda, Uganda, Tanzania, and Kenya if you are arriving from a yellow fever endemic country. Carry your vaccination certificate.",
  },
  {
    title: "Recommended Vaccinations",
    body: "Hepatitis A and B, Typhoid, Tetanus, Meningitis, and routine vaccinations. Consult your travel health clinic at least 6–8 weeks before departure.",
  },
  {
    title: "Malaria",
    body: "Malaria prophylaxis is recommended for most areas. Rwanda's high-altitude regions (including Kigali) have lower risk. Discuss options — Malarone, Doxycycline, or Lariam — with your doctor. Use DEET repellent and sleep under a net.",
  },
  {
    title: "Gorilla Trekking Health Rules",
    body: "You must be in good health to trek. Anyone with a cold, flu, or respiratory illness will be asked to stay behind — gorillas are highly susceptible to human diseases. A minimum age of 15 applies.",
  },
  {
    title: "Travel Insurance",
    body: "Comprehensive travel insurance is essential. Ensure your policy covers medical evacuation, trip cancellation, and adventure activities including gorilla trekking and safari game drives.",
  },
  {
    title: "Food and Water",
    body: "Drink bottled or purified water throughout your trip. Avoid ice in drinks outside of reputable hotels. Cooked food from established restaurants is generally safe. Wash hands frequently.",
  },
  {
    title: "Sun and Heat",
    body: "The equatorial sun is intense even on overcast days. Use SPF 50+ sunscreen, wear a hat, and stay hydrated during game drives and treks. Heat exhaustion is a real risk on long safari days.",
  },
  {
    title: "Safety in Cities",
    body: "Kigali, Nairobi, Kampala, and Arusha are generally safe for tourists. Stay aware in busy markets, avoid displaying expensive items, and use reputable transport. Follow your guide's advice at all times.",
  },
];

export function TravelGuide() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[52vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${travelHero})` }} />
        <div className="absolute inset-0 bg-black/45" />
        <Reveal className="relative z-10 text-center text-white px-4">
          <p className="uppercase tracking-[0.3em] text-sm text-white/75 mb-4">Before You Go</p>
          <h1 className="text-5xl md:text-6xl mb-4">Travel Tips &amp; Info</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Everything you need to know to prepare for your East African journey — visas, packing, climate, and health.
          </p>
        </Reveal>
      </section>

      {/* Quick nav */}
      <Reveal className="py-10 px-4 bg-secondary/60 border-b border-border">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {[
            { label: "Visa & Passport", href: "#visas" },
            { label: "Gorilla Trekking Packing", href: "#packing" },
            { label: "Climate", href: "#climate" },
            { label: "Health & Safety", href: "#health" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="interactive-button px-5 py-2.5 rounded-full border border-border bg-background hover:bg-secondary transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      </Reveal>

      <div className="py-20 px-4 max-w-5xl mx-auto space-y-24">

        {/* Visa & Passport */}
        <section id="visas">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[var(--ea-terracotta)]/10 text-[var(--ea-terracotta)] rounded-full flex items-center justify-center flex-shrink-0">
                <FileText size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-0.5">Section 01</p>
                <h2 className="text-3xl">Visa &amp; Passport Requirements</h2>
              </div>
            </div>
            <div className="rounded-3xl bg-secondary/50 p-6 mb-6">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Passport validity:</strong> Your passport must be valid for at least 6 months beyond your intended departure date and have at least 2 blank pages for stamps.
              </p>
            </div>
          </Reveal>
          <StaggerGroup className="space-y-4">
            {visaInfo.map((v) => (
              <StaggerItem key={v.country} className="interactive-card rounded-2xl border border-border bg-card p-6">
                <h3 className="text-xl mb-2">{v.country}</h3>
                <p className="text-muted-foreground">{v.details}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        {/* Gorilla Trekking Packing */}
        <section id="packing">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[var(--ea-sage)]/10 text-[var(--ea-sage)] rounded-full flex items-center justify-center flex-shrink-0">
                <Backpack size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-0.5">Section 02</p>
                <h2 className="text-3xl">Gorilla Trekking Packing List</h2>
              </div>
            </div>
            <p className="text-muted-foreground mb-8 text-lg">
              Gorilla trekking takes place in dense mountain forest, often in wet and muddy conditions. The right gear makes a significant difference to your comfort and safety on the trail.
            </p>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gorillaPacking.map((section) => (
              <StaggerItem key={section.category} className="interactive-card rounded-2xl border border-border bg-card p-6">
                <h3 className="text-xl mb-4">{section.category}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-muted-foreground text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--ea-sage)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-6">
            <div className="rounded-2xl bg-[var(--ea-golden)]/10 border border-[var(--ea-golden)]/20 p-5">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Tip:</strong> Most lodges near gorilla parks offer porter services. Hiring a local porter is highly recommended — they carry your bag, help you through difficult terrain, and the fee directly supports the local community.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Climate */}
        <section id="climate">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Thermometer size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-0.5">Section 03</p>
                <h2 className="text-3xl">Climate Information</h2>
              </div>
            </div>
          </Reveal>
          <StaggerGroup className="space-y-6">
            {climateInfo.map((region) => (
              <StaggerItem key={region.region} className="interactive-card rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl mb-1">{region.region}</h3>
                    <p className="text-sm text-[var(--ea-terracotta)] mb-3">{region.summary}</p>
                    <p className="text-muted-foreground">{region.details}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        {/* Health & Safety */}
        <section id="health">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[var(--ea-terracotta)]/10 text-[var(--ea-terracotta)] rounded-full flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-0.5">Section 04</p>
                <h2 className="text-3xl">Health &amp; Safety Tips</h2>
              </div>
            </div>
            <p className="text-muted-foreground mb-8 text-lg">
              East Africa is a safe and welcoming region for travelers. A little preparation goes a long way toward a smooth, healthy trip.
            </p>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {healthTips.map((tip) => (
              <StaggerItem key={tip.title} className="interactive-card rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-3">
                  <Heart size={16} className="mt-1 text-[var(--ea-terracotta)] flex-shrink-0" />
                  <div>
                    <h3 className="text-lg mb-2">{tip.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{tip.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      </div>

      {/* CTA */}
      <Reveal className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Have More Questions?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our team is happy to help you prepare for your trip — from visa advice to packing recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="interactive-button inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--ea-terracotta)] text-white hover:bg-[var(--ea-terracotta)]/90 transition-colors"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
            <Link
              to="/custom-trips"
              className="interactive-button inline-flex items-center justify-center gap-2 px-8 py-4 border border-border hover:bg-background transition-colors"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
