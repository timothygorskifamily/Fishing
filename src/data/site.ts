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

export type FishSpecies = {
  name: string;
  aka?: string;
  image: string;
  specimenImage?: string;
  // Optional licensed 3D model file. Put owned/purchased/commercial-safe GLB/GLTF
  // files in /public/models/fish/ and reference them like "/models/fish/flounder.glb".
  modelSrc?: string;
  modelCredit?: string;
  modelLicense?: string;
  modelSourceUrl?: string;
  category: string;
  typicalSize: string;
  highSize: string;
  season: string;
  notes: string;
};

export type NavLink = {
  label: string;
  href: string;
};

const croakerScannedFishModel = {
  modelSrc: "/models/fish/artec-scanned-fish.glb",
  modelCredit: "Generic fish scan by Artec 3D, used as a real scanned reference model until a species-exact croaker model is licensed",
  modelLicense: "CC BY 3.0",
  modelSourceUrl: "https://www.artec3d.com/3d-models/fish"
} as const;

// Launch checklist: confirm the Cal.com link, policies, rates, fish-size language,
// and all imagery with the captain before publishing. Fish photos copied from the
// current Ocean City Guide Service site can be replaced later with newer photos.
export const site = {
  businessName: "Ocean City Guide Service",
  captainName: "Captain Kyle Pelino",
  tagline: "Ocean City Maryland inshore fishing, bay trips, and SeaVee charter days.",
  location: "Ocean City, Maryland",
  shortLocation: "Ocean City, MD",
  boatName: "Refitted 29' SeaVee Tower Boat",
  boatDescription:
    "A completely refitted 29' 2006 SeaVee tower boat set up as a versatile fishing platform for Ocean City waters.",
  boatLength: "29'",
  boatYear: "2006",
  boatMake: "SeaVee",
  phone: "856-357-3113",
  smsPhone: "856-357-3113",
  email: "Kyle@OCGuideService.com",
  marinaName: "Ocean City Guide Service",
  marinaAddress: "12940 Inlet Isle Lane, Ocean City, MD 21842",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=12940%20Inlet%20Isle%20Lane%20Ocean%20City%20MD%2021842",
  instagramUrl: "https://www.instagram.com/17841402110744634/",
  facebookUrl: "https://www.facebook.com/OCMDguideservice",
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
      name: "Inshore / Bay Fishing",
      slug: "inshore-bay",
      eyebrow: "Family-friendly bay trip",
      duration: "4 hours",
      price: "$575",
      bestFor: "Families, newer anglers, flounder crews, and groups who want a classic Ocean City bay trip.",
      targetSpecies: ["Flounder", "Bluefish", "Rockfish", "Tautog", "Seasonal bay species"],
      included: ["Up to 6 anglers", "Bait and tackle included", "No license required per current trip copy", "$100 each additional hour"],
      description:
        "A focused inshore trip around the bay, inlet, and nearby Ocean City water. The current guide-service copy lists bait, tackle, and no license required.",
      image: "fish-flounder.jpg"
    },
    {
      name: "Evening Bay Trip",
      slug: "evening-bay",
      eyebrow: "Short evening option",
      duration: "2 hours",
      price: "$325",
      bestFor: "Vacation crews, families, and quick sunset windows when a shorter trip is the right fit.",
      targetSpecies: ["Flounder", "Bluefish", "Rockfish", "Croaker", "Seasonal bay species"],
      included: ["Up to 6 anglers", "Bait and tackle included", "No license required per current trip copy", "Captain-confirmed timing"],
      description:
        "A simple two-hour evening charter for groups who want time on the water without committing to a full half-day.",
      image: "sunset.jpg"
    },
    {
      name: "Inshore Wreck Fishing",
      slug: "inshore-wreck",
      eyebrow: "Structure-focused trip",
      duration: "5 hours",
      price: "$925",
      bestFor: "Anglers who want to fish productive structure and target heavier inshore species.",
      targetSpecies: ["Tautog", "Sheepshead", "Flounder", "Bluefish", "Seasonal wreck species"],
      included: ["Up to 4 anglers", "7am-12pm current trip window", "Bait and tackle included", "$100 each additional hour"],
      description:
        "A longer inshore structure trip shaped around weather, tide, season, and what is biting around Ocean City.",
      image: "fish-tautog.jpg"
    },
    {
      name: "Custom Private Charter",
      slug: "custom-private",
      eyebrow: "Call to plan",
      duration: "Custom duration",
      price: "Call for seasonal pricing",
      bestFor: "Private groups with specific goals, bowfishing questions, seasonal targets, or flexible timing.",
      targetSpecies: ["Flounder", "Tog", "Bluefish", "Rockfish", "Drum", "Trout", "Bowfishing options"],
      included: ["Private planning call", "Flexible itinerary", "Simple booking request", "Final captain confirmation"],
      description:
        "Start with your preferred date and fishing goals. The captain will confirm the best trip style, timing, and final details directly.",
      image: "fish-bowfishing.jpg"
    }
  ] satisfies TripType[],
  faqItems: [
    {
      question: "How do I book?",
      answer:
        "Start on the booking page, choose an available date, and send your request through the Cal.com calendar. You can also call Captain Kyle at 856-357-3113 to confirm trip fit, timing, weather, and final arrangements."
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
        "Yes, the current guide-service copy emphasizes family-friendly bay trips. Confirm ages, group size, weather, and the best trip style with the captain before booking."
    },
    {
      question: "Do I need a fishing license?",
      answer:
        "The current trip copy says no license is required for the listed charter trips. Confirm final legal wording and current requirements with the captain before launch."
    },
    {
      question: "Where do we leave from?",
      answer:
        "The current business address is 12940 Inlet Isle Lane, Ocean City, MD 21842. Confirm exact parking, dock, and meeting details with the captain after booking."
    },
    {
      question: "What fish can we target?",
      answer:
        "Common Ocean City Guide Service targets include flounder, tautog, bluefish, rockfish, drum, trout, sheepshead, croakers, and seasonal bowfishing options. Targets vary by season, regulations, weather, and conditions."
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Use this as placeholder policy copy only. Final cancellation, deposit, weather, and rescheduling language should be approved by the captain before launch."
    }
  ] satisfies FAQItem[],
  fishSpecies: [
    {
      name: "Flounder",
      aka: "Summer flounder",
      image: "fish-flounder.jpg",
      specimenImage: "specimen-flounder.png",
      category: "Bay / inlet",
      typicalSize: "16-22 in / 1-4 lb",
      highSize: "26-30+ in / 6-10+ lb",
      season: "Spring through fall windows",
      notes: "A signature Ocean City inshore target and a natural fit for family bay trips."
    },
    {
      name: "Rockfish",
      aka: "Striped bass",
      image: "fish-rockfish.jpg",
      specimenImage: "specimen-rockfish.png",
      category: "Inshore / inlet / seasonal",
      typicalSize: "20-36 in / 3-20 lb",
      highSize: "40+ in / 30-50+ lb",
      season: "Seasonal runs and condition-dependent bites",
      notes: "Powerful, iconic Maryland fish. Availability depends heavily on season and regulations."
    },
    {
      name: "Bluefish",
      image: "fish-bluefish.jpg",
      specimenImage: "specimen-bluefish.png",
      category: "Bay / inlet / nearshore",
      typicalSize: "18-30 in / 2-8 lb",
      highSize: "35+ in / 10-18 lb",
      season: "Warmer-water seasonal action",
      notes: "Fast, aggressive, and a great light-tackle target when they are pushing bait."
    },
    {
      name: "Tautog",
      aka: "Tog",
      image: "fish-tautog.jpg",
      specimenImage: "specimen-tautog.png",
      category: "Structure / wreck",
      typicalSize: "15-22 in / 2-7 lb",
      highSize: "25+ in / 10-20 lb",
      season: "Cool-water structure bite",
      notes: "A hard-fighting structure fish that rewards patience, feel, and precise boat positioning."
    },
    {
      name: "Sheepshead",
      image: "fish-sheepshead.jpg",
      specimenImage: "specimen-sheepshead.png",
      category: "Structure / inlet",
      typicalSize: "14-22 in / 2-8 lb",
      highSize: "25+ in / 10-15+ lb",
      season: "Summer structure windows",
      notes: "A sharp-eyed bait stealer with serious shoulders when larger fish are around pilings and structure."
    },
    {
      name: "Red Drum",
      aka: "Redfish",
      image: "fish-red-drum.jpg",
      specimenImage: "specimen-red-drum.png",
      category: "Inshore / seasonal",
      typicalSize: "18-32 in / 3-15 lb",
      highSize: "40+ in / 30-50+ lb",
      season: "Seasonal drum windows",
      notes: "A memorable inshore target when the right water, bait, and timing line up."
    },
    {
      name: "Croaker",
      image: "fish-croaker.jpg",
      specimenImage: "specimen-croaker.png",
      modelSrc: croakerScannedFishModel.modelSrc,
      modelCredit: croakerScannedFishModel.modelCredit,
      modelLicense: croakerScannedFishModel.modelLicense,
      modelSourceUrl: croakerScannedFishModel.modelSourceUrl,
      category: "Bay / inshore",
      typicalSize: "9-14 in / under 1-2 lb",
      highSize: "16+ in / 2-3+ lb",
      season: "Warm-season bay action",
      notes: "A classic bay species and a fun target for relaxed, family-friendly fishing."
    },
    {
      name: "Bowfishing",
      aka: "Rays and seasonal targets",
      image: "fish-bowfishing.jpg",
      specimenImage: "specimen-ray.png",
      modelSrc: "",
      category: "Specialty trip",
      typicalSize: "Varies by target",
      highSize: "Large rays can be heavy, memorable fish",
      season: "Seasonal, conditions-based",
      notes: "A specialty option from the current guide-service offering. Confirm target species and legality with the captain."
    }
  ] satisfies FishSpecies[],
  galleryImages: [
    {
      src: "hero-boat.jpg",
      alt: "Center-console fishing boat running offshore near Ocean City, Maryland",
      title: "Boat-forward charter days",
      caption: "The refitted 29' SeaVee running out of Ocean City.",
      category: "Boat"
    },
    {
      src: "boat-running.jpg",
      alt: "Fishing charter boat running across clean coastal water",
      title: "Running shot",
      caption: "Real OCGS SeaVee reference photo from the current site.",
      category: "Boat"
    },
    {
      src: "boat-tower.jpg",
      alt: "Tower detail on a center-console fishing boat",
      title: "Tower visibility",
      caption: "Tower, upper station, rod-holder, and sightline reference.",
      category: "Boat"
    },
    {
      src: "deck.jpg",
      alt: "Clean fishing deck on a private charter boat",
      title: "Clean fishable deck",
      caption: "Cockpit, transom, twin outboards, and open deck reference.",
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
    title: "Ocean City MD Fishing Charter | Ocean City Guide Service",
    description:
      "Ocean City, Maryland inshore fishing charters aboard a refitted 29' SeaVee tower boat. Check availability, review trips, and request your date.",
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
