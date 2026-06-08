export type TripType = {
  name: string;
  slug: string;
  eyebrow: string;
  duration: string;
  price: string;
  bestFor: string;
  targetSpecies: string[];
  included: string[];
  description: string;
  image: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  category: string;
};

export type NavLink = {
  label: string;
  href: string;
};

// Launch checklist: replace the placeholder name, captain, contact info, Cal.com link,
// social links, marina details, rates, policies, and gallery photos before going live.
export const site = {
  businessName: "Ocean City SeaVee Charters",
  captainName: "Captain Name",
  tagline: "Private fishing charters from Ocean City, Maryland.",
  location: "Ocean City, Maryland",
  shortLocation: "Ocean City, MD",
  boatName: "29' SeaVee Tower Boat",
  boatDescription:
    "A 29' 2006 SeaVee tower boat set up for focused private fishing days around Ocean City waters.",
  boatLength: "29'",
  boatYear: "2006",
  boatMake: "SeaVee",
  phone: "410-555-0123",
  smsPhone: "410-555-0123",
  email: "captain@example.com",
  marinaName: "Ocean City, MD",
  marinaAddress: "Ocean City, MD",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ocean%20City%20MD",
  instagramUrl: "#",
  facebookUrl: "#",
  youtubeUrl: "#",
  tiktokUrl: "#",
  calComLink: "your-cal-username/fishing-charter",
  calComEventSlug: "fishing-charter",
  primaryCTA: "Check Availability",
  secondaryCTA: "Call/Text Captain",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Trips", href: "/trips/" },
    { label: "Boat", href: "/boat/" },
    { label: "Gallery", href: "/gallery/" },
    { label: "FAQ", href: "/faq/" },
    { label: "Contact", href: "/contact/" }
  ] satisfies NavLink[],
  tripTypes: [
    {
      name: "Inshore / Bay Trip",
      slug: "inshore-bay",
      eyebrow: "Protected water option",
      duration: "Half-day placeholder",
      price: "Call for seasonal pricing",
      bestFor: "Families, newer anglers, light-tackle days, and shorter windows.",
      targetSpecies: ["Flounder", "Striped bass", "Bluefish", "Seasonal bay species"],
      included: ["Private charter", "Trip planning", "Fishing gear placeholder", "Cooler space"],
      description:
        "A clean, flexible Ocean City option for fishing the bay, inlet, and nearby inshore waters when conditions line up.",
      image: "catch-1.jpg"
    },
    {
      name: "Nearshore Wreck & Reef Trip",
      slug: "nearshore-wreck-reef",
      eyebrow: "Structure-focused fishing",
      duration: "Half or full-day placeholder",
      price: "Call for seasonal pricing",
      bestFor: "Anglers who want a bigger-water feel without committing to a long offshore run.",
      targetSpecies: ["Sea bass", "Tautog", "Flounder", "Seasonal wreck species"],
      included: ["Private boat", "Captain-guided plan", "Bait/tackle placeholder", "Catch care placeholder"],
      description:
        "Fish productive nearshore structure, reefs, and wreck zones around Ocean City based on season, weather, and captain recommendation.",
      image: "catch-2.jpg"
    },
    {
      name: "Offshore / Bluewater Trip",
      slug: "offshore-bluewater",
      eyebrow: "Longer range option",
      duration: "Full-day placeholder",
      price: "Call for seasonal pricing",
      bestFor: "Experienced crews looking for a serious private run when the forecast and season are right.",
      targetSpecies: ["Tuna", "Mahi", "Marlin", "Seasonal pelagics"],
      included: ["Private charter", "Custom timing", "Offshore plan placeholder", "Weather review"],
      description:
        "A custom offshore day shaped around conditions, seasonal fish movement, and what the captain believes gives the crew the best shot.",
      image: "catch-3.jpg"
    },
    {
      name: "Custom Private Charter",
      slug: "custom-private",
      eyebrow: "Built around your crew",
      duration: "Custom duration",
      price: "Call for seasonal pricing",
      bestFor: "Private groups with specific goals, timing, or a flexible target list.",
      targetSpecies: ["Seasonal target list", "Captain recommendation", "Weather-dependent options"],
      included: ["Private planning call", "Flexible itinerary", "Simple booking request", "Final captain confirmation"],
      description:
        "Start with your preferred date and fishing goals. The captain will confirm the best trip style, timing, and final details directly.",
      image: "sunset.jpg"
    }
  ] satisfies TripType[],
  faqItems: [
    {
      question: "How do I book?",
      answer:
        "Start on the booking page, choose an available date, and send your request through the Cal.com calendar. The captain will confirm trip details, departure timing, weather, and final arrangements directly."
    },
    {
      question: "Is payment collected online?",
      answer:
        "No payment is collected on this website. Final payment details, deposits if used, and any remaining balance should be confirmed directly with the captain."
    },
    {
      question: "What happens after I request a date?",
      answer:
        "Your request reserves availability pending captain confirmation. The captain will review conditions, schedule details, and trip fit before the date is fully confirmed."
    },
    {
      question: "What should I bring?",
      answer:
        "Bring weather-appropriate layers, polarized sunglasses, non-marking shoes, sun protection, snacks, drinks, and any personal items you need. Confirm final packing details with the captain before the trip."
    },
    {
      question: "What about weather?",
      answer:
        "Weather and sea conditions control every trip. The captain makes the final call on whether conditions are safe and fishable, and will discuss rescheduling options when needed."
    },
    {
      question: "Can kids come?",
      answer:
        "Family trips may be available depending on the age of the children, the trip style, and the weather. Confirm the crew makeup with the captain before booking."
    },
    {
      question: "Do I need a fishing license?",
      answer:
        "License rules can vary by trip type and current regulations. Confirm the final legal requirements with the captain before your trip."
    },
    {
      question: "Where do we leave from?",
      answer:
        "The placeholder departure location is Ocean City, Maryland. Replace the marina details in the site config once the exact meeting location is ready to publish."
    },
    {
      question: "What fish can we target?",
      answer:
        "Targets vary by season, regulations, weather, and conditions. Common placeholder categories include bay species, wreck and reef species, and offshore pelagics."
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Use this as placeholder policy copy only. Final cancellation, deposit, weather, and rescheduling language should be approved by the captain before launch."
    }
  ] satisfies FAQItem[],
  galleryImages: [
    {
      src: "hero-boat.jpg",
      alt: "Center-console fishing boat running offshore near Ocean City, Maryland",
      title: "Boat-forward charter days",
      caption: "Replace with a real running shot of the boat.",
      category: "Boat"
    },
    {
      src: "boat-running.jpg",
      alt: "Fishing charter boat running across clean coastal water",
      title: "Running shot",
      caption: "Add an actual photo of the SeaVee underway.",
      category: "Boat"
    },
    {
      src: "boat-tower.jpg",
      alt: "Tower detail on a center-console fishing boat",
      title: "Tower visibility",
      caption: "Swap in a detail shot of the tower and sightlines.",
      category: "Boat"
    },
    {
      src: "deck.jpg",
      alt: "Clean fishing deck on a private charter boat",
      title: "Clean fishable deck",
      caption: "Use a real cockpit or console shot here.",
      category: "Deck"
    },
    {
      src: "catch-1.jpg",
      alt: "Fresh seasonal catch on an Ocean City fishing charter",
      title: "Inshore report",
      caption: "Replace with an actual bay or inlet catch photo.",
      category: "Fishing"
    },
    {
      src: "catch-2.jpg",
      alt: "Nearshore fishing catch from reef or wreck grounds",
      title: "Wreck and reef day",
      caption: "Replace with a nearshore catch photo.",
      category: "Fishing"
    },
    {
      src: "catch-3.jpg",
      alt: "Offshore fishing catch on a private charter",
      title: "Bluewater window",
      caption: "Replace with an offshore trip photo.",
      category: "Fishing"
    },
    {
      src: "sunset.jpg",
      alt: "Sunset over Ocean City Maryland water after a fishing charter",
      title: "Back at the dock",
      caption: "Use a real sunset, inlet, or dock photo.",
      category: "Ocean City"
    }
  ] satisfies GalleryImage[],
  seo: {
    title: "Ocean City MD Fishing Charter | Ocean City SeaVee Charters",
    description:
      "Private Ocean City, Maryland fishing charters aboard a 29' SeaVee tower boat. Check availability, review trip options, and request your date.",
    image: "hero-boat.jpg",
    keywords: [
      "Ocean City MD fishing charter",
      "Ocean City Maryland private fishing charter",
      "SeaVee fishing charter",
      "offshore fishing Ocean City MD",
      "private boat charter Ocean City MD"
    ]
  }
} as const;
