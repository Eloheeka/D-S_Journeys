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

export interface Attraction {
  name: string;
  type: "national_park" | "lake" | "museum" | "city" | "beach" | "landmark" | "wildlife" | "mountain" | "cultural";
  description: string;
  highlight?: string; // one-line standout fact
}

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  description: string;
  whyVisit: string;
  heroImage: string;
  cardImage: string;
  bestTime: string;
  travelStyles: string[];
  highlights: string[];
  attractions: Attraction[];
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
    whyVisit:
      "Rwanda is one of the most rewarding destinations in Africa for travelers who value depth over distance. The country is compact, safe, and exceptionally well-organized, making it easy to move between experiences without losing time. Gorilla trekking in Volcanoes National Park is a once-in-a-lifetime encounter, and Kigali consistently surprises visitors with its clean streets, vibrant art scene, and thoughtful memorials. Lake Kivu adds a serene lakeside chapter that few other safari destinations can match.",
    attractions: [
      // National Parks
      {
        name: "Volcanoes National Park",
        type: "national_park",
        highlight: "Home to mountain gorillas & golden monkeys",
        description: "Rwanda's crown jewel, set in the Virunga volcanic range along the borders of Uganda and the DRC. The park protects five of the eight Virunga volcanoes and is the primary destination for mountain gorilla trekking. Habituated gorilla families can be visited daily with a limited number of permits, making each encounter intimate and controlled. Golden monkey tracking is also available here, along with hikes to the Dian Fossey tomb and the summits of Bisoke and Karisimbi volcanoes.",
      },
      {
        name: "Nyungwe Forest National Park",
        type: "national_park",
        highlight: "One of Africa's oldest montane rainforests",
        description: "Covering over 1,000 sq km in southwestern Rwanda, Nyungwe is one of the largest intact montane rainforests in Africa. It shelters 13 primate species including chimpanzees and Angolan colobus monkeys, over 300 bird species, and a remarkable diversity of orchids and butterflies. The famous canopy walkway — suspended 50 metres above the forest floor — is one of the most dramatic experiences in East Africa. Tea plantations border the park, creating a striking landscape contrast.",
      },
      {
        name: "Akagera National Park",
        type: "national_park",
        highlight: "Rwanda's Big Five savannah park",
        description: "Located in eastern Rwanda along the Tanzanian border, Akagera is the country's only savannah park and one of Africa's great conservation success stories. Lions and rhinos were reintroduced after being locally extinct for decades, and the park now supports the Big Five. A network of lakes — including Lake Ihema — runs through the park, supporting hippos, crocodiles, and exceptional birdlife. Game drives, boat safaris, and night drives are all available.",
      },
      {
        name: "Gishwati-Mukura National Park",
        type: "national_park",
        highlight: "Rwanda's newest and most remote park",
        description: "Gazetted as a national park in 2015, Gishwati-Mukura protects two forest fragments in western Rwanda. The park is home to chimpanzees, golden monkeys, and over 230 bird species. It is less visited than Rwanda's other parks, making it ideal for travelers seeking a quieter, more off-the-beaten-path primate experience. Community tourism initiatives around the park are among the most authentic in the country.",
      },
      // Lakes
      {
        name: "Lake Kivu",
        type: "lake",
        highlight: "One of Africa's Great Lakes, 90km long",
        description: "Stretching 90 km along Rwanda's western border with the DRC, Lake Kivu is one of Africa's Great Lakes and one of its most beautiful. The Rwandan shore is dotted with small towns — Gisenyi (Rubavu), Kibuye (Karongi), and Cyangugu (Rusizi) — each with its own character. The lake is safe for swimming and kayaking, and boat trips to small islands are popular. Staying on the lake after gorilla trekking is one of the most restorative experiences Rwanda offers.",
      },
      {
        name: "Twin Lakes (Burera & Ruhondo)",
        type: "lake",
        highlight: "Dramatic volcanic lakes near Volcanoes NP",
        description: "Lakes Burera and Ruhondo sit side by side in the volcanic highlands near Musanze, separated by a narrow ridge. The scenery is extraordinary — terraced hillsides, volcanic peaks, and mirror-calm water. Boat trips, cycling, and community walks are available. The lakes are often combined with a visit to Volcanoes National Park and offer a quieter, more local experience than the main tourist circuit.",
      },
      {
        name: "Lake Muhazi",
        type: "lake",
        highlight: "Long, narrow lake east of Kigali",
        description: "A slender, winding lake stretching east of Kigali, Lake Muhazi is popular for kayaking, boat trips, and weekend escapes from the capital. The surrounding hills are green and peaceful, and a handful of small lodges line the shore. It is an easy half-day trip from Kigali and a good introduction to Rwanda's quieter countryside.",
      },
      // Museums & Culture
      {
        name: "Kigali Genocide Memorial",
        type: "museum",
        highlight: "Final resting place of 250,000 genocide victims",
        description: "The most important memorial in Rwanda, built on the site of a mass grave where over 250,000 victims of the 1994 genocide are buried. The museum documents the history of the genocide with clarity and sensitivity, tracing the colonial roots of ethnic division, the events of 1994, and Rwanda's extraordinary journey of reconciliation and recovery. A visit here is sobering, essential, and ultimately hopeful. It is one of the most thoughtfully designed memorials in the world.",
      },
      {
        name: "Inema Arts Center",
        type: "museum",
        highlight: "Kigali's leading contemporary art gallery",
        description: "Founded by brothers Emmanuel and Innocent Nkurunziza, Inema Arts Center is the beating heart of Kigali's creative scene. The gallery showcases bold, colorful paintings, sculptures, and mixed-media works by Rwandan and East African artists. Regular exhibitions, live music events, and dance performances make it a cultural hub rather than just a gallery. The on-site café and gift shop are excellent.",
      },
      {
        name: "Rwanda Art Museum",
        type: "museum",
        highlight: "Housed in the former presidential palace",
        description: "Located in the former presidential palace in Kigali, the Rwanda Art Museum opened in 2020 and houses a growing collection of contemporary Rwandan art. The building itself is historically significant — it was the residence of President Habyarimana, whose assassination triggered the genocide. The juxtaposition of history and creative renewal makes it one of the most thought-provoking spaces in the country.",
      },
      {
        name: "Ethnographic Museum (Huye)",
        type: "museum",
        highlight: "Rwanda's most comprehensive cultural museum",
        description: "Located in Huye (Butare) in southern Rwanda, the National Museum of Rwanda is considered one of the finest ethnographic museums in Africa. It houses an extensive collection of traditional Rwandan artifacts — royal drums, basketry, jewelry, and tools — alongside exhibits on the country's history, culture, and natural environment. The nearby Nyanza Royal Palace is a worthwhile addition to the visit.",
      },
      {
        name: "Nyanza Royal Palace",
        type: "cultural",
        highlight: "Reconstructed palace of the Rwandan monarchy",
        description: "The reconstructed royal palace at Nyanza gives visitors a window into the pre-colonial Rwandan kingdom. The traditional thatched palace has been faithfully rebuilt and is surrounded by the long-horned Inyambo cattle that were central to royal culture. Guided tours explain the history of the Mwami (king) and the social structure of the ancient kingdom. A small museum on site adds context.",
      },
      {
        name: "Iby'Iwacu Cultural Village",
        type: "cultural",
        highlight: "Authentic community cultural experience near Volcanoes NP",
        description: "Located near Volcanoes National Park, Iby'Iwacu is a community-run cultural village that offers one of the most genuine cultural experiences in Rwanda. Visitors can participate in traditional dance, learn about medicinal plants, try local food, and meet former poachers who now work as cultural guides. The program directly supports the local community and is a meaningful complement to gorilla trekking.",
      },
      // Cities
      {
        name: "Kigali",
        type: "city",
        highlight: "One of Africa's cleanest and safest capitals",
        description: "Rwanda's capital is consistently ranked among Africa's most livable cities. Spread across a series of hills, Kigali is clean, safe, and surprisingly cosmopolitan. The Kimironko market is one of the best in East Africa for crafts and local produce. The Kigali Convention Centre is an architectural landmark. The restaurant scene — from street food to fine dining — is excellent. Kigali is also the base for most Rwanda trips and deserves at least a full day of exploration.",
      },
      {
        name: "Musanze (Ruhengeri)",
        type: "city",
        highlight: "Gateway to Volcanoes National Park",
        description: "The main town in northern Rwanda and the base for gorilla trekking, Musanze sits in a valley surrounded by volcanic peaks. The town has a lively market, good accommodation options, and the Musanze Caves — a network of lava tubes used as a refuge during historical conflicts. The twin lakes of Burera and Ruhondo are a short drive away. Most travelers spend at least one night here before or after trekking.",
      },
      {
        name: "Huye (Butare)",
        type: "city",
        highlight: "Rwanda's intellectual and cultural capital",
        description: "Home to the University of Rwanda and the National Museum, Huye is the country's academic and cultural center. The city has a quieter, more contemplative atmosphere than Kigali and is a good base for exploring southern Rwanda, including the Nyungwe Forest and the Nyanza Royal Palace. The local market and cathedral are worth a visit.",
      },
      {
        name: "Rubavu (Gisenyi)",
        type: "city",
        highlight: "Lakeside resort town on Lake Kivu",
        description: "Rubavu sits on the northern shore of Lake Kivu, directly across the border from Goma in the DRC. It is the most popular beach town in Rwanda, with a relaxed atmosphere, good hotels, and easy access to the lake for swimming and boat trips. The town's proximity to the Congolese border gives it a unique, frontier energy. Sunsets over the lake from Rubavu are among the best in Rwanda.",
      },
      // Mountains & Landscape
      {
        name: "Mount Karisimbi",
        type: "mountain",
        highlight: "Highest peak in Rwanda at 4,507m",
        description: "The highest of the Virunga volcanoes and the highest point in Rwanda, Karisimbi can be climbed on a two-day trek from Volcanoes National Park. The summit offers extraordinary views over Rwanda, Uganda, and the DRC on clear days. The climb passes through bamboo forest, moorland, and alpine desert. It is a serious but non-technical hike requiring good fitness and cold-weather gear.",
      },
      {
        name: "Mount Bisoke",
        type: "mountain",
        highlight: "Active volcano with a crater lake at the summit",
        description: "One of the most rewarding day hikes in Rwanda, Bisoke (3,711m) can be climbed in a full day from Volcanoes National Park. The summit holds a beautiful crater lake, and the trail passes through gorilla habitat — sightings are possible. The hike is steep and can be muddy but is accessible to fit hikers without technical experience.",
      },
    ],
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
    whyVisit:
      "Uganda earns its nickname as the Pearl of Africa. It is the only country where you can track both mountain gorillas and chimpanzees on the same trip, and the landscapes — from the Rwenzori Mountains to the crater lakes of western Uganda — are genuinely spectacular. Queen Elizabeth National Park offers tree-climbing lions and boat safaris on the Kazinga Channel, while Bwindi Impenetrable Forest delivers one of the most moving wildlife encounters on the continent. Uganda rewards travelers who are willing to go a little deeper.",
    attractions: [
      // National Parks
      {
        name: "Bwindi Impenetrable National Park",
        type: "national_park",
        highlight: "Home to ~half the world's mountain gorillas",
        description: "A UNESCO World Heritage Site in southwestern Uganda, Bwindi is one of the most biodiverse forests in Africa. It shelters approximately 459 mountain gorillas — roughly half the global population — across four trekking sectors: Buhoma, Ruhija, Rushaga, and Nkuringo. Each sector has a different character and altitude. Beyond gorillas, Bwindi has over 350 bird species, 120 mammal species, and 200 butterfly species. The forest itself is ancient, dense, and genuinely impenetrable in places.",
      },
      {
        name: "Queen Elizabeth National Park",
        type: "national_park",
        highlight: "Famous for tree-climbing lions & Kazinga Channel",
        description: "Uganda's most visited park spans savannah, wetlands, and forest across the Albertine Rift. The Kazinga Channel — a natural waterway connecting Lakes George and Edward — offers one of Africa's best boat safaris, with hippos, crocodiles, and hundreds of bird species lining the banks. The Ishasha sector in the south is famous for its tree-climbing lions, a rare behavior seen in only a handful of places worldwide. Chimpanzees, elephants, and buffalo are also common.",
      },
      {
        name: "Kibale National Park",
        type: "national_park",
        highlight: "Best chimpanzee tracking in Africa",
        description: "Kibale is the primate capital of the world, with 13 primate species including the highest density of chimpanzees on the continent. Habituated chimp communities can be tracked daily, and the experience — watching chimps swing through the canopy, groom each other, and interact — is extraordinary. The Bigodi Wetland Sanctuary on the park's edge is excellent for birds and red colobus monkeys. Kibale also has forest elephants, red-tailed monkeys, and olive baboons.",
      },
      {
        name: "Murchison Falls National Park",
        type: "national_park",
        highlight: "Uganda's largest park, home to the world's most powerful waterfall",
        description: "Uganda's largest national park sits in the northwest, where the Victoria Nile forces through a 7-metre gap in the rocks to create Murchison Falls — one of the most powerful waterfalls on earth. The park has excellent game viewing: lions, leopards, elephants, giraffes, and large buffalo herds. Boat trips to the base of the falls are a highlight. The delta area where the Nile meets Lake Albert is exceptional for shoebill storks and other rare birds.",
      },
      {
        name: "Kidepo Valley National Park",
        type: "national_park",
        highlight: "Uganda's most remote and wild park",
        description: "Located in the far northeast near the South Sudan border, Kidepo is consistently rated one of Africa's finest parks by those who make the journey. The landscape is dramatic — semi-arid savannah ringed by mountains — and the wildlife is exceptional: cheetahs, caracals, ostriches, and large lion prides. The Karamojong people who live around the park add a fascinating cultural dimension. Kidepo rewards the effort required to reach it.",
      },
      {
        name: "Lake Mburo National Park",
        type: "national_park",
        highlight: "Uganda's most accessible park, great for walking safaris",
        description: "The closest national park to Kampala, Lake Mburo is compact and excellent for walking and cycling safaris — activities not available in Uganda's larger parks. The park has zebras, impalas, elands, hippos, and over 350 bird species. The lake itself is beautiful, and boat trips are available. It is a popular stopover on the route between Kampala and Bwindi.",
      },
      {
        name: "Mgahinga Gorilla National Park",
        type: "national_park",
        highlight: "Gorillas, golden monkeys & Virunga volcanoes",
        description: "Uganda's smallest national park sits in the Virunga volcanic range, sharing borders with Rwanda and the DRC. It protects one habituated gorilla family and offers golden monkey tracking, volcano hikes, and the Batwa cultural experience. The park is less visited than Bwindi, making permits easier to obtain and the experience more exclusive. The hike up Mount Sabinyo — where three countries meet at the summit — is one of Uganda's great adventures.",
      },
      // Lakes
      {
        name: "Lake Victoria",
        type: "lake",
        highlight: "World's largest tropical lake",
        description: "The world's largest tropical lake and the source of the Nile, Lake Victoria's Ugandan shores offer a very different experience from the tourist circuit. The Ssese Islands — an archipelago of 84 islands — are accessible by ferry from Entebbe and offer beaches, forest walks, and a genuinely off-grid escape. Fishing villages along the shore give a window into traditional lakeside life. The lake is also important for birdwatching, with shoebill storks found in the papyrus swamps.",
      },
      {
        name: "Lake Bunyonyi",
        type: "lake",
        highlight: "One of Africa's most beautiful lakes, 29 islands",
        description: "Nestled in the hills of southwestern Uganda near Kabale, Lake Bunyonyi is one of the deepest lakes in Africa and one of its most beautiful. The lake has 29 islands, terraced hillsides, and a tranquil atmosphere that makes it the perfect place to rest after gorilla trekking. Kayaking, canoeing, and island-hopping are popular activities. The lake is bilharzia-free, making it safe for swimming — rare in East Africa.",
      },
      {
        name: "Lake Albert",
        type: "lake",
        highlight: "Rift Valley lake on the DRC border",
        description: "One of the African Great Lakes, Lake Albert sits in the Albertine Rift on the border with the DRC. The Nile exits the lake at its northern end, and the surrounding area is excellent for shoebill storks, Nile crocodiles, and hippos. The lake is also important for fishing communities, and the delta area within Murchison Falls National Park is one of the best places in Africa to see the prehistoric-looking shoebill.",
      },
      {
        name: "Crater Lakes of Western Uganda",
        type: "lake",
        highlight: "Over 50 volcanic crater lakes near Fort Portal",
        description: "The area around Fort Portal in western Uganda is dotted with over 50 volcanic crater lakes, each a different shade of green, blue, or turquoise depending on its mineral content. The lakes are set in a landscape of tea plantations, forest, and rolling hills. Cycling and walking trails connect many of the lakes, and the views from the crater rims are spectacular. Lake Nkuruba and Lake Nyinambuga are among the most beautiful.",
      },
      // Museums & Culture
      {
        name: "Uganda Museum",
        type: "museum",
        highlight: "Uganda's oldest and most comprehensive museum",
        description: "Located in Kampala, the Uganda Museum is the oldest museum in East Africa, founded in 1908. It houses an extensive collection of traditional musical instruments, archaeological finds, ethnographic objects, and natural history exhibits. The outdoor section has traditional homesteads from different Ugandan cultures. It is an excellent introduction to the country's remarkable cultural diversity — Uganda has over 50 distinct ethnic groups.",
      },
      {
        name: "Kasubi Tombs",
        type: "museum",
        highlight: "UNESCO World Heritage Site — royal burial ground",
        description: "The Kasubi Tombs in Kampala are the burial site of four Buganda kings (Kabakas) and a UNESCO World Heritage Site. The main tomb — the Muzibu-Azaala-Mpanga — is one of the largest thatched structures in the world and an extraordinary example of Buganda architecture. The site remains an active religious and cultural center for the Buganda kingdom. A fire damaged the main building in 2010 and restoration is ongoing.",
      },
      {
        name: "Ndere Cultural Centre",
        type: "cultural",
        highlight: "Uganda's premier traditional dance and music venue",
        description: "The Ndere Cultural Centre in Kampala hosts weekly performances of traditional music and dance from Uganda's many ethnic groups. The shows are vibrant, professional, and genuinely entertaining — a great way to experience the country's cultural diversity in one evening. The centre also has a restaurant serving traditional Ugandan food and a craft shop.",
      },
      {
        name: "Batwa Cultural Experience",
        type: "cultural",
        highlight: "Meet Uganda's indigenous forest people",
        description: "The Batwa are the indigenous forest-dwelling people of the Bwindi and Mgahinga forests, displaced when the parks were gazetted. Cultural experiences run by Batwa communities around both parks offer a window into their traditional forest life — fire-making, honey gathering, medicinal plants, and music. The experiences are community-run and the proceeds go directly to Batwa families. It is one of the most moving cultural encounters in Uganda.",
      },
      // Cities
      {
        name: "Kampala",
        type: "city",
        highlight: "Uganda's vibrant capital across seven hills",
        description: "Uganda's capital is one of East Africa's most energetic cities, spread across seven hills with a population of over 3 million. The city has a thriving food scene — from rolex (egg-and-chapati street food) to excellent Indian and international restaurants. The Owino Market is one of the largest in East Africa. Key sights include the Kasubi Tombs, Gaddafi National Mosque, Bahai Temple, and the lively Kabalagala neighborhood. Kampala is chaotic, warm, and endlessly interesting.",
      },
      {
        name: "Entebbe",
        type: "city",
        highlight: "Lakeside gateway city with botanical gardens",
        description: "Uganda's international gateway sits on a peninsula jutting into Lake Victoria, 40km from Kampala. The city has a much more relaxed pace than the capital and is a pleasant place to spend a night before or after a safari. The Uganda Wildlife Education Centre has rescued animals including chimpanzees and shoebill storks. The Entebbe Botanical Garden — where scenes from the original Tarzan films were shot — is beautiful and great for birdwatching.",
      },
      {
        name: "Fort Portal",
        type: "city",
        highlight: "Gateway to western Uganda's parks and crater lakes",
        description: "A charming small city in western Uganda, Fort Portal is the base for exploring Kibale National Park, the crater lakes, and the Rwenzori Mountains. The city has a pleasant colonial-era center, good accommodation, and a relaxed atmosphere. The surrounding landscape of tea estates, volcanic hills, and forest is some of the most beautiful in Uganda.",
      },
      // Mountains
      {
        name: "Rwenzori Mountains",
        type: "mountain",
        highlight: "The Mountains of the Moon — Africa's third highest range",
        description: "The Rwenzori Mountains on the Uganda-DRC border are Africa's third highest range and one of the continent's most dramatic landscapes. The range has permanent glaciers, alpine lakes, and extraordinary vegetation zones — from montane forest to giant heather and lobelia. The Rwenzori Mountains National Park is a UNESCO World Heritage Site. Multi-day treks to the summit of Mount Stanley (5,109m) are available for experienced hikers.",
      },
      {
        name: "Mount Elgon",
        type: "mountain",
        highlight: "Africa's oldest and largest volcanic caldera",
        description: "Straddling the Uganda-Kenya border, Mount Elgon has the largest volcanic base of any mountain in the world. The caldera at the summit is 8km wide. The mountain is known for its cave-dwelling elephants — who mine the cave walls for salt — and its beautiful moorland scenery. Multi-day treks are available from the Ugandan side, and the mountain is far less crowded than Kilimanjaro or Kenya.",
      },
    ],
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
    whyVisit:
      "Kenya is where the idea of the African safari was born, and it still delivers that magic better than almost anywhere else. The Masai Mara is one of the world's great wildlife spectacles, especially during the Great Migration between July and October. But Kenya is more than the Mara — Amboseli's elephant herds against the backdrop of Kilimanjaro, the flamingo-lined shores of Lake Nakuru, and the dramatic landscapes of Samburu all add depth to a country that rewards repeat visits. Nairobi is also one of Africa's most dynamic cities, with excellent restaurants, galleries, and a genuine urban energy.",
    attractions: [
      // National Parks & Reserves
      {
        name: "Masai Mara National Reserve",
        type: "national_park",
        highlight: "World's greatest wildlife spectacle — the Great Migration",
        description: "Kenya's most famous reserve and one of the world's top wildlife destinations. The Mara is the northern extension of the Serengeti ecosystem and the stage for the Great Migration — when over 1.5 million wildebeest and zebra cross the Mara River between July and October. The Big Five are resident year-round, and the density of predators — lions, leopards, cheetahs, hyenas — is extraordinary. Hot air balloon safaris over the plains at dawn are a signature experience.",
      },
      {
        name: "Amboseli National Park",
        type: "national_park",
        highlight: "Elephant herds with Kilimanjaro as a backdrop",
        description: "Amboseli is one of Kenya's most iconic parks, famous for its large elephant herds and the dramatic backdrop of Mount Kilimanjaro rising across the Tanzanian border. The park's open, swampy landscape makes for excellent wildlife viewing — elephants, lions, cheetahs, and over 400 bird species. The Observation Hill gives a panoramic view over the entire park. Amboseli is also home to the Maasai people, and cultural visits to Maasai villages are available.",
      },
      {
        name: "Tsavo East & West National Parks",
        type: "national_park",
        highlight: "Kenya's largest protected area — 22,000 sq km",
        description: "Together, Tsavo East and West form Kenya's largest national park, covering over 22,000 sq km. Tsavo East is known for its red elephants (stained by the red volcanic soil), the Galana River, and the dramatic Lugard Falls. Tsavo West has the Mzima Springs — where hippos and crocodiles can be viewed through an underwater observation chamber — and the Shetani lava flows. Both parks are less crowded than the Mara and offer a more wilderness-style safari.",
      },
      {
        name: "Samburu National Reserve",
        type: "national_park",
        highlight: "Home to the Samburu Special Five",
        description: "A remote reserve in northern Kenya along the Ewaso Ng'iro River, Samburu is famous for its 'Special Five' — species unique to northern Kenya: reticulated giraffe, Grevy's zebra, Beisa oryx, Somali ostrich, and gerenuk. The landscape is semi-arid and dramatic, with doum palms lining the river. Elephants, lions, leopards, and cheetahs are also common. The Samburu people add a rich cultural dimension to the area.",
      },
      {
        name: "Lake Nakuru National Park",
        type: "national_park",
        highlight: "Rhino sanctuary & flamingo lake",
        description: "Centered on a soda lake in the Rift Valley, Lake Nakuru National Park is famous for its flamingo flocks — at peak times, over a million birds turn the lake pink. The park is also one of Kenya's most important rhino sanctuaries, with both black and white rhinos. Lions, leopards, Rothschild's giraffes, and waterbucks are common. The park is compact and easy to cover in a half-day, making it a popular stop on the Rift Valley circuit.",
      },
      {
        name: "Nairobi National Park",
        type: "national_park",
        highlight: "The only game reserve bordering a capital city",
        description: "Just 7km from Nairobi's city center, Nairobi National Park is one of Kenya's most remarkable conservation achievements. The park has lions, leopards, cheetahs, rhinos, buffalos, and over 400 bird species — all with the Nairobi skyline visible in the background. It is the best place in Kenya to see black rhino. Morning game drives before a city meeting are genuinely possible here.",
      },
      {
        name: "Hell's Gate National Park",
        type: "national_park",
        highlight: "Walk and cycle among wildlife — no vehicle needed",
        description: "One of the few Kenyan parks where you can walk and cycle freely among wildlife, Hell's Gate is a dramatic gorge near Lake Naivasha with towering red cliffs, geothermal activity, and abundant wildlife including zebras, giraffes, and buffalos. The gorge walk is one of Kenya's best half-day adventures. The park inspired the landscape of Disney's The Lion King.",
      },
      {
        name: "Mount Kenya National Park",
        type: "national_park",
        highlight: "Africa's second highest peak, UNESCO World Heritage Site",
        description: "Mount Kenya (5,199m) is Africa's second highest mountain and a UNESCO World Heritage Site. The national park around it protects montane forest, moorland, and glacial peaks. Multiple trekking routes lead to the summit, ranging from 3 to 6 days. The mountain is also excellent for wildlife — elephants, buffalos, and bongos live in the forest zone. The Naro Moru and Sirimon routes are the most popular.",
      },
      // Lakes
      {
        name: "Lake Naivasha",
        type: "lake",
        highlight: "Freshwater Rift Valley lake with hippos & flamingos",
        description: "A beautiful freshwater lake in the Rift Valley, Lake Naivasha is surrounded by yellow fever acacia trees and papyrus swamps. Hippos are abundant and can be seen from the shore. Boat trips on the lake are excellent for birdwatching — over 400 species have been recorded. The nearby Crescent Island is a walking sanctuary where you can stroll among giraffes, zebras, and wildebeest. Hell's Gate National Park is a short drive away.",
      },
      {
        name: "Lake Bogoria",
        type: "lake",
        highlight: "Hot springs, geysers & the world's largest flamingo gatherings",
        description: "A remote soda lake in the northern Rift Valley, Lake Bogoria is one of Kenya's most dramatic landscapes. Hot springs and geysers bubble along the shore, and the lake hosts some of the largest flamingo concentrations in the world — often over a million birds. Greater kudus are found in the surrounding scrubland. The lake is less visited than Nakuru and offers a more raw, untouched experience.",
      },
      {
        name: "Lake Turkana",
        type: "lake",
        highlight: "The Jade Sea — world's largest desert lake",
        description: "The world's largest desert lake and largest alkaline lake, Lake Turkana stretches 290km through Kenya's remote north. Known as the Jade Sea for its distinctive green color, the lake is surrounded by volcanic landscapes and is home to the world's largest Nile crocodile population. The area around the lake is one of the most important paleoanthropological sites in the world — early human fossils have been found here dating back 4 million years.",
      },
      {
        name: "Lake Victoria (Kenya)",
        type: "lake",
        highlight: "Africa's largest lake, shared with Uganda & Tanzania",
        description: "Kenya's share of Lake Victoria centers on Kisumu, the country's third largest city. The lake is important for fishing communities and has a rich birdlife including fish eagles, herons, and kingfishers. Boat trips to Rusinga Island and Mfangano Island offer a quieter, more authentic experience. The Kisumu Museum and Impala Sanctuary are worth visiting.",
      },
      // Museums
      {
        name: "Nairobi National Museum",
        type: "museum",
        highlight: "Kenya's premier natural history & cultural museum",
        description: "Kenya's leading museum, located in Nairobi near the city center. The museum has outstanding collections covering natural history, cultural heritage, and contemporary art. The paleontology gallery — with fossils from the Turkana Basin — is world-class. The adjacent Snake Park has live reptiles, and the botanical garden is excellent for birds. The museum also hosts temporary exhibitions and cultural events.",
      },
      {
        name: "Karen Blixen Museum",
        type: "museum",
        highlight: "Home of the Out of Africa author",
        description: "The former home of Danish author Karen Blixen (Isak Dinesen), set in the leafy Nairobi suburb of Karen. Blixen lived here from 1917 to 1931 and wrote Out of Africa about her experiences. The farmhouse has been preserved as it was during her time, with original furniture and personal effects. The surrounding gardens and views toward the Ngong Hills are beautiful. The Giraffe Centre is nearby.",
      },
      {
        name: "Fort Jesus Museum",
        type: "museum",
        highlight: "UNESCO World Heritage Site in Mombasa",
        description: "Built by the Portuguese in 1593 to guard the port of Mombasa, Fort Jesus is one of the finest examples of 16th-century Portuguese military architecture in the world and a UNESCO World Heritage Site. The museum inside documents the fort's turbulent history — it changed hands nine times between the Portuguese, Arabs, and British. The exhibits include Portuguese cannons, Swahili pottery, and Chinese porcelain recovered from shipwrecks.",
      },
      {
        name: "Lamu Museum",
        type: "museum",
        highlight: "Swahili culture in a UNESCO World Heritage town",
        description: "Located in Lamu Old Town — a UNESCO World Heritage Site and one of the oldest continuously inhabited towns in East Africa — the Lamu Museum covers the history and culture of the Swahili coast. Exhibits include traditional dhow models, Swahili furniture, and artifacts from the Indian Ocean trade. The town itself, with its narrow streets, donkeys, and carved wooden doors, is one of Kenya's most atmospheric destinations.",
      },
      // Cities
      {
        name: "Nairobi",
        type: "city",
        highlight: "East Africa's most cosmopolitan city",
        description: "Kenya's capital is East Africa's most dynamic city — a hub of business, culture, and innovation. The restaurant scene is exceptional, from street food in Westlands to fine dining in Karen. The Maasai Market (held at various locations on different days) is excellent for crafts. Key sights include the Giraffe Centre, David Sheldrick Wildlife Trust (elephant orphanage), Karura Forest, and the National Museum. Nairobi is also the base for most Kenya safaris.",
      },
      {
        name: "Mombasa",
        type: "city",
        highlight: "Kenya's ancient coastal city with Swahili heritage",
        description: "Kenya's second city and main port, Mombasa has been a center of Indian Ocean trade for over a thousand years. The Old Town is a labyrinth of narrow streets, carved wooden doors, and mosques that reflects the city's Arab, Indian, and African heritage. Fort Jesus dominates the harbor. The city is the gateway to Kenya's Indian Ocean beaches — Diani, Watamu, and Malindi — which are among the finest in Africa.",
      },
      {
        name: "Kisumu",
        type: "city",
        highlight: "Kenya's lakeside city on Lake Victoria",
        description: "Kenya's third largest city sits on the shores of Lake Victoria in western Kenya. Kisumu has a relaxed, friendly atmosphere and is the gateway to the lake's islands and fishing communities. The Kisumu Museum has good exhibits on the Luo people and the lake's ecology. The Impala Sanctuary on the edge of the city has hippos and impalas. Kisumu is also the base for exploring western Kenya's tea country and the Kakamega Forest.",
      },
      // Landmarks
      {
        name: "Great Rift Valley",
        type: "landmark",
        highlight: "One of the world's great geological features",
        description: "The East African Rift Valley runs the length of Kenya from north to south, creating a dramatic landscape of escarpments, volcanoes, and lakes. The viewpoint at the Rift Valley escarpment near Naivasha offers one of Kenya's most spectacular panoramas. The valley floor is dotted with soda lakes, geothermal activity, and Maasai pastoralists. It is one of the most geologically active regions on earth.",
      },
      {
        name: "Diani Beach",
        type: "beach",
        highlight: "Kenya's finest beach — white sand, turquoise water",
        description: "Located 30km south of Mombasa, Diani is consistently rated one of Africa's best beaches. The beach stretches for 17km with powdery white sand, turquoise water, and a fringing coral reef. Water sports — snorkeling, diving, kitesurfing, and deep-sea fishing — are excellent. The Colobus Conservation project protects the rare Angolan colobus monkeys that live in the coastal forest behind the beach.",
      },
    ],
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
    whyVisit:
      "Tanzania is the safari country that lives up to every expectation. The Serengeti is vast, wild, and genuinely awe-inspiring — a landscape where predator-prey dynamics play out daily across open plains. The Ngorongoro Crater is the world's largest intact volcanic caldera and one of the densest concentrations of wildlife anywhere on earth. Tarangire's ancient baobab trees and elephant herds add a quieter, more intimate dimension. And when the safari is done, Zanzibar is just a short flight away, offering white sand beaches and a fascinating Swahili culture.",
    attractions: [
      // National Parks
      {
        name: "Serengeti National Park",
        type: "national_park",
        highlight: "The Great Migration — 1.5 million wildebeest",
        description: "Tanzania's most iconic park and a UNESCO World Heritage Site, the Serengeti covers 14,763 sq km of open savannah, woodland, and riverine forest. The annual wildebeest migration — over 1.5 million animals moving in a continuous circuit — is one of nature's greatest spectacles. The Serengeti has the highest density of large predators in Africa: lions, leopards, cheetahs, wild dogs, and hyenas. The central Seronera area is excellent year-round; the northern Mara River crossing is best July to October.",
      },
      {
        name: "Ngorongoro Conservation Area",
        type: "national_park",
        highlight: "World's largest intact volcanic caldera",
        description: "The Ngorongoro Crater is the world's largest intact volcanic caldera — 19km wide and 600m deep — and shelters one of the densest concentrations of wildlife on earth. The crater floor has lions, elephants, hippos, flamingos, and one of the best places in Africa to see black rhino. The Conservation Area also includes the Olduvai Gorge, where some of humanity's earliest ancestors were discovered. The Maasai people live within the conservation area alongside the wildlife.",
      },
      {
        name: "Tarangire National Park",
        type: "national_park",
        highlight: "Ancient baobabs & Africa's largest elephant herds",
        description: "Tarangire is one of Tanzania's most underrated parks, famous for its ancient baobab trees and the largest elephant herds in Africa during the dry season. The Tarangire River is a magnet for wildlife when other water sources dry up — elephants, lions, leopards, zebras, and over 550 bird species concentrate along its banks. The park has a more intimate, less-visited feel than the Serengeti and is an excellent addition to any northern circuit.",
      },
      {
        name: "Lake Manyara National Park",
        type: "national_park",
        highlight: "Tree-climbing lions & flamingo-lined shores",
        description: "A compact park at the base of the Rift Valley escarpment, Lake Manyara is famous for its tree-climbing lions — a behavior seen in only a handful of places worldwide. The park has a lush groundwater forest at its entrance, excellent for baboons and blue monkeys, and the lake shore attracts flamingos, pelicans, and storks. The escarpment views from the park are dramatic. Manyara is usually combined with Tarangire and Ngorongoro on the northern circuit.",
      },
      {
        name: "Ruaha National Park",
        type: "national_park",
        highlight: "Tanzania's largest park — wild, remote, exceptional",
        description: "Tanzania's largest national park and one of Africa's best-kept secrets, Ruaha covers over 20,000 sq km of remote wilderness in central Tanzania. The park has one of the largest lion populations in Africa, excellent leopard sightings, wild dogs, and large elephant herds. The Great Ruaha River is the lifeblood of the park, attracting wildlife year-round. Ruaha is far less visited than the northern circuit, making it ideal for travelers seeking a genuine wilderness experience.",
      },
      {
        name: "Selous Game Reserve / Nyerere National Park",
        type: "national_park",
        highlight: "Africa's largest game reserve",
        description: "The Selous (now partly renamed Nyerere National Park) is one of the largest protected areas in Africa, covering over 50,000 sq km in southern Tanzania. The reserve is famous for its boat safaris on the Rufiji River, walking safaris, and exceptional wild dog sightings. The landscape is diverse — miombo woodland, floodplains, and lakes. The southern circuit is far less visited than the north, offering a more exclusive and adventurous safari experience.",
      },
      {
        name: "Mahale Mountains National Park",
        type: "national_park",
        highlight: "Chimpanzee trekking on the shores of Lake Tanganyika",
        description: "One of Tanzania's most remote and spectacular parks, Mahale sits on the eastern shore of Lake Tanganyika and is home to one of the largest habituated chimpanzee communities in the world. The combination of chimp trekking in the forest and swimming in the crystal-clear waters of Lake Tanganyika is unique in Africa. The park is accessible only by boat or light aircraft, which keeps visitor numbers low and the experience exclusive.",
      },
      {
        name: "Gombe National Park",
        type: "national_park",
        highlight: "Where Jane Goodall studied chimpanzees",
        description: "Tanzania's smallest national park, Gombe is famous as the site of Jane Goodall's pioneering chimpanzee research, which began in 1960 and continues today. The habituated chimp communities can be tracked daily. The park sits on the steep forested shores of Lake Tanganyika, and the combination of chimp trekking, swimming, and snorkeling in the lake makes it a unique destination.",
      },
      {
        name: "Kilimanjaro National Park",
        type: "national_park",
        highlight: "Africa's highest peak — 5,895m",
        description: "Mount Kilimanjaro is Africa's highest mountain and one of the world's most iconic peaks. The national park protects the mountain and its surrounding forest. Six trekking routes lead to the summit — Marangu, Machame, Lemosho, Rongai, Umbwe, and Northern Circuit — ranging from 5 to 9 days. The mountain passes through five distinct vegetation zones, from rainforest to arctic summit. No technical climbing experience is required, but good fitness and acclimatization are essential.",
      },
      // Lakes
      {
        name: "Lake Victoria (Tanzania)",
        type: "lake",
        highlight: "World's largest tropical lake",
        description: "Tanzania's share of Lake Victoria includes the Mwanza region and Rubondo Island National Park — a remote island sanctuary with chimpanzees, sitatungas, and excellent fishing. The lake is the source of the Nile and supports millions of people along its shores. The Tanzanian fishing industry is centered on Mwanza, and the lake's sunsets are spectacular.",
      },
      {
        name: "Lake Tanganyika",
        type: "lake",
        highlight: "World's second deepest lake — crystal clear water",
        description: "The world's second deepest lake and one of the oldest, Lake Tanganyika stretches 673km along Tanzania's western border. The lake is famous for its extraordinary clarity and its unique cichlid fish — hundreds of species found nowhere else on earth. Kigoma is the main Tanzanian town on the lake, and from here you can reach Gombe and Mahale national parks. The lake's beaches and snorkeling are exceptional.",
      },
      {
        name: "Lake Natron",
        type: "lake",
        highlight: "Flamingo breeding ground — otherworldly landscape",
        description: "One of Africa's most dramatic landscapes, Lake Natron is a highly alkaline soda lake in northern Tanzania near the Kenyan border. The lake is the only regular breeding site for East Africa's lesser flamingos — up to 2.5 million birds nest here. The surrounding landscape of red-stained water, salt flats, and the active Ol Doinyo Lengai volcano is genuinely otherworldly. The lake is accessible from Arusha and is often combined with a visit to Ngorongoro.",
      },
      {
        name: "Lake Eyasi",
        type: "lake",
        highlight: "Home of the Hadzabe bushmen",
        description: "A shallow soda lake in the Rift Valley south of Ngorongoro, Lake Eyasi is best known as the home of the Hadzabe — one of the last hunter-gatherer communities in Africa. Cultural visits to Hadzabe camps offer a window into a way of life that has changed little in thousands of years. The lake itself attracts flamingos and other waterbirds, and the surrounding landscape is beautiful.",
      },
      // Museums
      {
        name: "National Museum of Tanzania",
        type: "museum",
        highlight: "Home of the Zinjanthropus skull — 1.75 million years old",
        description: "Located in Dar es Salaam, Tanzania's national museum houses one of Africa's most important collections of paleontological and archaeological finds. The star exhibit is the Zinjanthropus (Paranthropus boisei) skull discovered at Olduvai Gorge by Mary Leakey in 1959 — 1.75 million years old. The museum also has excellent ethnographic collections covering Tanzania's 120+ ethnic groups, natural history exhibits, and a section on the country's colonial history.",
      },
      {
        name: "Olduvai Gorge Museum",
        type: "museum",
        highlight: "Cradle of Mankind — 3.6 million year old footprints",
        description: "Located in the Ngorongoro Conservation Area, Olduvai Gorge is one of the most important paleoanthropological sites in the world. The museum at the gorge displays fossils and artifacts from excavations spanning 3.6 million years of human evolution, including the famous Laetoli footprints — the oldest known hominin footprints. Guided tours of the gorge itself are available and give a visceral sense of deep time.",
      },
      {
        name: "Arusha Declaration Museum",
        type: "museum",
        highlight: "Tanzania's political history & the Arusha Declaration",
        description: "Located in Arusha, this museum documents Tanzania's post-independence history, focusing on Julius Nyerere's ujamaa (African socialism) philosophy and the 1967 Arusha Declaration. The museum gives important context for understanding modern Tanzania and is a good complement to the natural history focus of most northern circuit visits.",
      },
      {
        name: "House of Wonders (Zanzibar)",
        type: "museum",
        highlight: "Zanzibar's most iconic building — Swahili history",
        description: "The Beit al-Ajaib (House of Wonders) in Stone Town was the largest and tallest building in East Africa when it was built in 1883. It was the first building in East Africa to have electricity and an elevator. The building now houses a museum of Swahili and Zanzibar history, with exhibits on the island's role in the Indian Ocean trade, the spice trade, and the abolition of slavery.",
      },
      // Cities
      {
        name: "Arusha",
        type: "city",
        highlight: "Safari capital of Tanzania",
        description: "The gateway to Tanzania's northern safari circuit, Arusha is a lively, cosmopolitan city at the foot of Mount Meru. The city has excellent restaurants, a vibrant market, and a good range of accommodation. The Arusha National Park — with giraffes, buffalos, and views of both Kilimanjaro and Meru — is just 30 minutes from the city center. Arusha is also the seat of the East African Community and the International Criminal Tribunal for Rwanda.",
      },
      {
        name: "Dar es Salaam",
        type: "city",
        highlight: "Tanzania's largest city & commercial hub",
        description: "Tanzania's largest city and main port, Dar es Salaam (meaning 'Haven of Peace') is a vibrant, sprawling city on the Indian Ocean coast. The city has excellent seafood restaurants, a lively Kariakoo market, and the National Museum. The Coco Beach area is popular for evening walks and street food. Ferries to Zanzibar depart from the city's port, and the Dar es Salaam Marine Reserve has good snorkeling.",
      },
      {
        name: "Mwanza",
        type: "city",
        highlight: "Tanzania's second city on Lake Victoria",
        description: "Tanzania's second largest city sits on the southern shore of Lake Victoria, surrounded by dramatic granite boulders. The city is the center of Tanzania's fishing industry and the gateway to Rubondo Island National Park. The Bismarck Rock — a distinctive boulder in the lake — is the city's landmark. Mwanza has a relaxed, friendly atmosphere and is a good base for exploring the lake region.",
      },
      // Landmarks
      {
        name: "Mount Kilimanjaro",
        type: "mountain",
        highlight: "Africa's highest peak — the Roof of Africa",
        description: "At 5,895m, Kilimanjaro is Africa's highest mountain and one of the world's most recognizable peaks. The mountain is a free-standing volcanic massif that rises dramatically from the surrounding plains. It can be seen from over 200km away on clear days. The summit — Uhuru Peak — is covered in glaciers that are retreating rapidly due to climate change. Kilimanjaro is one of the world's most accessible high-altitude treks, requiring no technical climbing experience.",
      },
      {
        name: "Zanzibar Archipelago",
        type: "landmark",
        highlight: "Spice Islands of the Indian Ocean",
        description: "The Zanzibar Archipelago — comprising Unguja (Zanzibar Island), Pemba, and several smaller islands — is one of the Indian Ocean's most compelling destinations. The islands have a unique culture shaped by Arab, Persian, Indian, and African influences, and a history as the center of the East African spice and slave trades. Stone Town is a UNESCO World Heritage Site. The beaches, coral reefs, and spice farms make the archipelago a complete destination in its own right.",
      },
    ],
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
    whyVisit:
      "Zanzibar is one of those rare places that genuinely delivers on its reputation. The beaches on the north and east coasts are among the finest in the Indian Ocean — powdery white sand, turquoise water, and a pace of life that encourages you to slow down. Stone Town is a UNESCO World Heritage Site with a labyrinthine old quarter, ornate carved doors, and a fascinating blend of Arab, Persian, Indian, and African influences. The spice farms, dhow cruises, and snorkeling at Mnemba Atoll round out an island that works for honeymooners, families, and solo travelers alike.",
    attractions: [
      // National Parks & Marine Areas
      {
        name: "Jozani Chwaka Bay National Park",
        type: "national_park",
        highlight: "Home of the endemic Zanzibar red colobus monkey",
        description: "Zanzibar's only national park protects a fragment of ancient coral rag forest and mangrove ecosystem in the center of the island. The park is the last stronghold of the Zanzibar red colobus monkey — an endemic subspecies found nowhere else on earth. Habituated troops can be observed at close range on guided walks. The mangrove boardwalk through Chwaka Bay is excellent for birdwatching and gives a fascinating insight into the island's coastal ecology.",
      },
      {
        name: "Mnemba Atoll Marine Conservation Area",
        type: "national_park",
        highlight: "Best snorkeling & diving in the Indian Ocean",
        description: "A small coral atoll off the northeast coast of Zanzibar, Mnemba is one of the finest marine environments in the Indian Ocean. The protected waters around the atoll are home to spinner dolphins, green turtles, hawksbill turtles, and an extraordinary diversity of reef fish and coral. Snorkeling and diving trips from the north and east coast beaches are available daily. The atoll itself is a private island, but the surrounding waters are accessible to all.",
      },
      {
        name: "Chumbe Island Coral Park",
        type: "national_park",
        highlight: "One of the world's best-managed marine sanctuaries",
        description: "A small island south of Zanzibar City, Chumbe Island is home to one of the most pristine coral reefs in the world and a rare coral rag forest. The island is a private nature reserve and marine sanctuary with strictly limited visitor numbers. Day trips include snorkeling on the reef, forest walks to see coconut crabs and rare birds, and visits to a historic lighthouse. Overnight stays in eco-bungalows are available.",
      },
      // Beaches
      {
        name: "Nungwi Beach",
        type: "beach",
        highlight: "Zanzibar's most famous beach — white sand, calm water",
        description: "Located at the northern tip of Zanzibar, Nungwi is the island's most popular beach destination. The beach has powdery white sand, calm turquoise water (protected from tides by the reef), and a lively atmosphere with beach bars, restaurants, and water sports. The traditional dhow-building village at Nungwi is one of the last places in East Africa where wooden dhows are still made by hand. The natural turtle aquarium at Mnarani is a short walk from the beach.",
      },
      {
        name: "Kendwa Beach",
        type: "beach",
        highlight: "Full moon parties & stunning sunsets",
        description: "Just south of Nungwi, Kendwa is a quieter, more relaxed beach with excellent swimming at all tides. The beach is famous for its full moon parties — monthly beach parties that attract travelers from across the island. The sunsets from Kendwa are among the best in Zanzibar. A handful of boutique hotels and beach bars line the shore.",
      },
      {
        name: "Paje Beach",
        type: "beach",
        highlight: "East coast kitesurfing capital",
        description: "A long, beautiful beach on Zanzibar's east coast, Paje is the island's kitesurfing hub. The consistent southeast trade winds and shallow lagoon at low tide create ideal conditions for kitesurfing and windsurfing. The beach has a laid-back, youthful atmosphere with beach bars, yoga studios, and a growing number of boutique guesthouses. At high tide, the water is excellent for swimming.",
      },
      {
        name: "Matemwe Beach",
        type: "beach",
        highlight: "Quiet, unspoiled beach facing Mnemba Atoll",
        description: "A long, relatively undeveloped beach on the northeast coast, Matemwe faces directly toward Mnemba Atoll and is one of the best bases for snorkeling and diving trips to the atoll. The beach has a traditional fishing village atmosphere, with dhows pulled up on the sand and seaweed farmers working the shallows at low tide. A handful of excellent boutique lodges make it a good choice for a quieter, more authentic Zanzibar experience.",
      },
      {
        name: "Kizimkazi Beach",
        type: "beach",
        highlight: "Dolphin watching on the southern coast",
        description: "A small fishing village on Zanzibar's southern tip, Kizimkazi is the best place in Zanzibar to swim with wild dolphins. Spinner and bottlenose dolphins are resident in the waters offshore, and boat trips to snorkel with them depart daily. The village also has one of the oldest mosques in East Africa — the Kizimkazi Mosque, dating to the 12th century.",
      },
      // Museums & Culture
      {
        name: "Palace Museum (Beit el-Sahel)",
        type: "museum",
        highlight: "Former palace of the Sultans of Zanzibar",
        description: "The former palace of the Sultans of Zanzibar, built in the 1880s and now a museum. The building overlooks the harbor in Stone Town and houses royal furniture, personal effects, and exhibits on the history of the Zanzibar Sultanate. The rooftop terrace has excellent views over the harbor and the old town. The palace was the scene of the 1964 Zanzibar Revolution, which ended the Sultanate.",
      },
      {
        name: "House of Wonders (Beit al-Ajaib)",
        type: "museum",
        highlight: "Zanzibar's most iconic building",
        description: "The most imposing building in Stone Town, the House of Wonders was built in 1883 as a ceremonial palace for Sultan Barghash. It was the first building in East Africa to have electricity and an elevator. The building now houses a museum of Swahili and Zanzibar history, with exhibits on the island's role in the Indian Ocean trade, the spice trade, and the abolition of slavery. The building's ornate facade and clock tower are Stone Town's most recognizable landmarks.",
      },
      {
        name: "Slave Market Memorial & Anglican Cathedral",
        type: "museum",
        highlight: "Site of East Africa's last open slave market",
        description: "The Anglican Cathedral in Stone Town was built in 1873 on the site of the last open slave market in East Africa, closed by Sultan Barghash under British pressure in the same year. The cathedral's altar stands on the exact spot where the whipping post stood. The underground slave chambers — where enslaved people were held before sale — can be visited. The memorial is one of the most important historical sites in East Africa.",
      },
      {
        name: "Zanzibar Spice Farms",
        type: "cultural",
        highlight: "The original Spice Islands — cloves, vanilla, nutmeg",
        description: "Zanzibar was once the world's largest producer of cloves and remains famous for its spice farms. Guided tours of working spice farms in the island's interior are one of Zanzibar's most popular experiences. Visitors can see, smell, and taste cloves, vanilla, cinnamon, nutmeg, cardamom, black pepper, and dozens of other spices growing in their natural environment. Most tours include a traditional Zanzibari lunch cooked with the farm's spices.",
      },
      {
        name: "Forodhani Gardens Night Market",
        type: "cultural",
        highlight: "Zanzibar's famous waterfront street food market",
        description: "Every evening, the Forodhani Gardens on Stone Town's waterfront transform into one of East Africa's most atmospheric street food markets. Vendors set up grills and stalls selling Zanzibar pizza (a local specialty), fresh seafood, sugarcane juice, and Zanzibari mix (a spiced chickpea snack). The market is a social hub for locals and travelers alike, and the setting — with dhows in the harbor and the old fort lit up behind — is magical.",
      },
      // Cities
      {
        name: "Stone Town",
        type: "city",
        highlight: "UNESCO World Heritage Site — Swahili culture",
        description: "The historic heart of Zanzibar City and a UNESCO World Heritage Site, Stone Town is one of the most atmospheric urban environments in Africa. The old quarter is a labyrinth of narrow streets, carved wooden doors, mosques, and bazaars that has changed little in centuries. Key sights include the Old Fort, the House of Wonders, the Slave Market Memorial, the Darajani Market, and Freddie Mercury's birthplace. The best way to explore is to get lost in the streets.",
      },
      // Wildlife
      {
        name: "Zanzibar Red Colobus Monkey",
        type: "wildlife",
        highlight: "Endemic primate found only in Zanzibar",
        description: "The Zanzibar red colobus (Piliocolobus kirkii) is one of Africa's rarest primates, found only on Zanzibar Island. The species is classified as Endangered, with a population of around 3,000. The best place to see them is Jozani Forest, where habituated troops can be observed at close range. The monkeys are distinctive for their red-brown backs, white undersides, and tufted ears.",
      },
      {
        name: "Dolphin & Turtle Watching",
        type: "wildlife",
        highlight: "Wild dolphins & nesting sea turtles",
        description: "Zanzibar's waters are home to spinner and bottlenose dolphins, which can be seen year-round off the southern coast near Kizimkazi. Green and hawksbill turtles nest on several of Zanzibar's beaches, and snorkeling with turtles is possible at Mnemba Atoll and Chumbe Island. The Zanzibar Turtle Conservation Program runs a hatchery at Nungwi.",
      },
      // Landmarks
      {
        name: "Pemba Island",
        type: "landmark",
        highlight: "The 'Green Island' — world-class diving, off the beaten path",
        description: "Zanzibar's lesser-known sister island, Pemba is a lush, hilly island 80km north of Zanzibar. The island is famous for its extraordinary diving — the walls and channels around Pemba are considered among the best dive sites in the world. The island is also known for its clove plantations, traditional dhow sailing, and a way of life that has changed little in generations. Pemba is for travelers who want to go beyond the standard Zanzibar experience.",
      },
    ],
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
