export interface PackageOption {
  slug: string;
  name: string;
  duration: string;
  days: number;
  style: string;
  startingPrice: string;
  summary: string;
  idealFor: string;
  itinerary: string[];
  includes: string[];
  excludes: string[];
}

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  description: string;
  heroImage: string;
  cardImage: string;
  bestTime: string;
  travelStyles: string[];
  highlights: string[];
  packageOptions: PackageOption[];
}

export interface MultiCountryPackage {
  slug: string;
  name: string;
  destinations: string[];
  duration: string;
  startingPrice: string;
  summary: string;
  idealFor: string;
  image: string;
  itinerary: string[];
  includes: string[];
  excludes: string[];
}

export const destinations: Destination[] = [
  {
    slug: "rwanda",
    name: "Rwanda",
    tagline: "Land of a Thousand Hills",
    intro: "A polished, compact destination for gorilla trekking, lakeside calm, and meaningful cultural encounters.",
    description:
      "Rwanda blends remarkable wildlife encounters with smooth logistics, scenic drives, and a warm sense of hospitality. It works beautifully for travelers who want a short premium escape or a longer trip combining gorillas, Kigali, and Lake Kivu.",
    heroImage:
      "https://images.unsplash.com/photo-1722291731448-3afe029611a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb3VudGFpbiUyMGdvcmlsbGElMjByd2FuZGF8ZW58MXx8fHwxNzc0NzI5MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    cardImage:
      "https://images.unsplash.com/photo-1722293094576-424bd9b4aef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb3VudGFpbiUyMGdvcmlsbGElMjByd2FuZGF8ZW58MXx8fHwxNzc0NzI5MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    bestTime: "June to September and December to February",
    travelStyles: ["Solo travelers", "Couples", "Families and small groups"],
    highlights: [
      "Mountain gorilla trekking in Volcanoes National Park",
      "Kigali city touring with art, coffee, and history",
      "Lake Kivu stays for rest after trekking",
      "Optional golden monkey tracking and cultural village visits",
    ],
    packageOptions: [
      {
        slug: "rwanda-gorilla-short-stay",
        name: "Rwanda Gorilla Short Stay",
        duration: "4 Days",
        days: 4,
        style: "Short stay",
        startingPrice: "$3,450",
        summary: "A compact Rwanda itinerary built around gorilla trekking with smooth transfers and a comfortable pace.",
        idealFor: "Best for couples, solo travelers, and short luxury breaks",
        itinerary: [
          "Day 1: Arrive in Kigali, city highlights, and overnight in the capital",
          "Day 2: Scenic transfer to Volcanoes National Park with a cultural stop",
          "Day 3: Gorilla trekking experience followed by lodge relaxation",
          "Day 4: Return to Kigali for shopping, lunch, and departure",
        ],
        includes: [
          "Airport transfers and private transport",
          "Accommodation with breakfast",
          "Professional driver-guide",
          "Gorilla trekking permit",
        ],
        excludes: [
          "International flights",
          "Travel insurance",
          "Visa fees",
          "Personal expenses and tips",
        ],
      },
      {
        slug: "rwanda-signature-hills-and-gorillas",
        name: "Rwanda Signature Hills and Gorillas",
        duration: "7 Days",
        days: 7,
        style: "Longer experience",
        startingPrice: "$5,980",
        summary: "A fuller Rwanda journey combining Kigali, gorillas, cultural experiences, and time on Lake Kivu.",
        idealFor: "Best for honeymooners, friends traveling together, and premium tailor-made trips",
        itinerary: [
          "Day 1: Arrive in Kigali and settle in with an easy evening",
          "Day 2: Kigali city touring, memorial visit, and local dining",
          "Day 3: Transfer to Volcanoes National Park with panoramic hill-country views",
          "Day 4: Gorilla trekking and afternoon recovery at the lodge",
          "Day 5: Golden monkey tracking or community experience",
          "Day 6: Transfer to Lake Kivu for relaxation or boat activity",
          "Day 7: Return to Kigali for departure",
        ],
        includes: [
          "Airport transfers and private safari vehicle",
          "Accommodation and most meals",
          "English-speaking guide",
          "Gorilla trekking permit and selected activities",
        ],
        excludes: [
          "International flights",
          "Premium drinks",
          "Optional spa or extra excursions",
          "Travel insurance and visa fees",
        ],
      },
    ],
  },
  {
    slug: "uganda",
    name: "Uganda",
    tagline: "The Pearl of Africa",
    intro: "Adventure-rich and deeply rewarding, with primates, savannah wildlife, and lush landscapes in one trip.",
    description:
      "Uganda suits travelers who want variety. You can combine gorillas, chimpanzees, game drives, and scenic overland travel in a way that feels immersive and less rushed than many classic safari circuits.",
    heroImage:
      "https://images.unsplash.com/photo-1659132814891-ef346422b339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhZnJpY2FuJTIwc2FmYXJpJTIwd2lsZGxpZmUlMjBlbGVwaGFudHN8ZW58MXx8fHwxNzc0NzI5MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    cardImage:
      "https://images.unsplash.com/photo-1617198920209-220e1e8a652e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2FmYXJpJTIwd2lsZGxpZmUlMjBlbGVwaGFudHN8ZW58MXx8fHwxNzc0NzI5MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    bestTime: "June to September and December to February",
    travelStyles: ["Solo travelers", "Couples", "Groups and multi-generation families"],
    highlights: [
      "Mountain gorilla trekking in Bwindi",
      "Chimpanzee tracking in Kibale",
      "Boat safaris and game drives in Queen Elizabeth National Park",
      "Scenic drives through crater lakes and tea country",
    ],
    packageOptions: [
      {
        slug: "uganda-primate-escape",
        name: "Uganda Primate Escape",
        duration: "4 Days",
        days: 4,
        style: "Short stay",
        startingPrice: "$2,950",
        summary: "A focused short trip for travelers who want the core Uganda gorilla experience with efficient routing.",
        idealFor: "Best for solo travelers, couples, and add-on East Africa extensions",
        itinerary: [
          "Day 1: Arrive in Kigali or Entebbe and transfer toward Bwindi",
          "Day 2: Gorilla trekking in Bwindi and lodge downtime",
          "Day 3: Community visit and scenic transfer",
          "Day 4: Return for departure",
        ],
        includes: [
          "Private transport and driver-guide",
          "Accommodation with meals as indicated",
          "Gorilla permit",
          "Park and activity fees",
        ],
        excludes: [
          "International or regional flights",
          "Visa fees",
          "Travel insurance",
          "Laundry, drinks, and gratuities",
        ],
      },
      {
        slug: "uganda-primates-and-safari",
        name: "Uganda Primates and Safari",
        duration: "7 Days",
        days: 7,
        style: "Longer experience",
        startingPrice: "$4,980",
        summary: "A balanced week combining chimpanzees, gorillas, and classic safari moments in western Uganda.",
        idealFor: "Best for adventurous couples, friends, and flexible family groups",
        itinerary: [
          "Day 1: Arrive in Entebbe and rest",
          "Day 2: Transfer to Kibale with countryside stops",
          "Day 3: Chimpanzee tracking and Bigodi wetland walk",
          "Day 4: Continue to Queen Elizabeth National Park for an evening game drive",
          "Day 5: Boat safari and transfer to Bwindi",
          "Day 6: Gorilla trekking and fireside lodge evening",
          "Day 7: Return for departure",
        ],
        includes: [
          "Private transport throughout",
          "Mid-range or upscale accommodation",
          "Chimpanzee and gorilla permits",
          "Game drives and boat safari",
        ],
        excludes: [
          "Flights and visas",
          "Optional premium lodge upgrades",
          "Travel insurance",
          "Personal shopping and tips",
        ],
      },
    ],
  },
  {
    slug: "kenya",
    name: "Kenya",
    tagline: "The Classic Safari",
    intro: "Big game, sweeping landscapes, and timeless safari scenes with easy combinations for every travel style.",
    description:
      "Kenya is ideal for travelers looking for iconic wildlife viewing, strong lodge options, and a classic safari rhythm. From the Masai Mara to Amboseli and beyond, it offers both short getaways and fuller circuits with ease.",
    heroImage:
      "https://images.unsplash.com/photo-1704494766450-23bdda6676e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMG1hc2FpJTIwbWFyYSUyMHNhZmFyaXxlbnwxfHx8fDE3NzQ3MjkyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    cardImage:
      "https://images.unsplash.com/photo-1704494766450-23bdda6676e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMG1hc2FpJTIwbWFyYSUyMHNhZmFyaXxlbnwxfHx8fDE3NzQ3MjkyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bestTime: "July to October and January to March",
    travelStyles: ["Solo travelers", "Couples", "Friends and family groups"],
    highlights: [
      "Masai Mara game drives and seasonal migration viewing",
      "Amboseli with elephant herds and Kilimanjaro views",
      "Flexible options for flying or driving safaris",
      "Easy pairing with beach time or Tanzania extensions",
    ],
    packageOptions: [
      {
        slug: "kenya-masai-mara-express",
        name: "Kenya Masai Mara Express",
        duration: "4 Days",
        days: 4,
        style: "Short stay",
        startingPrice: "$2,200",
        summary: "A straightforward Masai Mara safari with strong wildlife viewing and minimal time away from work or home.",
        idealFor: "Best for couples, first-time safari travelers, and short breaks",
        itinerary: [
          "Day 1: Arrive in Nairobi and transfer or fly to the Masai Mara",
          "Day 2: Morning and afternoon game drives",
          "Day 3: Full safari day with optional bush breakfast or Maasai visit",
          "Day 4: Return to Nairobi and depart",
        ],
        includes: [
          "Park fees and game drives",
          "Accommodation with meals",
          "Shared or private transport option",
          "Driver-guide services",
        ],
        excludes: [
          "International flights",
          "Hot air balloon safari",
          "Travel insurance",
          "Tips and personal purchases",
        ],
      },
      {
        slug: "kenya-classic-bush-and-plains",
        name: "Kenya Classic Bush and Plains",
        duration: "7 Days",
        days: 7,
        style: "Longer experience",
        startingPrice: "$3,950",
        summary: "A classic week in Kenya covering Nairobi, Amboseli, Lake Naivasha, and the Masai Mara.",
        idealFor: "Best for couples, families, and private small groups",
        itinerary: [
          "Day 1: Arrive in Nairobi and overnight",
          "Day 2: Drive to Amboseli for an afternoon game drive",
          "Day 3: Full day in Amboseli with Kilimanjaro views",
          "Day 4: Continue to Lake Naivasha for boat and walking options",
          "Day 5: Travel to the Masai Mara",
          "Day 6: Full safari day in the Mara",
          "Day 7: Return to Nairobi and depart",
        ],
        includes: [
          "Private transport and guide",
          "Accommodation and meals as per itinerary",
          "Park fees and scheduled activities",
          "Bottled water during drives",
        ],
        excludes: [
          "Flights and visas",
          "Balloon safari and premium extras",
          "Travel insurance",
          "Drinks outside meals and gratuities",
        ],
      },
    ],
  },
  {
    slug: "tanzania",
    name: "Tanzania",
    tagline: "The Serengeti Experience",
    intro: "Immersive safari country with iconic plains, crater landscapes, and excellent pairings with Zanzibar.",
    description:
      "Tanzania gives travelers that cinematic East Africa feeling: vast savannahs, rich predator sightings, and beautifully paced lodge-to-lodge journeys. It works especially well for safari-first trips and honeymoon combinations.",
    heroImage:
      "https://images.unsplash.com/photo-1500549158481-49dcc08a37ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0YW56YW5pYSUyMHNlcmVuZ2V0aSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzQ3MjkyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    cardImage:
      "https://images.unsplash.com/photo-1716297468621-c6e6c34fa2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW56YW5pYSUyMHNlcmVuZ2V0aSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzQ3MjkyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bestTime: "June to October, with January to February also strong for calving season",
    travelStyles: ["Solo travelers", "Couples and honeymooners", "Private groups"],
    highlights: [
      "Serengeti game drives across dramatic open plains",
      "Ngorongoro Crater for dense wildlife viewing",
      "Tarangire's baobabs and elephant herds",
      "Simple extensions to Zanzibar for beach time",
    ],
    packageOptions: [
      {
        slug: "tanzania-serengeti-short-safari",
        name: "Tanzania Serengeti Short Safari",
        duration: "4 Days",
        days: 4,
        style: "Short stay",
        startingPrice: "$2,650",
        summary: "A compact northern Tanzania safari focused on wildlife, comfort, and efficient routing.",
        idealFor: "Best for couples, solo travelers, and add-on beach trips",
        itinerary: [
          "Day 1: Arrive in Arusha and transfer to Tarangire",
          "Day 2: Continue to Serengeti with game viewing en route",
          "Day 3: Morning safari and visit Ngorongoro highlands",
          "Day 4: Crater tour and return to Arusha",
        ],
        includes: [
          "Private safari vehicle with guide",
          "Park fees and crater service fees",
          "Accommodation and meals",
          "Airport transfers",
        ],
        excludes: [
          "Flights and visas",
          "Travel insurance",
          "Alcoholic drinks",
          "Optional balloon safari",
        ],
      },
      {
        slug: "tanzania-northern-circuit-signature",
        name: "Tanzania Northern Circuit Signature",
        duration: "7 Days",
        days: 7,
        style: "Longer experience",
        startingPrice: "$4,850",
        summary: "A richer Tanzania safari through Tarangire, Serengeti, Ngorongoro, and Lake Manyara.",
        idealFor: "Best for honeymooners, wildlife photographers, and private groups",
        itinerary: [
          "Day 1: Arrive in Arusha and overnight",
          "Day 2: Tarangire National Park safari",
          "Day 3: Travel to central Serengeti with game viewing",
          "Day 4: Full day in Serengeti",
          "Day 5: Morning game drive and transfer to Ngorongoro",
          "Day 6: Ngorongoro Crater tour",
          "Day 7: Lake Manyara stop and departure",
        ],
        includes: [
          "Private 4x4 safari vehicle and guide",
          "Park fees and accommodation",
          "Full-board during safari days",
          "Bottled water and airport transfers",
        ],
        excludes: [
          "International flights",
          "Visa and insurance",
          "Optional hot air balloon ride",
          "Tips and items of a personal nature",
        ],
      },
    ],
  },
  {
    slug: "zanzibar",
    name: "Zanzibar",
    tagline: "Tropical Paradise",
    intro: "The soft landing after safari, with beach time, heritage, spice farms, and barefoot luxury.",
    description:
      "Zanzibar works beautifully as a standalone coastal retreat or as the final chapter of a longer East African journey. It is easy to keep simple: beach, culture, and a few memorable island experiences without overpacking the itinerary.",
    heroImage:
      "https://images.unsplash.com/photo-1646667640485-f21def63ed50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx6YW56aWJhciUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzc0NzI5MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    cardImage:
      "https://images.unsplash.com/photo-1646667844634-1eac4e8f5b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx6YW56aWJhciUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzc0NzI5MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    bestTime: "June to October and January to February",
    travelStyles: ["Solo travelers", "Couples and honeymooners", "Families and groups"],
    highlights: [
      "Indian Ocean beach stays with room to slow down",
      "Stone Town history and Swahili character",
      "Snorkeling, dhow cruises, and spice farm visits",
      "Easy pairing with Tanzania or Rwanda combinations",
    ],
    packageOptions: [
      {
        slug: "zanzibar-beach-reset",
        name: "Zanzibar Beach Reset",
        duration: "4 Days",
        days: 4,
        style: "Short stay",
        startingPrice: "$1,650",
        summary: "A light, restorative island break focused on beach time, Stone Town, and one signature ocean activity.",
        idealFor: "Best for couples, solo travelers, and safari add-ons",
        itinerary: [
          "Day 1: Arrive in Zanzibar and transfer to the beach",
          "Day 2: Relaxed beach day with optional spa or snorkeling",
          "Day 3: Stone Town and spice farm experience",
          "Day 4: Departure",
        ],
        includes: [
          "Airport transfers",
          "Accommodation with breakfast",
          "Stone Town and spice tour",
          "Support with local logistics",
        ],
        excludes: [
          "Flights and ferry tickets",
          "Lunches and dinners unless stated",
          "Travel insurance",
          "Optional water sports",
        ],
      },
      {
        slug: "zanzibar-coast-and-culture",
        name: "Zanzibar Coast and Culture",
        duration: "7 Days",
        days: 7,
        style: "Longer experience",
        startingPrice: "$2,850",
        summary: "A fuller island stay combining Stone Town, beach relaxation, marine activities, and sunset sailing.",
        idealFor: "Best for honeymooners, families, and friend groups",
        itinerary: [
          "Day 1: Arrive in Stone Town and settle in",
          "Day 2: Walking tour and spice farm",
          "Day 3: Transfer to the east or north coast resort",
          "Day 4: Beach day with optional diving or snorkeling",
          "Day 5: Dhow cruise or Mnemba excursion",
          "Day 6: Leisure day for rest or private experiences",
          "Day 7: Departure",
        ],
        includes: [
          "Accommodation and transfers",
          "Selected cultural and marine activities",
          "Breakfast and some additional meals",
          "On-ground support",
        ],
        excludes: [
          "Flights",
          "Travel insurance",
          "Premium water activities",
          "Personal purchases and tips",
        ],
      },
    ],
  },
];

export const multiCountryPackages: MultiCountryPackage[] = [
  {
    slug: "rwanda-tanzania-zanzibar-signature",
    name: "Rwanda + Tanzania + Zanzibar",
    destinations: ["Rwanda", "Tanzania", "Zanzibar"],
    duration: "10 Days",
    startingPrice: "$7,950",
    summary: "A premium East Africa combination with gorillas, classic safari, and a beach finish.",
    idealFor: "Best for honeymooners and travelers celebrating a milestone trip",
    image:
      "https://images.unsplash.com/photo-1646667642307-e2bf4541284e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6YW56aWJhciUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzc0NzI5MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    itinerary: [
      "Day 1: Arrive in Kigali",
      "Day 2: Kigali touring and transfer to Volcanoes National Park",
      "Day 3: Gorilla trekking",
      "Day 4: Fly to northern Tanzania",
      "Day 5: Serengeti safari",
      "Day 6: Ngorongoro Crater",
      "Day 7: Fly to Zanzibar",
      "Day 8-9: Beach and island experiences",
      "Day 10: Departure",
    ],
    includes: [
      "Regional logistics and transfers",
      "Accommodation and guided experiences",
      "Gorilla permit and safari activities",
      "Selected Zanzibar excursions",
    ],
    excludes: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Optional premium add-ons",
    ],
  },
  {
    slug: "kenya-tanzania-safari-essentials",
    name: "Kenya + Tanzania Safari",
    destinations: ["Kenya", "Tanzania"],
    duration: "8 Days",
    startingPrice: "$5,650",
    summary: "A high-impact safari combination through the Masai Mara, Serengeti, and Ngorongoro.",
    idealFor: "Best for first-time safari travelers and private small groups",
    image:
      "https://images.unsplash.com/photo-1739097108468-9364ea62383d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx0YW56YW5pYSUyMHNlcmVuZ2V0aSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzQ3MjkyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    itinerary: [
      "Day 1: Arrive in Nairobi",
      "Day 2: Transfer to the Masai Mara",
      "Day 3: Full game drive day",
      "Day 4: Cross or fly toward Serengeti",
      "Day 5: Serengeti safari",
      "Day 6: Ngorongoro highlands",
      "Day 7: Crater tour",
      "Day 8: Return to Arusha and depart",
    ],
    includes: [
      "Private guide and safari transport",
      "Park fees across both countries",
      "Accommodation and meals as stated",
      "Cross-border coordination",
    ],
    excludes: [
      "International and some regional flights",
      "Travel insurance",
      "Visa fees",
      "Balloon safari and personal spending",
    ],
  },
  {
    slug: "full-east-africa-experience",
    name: "Full East Africa Experience",
    destinations: ["Kenya", "Uganda", "Rwanda", "Tanzania", "Zanzibar"],
    duration: "14 Days",
    startingPrice: "$10,900",
    summary: "A flagship multi-country sample itinerary touching primates, safari plains, and the coast.",
    idealFor: "Best for travelers wanting a grand, fully customized East Africa journey",
    image:
      "https://images.unsplash.com/photo-1617198920209-220e1e8a652e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2FmYXJpJTIwd2lsZGxpZmUlMjBlbGVwaGFudHN8ZW58MXx8fHwxNzc0NzI5MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    itinerary: [
      "Day 1-2: Nairobi and Masai Mara",
      "Day 3-4: Uganda primates and scenic transfer",
      "Day 5-6: Rwanda gorilla experience",
      "Day 7-10: Tanzania northern safari circuit",
      "Day 11-13: Zanzibar beach extension",
      "Day 14: Departure",
    ],
    includes: [
      "Tailored regional routing support",
      "Private guides, park fees, and accommodations",
      "Sample signature activities across each stop",
      "Trip design support for customization",
    ],
    excludes: [
      "International flights",
      "Multiple-entry visas and insurance",
      "Premium room upgrades",
      "Some optional charter flights or add-ons",
    ],
  },
];

export const destinationMap = Object.fromEntries(
  destinations.map((destination) => [destination.slug, destination]),
) as Record<string, Destination>;
