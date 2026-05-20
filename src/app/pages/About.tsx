import { Link } from "react-router";
import { ArrowRight, BedDouble, Compass, Gem, Heart, MapPinned, Shield, Sparkles, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Reveal, StaggerGroup, StaggerItem } from "../components/animations";
import aboutHero from "../../assets/images/travel.jpg";
import lodgeImage from "../../assets/images/sunset.jpg";
import gorillaImage from "../../assets/images/rwanda.jpg";

const stats = [
  ["2026", "Founded with a luxury East Africa focus"],
  ["6+", "Full-time travel experts across the region"],
  ["5", "Key hubs: Kigali, Kampala, Nairobi, Dar es Salaam, and safari destinations"],
];

const storySections = [
  {
    title: "Curated Around East Africa's Icons",
    text: "At DS Tours Africa, we specialize in curated luxury journeys across East Africa, offering unforgettable experiences including gorilla trekking in Rwanda and Uganda, luxury safaris in the Masai Mara and Serengeti, Zanzibar beach escapes, cultural experiences, and private multi-country adventures across the region's most iconic destinations.",
  },
  {
    title: "Built For Personal, Managed Travel",
    text: "Founded in 2026, DS Tours Africa was created with a vision to provide personalized, professionally managed, and immersive travel experiences for international travelers seeking authentic and memorable journeys through East Africa.",
  },
  {
    title: "Powered By A Regional Network",
    text: "Our team works alongside more than 6 full-time travel experts strategically based across Kigali, Kampala, Nairobi, Dar es Salaam, and key safari destinations throughout East Africa. Through our strong regional presence and trusted local partnerships, we coordinate seamless travel experiences, reliable transportation, premium accommodations, and personalized services for our clients.",
  },
];

const values = [
  {
    icon: MapPinned,
    title: "Regional Expertise",
    text: "Travel experts connected across Kigali, Kampala, Nairobi, Dar es Salaam, Arusha, and Zanzibar.",
  },
  {
    icon: Gem,
    title: "Curated Luxury Travel",
    text: "Lodges, guides, vehicles, and experiences selected for atmosphere, care, and reliability.",
  },
  {
    icon: Users,
    title: "50+ Friendly Pacing",
    text: "Thoughtful routing, rest days, private transfers, and realistic activity timing for older luxury travelers.",
  },
  {
    icon: Heart,
    title: "Romantic Milestones",
    text: "Honeymoon, anniversary, and proposal experiences designed with privacy and emotion in mind.",
  },
];

const specialties = [
  "Luxury safaris",
  "Private getaways",
  "Honeymoons",
  "Fiance proposal experiences",
  "50+ friendly travel",
  "Solo adventures",
  "Family trips",
  "Customized group tours",
];

const travelMoments = [
  "Gorillas in the misty forests of Rwanda",
  "Wildlife across the Serengeti",
  "Beach escapes on Zanzibar",
  "Private multi-country East Africa itineraries",
];

const reasons = [
  ["Gorilla Trekking & Permits", "We help align permits, lodge locations, transfer timing, and recovery time so Rwanda and Uganda primate experiences feel smooth rather than stressful."],
  ["Luxury Lodges & Safari Partners", "We work with camps, lodges, beach resorts, and private guides that match the level of service expected by luxury travelers."],
  ["Honeymoon & Proposal Experiences", "From secluded bush dinners to Zanzibar beach finishes, we build privacy, timing, and surprise into romantic itineraries."],
  ["Tailor-Made Support", "No two travelers move the same way. We adjust pace, vehicle style, rooms, accessibility needs, family requirements, and special interests."],
  ["East African Routing", "Multi-country trips require timing discipline. We coordinate routes across Kigali, Kampala, Nairobi, Dar es Salaam, Arusha, and Zanzibar."],
  ["Responsible Travel", "We favor experiences and partners that respect wildlife, communities, conservation rules, and local livelihoods."],
];

export function About() {
  return (
    <div className="pt-20">
      <section className="relative flex min-h-[68vh] items-end overflow-hidden">
        <ImageWithFallback src={aboutHero} alt="DS Tours Africa safari guests" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/55 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        <Reveal className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 text-white">
          <h1 className="mb-5 max-w-4xl text-5xl leading-[0.95] md:text-7xl lg:text-8xl">East Africa, curated differently.</h1>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-white/88 md:text-2xl">
            Luxury journeys shaped with local expertise, elegant planning, and unforgettable moments across the region.
          </p>
        </Reveal>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--ea-bronze)]">Our Story</p>
            <h2 className="mb-6 text-4xl leading-tight md:text-6xl">A travel company for the moments people remember.</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We believe luxury travel is not only about comfort, but also about storytelling, authenticity, and meaningful experiences. Every journey is shaped to feel seamless, elegant, and deeply memorable from beginning to end.
            </p>
          </Reveal>

          <Reveal className="relative min-h-[520px]">
            <ImageWithFallback src={lodgeImage} alt="Luxury safari sunset" className="absolute right-0 top-0 h-[66%] w-[74%] object-cover shadow-2xl" />
            <ImageWithFallback src={gorillaImage} alt="Rwanda gorilla trekking" className="absolute bottom-0 left-0 h-[54%] w-[62%] border-8 border-background object-cover shadow-2xl" />
            <div className="absolute bottom-10 right-6 max-w-xs bg-[var(--ea-night)] p-6 text-white shadow-xl">
              <BedDouble className="mb-3 text-[var(--ea-gold)]" size={24} />
              <p className="font-[var(--font-heading)] text-2xl leading-snug">
                Lodges, guides, transfers, permits, and quiet details selected before you arrive.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal className="px-4 pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 border-y border-[var(--ea-border-strong)] md:grid-cols-3">
          {stats.map(([number, label]) => (
            <div key={number} className="border-[var(--ea-border-strong)] py-8 md:border-r md:px-8 md:last:border-r-0">
              <p className="font-[var(--font-heading)] text-5xl leading-none text-[var(--ea-forest)] md:text-6xl">{number}</p>
              <p className="mt-3 max-w-xs text-sm uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="bg-[var(--ea-sand)] px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--ea-bronze)]">How We Work</p>
              <h2 className="text-4xl leading-tight md:text-6xl">Local knowledge, shaped into polished private travel.</h2>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground lg:pt-4">
              Over time, we have developed strong relationships with hotels, luxury lodges, safari operators, and travel professionals across the region, allowing us to offer carefully selected experiences tailored to different styles of travel.
            </p>
          </div>

          <StaggerGroup className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {storySections.map((section, index) => (
              <StaggerItem key={section.title} className="interactive-card border border-[var(--ea-border-strong)] bg-background p-7">
                <p className="mb-6 font-[var(--font-heading)] text-5xl leading-none text-[var(--ea-gold)]">0{index + 1}</p>
                <h3 className="mb-4 text-3xl leading-tight">{section.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{section.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Reveal>

      <Reveal className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--ea-bronze)]">What We Design</p>
              <h2 className="mb-6 text-4xl leading-tight md:text-6xl">Journeys built around comfort, safety, and unforgettable moments.</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We specialize in luxury safaris, private getaways, honeymoons, fiance proposal experiences, elderly-focused travel for guests aged 50 and above, solo adventures, family trips, and customized group tours.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {specialties.map((specialty) => (
                <div key={specialty} className="flex items-center gap-3 border border-[var(--ea-border-strong)] bg-[var(--ea-ivory)] px-5 py-4">
                  <Sparkles className="shrink-0 text-[var(--ea-bronze)]" size={18} />
                  <span className="text-sm uppercase tracking-[0.12em] text-[var(--ea-night)]">{specialty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="bg-[var(--ea-night)] px-4 py-20 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <Compass className="mb-6 text-[var(--ea-gold)]" size={34} />
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--ea-gold)]">Our Travel Philosophy</p>
            <h2 className="text-4xl leading-tight md:text-6xl">Luxury with a story, not just a schedule.</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {travelMoments.map((moment) => (
              <div key={moment} className="border border-white/15 p-6">
                <p className="font-[var(--font-heading)] text-2xl leading-snug">{moment}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="bg-[var(--ea-sand)] px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--ea-bronze)]">What We Stand For</p>
            <h2 className="text-4xl leading-tight md:text-6xl">Premium travel with practical intelligence behind it.</h2>
          </div>
          <StaggerGroup className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title} className="interactive-card border border-[var(--ea-border-strong)] bg-background p-6">
                <value.icon className="mb-5 text-[var(--ea-bronze)]" size={30} />
                <h3 className="mb-3 text-2xl leading-snug">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Reveal>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--ea-bronze)]">Why Travelers Choose Us</p>
            <h2 className="text-4xl leading-tight md:text-6xl">The confidence of a real local network.</h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {reasons.map(([title, text]) => (
              <Reveal key={title} className="border-t border-[var(--ea-border-strong)] pt-6">
                <Shield className="mb-4 text-[var(--ea-forest)]" size={24} />
                <h3 className="mb-3 text-3xl leading-tight">{title}</h3>
                <p className="leading-relaxed text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal className="bg-[var(--ea-night)] px-4 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--ea-gold)]">Welcome to East Africa - curated differently.</p>
          <h2 className="mb-6 text-4xl leading-tight md:text-6xl">Let us design the East Africa journey you have been imagining.</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/75">
            Tell us your destination dreams, travel dates, celebration plans, and preferred comfort level. We will shape the rest.
          </p>
          <Link
            to="/custom-trips"
            className="interactive-button inline-flex items-center justify-center gap-2 bg-[var(--ea-gold)] px-8 py-4 text-sm uppercase tracking-[0.12em] text-[var(--ea-night)] hover:bg-[var(--ea-gold)]/90"
          >
            Plan Your Journey <ArrowRight size={18} />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
