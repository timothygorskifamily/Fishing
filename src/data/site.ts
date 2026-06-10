export type TripType = {
  name: string;
  slug: string;
  eyebrow: string;
  duration: string;
  times: string;
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
  checklist?: readonly WhatToBringItem[];
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
  imageFrames?: readonly string[];
  spinFrames?: readonly string[];
  category: string;
  typicalSize: string;
  highSize: string;
  season: string;
  notes: string;
};

export type TripStyleDetail = {
  title: string;
  copy: string;
};

export type CharterPolicy = {
  title: string;
  copy: string;
};

export type TripGroup = {
  title: string;
  copy: string;
  tripSlugs: string[];
};

export type WhatToBringItem = {
  title: string;
  copy: string;
};

export type Testimonial = {
  label: string;
  heading: string;
  reviewer: string;
  context: string;
  rating?: number;
  sourceLabel?: string;
  sourceUrl?: string;
};

export type DirectionsDetail = {
  title: string;
  copy: string;
};

export type FishingReportHighlight = {
  title: string;
  area: string;
  image: string;
  targetSpecies: string[];
  tripSlugs: string[];
  conditions: string;
  tripFit: string;
};

export type NavLink = {
  label: string;
  href: string;
};

const standardIncluded = [
  "Up to 6 guests",
  "License, bait, and tackle provided",
  "Please remember to tip the mate"
];

const whatToBringItems = [
  {
    title: "Weather layers",
    copy: "Bring light layers or rain gear so you stay comfortable if wind, spray, or temperature changes."
  },
  {
    title: "Sun protection",
    copy: "Pack sunscreen, a hat, and polarized sunglasses for bright water and long days outside."
  },
  {
    title: "Shoes",
    copy: "Wear non-marking boat shoes or sneakers with good grip."
  },
  {
    title: "Food and drinks",
    copy: "Bring snacks, lunch for longer trips, and drinks in a soft cooler or easy-to-stow bag."
  },
  {
    title: "Soft cooler",
    copy: "Use a small soft cooler or easy-to-stow bag for food and drinks so deck space stays clear."
  },
  {
    title: "Leave at home",
    copy: "License, bait, rods, reels, and tackle are provided for fishing trips."
  }
] satisfies WhatToBringItem[];

const fishSpinFrames = (slug: string) =>
  Array.from(
    { length: 8 },
    (_, index) => `fish-spin/${slug}/${slug}-frame-${String(index + 1).padStart(2, "0")}.png`
  );

const fishPhotoCropFrames = (slug: string) =>
  Array.from(
    { length: 4 },
    (_, index) => `fish-photo-crops/${slug}/${slug}-crop-${String(index + 1).padStart(2, "0")}.png`
  );

export const site = {
  businessName: "Ocean City Guide Service",
  captainName: "Captain Kyle Pelino",
  tagline: "Private bay, wreck, inshore trolling, shark fishing, and sunset trips in Ocean City, Maryland.",
  location: "Ocean City, Maryland",
  shortLocation: "Ocean City, MD",
  boatName: "29' SeaVee Center Console",
  boatDescription:
    "You will be fishing aboard a 29 foot SeaVee center console, the perfect fishing and comfort vessel for all ages that want to come along.",
  boatLength: "29'",
  boatYear: "2006",
  boatMake: "SeaVee",
  logoImage: "brand/ocean-city-guide-service-logo.png",
  captainDescription:
    "Captain Kyle is equipped with his 6 pack U.S. Coast Guard Captains license. He has been professionally fishing for the last 8 years and has plenty of knowledge when it comes to the Ocean City Maryland fishery. From offshore trips to the wrecks to inshore fishing in the bay, captain Kyle will use his experience and skill to give his charters an unforgettable day on the water.",
  charterIncludedNote:
    "All charters accommodate up to 6 guests. License, bait, and tackle are provided for each trip option as well. Please remember to tip the mate.",
  phone: "856-357-3113",
  smsPhone: "856-357-3113",
  email: "Kyle@OCGuideService.com",
  marinaName: "Ocean City Guide Service",
  marinaAddress: "12940 Inlet Isle Lane, Ocean City, MD 21842",
  marinaDirectionsNote:
    "Plan to meet at 12940 Inlet Isle Lane, Ocean City, MD 21842. Captain Kyle confirms exact parking, dock, and slip details before your trip.",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=12940%20Inlet%20Isle%20Lane%20Ocean%20City%20MD%2021842",
  instagramUrl: "https://www.instagram.com/p/DZTXlOGn4Ep/",
  facebookUrl: "https://www.facebook.com/OCguideservice/",
  instagramImage: "social/instagram-card.png",
  facebookImage: "social/facebook-card.png",
  youtubeUrl: "https://www.youtube.com/watch?v=Q10Z3CSnYoQ&t=39s",
  tiktokUrl: "#",
  calComLink: "your-cal-username/fishing-charter",
  calComEventSlug: "fishing-charter",
  primaryCTA: "Check Availability",
  secondaryCTA: "Call/Text Captain",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Trips", href: "/trips/" },
    { label: "Fishing Report", href: "/fishing-report/" },
    { label: "Boat", href: "/boat/" },
    { label: "Gallery", href: "/gallery/" },
    { label: "FAQ", href: "/faq/" },
    { label: "Contact", href: "/contact/" }
  ] satisfies NavLink[],
  tripTypes: [
    {
      name: "4 hr Bay Fishing Trip",
      slug: "4-hour-bay-fishing",
      eyebrow: "Bay fishing",
      duration: "4 hours",
      times: "8am-12pm or 1pm-5pm",
      price: "$600",
      bestFor: "Families, first-time anglers, and groups who want a classic half-day bay fishing trip.",
      targetSpecies: ["Flounder", "Rockfish", "Bluefish", "Tautog", "Sheepshead"],
      included: [...standardIncluded, "Morning or afternoon departure"],
      description:
        "Fish the bay for flounder, rockfish, bluefish, tautog, sheepshead, and the best seasonal bite.",
      image: "family-bay-catch.jpg"
    },
    {
      name: "5 hr Bay Fishing Trip",
      slug: "5-hour-bay-fishing",
      eyebrow: "Bay fishing",
      duration: "5 hours",
      times: "7am-12pm",
      price: "$700",
      bestFor: "Crews who want extra time in the bay and a full morning window.",
      targetSpecies: ["Flounder", "Rockfish", "Bluefish", "Tautog", "Sheepshead"],
      included: [...standardIncluded, "Morning departure"],
      description:
        "A longer bay trip with more time to work productive areas and adjust with tide, season, and conditions.",
      image: "family-bay-catch.jpg"
    },
    {
      name: "2 hr Evening Bay Fishing Trip",
      slug: "2-hour-evening-bay-fishing",
      eyebrow: "Evening bay",
      duration: "2 hours",
      times: "6pm-8pm",
      price: "$350",
      bestFor: "Vacation crews, kids, and groups who want a short evening fishing trip.",
      targetSpecies: ["Flounder", "Rockfish", "Bluefish", "Tautog", "Sheepshead"],
      included: [...standardIncluded, "Evening departure"],
      description:
        "A quick evening bay trip for guests who want time on the water without booking a full half-day.",
      image: "dock-mixed-catch.jpg"
    },
    {
      name: "6 hr Wreck Fishing Trip",
      slug: "6-hour-wreck-fishing",
      eyebrow: "Wreck fishing",
      duration: "6 hours",
      times: "6am-12pm or 1pm-7pm",
      price: "$1,000",
      bestFor: "Anglers who want to fish structure and target bottom fish around the wrecks.",
      targetSpecies: ["Black sea bass", "Flounder", "Tautog", "Triggerfish", "Bluefish"],
      included: [...standardIncluded, "Morning or afternoon departure"],
      description:
        "A structure-focused wreck trip targeting black sea bass, flounder, tautog, and seasonal bycatch.",
      image: "charter-wreck-catch.jpg"
    },
    {
      name: "8 hr Wreck Fishing Trip",
      slug: "8-hour-wreck-fishing",
      eyebrow: "Wreck fishing",
      duration: "8 hours",
      times: "6am-2pm",
      price: "$1,200",
      bestFor: "Groups who want a fuller day of wreck fishing with more time to work different pieces.",
      targetSpecies: ["Black sea bass", "Flounder", "Tautog", "Triggerfish", "Bluefish"],
      included: [...standardIncluded, "Full morning trip"],
      description:
        "An extended wreck trip with more fishing time for structure species and changing conditions.",
      image: "charter-wreck-catch.jpg"
    },
    {
      name: "10 hr Wreck Fishing Trip",
      slug: "10-hour-wreck-fishing",
      eyebrow: "Wreck fishing",
      duration: "10 hours",
      times: "6am-4pm",
      price: "$1,400",
      bestFor: "Dedicated anglers looking for the longest wreck fishing option.",
      targetSpecies: ["Black sea bass", "Flounder", "Tautog", "Triggerfish", "Bluefish"],
      included: [...standardIncluded, "Longest wreck option"],
      description:
        "The longest wreck option for guests who want a full day targeting productive structure.",
      image: "charter-wreck-catch.jpg"
    },
    {
      name: "12 hr Off Shore Fishing Trip",
      slug: "12-hour-off-shore-fishing",
      eyebrow: "Off Shore",
      duration: "12 hours",
      times: "6am-6pm",
      price: "$1,800",
      bestFor: "Dedicated crews who want the full-day run for deeper bottom fishing.",
      targetSpecies: ["Golden tilefish", "Blueline tilefish"],
      included: [...standardIncluded, "Full-day offshore departure"],
      description:
        "A full-day Off Shore trip targeting golden tilefish and blueline tilefish in deeper bottom-fishing areas.",
      image: "charter-wreck-catch.jpg"
    },
    {
      name: "4 hr Inshore Trolling Trip",
      slug: "4-hour-inshore-trolling",
      eyebrow: "Inshore trolling",
      duration: "4 hours",
      times: "8am-12pm or 1pm-5pm",
      price: "$650",
      bestFor: "Groups who want fast-paced trolling a couple miles off the beach.",
      targetSpecies: ["Spanish mackerel", "Bluefish", "King mackerel", "False albacore"],
      included: [...standardIncluded, "Morning or afternoon departure"],
      description:
        "Inshore trolling usually stays a couple miles off the beach and follows the active seasonal bite.",
      image: "charter-trolling-catch.jpg"
    },
    {
      name: "5 hr Inshore Trolling Trip",
      slug: "5-hour-inshore-trolling",
      eyebrow: "Inshore trolling",
      duration: "5 hours",
      times: "7am-12pm",
      price: "$750",
      bestFor: "Crews who want an inshore trolling morning with extra time offshore of the beach.",
      targetSpecies: ["Spanish mackerel", "Bluefish", "King mackerel", "False albacore"],
      included: [...standardIncluded, "Morning departure"],
      description:
        "A longer inshore trolling trip for Spanish mackerel, bluefish, king mackerel, and false albacore.",
      image: "charter-trolling-catch.jpg"
    },
    {
      name: "4 hr Night Shark Fishing Trip",
      slug: "4-hour-night-shark-fishing",
      eyebrow: "Night shark fishing",
      duration: "4 hours",
      times: "6pm-10pm",
      price: "$700",
      bestFor: "Groups looking for a different evening bite and a memorable night trip.",
      targetSpecies: ["Shark", "Cobia"],
      included: [...standardIncluded, "Night departure"],
      description:
        "An evening shark fishing trip timed for guests who want a different kind of Ocean City charter.",
      image: "sunset-boat-rail.jpg"
    },
    {
      name: "2 hr Sunset Cruise",
      slug: "2-hour-sunset-cruise",
      eyebrow: "Sunset cruise",
      duration: "2 hours",
      times: "6pm-8pm",
      price: "$350",
      bestFor: "Families, couples, and groups who want a relaxed boat ride around the bay.",
      targetSpecies: ["Wildlife viewing", "Relaxing bay cruise", "Sunset ride"],
      included: ["Up to 6 guests", "Comfortable bay cruise", "Evening departure"],
      description:
        "Cruise around the bay looking for wildlife or simply enjoy a relaxing boat ride as the sun is setting.",
      image: "sunset-boat-rail.jpg"
    }
  ] satisfies TripType[],
  tripGroups: [
    {
      title: "Bay",
      copy: "Back bay and inlet fishing planned around tide, weather, and the best seasonal bite for flounder, rockfish, bluefish, tautog, and sheepshead.",
      tripSlugs: ["4-hour-bay-fishing", "5-hour-bay-fishing", "2-hour-evening-bay-fishing"]
    },
    {
      title: "Wreck",
      copy: "Structure trips over and around wrecks for black sea bass, flounder, tautog, triggerfish, and bluefish.",
      tripSlugs: ["6-hour-wreck-fishing", "8-hour-wreck-fishing", "10-hour-wreck-fishing"]
    },
    {
      title: "Off Shore",
      copy: "A full-day deeper bottom-fishing option for golden tilefish and blueline tilefish.",
      tripSlugs: ["12-hour-off-shore-fishing"]
    },
    {
      title: "Trolling",
      copy: "Nearshore trolling a couple miles off the beach for Spanish mackerel, bluefish, king mackerel, and false albacore.",
      tripSlugs: ["4-hour-inshore-trolling", "5-hour-inshore-trolling"]
    },
    {
      title: "Evening / Cruise",
      copy: "Evening shark fishing, quick bay trips, and relaxed sunset cruises around Ocean City water.",
      tripSlugs: ["4-hour-night-shark-fishing", "2-hour-sunset-cruise"]
    }
  ] satisfies TripGroup[],
  tripStyleDetails: [
    {
      title: "Bay fishing",
      copy:
        "When fishing in the bay, we target flounder, rockfish, bluefish, tautog, and sheepshead."
    },
    {
      title: "Inshore trolling trips",
      copy:
        "When inshore trolling, we generally stay a couple miles off the beach and target Spanish mackerel, bluefish, king mackerel, and false albacore."
    },
    {
      title: "Wreck fishing",
      copy:
        "When wreck fishing, we like to target black sea bass, flounder, and tautog with the occasional bycatch of triggerfish and bluefish."
    },
    {
      title: "Off Shore fishing",
      copy:
        "The Off Shore trip is a full-day run for golden tilefish and blueline tilefish."
    },
    {
      title: "Sunset cruise",
      copy:
        "Come on board as we will cruise around the bay looking for wildlife or just a relaxing boat ride as the sun is setting."
    }
  ] satisfies TripStyleDetail[],
  whatToBring: whatToBringItems,
  charterPolicies: [
    {
      title: "Deposit",
      copy:
        "Any required deposit is confirmed directly with Captain Kyle before the trip is locked in. This website does not collect deposits."
    },
    {
      title: "Cancellation",
      copy:
        "If your plans change, contact the captain as early as possible. Final cancellation, deposit, and rescheduling terms are confirmed when your trip is booked."
    },
    {
      title: "Weather",
      copy:
        "Weather and sea conditions control every trip. Captain Kyle makes the final call on safe, fishable conditions and will discuss rescheduling when needed."
    },
    {
      title: "Payment",
      copy:
        "No payment is collected on this website. Final payment method, balance, and timing are confirmed directly with the captain."
    },
    {
      title: "Mate tipping",
      copy:
        "Please remember to tip the mate. The mate helps rig, bait, land fish, clean up, and keep the trip running smoothly."
    }
  ] satisfies CharterPolicy[],
  directionsDetails: [
    {
      title: "Marina address",
      copy:
        "Meet for your charter at 12940 Inlet Isle Lane, Ocean City, MD 21842 unless Captain Kyle confirms a different departure detail."
    },
    {
      title: "Parking",
      copy:
        "Parking details can vary by season and dock assignment. Captain Kyle will confirm where to park before your trip."
    },
    {
      title: "Meeting time",
      copy:
        "Plan to arrive 15 minutes before your scheduled trip time so the crew can load, review the plan, and leave on time."
    },
    {
      title: "At the dock",
      copy:
        "Bring your crew together to the confirmed meeting spot and call or text the captain if you are delayed or unsure where to go."
    }
  ] satisfies DirectionsDetail[],
  fishingReportHighlights: [
    {
      title: "Bay bite",
      area: "Back bay, bridges, and structure",
      image: "family-bay-catch.jpg",
      targetSpecies: ["Flounder", "Rockfish", "Bluefish", "Tautog", "Sheepshead"],
      tripSlugs: ["4-hour-bay-fishing", "5-hour-bay-fishing", "2-hour-evening-bay-fishing"],
      conditions:
        "Bay trips are planned around moving water, wind, water clarity, and the most productive seasonal structure.",
      tripFit:
        "Best fit for families, first-time anglers, and groups who want steady action close to Ocean City."
    },
    {
      title: "Wreck bite",
      area: "Nearshore structure and wrecks",
      image: "charter-wreck-catch.jpg",
      targetSpecies: ["Black sea bass", "Flounder", "Tautog", "Triggerfish", "Bluefish"],
      tripSlugs: ["6-hour-wreck-fishing", "8-hour-wreck-fishing", "10-hour-wreck-fishing"],
      conditions:
        "Wreck trips depend on sea conditions, current, regulations, and which pieces of structure are fishing best.",
      tripFit:
        "Best fit for crews who want bottom fishing, structure fishing, and a longer run with more time on target."
    },
    {
      title: "Off Shore bottom fishing",
      area: "Deeper offshore bottom",
      image: "charter-wreck-catch.jpg",
      targetSpecies: ["Golden tilefish", "Blueline tilefish"],
      tripSlugs: ["12-hour-off-shore-fishing"],
      conditions:
        "Off Shore trips depend on sea conditions, run distance, current, regulations, and the deeper bottom bite.",
      tripFit:
        "Best fit for dedicated crews who want a 12-hour full-day trip targeting tilefish."
    },
    {
      title: "Inshore trolling",
      area: "A couple miles off the beach",
      image: "charter-trolling-catch.jpg",
      targetSpecies: ["Spanish mackerel", "Bluefish", "King mackerel", "False albacore"],
      tripSlugs: ["4-hour-inshore-trolling", "5-hour-inshore-trolling"],
      conditions:
        "Trolling follows bait, water temperature, clean water, and the active seasonal bite along the beach.",
      tripFit:
        "Best fit for groups who want a faster-paced trip with lines in the water while the boat covers ground."
    },
    {
      title: "Evening shark and sunset",
      area: "Evening Ocean City water",
      image: "sunset-boat-rail.jpg",
      targetSpecies: ["Shark", "Cobia", "Wildlife viewing", "Sunset cruise"],
      tripSlugs: ["4-hour-night-shark-fishing", "2-hour-sunset-cruise"],
      conditions:
        "Evening plans are matched to weather, safe sea conditions, and the kind of trip your group wants.",
      tripFit:
        "Best fit for guests looking for a memorable night bite or a relaxed cruise without a full fishing day."
    }
  ] satisfies FishingReportHighlight[],
  testimonials: [
    {
      label: "Future guest note",
      heading: "Review reserved after the trip.",
      reviewer: "Timothy Gorski",
      context:
        "Timothy can add his own approved review here after fishing with Captain Kyle."
    },
    {
      label: "Future guest note",
      heading: "Ready for a day on Ocean City water.",
      reviewer: "Anthony Bonilla",
      context:
        "Anthony can share a real note about the boat, crew, and trip once his charter is complete."
    },
    {
      label: "Future guest note",
      heading: "Firsthand feedback coming soon.",
      reviewer: "Andino Wolf",
      context:
        "Andino can replace this placeholder with his own review after using the charter."
    }
  ] satisfies Testimonial[],
  faqItems: [
    {
      question: "How many guests can come?",
      answer:
        "All charters accommodate up to 6 guests."
    },
    {
      question: "Are license, bait, and tackle included?",
      answer:
        "Yes. License, bait, and tackle are provided for each trip option."
    },
    {
      question: "Is a deposit required?",
      answer:
        "Any required deposit is confirmed directly with Captain Kyle before the trip is locked in. This website does not collect deposits."
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "If your plans change, contact the captain as early as possible. Final cancellation, deposit, and rescheduling terms are confirmed when your trip is booked."
    },
    {
      question: "Should we tip the mate?",
      answer:
        "Yes. Please remember to tip the mate."
    },
    {
      question: "How do I book?",
      answer:
        "Start on the booking page, choose an available date, and send your request through the calendar. You can also call Captain Kyle at 856-357-3113 to confirm trip fit, timing, weather, and final arrangements."
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
        "Keep it simple. Fishing gear is covered, and these are the boat-specific items worth thinking about.",
      checklist: whatToBringItems
    },
    {
      question: "What about weather?",
      answer:
        "Weather and sea conditions control every trip. The captain makes the final call on whether conditions are safe and fishable, and will discuss rescheduling options when needed."
    },
    {
      question: "Can kids come?",
      answer:
        "Yes. The 29 foot SeaVee center console is set up as a fishing and comfort vessel for all ages that want to come along."
    },
    {
      question: "Where do we leave from?",
      answer:
        "Plan to meet at 12940 Inlet Isle Lane, Ocean City, MD 21842 unless Captain Kyle confirms a different detail. Exact parking, dock, and slip instructions are confirmed before your trip."
    }
  ] satisfies FAQItem[],
  fishSpecies: [
    {
      name: "Flounder",
      aka: "Summer flounder",
      image: "fish-spin/flounder/flounder-frame-01.png",
      spinFrames: fishSpinFrames("flounder"),
      category: "Bay / wreck",
      typicalSize: "16-24 in",
      highSize: "Larger fish depend on season",
      season: "Spring through fall windows",
      notes: "A signature Ocean City target for bay fishing and wreck trips."
    },
    {
      name: "Rockfish",
      aka: "Striped bass",
      image: "fish-spin/rockfish/rockfish-frame-01.png",
      imageFrames: fishSpinFrames("rockfish").slice(0, 4),
      category: "Bay / inshore",
      typicalSize: "20-36 in",
      highSize: "Larger fish depend on season",
      season: "Seasonal runs and condition-dependent bites",
      notes: "A classic Maryland target when conditions and regulations line up."
    },
    {
      name: "Bluefish",
      image: "fish-spin/bluefish/bluefish-frame-01.png",
      spinFrames: fishSpinFrames("bluefish"),
      category: "Bay / inshore trolling / wreck",
      typicalSize: "14-30 in",
      highSize: "Larger fish depend on season",
      season: "Warmer-water seasonal action",
      notes: "A fast, aggressive species that shows up across bay, trolling, and wreck trips."
    },
    {
      name: "Tautog",
      aka: "Tog",
      image: "fish-spin/tautog/tautog-frame-01.png",
      spinFrames: fishSpinFrames("tautog"),
      category: "Bay / wreck",
      typicalSize: "16-24 in",
      highSize: "Larger fish depend on structure",
      season: "Cool-water structure bite",
      notes: "A hard-fighting structure fish and a primary wreck target."
    },
    {
      name: "Sheepshead",
      image: "fish-spin/sheepshead/sheepshead-frame-01.png",
      spinFrames: fishSpinFrames("sheepshead"),
      category: "Bay / structure",
      typicalSize: "14-24 in",
      highSize: "Larger fish depend on structure",
      season: "Summer structure windows",
      notes: "A smart, strong bay and structure target when they are around pilings and hard bottom."
    },
    {
      name: "Black sea bass",
      image: "fish-spin/black-sea-bass/black-sea-bass-frame-01.png",
      spinFrames: fishSpinFrames("black-sea-bass"),
      category: "Wreck / structure",
      typicalSize: "12-18 in",
      highSize: "Larger fish depend on structure",
      season: "Seasonal wreck and structure windows",
      notes: "A core wreck fishing target around productive bottom and structure."
    },
    {
      name: "Triggerfish",
      image: "fish-spin/triggerfish/triggerfish-frame-01.png",
      spinFrames: fishSpinFrames("triggerfish"),
      category: "Wreck / structure",
      typicalSize: "12-18 in",
      highSize: "Larger fish depend on structure",
      season: "Warm-water structure bite",
      notes: "A hard-fighting bycatch species that can show up while working wrecks."
    },
    {
      name: "Spanish mackerel",
      image: "fish-spin/spanish-mackerel/spanish-mackerel-frame-01.png",
      spinFrames: fishSpinFrames("spanish-mackerel"),
      category: "Inshore trolling",
      typicalSize: "14-24 in",
      highSize: "Larger fish depend on bait and water",
      season: "Summer trolling windows",
      notes: "A fast inshore trolling target when bait and clean water line up off the beach."
    },
    {
      name: "King mackerel",
      image: "fish-spin/king-mackerel/king-mackerel-frame-01.png",
      spinFrames: fishSpinFrames("king-mackerel"),
      category: "Inshore trolling",
      typicalSize: "24-40 in",
      highSize: "Larger fish depend on warm water",
      season: "Warm-water trolling windows",
      notes: "A nearshore trolling target that can turn a beach trip into a fast-paced bite."
    },
    {
      name: "False albacore",
      aka: "Albie",
      image: "fish-spin/false-albacore/false-albacore-frame-01.png",
      imageFrames: fishPhotoCropFrames("false-albacore"),
      category: "Inshore trolling",
      typicalSize: "20-30 in",
      highSize: "Larger fish depend on bait",
      season: "Seasonal bait-driven runs",
      notes: "A fast, hard-pulling trolling target that follows bait along the beach."
    },
    {
      name: "Shark",
      image: "fish-spin/shark/shark-frame-01.png",
      spinFrames: fishSpinFrames("shark"),
      category: "Evening / nearshore",
      typicalSize: "3-6 ft",
      highSize: "Larger fish depend on season",
      season: "Warm-water evening windows",
      notes: "A memorable night-trip target when conditions are right."
    },
    {
      name: "Cobia",
      image: "fish-spin/cobia/cobia-frame-01.png",
      imageFrames: fishPhotoCropFrames("cobia"),
      category: "Nearshore / trolling",
      typicalSize: "30-45 in",
      highSize: "Larger fish depend on bait and water",
      season: "Warm-water seasonal windows",
      notes: "A prized nearshore visitor that may show up when bait and conditions line up."
    },
    {
      name: "Golden tilefish",
      aka: "Golden tile",
      image: "fish-spin/golden-tilefish/golden-tilefish-frame-01.png",
      spinFrames: fishSpinFrames("golden-tilefish"),
      category: "Offshore bottom",
      typicalSize: "20-35 in",
      highSize: "Larger fish depend on depth and bottom",
      season: "Condition and regulation dependent",
      notes: "A deep-water bottom species to discuss directly with the captain when planning the right trip."
    },
    {
      name: "Blueline tilefish",
      aka: "Blue line",
      image: "fish-spin/blueline-tilefish/blueline-tilefish-frame-01.png",
      spinFrames: fishSpinFrames("blueline-tilefish"),
      category: "Offshore bottom",
      typicalSize: "16-28 in",
      highSize: "Larger fish depend on depth and bottom",
      season: "Condition and regulation dependent",
      notes: "A bottom-fishing target that belongs in the deeper structure conversation before booking."
    }
  ] satisfies FishSpecies[],
  galleryImages: [
    {
      src: "fishingbooker/fishingbooker-01-boat-running.jpg",
      alt: "Higher-resolution FishingBooker photo of the Ocean City Guide Service SeaVee running on the water",
      title: "SeaVee running",
      caption: "Higher-resolution public listing photo from FishingBooker.",
      category: "Boat"
    },
    {
      src: "fishingbooker/fishingbooker-02-flounder-angler.jpg",
      alt: "FishingBooker photo of an angler holding a flounder aboard Ocean City Guide Service",
      title: "Flounder aboard",
      caption: "A FishingBooker listing photo from an Ocean City Guide Service trip.",
      category: "Bay"
    },
    {
      src: "fishingbooker/fishingbooker-03-wreck-catch.jpg",
      alt: "FishingBooker photo of anglers with a wreck fishing catch on the dock",
      title: "Wreck catch",
      caption: "A FishingBooker listing photo showing a productive structure trip.",
      category: "Wreck"
    },
    {
      src: "fishingbooker/fishingbooker-04-dockside-catch.jpg",
      alt: "FishingBooker photo of guests with a dockside Ocean City fishing catch",
      title: "Dockside catch",
      caption: "A FishingBooker listing photo from the Ocean City Guide Service dock.",
      category: "Fishing"
    },
    {
      src: "fishingbooker/fishingbooker-05-rockfish.jpg",
      alt: "FishingBooker photo of Captain Kyle holding a large rockfish",
      title: "Rockfish photo",
      caption: "A FishingBooker listing photo featuring one of the classic Ocean City targets.",
      category: "Captain"
    },
    {
      src: "fishingbooker/fishingbooker-06-bay-catch.jpg",
      alt: "FishingBooker photo of a mixed bay catch on the dock",
      title: "Mixed bay catch",
      caption: "A FishingBooker listing photo with bay trip fish laid out after the charter.",
      category: "Bay"
    },
    {
      src: "fishingbooker/fishingbooker-07-family-catch.jpg",
      alt: "FishingBooker photo of a family group with an Ocean City fishing catch",
      title: "Family catch",
      caption: "A FishingBooker listing photo showing a family-friendly day on the water.",
      category: "Bay"
    },
    {
      src: "captain-rockfish.jpg",
      alt: "Captain Kyle holding a large rockfish aboard the Ocean City Guide Service boat",
      title: "Captain Kyle with rockfish",
      caption: "Captain Kyle brings professional experience to each trip on Ocean City water.",
      category: "Captain"
    },
    {
      src: "charter-flounder-dock.jpg",
      alt: "Three guests holding flounder on the dock after an Ocean City fishing trip",
      title: "Flounder at the dock",
      caption: "A dockside finish after a productive flounder trip.",
      category: "Fishing"
    },
    {
      src: "charter-trolling-catch.jpg",
      alt: "Guests with a cobia and a deck full of trolling fish on the dock",
      title: "Trolling catch",
      caption: "Inshore trolling targets the active bite a couple miles off the beach.",
      category: "Trolling"
    },
    {
      src: "charter-wreck-catch.jpg",
      alt: "Three anglers on the dock with a wreck fishing catch laid out",
      title: "Wreck fishing haul",
      caption: "Wreck trips target black sea bass, flounder, tautog, and seasonal bycatch.",
      category: "Wreck"
    },
    {
      src: "family-bay-catch.jpg",
      alt: "Family kneeling on the dock behind a mixed bay fishing catch",
      title: "Family bay catch",
      caption: "Private trips accommodate up to 6 guests.",
      category: "Bay"
    },
    {
      src: "dock-mixed-catch.jpg",
      alt: "Two young anglers and an adult with a mixed catch on the dock",
      title: "Mixed bay catch",
      caption: "Bay fishing targets flounder, rockfish, bluefish, tautog, and sheepshead.",
      category: "Bay"
    },
    {
      src: "sunset-boat-rail.jpg",
      alt: "Sunset over the water from the rail of the charter boat",
      title: "Sunset cruise",
      caption: "A relaxed evening on the water as the sun drops over Ocean City.",
      category: "Cruise"
    },
    {
      src: "boat-running.jpg",
      alt: "SeaVee center console running across coastal water",
      title: "Running out",
      caption: "The 29 foot SeaVee running from Ocean City water.",
      category: "Boat"
    },
    {
      src: "deck.jpg",
      alt: "29 foot SeaVee center console at the dock",
      title: "Ready at the dock",
      caption: "Open deck space and a practical setup for groups up to 6 guests.",
      category: "Boat"
    },
    {
      src: "boat-tower.jpg",
      alt: "Captain fishing from the tower of a SeaVee center-console boat",
      title: "Captain at work",
      caption: "A clean center-console platform set up for private charter days.",
      category: "Boat"
    }
  ] satisfies GalleryImage[],
  seo: {
    title: "Ocean City MD Fishing Charter | Ocean City Guide Service",
    description:
      "Ocean City, Maryland private fishing charters aboard a 29 foot SeaVee center console. Review bay fishing, wreck fishing, inshore trolling, shark trips, and sunset cruises.",
    image: "section-art/home-hero-current.png",
    keywords: [
      "Ocean City MD fishing charter",
      "Ocean City Maryland private fishing charter",
      "Ocean City bay fishing trip",
      "Ocean City wreck fishing charter",
      "Ocean City sunset cruise",
      "SeaVee fishing charter"
    ]
  }
} as const;
