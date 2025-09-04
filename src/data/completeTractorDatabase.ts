// Complete Massey Ferguson Tractor Database - Organized by Model Families
// Data sourced from TractorGyan, TractorKarvan, and official MF sources

import { TractorData } from './tractorDatabase';

// Import existing images (we'll use these and add more as needed)
import mf1035Di from "@/assets/mf-1035-di.jpg";
import mf1035DiNew from "@/assets/mf-1035-di-new.jpg";
import mf1035DiDost from "@/assets/mf-1035-di-dost.jpg";
import mf1035DiSuperPlus from "@/assets/mf-1035-di-super-plus.jpg";
import mf241Di from "@/assets/mf-241-di.jpg";
import mf241Pd from "@/assets/mf-241-pd.jpg";
import mf241Pd4WD from "@/assets/mf-241-pd-4wd.jpg";
import mf241R from "@/assets/mf-241-r.jpg";
import mf241OrchardPlus from "@/assets/mf-241-orchard-plus.jpg";
import mf241DynatrackLoader from "@/assets/mf-241-dynatrack-loader.jpg";
import mf245Di50hp from "@/assets/mf-245-di-50hp.jpg";
import mf245Pd46hp from "@/assets/mf-245-pd-46hp.jpg";
import mf30DiOrchardPlus from "@/assets/mf-30-di-orchard-plus.jpg";
import mf30Orchard from "@/assets/mf-30-orchard.jpg";
import mf5118_2WD from "@/assets/mf-5118-2wd.jpg";
import mf5118_4WD from "@/assets/mf-5118-4wd.jpg";
import mf5118Enhanced from "@/assets/mf-5118-enhanced.jpg";
import mf5225 from "@/assets/mf-5225.jpg";
import mf5245Pd4WD from "@/assets/mf-5245-pd-4wd.jpg";
import mf6026MaxPro from "@/assets/mf-6026-maxpro.jpg";
import mf6028MaxPro4WD from "@/assets/mf-6028-maxpro-4wd.jpg";
import mf7235Loader from "@/assets/mf-7235-loader.jpg";
import mf7235LFT from "@/assets/mf-7235-lft.jpg";
import mf7250DiAW from "@/assets/mf-7250-di-aw.jpg";
import mf7250DiPowerUp from "@/assets/mf-7250-di-powerup.jpg";
import mf9500PS from "@/assets/mf-9500-ps.jpg";
import mf9500Smart from "@/assets/mf-9500-smart.jpg";
import mf9563 from "@/assets/mf-9563.jpg";
import mfUdaan2 from "@/assets/mf-udaan-2.jpg";
import dynatrackSmart from "@/assets/dynatrack-smart.jpg";
import dynatrackHeritage from "@/assets/dynatrack-heritage.jpg";

export const completeTractorDatabase: TractorData[] = [
  // ============= MF 1035 FAMILY =============
  {
    id: 1001,
    model: "Massey Ferguson 1035 DI",
    series: "1035 Series",
    hp: "36 HP",
    category: "Tractor",
    priceRange: "₹5.65 - ₹6.05 Lakh",
    image: mf1035Di,
    officialSpecs: {
      powerRange: "36 HP",
      engine: "3-cylinder, 2400 CC, 2500 RPM",
      cylinders: 3,
      cubicCapacity: "2400 CC",
      rpm: "2500 RPM",
      transmission: "Sliding mesh gearbox, 6F + 2R gears, single clutch",
      pto: "540 RPM @ 1500 ERPM, 30 HP PTO power",
      hydraulics: "Lifting capacity 1100 kg, Draft/Position control",
      brakes: "Dry disc brakes / optional oil-immersed brakes",
      steering: "Mechanical or power steering (optional)",
      tyres: "Front – 6.00 x 16, Rear – 12.4 x 28 / 13.6 x 28",
      fuelTank: "47 litres",
      weight: "1713 kg approx.",
      wheelbase: "1835 mm",
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
    id: 1002,
    model: "Massey Ferguson 1035 DI Planetary Plus",
    series: "1035 Planetary Plus Series",
    hp: "40 HP",
    category: "Tractor",
    priceRange: "₹6.05 - ₹6.34 Lakh",
    image: mf1035DiNew,
    officialSpecs: {
      powerRange: "40 HP",
      engine: "3-cylinder, 2400 CC, 2500 RPM",
      cylinders: 3,
      cubicCapacity: "2400 CC",
      rpm: "2500 RPM",
      transmission: "Planetary Plus gearbox, 8F + 2R gears, dual clutch",
      pto: "540 RPM, 34 HP PTO power",
      hydraulics: "Lifting capacity 1100 kg, enhanced hydraulics",
      brakes: "Oil-immersed brakes",
      steering: "Mechanical / optional power steering",
      tyres: "Front – 6.00 x 16, Rear – 13.6 x 28",
      fuelTank: "47 litres",
      weight: "1750+ kg",
      wheelbase: "1935 mm",
      bestFor: "Enhanced farming operations, medium implements, rotavators"
    },
    keyFeatures: [
      "Planetary Plus transmission",
      "Enhanced 8F + 2R gearbox",
      "Oil-immersed brakes",
      "34 HP PTO power",
      "Dual clutch system",
      "Enhanced hydraulics"
    ],
    applications: ["Medium farming", "Rotavators", "Cultivators", "Enhanced operations"],
    useCase: "Enhanced version for medium-scale farming with planetary transmission",
    seoDescription: "MF 1035 DI Planetary Plus - 40 HP enhanced tractor with planetary transmission. Perfect for medium farming operations.",
    popular: true
  },

  {
    id: 1003,
    model: "Massey Ferguson 1035 DI Maha Shakti",
    series: "1035 Maha Shakti Series",
    hp: "39 HP",
    category: "Tractor",
    priceRange: "₹5.85 - ₹6.25 Lakh",
    image: mf1035DiSuperPlus,
    officialSpecs: {
      powerRange: "39 HP",
      engine: "3-cylinder, 2400 CC, 2500 RPM",
      cylinders: 3,
      cubicCapacity: "2400 CC",
      rpm: "2500 RPM",
      transmission: "Partial constant mesh, 8F + 2R gears",
      pto: "540 RPM, 33 HP PTO power",
      hydraulics: "Lifting capacity 1100 kg, Maha Shakti hydraulics",
      brakes: "Oil-immersed brakes",
      steering: "Power steering optional",
      tyres: "Front – 6.00 x 16, Rear – 13.6 x 28",
      fuelTank: "47 litres",
      weight: "1700+ kg",
      wheelbase: "1835 mm",
      bestFor: "Powerful farming operations, heavy implements, commercial use"
    },
    keyFeatures: [
      "Maha Shakti power",
      "Enhanced performance",
      "33 HP PTO power",
      "Commercial grade build",
      "Powerful hydraulics",
      "Heavy-duty design"
    ],
    applications: ["Heavy farming", "Commercial operations", "Power implements", "Intensive farming"],
    useCase: "High-power variant for intensive and commercial farming operations",
    seoDescription: "MF 1035 DI Maha Shakti - 39 HP powerful tractor for intensive farming. Enhanced performance and reliability.",
    popular: true
  },

  {
    id: 1004,
    model: "Massey Ferguson 1035 Super Plus",
    series: "1035 Super Plus Series",
    hp: "40 HP",
    category: "Tractor",
    priceRange: "₹6.15 - ₹6.45 Lakh",
    image: mf1035DiSuperPlus,
    officialSpecs: {
      powerRange: "40 HP",
      engine: "3-cylinder, 2400 CC, 2500 RPM",
      cylinders: 3,
      cubicCapacity: "2400 CC",
      rpm: "2500 RPM",
      transmission: "Super Plus transmission, 10F + 2R gears",
      pto: "540 RPM, 34 HP PTO power",
      hydraulics: "Lifting capacity 1200 kg, Super Plus hydraulics",
      brakes: "Oil-immersed disc brakes",
      steering: "Power steering standard",
      tyres: "Front – 6.50 x 16, Rear – 13.6 x 28",
      fuelTank: "50 litres",
      weight: "1800+ kg",
      wheelbase: "1935 mm",
      bestFor: "Premium farming, versatile operations, advanced implements"
    },
    keyFeatures: [
      "Super Plus transmission",
      "10F + 2R gear options",
      "Enhanced lifting capacity",
      "Power steering standard",
      "Premium build quality",
      "Advanced hydraulics"
    ],
    applications: ["Premium farming", "Versatile operations", "Advanced implements", "Commercial farming"],
    useCase: "Premium variant with advanced features for versatile farming operations",
    seoDescription: "MF 1035 Super Plus - 40 HP premium tractor with advanced features. Perfect for versatile farming operations.",
    popular: false
  },

  {
    id: 1005,
    model: "Massey Ferguson 1134 DI",
    series: "1100 Series",
    hp: "35 HP",
    category: "Tractor",
    priceRange: "₹5.67 - ₹5.95 Lakh",
    image: mf1035Di,
    officialSpecs: {
      powerRange: "35 HP",
      engine: "3-cylinder, 2400 CC, 2500 RPM",
      cylinders: 3,
      cubicCapacity: "2400 CC",
      rpm: "2500 RPM",
      transmission: "Sliding mesh, 8F + 2R gears",
      pto: "540 RPM, 29 HP PTO power",
      hydraulics: "Lifting capacity 1000 kg",
      brakes: "Dry disc brakes",
      steering: "Mechanical steering",
      tyres: "Front – 6.00 x 16, Rear – 12.4 x 28",
      fuelTank: "45 litres",
      weight: "1650 kg",
      wheelbase: "1800 mm",
      bestFor: "Small to medium farming, haulage, basic implements"
    },
    keyFeatures: [
      "Compact 1100 series",
      "Cost-effective design",
      "29 HP PTO power",
      "Basic operations focused",
      "Reliable performance",
      "Easy maintenance"
    ],
    applications: ["Small farming", "Basic implements", "Haulage", "Entry-level farming"],
    useCase: "Entry-level tractor for small farming operations",
    seoDescription: "MF 1134 DI - 35 HP entry-level tractor for small farming. Cost-effective and reliable.",
    popular: false
  },

  // ============= MF 241 FAMILY =============
  {
    id: 2001,
    model: "Massey Ferguson 241 R",
    series: "241 R Series",
    hp: "42 HP",
    category: "Tractor",
    priceRange: "₹6.88 - ₹7.20 Lakh",
    image: mf241R,
    officialSpecs: {
      powerRange: "42 HP",
      engine: "3-cylinder, 2500 CC, 1900 RPM",
      cylinders: 3,
      cubicCapacity: "2500 CC",
      rpm: "1900 RPM",
      transmission: "Sliding mesh, dual clutch option, 8F + 2R gears",
      pto: "36 HP PTO, 540 RPM @ 1500 engine RPM",
      hydraulics: "Lifting capacity 1700 kg, draft/position/response control",
      brakes: "Dry disc / oil-immersed brakes",
      steering: "Manual / power steering option",
      tyres: "Front – 6.00x16, Rear – 13.6x28",
      fuelTank: "47 litres",
      weight: "Approx. 1875 kg",
      wheelbase: "1785 mm",
      bestFor: "Agricultural farming, haulage, seeding, lightweight commercial use"
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
    seoDescription: "Massey Ferguson 241 R - Reliable 42 HP tractor for agricultural farming. Perfect for seeding and haulage.",
    popular: true
  },

  {
    id: 2002,
    model: "Massey Ferguson 241 DI",
    series: "241 DI Series",
    hp: "42 HP",
    category: "Tractor",
    priceRange: "₹6.75 - ₹7.15 Lakh",
    image: mf241Di,
    officialSpecs: {
      powerRange: "42 HP",
      engine: "3-cylinder, 2500 CC, 1900 RPM",
      cylinders: 3,
      cubicCapacity: "2500 CC",
      rpm: "1900 RPM",
      transmission: "Sliding mesh / partial constant mesh, dual clutch, 8F + 2R gears",
      pto: "36 HP PTO, Live PTO with 540 RPM",
      hydraulics: "Lifting capacity 1700 kg, draft/position/response control",
      brakes: "Oil-immersed disc brakes",
      steering: "Manual / power steering option",
      tyres: "Front – 6.00x16, Rear – 13.6x28 / 12.4x28",
      fuelTank: "47 litres",
      weight: "Approx. 1875 kg",
      wheelbase: "1785 mm",
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
    seoDescription: "Massey Ferguson 241 DI - 42 HP tractor for agriculture and haulage. Versatile implement compatibility.",
    popular: true
  },

  {
    id: 2003,
    model: "Massey Ferguson 241 DI 4WD",
    series: "241 4WD Series",
    hp: "42 HP",
    category: "Tractor",
    priceRange: "₹8.67 - ₹8.98 Lakh",
    image: mf241Pd4WD,
    officialSpecs: {
      powerRange: "42 HP",
      engine: "3-cylinder, 2500 CC, 1900 RPM",
      cylinders: 3,
      cubicCapacity: "2500 CC",
      rpm: "1900 RPM",
      transmission: "Sliding mesh / partial constant mesh, dual clutch, 8F + 2R gears",
      pto: "36 HP PTO, Live PTO with 540 RPM",
      hydraulics: "Lifting capacity 1700 kg, draft/position/response control",
      brakes: "Oil-immersed brakes",
      steering: "Power steering standard",
      tyres: "Front – 8.00x18, Rear – 13.6x28 (4WD capability)",
      fuelTank: "47 litres",
      weight: "Approx. 2050 kg",
      wheelbase: "1935 mm",
      bestFor: "Orchard farming, wetland cultivation, loader work, heavy-duty field tasks"
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
    seoDescription: "MF 241 DI 4WD - 4WD tractor for orchard and wetland farming. Enhanced traction and power.",
    popular: true
  },

  {
    id: 2004,
    model: "Massey Ferguson 241 DYNATRACK",
    series: "241 DYNATRACK Series",
    hp: "42 HP",
    category: "Tractor",
    priceRange: "₹7.32 - ₹7.73 Lakh",
    image: mf241DynatrackLoader,
    officialSpecs: {
      powerRange: "42 HP",
      engine: "3-cylinder, 2500 CC, 1900 RPM",
      cylinders: 3,
      cubicCapacity: "2500 CC",
      rpm: "1900 RPM",
      transmission: "DYNATRACK transmission, dual clutch, 8F + 2R gears",
      pto: "36 HP PTO, 540 RPM",
      hydraulics: "Lifting capacity 2050 kg, advanced hydraulics",
      brakes: "Oil-immersed brakes",
      steering: "Power steering",
      tyres: "Front – 6.50x16, Rear – 13.6x28",
      fuelTank: "47 litres",
      weight: "1950 kg",
      wheelbase: "1785 mm",
      bestFor: "Advanced farming, loader operations, heavy implements"
    },
    keyFeatures: [
      "DYNATRACK technology",
      "Enhanced lifting capacity",
      "Advanced hydraulics",
      "Loader ready",
      "Premium performance",
      "Heavy implement capable"
    ],
    applications: ["Advanced farming", "Loader operations", "Heavy implements", "Commercial farming"],
    useCase: "Advanced farming operations with DYNATRACK technology",
    seoDescription: "MF 241 DYNATRACK - 42 HP advanced tractor with DYNATRACK technology. Perfect for loader operations.",
    popular: true
  },

  {
    id: 2005,
    model: "MF 241 Orchard Plus",
    series: "241 Orchard Series",
    hp: "42 HP",
    category: "Tractor",
    priceRange: "₹7.15 - ₹7.55 Lakh",
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
      weight: "1850 kg",
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
    seoDescription: "MF 241 Orchard Plus - Specialized orchard tractor for vineyards. Compact design for inter-cultivation.",
    popular: false
  },

  {
    id: 2006,
    model: "Massey Ferguson 244 DI PD",
    series: "244 Series",
    hp: "44 HP",
    category: "Tractor",
    priceRange: "₹7.25 - ₹7.65 Lakh",
    image: mf241Di,
    officialSpecs: {
      powerRange: "44 HP",
      engine: "3-cylinder, 2500 CC, 1900 RPM",
      cylinders: 3,
      cubicCapacity: "2500 CC",
      rpm: "1900 RPM",
      transmission: "Partial constant mesh, dual clutch, 8F + 2R gears",
      pto: "38 HP PTO, 540 RPM",
      hydraulics: "Lifting capacity 1750 kg",
      brakes: "Oil-immersed brakes",
      steering: "Power steering optional",
      tyres: "Front – 6.50x16, Rear – 13.6x28",
      fuelTank: "50 litres",
      weight: "1900 kg",
      wheelbase: "1800 mm",
      bestFor: "Medium to heavy farming, commercial operations, implements"
    },
    keyFeatures: [
      "44 HP power",
      "Enhanced performance",
      "Commercial grade",
      "Medium-heavy operations",
      "Dual clutch system",
      "Power steering ready"
    ],
    applications: ["Medium farming", "Commercial operations", "Heavy implements", "Versatile farming"],
    useCase: "Medium to heavy farming operations with enhanced performance",
    seoDescription: "MF 244 DI PD - 44 HP tractor for medium to heavy farming. Enhanced performance and commercial capability.",
    popular: false
  },

  // ============= MF 245 FAMILY =============
  {
    id: 2501,
    model: "Massey Ferguson 245 DI",
    series: "245 Series",
    hp: "50 HP",
    category: "Tractor",
    priceRange: "₹7.15 - ₹7.75 Lakh",
    image: mf245Di50hp,
    officialSpecs: {
      powerRange: "50 HP",
      engine: "3-cylinder, 2700 CC, 2100 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2100 RPM",
      transmission: "Partial constant mesh; 8F + 2R or optional 10F + 2R",
      pto: "~42.5 HP PTO Power",
      hydraulics: "1,700 kg Lifting Capacity",
      brakes: "Oil-immersed disc brakes",
      steering: "Manual; power steering optional",
      tyres: "Standard configuration",
      fuelTank: "Approx. 55 litres",
      weight: "1950 kg",
      wheelbase: "1900 mm",
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
    seoDescription: "MF 245 DI - 50 HP Mid-range Massey Ferguson tractor for versatile farming. Cost-efficient and powerful.",
    popular: true
  },

  {
    id: 2502,
    model: "Massey Ferguson 245 PD 46 HP",
    series: "245 PD Series",
    hp: "46 HP",
    category: "Tractor",
    priceRange: "₹6.95 - ₹7.45 Lakh",
    image: mf245Pd46hp,
    officialSpecs: {
      powerRange: "46 HP",
      engine: "3-cylinder, 2700 CC, 2100 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2100 RPM",
      transmission: "Partial constant mesh; 8F + 2R or optional 10F + 2R",
      pto: "~39 HP PTO Power",
      hydraulics: "1,650 kg Lifting Capacity",
      brakes: "Standard disc brakes",
      steering: "Manual; power steering optional",
      tyres: "Standard configuration",
      fuelTank: "Approx. 55 litres",
      weight: "1900 kg",
      wheelbase: "1900 mm",
      bestFor: "Mid-range farming tasks, cultivation, ploughing, cost-effective operations"
    },
    keyFeatures: [
      "Cost-effective 46 HP",
      "Partial constant mesh",
      "39 HP PTO power",
      "Efficient design",
      "Versatile applications",
      "Power steering option"
    ],
    applications: ["Mid-range farming", "Cultivation", "Ploughing", "Cost-effective operations"],
    useCase: "Cost-effective mid-range farming with balanced performance",
    seoDescription: "MF 245 PD 46 HP - Cost-effective tractor for mid-range farming. Balanced performance and efficiency.",
    popular: false
  },

  {
    id: 2503,
    model: "Massey Ferguson 245 SMART 4WD",
    series: "245 SMART 4WD Series",
    hp: "46 HP",
    category: "Tractor",
    priceRange: "₹8.85 - ₹9.25 Lakh",
    image: mf245Di50hp,
    officialSpecs: {
      powerRange: "46 HP",
      engine: "3-cylinder, 2700 CC, 2100 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2100 RPM",
      transmission: "SMART transmission, 4WD capability, 8F + 2R gears",
      pto: "40 HP PTO, 540 RPM",
      hydraulics: "Lifting capacity 1700 kg",
      brakes: "Oil-immersed brakes",
      steering: "Power steering standard",
      tyres: "4WD configuration",
      fuelTank: "55 litres",
      weight: "2200 kg",
      wheelbase: "2000 mm",
      bestFor: "4WD operations, challenging terrain, heavy implements"
    },
    keyFeatures: [
      "SMART 4WD technology",
      "Enhanced traction",
      "Challenging terrain capable",
      "Power steering standard",
      "Heavy implement ready",
      "Advanced hydraulics"
    ],
    applications: ["4WD farming", "Challenging terrain", "Heavy implements", "Advanced operations"],
    useCase: "4WD operations for challenging terrain and heavy implement work",
    seoDescription: "MF 245 SMART 4WD - 46 HP 4WD tractor with SMART technology. Perfect for challenging terrain operations.",
    popular: false
  },

  {
    id: 2504,
    model: "Massey Ferguson 246 DYNATRACK 4WD",
    series: "246 DYNATRACK Series",
    hp: "46 HP",
    category: "Tractor",
    priceRange: "₹9.16 - ₹9.55 Lakh",
    image: mf245Di50hp,
    officialSpecs: {
      powerRange: "46 HP",
      engine: "3-cylinder, 2700 CC, 2100 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2100 RPM",
      transmission: "DYNATRACK 4WD transmission, dual clutch, 8F + 2R gears",
      pto: "40 HP PTO, 540 RPM",
      hydraulics: "Lifting capacity 2050 kg",
      brakes: "Oil-immersed brakes",
      steering: "Power steering standard",
      tyres: "4WD DYNATRACK configuration",
      fuelTank: "55 litres",
      weight: "2300 kg",
      wheelbase: "2050 mm",
      bestFor: "Premium 4WD operations, loader work, heavy-duty farming"
    },
    keyFeatures: [
      "DYNATRACK 4WD",
      "Premium performance",
      "Enhanced lifting capacity",
      "Loader ready",
      "Heavy-duty design",
      "Advanced technology"
    ],
    applications: ["Premium 4WD farming", "Loader operations", "Heavy-duty work", "Commercial farming"],
    useCase: "Premium 4WD operations with DYNATRACK technology for heavy-duty farming",
    seoDescription: "MF 246 DYNATRACK 4WD - 46 HP premium 4WD tractor with DYNATRACK technology. Perfect for heavy-duty operations.",
    popular: true
  },

// ============= MF 254 FAMILY =============
  {
    id: 2541,
    model: "Massey Ferguson 254 Dynasmart",
    series: "254 Dynasmart Series",
    hp: "50 HP",
    category: "Tractor",
    priceRange: "₹8.14 - ₹8.62 Lakh",
    image: mf7250DiPowerUp,
    officialSpecs: {
      powerRange: "50 HP",
      engine: "3-cylinder, 2700 CC, 2100 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2100 RPM",
      transmission: "Dynasmart transmission, 8F + 2R gears",
      pto: "43 HP PTO, 540 RPM",
      hydraulics: "Lifting capacity 2050 kg",
      brakes: "Oil-immersed brakes",
      steering: "Power steering standard",
      tyres: "Front – 6.50x16, Rear – 14.9x28",
      fuelTank: "55 litres",
      weight: "2100 kg",
      wheelbase: "2000 mm",
      bestFor: "Smart farming, advanced operations, medium to heavy implements"
    },
    keyFeatures: [
      "Dynasmart technology",
      "Smart farming ready",
      "Enhanced lifting capacity",
      "Advanced hydraulics",
      "Power steering standard",
      "Premium performance"
    ],
    applications: ["Smart farming", "Medium to heavy implements", "Advanced operations", "Commercial farming"],
    useCase: "Smart farming operations with advanced Dynasmart technology",
    seoDescription: "MF 254 Dynasmart - 50 HP smart tractor with Dynasmart technology. Perfect for advanced farming operations.",
    popular: true
  },

  {
    id: 2542,
    model: "Massey Ferguson 254 DYNATRACK 4WD",
    series: "254 DYNATRACK 4WD Series",
    hp: "50 HP",
    category: "Tractor",
    priceRange: "₹8.95 - ₹9.41 Lakh",
    image: mf7250DiPowerUp,
    officialSpecs: {
      powerRange: "50 HP",
      engine: "3-cylinder, 2700 CC, 2100 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2100 RPM",
      transmission: "DYNATRACK 4WD transmission, dual clutch, 8F + 2R gears",
      pto: "43 HP PTO, 540 RPM",
      hydraulics: "Lifting capacity 2050 kg",
      brakes: "Oil-immersed brakes",
      steering: "Power steering standard",
      tyres: "4WD DYNATRACK configuration",
      fuelTank: "55 litres",
      weight: "2400 kg",
      wheelbase: "2100 mm",
      bestFor: "Premium 4WD farming, heavy implements, challenging terrain"
    },
    keyFeatures: [
      "DYNATRACK 4WD technology",
      "Premium 50 HP performance",
      "Enhanced traction",
      "Heavy implement ready",
      "Challenging terrain capable",
      "Advanced hydraulics"
    ],
    applications: ["Premium 4WD farming", "Heavy implements", "Challenging terrain", "Commercial operations"],
    useCase: "Premium 4WD operations with 50 HP power and DYNATRACK technology",
    seoDescription: "MF 254 DYNATRACK 4WD - 50 HP premium 4WD tractor with DYNATRACK technology. Perfect for challenging terrain.",
    popular: true
  },

// ============= MF 7250 FAMILY =============
  {
    id: 7001,
    model: "MF 7250 DI PowerUp",
    series: "7250 PowerUp Series",
    hp: "50 HP",
    category: "Tractor",
    priceRange: "₹7.70 - ₹8.20 Lakh",
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
      weight: "2000 kg",
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
    seoDescription: "MF 7250 DI PowerUp - 50 HP multi-purpose tractor with enhanced performance. Perfect for tillage and haulage.",
    popular: true
  },

  {
    id: 7002,
    model: "MF 7250 DI AW",
    series: "7250 AW Series",
    hp: "46 HP",
    category: "Tractor",
    priceRange: "₹7.45 - ₹7.85 Lakh",
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
      weight: "1950 kg",
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
    seoDescription: "MF 7250 DI AW - 46 HP tractor for agricultural and haulage use. Balanced for mixed farming.",
    popular: false
  },

// ============= MF 7235 FAMILY =============
  {
    id: 7101,
    model: "MF 7235 Loader",
    series: "7235 Loader Series",
    hp: "35 HP",
    category: "Tractor",
    priceRange: "₹6.85 - ₹7.25 Lakh",
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
      weight: "1800 kg",
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
    seoDescription: "MF 7235 Loader - 35 HP tractor optimized for loader operations. Strong front axle design.",
    popular: true
  },

  {
    id: 7102,
    model: "MF 7235 LFT",
    series: "7235 LFT Series",
    hp: "35 HP",
    category: "Tractor",
    priceRange: "₹6.65 - ₹7.05 Lakh",
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
      weight: "1750 kg",
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
    seoDescription: "MF 7235 LFT - 35 HP lift tractor for implements and loading. Special LFT design for higher loads.",
    popular: false
  },

  {
    id: 7103,
    model: "MF 7235 DI",
    series: "7235 DI Series",
    hp: "35 HP",
    category: "Tractor",
    priceRange: "₹6.45 - ₹6.85 Lakh",
    image: mf7235Loader,
    officialSpecs: {
      powerRange: "35 HP",
      engine: "3-cylinder, 2270 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "2270 CC",
      rpm: "2000 RPM",
      transmission: "Sliding mesh, dual clutch, 8F + 2R gears",
      pto: "30 HP PTO, 540 PTO RPM",
      hydraulics: "1200 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Manual/power steering option",
      tyres: "Standard configuration",
      fuelTank: "47 L",
      weight: "1700 kg",
      wheelbase: "Standard design",
      bestFor: "General farming, implements, versatile operations"
    },
    keyFeatures: [
      "35 HP reliable power",
      "Versatile applications",
      "Enhanced lifting capacity",
      "Dual clutch system",
      "Cost-effective design",
      "General farming focus"
    ],
    applications: ["General farming", "Implements", "Versatile operations", "Light to medium work"],
    useCase: "General purpose 35 HP tractor for versatile farming operations",
    seoDescription: "MF 7235 DI - 35 HP general purpose tractor for versatile farming. Cost-effective and reliable.",
    popular: false
  },

// ============= MF 9500 FAMILY =============
  {
    id: 9001,
    model: "Massey Ferguson 9500 E",
    series: "9500 E Series",
    hp: "50 HP",
    category: "Tractor",
    priceRange: "₹8.22 - ₹8.57 Lakh",
    image: mf9500PS,
    officialSpecs: {
      powerRange: "50 HP",
      engine: "3-cylinder, 2700 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2000 RPM",
      transmission: "Partial constant mesh, dual clutch, 8F + 2R gears",
      pto: "43 HP PTO, 540 PTO RPM",
      hydraulics: "2050 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering",
      tyres: "Front 7.5 x 16, Rear 16.9 x 28",
      fuelTank: "60 L",
      weight: "2200 kg",
      wheelbase: "Heavy-duty design",
      bestFor: "Heavy-duty implements, large farming, tillage & harvesting"
    },
    keyFeatures: [
      "50 HP E-series power",
      "Heavy-duty implements",
      "Large farming capability",
      "43 HP PTO power",
      "Enhanced lifting capacity",
      "Commercial grade"
    ],
    applications: ["Heavy-duty implements", "Large farming", "Tillage", "Harvesting"],
    useCase: "Heavy-duty operations for large farming and commercial use",
    seoDescription: "MF 9500 E - 50 HP heavy-duty tractor for large farming. Perfect for heavy implements and harvesting.",
    popular: true
  },

  {
    id: 9002,
    model: "Massey Ferguson 9500 4WD SMART",
    series: "9500 SMART 4WD Series",
    hp: "58 HP",
    category: "Tractor",
    priceRange: "₹10.85 - ₹11.25 Lakh",
    image: mf9500Smart,
    officialSpecs: {
      powerRange: "58 HP",
      engine: "3-cylinder, 2700 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2000 RPM",
      transmission: "SMART 4WD transmission, dual clutch, 12F + 12R gears",
      pto: "50 HP PTO, 540 RPM",
      hydraulics: "2050 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering standard",
      tyres: "4WD SMART configuration",
      fuelTank: "65 L",
      weight: "2600 kg",
      wheelbase: "4WD optimized",
      bestFor: "Premium 4WD operations, heavy commercial farming, advanced implements"
    },
    keyFeatures: [
      "SMART 4WD technology",
      "58 HP premium power",
      "12F + 12R gears",
      "50 HP PTO power",
      "Premium performance",
      "Advanced technology"
    ],
    applications: ["Premium 4WD farming", "Heavy commercial farming", "Advanced implements", "Large operations"],
    useCase: "Premium 4WD operations for large commercial farming with SMART technology",
    seoDescription: "MF 9500 4WD SMART - 58 HP premium 4WD tractor with SMART technology. Perfect for large commercial farming.",
    popular: true
  },

  {
    id: 9003,
    model: "Massey Ferguson 9500 SMART 2WD",
    series: "9500 SMART 2WD Series",
    hp: "58 HP",
    category: "Tractor",
    priceRange: "₹9.85 - ₹10.25 Lakh",
    image: mf9500Smart,
    officialSpecs: {
      powerRange: "58 HP",
      engine: "3-cylinder, 2700 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2000 RPM",
      transmission: "SMART transmission, dual clutch, 12F + 12R gears",
      pto: "50 HP PTO, 540 RPM",
      hydraulics: "2050 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering standard",
      tyres: "SMART 2WD configuration",
      fuelTank: "60 L",
      weight: "2400 kg",
      wheelbase: "SMART optimized",
      bestFor: "SMART farming, advanced operations, heavy implements"
    },
    keyFeatures: [
      "SMART 2WD technology",
      "58 HP advanced power",
      "12F + 12R transmission",
      "50 HP PTO power",
      "Advanced performance",
      "Smart farming ready"
    ],
    applications: ["SMART farming", "Advanced operations", "Heavy implements", "Commercial farming"],
    useCase: "Advanced SMART farming operations with 58 HP power and smart technology",
    seoDescription: "MF 9500 SMART 2WD - 58 HP advanced tractor with SMART technology. Perfect for smart farming operations.",
    popular: true
  },

// ============= MF 9563 FAMILY =============
  {
    id: 9501,
    model: "MF 9563 Smart",
    series: "9563 Smart Series",
    hp: "63 HP",
    category: "Tractor",
    priceRange: "₹12.85 - ₹13.25 Lakh",
    image: mf9563,
    officialSpecs: {
      powerRange: "63 HP",
      engine: "3-cylinder, 2700 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2000 RPM",
      transmission: "SMART transmission, dual clutch, 12F + 12R gears",
      pto: "55 HP PTO, 540 RPM",
      hydraulics: "2200 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering standard",
      tyres: "Front 7.5 x 16, Rear 16.9 x 28",
      fuelTank: "65 L",
      weight: "2500 kg",
      wheelbase: "Heavy-duty design",
      bestFor: "High-power implements, large commercial farming, heavy-duty operations"
    },
    keyFeatures: [
      "High power 63 HP",
      "SMART technology",
      "55 HP PTO power",
      "Enhanced lifting capacity",
      "Commercial grade",
      "Advanced operations"
    ],
    applications: ["High-power implements", "Large commercial farming", "Heavy-duty operations", "Advanced farming"],
    useCase: "High-power commercial operations with SMART technology for large farming",
    seoDescription: "MF 9563 Smart - 63 HP high-power tractor with SMART technology. Perfect for large commercial farming.",
    popular: true
  },

  {
    id: 9502,
    model: "MF 9563 Smart 4WD",
    series: "9563 Smart 4WD Series",
    hp: "63 HP",
    category: "Tractor",
    priceRange: "₹15.85 - ₹17.31 Lakh",
    image: mf9563,
    officialSpecs: {
      powerRange: "63 HP",
      engine: "3-cylinder, 2700 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2000 RPM",
      transmission: "SMART 4WD transmission, dual clutch, 12F + 12R gears",
      pto: "55 HP PTO, 540 RPM",
      hydraulics: "2200 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering standard",
      tyres: "Premium 4WD configuration",
      fuelTank: "65 L",
      weight: "2800 kg",
      wheelbase: "Premium 4WD design",
      bestFor: "Premium 4WD operations, challenging terrain, heavy commercial farming"
    },
    keyFeatures: [
      "Premium 4WD 63 HP",
      "SMART 4WD technology",
      "Enhanced traction",
      "55 HP PTO power",
      "Premium performance",
      "Heavy commercial grade"
    ],
    applications: ["Premium 4WD farming", "Challenging terrain", "Heavy commercial operations", "Large farming"],
    useCase: "Premium 4WD operations for challenging terrain and heavy commercial farming",
    seoDescription: "MF 9563 Smart 4WD - 63 HP premium 4WD tractor with SMART technology. Perfect for challenging terrain operations.",
    popular: false
  },

// ============= MF 8055 MAGNATRAK FAMILY =============
  {
    id: 8001,
    model: "Massey Ferguson 8055 Magnatrak",
    series: "8055 Magnatrak Series",
    hp: "50 HP",
    category: "Tractor",
    priceRange: "₹10.15 - ₹10.75 Lakh",
    image: mf7250DiPowerUp,
    officialSpecs: {
      powerRange: "50 HP",
      engine: "3-cylinder, 2700 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2000 RPM",
      transmission: "Magnatrak transmission, dual clutch, 10F + 2R gears",
      pto: "43 HP PTO, 540 RPM",
      hydraulics: "1800 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering standard",
      tyres: "Magnatrak configuration",
      fuelTank: "60 L",
      weight: "2300 kg",
      wheelbase: "Magnatrak optimized",
      bestFor: "Magnatrak operations, heavy implements, commercial farming"
    },
    keyFeatures: [
      "Magnatrak technology",
      "Premium 50 HP performance",
      "Enhanced transmission",
      "Commercial grade build",
      "Heavy implement ready",
      "Advanced hydraulics"
    ],
    applications: ["Magnatrak operations", "Heavy implements", "Commercial farming", "Premium farming"],
    useCase: "Premium farming operations with Magnatrak technology for commercial use",
    seoDescription: "MF 8055 Magnatrak - 50 HP premium tractor with Magnatrak technology. Perfect for commercial farming.",
    popular: false
  },

// ============= MF 5118 FAMILY =============
  {
    id: 5001,
    model: "MF 5118 2WD",
    series: "5118 2WD Series",
    hp: "20 HP",
    category: "Tractor",
    priceRange: "₹3.62 - ₹3.85 Lakh",
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
      weight: "1200 kg",
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
    seoDescription: "MF 5118 2WD - 20 HP compact tractor for small farms. Cost-effective solution for orchards and vineyards.",
    popular: true
  },

  {
    id: 5002,
    model: "MF 5118 4WD",
    series: "5118 4WD Series",
    hp: "20 HP",
    category: "Tractor",
    priceRange: "₹4.15 - ₹4.45 Lakh",
    image: mf5118_4WD,
    officialSpecs: {
      powerRange: "20 HP",
      engine: "1-cylinder, 825 CC, 2100 RPM",
      cylinders: 1,
      cubicCapacity: "825 CC",
      rpm: "2100 RPM",
      transmission: "Sliding mesh, single clutch, 8F + 2R gears, 4WD",
      pto: "17 HP PTO, 540 PTO RPM",
      hydraulics: "780 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering",
      tyres: "Front 5.0 x 12, Rear 8.0 x 18 (4WD)",
      fuelTank: "28 L",
      weight: "1350 kg",
      wheelbase: "Compact 4WD design",
      bestFor: "Orchards, vineyards, intercultural operations, light-duty work"
    },
    keyFeatures: [
      "Compact 4WD capability",
      "Single cylinder efficiency",
      "Orchard specialist",
      "Intercultural operations",
      "Power steering",
      "Enhanced traction"
    ],
    applications: ["Orchards", "Vineyards", "Intercultural operations", "Light-duty work"],
    useCase: "Compact 4WD operations in orchards and vineyards",
    seoDescription: "MF 5118 4WD - 20 HP compact 4WD tractor for orchards. Perfect for intercultural operations.",
    popular: false
  },

  {
    id: 5003,
    model: "MF 5118 Enhanced",
    series: "5118 Enhanced Series",
    hp: "22 HP",
    category: "Tractor",
    priceRange: "₹3.85 - ₹4.15 Lakh",
    image: mf5118Enhanced,
    officialSpecs: {
      powerRange: "22 HP",
      engine: "1-cylinder, 825 CC, 2200 RPM",
      cylinders: 1,
      cubicCapacity: "825 CC",
      rpm: "2200 RPM",
      transmission: "Enhanced sliding mesh, single clutch, 8F + 2R gears",
      pto: "19 HP PTO, 540 PTO RPM",
      hydraulics: "850 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Enhanced steering system",
      tyres: "Enhanced configuration",
      fuelTank: "30 L",
      weight: "1250 kg",
      wheelbase: "Enhanced compact design",
      bestFor: "Enhanced small farming, improved orchard operations"
    },
    keyFeatures: [
      "Enhanced 22 HP power",
      "Improved performance",
      "Enhanced lifting capacity",
      "Better fuel capacity",
      "Improved steering",
      "Upgraded features"
    ],
    applications: ["Enhanced small farming", "Improved orchard operations", "Better productivity", "Upgraded operations"],
    useCase: "Enhanced version for improved small farming operations",
    seoDescription: "MF 5118 Enhanced - 22 HP enhanced compact tractor for improved small farming operations.",
    popular: false
  },

// ============= MF 5225 FAMILY =============
  {
    id: 5201,
    model: "MF 5225 DI",
    series: "5225 Series",
    hp: "24 HP",
    category: "Tractor",
    priceRange: "₹4.25 - ₹4.65 Lakh",
    image: mf5225,
    officialSpecs: {
      powerRange: "24 HP",
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
      weight: "1400 kg",
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
    seoDescription: "MF 5225 DI - 24 HP compact tractor for small farms and orchards. Perfect for gardens and lightweight haulage.",
    popular: false
  },

// ============= MF 5245 FAMILY =============
  {
    id: 5241,
    model: "MF 5245 PD 4WD",
    series: "5245 4WD Series",
    hp: "45 HP",
    category: "Tractor",
    priceRange: "₹8.45 - ₹8.85 Lakh",
    image: mf5245Pd4WD,
    officialSpecs: {
      powerRange: "45 HP",
      engine: "3-cylinder, 2700 CC, 2100 RPM",
      cylinders: 3,
      cubicCapacity: "2700 CC",
      rpm: "2100 RPM",
      transmission: "PD 4WD transmission, dual clutch, 8F + 2R gears",
      pto: "39 HP PTO, 540 PTO RPM",
      hydraulics: "1650 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering standard",
      tyres: "4WD configuration",
      fuelTank: "55 L",
      weight: "2200 kg",
      wheelbase: "4WD design",
      bestFor: "4WD farming, enhanced traction, medium to heavy implements"
    },
    keyFeatures: [
      "45 HP 4WD power",
      "Enhanced traction",
      "Power steering standard",
      "Medium-heavy capability",
      "PD transmission",
      "4WD performance"
    ],
    applications: ["4WD farming", "Enhanced traction work", "Medium to heavy implements", "Challenging terrain"],
    useCase: "4WD operations for enhanced traction and medium to heavy implement work",
    seoDescription: "MF 5245 PD 4WD - 45 HP 4WD tractor for enhanced traction farming. Perfect for challenging terrain.",
    popular: false
  },

// ============= MF MAXPRO FAMILY =============
  {
    id: 6001,
    model: "MF 6026 MaxPro",
    series: "MaxPro Series",
    hp: "26 HP",
    category: "Tractor",
    priceRange: "₹6.65 - ₹6.95 Lakh",
    image: mf6026MaxPro,
    officialSpecs: {
      powerRange: "26 HP",
      engine: "3-cylinder, 1318 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "1318 CC",
      rpm: "2000 RPM",
      transmission: "Sliding mesh, dual clutch, 9F + 3R gears",
      pto: "22 HP PTO, 540 PTO RPM",
      hydraulics: "739 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering",
      tyres: "Front 6.00 x 12, Rear 8.3 x 20",
      fuelTank: "23 L",
      weight: "1350 kg",
      wheelbase: "Compact MaxPro design",
      bestFor: "Orchard farming, vineyards, narrow space operations"
    },
    keyFeatures: [
      "MaxPro compact design",
      "Narrow space specialist",
      "Vineyard operations",
      "9F + 3R transmission",
      "Power steering",
      "Orchard optimized"
    ],
    applications: ["Orchard farming", "Vineyards", "Narrow space operations", "Compact farming"],
    useCase: "Compact operations in orchards and narrow spaces",
    seoDescription: "MF 6026 MaxPro - 26 HP compact tractor for orchards. Perfect for narrow space operations.",
    popular: false
  },

  {
    id: 6002,
    model: "MF 6028 MaxPro 4WD",
    series: "MaxPro 4WD Series",
    hp: "28 HP",
    category: "Tractor",
    priceRange: "₹6.91 - ₹7.21 Lakh",
    image: mf6028MaxPro4WD,
    officialSpecs: {
      powerRange: "28 HP",
      engine: "3-cylinder, 1318 CC, 2000 RPM",
      cylinders: 3,
      cubicCapacity: "1318 CC",
      rpm: "2000 RPM",
      transmission: "Sliding mesh, dual clutch, 9F + 3R gears, 4WD",
      pto: "23 HP PTO, 540 PTO RPM",
      hydraulics: "739 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering",
      tyres: "Front 6.00 x 12, Rear 8.3 x 20; 4WD for extra grip",
      fuelTank: "23 L",
      weight: "1450 kg",
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
    seoDescription: "MF 6028 MaxPro 4WD - 28 HP compact 4WD tractor. Perfect for orchards and wet soil operations.",
    popular: false
  },

  {
    id: 6003,
    model: "MF 6028 MaxPro (Narrow Track)",
    series: "MaxPro Narrow Track Series",
    hp: "28 HP",
    category: "Tractor",
    priceRange: "₹6.91 - ₹7.21 Lakh",
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
      tyres: "Narrow track configuration for tight spaces",
      fuelTank: "23 L",
      weight: "1380 kg",
      wheelbase: "Narrow track design",
      bestFor: "Narrow space farming, intercultural operations, tight vineyard rows"
    },
    keyFeatures: [
      "Narrow track specialist",
      "Tight space operations",
      "Intercultural capable",
      "Vineyard row specialist",
      "MaxPro efficiency",
      "Power steering"
    ],
    applications: ["Narrow space farming", "Intercultural operations", "Tight vineyard rows", "Specialized farming"],
    useCase: "Specialized operations in narrow spaces and tight vineyard rows",
    seoDescription: "MF 6028 MaxPro Narrow Track - 28 HP narrow track tractor for tight spaces. Perfect for vineyard rows.",
    popular: true
  },

// ============= MF 30 ORCHARD FAMILY =============
  {
    id: 3001,
    model: "MF 30 DI Orchard Plus",
    series: "30 Orchard Series",
    hp: "30 HP",
    category: "Tractor",
    priceRange: "₹5.85 - ₹6.25 Lakh",
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
      steering: "Mechanical/Power steering (optional)",
      tyres: "Front 5.0 x 12, Rear 8.3 x 20; orchard optimized",
      fuelTank: "35 L",
      weight: "1300 kg",
      wheelbase: "Orchard compact design",
      bestFor: "Orchard farming, fruit cultivation, inter-cultivation"
    },
    keyFeatures: [
      "Orchard specialist design",
      "2-cylinder efficiency",
      "Compact orchard dimensions",
      "Fruit cultivation optimized",
      "Inter-cultivation capable",
      "25 HP PTO power"
    ],
    applications: ["Orchard farming", "Fruit cultivation", "Inter-cultivation", "Specialty orchard work"],
    useCase: "Specialized orchard farming and fruit cultivation operations",
    seoDescription: "MF 30 DI Orchard Plus - 30 HP orchard tractor for fruit cultivation. Perfect for inter-cultivation work.",
    popular: false
  },

  {
    id: 3002,
    model: "MF 30 Orchard",
    series: "30 Orchard Standard Series",
    hp: "28 HP",
    category: "Tractor",
    priceRange: "₹5.65 - ₹6.05 Lakh",
    image: mf30Orchard,
    officialSpecs: {
      powerRange: "28 HP",
      engine: "2-cylinder, 1670 CC, 2000 RPM",
      cylinders: 2,
      cubicCapacity: "1670 CC",
      rpm: "2000 RPM",
      transmission: "Sliding mesh, single clutch, 6F + 2R gears",
      pto: "23 HP PTO, 540 PTO RPM",
      hydraulics: "1000 kg lifting capacity",
      brakes: "Dry disc brakes",
      steering: "Mechanical steering",
      tyres: "Standard orchard configuration",
      fuelTank: "35 L",
      weight: "1250 kg",
      wheelbase: "Standard orchard design",
      bestFor: "Standard orchard operations, basic fruit farming"
    },
    keyFeatures: [
      "Standard orchard design",
      "2-cylinder reliability",
      "Basic fruit farming",
      "Cost-effective",
      "Simple operations",
      "Orchard optimized"
    ],
    applications: ["Standard orchard operations", "Basic fruit farming", "Simple orchard work", "Entry-level orchard"],
    useCase: "Standard orchard operations for basic fruit farming",
    seoDescription: "MF 30 Orchard - 28 HP standard orchard tractor for basic fruit farming. Cost-effective orchard solution.",
    popular: false
  },

// ============= MF UDAAN FAMILY =============
  {
    id: 9101,
    model: "MF Udaan 2.0",
    series: "Udaan Series",
    hp: "20 HP",
    category: "Tractor",
    priceRange: "₹3.85 - ₹4.25 Lakh",
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
      weight: "1200 kg",
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
    seoDescription: "MF Udaan 2.0 - 20 HP tractor for orchard and vegetable farming. Perfect for narrow fields.",
    popular: false
  },

// ============= MF 2635 FAMILY (Premium) =============
  {
    id: 2601,
    model: "Massey Ferguson 2635 4WD",
    series: "2635 Premium Series",
    hp: "75 HP",
    category: "Tractor",
    priceRange: "₹15.05 - ₹16.50 Lakh",
    image: mf9563,
    officialSpecs: {
      powerRange: "75 HP",
      engine: "4-cylinder, 3300 CC, 2200 RPM",
      cylinders: 4,
      cubicCapacity: "3300 CC",
      rpm: "2200 RPM",
      transmission: "Premium 4WD transmission, dual clutch, 12F + 12R gears",
      pto: "65 HP PTO, 540/1000 RPM",
      hydraulics: "2500 kg lifting capacity",
      brakes: "Oil-immersed disc brakes",
      steering: "Power steering standard",
      tyres: "Premium 4WD configuration",
      fuelTank: "75 L",
      weight: "3200 kg",
      wheelbase: "Premium heavy-duty design",
      bestFor: "Premium farming, large commercial operations, heavy implements"
    },
    keyFeatures: [
      "Premium 75 HP power",
      "4-cylinder engine",
      "Premium 4WD capability",
      "65 HP PTO power",
      "12F + 12R transmission",
      "Heavy commercial grade"
    ],
    applications: ["Premium farming", "Large commercial operations", "Heavy implements", "Large-scale farming"],
    useCase: "Premium farming operations for large commercial and heavy-duty applications",
    seoDescription: "MF 2635 4WD - 75 HP premium 4WD tractor for large commercial farming. Top-of-the-line performance.",
    popular: false
  },

// ============= DYNATRACK SERIES =============
  {
    id: 10001,
    model: "DynaTrack Smart",
    series: "DynaTrack Smart Series",
    hp: "50 HP",
    category: "DynaTrack",
    priceRange: "₹9.85 - ₹10.25 Lakh",
    image: dynatrackSmart,
    officialSpecs: {
      powerRange: "~50 HP",
      engine: "3-cylinder, 2700 cc, inline fuel injection pump",
      cylinders: 3,
      cubicCapacity: "2700 cc",
      rpm: "2100 RPM",
      transmission: "Fully constant mesh, 12 F + 12 R gears, dual diaphragm/clutch, SuperShuttle (quick forward-reverse switching)",
      pto: "Quadra PTO, six-splined, 540 RPM @ ~1789–1790 ERPM",
      hydraulics: "2050 kg lifting capacity; draft, position & response controls; Cat I linkage",
      brakes: "Maxx oil-immersed brakes",
      steering: "Smooth power steering",
      tyres: "Front—6.00 × 16; Rear—14.9 × 28 or 13.6 × 28",
      fuelTank: "~61 L",
      weight: "Weight ~2190 kg",
      wheelbase: "Wheelbase 2040 mm; ground clearance ~400 mm",
      bestFor: "Versatile farming operations, tillage, haulage, and implements requiring superior performance"
    },
    keyFeatures: [
      "DynaTrack Smart technology",
      "SuperShuttle transmission",
      "12F + 12R gears",
      "Quadra PTO system",
      "Maxx oil-immersed brakes",
      "Advanced hydraulics"
    ],
    applications: ["Versatile farming", "Tillage", "Haulage", "Superior implement operations"],
    useCase: "Advanced farming operations with DynaTrack Smart technology",
    seoDescription: "DynaTrack Smart - 50 HP advanced tractor with DynaTrack technology. Superior performance for versatile farming.",
    popular: true
  },

  {
    id: 10002,
    model: "DynaTrack Heritage",
    series: "DynaTrack Heritage Series",
    hp: "42 HP",
    category: "DynaTrack",
    priceRange: "₹8.45 - ₹8.85 Lakh",
    image: dynatrackHeritage,
    officialSpecs: {
      powerRange: "42 HP",
      engine: "3-cylinder, 2500 cc, heritage design",
      cylinders: 3,
      cubicCapacity: "2500 cc",
      rpm: "1900 RPM",
      transmission: "Heritage DynaTrack transmission, 8F + 2R gears",
      pto: "36 HP PTO, 540 RPM",
      hydraulics: "1800 kg lifting capacity",
      brakes: "Oil-immersed brakes",
      steering: "Power steering",
      tyres: "Heritage configuration",
      fuelTank: "50 L",
      weight: "2000 kg",
      wheelbase: "Heritage design",
      bestFor: "Heritage farming, traditional operations, reliable performance"
    },
    keyFeatures: [
      "DynaTrack Heritage design",
      "Traditional reliability",
      "Heritage performance",
      "Time-tested technology",
      "Reliable operations",
      "Classic build quality"
    ],
    applications: ["Heritage farming", "Traditional operations", "Reliable farming", "Classic applications"],
    useCase: "Heritage farming operations with traditional DynaTrack reliability",
    seoDescription: "DynaTrack Heritage - 42 HP heritage tractor with traditional DynaTrack reliability. Time-tested performance.",
    popular: false
  }
];

export default completeTractorDatabase;