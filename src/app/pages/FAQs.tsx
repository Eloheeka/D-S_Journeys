import { Link } from "react-router";
import { ArrowRight, HelpCircle, Map, ShieldCheck } from "lucide-react";
import rwandaHero from "../../assets/images/rwanda.jpg";
import { Reveal, StaggerGroup, StaggerItem } from "../components/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const eastAfricaFaqs = [
  {
    question: "When is the best time to visit East Africa?",
    answer:
      "East Africa is rewarding year-round, but the best timing depends on your route. June to October is excellent for classic wildlife viewing in Kenya and Tanzania, while December to February is also a strong dry-season window. For gorilla trekking in Rwanda or Uganda, the drier months from June to September and December to February are usually most comfortable.",
  },
  {
    question: "Which East African countries are best for a first safari?",
    answer:
      "Kenya and Tanzania are ideal for a first big-game safari, especially if you want open savannahs, the Serengeti, Maasai Mara, or the Great Migration. Rwanda and Uganda are best for gorillas, chimpanzees, and lush forest experiences. Zanzibar pairs beautifully with safari when you want beach time after wildlife viewing.",
  },
  {
    question: "How many days do I need for an East Africa trip?",
    answer:
      "A focused safari can work in 5 to 7 days, while 10 to 14 days gives you a more relaxed pace and the option to combine two countries. If you want gorilla trekking, savannah safari, and Zanzibar, plan closer to 12 to 16 days so the trip does not feel rushed.",
  },
  {
    question: "Are East African safaris suitable for families?",
    answer:
      "Yes. Many lodges welcome families and can arrange private vehicles, flexible meal times, and activities for different ages. Some trekking and walking activities have minimum ages, including gorilla trekking, which is limited to travelers aged 15 and above.",
  },
  {
    question: "What should I pack for safari in East Africa?",
    answer:
      "Pack light, neutral-colored clothing, comfortable walking shoes, sun protection, insect repellent, a warm layer for early mornings, and a soft-sided bag if your route includes light aircraft. For gorilla trekking, add waterproof layers, sturdy hiking boots, gloves, gaiters, and a small day pack.",
  },
  {
    question: "What is usually included in safari packages?",
    answer:
      "Most safari packages include accommodation, meals as listed, park fees, airport transfers, guided game drives, and a professional guide or driver-guide. International flights, visas, travel insurance, premium drinks, and some special permits are usually separate unless clearly listed in your itinerary.",
  },
];

const rwandaFaqs = [
  {
    question: "What is the cost of Rwanda safari packages?",
    answer:
      "Rwanda safari package costs vary by season, lodge style, itinerary length, and whether gorilla permits are included. A short mid-range Rwanda safari can start from a few thousand dollars per person, while luxury gorilla and wildlife itineraries can be significantly higher. Gorilla permits are a major cost, so we price Rwanda trips clearly once dates, comfort level, and routing are confirmed.",
  },
  {
    question: "Is Rwanda safe for tourists?",
    answer:
      "Rwanda is widely regarded as one of Africa's safest and best-organized destinations for travelers. Kigali is clean and calm, tourism infrastructure is strong, and guided safari routes are well established. As with any trip, use normal travel awareness, follow your guide's advice, and keep valuables secure in busy public places.",
  },
  {
    question: "Can I do a Rwanda safari without gorilla trekking?",
    answer:
      "Absolutely. Rwanda offers excellent travel experiences beyond gorillas, including Akagera National Park for savannah wildlife, Nyungwe Forest for chimpanzees and canopy walks, Lake Kivu for relaxation, and Kigali for culture, history, dining, and art. A Rwanda safari can be built entirely around wildlife, culture, scenery, or a slower luxury escape.",
  },
  {
    question: "How far in advance do I need to book my gorilla permit?",
    answer:
      "Book as early as possible, especially for June to September, December, and holiday periods. Six to nine months ahead is a good planning window for popular dates, while a year ahead is wise for peak-season luxury trips. Permits are limited each day, so your trekking date should be secured before finalizing the rest of the itinerary.",
  },
  {
    question: "What is the difference between Rwanda tour packages and Rwanda safari packages?",
    answer:
      "A Rwanda tour package can include a broad mix of experiences such as Kigali, cultural visits, Lake Kivu, food, history, hiking, and scenic touring. A Rwanda safari package is more wildlife-focused, often including gorilla trekking, chimpanzee tracking, Akagera game drives, or forest-based nature activities. Many travelers combine both styles in one itinerary.",
  },
  {
    question: "Which is better for gorilla trekking: Rwanda or Uganda?",
    answer:
      "Rwanda is often better for shorter, smoother, luxury-leaning trips because Volcanoes National Park is only a few hours from Kigali and logistics are simple. Uganda is often better for travelers seeking a lower permit cost, longer overland adventure, or a wider mix of national parks. The gorilla experience itself can be extraordinary in both countries; the better choice depends on budget, time, and travel style.",
  },
];

function FAQSection({
  id,
  eyebrow,
  title,
  description,
  faqs,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  faqs: typeof eastAfricaFaqs;
}) {
  return (
    <section id={id}>
      <Reveal>
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--ea-terracotta)] mb-3">
          {eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl mb-4">{title}</h2>
        <p className="text-muted-foreground text-lg max-w-3xl">{description}</p>
      </Reveal>

      <Reveal className="mt-8 rounded-2xl border border-border bg-card px-5 sm:px-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`${id}-${index}`}>
              <AccordionTrigger className="py-6 text-base sm:text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}

export function FAQs() {
  return (
    <div className="pt-20">
      <section className="relative h-[54vh] min-h-[430px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${rwandaHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />
        <Reveal className="relative z-10 text-center text-white px-4">
          <p className="uppercase tracking-[0.3em] text-sm text-white/75 mb-4">
            Travel Answers
          </p>
          <h1 className="text-5xl md:text-6xl mb-4">FAQs</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Clear answers for East Africa travel, with a dedicated guide to Rwanda safari planning.
          </p>
        </Reveal>
      </section>

      <Reveal className="py-10 px-4 bg-secondary/60 border-b border-border">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          <a
            href="#east-africa"
            className="interactive-button inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background hover:bg-secondary transition-colors text-sm"
          >
            <Map size={16} />
            East Africa FAQs
          </a>
          <a
            href="#rwanda"
            className="interactive-button inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background hover:bg-secondary transition-colors text-sm"
          >
            <ShieldCheck size={16} />
            Rwanda FAQs
          </a>
        </div>
      </Reveal>

      <div className="py-20 px-4 max-w-5xl mx-auto space-y-20">
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StaggerItem className="interactive-card rounded-2xl border border-border bg-card p-6">
            <HelpCircle className="text-[var(--ea-terracotta)] mb-4" size={28} />
            <h3 className="text-xl mb-2">Trip Planning</h3>
            <p className="text-muted-foreground">
              Timing, routing, package inclusions, and how to choose the right safari style.
            </p>
          </StaggerItem>
          <StaggerItem className="interactive-card rounded-2xl border border-border bg-card p-6">
            <Map className="text-[var(--ea-sage)] mb-4" size={28} />
            <h3 className="text-xl mb-2">East Africa</h3>
            <p className="text-muted-foreground">
              General answers for Kenya, Tanzania, Uganda, Rwanda, and Zanzibar.
            </p>
          </StaggerItem>
          <StaggerItem className="interactive-card rounded-2xl border border-border bg-card p-6">
            <ShieldCheck className="text-[var(--ea-golden)] mb-4" size={28} />
            <h3 className="text-xl mb-2">Rwanda Focus</h3>
            <p className="text-muted-foreground">
              Gorilla permits, safety, safari costs, and Rwanda versus Uganda trekking.
            </p>
          </StaggerItem>
        </StaggerGroup>

        <FAQSection
          id="east-africa"
          eyebrow="General FAQs"
          title="East Africa Safari Questions"
          description="Helpful starting points for planning a safari across Rwanda, Uganda, Kenya, Tanzania, and Zanzibar."
          faqs={eastAfricaFaqs}
        />

        <FAQSection
          id="rwanda"
          eyebrow="Rwanda FAQs"
          title="Rwanda Safari & Gorilla Trekking Questions"
          description="Answers to the Rwanda questions travelers ask most often before choosing dates, permits, and package style."
          faqs={rwandaFaqs}
        />
      </div>

      <Reveal className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Still Choosing Your Route?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
            Tell us your dates, budget, and must-see experiences, and we will shape a safari around them.
          </p>
          <Link
            to="/custom-trips"
            className="interactive-button inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary hover:bg-white/90 transition-colors"
          >
            Plan This Trip <ArrowRight size={18} />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
