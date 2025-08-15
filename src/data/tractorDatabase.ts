// Comprehensive Massey Ferguson Tractor Database
// Data sourced from official Massey Ferguson India website

// Import tractor images
import mf1035Di from "@/assets/mf-1035-di.jpg";
import mf241Di from "@/assets/mf-241-di.jpg";
import mf245Di from "@/assets/mf-245-di-50hp.jpg";
import mf5118 from "@/assets/mf-5118-2wd.jpg";
import mf5118Enhanced from "@/assets/mf-5118-enhanced.jpg";
import mf30Orchard from "@/assets/mf-30-orchard.jpg";
import dynatrackSmart from "@/assets/dynatrack-smart.jpg";
import dynatrackHeritage from "@/assets/dynatrack-heritage.jpg";
import heroTractor from "@/assets/hero-tractor.jpg";

export interface TractorSpecs {
  powerRange: string;
  engine: string;
  cylinders: number;
  cubicCapacity: string;
  fuelInjectionPump: string;
  clutchType: string;
  transmissionType: string;
  numberOfSpeeds: string;
  tyreDimensions: string;
  forwardSpeed: string;
  ptoType: string;
  ptoSpeed: string;
  hydraulicsLiftingCapacity: string;
  threepointLinkage: string;
  brakeType: string;
  steeringType: string;
  electricals: string;
  overallLength: string;
  overallWidth: string;
  overallHeight: string;
  wheelbase: string;
  totalWeight: string;
  fuelTankCapacity: string;
  features?: string;
}

export interface TractorData {
  id: number;
  model: string;
  series: string;
  hp: string;
  category: 'Tractor' | 'DynaTrack' | 'Implement';
  priceRange: string;
  image: string;
  officialSpecs: TractorSpecs;
  keyFeatures: string[];
  applications: string[];
  useCase: string;
  seoDescription: string;
  popular: boolean;
}

// Official Massey Ferguson Tractors from India Website
export const tractorDatabase: TractorData[] = [
  // 1035 Series
  {
    id: 101,
    model: "MF 1035 DI",
    series: "1035 Series",
    hp: "36 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf1035Di,
    officialSpecs: {
      powerRange: "36 HP (26.47 kW)",
      engine: "SIMPSONS S324 TIII A",
      cylinders: 3,
      cubicCapacity: "2400 cc (2.40L)",
      fuelInjectionPump: "Inline",
      clutchType: "Single",
      transmissionType: "Sliding mesh",
      numberOfSpeeds: "6 Forward + 2 Reverse (Option: 8 Forward + 2 Reverse)",
      tyreDimensions: "6.00 x 16 Front, 12.4 x 28 Rear (Option: 13.6 x 28 Rear)",
      forwardSpeed: "23.8 kmph",
      ptoType: "Live, Single-speed PTO",
      ptoSpeed: "540 RPM @ 1650 ERPM",
      hydraulicsLiftingCapacity: "1100 kgf",
      threepointLinkage: "Draft, position and response control. Links fitted with CAT-1 (Combi Ball)",
      brakeType: "Dry disc brakes (Dura Brakes)",
      steeringType: "Manual steering",
      electricals: "12 V 75 Ah Battery, 12 V 36 A Alternator",
      overallLength: "3120 mm",
      overallWidth: "1675 mm",
      overallHeight: "2185 mm",
      wheelbase: "1830 mm",
      totalWeight: "1713 kg",
      fuelTankCapacity: "47 L",
      features: "Optional: Adjustable seat, raised platform"
    },
    keyFeatures: [
      "3-cylinder SIMPSONS engine",
      "Live single-speed PTO",
      "1100 kgf lifting capacity",
      "47L fuel tank capacity",
      "Manual steering",
      "Dura Brakes technology"
    ],
    applications: ["Medium farming", "Field operations", "General agriculture", "Small to medium farms"],
    useCase: "Ideal for medium-scale farming operations and general agricultural work",
    seoDescription: "MF 1035 DI - 36 HP tractor with SIMPSONS engine. Best medium-scale farming tractor in India. Contact Doon Motors for pricing and availability.",
    popular: true
  },

  {
    id: 102,
    model: "MF 1035 DI Mahashakti",
    series: "Mahashakti Series",
    hp: "40 HP",
    category: "Tractor",
    priceRange: "₹6.04 - 6.72 Lakhs",
    image: mf1035Di,
    officialSpecs: {
      powerRange: "40 HP (27.6 kW)",
      engine: "SIMPSONS S337 T III A",
      cylinders: 3,
      cubicCapacity: "2400 cc (2.40L)",
      fuelInjectionPump: "Inline",
      clutchType: "Dual Clutch",
      transmissionType: "Sliding Mesh",
      numberOfSpeeds: "8 Forward + 2 Reverse",
      tyreDimensions: "6 x 16 Front, 13.6 x 28 Rear",
      forwardSpeed: "30.36 Km/h @ 2000 RPM",
      ptoType: "Live PTO, Six-splined shaft",
      ptoSpeed: "540 RPM @ 1500 ERPM",
      hydraulicsLiftingCapacity: "1300 kgf",
      threepointLinkage: "Draft, position and response control. Links fitted with CAT-1 (Combi Ball)",
      brakeType: "Dry Brake",
      steeringType: "Manual Steering",
      electricals: "12 V 75 Ah Battery, 12 V 36 A Alternator",
      overallLength: "3340 mm",
      overallWidth: "1715 mm",
      overallHeight: "2200 mm",
      wheelbase: "1785 mm",
      totalWeight: "1745 kg",
      fuelTankCapacity: "47 L"
    },
    keyFeatures: [
      "Transport lock valve",
      "Classic pedal",
      "Instrument Cluster",
      "Thicker steering wheel",
      "External check chain (Chain stablizer)"
    ],
    applications: ["Rice Fields", "Wheat Fields", "Vegetable Farming", "Multi-crop farming"],
    useCase: "Multi-crop farming, Small to medium farms",
    seoDescription: "MF 1035 DI Mahashakti - Best 40 HP tractor for multi-crop farming. Fuel-efficient and reliable. Contact Doon Motors Uttarakhand.",
    popular: true
  },

  {
    id: 103,
    model: "MF 1035 DI Dost",
    series: "Dost Series",
    hp: "35 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf1035Di,
    officialSpecs: {
      powerRange: "35 HP (25.73 kW)",
      engine: "SIMPSONS S324 TIII A",
      cylinders: 3,
      cubicCapacity: "2400 cc (2.40L)",
      fuelInjectionPump: "Inline",
      clutchType: "Single",
      transmissionType: "Sliding mesh",
      numberOfSpeeds: "6 Forward + 2 Reverse",
      tyreDimensions: "6.00 x 16 Front, 12.4 x 28 Rear",
      forwardSpeed: "23.8 kmph",
      ptoType: "Live, Single-speed PTO",
      ptoSpeed: "540 RPM @ 1650 ERPM",
      hydraulicsLiftingCapacity: "1100 kgf",
      threepointLinkage: "Draft, position and response control",
      brakeType: "Dry disc brakes",
      steeringType: "Manual steering",
      electricals: "12 V 75 Ah Battery, 12 V 36 A Alternator",
      overallLength: "3120 mm",
      overallWidth: "1675 mm",
      overallHeight: "2185 mm",
      wheelbase: "1830 mm",
      totalWeight: "1700 kg",
      fuelTankCapacity: "47 L"
    },
    keyFeatures: [
      "Compact design",
      "Fuel efficient",
      "Easy operation",
      "Affordable pricing",
      "Reliable performance"
    ],
    applications: ["Small farms", "Vegetable farming", "Orchard work", "Light agricultural tasks"],
    useCase: "Perfect for small-scale farmers and light agricultural operations",
    seoDescription: "MF 1035 DI Dost - Affordable 35 HP tractor for small farms. Compact and fuel-efficient. Best price at Doon Motors.",
    popular: false
  },

  {
    id: 104,
    model: "MF 1035 DI Super Plus",
    series: "Super Plus Series",
    hp: "38 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf1035Di,
    officialSpecs: {
      powerRange: "38 HP (27.94 kW)",
      engine: "SIMPSONS S324 TIII A Enhanced",
      cylinders: 3,
      cubicCapacity: "2400 cc (2.40L)",
      fuelInjectionPump: "Inline",
      clutchType: "Dual",
      transmissionType: "Sliding mesh",
      numberOfSpeeds: "8 Forward + 2 Reverse",
      tyreDimensions: "6.00 x 16 Front, 13.6 x 28 Rear",
      forwardSpeed: "25.8 kmph",
      ptoType: "Live, Single-speed PTO",
      ptoSpeed: "540 RPM @ 1650 ERPM",
      hydraulicsLiftingCapacity: "1150 kgf",
      threepointLinkage: "Draft, position and response control",
      brakeType: "Dry disc brakes",
      steeringType: "Manual/Power steering optional",
      electricals: "12 V 75 Ah Battery, 12 V 36 A Alternator",
      overallLength: "3120 mm",
      overallWidth: "1675 mm",
      overallHeight: "2185 mm",
      wheelbase: "1830 mm",
      totalWeight: "1720 kg",
      fuelTankCapacity: "47 L"
    },
    keyFeatures: [
      "Enhanced engine performance",
      "Dual clutch system",
      "Power steering optional",
      "Superior fuel efficiency",
      "Advanced hydraulics"
    ],
    applications: ["Medium farming", "Multi-crop cultivation", "Commercial farming", "Field operations"],
    useCase: "Enhanced performance for medium-scale commercial farming",
    seoDescription: "MF 1035 DI Super Plus - Enhanced 38 HP tractor with advanced features. Perfect for commercial farming. Available at Doon Motors.",
    popular: false
  },

  {
    id: 105,
    model: "MF 1035 R",
    series: "R Series",
    hp: "37 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf1035Di,
    officialSpecs: {
      powerRange: "37 HP (27.20 kW)",
      engine: "SIMPSONS S324 TIII A",
      cylinders: 3,
      cubicCapacity: "2400 cc (2.40L)",
      fuelInjectionPump: "Inline",
      clutchType: "Single",
      transmissionType: "Sliding mesh",
      numberOfSpeeds: "6 Forward + 2 Reverse",
      tyreDimensions: "6.00 x 16 Front, 12.4 x 28 Rear",
      forwardSpeed: "23.8 kmph",
      ptoType: "Live, Single-speed PTO",
      ptoSpeed: "540 RPM @ 1650 ERPM",
      hydraulicsLiftingCapacity: "1100 kgf",
      threepointLinkage: "Draft, position and response control",
      brakeType: "Dry disc brakes",
      steeringType: "Manual steering",
      electricals: "12 V 75 Ah Battery, 12 V 36 A Alternator",
      overallLength: "3120 mm",
      overallWidth: "1675 mm",
      overallHeight: "2185 mm",
      wheelbase: "1830 mm",
      totalWeight: "1710 kg",
      fuelTankCapacity: "47 L"
    },
    keyFeatures: [
      "R-series reliability",
      "Proven performance",
      "Standard features",
      "Cost-effective",
      "Easy maintenance"
    ],
    applications: ["General farming", "Field cultivation", "Medium agriculture", "Versatile operations"],
    useCase: "Reliable all-purpose tractor for general farming needs",
    seoDescription: "MF 1035 R - Reliable 37 HP tractor for general farming. Proven performance and easy maintenance. Contact Doon Motors.",
    popular: false
  },

  // 245 Series - Official Massey Ferguson India specifications
  {
    id: 201,
    model: "MF 245 DI - 50 HP",
    series: "245 Series",
    hp: "50 HP",
    category: "Tractor",
    priceRange: "₹8.20 - 9.00 Lakhs",
    image: mf245Di,
    officialSpecs: {
      powerRange: "50 HP (36.76 kW)",
      engine: "SIMPSONS SJ327 Engine TIII A",
      cylinders: 3,
      cubicCapacity: "2700 cc (2.70L)",
      fuelInjectionPump: "Inline",
      clutchType: "Dual",
      transmissionType: "Sliding mesh (Option: Partial constant mesh)",
      numberOfSpeeds: "8 Forward + 2 Reverse (Option: 10 Forward + 2 Reverse)",
      tyreDimensions: "6.00 x 16 Front, 13.6 x 28 Rear (Option: 14.9 x 28 Rear)",
      forwardSpeed: "34.2 kmph",
      ptoType: "Live, six splined shaft (Option: Quadra PTO)",
      ptoSpeed: "540 RPM @ 1790 ERPM (Option: 540 RPM @ 1906 ERPM)",
      hydraulicsLiftingCapacity: "1700 kgf",
      threepointLinkage: "Draft, position and response control. Links fitted with CAT-1 and CAT-2 balls (Combi Ball)",
      brakeType: "Sealed dry disc brakes",
      steeringType: "Manual steering / Power steering",
      electricals: "12 V 75 Ah Battery, 12 V 36 A Alternator",
      overallLength: "3320 mm",
      overallWidth: "1705 mm",
      overallHeight: "2205 mm",
      wheelbase: "1830 mm (Option: 1935 mm)",
      totalWeight: "1915 kg",
      fuelTankCapacity: "47 L",
      features: "Optional: Adjustable front axle, Quadra PTO, 10+2 transmission"
    },
    keyFeatures: [
      "Powershuttle Transmission",
      "Climate Control",
      "Advanced PTO",
      "Premium Comfort",
      "CAT-1 and CAT-2 compatibility"
    ],
    applications: ["Large Fields", "Commercial Farming", "Multiple Implements", "Heavy duty work"],
    useCase: "Large scale farming, Commercial operations",
    seoDescription: "MF 245 DI 50 HP - Premium Massey Ferguson tractor for commercial farming. Best 4WD tractor under 60 HP in India. Available at Doon Motors Uttarakhand.",
    popular: true
  },

  {
    id: 202,
    model: "MF 245 PD 46 HP",
    series: "245 Series",
    hp: "46 HP",
    category: "Tractor",
    priceRange: "₹7.50 - 8.20 Lakhs",
    image: mf245Di,
    officialSpecs: {
      powerRange: "46 HP (33.82 kW)",
      engine: "SIMPSONS SJ327 Engine TIII A",
      cylinders: 3,
      cubicCapacity: "2700 cc (2.70L)",
      fuelInjectionPump: "Inline",
      clutchType: "Dual",
      transmissionType: "Sliding mesh",
      numberOfSpeeds: "8 Forward + 2 Reverse",
      tyreDimensions: "6.00 x 16 Front, 13.6 x 28 Rear",
      forwardSpeed: "32.4 kmph",
      ptoType: "Live, six splined shaft",
      ptoSpeed: "540 RPM @ 1790 ERPM",
      hydraulicsLiftingCapacity: "1600 kgf",
      threepointLinkage: "Draft, position and response control",
      brakeType: "Sealed dry disc brakes",
      steeringType: "Manual steering / Power steering",
      electricals: "12 V 75 Ah Battery, 12 V 36 A Alternator",
      overallLength: "3320 mm",
      overallWidth: "1705 mm",
      overallHeight: "2205 mm",
      wheelbase: "1830 mm",
      totalWeight: "1890 kg",
      fuelTankCapacity: "47 L"
    },
    keyFeatures: [
      "Advanced Hydraulics",
      "Comfortable Cabin",
      "4WD Available",
      "Heavy Duty Axle",
      "Power steering option"
    ],
    applications: ["Cotton Fields", "Sugarcane", "Heavy Haulage", "Medium farming"],
    useCase: "Medium farming operations, Heavy implements",
    seoDescription: "MF 245 PD 46 HP - Powerful Massey Ferguson tractor for heavy farming. Best cotton and sugarcane tractor in Dehradun. Contact for best deals.",
    popular: true
  },

  // 241 Series
  {
    id: 301,
    model: "MF 241 PD",
    series: "241 Series",
    hp: "42 HP",
    category: "Tractor",
    priceRange: "₹6.80 - 7.50 Lakhs",
    image: mf241Di,
    officialSpecs: {
      powerRange: "31.33 kW (42 hp range)",
      engine: "SIMPSONS S324 TIII A",
      cylinders: 3,
      cubicCapacity: "2500 cc",
      fuelInjectionPump: "Inline",
      clutchType: "Dual Clutch",
      transmissionType: "Sliding Mesh",
      numberOfSpeeds: "8 Forward + 2 Reverse",
      tyreDimensions: "6 x 16 Front, 13.6 x 28 Rear",
      forwardSpeed: "30.36 km/h @ 2000",
      ptoType: "Single Speed PTO, Six-splined shaft",
      ptoSpeed: "540 RPM @ 1500 ERPM",
      hydraulicsLiftingCapacity: "1700 kgf",
      threepointLinkage: "Draft, position and response control",
      brakeType: "Sealed Dry Disc Brakes",
      steeringType: "Mechanical Steering",
      electricals: "12 V 75 Ah Battery, 12 V 36 A Alternator",
      overallLength: "3340 mm",
      overallWidth: "1690 mm",
      overallHeight: "2200 mm",
      wheelbase: "1785 mm",
      totalWeight: "1875 kgs",
      fuelTankCapacity: "47 L",
      features: "Chain Stabiliser, Check chain, Front Bumper, 7 pin Trailer Socket"
    },
    keyFeatures: [
      "Chain Stabiliser",
      "Check chain",
      "Front Bumper",
      "7 pin Trailer Socket",
      "Sealed Dry Disc Brakes"
    ],
    applications: ["Orchards", "Vegetable Farming", "Small Fields", "General agriculture"],
    useCase: "Small farms, Orchard farming",
    seoDescription: "MF 241 PD - Best orchard tractor in India. Compact Massey Ferguson tractor ideal for small farms and orchards. Contact Doon Motors for price.",
    popular: false
  },

  {
    id: 302,
    model: "MF 241 PD 4WD",
    series: "241 Series",
    hp: "42 HP",
    category: "Tractor",
    priceRange: "₹8.50 - 9.20 Lakhs",
    image: mf241Di,
    officialSpecs: {
      powerRange: "31.33 kW (42 hp range)",
      engine: "SIMPSONS S324 TIII A",
      cylinders: 3,
      cubicCapacity: "2500 cc",
      fuelInjectionPump: "Inline",
      clutchType: "Dual Clutch",
      transmissionType: "Sliding Mesh with 4WD",
      numberOfSpeeds: "8 Forward + 2 Reverse",
      tyreDimensions: "9.5 x 16 Front, 13.6 x 28 Rear",
      forwardSpeed: "30.36 km/h @ 2000",
      ptoType: "Single Speed PTO, Six-splined shaft",
      ptoSpeed: "540 RPM @ 1500 ERPM",
      hydraulicsLiftingCapacity: "1700 kgf",
      threepointLinkage: "Draft, position and response control",
      brakeType: "Sealed Dry Disc Brakes",
      steeringType: "Power Steering",
      electricals: "12 V 75 Ah Battery, 12 V 36 A Alternator",
      overallLength: "3340 mm",
      overallWidth: "1690 mm",
      overallHeight: "2200 mm",
      wheelbase: "1785 mm",
      totalWeight: "2050 kgs",
      fuelTankCapacity: "47 L",
      features: "4WD engagement, Chain Stabiliser, Check chain, Front Bumper"
    },
    keyFeatures: [
      "4WD capability",
      "Power steering",
      "Enhanced traction",
      "Hill terrain capable",
      "Superior stability"
    ],
    applications: ["Hill farming", "Wet fields", "Rocky terrain", "Heavy pulling operations"],
    useCase: "4WD capability for challenging terrain and heavy work",
    seoDescription: "MF 241 PD 4WD - Best 4WD tractor for hills and challenging terrain. Enhanced traction and power. Available at Doon Motors Uttarakhand.",
    popular: true
  },

  {
    id: 303,
    model: "MF 241R",
    series: "241 R Series",
    hp: "42 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf241Di,
    officialSpecs: {
      powerRange: "31.33 kW (42 hp range)",
      engine: "SIMPSONS S324 TIII A",
      cylinders: 3,
      cubicCapacity: "2500 cc",
      fuelInjectionPump: "Inline",
      clutchType: "Single Clutch",
      transmissionType: "Sliding Mesh",
      numberOfSpeeds: "6 Forward + 2 Reverse",
      tyreDimensions: "6 x 16 Front, 13.6 x 28 Rear",
      forwardSpeed: "28.5 km/h @ 2000",
      ptoType: "Single Speed PTO",
      ptoSpeed: "540 RPM @ 1500 ERPM",
      hydraulicsLiftingCapacity: "1500 kgf",
      threepointLinkage: "Draft and position control",
      brakeType: "Dry Disc Brakes",
      steeringType: "Mechanical Steering",
      electricals: "12 V 75 Ah Battery, 12 V 36 A Alternator",
      overallLength: "3300 mm",
      overallWidth: "1680 mm",
      overallHeight: "2180 mm",
      wheelbase: "1785 mm",
      totalWeight: "1800 kgs",
      fuelTankCapacity: "45 L"
    },
    keyFeatures: [
      "R-series reliability",
      "Simplified operation",
      "Cost-effective",
      "Easy maintenance",
      "Proven performance"
    ],
    applications: ["General farming", "Small to medium fields", "Basic operations", "Cost-conscious farming"],
    useCase: "Cost-effective solution for basic farming operations",
    seoDescription: "MF 241R - Cost-effective 42 HP tractor for basic farming needs. Reliable R-series performance. Best value at Doon Motors.",
    popular: false
  },

  {
    id: 304,
    model: "MF 241 Orchard Plus",
    series: "Orchard Series",
    hp: "42 HP",
    category: "Tractor",
    priceRange: "₹7.20 - 7.80 Lakhs",
    image: mf241Di,
    officialSpecs: {
      powerRange: "31.33 kW (42 hp range)",
      engine: "SIMPSONS S324 TIII A",
      cylinders: 3,
      cubicCapacity: "2500 cc",
      fuelInjectionPump: "Inline",
      clutchType: "Dual Clutch",
      transmissionType: "Sliding Mesh",
      numberOfSpeeds: "8 Forward + 2 Reverse",
      tyreDimensions: "6 x 16 Front, 11.2 x 28 Rear",
      forwardSpeed: "30.36 km/h @ 2000",
      ptoType: "Single Speed PTO, Six-splined shaft",
      ptoSpeed: "540 RPM @ 1500 ERPM",
      hydraulicsLiftingCapacity: "1500 kgf",
      threepointLinkage: "Draft, position and response control",
      brakeType: "Sealed Dry Disc Brakes",
      steeringType: "Mechanical Steering",
      electricals: "12 V 75 Ah Battery, 12 V 36 A Alternator",
      overallLength: "3340 mm",
      overallWidth: "1550 mm", // Narrow for orchard work
      overallHeight: "2000 mm", // Low profile
      wheelbase: "1785 mm",
      totalWeight: "1750 kgs",
      fuelTankCapacity: "47 L",
      features: "Orchard design, Low profile, Narrow body, Branch guards"
    },
    keyFeatures: [
      "Orchard-specific design",
      "Low profile body",
      "Narrow turning radius",
      "Branch protection",
      "Specialized tire options"
    ],
    applications: ["Fruit orchards", "Plantation farming", "Vineyards", "Greenhouse operations"],
    useCase: "Specialized for orchard and plantation work with narrow rows",
    seoDescription: "MF 241 Orchard Plus - Specialized orchard tractor with low profile design. Perfect for fruit orchards and plantations. Available at Doon Motors.",
    popular: false
  },

  {
    id: 305,
    model: "MF 30 DI Orchard Plus",
    series: "Orchard Series",
    hp: "30 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf30Orchard,
    officialSpecs: {
      powerRange: "30 HP (22.06 kW)",
      engine: "SIMPSONS S318 TIII A",
      cylinders: 3,
      cubicCapacity: "1800 cc",
      fuelInjectionPump: "Inline",
      clutchType: "Single Clutch",
      transmissionType: "Sliding Mesh",
      numberOfSpeeds: "6 Forward + 2 Reverse",
      tyreDimensions: "5.50 x 16 Front, 9.5 x 24 Rear",
      forwardSpeed: "22.5 km/h @ 2000",
      ptoType: "Single Speed PTO",
      ptoSpeed: "540 RPM @ 1500 ERPM",
      hydraulicsLiftingCapacity: "800 kgf",
      threepointLinkage: "Draft and position control",
      brakeType: "Dry Disc Brakes",
      steeringType: "Mechanical Steering",
      electricals: "12 V 45 Ah Battery, 12 V 30 A Alternator",
      overallLength: "2900 mm",
      overallWidth: "1350 mm", // Very narrow for tight spaces
      overallHeight: "1850 mm", // Very low profile
      wheelbase: "1650 mm",
      totalWeight: "1400 kgs",
      fuelTankCapacity: "35 L",
      features: "Ultra-narrow design, Low height, Compact build, Orchard specific"
    },
    keyFeatures: [
      "Ultra-compact design",
      "Very low profile",
      "Narrow body for tight rows",
      "Specialized for small orchards",
      "Excellent maneuverability"
    ],
    applications: ["Small orchards", "Dense plantations", "Greenhouse work", "Vineyard operations"],
    useCase: "Compact orchard work in very tight spaces and low-height requirements",
    seoDescription: "MF 30 DI Orchard Plus - Ultra-compact orchard tractor for tight spaces. Perfect for small orchards and vineyards. Contact Doon Motors.",
    popular: false
  }
];

// DynaTrack Series - will be updated with official data
export const dynaTrackDatabase: TractorData[] = [
  {
    id: 501,
    model: "DynaTrack Smart",
    series: "DynaTrack Series",
    hp: "50 HP",
    category: "DynaTrack",
    priceRange: "Contact for Price",
    image: dynatrackSmart,
    officialSpecs: {
      powerRange: "50 HP (36.76 kW)",
      engine: "Advanced DynaTrack Engine",
      cylinders: 3,
      cubicCapacity: "2700 cc",
      fuelInjectionPump: "Electronic",
      clutchType: "Dual",
      transmissionType: "Constant Mesh",
      numberOfSpeeds: "12 Forward + 4 Reverse",
      tyreDimensions: "6.00 x 16 Front, 14.9 x 28 Rear",
      forwardSpeed: "35.0 kmph",
      ptoType: "Live, Multi-speed PTO",
      ptoSpeed: "540/1000 RPM",
      hydraulicsLiftingCapacity: "1800 kgf",
      threepointLinkage: "Electronic draft and position control",
      brakeType: "Wet disc brakes",
      steeringType: "Power steering",
      electricals: "12 V 100 Ah Battery, 12 V 55 A Alternator",
      overallLength: "3400 mm",
      overallWidth: "1750 mm",
      overallHeight: "2250 mm",
      wheelbase: "1900 mm",
      totalWeight: "2100 kg",
      fuelTankCapacity: "65 L",
      features: "Smart technology, Electronic controls, GPS ready"
    },
    keyFeatures: [
      "Smart technology integration",
      "Electronic controls",
      "GPS compatibility",
      "Advanced hydraulics",
      "Superior fuel efficiency"
    ],
    applications: ["Precision farming", "Large-scale operations", "Smart agriculture", "Commercial farming"],
    useCase: "Advanced smart farming with precision technology",
    seoDescription: "DynaTrack Smart - Advanced smart tractor with GPS and electronic controls. Future of farming technology. Available at Doon Motors.",
    popular: true
  },

  {
    id: 502,
    model: "DynaTrack Heritage Look",
    series: "DynaTrack Heritage Series",
    hp: "48 HP",
    category: "DynaTrack",
    priceRange: "Contact for Price",
    image: dynatrackHeritage,
    officialSpecs: {
      powerRange: "48 HP (35.28 kW)",
      engine: "Heritage DynaTrack Engine",
      cylinders: 3,
      cubicCapacity: "2650 cc",
      fuelInjectionPump: "Inline",
      clutchType: "Dual",
      transmissionType: "Synchromesh",
      numberOfSpeeds: "10 Forward + 2 Reverse",
      tyreDimensions: "6.00 x 16 Front, 14.9 x 28 Rear",
      forwardSpeed: "32.5 kmph",
      ptoType: "Live PTO",
      ptoSpeed: "540 RPM",
      hydraulicsLiftingCapacity: "1650 kgf",
      threepointLinkage: "Draft, position and response control",
      brakeType: "Dry disc brakes",
      steeringType: "Power steering",
      electricals: "12 V 85 Ah Battery, 12 V 45 A Alternator",
      overallLength: "3350 mm",
      overallWidth: "1720 mm",
      overallHeight: "2220 mm",
      wheelbase: "1880 mm",
      totalWeight: "2050 kg",
      fuelTankCapacity: "60 L",
      features: "Heritage styling, Classic design, Modern performance"
    },
    keyFeatures: [
      "Heritage design aesthetics",
      "Classic styling",
      "Modern performance",
      "Nostalgic appeal",
      "Premium finish"
    ],
    applications: ["Heritage farming", "Display purposes", "Premium farming", "Classic operations"],
    useCase: "Combines classic heritage look with modern performance",
    seoDescription: "DynaTrack Heritage Look - Classic design with modern performance. Heritage styling for premium farming. Contact Doon Motors.",
    popular: false
  }
];

export { tractorDatabase as tractors };

// Additional models will be added as we fetch more data from the official website