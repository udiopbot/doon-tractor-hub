// New Complete Tractor Database Based on Master SHEET.xlsx
// Organized by Model Families with exact Model numbers

// Import tractor images (reusing existing ones for now)
import mf5118_4WD from "@/assets/mf-5118-4wd.jpg";
import mf5118_2WD from "@/assets/mf-5118-2wd.jpg";
import mf5225 from "@/assets/mf-5225.jpg";
import mf6026MaxPro from "@/assets/mf-6026-maxpro.jpg";
import mf6028MaxPro4WD from "@/assets/mf-6028-maxpro-4wd.jpg";
import mf30DiOrchardPlus from "@/assets/mf-30-di-orchard-plus.jpg";
import mf30Orchard from "@/assets/mf-30-orchard.jpg";
import mf7235LFT from "@/assets/mf-7235-lft.jpg";
import mf7235Loader from "@/assets/mf-7235-loader.jpg";
import mf1035DiDost from "@/assets/mf-1035-di-dost.jpg";
import mf1035R from "@/assets/mf-1035-r.jpg";
import mf1035DiNew from "@/assets/mf-1035-di-new.jpg";
import mf1035DiSuperPlus from "@/assets/mf-1035-di-super-plus.jpg";
import mf241Di from "@/assets/mf-241-di.jpg";
import mf241Pd from "@/assets/mf-241-pd.jpg";
import mf241Pd4WD from "@/assets/mf-241-pd-4wd.jpg";
import mf241DynatrackLoader from "@/assets/mf-241-dynatrack-loader.jpg";
import mf245Di from "@/assets/mf-245-di-50hp.jpg";
import mf245Pd46HP from "@/assets/mf-245-pd-46hp.jpg";
import mf7250DiPowerUp from "@/assets/mf-7250-di-powerup.jpg";
import mf9500PS from "@/assets/mf-9500-ps.jpg";
import mf9500Smart from "@/assets/mf-9500-smart.jpg";
import mf9563 from "@/assets/mf-9563.jpg";

// Import implement images
import mfLoader from "@/assets/mf-loader.jpg";
import tafeAgristarSuperSeeder from "@/assets/tafe-agristar-super-seeder.jpg";
import hydraulicTrailer from "@/assets/hydraulic-trailer.jpg";
import rotaryTiller from "@/assets/rotary-tiller.jpg";

export interface TractorModel {
  id: number;
  modelNumber: number;
  variant: string;
  driveType: '2WD' | '4WD';
  hp: number;
  transmission: 'MS' | 'PS' | 'Smart' | 'SS' | 'CS';
  image: string;
  popular?: boolean;
  specifications: {
    engine: string;
    fuelTank: string;
    liftingCapacity: string;
    pto: string;
    weight?: string;
  };
  applications: string[];
  priceRange: string;
}

export interface TractorFamily {
  familyName: string;
  familyId: string;
  category: string;
  description: string;
  models: TractorModel[];
  mainImage: string;
  hpRange: string;
}

export interface Implement {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  applications: string[];
  specifications: Record<string, string>;
  priceRange: string;
}

// Complete Tractor Database organized by Model Families
export const tractorFamilies: TractorFamily[] = [
  {
    familyName: "MF 5118",
    familyId: "mf-5118",
    category: "Compact Tractors",
    description: "Compact and fuel-efficient tractors perfect for small farms and orchard operations",
    hpRange: "18-20 HP",
    mainImage: mf5118_4WD,
    models: [
      {
        id: 812,
        modelNumber: 812,
        variant: "4WD",
        driveType: "4WD",
        hp: 20,
        transmission: "MS",
        image: mf5118_4WD,
        popular: true,
        specifications: {
          engine: "1-Cylinder, Water Cooled, 825 cc",
          fuelTank: "28.5 Litres",
          liftingCapacity: "750 kg",
          pto: "Live PTO, 540/540E RPM"
        },
        applications: ["Orchard Farming", "Inter-cultivation", "Small Fields"],
        priceRange: "Contact for Price"
      },
      {
        id: 1082,
        modelNumber: 1082,
        variant: "5.25FT 2WD",
        driveType: "2WD",
        hp: 18,
        transmission: "MS",
        image: mf5118_2WD,
        specifications: {
          engine: "1-Cylinder, Water Cooled, 825 cc",
          fuelTank: "28.5 Litres",
          liftingCapacity: "750 kg",
          pto: "Live PTO, 540/540E RPM"
        },
        applications: ["Small Farms", "Vegetable Farming", "Light Field Work"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "MF 5222",
    familyId: "mf-5222",
    category: "Compact Tractors",
    description: "Reliable compact tractors for small to medium farming operations",
    hpRange: "22 HP",
    mainImage: mf5225,
    models: [
      {
        id: 1163,
        modelNumber: 1163,
        variant: "MS 2WD",
        driveType: "2WD",
        hp: 22,
        transmission: "MS",
        image: mf5225,
        specifications: {
          engine: "1-Cylinder, Water Cooled",
          fuelTank: "35 Litres",
          liftingCapacity: "850 kg",
          pto: "Live PTO, 540 RPM"
        },
        applications: ["Mixed Farming", "Haulage", "Light Tillage"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "6026 Maxpro",
    familyId: "6026-maxpro",
    category: "Mid-Range Tractors",
    description: "MaxPro series offering enhanced performance and reliability",
    hpRange: "50-55 HP",
    mainImage: mf6026MaxPro,
    models: [
      {
        id: 1113,
        modelNumber: 1113,
        variant: "Wide Track 4WD",
        driveType: "4WD",
        hp: 55,
        transmission: "PS",
        image: mf6026MaxPro,
        popular: true,
        specifications: {
          engine: "3-Cylinder, Turbo Charged",
          fuelTank: "55 Litres",
          liftingCapacity: "1800 kg",
          pto: "540/1000 RPM"
        },
        applications: ["Heavy Field Work", "Commercial Farming", "Loader Work"],
        priceRange: "Contact for Price"
      },
      {
        id: 1112,
        modelNumber: 1112,
        variant: "Narrow Track 4WD",
        driveType: "4WD",
        hp: 50,
        transmission: "PS",
        image: mf6026MaxPro,
        specifications: {
          engine: "3-Cylinder, Turbo Charged",
          fuelTank: "55 Litres",
          liftingCapacity: "1800 kg",
          pto: "540/1000 RPM"
        },
        applications: ["Row Crop Farming", "Orchard Work", "Precision Farming"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "6028 Maxpro",
    familyId: "6028-maxpro",
    category: "Mid-Range Tractors",
    description: "Advanced MaxPro series with superior performance capabilities",
    hpRange: "55-60 HP",
    mainImage: mf6028MaxPro4WD,
    models: [
      {
        id: 971,
        modelNumber: 971,
        variant: "Narrow Track 4WD",
        driveType: "4WD",
        hp: 55,
        transmission: "PS",
        image: mf6028MaxPro4WD,
        specifications: {
          engine: "3-Cylinder, Turbo Charged",
          fuelTank: "60 Litres",
          liftingCapacity: "2000 kg",
          pto: "540/1000 RPM"
        },
        applications: ["Precision Farming", "Row Crop", "Specialty Crops"],
        priceRange: "Contact for Price"
      },
      {
        id: 1051,
        modelNumber: 1051,
        variant: "Wide Track 4WD",
        driveType: "4WD",
        hp: 60,
        transmission: "PS",
        image: mf6028MaxPro4WD,
        popular: true,
        specifications: {
          engine: "3-Cylinder, Turbo Charged",
          fuelTank: "60 Litres",
          liftingCapacity: "2000 kg",
          pto: "540/1000 RPM"
        },
        applications: ["Heavy Field Work", "Commercial Operations", "Tillage"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "MF 1030",
    familyId: "mf-1030",
    category: "Utility Tractors",
    description: "Versatile utility tractors for diverse farming applications",
    hpRange: "30-35 HP",
    mainImage: mf30DiOrchardPlus,
    models: [
      {
        id: 1123,
        modelNumber: 1123,
        variant: "8+2 Speed 2WD",
        driveType: "2WD",
        hp: 32,
        transmission: "MS",
        image: mf30DiOrchardPlus,
        specifications: {
          engine: "3-Cylinder, 1800 cc",
          fuelTank: "40 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM"
        },
        applications: ["General Farming", "Haulage", "Light Tillage"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "MF 1030 ORCHARD",
    familyId: "mf-1030-orchard",
    category: "Orchard Tractors",
    description: "Specialized orchard tractors designed for fruit farming",
    hpRange: "28-30 HP",
    mainImage: mf30Orchard,
    models: [
      {
        id: 843,
        modelNumber: 843,
        variant: "MS 2WD",
        driveType: "2WD",
        hp: 28,
        transmission: "MS",
        image: mf30Orchard,
        specifications: {
          engine: "3-Cylinder, Compact Design",
          fuelTank: "35 Litres",
          liftingCapacity: "1000 kg",
          pto: "540 RPM"
        },
        applications: ["Orchard Farming", "Fruit Trees", "Inter-cultivation"],
        priceRange: "Contact for Price"
      },
      {
        id: 967,
        modelNumber: 967,
        variant: "PS 2WD",
        driveType: "2WD",
        hp: 30,
        transmission: "PS",
        image: mf30Orchard,
        specifications: {
          engine: "3-Cylinder, Compact Design",
          fuelTank: "35 Litres",
          liftingCapacity: "1000 kg",
          pto: "540 RPM"
        },
        applications: ["Premium Orchard Work", "Vineyard", "Specialty Crops"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "MF 7235",
    familyId: "mf-7235",
    category: "High Power Tractors",
    description: "High-performance tractors for large-scale commercial farming",
    hpRange: "70-75 HP",
    mainImage: mf7235LFT,
    models: [
      {
        id: 1147,
        modelNumber: 1147,
        variant: "12.4RT MS 2WD",
        driveType: "2WD",
        hp: 72,
        transmission: "MS",
        image: mf7235LFT,
        specifications: {
          engine: "4-Cylinder, Turbo Charged",
          fuelTank: "85 Litres",
          liftingCapacity: "2500 kg",
          pto: "540/1000 RPM"
        },
        applications: ["Large Scale Farming", "Heavy Tillage", "Commercial Operations"],
        priceRange: "Contact for Price"
      },
      {
        id: 1148,
        modelNumber: 1148,
        variant: "12.4RT PS 2WD",
        driveType: "2WD",
        hp: 72,
        transmission: "PS",
        image: mf7235LFT,
        popular: true,
        specifications: {
          engine: "4-Cylinder, Turbo Charged",
          fuelTank: "85 Litres",
          liftingCapacity: "2500 kg",
          pto: "540/1000 RPM"
        },
        applications: ["Premium Farming", "Precision Agriculture", "Heavy Work"],
        priceRange: "Contact for Price"
      },
      {
        id: 1169,
        modelNumber: 1169,
        variant: "13.6RT MS 2WD",
        driveType: "2WD",
        hp: 75,
        transmission: "MS",
        image: mf7235Loader,
        specifications: {
          engine: "4-Cylinder, Turbo Charged",
          fuelTank: "85 Litres",
          liftingCapacity: "2500 kg",
          pto: "540/1000 RPM"
        },
        applications: ["Heavy Duty Work", "Large Fields", "Commercial Use"],
        priceRange: "Contact for Price"
      },
      {
        id: 1170,
        modelNumber: 1170,
        variant: "13.6RT PS 2WD",
        driveType: "2WD",
        hp: 75,
        transmission: "PS",
        image: mf7235Loader,
        specifications: {
          engine: "4-Cylinder, Turbo Charged",
          fuelTank: "85 Litres",
          liftingCapacity: "2500 kg",
          pto: "540/1000 RPM"
        },
        applications: ["Premium Commercial Farming", "Large Operations", "Heavy Tillage"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "MF 1035 DOST",
    familyId: "mf-1035-dost",
    category: "Utility Tractors",
    description: "Dost series - reliable and efficient tractors for diverse farming needs",
    hpRange: "35-36 HP",
    mainImage: mf1035DiDost,
    models: [
      {
        id: 939,
        modelNumber: 939,
        variant: "Dry Disc 2WD",
        driveType: "2WD",
        hp: 35,
        transmission: "MS",
        image: mf1035DiDost,
        specifications: {
          engine: "3-Cylinder, 2400 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1100 kg",
          pto: "540 RPM"
        },
        applications: ["General Farming", "Haulage", "Field Work"],
        priceRange: "Contact for Price"
      },
      {
        id: 994,
        modelNumber: 994,
        variant: "OIB 2WD",
        driveType: "2WD",
        hp: 36,
        transmission: "MS",
        image: mf1035DiDost,
        popular: true,
        specifications: {
          engine: "3-Cylinder, 2400 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1100 kg",
          pto: "540 RPM"
        },
        applications: ["Agriculture", "Rotavator Work", "Implement Operations"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "MF 1035 R",
    familyId: "mf-1035-r",
    category: "Utility Tractors",
    description: "R series - robust and reliable tractors for consistent performance",
    hpRange: "31-32 HP",
    mainImage: mf1035R,
    models: [
      {
        id: 1156,
        modelNumber: 1156,
        variant: "OIB 2WD",
        driveType: "2WD",
        hp: 31,
        transmission: "MS",
        image: mf1035R,
        specifications: {
          engine: "3-Cylinder, 2400 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1010 kg",
          pto: "540 RPM"
        },
        applications: ["Light Field Work", "Mowing", "Loader Duties"],
        priceRange: "Contact for Price"
      },
      {
        id: 668,
        modelNumber: 668,
        variant: "Other states 2WD",
        driveType: "2WD",
        hp: 32,
        transmission: "MS",
        image: mf1035R,
        popular: true,
        specifications: {
          engine: "3-Cylinder, 2400 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1010 kg",
          pto: "540 RPM"
        },
        applications: ["General Agriculture", "Multi-purpose Farming", "Utility Work"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "MF 1035 MS",
    familyId: "mf-1035-ms",
    category: "Utility Tractors",
    description: "MS series - mechanical shift tractors for reliable performance",
    hpRange: "36 HP",
    mainImage: mf1035DiNew,
    models: [
      {
        id: 573,
        modelNumber: 573,
        variant: "MS 2WD",
        driveType: "2WD",
        hp: 36,
        transmission: "MS",
        image: mf1035DiNew,
        popular: true,
        specifications: {
          engine: "3-Cylinder, 2400 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1100 kg",
          pto: "540 RPM"
        },
        applications: ["General Agriculture", "Haulage", "Implement Work"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "MF 1035 SP",
    familyId: "mf-1035-sp",
    category: "Utility Tractors",
    description: "SP series - super plus variants with enhanced features",
    hpRange: "38-40 HP",
    mainImage: mf1035DiSuperPlus,
    models: [
      {
        id: 852,
        modelNumber: 852,
        variant: "SP OIB 2WD",
        driveType: "2WD",
        hp: 38,
        transmission: "MS",
        image: mf1035DiSuperPlus,
        specifications: {
          engine: "3-Cylinder, 2400 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1100 kg",
          pto: "540 RPM"
        },
        applications: ["Enhanced Agriculture", "Commercial Work", "Heavy Duty"],
        priceRange: "Contact for Price"
      },
      {
        id: 1048,
        modelNumber: 1048,
        variant: "SP OIB 2WD",
        driveType: "2WD",
        hp: 39,
        transmission: "MS",
        image: mf1035DiSuperPlus,
        specifications: {
          engine: "3-Cylinder, 2400 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1100 kg",
          pto: "540 RPM"
        },
        applications: ["Premium Agriculture", "Versatile Operations", "Field Work"],
        priceRange: "Contact for Price"
      },
      {
        id: 1221,
        modelNumber: 1221,
        variant: "SP OIB 2WD",
        driveType: "2WD",
        hp: 40,
        transmission: "MS",
        image: mf1035DiSuperPlus,
        popular: true,
        specifications: {
          engine: "3-Cylinder, 2400 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1100 kg",
          pto: "540 RPM"
        },
        applications: ["High Performance Agriculture", "Commercial Farming", "Heavy Implements"],
        priceRange: "Contact for Price"
      },
      {
        id: 1036,
        modelNumber: 1036,
        variant: "SP Superlift 2WD",
        driveType: "2WD",
        hp: 40,
        transmission: "MS",
        image: mf1035DiSuperPlus,
        specifications: {
          engine: "3-Cylinder, 2400 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1300 kg",
          pto: "540 RPM"
        },
        applications: ["Super Lift Operations", "Heavy Implements", "Commercial Use"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "MF 241 Sona",
    familyId: "mf-241-sona",
    category: "Mid-Range Tractors",
    description: "Sona series - premium mid-range tractors with advanced features",
    hpRange: "42-45 HP",
    mainImage: mf241Di,
    models: [
      {
        id: 578,
        modelNumber: 578,
        variant: "Sona 2WD",
        driveType: "2WD",
        hp: 42,
        transmission: "MS",
        image: mf241Di,
        specifications: {
          engine: "3-Cylinder, 2500 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Agriculture", "Haulage", "Implement Work"],
        priceRange: "Contact for Price"
      },
      {
        id: 856,
        modelNumber: 856,
        variant: "Sona OIB+Platform 2WD",
        driveType: "2WD",
        hp: 42,
        transmission: "MS",
        image: mf241Di,
        specifications: {
          engine: "3-Cylinder, 2500 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Platform Work", "Agriculture", "Commercial Use"],
        priceRange: "Contact for Price"
      },
      {
        id: 1116,
        modelNumber: 1116,
        variant: "856+ PS 2WD",
        driveType: "2WD",
        hp: 43,
        transmission: "PS",
        image: mf241Di,
        popular: true,
        specifications: {
          engine: "3-Cylinder, 2500 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Power Shift Agriculture", "Premium Farming", "Precision Work"],
        priceRange: "Contact for Price"
      },
      {
        id: 905,
        modelNumber: 905,
        variant: "Sona PS 2WD",
        driveType: "2WD",
        hp: 42,
        transmission: "PS",
        image: mf241Di,
        specifications: {
          engine: "3-Cylinder, 2500 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Power Shift Operations", "Premium Agriculture", "Efficiency"],
        priceRange: "Contact for Price"
      },
      {
        id: 911,
        modelNumber: 911,
        variant: "Eagle 2WD",
        driveType: "2WD",
        hp: 44,
        transmission: "MS",
        image: mf241Di,
        specifications: {
          engine: "3-Cylinder, 2500 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Eagle Performance", "Enhanced Agriculture", "Field Work"],
        priceRange: "Contact for Price"
      },
      {
        id: 970,
        modelNumber: 970,
        variant: "Eagle PS 2WD",
        driveType: "2WD",
        hp: 44,
        transmission: "PS",
        image: mf241Di,
        specifications: {
          engine: "3-Cylinder, 2500 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Eagle PS Performance", "Premium Operations", "Power Shift"],
        priceRange: "Contact for Price"
      },
      {
        id: 992,
        modelNumber: 992,
        variant: "Eagle OIB 2WD",
        driveType: "2WD",
        hp: 44,
        transmission: "MS",
        image: mf241Di,
        specifications: {
          engine: "3-Cylinder, 2500 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Eagle OIB Performance", "Oil Immersed Brakes", "Safety"],
        priceRange: "Contact for Price"
      },
      {
        id: 993,
        modelNumber: 993,
        variant: "Eagle OIB PS 2WD",
        driveType: "2WD",
        hp: 45,
        transmission: "PS",
        image: mf241Di,
        specifications: {
          engine: "3-Cylinder, 2500 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Premium Eagle Performance", "OIB+PS Combination", "Top Tier"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "MF 241 PD",
    familyId: "mf-241-pd",
    category: "Mid-Range Tractors",
    description: "PD series - powerful and dependable tractors for various applications",
    hpRange: "42-43 HP",
    mainImage: mf241Pd,
    models: [
      {
        id: 598,
        modelNumber: 598,
        variant: "SS MS 2WD",
        driveType: "2WD",
        hp: 42,
        transmission: "MS",
        image: mf241Pd,
        specifications: {
          engine: "3-Cylinder, 2500 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Standard Agriculture", "Field Work", "General Farming"],
        priceRange: "Contact for Price"
      },
      {
        id: 779,
        modelNumber: 779,
        variant: "Ultra PD - CS 2WD",
        driveType: "2WD",
        hp: 42,
        transmission: "CS",
        image: mf241Pd,
        specifications: {
          engine: "3-Cylinder, 2500 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Ultra Performance", "Constant Shift", "Premium Operations"],
        priceRange: "Contact for Price"
      },
      {
        id: 887,
        modelNumber: 887,
        variant: "4WD",
        driveType: "4WD",
        hp: 42,
        transmission: "MS",
        image: mf241Pd4WD,
        popular: true,
        specifications: {
          engine: "3-Cylinder, 2500 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["4WD Operations", "Heavy Duty", "Challenging Terrain"],
        priceRange: "Contact for Price"
      },
      {
        id: 1047,
        modelNumber: 1047,
        variant: "SS PS (599) 2WD",
        driveType: "2WD",
        hp: 43,
        transmission: "PS",
        image: mf241Pd,
        specifications: {
          engine: "3-Cylinder, 2500 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Super Series PS", "Power Shift", "Enhanced Performance"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "MF 241 Dyna",
    familyId: "mf-241-dyna",
    category: "Mid-Range Tractors",
    description: "Dyna series - dynamic tractors with advanced technology",
    hpRange: "42-44 HP",
    mainImage: mf241DynatrackLoader,
    models: [
      {
        id: 839,
        modelNumber: 839,
        variant: "PS 2WD",
        driveType: "2WD",
        hp: 42,
        transmission: "PS",
        image: mf241DynatrackLoader,
        specifications: {
          engine: "3-Cylinder, 2500 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Dyna Performance", "Power Shift", "Dynamic Operations"],
        priceRange: "Contact for Price"
      },
      {
        id: 1196,
        modelNumber: 1196,
        variant: "Heavy Rear Axle 2WD",
        driveType: "2WD",
        hp: 44,
        transmission: "MS",
        image: mf241DynatrackLoader,
        popular: true,
        specifications: {
          engine: "3-Cylinder, 2500 cc",
          fuelTank: "47 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Heavy Duty Rear Axle", "Enhanced Strength", "Heavy Implements"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "MF 244 Dyna",
    familyId: "mf-244-dyna",
    category: "Mid-Range Tractors",
    description: "244 Dyna series - powerful tractors with smart technology options",
    hpRange: "44-46 HP",
    mainImage: mf245Di,
    models: [
      {
        id: 1057,
        modelNumber: 1057,
        variant: "4WD",
        driveType: "4WD",
        hp: 44,
        transmission: "MS",
        image: mf245Di,
        specifications: {
          engine: "3-Cylinder, 2700 cc",
          fuelTank: "55 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["4WD Operations", "Enhanced Traction", "Heavy Work"],
        priceRange: "Contact for Price"
      },
      {
        id: 1117,
        modelNumber: 1117,
        variant: "2WD, Smart",
        driveType: "2WD",
        hp: 45,
        transmission: "Smart",
        image: mf245Di,
        popular: true,
        specifications: {
          engine: "3-Cylinder, 2700 cc",
          fuelTank: "55 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Smart Technology", "Precision Farming", "Modern Agriculture"],
        priceRange: "Contact for Price"
      },
      {
        id: 1128,
        modelNumber: 1128,
        variant: "4WD, Smart",
        driveType: "4WD",
        hp: 46,
        transmission: "Smart",
        image: mf245Di,
        specifications: {
          engine: "3-Cylinder, 2700 cc",
          fuelTank: "55 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Smart 4WD", "Advanced Technology", "Premium Performance"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "MF 244",
    familyId: "mf-244",
    category: "Mid-Range Tractors",
    description: "Standard 244 series - reliable and efficient mid-range tractors",
    hpRange: "44 HP",
    mainImage: mf245Di,
    models: [
      {
        id: 1092,
        modelNumber: 1092,
        variant: "MS CS 2WD",
        driveType: "2WD",
        hp: 44,
        transmission: "CS",
        image: mf245Di,
        specifications: {
          engine: "3-Cylinder, 2700 cc",
          fuelTank: "55 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Constant Shift", "Smooth Operations", "Efficient Farming"],
        priceRange: "Contact for Price"
      },
      {
        id: 1093,
        modelNumber: 1093,
        variant: "PS CS 2WD",
        driveType: "2WD",
        hp: 44,
        transmission: "PS",
        image: mf245Di,
        specifications: {
          engine: "3-Cylinder, 2700 cc",
          fuelTank: "55 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Power Shift CS", "Premium Operations", "Enhanced Control"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "MF 245 PD 46HP",
    familyId: "mf-245-pd-46hp",
    category: "Mid-Range Tractors",
    description: "245 PD 46HP series - powerful mid-range tractors for diverse applications",
    hpRange: "46 HP",
    mainImage: mf245Pd46HP,
    models: [
      {
        id: 1012,
        modelNumber: 1012,
        variant: "Fully Loaded 13.6, 2WD",
        driveType: "2WD",
        hp: 46,
        transmission: "MS",
        image: mf245Pd46HP,
        popular: true,
        specifications: {
          engine: "3-Cylinder, 2700 cc",
          fuelTank: "55 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Fully Loaded Operations", "13.6 Tyres", "Premium Features"],
        priceRange: "Contact for Price"
      },
      {
        id: 1010,
        modelNumber: 1010,
        variant: "Basic 13.6 2WD",
        driveType: "2WD",
        hp: 46,
        transmission: "MS",
        image: mf245Pd46HP,
        specifications: {
          engine: "3-Cylinder, 2700 cc",
          fuelTank: "55 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Basic Configuration", "Cost Effective", "Standard Features"],
        priceRange: "Contact for Price"
      },
      {
        id: 1021,
        modelNumber: 1021,
        variant: "Fully Loaded 14.9 2WD",
        driveType: "2WD",
        hp: 46,
        transmission: "MS",
        image: mf245Pd46HP,
        specifications: {
          engine: "3-Cylinder, 2700 cc",
          fuelTank: "55 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Fully Loaded", "14.9 Wide Tyres", "Enhanced Traction"],
        priceRange: "Contact for Price"
      },
      {
        id: 1022,
        modelNumber: 1022,
        variant: "1021 + 7.50X16 FT",
        driveType: "2WD",
        hp: 46,
        transmission: "MS",
        image: mf245Pd46HP,
        specifications: {
          engine: "3-Cylinder, 2700 cc",
          fuelTank: "55 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["Enhanced Front Tyres", "Special Configuration", "Premium Setup"],
        priceRange: "Contact for Price"
      },
      {
        id: 1162,
        modelNumber: 1162,
        variant: "6X16 FT 2WD",
        driveType: "2WD",
        hp: 46,
        transmission: "MS",
        image: mf245Pd46HP,
        specifications: {
          engine: "3-Cylinder, 2700 cc",
          fuelTank: "55 Litres",
          liftingCapacity: "1700 kg",
          pto: "540 RPM"
        },
        applications: ["6X16 Front Tyres", "Specialized Setup", "Custom Configuration"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "MF 9563",
    familyId: "mf-9563",
    category: "High Power Tractors",
    description: "High-performance 9563 series for large-scale commercial operations",
    hpRange: "95-100 HP",
    mainImage: mf9563,
    models: [
      {
        id: 1208,
        modelNumber: 1208,
        variant: "2WD 8X8 SUPER SUTTLE",
        driveType: "2WD",
        hp: 95,
        transmission: "SS",
        image: mf9563,
        specifications: {
          engine: "4-Cylinder, Turbo Charged",
          fuelTank: "120 Litres",
          liftingCapacity: "3500 kg",
          pto: "540/1000 RPM"
        },
        applications: ["Super Shuttle", "High Efficiency", "Large Scale Operations"],
        priceRange: "Contact for Price"
      },
      {
        id: 1207,
        modelNumber: 1207,
        variant: "2WD 12X4",
        driveType: "2WD",
        hp: 95,
        transmission: "MS",
        image: mf9563,
        specifications: {
          engine: "4-Cylinder, Turbo Charged",
          fuelTank: "120 Litres",
          liftingCapacity: "3500 kg",
          pto: "540/1000 RPM"
        },
        applications: ["12x4 Transmission", "Commercial Farming", "Heavy Duty"],
        priceRange: "Contact for Price"
      },
      {
        id: 1210,
        modelNumber: 1210,
        variant: "2WD 12X4 IPTO",
        driveType: "2WD",
        hp: 98,
        transmission: "MS",
        image: mf9563,
        popular: true,
        specifications: {
          engine: "4-Cylinder, Turbo Charged",
          fuelTank: "120 Litres",
          liftingCapacity: "3500 kg",
          pto: "Independent PTO, 540/1000 RPM"
        },
        applications: ["Independent PTO", "Advanced Features", "Professional Use"],
        priceRange: "Contact for Price"
      },
      {
        id: 1209,
        modelNumber: 1209,
        variant: "4WD 12X4",
        driveType: "4WD",
        hp: 95,
        transmission: "MS",
        image: mf9563,
        specifications: {
          engine: "4-Cylinder, Turbo Charged",
          fuelTank: "120 Litres",
          liftingCapacity: "3500 kg",
          pto: "540/1000 RPM"
        },
        applications: ["4WD Power", "12x4 Transmission", "All Terrain"],
        priceRange: "Contact for Price"
      },
      {
        id: 1229,
        modelNumber: 1229,
        variant: "4WD 12X4 IPTO",
        driveType: "4WD",
        hp: 100,
        transmission: "MS",
        image: mf9563,
        specifications: {
          engine: "4-Cylinder, Turbo Charged",
          fuelTank: "120 Litres",
          liftingCapacity: "3500 kg",
          pto: "Independent PTO, 540/1000 RPM"
        },
        applications: ["4WD + IPTO", "Maximum Power", "Ultimate Performance"],
        priceRange: "Contact for Price"
      },
      {
        id: 1230,
        modelNumber: 1230,
        variant: "4WD SUPER SUTTLE",
        driveType: "4WD",
        hp: 98,
        transmission: "SS",
        image: mf9563,
        specifications: {
          engine: "4-Cylinder, Turbo Charged",
          fuelTank: "120 Litres",
          liftingCapacity: "3500 kg",
          pto: "540/1000 RPM"
        },
        applications: ["4WD Super Shuttle", "Maximum Efficiency", "Professional Operations"],
        priceRange: "Contact for Price"
      }
    ]
  },
  {
    familyName: "MF 9500",
    familyId: "mf-9500",
    category: "High Power Tractors",
    description: "9500 series - smart technology tractors for modern farming",
    hpRange: "90-95 HP",
    mainImage: mf9500Smart,
    models: [
      {
        id: 1194,
        modelNumber: 1194,
        variant: "9500 2WD SMART",
        driveType: "2WD",
        hp: 90,
        transmission: "Smart",
        image: mf9500Smart,
        popular: true,
        specifications: {
          engine: "4-Cylinder, Turbo Charged",
          fuelTank: "110 Litres",
          liftingCapacity: "3200 kg",
          pto: "540/1000 RPM"
        },
        applications: ["Smart Technology", "Precision Farming", "Modern Agriculture"],
        priceRange: "Contact for Price"
      },
      {
        id: 1195,
        modelNumber: 1195,
        variant: "9500 4WD SMART",
        driveType: "4WD",
        hp: 95,
        transmission: "Smart",
        image: mf9500Smart,
        specifications: {
          engine: "4-Cylinder, Turbo Charged",
          fuelTank: "110 Litres",
          liftingCapacity: "3200 kg",
          pto: "540/1000 RPM"
        },
        applications: ["4WD Smart Technology", "Advanced Farming", "Premium Performance"],
        priceRange: "Contact for Price"
      }
    ]
  }
];

// Implements Database
export const implementsDatabase: Implement[] = [
  {
    id: 1,
    name: "MF 241 Dynatrack Loader",
    category: "Loaders",
    image: mf241DynatrackLoader,
    description: "Heavy-duty front loader designed for MF 241 tractors with excellent lifting capacity",
    applications: ["Material Handling", "Construction Work", "Farm Loading", "Manure Handling"],
    specifications: {
      "Lifting Capacity": "850 kg",
      "Max Height": "3.2 meters",
      "Bucket Capacity": "0.5 cubic meters",
      "Weight": "450 kg",
      "Compatibility": "MF 241 Series"
    },
    priceRange: "Contact for Price"
  },
  {
    id: 2,
    name: "MF 7235 Loader",
    category: "Loaders",
    image: mfLoader,
    description: "High-capacity loader designed for MF 7235 series tractors for heavy-duty operations",
    applications: ["Heavy Material Handling", "Construction", "Large Farm Operations", "Commercial Use"],
    specifications: {
      "Lifting Capacity": "1200 kg",
      "Max Height": "4.2 meters",
      "Bucket Capacity": "0.8 cubic meters",
      "Weight": "650 kg",
      "Compatibility": "MF 7235 Series"
    },
    priceRange: "Contact for Price"
  },
  {
    id: 3,
    name: "TAFE AgriStar Super Seeder",
    category: "Seeders",
    image: tafeAgristarSuperSeeder,
    description: "Advanced super seeder for zero tillage farming and direct seeding applications",
    applications: ["Zero Tillage Farming", "Direct Seeding", "Wheat Seeding", "Stubble Management"],
    specifications: {
      "Working Width": "2.5 meters",
      "Number of Furrow Openers": "25",
      "Seed Rate": "Variable",
      "Weight": "680 kg",
      "Compatibility": "45-65 HP Tractors"
    },
    priceRange: "Contact for Price"
  },
  {
    id: 4,
    name: "Hydraulic Trailers",
    category: "Trailers",
    image: hydraulicTrailer,
    description: "Heavy-duty hydraulic tipping trailers for efficient farm transportation",
    applications: ["Cargo Transport", "Farm Produce Transport", "Construction Material", "Bulk Material"],
    specifications: {
      "Load Capacity": "5 Tonnes",
      "Body Dimensions": "3.0 x 1.8 x 0.6 meters",
      "Tyre Size": "7.50-16",
      "Weight": "1200 kg",
      "Compatibility": "40-80 HP Tractors"
    },
    priceRange: "Contact for Price"
  },
  {
    id: 5,
    name: "Rotavators",
    category: "Tillers",
    image: rotaryTiller,
    description: "Heavy-duty rotavators for land preparation and seedbed preparation",
    applications: ["Land Preparation", "Seedbed Preparation", "Stubble Management", "Secondary Tillage"],
    specifications: {
      "Working Width": "1.8 meters",
      "Number of Blades": "48",
      "Gearbox Type": "Side Drive",
      "Weight": "420 kg",
      "Compatibility": "35-55 HP Tractors"
    },
    priceRange: "Contact for Price"
  }
];

// Helper functions for filtering
export const getHPRanges = (): string[] => {
  return [
    "Under 25 HP",
    "25-35 HP", 
    "36-45 HP",
    "46-50 HP",
    "51-60 HP",
    "60+ HP"
  ];
};

export const getDriveTypes = (): string[] => {
  return ["2WD", "4WD"];
};

export const getTransmissionTypes = (): string[] => {
  return ["MS", "PS", "CS", "Smart", "SS"];
};

export const getModelFamilies = (): string[] => {
  return tractorFamilies.map(family => family.familyName);
};

// Filter functions
export const filterTractorsByHP = (hp: number, range: string): boolean => {
  switch (range) {
    case "Under 25 HP":
      return hp < 25;
    case "25-35 HP":
      return hp >= 25 && hp <= 35;
    case "36-45 HP":
      return hp >= 36 && hp <= 45;
    case "46-50 HP":
      return hp >= 46 && hp <= 50;
    case "51-60 HP":
      return hp >= 51 && hp <= 60;
    case "60+ HP":
      return hp > 60;
    default:
      return true;
  }
};

export default { tractorFamilies, implementsDatabase };