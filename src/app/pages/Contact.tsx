import { Link } from "react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "../components/animations";
import contactHero from "../../assets/images/drinkElephant.jpg";

export function Contact() {
  return (
    <div className="pt-20">
      <section className="relative flex min-h-[58vh] items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${contactHero})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        <Reveal className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.34em] text-[var(--ea-gold)]">Start Planning</p>
          <h1 className="mb-5 max-w-4xl text-5xl leading-[0.95] md:text-7xl">Speak with an East Africa travel expert.</h1>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-white/88 md:text-2xl">
            Tell us where you want to go, how you like to travel, and what should feel unforgettable. We will help shape the next step.
          </p>
        </Reveal>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <StaggerGroup className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
            <StaggerItem className="interactive-card border border-[var(--ea-border-strong)] bg-card p-8 text-center">
              <Mail className="mx-auto mb-5 text-[var(--ea-bronze)]" size={30} />
              <h3 className="mb-2 text-2xl">Email</h3>
              <p className="mb-4 text-muted-foreground">For itinerary requests and detailed planning.</p>
              <a href="mailto:info@dasamjourneys.com" className="text-[var(--ea-forest)] hover:underline">
                info@dasamjourneys.com
              </a>
            </StaggerItem>

            <StaggerItem className="interactive-card border border-[var(--ea-border-strong)] bg-card p-8 text-center">
              <Phone className="mx-auto mb-5 text-[var(--ea-bronze)]" size={30} />
              <h3 className="mb-2 text-2xl">Phone & WhatsApp</h3>
              <p className="mb-4 text-muted-foreground">For quick questions and active trip support.</p>
              <a href="tel:+250793547972" className="text-[var(--ea-forest)] hover:underline">
                +250 793 547 972
              </a>
            </StaggerItem>

            <StaggerItem className="interactive-card border border-[var(--ea-border-strong)] bg-card p-8 text-center">
              <MapPin className="mx-auto mb-5 text-[var(--ea-bronze)]" size={30} />
              <h3 className="mb-2 text-2xl">Regional Network</h3>
              <p className="text-muted-foreground">
                Kigali, Kampala, Nairobi, Dar es Salaam, Arusha, and Zanzibar.
              </p>
            </StaggerItem>
          </StaggerGroup>

          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--ea-bronze)]">Custom Inquiry</p>
            <h2 className="mb-5 text-4xl leading-tight md:text-6xl">The fastest way to begin is with your dream route.</h2>
            <p className="mx-auto mb-9 max-w-2xl text-lg text-muted-foreground">
              Include preferred destinations, travel month, number of travelers, budget level, special occasion, and any mobility or comfort needs.
            </p>
            <Link
              to="/custom-trips"
              className="interactive-button inline-flex items-center justify-center gap-2 bg-[var(--ea-forest)] px-8 py-4 text-sm uppercase tracking-[0.12em] text-white hover:bg-[var(--ea-forest)]/90"
            >
              Request Custom Itinerary <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
