// Complete Massey Ferguson Tractor Database - All Models from Master SHEET.xlsx
import mf5118_4WD from "@/assets/mf-5118-4wd.jpg";
import mf5118_2WD from "@/assets/mf-5118-2wd.jpg";
import mf5225 from "@/assets/mf-5225.jpg";
import mf6026MaxPro from "@/assets/mf-6026-maxpro.jpg";
import mf6028MaxPro4WD from "@/assets/mf-6028-maxpro-4wd.jpg";
import mf1035DiDost from "@/assets/mf-1035-di-dost.jpg";
import mf1035R from "@/assets/mf-1035-r.jpg";
import mf1035DiNew from "@/assets/mf-1035-di-new.jpg";
import mf1035DiSuperPlus from "@/assets/mf-1035-di-super-plus.jpg";
import mf241Di from "@/assets/mf-241-di.jpg";
import mf241Pd from "@/assets/mf-241-pd.jpg";
import mf241Pd4WD from "@/assets/mf-241-pd-4wd.jpg";
import mf245Di from "@/assets/mf-245-di-50hp.jpg";
import mf245Pd46HP from "@/assets/mf-245-pd-46hp.jpg";
import mf7250DiPowerUp from "@/assets/mf-7250-di-powerup.jpg";
import mf9500PS from "@/assets/mf-9500-ps.jpg";
import mf9500Smart from "@/assets/mf-9500-smart.jpg";
import mf9563 from "@/assets/mf-9563.jpg";
import mf7235LFT from "@/assets/mf-7235-lft.jpg";
import mf30Orchard from "@/assets/mf-30-orchard.jpg";
import mf30DiOrchardPlus from "@/assets/mf-30-di-orchard-plus.jpg";
import mf241OrchardPlus from "@/assets/mf-241-orchard-plus.jpg";
import mf241DynatrackLoader from "@/assets/mf-241-dynatrack-loader.jpg";
import mf7235Loader from "@/assets/mf-7235-loader.jpg";
import heroTractor from "@/assets/hero-tractor.jpg";

export interface TractorVariant {
  id: number;
  model: string;
  variant: string;
  hp: string;
  image: string;
  officialSpecs: {
    engine: string;
    fuelTank: string;
    liftingCapacity: string;
    pto: string;
    gearBox?: string;
    driveType: "2WD" | "4WD";
    transmission?: string;
  };
  keyFeatures: string[];
  applications: string[];
  useCase: string;
  popular?: boolean;
  priceRange: string;
}

export interface TractorFamily {
  familyName: string;
  familyId: string;
  baseModel: string;
  description: string;
  mainImage: string;
  variants: TractorVariant[];
  category: string;
  priceRange: string;
  seoDescription: string;
}

export const tractorFamilies: TractorFamily[] = [
  {
    familyName: "MF 5118",
    familyId: "mf-5118",
    baseModel: "MF 5118",
    description: "Reliable 20HP compact tractor series perfect for small to medium farming operations.",
    mainImage: mf5118_4WD,
    category: "Compact",
    priceRange: "₹3.74L - ₹4.18L",
    seoDescription: "MF 5118 tractor series with 4WD and 2WD options. Best for compact farming operations.",
    variants: [
      {
        id: 812,
        model: "812",
        variant: "4WD",
        hp: "20",
        image: mf5118_4WD,
        priceRange: "₹4.18L",
        officialSpecs: {
          engine: "3 Cylinder Diesel",
          fuelTank: "38 Litres",
          liftingCapacity: "680 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "4WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["4WD Drive", "Compact Design", "Fuel Efficient"],
        applications: ["Orchard Work", "Small Field Operations", "Vineyard Farming"],
        useCase: "Small farms requiring 4WD traction",
        popular: true
      },
      {
        id: 1082,
        model: "1082",
        variant: "5.25FT 2WD",
        hp: "20",
        image: mf5118_2WD,
        priceRange: "₹3.74L",
        officialSpecs: {
          engine: "3 Cylinder Diesel",
          fuelTank: "38 Litres",
          liftingCapacity: "680 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["2WD Drive", "5.25FT Width", "Economic Operation"],
        applications: ["Row Crop", "Light Cultivation", "Small Operations"],
        useCase: "Small farms with moderate power requirements"
      }
    ]
  },
  {
    familyName: "MF 5222",
    familyId: "mf-5222",
    baseModel: "MF 5222",
    description: "Mid-range 55HP tractor with excellent performance for various agricultural applications.",
    mainImage: mf5225,
    category: "Mid-Range",
    priceRange: "₹9.2L - ₹10.2L",
    seoDescription: "MF 5222 tractor with MS 2WD configuration. Ideal for modern farming operations.",
    variants: [
      {
        id: 1163,
        model: "1163",
        variant: "MS 2WD",
        hp: "55",
        image: mf5225,
        priceRange: "₹9.2L",
        officialSpecs: {
          engine: "Simpson A4.248 - 4 Cylinder",
          fuelTank: "70 Litres",
          liftingCapacity: "2000 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 4 R",
          driveType: "2WD",
          transmission: "Synchro Mesh"
        },
        keyFeatures: ["Manual Steering", "Robust Build", "Fuel Efficient"],
        applications: ["Row Crop Farming", "General Purpose", "Heavy Duty Work"],
        useCase: "General farming operations requiring reliable performance",
        popular: true
      }
    ]
  },
  {
    familyName: "6026 Maxpro",
    familyId: "6026-maxpro",
    baseModel: "6026 Maxpro",
    description: "High-performance 26HP tractor series designed for professional farming.",
    mainImage: mf6026MaxPro,
    category: "Compact Pro",
    priceRange: "₹5.5L - ₹6.5L",
    seoDescription: "6026 Maxpro tractors with wide track and narrow track 4WD options.",
    variants: [
      {
        id: 1113,
        model: "1113",
        variant: "Wide Track 4WD",
        hp: "26",
        image: mf6026MaxPro,
        priceRange: "₹6.5L",
        officialSpecs: {
          engine: "3 Cylinder Diesel",
          fuelTank: "40 Litres",
          liftingCapacity: "739 kg",
          pto: "540 RPM",
          gearBox: "9 F + 3 R",
          driveType: "4WD",
          transmission: "Partial Constant Mesh"
        },
        keyFeatures: ["Wide Track", "4WD", "Compact Design"],
        applications: ["Orchard Work", "Vineyard Farming", "Small Field Operations"],
        useCase: "Farms requiring wide track stability with 4WD",
        popular: true
      },
      {
        id: 1112,
        model: "1112",
        variant: "Narrow Track 4WD",
        hp: "26",
        image: mf6026MaxPro,
        priceRange: "₹6.2L",
        officialSpecs: {
          engine: "3 Cylinder Diesel",
          fuelTank: "40 Litres",
          liftingCapacity: "739 kg",
          pto: "540 RPM",
          gearBox: "9 F + 3 R",
          driveType: "4WD",
          transmission: "Partial Constant Mesh"
        },
        keyFeatures: ["Narrow Track", "4WD", "Precision Farming"],
        applications: ["Row Crop", "Narrow Rows", "Greenhouse Farming"],
        useCase: "Farms with narrow row spacing requirements"
      }
    ]
  },
  {
    familyName: "6028 Maxpro",
    familyId: "6028-maxpro",
    baseModel: "6028 Maxpro",
    description: "28HP professional tractor series with advanced features for intensive farming.",
    mainImage: mf6028MaxPro4WD,
    category: "Compact Pro",
    priceRange: "₹7.2L - ₹8.0L",
    seoDescription: "6028 Maxpro tractors with 28HP power and 4WD capabilities.",
    variants: [
      {
        id: 971,
        model: "971",
        variant: "Narrow Track 4WD",
        hp: "28",
        image: mf6028MaxPro4WD,
        priceRange: "₹7.2L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 1318cc",
          fuelTank: "45 Litres",
          liftingCapacity: "739 kg",
          pto: "540 RPM",
          gearBox: "9 F + 3 R",
          driveType: "4WD",
          transmission: "Partial Constant Mesh"
        },
        keyFeatures: ["Narrow Track", "28HP Power", "4WD Traction"],
        applications: ["Row Crop", "Precision Farming", "Greenhouse Work"],
        useCase: "Professional farming with narrow spacing needs"
      },
      {
        id: 1051,
        model: "1051",
        variant: "Wide Track 4WD",
        hp: "28",
        image: mf6028MaxPro4WD,
        priceRange: "₹8.0L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 1318cc",
          fuelTank: "45 Litres",
          liftingCapacity: "739 kg",
          pto: "540 RPM",
          gearBox: "9 F + 3 R",
          driveType: "4WD",
          transmission: "Partial Constant Mesh"
        },
        keyFeatures: ["Wide Track", "28HP Power", "Enhanced Stability"],
        applications: ["Field Preparation", "Heavy Work", "Slope Farming"],
        useCase: "Professional farming requiring maximum stability",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 1030",
    familyId: "mf-1030",
    baseModel: "MF 1030",
    description: "Entry-level 30HP tractor with advanced 8+2 speed transmission.",
    mainImage: heroTractor,
    category: "Entry Level",
    priceRange: "₹6.0L - ₹7.0L",
    seoDescription: "MF 1030 tractor with 8+2 speed transmission for entry-level farming.",
    variants: [
      {
        id: 1123,
        model: "1123",
        variant: "8+2 Speed 2WD",
        hp: "30",
        image: heroTractor,
        priceRange: "₹6.5L",
        officialSpecs: {
          engine: "3 Cylinder Diesel",
          fuelTank: "45 Litres",
          liftingCapacity: "1100 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["8+2 Speed Transmission", "Entry Level", "Economic"],
        applications: ["Basic Farming", "Field Preparation", "Light Work"],
        useCase: "New farmers looking for reliable entry-level tractor"
      }
    ]
  },
  {
    familyName: "ORCHARD",
    familyId: "orchard",
    baseModel: "Orchard Series",
    description: "Specialized orchard tractors designed for fruit farming and narrow spaces.",
    mainImage: mf30Orchard,
    category: "Specialty",
    priceRange: "₹5.5L - ₹6.5L",
    seoDescription: "Orchard tractors with MS and PS options for fruit farming operations.",
    variants: [
      {
        id: 843,
        model: "843",
        variant: "MS 2WD",
        hp: "30",
        image: mf30Orchard,
        priceRange: "₹5.5L",
        officialSpecs: {
          engine: "3 Cylinder Diesel",
          fuelTank: "38 Litres",
          liftingCapacity: "900 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["Orchard Design", "Compact Width", "Manual Steering"],
        applications: ["Orchard Work", "Fruit Farming", "Vineyard Operations"],
        useCase: "Orchard farming with manual steering preference"
      },
      {
        id: 967,
        model: "967",
        variant: "PS 2WD",
        hp: "30",
        image: mf30DiOrchardPlus,
        priceRange: "₹6.5L",
        officialSpecs: {
          engine: "3 Cylinder Diesel",
          fuelTank: "38 Litres",
          liftingCapacity: "900 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Orchard Design", "Power Steering", "Enhanced Comfort"],
        applications: ["Modern Orchard", "Precision Fruit Farming", "Vineyard Work"],
        useCase: "Professional orchard operations requiring power steering",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 7235",
    familyId: "mf-7235",
    baseModel: "MF 7235",
    description: "Premium 75HP tractor series with multiple tire and steering configurations.",
    mainImage: mf7235LFT,
    category: "Premium",
    priceRange: "₹15.0L - ₹18.0L",
    seoDescription: "MF 7235 premium tractors with 12.4RT and 13.6RT tire options.",
    variants: [
      {
        id: 1147,
        model: "1147",
        variant: "12.4RT MS 2WD",
        hp: "75",
        image: mf7235LFT,
        priceRange: "₹15.0L",
        officialSpecs: {
          engine: "Perkins 4 Cylinder Turbo",
          fuelTank: "110 Litres",
          liftingCapacity: "3200 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["75HP Power", "12.4RT Tires", "High Lifting Capacity"],
        applications: ["Large Scale Farming", "Heavy Implements", "Commercial Use"],
        useCase: "Commercial farming operations with manual steering"
      },
      {
        id: 1148,
        model: "1148",
        variant: "12.4RT PS 2WD",
        hp: "75",
        image: mf7235LFT,
        priceRange: "₹16.0L",
        officialSpecs: {
          engine: "Perkins 4 Cylinder Turbo",
          fuelTank: "110 Litres",
          liftingCapacity: "3200 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["75HP Power", "Power Steering", "Premium Comfort"],
        applications: ["Professional Farming", "Heavy Duty Work", "Large Fields"],
        useCase: "Professional operations requiring power steering",
        popular: true
      },
      {
        id: 1169,
        model: "1169",
        variant: "13.6RT MS 2WD",
        hp: "75",
        image: mf7235LFT,
        priceRange: "₹17.0L",
        officialSpecs: {
          engine: "Perkins 4 Cylinder Turbo",
          fuelTank: "110 Litres",
          liftingCapacity: "3200 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["75HP Power", "13.6RT Tires", "Enhanced Traction"],
        applications: ["Heavy Field Work", "Large Implements", "Commercial Farming"],
        useCase: "Heavy farming operations with larger tire requirements"
      },
      {
        id: 1170,
        model: "1170",
        variant: "13.6RT PS 2WD",
        hp: "75",
        image: mf7235LFT,
        priceRange: "₹18.0L",
        officialSpecs: {
          engine: "Perkins 4 Cylinder Turbo",
          fuelTank: "110 Litres",
          liftingCapacity: "3200 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["75HP Power", "13.6RT Tires", "Power Steering", "Premium"],
        applications: ["Professional Farming", "Heavy Work", "Large Scale Operations"],
        useCase: "Premium farming operations with maximum comfort and performance",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 1035 DOST",
    familyId: "mf-1035-dost",
    baseModel: "MF 1035 DOST",
    description: "Entry-level 35HP tractor series perfect for small farmers with essential features.",
    mainImage: mf1035DiDost,
    category: "Entry Level",
    priceRange: "₹6.0L - ₹7.0L",
    seoDescription: "MF 1035 DOST series tractors. Affordable and reliable choice for small-scale farming.",
    variants: [
      {
        id: 939,
        model: "939",
        variant: "Dry Disc 2WD",
        hp: "35",
        image: mf1035DiDost,
        priceRange: "₹6.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "45 Litres",
          liftingCapacity: "1100 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Dry Disc Brakes", "Economic Operation", "Entry Level"],
        applications: ["Basic Farming", "Light Cultivation", "Small Operations"],
        useCase: "Small farmers looking for basic, affordable tractor",
        popular: true
      },
      {
        id: 994,
        model: "994",
        variant: "OIB 2WD",
        hp: "35",
        image: mf1035DiDost,
        priceRange: "₹7.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "45 Litres",
          liftingCapacity: "1100 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Oil Immersed Brakes", "Better Braking", "Enhanced Safety"],
        applications: ["Field Work", "Transportation", "General Purpose"],
        useCase: "Small farms requiring better braking performance"
      }
    ]
  },
  {
    familyName: "MF 1035 R",
    familyId: "mf-1035-r",
    baseModel: "MF 1035 R",
    description: "Reliable 35HP tractor series with advanced features for modern farming.",
    mainImage: mf1035R,
    category: "Mid-Range",
    priceRange: "₹7.5L - ₹8.5L",
    seoDescription: "MF 1035 R series tractors with OIB brakes and enhanced durability.",
    variants: [
      {
        id: 1156,
        model: "1156",
        variant: "OIB 2WD",
        hp: "35",
        image: mf1035R,
        priceRange: "₹8.5L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "45 Litres",
          liftingCapacity: "1100 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Oil Immersed Brakes", "Enhanced Build", "Reliable Performance"],
        applications: ["General Farming", "Field Operations", "Medium Duty Work"],
        useCase: "Medium-scale farming requiring reliable performance"
      },
      {
        id: 668,
        model: "668",
        variant: "Other states 2WD",
        hp: "35",
        image: mf1035R,
        priceRange: "₹7.5L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "45 Litres",
          liftingCapacity: "1100 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Standard Configuration", "Economic Operation", "Versatile Use"],
        applications: ["Regional Farming", "General Purpose", "Field Work"],
        useCase: "Regional farming operations with specific requirements"
      }
    ]
  },
  {
    familyName: "MF 1035 MS",
    familyId: "mf-1035-ms",
    baseModel: "MF 1035 MS",
    description: "Manual steering 35HP tractor with robust build for intensive farming.",
    mainImage: mf1035DiNew,
    category: "Mid-Range",
    priceRange: "₹7.0L - ₹8.0L",
    seoDescription: "MF 1035 MS tractor with manual steering for cost-effective farming.",
    variants: [
      {
        id: 573,
        model: "573",
        variant: "MS 2WD",
        hp: "35",
        image: mf1035DiNew,
        priceRange: "₹7.5L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "45 Litres",
          liftingCapacity: "1100 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["Manual Steering", "Robust Build", "Cost Effective"],
        applications: ["General Farming", "Field Preparation", "Medium Operations"],
        useCase: "Cost-conscious farmers requiring reliable manual steering tractor"
      }
    ]
  },
  {
    familyName: "MF 1035 SP",
    familyId: "mf-1035-sp",
    baseModel: "MF 1035 SP",
    description: "Super Plus 35HP tractor series with advanced features and superior lifting capacity.",
    mainImage: mf1035DiSuperPlus,
    category: "Premium",
    priceRange: "₹8.0L - ₹10.0L",
    seoDescription: "MF 1035 SP series with super plus features and enhanced lifting capacity.",
    variants: [
      {
        id: 852,
        model: "852",
        variant: "SP OIB 2WD",
        hp: "35",
        image: mf1035DiSuperPlus,
        priceRange: "₹8.5L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "45 Litres",
          liftingCapacity: "1500 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Super Plus Features", "Oil Immersed Brakes", "Enhanced Lifting"],
        applications: ["Heavy Duty Work", "Commercial Farming", "Large Implements"],
        useCase: "Commercial operations requiring enhanced lifting capacity"
      },
      {
        id: 1048,
        model: "1048",
        variant: "SP OIB 2WD",
        hp: "35",
        image: mf1035DiSuperPlus,
        priceRange: "₹9.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "45 Litres",
          liftingCapacity: "1500 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Advanced SP Features", "Oil Immersed Brakes", "Premium Build"],
        applications: ["Professional Farming", "Heavy Work", "Commercial Use"],
        useCase: "Professional farming requiring premium features"
      },
      {
        id: 1221,
        model: "1221",
        variant: "SP OIB 2WD",
        hp: "35",
        image: mf1035DiSuperPlus,
        priceRange: "₹9.5L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "45 Litres",
          liftingCapacity: "1500 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Latest SP Features", "Enhanced Performance", "Premium Quality"],
        applications: ["Modern Farming", "Heavy Implements", "Professional Use"],
        useCase: "Latest generation super plus farming operations",
        popular: true
      },
      {
        id: 1036,
        model: "1036",
        variant: "SP Superlift 2WD",
        hp: "35",
        image: mf1035DiSuperPlus,
        priceRange: "₹10.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "45 Litres",
          liftingCapacity: "1800 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Super Lift Capacity", "Premium Features", "Maximum Performance"],
        applications: ["Heavy Lifting", "Large Implements", "Commercial Operations"],
        useCase: "Operations requiring maximum lifting capacity and performance",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 241 Sona",
    familyId: "mf-241-sona",
    baseModel: "MF 241 Sona",
    description: "Versatile 42HP tractor series with multiple configurations for diverse farming needs.",
    mainImage: mf241Di,
    category: "Mid-Range",
    priceRange: "₹8.0L - ₹12.0L",
    seoDescription: "MF 241 Sona series with Sona, Eagle variants and power steering options.",
    variants: [
      {
        id: 578,
        model: "578",
        variant: "Sona 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹8.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["Sona Configuration", "Manual Steering", "Versatile Use"],
        applications: ["General Farming", "Field Operations", "Medium Duty Work"],
        useCase: "Medium farming operations with manual steering preference"
      },
      {
        id: 856,
        model: "856",
        variant: "Sona OIB+Platform 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹9.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["Sona with Platform", "Oil Immersed Brakes", "Enhanced Comfort"],
        applications: ["Field Work", "General Farming", "Platform Operations"],
        useCase: "Farming requiring platform features and better braking"
      },
      {
        id: 1116,
        model: "1116",
        variant: "856+ PS 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹10.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Power Steering", "Enhanced 856 Features", "Premium Comfort"],
        applications: ["Professional Farming", "Large Fields", "Comfort Operations"],
        useCase: "Professional operations requiring power steering and enhanced features"
      },
      {
        id: 905,
        model: "905",
        variant: "Sona PS 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹9.5L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Sona with Power Steering", "Enhanced Comfort", "Easy Operation"],
        applications: ["Professional Farming", "Medium Scale Operations", "Comfort Work"],
        useCase: "Medium farming requiring power steering comfort",
        popular: true
      },
      {
        id: 911,
        model: "911",
        variant: "Eagle 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹8.5L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["Eagle Configuration", "Enhanced Performance", "Reliable Build"],
        applications: ["Field Operations", "General Farming", "Medium Work"],
        useCase: "Farming requiring Eagle series reliability"
      },
      {
        id: 970,
        model: "970",
        variant: "Eagle PS 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹10.5L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Eagle with Power Steering", "Premium Performance", "Enhanced Comfort"],
        applications: ["Professional Farming", "Large Operations", "Premium Work"],
        useCase: "Professional Eagle series operations with power steering",
        popular: true
      },
      {
        id: 992,
        model: "992",
        variant: "Eagle OIB 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹9.5L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["Eagle with OIB", "Enhanced Braking", "Reliable Performance"],
        applications: ["Field Work", "General Farming", "Safety Critical Operations"],
        useCase: "Eagle series farming requiring enhanced braking performance"
      },
      {
        id: 993,
        model: "993",
        variant: "Eagle OIB PS 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹12.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Eagle OIB with PS", "Premium Features", "Maximum Comfort"],
        applications: ["Professional Farming", "Premium Operations", "Heavy Work"],
        useCase: "Premium Eagle series operations with all enhanced features",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 241 PD",
    familyId: "mf-241-pd",
    baseModel: "MF 241 PD",
    description: "Power Drive 42HP tractor series with advanced transmission and drive options.",
    mainImage: mf241Pd,
    category: "Mid-Range",
    priceRange: "₹9.0L - ₹13.0L",
    seoDescription: "MF 241 PD series with Super Steer, Ultra PD and 4WD configurations.",
    variants: [
      {
        id: 598,
        model: "598",
        variant: "SS MS 2WD",
        hp: "42",
        image: mf241Pd,
        priceRange: "₹9.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "12 F + 3 R",
          driveType: "2WD",
          transmission: "Super Steer Manual"
        },
        keyFeatures: ["Super Steer", "12+3 Gearbox", "Manual Steering"],
        applications: ["Precision Farming", "Field Operations", "Advanced Work"],
        useCase: "Precision farming requiring super steer capabilities"
      },
      {
        id: 779,
        model: "779",
        variant: "Ultra PD - CS 2WD",
        hp: "42",
        image: mf241Pd,
        priceRange: "₹11.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "12 F + 3 R",
          driveType: "2WD",
          transmission: "Constant Mesh"
        },
        keyFeatures: ["Ultra PD", "Constant Mesh", "Advanced Transmission"],
        applications: ["Professional Farming", "Heavy Work", "Advanced Operations"],
        useCase: "Professional operations requiring ultra power drive features",
        popular: true
      },
      {
        id: 887,
        model: "887",
        variant: "4WD",
        hp: "42",
        image: mf241Pd4WD,
        priceRange: "₹13.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "12 F + 3 R",
          driveType: "4WD",
          transmission: "Power Drive"
        },
        keyFeatures: ["4WD Drive", "Power Drive", "Maximum Traction"],
        applications: ["Heavy Terrain", "Slope Farming", "Maximum Traction Work"],
        useCase: "Operations requiring 4WD traction and power drive",
        popular: true
      },
      {
        id: 1047,
        model: "1047",
        variant: "SS PS (599) 2WD",
        hp: "42",
        image: mf241Pd,
        priceRange: "₹12.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "12 F + 3 R",
          driveType: "2WD",
          transmission: "Super Steer Power"
        },
        keyFeatures: ["Super Steer Power", "Enhanced 599 Features", "Premium Comfort"],
        applications: ["Professional Farming", "Precision Work", "Premium Operations"],
        useCase: "Premium super steer operations with power steering",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 241 Dyna",
    familyId: "mf-241-dyna",
    baseModel: "MF 241 Dyna",
    description: "Dynamic transmission 42HP tractor with enhanced rear axle options.",
    mainImage: mf241Di,
    category: "Premium",
    priceRange: "₹10.0L - ₹14.0L",
    seoDescription: "MF 241 Dyna series with power steering and heavy rear axle configurations.",
    variants: [
      {
        id: 839,
        model: "839",
        variant: "PS 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹10.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Dynamic Transmission", "Power Steering", "Synchro Gearbox"],
        applications: ["Professional Farming", "Advanced Operations", "Comfort Work"],
        useCase: "Professional operations requiring dynamic transmission and power steering"
      },
      {
        id: 1196,
        model: "1196",
        variant: "Heavy Rear Axle 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹14.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1500 kg",
          pto: "540 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "2WD",
          transmission: "Heavy Duty"
        },
        keyFeatures: ["Heavy Rear Axle", "Enhanced Lifting", "Premium Build"],
        applications: ["Heavy Duty Work", "Large Implements", "Commercial Operations"],
        useCase: "Heavy duty operations requiring enhanced rear axle strength",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 244 Dyna",
    familyId: "mf-244-dyna", 
    baseModel: "MF 244 Dyna",
    description: "44HP dynamic transmission tractor with smart features and 4WD options.",
    mainImage: mf245Di,
    category: "Mid-Range",
    priceRange: "₹11.0L - ₹15.0L",
    seoDescription: "MF 244 Dyna series with 4WD, 2WD and Smart configurations.",
    variants: [
      {
        id: 1057,
        model: "1057",
        variant: "4WD",
        hp: "44",
        image: mf245Di,
        priceRange: "₹15.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2500cc",
          fuelTank: "55 Litres",
          liftingCapacity: "1300 kg",
          pto: "540 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "4WD",
          transmission: "Dynamic"
        },
        keyFeatures: ["4WD Drive", "Dynamic Transmission", "Enhanced Traction"],
        applications: ["Heavy Terrain", "Slope Farming", "Advanced Operations"],
        useCase: "Operations requiring 4WD traction with dynamic features",
        popular: true
      },
      {
        id: 1117,
        model: "1117",
        variant: "2WD, Smart",
        hp: "44",
        image: mf245Di,
        priceRange: "₹11.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2500cc",
          fuelTank: "55 Litres",
          liftingCapacity: "1300 kg",
          pto: "540 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "2WD",
          transmission: "Smart"
        },
        keyFeatures: ["Smart Features", "Dynamic Transmission", "2WD Drive"],
        applications: ["Smart Farming", "Precision Agriculture", "Modern Operations"],
        useCase: "Modern farming requiring smart features with 2WD efficiency"
      },
      {
        id: 1128,
        model: "1128",
        variant: "4WD, Smart",
        hp: "44",
        image: mf245Di,
        priceRange: "₹14.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2500cc",
          fuelTank: "55 Litres",
          liftingCapacity: "1300 kg",
          pto: "540 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "4WD",
          transmission: "Smart"
        },
        keyFeatures: ["4WD Smart", "Advanced Features", "Maximum Performance"],
        applications: ["Advanced Smart Farming", "Precision 4WD Work", "Premium Operations"],
        useCase: "Premium smart farming requiring 4WD capabilities",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 244",
    familyId: "mf-244",
    baseModel: "MF 244",
    description: "Standard 44HP tractor with constant mesh transmission options.",
    mainImage: mf245Di,
    category: "Mid-Range",
    priceRange: "₹10.0L - ₹12.0L",
    seoDescription: "MF 244 tractors with MS CS and PS CS configurations.",
    variants: [
      {
        id: 1092,
        model: "1092",
        variant: "MS CS 2WD",
        hp: "44",
        image: mf245Di,
        priceRange: "₹10.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2500cc",
          fuelTank: "55 Litres",
          liftingCapacity: "1300 kg",
          pto: "540 RPM",
          gearBox: "12 F + 3 R",
          driveType: "2WD",
          transmission: "Manual Constant Mesh"
        },
        keyFeatures: ["Manual Steering", "Constant Mesh", "Standard Build"],
        applications: ["General Farming", "Field Operations", "Standard Work"],
        useCase: "Standard farming operations with constant mesh transmission"
      },
      {
        id: 1093,
        model: "1093",
        variant: "PS CS 2WD",
        hp: "44",
        image: mf245Di,
        priceRange: "₹12.0L",
        officialSpecs: {
          engine: "Simpson 3 Cylinder, 2500cc",
          fuelTank: "55 Litres",
          liftingCapacity: "1300 kg",
          pto: "540 RPM",
          gearBox: "12 F + 3 R",
          driveType: "2WD",
          transmission: "Power Steering Constant Mesh"
        },
        keyFeatures: ["Power Steering", "Constant Mesh", "Enhanced Comfort"],
        applications: ["Professional Farming", "Comfort Operations", "Large Fields"],
        useCase: "Professional operations requiring power steering with constant mesh",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 245 PD 46HP",
    familyId: "mf-245-pd-46hp",
    baseModel: "MF 245 PD 46HP",
    description: "Power Drive 46HP tractor with multiple tire configurations and loading options.",
    mainImage: mf245Pd46HP,
    category: "Premium",
    priceRange: "₹12.0L - ₹16.0L",
    seoDescription: "MF 245 PD 46HP series with 13.6, 14.9 tire options and front tire variations.",
    variants: [
      {
        id: 1012,
        model: "1012",
        variant: "Fully Loaded 13.6, 2WD",
        hp: "46",
        image: mf245Pd46HP,
        priceRange: "₹14.0L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2500cc",
          fuelTank: "60 Litres",
          liftingCapacity: "1400 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "2WD",
          transmission: "Power Drive"
        },
        keyFeatures: ["Fully Loaded", "13.6 Tires", "Power Drive"],
        applications: ["Professional Farming", "Heavy Work", "Commercial Operations"],
        useCase: "Professional operations requiring fully loaded 13.6 tire configuration",
        popular: true
      },
      {
        id: 1010,
        model: "1010",
        variant: "Basic 13.6 2WD",
        hp: "46",
        image: mf245Pd46HP,
        priceRange: "₹12.0L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2500cc",
          fuelTank: "60 Litres",
          liftingCapacity: "1400 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R",
          driveType: "2WD",
          transmission: "Basic Power Drive"
        },
        keyFeatures: ["Basic Configuration", "13.6 Tires", "Economic Operation"],
        applications: ["General Farming", "Standard Operations", "Cost-Effective Work"],
        useCase: "Cost-effective farming with basic 13.6 tire setup"
      },
      {
        id: 1021,
        model: "1021",
        variant: "Fully Loaded 14.9 2WD",
        hp: "46",
        image: mf245Pd46HP,
        priceRange: "₹15.0L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2500cc",
          fuelTank: "60 Litres",
          liftingCapacity: "1400 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "2WD",
          transmission: "Power Drive"
        },
        keyFeatures: ["Fully Loaded", "14.9 Tires", "Enhanced Traction"],
        applications: ["Heavy Field Work", "Large Implements", "Premium Operations"],
        useCase: "Premium operations requiring 14.9 tire configuration",
        popular: true
      },
      {
        id: 1022,
        model: "1022",
        variant: "1021 + 7.50X16 FT",
        hp: "46",
        image: mf245Pd46HP,
        priceRange: "₹15.5L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2500cc",
          fuelTank: "60 Litres",
          liftingCapacity: "1400 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "2WD",
          transmission: "Power Drive"
        },
        keyFeatures: ["7.50X16 Front Tires", "Enhanced 1021", "Premium Configuration"],
        applications: ["Heavy Work", "Specialty Operations", "Premium Farming"],
        useCase: "Premium operations requiring specific front tire configuration"
      },
      {
        id: 1162,
        model: "1162",
        variant: "6X16 FT 2WD",
        hp: "46",
        image: mf245Pd46HP,
        priceRange: "₹13.5L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2500cc",
          fuelTank: "60 Litres",
          liftingCapacity: "1400 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R",
          driveType: "2WD",
          transmission: "Power Drive"
        },
        keyFeatures: ["6X16 Front Tires", "Specialized Configuration", "Enhanced Performance"],
        applications: ["Specialty Farming", "Specific Operations", "Custom Work"],
        useCase: "Operations requiring 6X16 front tire specifications"
      }
    ]
  },
  {
    familyName: "MF 246 Dyna",
    familyId: "mf-246-dyna",
    baseModel: "MF 246 Dyna",
    description: "46HP dynamic tractor with multiple steering and drive configurations.",
    mainImage: mf245Di,
    category: "Premium",
    priceRange: "₹11.0L - ₹16.0L",
    seoDescription: "MF 246 Dyna series with MS, PS, Smart and 4WD options.",
    variants: [
      {
        id: 845,
        model: "845",
        variant: "MS 2WD",
        hp: "46",
        image: mf245Di,
        priceRange: "₹11.0L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2500cc",
          fuelTank: "60 Litres",
          liftingCapacity: "1400 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "2WD",
          transmission: "Manual Steering Dynamic"
        },
        keyFeatures: ["Manual Steering", "Dynamic Transmission", "46HP Power"],
        applications: ["General Farming", "Dynamic Operations", "Field Work"],
        useCase: "Dynamic farming operations with manual steering preference"
      },
      {
        id: 1088,
        model: "1088",
        variant: "PS 2WD",
        hp: "46",
        image: mf245Di,
        priceRange: "₹13.0L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2500cc",
          fuelTank: "60 Litres",
          liftingCapacity: "1400 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "2WD",
          transmission: "Power Steering Dynamic"
        },
        keyFeatures: ["Power Steering", "Dynamic Transmission", "Enhanced Comfort"],
        applications: ["Professional Farming", "Comfort Operations", "Large Fields"],
        useCase: "Professional dynamic operations requiring power steering",
        popular: true
      },
      {
        id: 1118,
        model: "1118",
        variant: "2WD, Smart 2WD",
        hp: "46",
        image: mf245Di,
        priceRange: "₹12.5L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2500cc",
          fuelTank: "60 Litres",
          liftingCapacity: "1400 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "2WD",
          transmission: "Smart Dynamic"
        },
        keyFeatures: ["Smart Features", "Dynamic Transmission", "2WD Efficiency"],
        applications: ["Smart Farming", "Precision Agriculture", "Modern Operations"],
        useCase: "Smart dynamic farming with 2WD efficiency"
      },
      {
        id: 962,
        model: "962",
        variant: "4WD",
        hp: "46",
        image: mf245Di,
        priceRange: "₹16.0L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2500cc",
          fuelTank: "60 Litres",
          liftingCapacity: "1400 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "4WD",
          transmission: "Dynamic 4WD"
        },
        keyFeatures: ["4WD Drive", "Dynamic Transmission", "Maximum Traction"],
        applications: ["Heavy Terrain", "Slope Farming", "Advanced 4WD Work"],
        useCase: "Dynamic 4WD operations requiring maximum traction",
        popular: true
      },
      {
        id: 1129,
        model: "1129",
        variant: "2WD, Smart 4WD",
        hp: "46",
        image: mf245Di,
        priceRange: "₹15.5L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2500cc",
          fuelTank: "60 Litres",
          liftingCapacity: "1400 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "4WD",
          transmission: "Smart Dynamic 4WD"
        },
        keyFeatures: ["Smart 4WD", "Dynamic Transmission", "Advanced Features"],
        applications: ["Advanced Smart Farming", "Precision 4WD Work", "Premium Operations"],
        useCase: "Premium smart dynamic operations with 4WD capabilities",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 7250 Power",
    familyId: "mf-7250-power",
    baseModel: "MF 7250 Power",
    description: "High-power 50HP tractor series with multiple tire and transmission configurations.",
    mainImage: mf7250DiPowerUp,
    category: "Premium",
    priceRange: "₹13.0L - ₹18.0L",
    seoDescription: "MF 7250 Power series with 13.6, 14.9 tire options and RPTO configurations.",
    variants: [
      {
        id: 1077,
        model: "1077",
        variant: "13.6 MS 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹13.0L",
        officialSpecs: {
          engine: "Perkins 4 Cylinder, 2500cc",
          fuelTank: "65 Litres",
          liftingCapacity: "1600 kg",
          pto: "540/750 RPM",
          gearBox: "16 F + 16 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["13.6 Tires", "Manual Steering", "50HP Power"],
        applications: ["Heavy Field Work", "Large Implements", "Commercial Farming"],
        useCase: "Commercial farming with 13.6 tire configuration and manual steering"
      },
      {
        id: 1075,
        model: "1075",
        variant: "14.9 MS 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹14.0L",
        officialSpecs: {
          engine: "Perkins 4 Cylinder, 2500cc",
          fuelTank: "65 Litres",
          liftingCapacity: "1600 kg",
          pto: "540/750 RPM",
          gearBox: "16 F + 16 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["14.9 Tires", "Manual Steering", "Enhanced Traction"],
        applications: ["Heavy Terrain", "Large Field Operations", "Commercial Work"],
        useCase: "Commercial operations requiring 14.9 tire configuration",
        popular: true
      },
      {
        id: 1078,
        model: "1078",
        variant: "PS RPTO 14.9 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹16.0L",
        officialSpecs: {
          engine: "Perkins 4 Cylinder, 2500cc",
          fuelTank: "65 Litres",
          liftingCapacity: "1600 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R",
          driveType: "2WD",
          transmission: "Power Steering RPTO"
        },
        keyFeatures: ["Power Steering", "RPTO", "14.9 Tires"],
        applications: ["Professional Farming", "RPTO Operations", "Premium Work"],
        useCase: "Professional operations requiring power steering and RPTO",
        popular: true
      },
      {
        id: 1080,
        model: "1080",
        variant: "1076 + 7.50X16 FT 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹15.0L",
        officialSpecs: {
          engine: "Perkins 4 Cylinder, 2500cc",
          fuelTank: "65 Litres",
          liftingCapacity: "1600 kg",
          pto: "540/750 RPM",
          gearBox: "16 F + 16 R",
          driveType: "2WD",
          transmission: "Enhanced"
        },
        keyFeatures: ["7.50X16 Front Tires", "Enhanced Configuration", "50HP Power"],
        applications: ["Specialty Operations", "Custom Work", "Enhanced Performance"],
        useCase: "Operations requiring specific 7.50X16 front tire configuration"
      },
      {
        id: 1188,
        model: "1188",
        variant: "Base 1081, BSS 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹18.0L",
        officialSpecs: {
          engine: "Perkins 4 Cylinder, 2500cc",
          fuelTank: "65 Litres",
          liftingCapacity: "1600 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R Synchro",
          driveType: "2WD",
          transmission: "BSS Enhanced"
        },
        keyFeatures: ["BSS Configuration", "Enhanced Base", "Premium Features"],
        applications: ["Premium Farming", "Advanced Operations", "Professional Work"],
        useCase: "Premium operations requiring BSS enhanced configuration",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 245 -50 HP / MF 245",
    familyId: "mf-245-50hp",
    baseModel: "MF 245",
    description: "Standard 50HP tractor series with reliable performance for various applications.",
    mainImage: mf245Di,
    category: "Mid-Range",
    priceRange: "₹11.0L - ₹13.0L",
    seoDescription: "MF 245 50HP tractors with standard 2WD configuration.",
    variants: [
      {
        id: 670,
        model: "670",
        variant: "2WD",
        hp: "50",
        image: mf245Di,
        priceRange: "₹11.0L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2500cc",
          fuelTank: "60 Litres",
          liftingCapacity: "1500 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R",
          driveType: "2WD",
          transmission: "Standard"
        },
        keyFeatures: ["Standard Configuration", "50HP Power", "Reliable Performance"],
        applications: ["General Farming", "Field Operations", "Medium Scale Work"],
        useCase: "Standard farming operations requiring reliable 50HP performance"
      },
      {
        id: 762,
        model: "762",
        variant: "2WD",
        hp: "50",
        image: mf245Di,
        priceRange: "₹13.0L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2500cc",
          fuelTank: "60 Litres",
          liftingCapacity: "1500 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R",
          driveType: "2WD",
          transmission: "Enhanced Standard"
        },
        keyFeatures: ["Enhanced Features", "50HP Power", "Improved Performance"],
        applications: ["Professional Farming", "Enhanced Operations", "Commercial Work"],
        useCase: "Enhanced standard farming requiring improved performance",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 245 PD- 50 HP / MF 245 PD",
    familyId: "mf-245-pd-50hp",
    baseModel: "MF 245 PD",
    description: "Power Drive 50HP tractor with Eagle series configurations and enhanced features.",
    mainImage: mf245Di,
    category: "Premium",
    priceRange: "₹14.0L - ₹16.0L",
    seoDescription: "MF 245 PD 50HP with Eagle PS configurations and clevis pin options.",
    variants: [
      {
        id: 948,
        model: "948",
        variant: "Eagle PS 2WD",
        hp: "50",
        image: mf245Di,
        priceRange: "₹14.0L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2500cc",
          fuelTank: "60 Litres",
          liftingCapacity: "1500 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "2WD",
          transmission: "Eagle Power Steering"
        },
        keyFeatures: ["Eagle Power Steering", "Power Drive", "50HP Performance"],
        applications: ["Professional Farming", "Eagle Series Work", "Premium Operations"],
        useCase: "Professional Eagle series operations with power steering",
        popular: true
      },
      {
        id: 1157,
        model: "1157",
        variant: "Eagle PS + Clevis Pin 2WD",
        hp: "50",
        image: mf245Di,
        priceRange: "₹16.0L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2500cc",
          fuelTank: "60 Litres",
          liftingCapacity: "1500 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "2WD",
          transmission: "Eagle PS Enhanced"
        },
        keyFeatures: ["Eagle PS", "Clevis Pin", "Premium Configuration"],
        applications: ["Premium Farming", "Specialized Work", "Professional Operations"],
        useCase: "Premium Eagle operations requiring clevis pin configuration",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 5245 PD",
    familyId: "mf-5245-pd",
    baseModel: "MF 5245 PD",
    description: "Power Drive 45HP compact tractor with 4WD capabilities for professional use.",
    mainImage: mf5225,
    category: "Compact Pro",
    priceRange: "₹15.0L - ₹17.0L",
    seoDescription: "MF 5245 PD with 4WD drive for professional compact farming operations.",
    variants: [
      {
        id: 751,
        model: "751",
        variant: "4WD",
        hp: "45",
        image: mf5225,
        priceRange: "₹17.0L",
        officialSpecs: {
          engine: "Perkins 4 Cylinder, 2500cc",
          fuelTank: "60 Litres",
          liftingCapacity: "1400 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "4WD",
          transmission: "Power Drive"
        },
        keyFeatures: ["4WD Drive", "Power Drive", "Compact Professional"],
        applications: ["Professional Compact Farming", "4WD Operations", "Premium Compact Work"],
        useCase: "Professional compact operations requiring 4WD capabilities",
        popular: true
      }
    ]
  },
  {
    familyName: "7250 Power Up",
    familyId: "7250-power-up",
    baseModel: "7250 Power Up",
    description: "Enhanced 50HP Power Up series with multiple tire and pump configurations.",
    mainImage: mf7250DiPowerUp,
    category: "Premium",
    priceRange: "₹15.0L - ₹19.0L",
    seoDescription: "7250 Power Up series with 14.9, 13.6 tire options and tandem pump features.",
    variants: [
      {
        id: 858,
        model: "858",
        variant: "14.9 PS 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹16.0L",
        officialSpecs: {
          engine: "Perkins 4 Cylinder Turbo, 2500cc",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["14.9 Tires", "Power Steering", "Power Up Features"],
        applications: ["Heavy Field Work", "Large Implements", "Commercial Operations"],
        useCase: "Commercial operations requiring 14.9 tire configuration with power steering",
        popular: true
      },
      {
        id: 940,
        model: "940",
        variant: "858 + 7.50X16 FT 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹17.0L",
        officialSpecs: {
          engine: "Perkins 4 Cylinder Turbo, 2500cc",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["7.50X16 Front Tires", "Enhanced 858", "Power Up"],
        applications: ["Specialty Operations", "Custom Front Tire Work", "Premium Farming"],
        useCase: "Premium operations requiring specific 7.50X16 front tire setup"
      },
      {
        id: 914,
        model: "914",
        variant: "14.9 MS 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹15.0L",
        officialSpecs: {
          engine: "Perkins 4 Cylinder Turbo, 2500cc",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["14.9 Tires", "Manual Steering", "Power Up Features"],
        applications: ["Heavy Field Work", "Large Operations", "Commercial Farming"],
        useCase: "Commercial farming with 14.9 tires and manual steering preference"
      },
      {
        id: 915,
        model: "915",
        variant: "13.6 PS 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹16.5L",
        officialSpecs: {
          engine: "Perkins 4 Cylinder Turbo, 2500cc",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["13.6 Tires", "Power Steering", "Power Up Features"],
        applications: ["Professional Farming", "Enhanced Operations", "Premium Work"],
        useCase: "Professional operations with 13.6 tire configuration and power steering"
      },
      {
        id: 917,
        model: "917",
        variant: "Tandem pump 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹19.0L",
        officialSpecs: {
          engine: "Perkins 4 Cylinder Turbo, 2500cc",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R",
          driveType: "2WD",
          transmission: "Tandem Pump"
        },
        keyFeatures: ["Tandem Pump", "Power Up Features", "Enhanced Hydraulics"],
        applications: ["Heavy Hydraulic Work", "Multiple Implement Operations", "Professional Farming"],
        useCase: "Professional operations requiring tandem pump hydraulic capabilities",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 9500E",
    familyId: "mf-9500e",
    baseModel: "MF 9500E",
    description: "Enhanced 85HP high-power tractor with multiple tire configurations for large-scale operations.",
    mainImage: mf9500PS,
    category: "High Power",
    priceRange: "₹20.0L - ₹25.0L",
    seoDescription: "MF 9500E enhanced tractors with 14.9 and 16.9 tire options for commercial farming.",
    variants: [
      {
        id: 980,
        model: "980",
        variant: "14.9 2WD",
        hp: "85",
        image: mf9500PS,
        priceRange: "₹20.0L",
        officialSpecs: {
          engine: "Perkins 6 Cylinder Turbo, 4400cc",
          fuelTank: "120 Litres",
          liftingCapacity: "3500 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R Synchro",
          driveType: "2WD",
          transmission: "Enhanced"
        },
        keyFeatures: ["85HP Power", "14.9 Tires", "Enhanced Features"],
        applications: ["Large Scale Farming", "Heavy Implements", "Commercial Operations"],
        useCase: "Large-scale commercial farming with 14.9 tire configuration",
        popular: true
      },
      {
        id: 981,
        model: "981",
        variant: "16.9 2WD",
        hp: "85",
        image: mf9500PS,
        priceRange: "₹25.0L",
        officialSpecs: {
          engine: "Perkins 6 Cylinder Turbo, 4400cc",
          fuelTank: "120 Litres",
          liftingCapacity: "3500 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R Synchro",
          driveType: "2WD",
          transmission: "Enhanced"
        },
        keyFeatures: ["85HP Power", "16.9 Tires", "Maximum Traction"],
        applications: ["Heavy Terrain", "Large Implements", "Maximum Performance"],
        useCase: "Heavy-duty operations requiring 16.9 tire configuration and maximum performance",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 254 Dyna",
    familyId: "mf-254-dyna",
    baseModel: "MF 254 Dyna",
    description: "54HP dynamic tractor with multiple width and drive configurations including smart features.",
    mainImage: mf245Di,
    category: "Mid-Range",
    priceRange: "₹12.0L - ₹18.0L",
    seoDescription: "MF 254 Dyna series with 2WD, 4WD, Smart and various width options.",
    variants: [
      {
        id: 847,
        model: "847",
        variant: "2WD",
        hp: "54",
        image: mf245Di,
        priceRange: "₹12.0L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2800cc",
          fuelTank: "65 Litres",
          liftingCapacity: "1500 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "2WD",
          transmission: "Dynamic"
        },
        keyFeatures: ["54HP Power", "Dynamic Transmission", "2WD Drive"],
        applications: ["General Farming", "Field Operations", "Medium Scale Work"],
        useCase: "General farming operations with dynamic transmission"
      },
      {
        id: 1232,
        model: "1232",
        variant: "7.5FT 2WD",
        hp: "54",
        image: mf245Di,
        priceRange: "₹13.0L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2800cc",
          fuelTank: "65 Litres",
          liftingCapacity: "1500 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "2WD",
          transmission: "Dynamic"
        },
        keyFeatures: ["7.5FT Width", "Dynamic Transmission", "Narrow Operation"],
        applications: ["Row Crop", "Narrow Field Work", "Precision Farming"],
        useCase: "Operations requiring 7.5FT width for narrow field work"
      },
      {
        id: 1211,
        model: "1211",
        variant: "7.5FT 2WD",
        hp: "54",
        image: mf245Di,
        priceRange: "₹13.5L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2800cc",
          fuelTank: "65 Litres",
          liftingCapacity: "1500 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "2WD",
          transmission: "Dynamic Enhanced"
        },
        keyFeatures: ["7.5FT Width", "Enhanced Dynamic", "Improved Features"],
        applications: ["Enhanced Row Crop", "Precision Work", "Professional Farming"],
        useCase: "Enhanced operations requiring 7.5FT width with improved features"
      },
      {
        id: 1120,
        model: "1120",
        variant: "2WD, Smart",
        hp: "54",
        image: mf245Di,
        priceRange: "₹15.0L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2800cc",
          fuelTank: "65 Litres",
          liftingCapacity: "1500 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "2WD",
          transmission: "Smart Dynamic"
        },
        keyFeatures: ["Smart Features", "Dynamic Transmission", "Advanced Technology"],
        applications: ["Smart Farming", "Precision Agriculture", "Advanced Operations"],
        useCase: "Smart farming operations with advanced technology features",
        popular: true
      },
      {
        id: 1058,
        model: "1058",
        variant: "4WD",
        hp: "54",
        image: mf245Di,
        priceRange: "₹18.0L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2800cc",
          fuelTank: "65 Litres",
          liftingCapacity: "1500 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "4WD",
          transmission: "Dynamic 4WD"
        },
        keyFeatures: ["4WD Drive", "Dynamic Transmission", "Maximum Traction"],
        applications: ["Heavy Terrain", "Slope Farming", "4WD Operations"],
        useCase: "Operations requiring 4WD traction with dynamic transmission",
        popular: true
      },
      {
        id: 1141,
        model: "1141",
        variant: "4WD",
        hp: "54",
        image: mf245Di,
        priceRange: "₹17.5L",
        officialSpecs: {
          engine: "Simpson 4 Cylinder, 2800cc",
          fuelTank: "65 Litres",
          liftingCapacity: "1500 kg",
          pto: "540/750 RPM",
          gearBox: "12 F + 3 R Synchro",
          driveType: "4WD",
          transmission: "Dynamic 4WD"
        },
        keyFeatures: ["4WD Drive", "Enhanced Dynamic", "Professional Features"],
        applications: ["Professional 4WD Work", "Heavy Operations", "Enhanced Farming"],
        useCase: "Professional 4WD operations with enhanced dynamic features"
      }
    ]
  },
  {
    familyName: "MF 8055 Magnatrak",
    familyId: "mf-8055-magnatrak",
    baseModel: "MF 8055 Magnatrak",
    description: "High-power 80HP Magnatrak series with advanced tire configurations for heavy-duty operations.",
    mainImage: mf9500PS,
    category: "High Power",
    priceRange: "₹22.0L - ₹28.0L",
    seoDescription: "MF 8055 Magnatrak with 14.9 and 16.9 tire options for heavy commercial farming.",
    variants: [
      {
        id: 1094,
        model: "1094",
        variant: "14.9 2WD",
        hp: "80",
        image: mf9500PS,
        priceRange: "₹22.0L",
        officialSpecs: {
          engine: "Perkins 6 Cylinder Turbo, 4000cc",
          fuelTank: "110 Litres",
          liftingCapacity: "3200 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R Synchro",
          driveType: "2WD",
          transmission: "Magnatrak"
        },
        keyFeatures: ["80HP Power", "14.9 Tires", "Magnatrak Features"],
        applications: ["Heavy Commercial Farming", "Large Implements", "High Power Operations"],
        useCase: "Heavy commercial operations requiring 80HP power with 14.9 tires",
        popular: true
      },
      {
        id: 1190,
        model: "1190",
        variant: "16.9 2WD",
        hp: "80",
        image: mf9500PS,
        priceRange: "₹28.0L",
        officialSpecs: {
          engine: "Perkins 6 Cylinder Turbo, 4000cc",
          fuelTank: "110 Litres",
          liftingCapacity: "3200 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R Synchro",
          driveType: "2WD",
          transmission: "Magnatrak"
        },
        keyFeatures: ["80HP Power", "16.9 Tires", "Maximum Traction"],
        applications: ["Maximum Power Operations", "Heavy Terrain", "Large Scale Farming"],
        useCase: "Maximum power operations requiring 16.9 tire configuration",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 9563",
    familyId: "mf-9563",
    baseModel: "MF 9563",
    description: "High-performance 95HP tractor with multiple transmission and shuttle configurations.",
    mainImage: mf9563,
    category: "High Power",
    priceRange: "₹25.0L - ₹32.0L",
    seoDescription: "MF 9563 with 8x8 Super Shuttle, 12x4 and IPTO configurations for maximum performance.",
    variants: [
      {
        id: 1208,
        model: "1208",
        variant: "2WD 8X8 SUPER SHUTTLE",
        hp: "95",
        image: mf9563,
        priceRange: "₹28.0L",
        officialSpecs: {
          engine: "Perkins 6 Cylinder Turbo, 4400cc",
          fuelTank: "130 Litres",
          liftingCapacity: "4000 kg",
          pto: "540/750/1000 RPM",
          gearBox: "8 F + 8 R Super Shuttle",
          driveType: "2WD",
          transmission: "Super Shuttle"
        },
        keyFeatures: ["95HP Power", "8x8 Super Shuttle", "High Performance"],
        applications: ["High Performance Farming", "Multiple Operations", "Commercial Work"],
        useCase: "High-performance operations requiring super shuttle transmission",
        popular: true
      },
      {
        id: 1207,
        model: "1207",
        variant: "2WD 12X4",
        hp: "95",
        image: mf9563,
        priceRange: "₹25.0L",
        officialSpecs: {
          engine: "Perkins 6 Cylinder Turbo, 4400cc",
          fuelTank: "130 Litres",
          liftingCapacity: "4000 kg",
          pto: "540/750/1000 RPM",
          gearBox: "12 F + 4 R",
          driveType: "2WD",
          transmission: "Standard"
        },
        keyFeatures: ["95HP Power", "12x4 Transmission", "Standard Configuration"],
        applications: ["Large Scale Farming", "Heavy Work", "Commercial Operations"],
        useCase: "Large-scale commercial farming with 12x4 transmission"
      },
      {
        id: 1210,
        model: "1210",
        variant: "2WD 12X4 IPTO",
        hp: "95",
        image: mf9563,
        priceRange: "₹27.0L",
        officialSpecs: {
          engine: "Perkins 6 Cylinder Turbo, 4400cc",
          fuelTank: "130 Litres",
          liftingCapacity: "4000 kg",
          pto: "540/750/1000 RPM IPTO",
          gearBox: "12 F + 4 R",
          driveType: "2WD",
          transmission: "IPTO"
        },
        keyFeatures: ["95HP Power", "IPTO", "12x4 Transmission"],
        applications: ["IPTO Operations", "Professional Farming", "Advanced Work"],
        useCase: "Professional operations requiring IPTO capabilities",
        popular: true
      },
      {
        id: 1209,
        model: "1209",
        variant: "4WD 12X4",
        hp: "95",
        image: mf9563,
        priceRange: "₹30.0L",
        officialSpecs: {
          engine: "Perkins 6 Cylinder Turbo, 4400cc",
          fuelTank: "130 Litres",
          liftingCapacity: "4000 kg",
          pto: "540/750/1000 RPM",
          gearBox: "12 F + 4 R",
          driveType: "4WD",
          transmission: "4WD"
        },
        keyFeatures: ["95HP Power", "4WD Drive", "12x4 Transmission"],
        applications: ["Heavy 4WD Work", "Maximum Traction", "Large Operations"],
        useCase: "Heavy operations requiring 4WD traction with 95HP power",
        popular: true
      },
      {
        id: 1229,
        model: "1229",
        variant: "4WD 12X4 IPTO",
        hp: "95",
        image: mf9563,
        priceRange: "₹32.0L",
        officialSpecs: {
          engine: "Perkins 6 Cylinder Turbo, 4400cc",
          fuelTank: "130 Litres",
          liftingCapacity: "4000 kg",
          pto: "540/750/1000 RPM IPTO",
          gearBox: "12 F + 4 R",
          driveType: "4WD",
          transmission: "4WD IPTO"
        },
        keyFeatures: ["95HP Power", "4WD IPTO", "Maximum Features"],
        applications: ["Maximum Performance", "Professional 4WD Work", "Premium Operations"],
        useCase: "Premium operations requiring 4WD and IPTO capabilities",
        popular: true
      },
      {
        id: 1230,
        model: "1230",
        variant: "4WD SUPER SHUTTLE",
        hp: "95",
        image: mf9563,
        priceRange: "₹31.0L",
        officialSpecs: {
          engine: "Perkins 6 Cylinder Turbo, 4400cc",
          fuelTank: "130 Litres",
          liftingCapacity: "4000 kg",
          pto: "540/750/1000 RPM",
          gearBox: "Super Shuttle",
          driveType: "4WD",
          transmission: "4WD Super Shuttle"
        },
        keyFeatures: ["95HP Power", "4WD Super Shuttle", "Premium Performance"],
        applications: ["Premium 4WD Operations", "Maximum Performance", "Professional Work"],
        useCase: "Premium operations requiring 4WD super shuttle capabilities",
        popular: true
      }
    ]
  },
  {
    familyName: "MF 9500",
    familyId: "mf-9500",
    baseModel: "MF 9500",
    description: "Smart technology 90HP tractor series with 2WD and 4WD smart configurations.",
    mainImage: mf9500Smart,
    category: "High Power",
    priceRange: "₹24.0L - ₹28.0L",
    seoDescription: "MF 9500 smart tractors with 2WD and 4WD smart technology for modern farming.",
    variants: [
      {
        id: 1194,
        model: "1194",
        variant: "9500 2WD SMART",
        hp: "90",
        image: mf9500Smart,
        priceRange: "₹24.0L",
        officialSpecs: {
          engine: "Perkins 6 Cylinder Turbo, 4400cc",
          fuelTank: "125 Litres",
          liftingCapacity: "3800 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R Smart",
          driveType: "2WD",
          transmission: "Smart Technology"
        },
        keyFeatures: ["90HP Power", "Smart Technology", "2WD Efficiency"],
        applications: ["Smart Farming", "Precision Agriculture", "Modern Operations"],
        useCase: "Modern smart farming operations with 2WD efficiency",
        popular: true
      },
      {
        id: 1195,
        model: "1195",
        variant: "9500 4WD SMART",
        hp: "90",
        image: mf9500Smart,
        priceRange: "₹28.0L",
        officialSpecs: {
          engine: "Perkins 6 Cylinder Turbo, 4400cc",
          fuelTank: "125 Litres",
          liftingCapacity: "3800 kg",
          pto: "540/750/1000 RPM",
          gearBox: "16 F + 16 R Smart",
          driveType: "4WD",
          transmission: "Smart 4WD Technology"
        },
        keyFeatures: ["90HP Power", "Smart 4WD", "Advanced Technology"],
        applications: ["Advanced Smart Farming", "Precision 4WD Work", "Premium Operations"],
        useCase: "Premium smart farming operations requiring 4WD capabilities",
        popular: true
      }
    ]
  }
];

export const implementsDatabase = [
  {
    name: "MF 241 Dynatrack Loader",
    category: "Loaders",
    image: mf241DynatrackLoader,
    description: "Heavy-duty front loader for material handling and construction work.",
    specifications: {
      compatibility: "MF 241 Series",
      liftingCapacity: "850 kg",
      reachHeight: "3.2 m"
    }
  },
  {
    name: "MF 7235 Loader",
    category: "Loaders", 
    image: mf7235Loader,
    description: "Premium loader attachment for heavy lifting operations.",
    specifications: {
      compatibility: "MF 7235 Series",
      liftingCapacity: "1500 kg",
      reachHeight: "4.0 m"
    }
  },
  {
    name: "TAFE AgriStar Super Seeder",
    category: "Seeders",
    image: mf9500Smart,
    description: "Advanced seeding equipment for precision planting.",
    specifications: {
      workingWidth: "2.5 m",
      seedRate: "Variable",
      hopperCapacity: "180 kg"
    }
  },
  {
    name: "Hydraulic Trailers",
    category: "Trailers",
    image: mf9563,
    description: "Heavy-duty trailers for transportation and material handling.",
    specifications: {
      loadCapacity: "5000 kg",
      bedDimensions: "3.6m x 2.1m",
      hydraulicTilt: "Yes"
    }
  },
  {
    name: "Rotavators",
    category: "Cultivation",
    image: mf245Di,
    description: "Soil preparation equipment for efficient land cultivation.",
    specifications: {
      workingWidth: "1.5m - 2.5m",
      bladeType: "L-Type",
      powerRequirement: "25-50 HP"
    }
  }
];

// Helper function to get tractor by model number
export const getTractorByModel = (modelId: string) => {
  for (const family of tractorFamilies) {
    const variant = family.variants.find(v => v.model === modelId);
    if (variant) {
      return { family, variant };
    }
  }
  return null;
};

// Helper function to filter tractors by HP range
export const filterTractorsByHP = (minHP: number, maxHP: number) => {
  return tractorFamilies.filter(family => 
    family.variants.some(variant => {
      const hp = parseInt(variant.hp);
      return hp >= minHP && hp <= maxHP;
    })
  );
};

// Helper function to filter tractors by drive type
export const filterTractorsByDriveType = (driveType: "2WD" | "4WD") => {
  return tractorFamilies.filter(family => 
    family.variants.some(variant => variant.officialSpecs.driveType === driveType)
  );
};