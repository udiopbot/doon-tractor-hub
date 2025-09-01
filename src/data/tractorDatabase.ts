// Comprehensive Massey Ferguson Tractor Database
// Updated with detailed specifications

// Import tractor images
import mf1035DiNew from "@/assets/mf-1035-di-new.jpg";
import mf1035DiDost from "@/assets/mf-1035-di-dost.jpg";
import mf1035DiSuperPlus from "@/assets/mf-1035-di-super-plus.jpg";
import mf1035R from "@/assets/mf-1035-r.jpg";
import mf245Di from "@/assets/mf-245-di-50hp.jpg";
import mf245Pd46HP from "@/assets/mf-245-pd-46hp.jpg";
import mf241Pd from "@/assets/mf-241-pd.jpg";
import mf241Pd4WD from "@/assets/mf-241-pd-4wd.jpg";
import mf241R from "@/assets/mf-241-r.jpg";
import mf241OrchardPlus from "@/assets/mf-241-orchard-plus.jpg";
import mf30DiOrchardPlus from "@/assets/mf-30-di-orchard-plus.jpg";
import mf5245Pd4WD from "@/assets/mf-5245-pd-4wd.jpg";
import mf6026MaxPro from "@/assets/mf-6026-maxpro.jpg";
import mf6028MaxPro4WD from "@/assets/mf-6028-maxpro-4wd.jpg";
import mf7250DiPowerUp from "@/assets/mf-7250-di-powerup.jpg";
import mf7250DiAW from "@/assets/mf-7250-di-aw.jpg";
import mf7235Loader from "@/assets/mf-7235-loader.jpg";
import mf7235LFT from "@/assets/mf-7235-lft.jpg";
import mf9500PS from "@/assets/mf-9500-ps.jpg";
import mf9500Smart from "@/assets/mf-9500-smart.jpg";
import mf5118_4WD from "@/assets/mf-5118-4wd.jpg";
import mf5118_2WD from "@/assets/mf-5118-2wd.jpg";
import mf5225 from "@/assets/mf-5225.jpg";
import mf9563 from "@/assets/mf-9563.jpg";
import mfUdaan2 from "@/assets/mf-udaan-2.jpg";
import dynatrackSmart from "@/assets/dynatrack-smart.jpg";
import mf241DynatrackLoader from "@/assets/mf-241-dynatrack-loader.jpg";

// Import implement images
import cultivator from "@/assets/cultivator.jpg";
import discHarrow from "@/assets/disc-harrow.jpg";
import hydraulicTrailer from "@/assets/hydraulic-trailer.jpg";
import rotaryTiller from "@/assets/rotary-tiller.jpg";
import superSeeder from "@/assets/super-seeder.jpg";
import thresher from "@/assets/thresher.jpg";
import potatoPlanter from "@/assets/potato-planter.jpg";
import mfLoader from "@/assets/mf-loader.jpg";
import tafeAgristarSuperSeeder from "@/assets/tafe-agristar-super-seeder.jpg";

export interface TractorSpecs {
  powerRange: string;
  engine: string;
  cylinders: number;
  cubicCapacity: string;
  rpm: string;
  transmission: string;
  transmissionType?: string;
  clutchType?: string;
  pto: string;
  ptoSpeed?: string;
  hydraulics: string;
  hydraulicsLiftingCapacity?: string;
  brakes: string;
  brakeType?: string;
  steering: string;
  steeringType?: string;
  tyres: string;
  fuelTank: string;
  fuelTankCapacity?: string;
  weight: string;
  totalWeight?: string;
  wheelbase?: string;
  forwardSpeed?: string;
  bestFor: string;
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

// Updated Massey Ferguson Tractors with detailed specifications
export const tractorDatabase: TractorData[] = [
  // 1035 Series
  {
    id: 101,
    model: "Massey Ferguson 1035 DI",
    series: "1035 Series",
    hp: "36 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf1035DiNew,
    officialSpecs: {
      powerRange: "36 HP",
      engine: "3-cylinder, 2400 CC, 2500 RPM",
      cylinders: 3,
      cubicCapacity: "2400 CC",
      rpm: "2500 RPM",
      transmission: "Sliding mesh gearbox, 6 forward + 2 reverse gears, single clutch",
      pto: "540 RPM @ 1500 ERPM, 30 HP PTO power",
      hydraulics: "Lifting capacity 1100 kg, Draft/Position control",
      brakes: "Dry disc brakes / optional oil-immersed brakes",
      steering: "Mechanical or power steering (optional)",
      tyres: "Front – 6.00 x 16, Rear – 12.4 x 28 / 13.6 x 28",
      fuelTank: "47 litres",
      weight: "1713 kg approx.",
      wheelbase: "1835 mm wheelbase",
      bestFor: "Agriculture, haulage, threshers, rotavators, and small-scale implements"
    },
    keyFeatures: [
      "3-cylinder 2400 CC engine",
      "Single clutch transmission",
      "1100 kg lifting capacity",
      "30 HP PTO power",
      "Dual tyre options",
      "Optional power steering"
    ],
    applications: ["Agriculture", "Haulage", "Threshers", "Rotavators", "Small-scale implements"],
    useCase: "Ideal for agriculture, haulage, and small-scale farming operations",
    seoDescription: "Massey Ferguson 1035 DI - 36 HP tractor with 3-cylinder engine. Best for agriculture and haulage. Contact Doon Motors for pricing.",
    popular: true
  },

  {
    id: 102,
    model: "Massey Ferguson 1035 DI Dost",
    series: "Dost Series",
    hp: "35 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf1035DiDost,
    officialSpecs: {
      powerRange: "35 HP",
      engine: "3-cylinder, 2400 CC, 2500 RPM",
      cylinders: 3,
      cubicCapacity: "2400 CC",
      rpm: "2500 RPM",
      transmission: "8 forward + 2 reverse gears, dual/single clutch",
      pto: "30 HP PTO power, 540 RPM",
      hydraulics: "Lifting capacity 1100 kg with advanced hydraulics",
      brakes: "Dry disc brakes / optional oil-immersed brakes",
      steering: "Manual steering (power steering optional)",
      tyres: "Front – 6.00 x 16, Rear – 12.4 x 28",
      fuelTank: "47 litres",
      weight: "1700+ kg",
      wheelbase: "Compact body suitable for orchards and small farms",
      bestFor: "Orchard farming, inter-cultivation, small haulage"
    },
    keyFeatures: [
      "Compact design for orchards",
      "8F + 2R transmission",
      "Advanced hydraulics",
      "Dual clutch option",
      "Small farm specialist",
      "Inter-cultivation capable"
    ],
    applications: ["Orchard farming", "Inter-cultivation", "Small haulage", "Compact farms"],
    useCase: "Perfect for orchard farming and inter-cultivation work",
    seoDescription: "MF 1035 DI Dost - 35 HP compact tractor for orchards. Perfect for inter-cultivation and small farms. Available at Doon Motors.",
    popular: false
  },

  {
    id: 103,
    model: "Massey Ferguson 1035 DI Super Plus",
    series: "Super Plus Series",
    hp: "40 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf1035DiSuperPlus,
    officialSpecs: {
      powerRange: "40 HP",
      engine: "3-cylinder, 2400 CC, 2500 RPM",
      cylinders: 3,
      cubicCapacity: "2400 CC",
      rpm: "2500 RPM",
      transmission: "8 forward + 2 reverse gears, partial constant mesh gearbox",
      pto: "540 RPM PTO, 34 HP PTO power",
      hydraulics: "Lifting capacity 1100 kg, draft/position control, oil-immersed pumps",
      brakes: "Oil-immersed brakes",
      steering: "Mechanical / optional power steering",
      tyres: "Front – 6.00 x 16, Rear – 13.6 x 28",
      fuelTank: "47 litres",
      weight: "1700+ kg",
      wheelbase: "1935 mm wheelbase",
      bestFor: "Rotavators, cultivators, ploughs, haulage, and medium-scale farming"
    },
    keyFeatures: [
      "Partial constant mesh gearbox",
      "Oil-immersed brakes",
      "34 HP PTO power",
      "Oil-immersed pumps",
      "Enhanced hydraulics",
      "Medium-scale farming specialist"
    ],
    applications: ["Rotavators", "Cultivators", "Ploughs", "Haulage", "Medium-scale farming"],
    useCase: "Enhanced performance for medium-scale farming operations",
    seoDescription: "MF 1035 DI Super Plus - 40 HP tractor with enhanced features. Perfect for medium-scale farming. Contact Doon Motors.",
    popular: true
  },

  {
    id: 104,
    model: "MF 1035 R",
    series: "R Series",
    hp: "31 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf1035R,
    officialSpecs: {
      powerRange: "~31 HP",
      engine: "3-cylinder diesel",
      cylinders: 3,
      cubicCapacity: "N/A",
      rpm: "N/A",
      transmission: "12-speed gearbox",
      pto: "Live, 540 RPM",
      hydraulics: "Open center system, pump flow ~22.7 L/min, Lifting Capacity: 1,010 kg (2,227 lbs)",
      brakes: "Standard",
      steering: "Power steering",
      tyres: "Standard",
      fuelTank: "Standard",
      weight: "Approximately 1,230–1,330 kg (2,711–2,935 lbs)",
      wheelbase: "1,700 mm",
      bestFor: "Compact yet robust, suited for light field work, mowing, and loader duties"
    },
    keyFeatures: [
      "12-speed gearbox",
      "Available in 2WD or 4WD",
      "Power steering standard",
      "Open center hydraulics",
      "Loader compatible",
      "Compact design"
    ],
    applications: ["Light field work", "Mowing", "Loader duties", "Compact operations"],
    useCase: "Compact yet robust tractor for light field work and loader operations",
    seoDescription: "MF 1035 R - 31 HP compact tractor with 12-speed gearbox. Perfect for light field work and mowing. Available at Doon Motors.",
    popular: false
  },

  // 245 Series
  {
    id: 201,
    model: "MF 245 DI 50 HP",
    series: "245 Series",
    hp: "50 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf245Di,
    officialSpecs: {
      powerRange: "50 HP",
      engine: "SIMPSONS SJ327 TIII A, 3-cyl, 2,700 cc",
      cylinders: 3,
      cubicCapacity: "2,700 cc",
      rpm: "N/A",
      transmission: "Dual clutch; sliding mesh with optional partial constant mesh; available in 8F + 2R or optional 10F + 2R",
      pto: "N/A",
      hydraulics: "1,700 kg lifting capacity",
      brakes: "Sealed dry disc or multi-disc oil-immersed",
      steering: "Manual, with optional power steering",
      tyres: "Front – 6.00 × 16; Rear – 13.6 × 28 or 14.9 × 28",
      fuelTank: "47 litres (some sources note up to 55 L in certain variants)",
      weight: "Weight ~1,915 kg",
      wheelbase: "Wheelbase ~1,830 mm, Width ~1,705 mm, Length ~3,320 mm",
      bestFor: "Heavy-duty farming—ploughing, haulage, implement work. Excellent choice for efficiency and durability."
    },
    keyFeatures: [
      "SIMPSONS SJ327 engine",
      "Dual clutch system",
      "Optional 10F + 2R transmission",
      "Heavy-duty design",
      "Multiple tyre options",
      "Enhanced hydraulics"
    ],
    applications: ["Heavy-duty farming", "Ploughing", "Haulage", "Implement work"],
    useCase: "Heavy-duty farming operations requiring efficiency and durability",
    seoDescription: "MF 245 DI 50 HP - Heavy-duty Massey Ferguson tractor for commercial farming. Best for ploughing and implement work. Contact Doon Motors.",
    popular: true
  },

  {
    id: 202,
    model: "MF 245 PD 46 HP",
    series: "245 Series",
    hp: "46 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf245Pd46HP,
    officialSpecs: {
      powerRange: "46 HP",
      engine: "~2,700 cc, 3-cylinder",
      cylinders: 3,
      cubicCapacity: "~2,700 cc",
      rpm: "N/A",
      transmission: "Partial constant mesh; 8F + 2R or optional 10F + 2R",
      pto: "~42.5 HP PTO Power",
      hydraulics: "1,700 kg Lifting Capacity",
      brakes: "Standard",
      steering: "Manual; power steering optional",
      tyres: "Standard",
      fuelTank: "Approx. 55 litres",
      weight: "N/A",
      wheelbase: "N/A",
      bestFor: "Versatile mid-range farming tasks—cultivation, ploughing, and general usage balancing power and cost-efficiency."
    },
    keyFeatures: [
      "Partial constant mesh transmission",
      "42.5 HP PTO power",
      "Cost-efficient design",
      "Versatile applications",
      "Power steering option",
      "2WD configuration"
    ],
    applications: ["Mid-range farming", "Cultivation", "Ploughing", "General usage"],
    useCase: "Versatile mid-range farming balancing power and cost-efficiency",
    seoDescription: "MF 245 PD 46 HP - Mid-range Massey Ferguson tractor for versatile farming. Cost-efficient and powerful. Available at Doon Motors.",
    popular: true
  },

  // 241 Series
  {
    id: 301,
    model: "Massey Ferguson 241 PD",
    series: "241 Series",
    hp: "42 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf241Pd,
    officialSpecs: {
      powerRange: "42 HP",
      engine: "3-cylinder, 2500 cc, 1900 RPM",
      cylinders: 3,
      cubicCapacity: "2500 cc",
      rpm: "1900 RPM",
      transmission: "Sliding mesh / partial constant mesh, dual clutch option, 8F + 2R gears",
      pto: "36 HP PTO, Live PTO with 540 RPM @ 1500 engine RPM",
      hydraulics: "Lifting capacity 1700 kg, draft/position/response control",
      brakes: "Oil-immersed disc brakes",
      steering: "Manual / power steering option",
      tyres: "Front – 6.00x16, Rear – 13.6x28 / 12.4x28",
      fuelTank: "47 litres",
      weight: "Approx. 1875 kg",
      wheelbase: "Wheelbase 1785 mm, ground clearance 340 mm",
      bestFor: "Agriculture, haulage, implements like rotavator, cultivator, trailer"
    },
    keyFeatures: [
      "Dual clutch option",
      "Live PTO system",
      "Oil-immersed brakes",
      "Response control hydraulics",
      "Multiple tyre options",
      "Versatile implement compatibility"
    ],
    applications: ["Agriculture", "Haulage", "Rotavator work", "Cultivator operations", "Trailer work"],
    useCase: "General agriculture and implement operations",
    seoDescription: "Massey Ferguson 241 PD - 42 HP tractor for agriculture and haulage. Versatile implement compatibility. Contact Doon Motors.",
    popular: true
  },

  {
    id: 302,
    model: "Massey Ferguson 241 PD 4WD",
    series: "241 4WD Series",
    hp: "42 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf241Pd4WD,
    officialSpecs: {
      powerRange: "42 HP",
      engine: "3-cylinder, 2500 cc, 1900 RPM",
      cylinders: 3,
      cubicCapacity: "2500 cc",
      rpm: "1900 RPM",
      transmission: "Sliding mesh / partial constant mesh, dual clutch, 8F + 2R gears",
      pto: "36 HP PTO, Live PTO with 540 RPM",
      hydraulics: "Lifting capacity 1700 kg, draft/position/response control",
      brakes: "Oil-immersed brakes",
      steering: "Power steering standard",
      tyres: "Front – 8.00x18, Rear – 13.6x28 (with 4WD capability)",
      fuelTank: "47 litres",
      weight: "Approx. 2050 kg",
      wheelbase: "Wheelbase 1935 mm, ground clearance 340 mm",
      bestFor: "Orchard farming, wetland cultivation, loader work, and heavy-duty field tasks"
    },
    keyFeatures: [
      "4WD capability",
      "Power steering standard",
      "Enhanced traction",
      "Heavy-duty design",
      "Wetland capable",
      "Loader compatible"
    ],
    applications: ["Orchard farming", "Wetland cultivation", "Loader work", "Heavy-duty field tasks"],
    useCase: "4WD operations in challenging terrain and heavy-duty tasks",
    seoDescription: "MF 241 PD 4WD - 4WD tractor for orchard and wetland farming. Enhanced traction and power. Available at Doon Motors.",
    popular: true
  },

  {
    id: 303,
    model: "Massey Ferguson 241 R",
    series: "241 R Series",
    hp: "42 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf241R,
    officialSpecs: {
      powerRange: "42 HP",
      engine: "3-cylinder, 2500 cc, 1900 RPM",
      cylinders: 3,
      cubicCapacity: "2500 cc",
      rpm: "1900 RPM",
      transmission: "Sliding mesh, dual clutch option, 8F + 2R gears",
      pto: "36 HP PTO, 540 RPM @ 1500 engine RPM",
      hydraulics: "Lifting capacity 1700 kg, draft/position/response control",
      brakes: "Dry disc / oil-immersed brakes",
      steering: "Manual / power steering option",
      tyres: "Front – 6.00x16, Rear – 13.6x28",
      fuelTank: "47 litres",
      weight: "Approx. 1875 kg",
      wheelbase: "Wheelbase 1785 mm, ground clearance 345 mm",
      bestFor: "Agricultural farming, haulage, seeding, and lightweight commercial use"
    },
    keyFeatures: [
      "R-series reliability",
      "Dual clutch option",
      "Versatile applications",
      "Commercial use capability",
      "Seeding compatible",
      "Lightweight design"
    ],
    applications: ["Agricultural farming", "Haulage", "Seeding", "Lightweight commercial use"],
    useCase: "Reliable agricultural farming and lightweight commercial operations",
    seoDescription: "Massey Ferguson 241 R - Reliable 42 HP tractor for agricultural farming. Perfect for seeding and haulage. Contact Doon Motors.",
    popular: false
  },

  {
    id: 304,
    model: "MF 241 Orchard Plus",
    series: "Orchard Series",
    hp: "42 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf241OrchardPlus,
    officialSpecs: {
      powerRange: "42 HP",
      engine: "3-cylinder, 2500 CC, 2100 RPM",
      cylinders: 3,
      cubicCapacity: "2500 CC",
      rpm: "2100 RPM",
      transmission: "Sliding mesh, dual clutch, 8F + 2R gears",
      pto: "38 HP PTO, 540 PTO RPM",
      hydraulics: "1700 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Mechanical/Power steering (optional)",
      tyres: "Front 6.00 x 16, Rear 12.4 x 28; compact design for orchards",
      fuelTank: "47 L",
      weight: "N/A",
      wheelbase: "Compact design",
      bestFor: "Orchard farming, vineyards, inter-cultivation"
    },
    keyFeatures: [
      "Orchard specialist design",
      "Compact dimensions",
      "Inter-cultivation capable",
      "Vineyard optimized",
      "38 HP PTO power",
      "Optional power steering"
    ],
    applications: ["Orchard farming", "Vineyards", "Inter-cultivation", "Specialty crops"],
    useCase: "Specialized for orchard farming and vineyard operations",
    seoDescription: "MF 241 Orchard Plus - Specialized orchard tractor for vineyards. Compact design for inter-cultivation. Available at Doon Motors.",
    popular: false
  },

  // Small Orchard Series
  {
    id: 305,
    model: "MF 30 DI Orchard Plus",
    series: "30 Orchard Series",
    hp: "30 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf30DiOrchardPlus,
    officialSpecs: {
      powerRange: "30 HP",
      engine: "2-cylinder, 1670 CC, 2000 RPM",
      cylinders: 2,
      cubicCapacity: "1670 CC",
      rpm: "2000 RPM",
      transmission: "Sliding mesh, dual clutch, 6F + 2R gears",
      pto: "25 HP PTO, 540 PTO RPM",
      hydraulics: "1100 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Mechanical steering",
      tyres: "Front 5.2 x 14, Rear 12.4 x 24; narrow design for orchards",
      fuelTank: "47 L",
      weight: "N/A",
      wheelbase: "Narrow design",
      bestFor: "Small orchards, vineyards, inter-row cultivation"
    },
    keyFeatures: [
      "2-cylinder engine",
      "Narrow orchard design",
      "Inter-row specialist",
      "Small orchard optimized",
      "25 HP PTO power",
      "Compact dimensions"
    ],
    applications: ["Small orchards", "Vineyards", "Inter-row cultivation", "Narrow spaces"],
    useCase: "Specialized for small orchards and narrow space operations",
    seoDescription: "MF 30 DI Orchard Plus - Small orchard tractor for vineyards. Narrow design for inter-row cultivation. Contact Doon Motors.",
    popular: false
  },

  // 4WD Heavy Duty Series
  {
    id: 401,
    model: "MF 5245 PD 4WD",
    series: "5245 4WD Series",
    hp: "50 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf5245Pd4WD,
    officialSpecs: {
      powerRange: "50 HP",
      engine: "3-cylinder, 2700 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2000 RPM",
      transmission: "Partial constant mesh, dual clutch, 8F + 2R gears",
      pto: "43 HP PTO, 540 PTO RPM",
      hydraulics: "1700 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering",
      tyres: "Front 8.00 x 18, Rear 14.9 x 28; 4WD for heavy-duty work",
      fuelTank: "47 L",
      weight: "N/A",
      wheelbase: "Heavy-duty design",
      bestFor: "Tillage, heavy haulage, wet & hard soil operations"
    },
    keyFeatures: [
      "4WD capability",
      "Heavy-duty design",
      "Wet soil specialist",
      "43 HP PTO power",
      "Power steering standard",
      "Enhanced traction"
    ],
    applications: ["Tillage", "Heavy haulage", "Wet soil operations", "Hard soil work"],
    useCase: "Heavy-duty operations in challenging soil conditions",
    seoDescription: "MF 5245 PD 4WD - 50 HP 4WD tractor for heavy-duty work. Perfect for wet and hard soil operations. Available at Doon Motors.",
    popular: true
  },

  // MaxPro Series
  {
    id: 501,
    model: "MF 6026 MaxPro",
    series: "MaxPro Series",
    hp: "26 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf6026MaxPro,
    officialSpecs: {
      powerRange: "26 HP",
      engine: "3-cylinder, 1318 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "1318 CC",
      rpm: "2000 RPM",
      transmission: "Sliding mesh, single/dual clutch, 9F + 3R gears",
      pto: "21.6 HP PTO, 540 PTO RPM",
      hydraulics: "739 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering",
      tyres: "Front 6.00 x 12, Rear 8.3 x 20; compact & maneuverable",
      fuelTank: "23 L",
      weight: "N/A",
      wheelbase: "Compact design",
      bestFor: "Orchard farming, inter-cultivation, puddling"
    },
    keyFeatures: [
      "Compact MaxPro design",
      "9F + 3R transmission",
      "Highly maneuverable",
      "Puddling specialist",
      "Power steering",
      "Small fuel tank for efficiency"
    ],
    applications: ["Orchard farming", "Inter-cultivation", "Puddling", "Compact operations"],
    useCase: "Compact operations requiring high maneuverability",
    seoDescription: "MF 6026 MaxPro - 26 HP compact tractor for orchards. Highly maneuverable for inter-cultivation. Contact Doon Motors.",
    popular: false
  },

  {
    id: 502,
    model: "MF 6028 MaxPro 4WD",
    series: "MaxPro 4WD Series",
    hp: "28 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf6028MaxPro4WD,
    officialSpecs: {
      powerRange: "28 HP",
      engine: "3-cylinder, 1318 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "1318 CC",
      rpm: "2000 RPM",
      transmission: "Sliding mesh, dual clutch, 9F + 3R gears",
      pto: "23 HP PTO, 540 PTO RPM",
      hydraulics: "739 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering",
      tyres: "Front 6.00 x 12, Rear 8.3 x 20; 4WD for extra grip",
      fuelTank: "23 L",
      weight: "N/A",
      wheelbase: "4WD compact design",
      bestFor: "Orchard farming, vineyards, wet soil operations"
    },
    keyFeatures: [
      "4WD MaxPro design",
      "Extra grip capability",
      "Vineyard specialist",
      "Wet soil operations",
      "Compact 4WD",
      "Enhanced traction"
    ],
    applications: ["Orchard farming", "Vineyards", "Wet soil operations", "4WD compact work"],
    useCase: "Compact 4WD operations in orchards and wet conditions",
    seoDescription: "MF 6028 MaxPro 4WD - 28 HP compact 4WD tractor. Perfect for orchards and wet soil operations. Available at Doon Motors.",
    popular: false
  },

  // 7250 Series
  {
    id: 601,
    model: "MF 7250 DI PowerUp",
    series: "7250 PowerUp Series",
    hp: "50 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf7250DiPowerUp,
    officialSpecs: {
      powerRange: "50 HP",
      engine: "3-cylinder, 2700 CC, 2100 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2100 RPM",
      transmission: "Partial constant mesh, dual clutch, 8F + 2R gears",
      pto: "43 HP PTO, 540 PTO RPM",
      hydraulics: "1800 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering",
      tyres: "Front 6.50 x 16, Rear 14.9 x 28; balanced design for farms",
      fuelTank: "55 L",
      weight: "N/A",
      wheelbase: "Balanced design",
      bestFor: "Tillage, haulage, multi-purpose farming"
    },
    keyFeatures: [
      "PowerUp performance",
      "Enhanced lifting capacity",
      "Multi-purpose capability",
      "Balanced farm design",
      "Larger fuel tank",
      "Power steering standard"
    ],
    applications: ["Tillage", "Haulage", "Multi-purpose farming", "General agriculture"],
    useCase: "Multi-purpose farming with enhanced performance",
    seoDescription: "MF 7250 DI PowerUp - 50 HP multi-purpose tractor with enhanced performance. Perfect for tillage and haulage. Contact Doon Motors.",
    popular: true
  },

  {
    id: 602,
    model: "MF 7250 DI AW",
    series: "7250 AW Series",
    hp: "46 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf7250DiAW,
    officialSpecs: {
      powerRange: "46 HP",
      engine: "3-cylinder, 2700 CC, 2100 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2100 RPM",
      transmission: "Partial constant mesh, dual clutch, 8F + 2R gears",
      pto: "39 HP PTO, 540 PTO RPM",
      hydraulics: "1800 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering",
      tyres: "Front 6.50 x 16, Rear 14.9 x 28",
      fuelTank: "55 L",
      weight: "N/A",
      wheelbase: "Standard design",
      bestFor: "Agricultural & haulage use, balanced for mixed farming"
    },
    keyFeatures: [
      "AW series reliability",
      "Mixed farming optimized",
      "Balanced performance",
      "Enhanced hydraulics",
      "55L fuel capacity",
      "Power steering"
    ],
    applications: ["Agricultural farming", "Haulage", "Mixed farming", "General operations"],
    useCase: "Balanced performance for mixed farming operations",
    seoDescription: "MF 7250 DI AW - 46 HP tractor for agricultural and haulage use. Balanced for mixed farming. Available at Doon Motors.",
    popular: false
  },

  // 7235 Loader Series
  {
    id: 701,
    model: "MF 7235 Loader",
    series: "7235 Loader Series",
    hp: "35 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf7235Loader,
    officialSpecs: {
      powerRange: "35 HP",
      engine: "3-cylinder, 2270 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "2270 CC",
      rpm: "2000 RPM",
      transmission: "Sliding mesh, single/dual clutch, 8F + 2R gears",
      pto: "30 HP PTO, 540 PTO RPM",
      hydraulics: "1100 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering",
      tyres: "Strong front axle to handle loader weight",
      fuelTank: "47 L",
      weight: "N/A",
      wheelbase: "Loader optimized",
      bestFor: "Loader operations, haulage, light field work"
    },
    keyFeatures: [
      "Loader specialist design",
      "Strong front axle",
      "Loader operations optimized",
      "Dual clutch option",
      "Power steering standard",
      "Enhanced stability"
    ],
    applications: ["Loader operations", "Haulage", "Light field work", "Material handling"],
    useCase: "Specialized for loader operations and material handling",
    seoDescription: "MF 7235 Loader - 35 HP tractor optimized for loader operations. Strong front axle design. Available at Doon Motors.",
    popular: true
  },

  {
    id: 702,
    model: "MF 7235 LFT",
    series: "7235 LFT Series",
    hp: "35 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf7235LFT,
    officialSpecs: {
      powerRange: "35 HP",
      engine: "3-cylinder, 2270 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "2270 CC",
      rpm: "2000 RPM",
      transmission: "Sliding mesh, dual clutch, 8F + 2R gears",
      pto: "30 HP PTO, 540 PTO RPM",
      hydraulics: "1100 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Mechanical/power steering option",
      tyres: "Special LFT (Lift Tractor) design for higher loads",
      fuelTank: "47 L",
      weight: "N/A",
      wheelbase: "LFT optimized",
      bestFor: "Implements, lifting & loading, orchard and farm use"
    },
    keyFeatures: [
      "LFT (Lift Tractor) design",
      "Higher load capacity",
      "Implement specialist",
      "Orchard compatible",
      "Lifting optimized",
      "Versatile applications"
    ],
    applications: ["Implements", "Lifting & loading", "Orchard work", "Farm use"],
    useCase: "Specialized lift tractor for implements and loading operations",
    seoDescription: "MF 7235 LFT - 35 HP lift tractor for implements and loading. Special LFT design for higher loads. Contact Doon Motors.",
    popular: false
  },

  // 9500 Series
  {
    id: 801,
    model: "MF 9500 PS (50 HP)",
    series: "9500 PS Series",
    hp: "50 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf9500PS,
    officialSpecs: {
      powerRange: "50 HP",
      engine: "3-cylinder, 2700 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2000 RPM",
      transmission: "Partial synchromesh, dual clutch, 8F + 2R gears",
      pto: "43 HP PTO, 540 PTO RPM",
      hydraulics: "2050 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering",
      tyres: "Front 7.50 x 16, Rear 14.9 x 28",
      fuelTank: "60 L",
      weight: "N/A",
      wheelbase: "Heavy-duty design",
      bestFor: "Heavy-duty tillage, sowing, reaping, multiple implements"
    },
    keyFeatures: [
      "Partial synchromesh transmission",
      "Heavy-duty performance",
      "Multiple implement capability",
      "Enhanced lifting capacity",
      "60L fuel tank",
      "Power steering standard"
    ],
    applications: ["Heavy-duty tillage", "Sowing", "Reaping", "Multiple implements"],
    useCase: "Heavy-duty operations with multiple implement capability",
    seoDescription: "MF 9500 PS - 50 HP heavy-duty tractor for tillage and reaping. Multiple implement capability. Available at Doon Motors.",
    popular: true
  },

  {
    id: 802,
    model: "MF 9500 Smart",
    series: "9500 Smart Series",
    hp: "58 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf9500Smart,
    officialSpecs: {
      powerRange: "58 HP",
      engine: "3-cylinder, 2700 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2000 RPM",
      transmission: "Partial constant mesh / synchromesh, dual clutch, 8F + 2R gears",
      pto: "50 HP PTO, 540 PTO RPM",
      hydraulics: "2050 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering",
      tyres: "Front 7.50 x 16, Rear 16.9 x 28",
      fuelTank: "60 L",
      weight: "N/A",
      wheelbase: "Smart technology design",
      bestFor: "Heavy-duty implements, large-scale farming, powerful field work"
    },
    keyFeatures: [
      "Smart series technology",
      "High power output",
      "Large-scale farming",
      "50 HP PTO power",
      "Enhanced hydraulics",
      "Advanced transmission"
    ],
    applications: ["Heavy-duty implements", "Large-scale farming", "Powerful field work", "Commercial operations"],
    useCase: "Large-scale farming with smart technology and high power",
    seoDescription: "MF 9500 Smart - 58 HP smart technology tractor for large-scale farming. Most powerful in series. Contact Doon Motors.",
    popular: true
  },

  // 5118 Series
  {
    id: 901,
    model: "MF 5118 4WD",
    series: "5118 4WD Series",
    hp: "20 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf5118_4WD,
    officialSpecs: {
      powerRange: "20 HP",
      engine: "1-cylinder, 825 CC, 2100 RPM",
      cylinders: 1,
      cubicCapacity: "825 CC",
      rpm: "2100 RPM",
      transmission: "Sliding mesh, single clutch, 8F + 2R gears",
      pto: "17 HP PTO, 540 PTO RPM",
      hydraulics: "780 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering",
      tyres: "Front 5.0 x 12, Rear 8.0 x 18 (4WD)",
      fuelTank: "28 L",
      weight: "N/A",
      wheelbase: "Compact 4WD design",
      bestFor: "Orchards, vineyards, intercultural operations, light-duty work"
    },
    keyFeatures: [
      "Compact 4WD capability",
      "Single cylinder efficiency",
      "Orchard specialist",
      "Intercultural operations",
      "Power steering",
      "Small fuel tank"
    ],
    applications: ["Orchards", "Vineyards", "Intercultural operations", "Light-duty work"],
    useCase: "Compact 4WD operations in orchards and vineyards",
    seoDescription: "MF 5118 4WD - 20 HP compact 4WD tractor for orchards. Perfect for intercultural operations. Available at Doon Motors.",
    popular: false
  },

  {
    id: 902,
    model: "MF 5118 2WD",
    series: "5118 2WD Series",
    hp: "20 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf5118_2WD,
    officialSpecs: {
      powerRange: "20 HP",
      engine: "1-cylinder, 825 CC, 2100 RPM",
      cylinders: 1,
      cubicCapacity: "825 CC",
      rpm: "2100 RPM",
      transmission: "Sliding mesh, single clutch, 8F + 2R gears",
      pto: "17 HP PTO, 540 PTO RPM",
      hydraulics: "780 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Mechanical steering",
      tyres: "Front 5.0 x 12, Rear 8.0 x 18 (2WD)",
      fuelTank: "28 L",
      weight: "N/A",
      wheelbase: "Compact design",
      bestFor: "Small farms, orchards, vineyards, intercultural crops"
    },
    keyFeatures: [
      "Single cylinder engine",
      "Compact 2WD design",
      "Small farm specialist",
      "Vineyard operations",
      "Mechanical steering",
      "Cost-effective"
    ],
    applications: ["Small farms", "Orchards", "Vineyards", "Intercultural crops"],
    useCase: "Cost-effective solution for small farms and orchards",
    seoDescription: "MF 5118 2WD - 20 HP compact tractor for small farms. Cost-effective solution for orchards and vineyards. Contact Doon Motors.",
    popular: true
  },

  // 5225 & Other Models
  {
    id: 903,
    model: "MF 5225",
    series: "5225 Series",
    hp: "25 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf5225,
    officialSpecs: {
      powerRange: "25 HP",
      engine: "3-cylinder, 1670 CC, 2100 RPM",
      cylinders: 3,
      cubicCapacity: "1670 CC",
      rpm: "2100 RPM",
      transmission: "Sliding mesh, dual clutch, 8F + 2R gears",
      pto: "22 HP PTO, 540 PTO RPM",
      hydraulics: "1100 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Manual/power steering option",
      tyres: "Compact size, suitable for orchards",
      fuelTank: "35 L",
      weight: "N/A",
      wheelbase: "Compact design",
      bestFor: "Small farms, orchards, gardens, lightweight haulage"
    },
    keyFeatures: [
      "3-cylinder compact engine",
      "Orchard suitable size",
      "Garden operations",
      "Lightweight haulage",
      "Dual clutch system",
      "Versatile applications"
    ],
    applications: ["Small farms", "Orchards", "Gardens", "Lightweight haulage"],
    useCase: "Versatile compact tractor for small farms and gardens",
    seoDescription: "MF 5225 - 25 HP compact tractor for small farms and orchards. Perfect for gardens and lightweight haulage. Contact Doon Motors.",
    popular: false
  },

  {
    id: 904,
    model: "MF 9563 (63 HP)",
    series: "9563 Series",
    hp: "63 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mf9563,
    officialSpecs: {
      powerRange: "63 HP",
      engine: "3-cylinder, 2700 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2000 RPM",
      transmission: "Partial constant mesh, dual clutch, 8F + 2R gears",
      pto: "55 HP PTO, 540 PTO RPM",
      hydraulics: "2050 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering",
      tyres: "Front 7.5 x 16, Rear 16.9 x 28",
      fuelTank: "60 L",
      weight: "N/A",
      wheelbase: "Heavy-duty design",
      bestFor: "Heavy-duty implements, large farming, tillage & harvesting"
    },
    keyFeatures: [
      "High power 63 HP",
      "Heavy-duty implements",
      "Large farming capability",
      "55 HP PTO power",
      "Enhanced lifting capacity",
      "Harvesting operations"
    ],
    applications: ["Heavy-duty implements", "Large farming", "Tillage", "Harvesting"],
    useCase: "High-power operations for large farming and harvesting",
    seoDescription: "MF 9563 - 63 HP high-power tractor for large farming. Perfect for heavy-duty implements and harvesting. Contact Doon Motors.",
    popular: true
  },

  {
    id: 905,
    model: "MF Udaan 2.0",
    series: "Udaan Series",
    hp: "20 HP",
    category: "Tractor",
    priceRange: "Contact for Price",
    image: mfUdaan2,
    officialSpecs: {
      powerRange: "20 HP",
      engine: "1-cylinder, 825 CC, 2100 RPM",
      cylinders: 1,
      cubicCapacity: "825 CC",
      rpm: "2100 RPM",
      transmission: "Sliding mesh, single clutch, 6F + 2R gears",
      pto: "17 HP PTO, 540 PTO RPM",
      hydraulics: "750 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Mechanical/power steering option",
      tyres: "Compact tractor design for narrow fields",
      fuelTank: "28 L",
      weight: "N/A",
      wheelbase: "Compact design",
      bestFor: "Orchard farming, vegetable farming, light-duty haulage"
    },
    keyFeatures: [
      "Udaan 2.0 technology",
      "Narrow field specialist",
      "Vegetable farming optimized",
      "Light-duty operations",
      "Compact design",
      "Single cylinder efficiency"
    ],
    applications: ["Orchard farming", "Vegetable farming", "Light-duty haulage", "Narrow fields"],
    useCase: "Specialized for narrow fields and vegetable farming",
    seoDescription: "MF Udaan 2.0 - 20 HP tractor for orchard and vegetable farming. Perfect for narrow fields. Available at Doon Motors.",
    popular: false
  }
];

// DynaTrack Series
export const dynaTrackDatabase: TractorData[] = [
  {
    id: 1001,
    model: "DynaTrack Smart",
    series: "DynaTrack Series",
    hp: "50 HP",
    category: "DynaTrack",
    priceRange: "Contact for Price",
    image: dynatrackSmart,
    officialSpecs: {
      powerRange: "~50 HP",
      engine: "3-cylinder, 2700 cc, inline fuel injection pump",
      cylinders: 3,
      cubicCapacity: "2700 cc",
      rpm: "N/A",
      transmission: "Fully constant mesh, 12 F + 12 R gears, dual diaphragm/clutch, SuperShuttle (quick forward-reverse switching)",
      pto: "Quadra PTO, six-splined, 540 RPM @ ~1789–1790 ERPM",
      hydraulics: "2050 kg lifting capacity; draft, position & response controls; Cat I linkage",
      brakes: "Maxx oil-immersed brakes",
      steering: "Smooth power steering",
      tyres: "Front—6.00 × 16; Rear—14.9 × 28 or 13.6 × 28",
      fuelTank: "~61 L",
      weight: "Weight ~2190 kg",
      wheelbase: "Wheelbase 2040 mm; ground clearance ~400 mm",
      bestFor: "Heavy-duty field operations, haulage, puddling, and demanding usage—an ultra-versatile 50 HP workhorse with advanced tech and high comfort."
    },
    keyFeatures: [
      "Fully constant mesh transmission",
      "SuperShuttle technology",
      "Quadra PTO system",
      "Advanced hydraulics",
      "Maxx oil-immersed brakes",
      "Ultra-versatile design"
    ],
    applications: ["Heavy-duty field operations", "Haulage", "Puddling", "Demanding usage"],
    useCase: "Ultra-versatile workhorse with advanced technology for demanding operations",
    seoDescription: "DynaTrack Smart - 50 HP ultra-versatile tractor with SuperShuttle technology. Advanced features for demanding operations. Contact Doon Motors.",
    popular: true
  }
];

// Implement Database
export const implementDatabase = [
  // Loaders
  {
    id: 2001,
    name: "MF 241 DynaTrack Loader",
    category: "Loader",
    description: "Designed specifically for the MF 241 DI DynaTrack tractor.",
    specifications: [
      "Loader Capacity: Can lift up to ~1,100 kg",
      "Height: Capable of dumping up to 11 feet (~335 cm) high",
      "Built for unmatched traction and efficiency on the DynaTrack platform",
      "Ideal for loader operations, material handling, and haulage"
    ],
    priceRange: "Contact for Price",
    image: mf241DynatrackLoader,
    applications: ["Loader operations", "Material handling", "Haulage"],
    bestFor: "DynaTrack tractor owners requiring specialized loader operations"
  },

  {
    id: 2002,
    name: "MF 7235 Loader",
    category: "Loader",
    description: "Based on the MF 7235 DI tractor with enhanced loader capabilities.",
    specifications: [
      "Engine: 35 HP, 3-cylinder, 2,270 cc, inline fuel pump",
      "Transmission: 8 Forward + 2 Reverse gears, single diaphragm clutch",
      "Lifting Capacity: ~1,200 kg",
      "PTO: Live PTO, 540 RPM (optional 1,000 RPM)",
      "Brakes & Steering: Oil-immersed brakes; manual or power steering (optional)",
      "Dimensions: Wheelbase ~1,925 mm; total weight ~1,770 kg; ground clearance ~400 mm",
      "Fuel Tank: 47 L",
      "Hydraulics: ADDC (Automatic Draft & Depth Control) with oil pipe and chain stabilizer"
    ],
    priceRange: "Contact for Price",
    image: mf7235Loader,
    applications: ["Loader tasks", "Haulage", "Tilling", "General farm work"],
    bestFor: "Loader tasks with excellent maneuverability and control"
  },

  // Seeders
  {
    id: 2003,
    name: "TAFE AgriStar Super Seeder",
    category: "Seeder",
    description: "Heavy-duty, all-in-one 3-in-1 implement combining tilling, sowing, and mulching crop residue.",
    specifications: [
      "Construction: Robust gearbox and bearings, powder-coated finish for durability",
      "Compatibility: Requires 45–90 HP tractors (preferably dual-clutch or 4WD)",
      "3-in-1 functionality: Tilling, sowing, and mulching in one pass",
      "Performs seedbed preparation, residue management, and sowing simultaneously",
      "Boosts germination and reduces stubble burning"
    ],
    priceRange: "Contact for Price",
    image: tafeAgristarSuperSeeder,
    applications: ["Seedbed preparation", "Residue management", "Sowing", "Multi-crop farming"],
    bestFor: "Comprehensive seeding operations with residue management"
  },

  {
    id: 2004,
    name: "Super Seeder",
    category: "Seeder", 
    description: "Advanced seeding implement for efficient crop establishment.",
    specifications: [
      "Multi-crop seeding capability",
      "Precise seed placement",
      "Adjustable seed rate",
      "Suitable for various field conditions",
      "Durable construction for long life"
    ],
    priceRange: "Contact for Price",
    image: superSeeder,
    applications: ["Wheat sowing", "Multi-crop seeding", "Direct seeding", "Conservation agriculture"],
    bestFor: "Efficient and precise seeding operations across various crops"
  },

  // Tillage Equipment
  {
    id: 2005,
    name: "Cultivator",
    category: "Tillage",
    description: "Heavy-duty cultivator for soil preparation and seedbed making.",
    specifications: [
      "Available in various working widths",
      "Spring-loaded tines for consistent depth",
      "Adjustable working depth",
      "Robust frame construction",
      "Suitable for all soil types"
    ],
    priceRange: "Contact for Price",
    image: cultivator,
    applications: ["Soil preparation", "Seedbed preparation", "Inter-cultivation", "Weed control"],
    bestFor: "Primary and secondary tillage operations for optimal soil preparation"
  },

  {
    id: 2006,
    name: "Disc Harrow",
    category: "Tillage",
    description: "Efficient disc harrow for primary and secondary tillage operations.",
    specifications: [
      "High-quality disc blades for effective cutting",
      "Adjustable cutting angle",
      "Heavy-duty frame construction",
      "Available in multiple sizes",
      "Suitable for crop residue management"
    ],
    priceRange: "Contact for Price",
    image: discHarrow,
    applications: ["Primary tillage", "Secondary tillage", "Crop residue management", "Soil inversion"],
    bestFor: "Breaking hard soil and managing crop residues effectively"
  },

  {
    id: 2007,
    name: "Rotary Tiller",
    category: "Tillage",
    description: "High-performance rotary tiller for fine seedbed preparation.",
    specifications: [
      "Made of tough steel construction",
      "Available in sizes from 3 ft to 10 ft",
      "Multi-speed operation capability",
      "6-ft models feature around 42 blades",
      "Excellent for seedbed prep and soil mixing",
      "Adjustable working depth"
    ],
    priceRange: "Contact for Price",
    image: rotaryTiller,
    applications: ["Seedbed preparation", "Soil mixing", "Fine tillage", "Garden preparation"],
    bestFor: "Creating fine, well-prepared seedbeds with excellent soil mixing"
  },

  // Harvesting Equipment
  {
    id: 2008,
    name: "Thresher",
    category: "Harvesting",
    description: "Efficient threshing machine for grain separation and cleaning.",
    specifications: [
      "High threshing capacity",
      "Clean grain separation",
      "Adjustable fan speed for cleaning",
      "Durable construction for heavy use",
      "Suitable for various grain crops"
    ],
    priceRange: "Contact for Price",
    image: thresher,
    applications: ["Grain threshing", "Seed separation", "Crop processing", "Post-harvest operations"],
    bestFor: "Efficient grain threshing and separation from harvested crops"
  },

  // Specialty Equipment
  {
    id: 2009,
    name: "Potato Planter", 
    category: "Planting",
    description: "Specialized planting equipment for potato cultivation.",
    specifications: [
      "Precise potato placement",
      "Adjustable planting depth",
      "Multiple row capability",
      "Furrow opening and closing system",
      "Suitable for various potato sizes"
    ],
    priceRange: "Contact for Price",
    image: potatoPlanter,
    applications: ["Potato planting", "Tuber crops", "Commercial potato farming", "Precision agriculture"],
    bestFor: "Professional potato planting operations with precise spacing and depth"
  },

  // Transport Equipment
  {
    id: 2010,
    name: "Hydraulic Trailer",
    category: "Transport",
    description: "Heavy-duty hydraulic trailer for efficient material transport and loading.",
    specifications: [
      "Hydraulic tipping mechanism",
      "High load carrying capacity", 
      "Robust chassis construction",
      "Easy loading and unloading",
      "Suitable for various materials",
      "Compatibility varies with tractor power and linkage"
    ],
    priceRange: "Contact for Price",
    image: hydraulicTrailer,
    applications: ["Material transport", "Farm produce haulage", "Construction material transport", "Bulk material handling"],
    bestFor: "Efficient transport and hydraulic unloading of various materials"
  }
];

export const allTractorData = [...tractorDatabase, ...dynaTrackDatabase];

// Legacy export for backwards compatibility
export const tractors = allTractorData;