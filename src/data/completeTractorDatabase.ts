// Complete Massey Ferguson Tractor Database - Updated with Accurate Research Data
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
    description: "Reliable 20HP compact tractor series with 3-cylinder diesel engine for small to medium farming operations.",
    mainImage: mf5118_4WD,
    category: "Compact",
    priceRange: "₹3.74L - ₹4.18L",
    seoDescription: "MF 5118 20HP compact tractor with 3-cylinder diesel engine, 4WD and 2WD options. Perfect for small farming operations.",
    variants: [
      {
        id: 812,
        model: "812",
        variant: "4WD",
        hp: "20",
        image: mf5118_4WD,
        priceRange: "₹4.18L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 20HP",
          fuelTank: "38 Litres",
          liftingCapacity: "680 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "4WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["4WD Drive", "Compact Design", "Fuel Efficient", "3-Cylinder Engine"],
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
          engine: "3 Cylinder Diesel, 20HP",
          fuelTank: "38 Litres",
          liftingCapacity: "680 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["2WD Drive", "5.25FT Width", "Economic Operation", "Compact Size"],
        applications: ["Row Crop", "Light Cultivation", "Small Operations"],
        useCase: "Small farms with moderate power requirements"
      }
    ]
  },
  {
    familyName: "MF 5222",
    familyId: "mf-5222",
    baseModel: "MF 5222",
    description: "Advanced 24HP compact tractor with 2-cylinder diesel engine and modern features for efficient farming operations.",
    mainImage: mf5225,
    category: "Compact",
    priceRange: "₹4.50L - ₹5.25L",
    seoDescription: "MF 5222/5225 24HP compact tractor with 2-cylinder diesel engine, 2700cc capacity and modern features.",
    variants: [
      {
        id: 1163,
        model: "1163",
        variant: "MS 2WD",
        hp: "24",
        image: mf5225,
        priceRange: "₹4.75L",
        officialSpecs: {
          engine: "2 Cylinder Diesel, 24HP, 2700cc",
          fuelTank: "42 Litres",
          liftingCapacity: "750 kg",
          pto: "540 RPM @ 2200 ERPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["2-Cylinder Engine", "Fuel Efficient", "Compact Design", "Modern Styling"],
        applications: ["Small Farming", "Orchard Work", "Utility Operations"],
        useCase: "Modern compact farming operations with efficient performance"
      }
    ]
  },
  {
    familyName: "6026 Maxpro",
    familyId: "6026-maxpro",
    baseModel: "6026 Maxpro",
    description: "Powerful 26HP tractor series with 3-cylinder diesel engine designed for medium farming operations with MaxPro technology.",
    mainImage: mf6026MaxPro,
    category: "Medium",
    priceRange: "₹5.50L - ₹6.25L",
    seoDescription: "6026 Maxpro 26HP tractor with 3-cylinder diesel engine, Wide Track and Narrow Track 4WD variants.",
    variants: [
      {
        id: 1113,
        model: "1113",
        variant: "Wide Track 4WD",
        hp: "26",
        image: mf6026MaxPro,
        priceRange: "₹6.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 26HP",
          fuelTank: "45 Litres",
          liftingCapacity: "850 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "4WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Wide Track Design", "4WD Drive", "26HP Power", "MaxPro Technology"],
        applications: ["Medium Farming", "Field Operations", "Mixed Agriculture"],
        useCase: "Medium farms requiring wide track stability and 4WD traction"
      },
      {
        id: 1112,
        model: "1112",
        variant: "Narrow Track 4WD",
        hp: "26",
        image: mf6026MaxPro,
        priceRange: "₹6.00L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 26HP",
          fuelTank: "45 Litres",
          liftingCapacity: "850 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "4WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Narrow Track Design", "4WD Drive", "Orchard Suitable", "MaxPro Technology"],
        applications: ["Orchard Work", "Vineyard Farming", "Row Crop Operations"],
        useCase: "Narrow spacing agricultural operations with 4WD capability"
      }
    ]
  },
  {
    familyName: "6028 Maxpro",
    familyId: "6028-maxpro",
    baseModel: "6028 Maxpro",
    description: "High-performance 28HP tractor with 3-cylinder diesel engine for intensive farming operations with MaxPro technology.",
    mainImage: mf6028MaxPro4WD,
    category: "Medium",
    priceRange: "₹6.00L - ₹7.21L",
    seoDescription: "6028 Maxpro 28HP high-performance tractor with 3-cylinder diesel engine and 4WD variants for intensive farming.",
    variants: [
      {
        id: 971,
        model: "971",
        variant: "Narrow Track 4WD",
        hp: "28",
        image: mf6028MaxPro4WD,
        priceRange: "₹6.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 28HP",
          fuelTank: "50 Litres",
          liftingCapacity: "950 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "4WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Narrow Track Design", "28HP High Performance", "4WD Drive", "MaxPro Technology"],
        applications: ["Intensive Farming", "Orchard Work", "Precision Agriculture"],
        useCase: "High-performance narrow track operations with superior maneuverability"
      },
      {
        id: 1051,
        model: "1051",
        variant: "Wide Track 4WD",
        hp: "28",
        image: mf6028MaxPro4WD,
        priceRange: "₹7.21L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 28HP",
          fuelTank: "50 Litres",
          liftingCapacity: "950 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "4WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Wide Track Design", "28HP High Performance", "4WD Drive", "MaxPro Technology"],
        applications: ["Large Field Operations", "Heavy Duty Work", "Mixed Agriculture"],
        useCase: "Wide track high-performance farming with maximum stability"
      }
    ]
  },
  {
    familyName: "MF 1030",
    familyId: "mf-1030",
    baseModel: "MF 1030",
    description: "Versatile 30HP tractor with 8+2 speed transmission for diverse agricultural applications.",
    mainImage: heroTractor,
    category: "Medium",
    priceRange: "₹5.50L - ₹6.50L",
    seoDescription: "MF 1030 30HP tractor with 8+2 speed transmission for versatile farming operations.",
    variants: [
      {
        id: 1123,
        model: "1123",
        variant: "8+2 Speed 2WD",
        hp: "30",
        image: heroTractor,
        priceRange: "₹6.00L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 30HP",
          fuelTank: "45 Litres",
          liftingCapacity: "1000 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["8+2 Speed Gearbox", "30HP Power", "Versatile Design"],
        applications: ["Field Preparation", "Cultivation", "General Farming"],
        useCase: "Medium farms requiring versatile transmission options"
      }
    ]
  },
  {
    familyName: "ORCHARD",
    familyId: "orchard",
    baseModel: "ORCHARD",
    description: "Specialized orchard tractors designed for narrow spaces and precision farming in orchards and vineyards.",
    mainImage: mf30Orchard,
    category: "Specialized",
    priceRange: "₹4.50L - ₹5.50L",
    seoDescription: "Specialized orchard tractors with MS and PS variants for precision farming in orchards and vineyards.",
    variants: [
      {
        id: 843,
        model: "843",
        variant: "MS 2WD",
        hp: "25",
        image: mf30Orchard,
        priceRange: "₹4.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 25HP",
          fuelTank: "35 Litres",
          liftingCapacity: "650 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["Narrow Width", "Orchard Specific", "Manual Steering"],
        applications: ["Orchard Work", "Vineyard Farming", "Greenhouse Operations"],
        useCase: "Specialized orchard farming with manual steering"
      },
      {
        id: 967,
        model: "967",
        variant: "PS 2WD",
        hp: "25",
        image: mf30DiOrchardPlus,
        priceRange: "₹5.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 25HP",
          fuelTank: "35 Litres",
          liftingCapacity: "650 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Narrow Width", "Power Steering", "Orchard Optimized"],
        applications: ["Orchard Work", "Vineyard Farming", "Precision Operations"],
        useCase: "Specialized orchard farming with power steering comfort"
      }
    ]
  },
  {
    familyName: "MF 7235",
    familyId: "mf-7235",
    baseModel: "MF 7235",
    description: "Compact 35HP utility tractor with multiple tire configurations for diverse farming needs.",
    mainImage: mf7235LFT,
    category: "Medium",
    priceRange: "₹6.00L - ₹7.50L",
    seoDescription: "MF 7235 35HP utility tractor with multiple tire configurations including 12.4RT and 13.6RT options.",
    variants: [
      {
        id: 1147,
        model: "1147",
        variant: "12.4RT MS 2WD",
        hp: "35",
        image: mf7235LFT,
        priceRange: "₹6.50L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 35HP",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["12.4RT Tires", "35HP Power", "Manual Steering"],
        applications: ["Field Work", "Cultivation", "General Purpose"],
        useCase: "General farming with 12.4RT tire configuration"
      },
      {
        id: 1148,
        model: "1148",
        variant: "12.4RT PS 2WD",
        hp: "35",
        image: mf7235Loader,
        priceRange: "₹7.00L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 35HP",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["12.4RT Tires", "Power Steering", "Enhanced Comfort"],
        applications: ["Field Work", "Loader Operations", "Multi-purpose"],
        useCase: "General farming with power steering and loader capability"
      },
      {
        id: 1169,
        model: "1169",
        variant: "13.6RT MS 2WD",
        hp: "35",
        image: mf7235LFT,
        priceRange: "₹6.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 35HP",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["13.6RT Tires", "Better Traction", "Manual Steering"],
        applications: ["Heavy Field Work", "Difficult Terrain", "Tillage"],
        useCase: "Farming requiring better traction with larger tires"
      },
      {
        id: 1170,
        model: "1170",
        variant: "13.6RT PS 2WD",
        hp: "35",
        image: mf7235Loader,
        priceRange: "₹7.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 35HP",
          fuelTank: "50 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["13.6RT Tires", "Power Steering", "Maximum Traction"],
        applications: ["Heavy Field Work", "Loader Operations", "Challenging Terrain"],
        useCase: "Professional farming with maximum traction and comfort"
      }
    ]
  },
  {
    familyName: "MF 1035 DOST",
    familyId: "mf-1035-dost",
    baseModel: "MF 1035 DOST",
    description: "Reliable 35HP tractor series with 3-cylinder diesel engine, 2270cc capacity, designed for dependable performance.",
    mainImage: mf1035DiDost,
    category: "Medium",
    priceRange: "₹6.06L - ₹6.75L",
    seoDescription: "MF 1035 DOST 35HP tractor with 3-cylinder diesel engine, 2270cc, 1100kg lifting capacity for reliable farming.",
    variants: [
      {
        id: 939,
        model: "939",
        variant: "Dry Disc 2WD",
        hp: "35",
        image: mf1035DiDost,
        priceRange: "₹6.06L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 35HP, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1100 kg",
          pto: "30 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Dry Disc Brake", "35HP Power", "Reliable Performance", "DOST Technology"],
        applications: ["Field Preparation", "Cultivation", "General Farming"],
        useCase: "Dependable farming operations with dry disc brake system"
      },
      {
        id: 994,
        model: "994",
        variant: "OIB 2WD",
        hp: "35",
        image: mf1035DiDost,
        priceRange: "₹6.50L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 35HP, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1100 kg",
          pto: "30 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Oil Immersed Brakes", "Enhanced Safety", "35HP Power", "DOST Technology"],
        applications: ["Heavy Duty Work", "Field Operations", "Commercial Farming"],
        useCase: "Professional farming requiring oil immersed brake safety"
      }
    ]
  },
  {
    familyName: "MF 1035 R",
    familyId: "mf-1035-r",
    baseModel: "MF 1035 R",
    description: "Advanced 35HP tractor series with refined features and enhanced performance for modern farming operations.",
    mainImage: mf1035R,
    category: "Medium",
    priceRange: "₹6.25L - ₹7.00L",
    seoDescription: "MF 1035 R 35HP tractor with refined features and enhanced performance for modern farming operations.",
    variants: [
      {
        id: 1156,
        model: "1156",
        variant: "OIB 2WD",
        hp: "35",
        image: mf1035R,
        priceRange: "₹6.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 35HP, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1100 kg",
          pto: "30 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Oil Immersed Brakes", "Refined Design", "35HP Power", "R Series Features"],
        applications: ["Modern Farming", "Field Operations", "Agricultural Services"],
        useCase: "Modern farming operations with refined performance"
      },
      {
        id: 668,
        model: "668",
        variant: "Other states 2WD",
        hp: "35",
        image: mf1035R,
        priceRange: "₹6.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 35HP, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1100 kg",
          pto: "30 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Multi-state Compliance", "35HP Power", "Standard Features"],
        applications: ["General Farming", "Field Work", "Multi-purpose Use"],
        useCase: "Standard farming operations across different states"
      }
    ]
  },
  {
    familyName: "MF 1035 MS",
    familyId: "mf-1035-ms",
    baseModel: "MF 1035 MS",
    description: "Manual steering 35HP tractor with cost-effective operation for efficient farming needs.",
    mainImage: mf1035DiNew,
    category: "Medium",
    priceRange: "₹5.75L - ₹6.25L",
    seoDescription: "MF 1035 MS 35HP tractor with manual steering for cost-effective farming operations.",
    variants: [
      {
        id: 573,
        model: "573",
        variant: "MS 2WD",
        hp: "35",
        image: mf1035DiNew,
        priceRange: "₹5.95L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 35HP, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1100 kg",
          pto: "30 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["Manual Steering", "Cost Effective", "35HP Power", "Simple Operation"],
        applications: ["Cost-conscious Farming", "Basic Operations", "Small-medium Farms"],
        useCase: "Economical farming operations with manual steering"
      }
    ]
  },
  {
    familyName: "MF 1035 SP",
    familyId: "mf-1035-sp",
    baseModel: "MF 1035 SP",
    description: "Super Plus 35HP tractor series with multiple variants including OIB and Superlift features for enhanced performance.",
    mainImage: mf1035DiSuperPlus,
    category: "Medium",
    priceRange: "₹6.50L - ₹7.25L",
    seoDescription: "MF 1035 SP 35HP Super Plus tractor with OIB and Superlift variants for enhanced farming performance.",
    variants: [
      {
        id: 852,
        model: "852",
        variant: "SP OIB 2WD",
        hp: "35",
        image: mf1035DiSuperPlus,
        priceRange: "₹6.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 35HP, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1100 kg",
          pto: "30 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Super Plus Features", "Oil Immersed Brakes", "Enhanced Performance"],
        applications: ["Professional Farming", "Heavy Duty Operations", "Commercial Use"],
        useCase: "Professional farming with super plus features and safety"
      },
      {
        id: 1048,
        model: "1048",
        variant: "SP OIB 2WD",
        hp: "35",
        image: mf1035DiSuperPlus,
        priceRange: "₹6.85L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 35HP, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1100 kg",
          pto: "30 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Super Plus Features", "Oil Immersed Brakes", "Advanced Safety"],
        applications: ["Professional Farming", "Heavy Operations", "Agricultural Services"],
        useCase: "Advanced professional farming with enhanced safety features"
      },
      {
        id: 1221,
        model: "1221",
        variant: "SP OIB 2WD",
        hp: "35",
        image: mf1035DiSuperPlus,
        priceRange: "₹7.00L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 35HP, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1100 kg",
          pto: "30 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Latest SP Features", "Oil Immersed Brakes", "Premium Build"],
        applications: ["Premium Farming", "Commercial Operations", "Heavy Work"],
        useCase: "Premium farming operations with latest super plus technology"
      },
      {
        id: 1036,
        model: "1036",
        variant: "SP Superlift 2WD",
        hp: "35",
        image: mf1035DiSuperPlus,
        priceRange: "₹7.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 35HP, 2270cc",
          fuelTank: "50 Litres",
          liftingCapacity: "1300 kg",
          pto: "30 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Sliding Mesh"
        },
        keyFeatures: ["Superlift System", "1300kg Lift Capacity", "Enhanced Hydraulics"],
        applications: ["Heavy Lifting", "Loader Operations", "Industrial Farming"],
        useCase: "Heavy duty farming requiring maximum lifting capacity"
      }
    ]
  },
  {
    familyName: "MF 241 Sona",
    familyId: "mf-241-sona",
    baseModel: "MF 241 Sona",
    description: "Versatile 42HP tractor series with multiple Sona and Eagle variants featuring advanced technology and reliability.",
    mainImage: mf241Di,
    category: "Medium",
    priceRange: "₹7.00L - ₹8.50L",
    seoDescription: "MF 241 Sona 42HP tractor with multiple variants including Sona, Eagle configurations and power steering options.",
    variants: [
      {
        id: 578,
        model: "578",
        variant: "Sona 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹7.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 42HP",
          fuelTank: "55 Litres",
          liftingCapacity: "1350 kg",
          pto: "35 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["Sona Technology", "42HP Power", "Reliable Performance"],
        applications: ["Field Preparation", "Cultivation", "General Farming"],
        useCase: "Versatile farming operations with Sona technology"
      },
      {
        id: 856,
        model: "856",
        variant: "Sona OIB+Platform 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹7.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 42HP",
          fuelTank: "55 Litres",
          liftingCapacity: "1350 kg",
          pto: "35 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["Oil Immersed Brakes", "Platform Design", "Enhanced Safety"],
        applications: ["Professional Farming", "Heavy Operations", "Commercial Use"],
        useCase: "Professional farming with platform design and safety features"
      },
      {
        id: 1116,
        model: "1116",
        variant: "856+ PS 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹8.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 42HP",
          fuelTank: "55 Litres",
          liftingCapacity: "1350 kg",
          pto: "35 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Power Steering", "Enhanced Platform", "Premium Features"],
        applications: ["Comfort Farming", "Long Operations", "Professional Use"],
        useCase: "Comfortable farming operations with power steering"
      },
      {
        id: 905,
        model: "905",
        variant: "Sona PS 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹7.95L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 42HP",
          fuelTank: "55 Litres",
          liftingCapacity: "1350 kg",
          pto: "35 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Sona Technology", "Power Steering", "Enhanced Comfort"],
        applications: ["Comfortable Farming", "Extended Operations", "Professional Work"],
        useCase: "Sona technology with power steering comfort"
      },
      {
        id: 911,
        model: "911",
        variant: "Eagle 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹7.50L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 42HP",
          fuelTank: "55 Litres",
          liftingCapacity: "1350 kg",
          pto: "35 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["Eagle Design", "Robust Build", "Reliable Performance"],
        applications: ["Heavy Duty Work", "Field Operations", "Commercial Farming"],
        useCase: "Robust farming operations with Eagle design"
      },
      {
        id: 970,
        model: "970",
        variant: "Eagle PS 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹8.00L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 42HP",
          fuelTank: "55 Litres",
          liftingCapacity: "1350 kg",
          pto: "35 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Eagle Design", "Power Steering", "Premium Build"],
        applications: ["Premium Farming", "Comfortable Operations", "Professional Use"],
        useCase: "Premium Eagle design with power steering comfort"
      },
      {
        id: 992,
        model: "992",
        variant: "Eagle OIB 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹8.10L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 42HP",
          fuelTank: "55 Litres",
          liftingCapacity: "1350 kg",
          pto: "35 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["Eagle Design", "Oil Immersed Brakes", "Enhanced Safety"],
        applications: ["Safe Farming", "Heavy Operations", "Professional Work"],
        useCase: "Eagle design with enhanced braking safety"
      },
      {
        id: 993,
        model: "993",
        variant: "Eagle OIB PS 2WD",
        hp: "42",
        image: mf241Di,
        priceRange: "₹8.50L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 42HP",
          fuelTank: "55 Litres",
          liftingCapacity: "1350 kg",
          pto: "35 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Eagle Design", "Oil Immersed Brakes", "Power Steering", "Premium Safety"],
        applications: ["Premium Safe Farming", "Professional Operations", "Commercial Use"],
        useCase: "Premium Eagle design with maximum safety and comfort features"
      }
    ]
  },
  {
    familyName: "MF 241 PD",
    familyId: "mf-241-pd",
    baseModel: "MF 241 PD",
    description: "Power Drive 42HP tractor series with advanced transmission and 4WD capability for enhanced performance.",
    mainImage: mf241Pd,
    category: "Medium",
    priceRange: "₹7.50L - ₹9.00L",
    seoDescription: "MF 241 PD 42HP Power Drive tractor with advanced transmission, 4WD variants and ultra performance features.",
    variants: [
      {
        id: 598,
        model: "598",
        variant: "SS MS 2WD",
        hp: "42",
        image: mf241Pd,
        priceRange: "₹7.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 42HP",
          fuelTank: "55 Litres",
          liftingCapacity: "1350 kg",
          pto: "35 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["Super Series", "Manual Steering", "Power Drive Technology"],
        applications: ["Field Operations", "Cultivation", "General Farming"],
        useCase: "Power drive farming with super series features"
      },
      {
        id: 779,
        model: "779",
        variant: "Ultra PD - CS 2WD",
        hp: "42",
        image: mf241Pd,
        priceRange: "₹8.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 42HP",
          fuelTank: "55 Litres",
          liftingCapacity: "1350 kg",
          pto: "35 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Central Shift"
        },
        keyFeatures: ["Ultra Power Drive", "Central Shift", "Advanced Technology"],
        applications: ["Ultra Performance", "Heavy Operations", "Professional Farming"],
        useCase: "Ultra performance farming with advanced power drive technology"
      },
      {
        id: 887,
        model: "887",
        variant: "4WD",
        hp: "42",
        image: mf241Pd4WD,
        priceRange: "₹8.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 42HP",
          fuelTank: "55 Litres",
          liftingCapacity: "1350 kg",
          pto: "35 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "4WD",
          transmission: "Power Drive"
        },
        keyFeatures: ["4WD Drive", "Power Drive Technology", "Maximum Traction"],
        applications: ["4WD Operations", "Difficult Terrain", "Heavy Duty Work"],
        useCase: "4WD farming requiring maximum traction and power"
      },
      {
        id: 1047,
        model: "1047",
        variant: "SS PS (599) 2WD",
        hp: "42",
        image: mf241Pd,
        priceRange: "₹8.50L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 42HP",
          fuelTank: "55 Litres",
          liftingCapacity: "1350 kg",
          pto: "35 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Super Series", "Power Steering", "Enhanced Comfort"],
        applications: ["Comfortable Farming", "Long Operations", "Professional Use"],
        useCase: "Super series with power steering for comfortable farming"
      }
    ]
  },
  {
    familyName: "MF 241 Dyna",
    familyId: "mf-241-dyna",
    baseModel: "MF 241 Dyna",
    description: "Dynamic 42HP tractor series with Dynatrack technology for superior performance and reliability.",
    mainImage: mf241DynatrackLoader,
    category: "Medium",
    priceRange: "₹7.75L - ₹8.50L",
    seoDescription: "MF 241 Dyna 42HP tractor with Dynatrack technology, power steering and heavy rear axle variants.",
    variants: [
      {
        id: 839,
        model: "839",
        variant: "PS 2WD",
        hp: "42",
        image: mf241DynatrackLoader,
        priceRange: "₹8.15L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 42HP",
          fuelTank: "55 Litres",
          liftingCapacity: "1350 kg",
          pto: "35 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Dynatrack Technology", "Power Steering", "Superior Performance"],
        applications: ["Professional Farming", "Loader Operations", "Commercial Use"],
        useCase: "Professional farming with Dynatrack technology and power steering"
      },
      {
        id: 1196,
        model: "1196",
        variant: "Heavy Rear Axle 2WD",
        hp: "42",
        image: mf241DynatrackLoader,
        priceRange: "₹8.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 42HP",
          fuelTank: "55 Litres",
          liftingCapacity: "1500 kg",
          pto: "35 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Heavy Rear Axle", "1500kg Lift Capacity", "Dynatrack Technology"],
        applications: ["Heavy Lifting", "Industrial Farming", "Loader Work"],
        useCase: "Heavy duty operations requiring maximum lifting capacity"
      }
    ]
  },
  {
    familyName: "MF 244 Dyna",
    familyId: "mf-244-dyna",
    baseModel: "MF 244 Dyna",
    description: "Advanced 44HP tractor series with Dynatrack technology, Smart features and 4WD capability.",
    mainImage: mf241DynatrackLoader,
    category: "Medium",
    priceRange: "₹8.25L - ₹9.50L",
    seoDescription: "MF 244 Dyna 44HP tractor with Dynatrack technology, Smart features and 4WD variants for advanced farming.",
    variants: [
      {
        id: 1057,
        model: "1057",
        variant: "4wd",
        hp: "44",
        image: mf241DynatrackLoader,
        priceRange: "₹9.26L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 44HP",
          fuelTank: "60 Litres",
          liftingCapacity: "1400 kg",
          pto: "37 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "4WD",
          transmission: "Dynatrack"
        },
        keyFeatures: ["4WD Drive", "Dynatrack Technology", "44HP Power"],
        applications: ["4WD Operations", "Heavy Terrain", "Professional Farming"],
        useCase: "4WD farming with Dynatrack technology for challenging terrain"
      },
      {
        id: 1117,
        model: "1117",
        variant: "2wd, Smart",
        hp: "44",
        image: mf241DynatrackLoader,
        priceRange: "₹8.84L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 44HP",
          fuelTank: "60 Litres",
          liftingCapacity: "1400 kg",
          pto: "37 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Smart Technology"
        },
        keyFeatures: ["Smart Technology", "2WD Drive", "Advanced Features"],
        applications: ["Smart Farming", "Precision Agriculture", "Modern Operations"],
        useCase: "Smart farming with advanced technology and precision features"
      },
      {
        id: 1128,
        model: "1128",
        variant: "4wd, Smart",
        hp: "44",
        image: mf241DynatrackLoader,
        priceRange: "₹9.50L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 44HP",
          fuelTank: "60 Litres",
          liftingCapacity: "1400 kg",
          pto: "37 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "4WD",
          transmission: "Smart Technology"
        },
        keyFeatures: ["4WD Drive", "Smart Technology", "Premium Features"],
        applications: ["Smart 4WD Farming", "Advanced Agriculture", "Professional Operations"],
        useCase: "Premium 4WD farming with smart technology and advanced features"
      }
    ]
  },
  {
    familyName: "MF 244",
    familyId: "mf-244",
    baseModel: "MF 244",
    description: "Versatile 44HP tractor with manual and power steering options for diverse farming applications.",
    mainImage: mf241Di,
    category: "Medium",
    priceRange: "₹8.00L - ₹8.75L",
    seoDescription: "MF 244 44HP tractor with MS and PS variants for versatile farming applications.",
    variants: [
      {
        id: 1092,
        model: "1092",
        variant: "MS CS 2WD",
        hp: "44",
        image: mf241Di,
        priceRange: "₹8.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 44HP",
          fuelTank: "60 Litres",
          liftingCapacity: "1400 kg",
          pto: "37 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering, Central Shift"
        },
        keyFeatures: ["Manual Steering", "Central Shift", "44HP Power"],
        applications: ["General Farming", "Field Operations", "Cost-effective Operations"],
        useCase: "Cost-effective farming with manual steering and central shift"
      },
      {
        id: 1093,
        model: "1093",
        variant: "PS CS 2WD",
        hp: "44",
        image: mf241Di,
        priceRange: "₹8.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 44HP",
          fuelTank: "60 Litres",
          liftingCapacity: "1400 kg",
          pto: "37 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering, Central Shift"
        },
        keyFeatures: ["Power Steering", "Central Shift", "Enhanced Comfort"],
        applications: ["Comfortable Farming", "Long Operations", "Professional Use"],
        useCase: "Comfortable farming with power steering and central shift convenience"
      }
    ]
  },
  {
    familyName: "MF 245 PD 46HP",
    familyId: "mf-245-pd-46hp",
    baseModel: "MF 245 PD 46HP",
    description: "Power Drive 46HP tractor series with multiple tire configurations and loading options for versatile operations.",
    mainImage: mf245Pd46HP,
    category: "Medium",
    priceRange: "₹8.50L - ₹9.75L",
    seoDescription: "MF 245 PD 46HP Power Drive tractor with multiple tire configurations and loading options for versatile farming.",
    variants: [
      {
        id: 1012,
        model: "1012",
        variant: "Fully Loaded 13.6 ,2WD",
        hp: "46",
        image: mf245Pd46HP,
        priceRange: "₹9.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 46HP",
          fuelTank: "65 Litres",
          liftingCapacity: "1500 kg",
          pto: "39 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Drive"
        },
        keyFeatures: ["Fully Loaded", "13.6 Tires", "Power Drive Technology"],
        applications: ["Heavy Duty Farming", "Commercial Operations", "Professional Use"],
        useCase: "Fully loaded operations with 13.6 tires for maximum performance"
      },
      {
        id: 1010,
        model: "1010",
        variant: "Basic 13.6 2WD",
        hp: "46",
        image: mf245Pd46HP,
        priceRange: "₹8.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 46HP",
          fuelTank: "65 Litres",
          liftingCapacity: "1500 kg",
          pto: "39 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Drive"
        },
        keyFeatures: ["Basic Configuration", "13.6 Tires", "Cost Effective"],
        applications: ["Basic Farming", "Field Operations", "Economic Operations"],
        useCase: "Basic configuration with 13.6 tires for cost-effective farming"
      },
      {
        id: 1021,
        model: "1021",
        variant: "Fully Loaded 14.9 2WD",
        hp: "46",
        image: mf245Pd46HP,
        priceRange: "₹9.50L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 46HP",
          fuelTank: "65 Litres",
          liftingCapacity: "1500 kg",
          pto: "39 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Drive"
        },
        keyFeatures: ["Fully Loaded", "14.9 Tires", "Maximum Traction"],
        applications: ["Heavy Operations", "Difficult Terrain", "Professional Farming"],
        useCase: "Fully loaded with 14.9 tires for maximum traction and performance"
      },
      {
        id: 1022,
        model: "1022",
        variant: "1021 + 7.50X16 FT",
        hp: "46",
        image: mf245Pd46HP,
        priceRange: "₹9.60L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 46HP",
          fuelTank: "65 Litres",
          liftingCapacity: "1500 kg",
          pto: "39 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Drive"
        },
        keyFeatures: ["Fully Loaded", "7.50X16 Front Tires", "Enhanced Stability"],
        applications: ["Stable Operations", "Heavy Work", "Professional Farming"],
        useCase: "Enhanced stability with special front tire configuration"
      },
      {
        id: 1162,
        model: "1162",
        variant: "6X16 FT 2WD",
        hp: "46",
        image: mf245Pd46HP,
        priceRange: "₹9.00L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 46HP",
          fuelTank: "65 Litres",
          liftingCapacity: "1500 kg",
          pto: "39 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Drive"
        },
        keyFeatures: ["6X16 Front Tires", "Specialized Configuration", "Versatile Use"],
        applications: ["Specialized Farming", "Custom Operations", "Specific Applications"],
        useCase: "Specialized configuration with 6X16 front tires for specific applications"
      }
    ]
  },
  {
    familyName: "MF 246 Dyna",
    familyId: "mf-246-dyna",
    baseModel: "MF 246 Dyna",
    description: "Advanced 46HP Dynatrack tractor with multiple steering options, Smart technology and 4WD capability.",
    mainImage: mf241DynatrackLoader,
    category: "Medium",
    priceRange: "₹8.75L - ₹9.75L",
    seoDescription: "MF 246 Dyna 46HP Dynatrack tractor with MS, PS, Smart technology and 4WD variants for advanced farming.",
    variants: [
      {
        id: 845,
        model: "845",
        variant: "MS 2WD",
        hp: "46",
        image: mf241DynatrackLoader,
        priceRange: "₹8.90L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 46HP, 2700cc",
          fuelTank: "65 Litres",
          liftingCapacity: "1500 kg",
          pto: "39 HP, 540 RPM",
          gearBox: "12 F + 12 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["Dynatrack Technology", "Manual Steering", "12x12 Gearbox"],
        applications: ["General Farming", "Field Operations", "Cost-effective Operations"],
        useCase: "Dynatrack farming with manual steering for cost-effective operations"
      },
      {
        id: 1088,
        model: "1088",
        variant: "PS 2WD",
        hp: "46",
        image: mf241DynatrackLoader,
        priceRange: "₹9.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 46HP, 2700cc",
          fuelTank: "65 Litres",
          liftingCapacity: "1500 kg",
          pto: "39 HP, 540 RPM",
          gearBox: "12 F + 12 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Dynatrack Technology", "Power Steering", "Enhanced Comfort"],
        applications: ["Comfortable Farming", "Long Operations", "Professional Use"],
        useCase: "Dynatrack with power steering for comfortable professional farming"
      },
      {
        id: 1118,
        model: "1118",
        variant: "2wd, Smart 2WD",
        hp: "46",
        image: mf241DynatrackLoader,
        priceRange: "₹9.40L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 46HP, 2700cc",
          fuelTank: "65 Litres",
          liftingCapacity: "1500 kg",
          pto: "39 HP, 540 RPM",
          gearBox: "12 F + 12 R",
          driveType: "2WD",
          transmission: "Smart Technology"
        },
        keyFeatures: ["Smart Technology", "2WD Drive", "Advanced Features"],
        applications: ["Smart Farming", "Precision Agriculture", "Modern Operations"],
        useCase: "Smart Dynatrack farming with advanced technology features"
      },
      {
        id: 962,
        model: "962",
        variant: "4WD",
        hp: "46",
        image: mf241DynatrackLoader,
        priceRange: "₹9.65L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 46HP, 2700cc",
          fuelTank: "65 Litres",
          liftingCapacity: "1500 kg",
          pto: "39 HP, 540 RPM",
          gearBox: "12 F + 12 R",
          driveType: "4WD",
          transmission: "Dynatrack"
        },
        keyFeatures: ["4WD Drive", "Dynatrack Technology", "Maximum Traction"],
        applications: ["4WD Operations", "Heavy Terrain", "Professional Farming"],
        useCase: "4WD Dynatrack farming for challenging terrain and maximum traction"
      },
      {
        id: 1129,
        model: "1129",
        variant: "2wd, Smart 4WD",
        hp: "46",
        image: mf241DynatrackLoader,
        priceRange: "₹9.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 46HP, 2700cc",
          fuelTank: "65 Litres",
          liftingCapacity: "1500 kg",
          pto: "39 HP, 540 RPM",
          gearBox: "12 F + 12 R",
          driveType: "4WD",
          transmission: "Smart Technology"
        },
        keyFeatures: ["4WD Drive", "Smart Technology", "Premium Features"],
        applications: ["Smart 4WD Farming", "Advanced Agriculture", "Premium Operations"],
        useCase: "Premium 4WD Smart Dynatrack farming with advanced technology"
      }
    ]
  },
  {
    familyName: "MF 7250 Power",
    familyId: "mf-7250-power",
    baseModel: "MF 7250 Power",
    description: "Powerful 50HP tractor series with 3-cylinder diesel engine, 2700cc capacity and multiple tire configurations.",
    mainImage: mf7250DiPowerUp,
    category: "High Power",
    priceRange: "₹8.25L - ₹9.50L",
    seoDescription: "MF 7250 Power 50HP tractor with 3-cylinder diesel, 2700cc engine and multiple tire configurations for power farming.",
    variants: [
      {
        id: 1077,
        model: "1077",
        variant: "13.6 MS 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹8.50L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP, 2700cc",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["50HP Power", "13.6 Tires", "Manual Steering", "2700cc Engine"],
        applications: ["Power Farming", "Heavy Operations", "Field Preparation"],
        useCase: "Power farming with 13.6 tires and manual steering"
      },
      {
        id: 1075,
        model: "1075",
        variant: "14.9 MS 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹8.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP, 2700cc",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["50HP Power", "14.9 Tires", "Maximum Traction", "2700cc Engine"],
        applications: ["Heavy Terrain", "Power Operations", "Difficult Conditions"],
        useCase: "Power farming with 14.9 tires for maximum traction"
      },
      {
        id: 1078,
        model: "1078",
        variant: "PS RPTO 14.9 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹9.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP, 2700cc",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Power Steering", "RPTO", "14.9 Tires", "50HP Power"],
        applications: ["Comfortable Power Farming", "PTO Operations", "Professional Use"],
        useCase: "Power farming with power steering and PTO for professional operations"
      },
      {
        id: 1080,
        model: "1080",
        variant: "1076 + 7.50X16 FT 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹9.00L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP, 2700cc",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["7.50X16 Front Tires", "Enhanced Stability", "50HP Power"],
        applications: ["Stable Operations", "Specialized Farming", "Custom Applications"],
        useCase: "Power farming with special front tire configuration for stability"
      },
      {
        id: 1188,
        model: "1188",
        variant: "Base 1081, BSS 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹8.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP, 2700cc",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Base Specification"
        },
        keyFeatures: ["Base Specification", "BSS Features", "Cost Effective"],
        applications: ["Basic Power Farming", "Standard Operations", "Economic Use"],
        useCase: "Base specification power farming for cost-effective operations"
      }
    ]
  },
  {
    familyName: "MF 245 -50 HP / MF 245",
    familyId: "mf-245-50hp",
    baseModel: "MF 245 - 50 HP",
    description: "Versatile 50HP tractor series with reliable performance for diverse agricultural applications.",
    mainImage: mf245Di,
    category: "High Power",
    priceRange: "₹8.50L - ₹9.25L",
    seoDescription: "MF 245 50HP tractor series with reliable performance and versatile applications for diverse farming needs.",
    variants: [
      {
        id: 670,
        model: "670",
        variant: "2WD",
        hp: "50",
        image: mf245Di,
        priceRange: "₹8.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Standard"
        },
        keyFeatures: ["50HP Power", "Reliable Performance", "Standard Features"],
        applications: ["General Farming", "Field Operations", "Agricultural Services"],
        useCase: "General farming operations requiring reliable 50HP power"
      },
      {
        id: 762,
        model: "762",
        variant: "2WD",
        hp: "50",
        image: mf245Di,
        priceRange: "₹9.00L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Enhanced"
        },
        keyFeatures: ["50HP Power", "Enhanced Features", "Improved Performance"],
        applications: ["Enhanced Farming", "Professional Operations", "Agricultural Services"],
        useCase: "Enhanced farming operations with improved performance features"
      }
    ]
  },
  {
    familyName: "MF 245 PD- 50 HP / MF 245 PD",
    familyId: "mf-245-pd-50hp",
    baseModel: "MF 245 PD - 50 HP",
    description: "Power Drive 50HP tractor series with Eagle technology and advanced power steering features.",
    mainImage: mf245Di,
    category: "High Power",
    priceRange: "₹9.00L - ₹9.75L",
    seoDescription: "MF 245 PD 50HP Power Drive tractor with Eagle technology and advanced power steering for professional farming.",
    variants: [
      {
        id: 948,
        model: "948",
        variant: "Eagle PS 2WD",
        hp: "50",
        image: mf245Di,
        priceRange: "₹9.50L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Drive, Power Steering"
        },
        keyFeatures: ["Eagle Technology", "Power Drive", "Power Steering", "50HP Power"],
        applications: ["Professional Farming", "Power Operations", "Commercial Use"],
        useCase: "Professional farming with Eagle technology and power drive features"
      },
      {
        id: 1157,
        model: "1157",
        variant: "Eagle PS + Clevis Pin 2WD",
        hp: "50",
        image: mf245Di,
        priceRange: "₹9.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Drive, Power Steering"
        },
        keyFeatures: ["Eagle Technology", "Clevis Pin", "Power Steering", "Premium Features"],
        applications: ["Premium Farming", "Specialized Operations", "Professional Use"],
        useCase: "Premium farming with Eagle technology and specialized clevis pin feature"
      }
    ]
  },
  {
    familyName: "MF 5245 PD",
    familyId: "mf-5245-pd",
    baseModel: "MF 5245 PD",
    description: "High-performance 55HP Power Drive tractor with 4WD capability for intensive farming operations.",
    mainImage: mf5225,
    category: "High Power",
    priceRange: "₹10.50L - ₹11.25L",
    seoDescription: "MF 5245 PD 55HP Power Drive tractor with 4WD capability for high-performance intensive farming operations.",
    variants: [
      {
        id: 751,
        model: "751",
        variant: "4WD",
        hp: "55",
        image: mf5225,
        priceRange: "₹11.25L",
        officialSpecs: {
          engine: "4 Cylinder Diesel, 55HP",
          fuelTank: "80 Litres",
          liftingCapacity: "2200 kg",
          pto: "47 HP, 540/750 RPM",
          gearBox: "12 F + 4 R",
          driveType: "4WD",
          transmission: "Power Drive, Synchro Mesh"
        },
        keyFeatures: ["4WD Drive", "55HP Power", "Power Drive Technology", "Dual PTO"],
        applications: ["4WD Operations", "Heavy Farming", "Intensive Agriculture"],
        useCase: "High-performance 4WD farming requiring maximum power and traction"
      }
    ]
  },
  {
    familyName: "7250 Power Up",
    familyId: "7250-power-up",
    baseModel: "7250 Power Up",
    description: "Enhanced 50HP Power Up series with advanced features, multiple tire configurations and tandem pump technology.",
    mainImage: mf7250DiPowerUp,
    category: "High Power",
    priceRange: "₹8.75L - ₹9.75L",
    seoDescription: "7250 Power Up 50HP enhanced tractor with advanced features, multiple tire configurations and tandem pump technology.",
    variants: [
      {
        id: 858,
        model: "858",
        variant: "14.9 PS 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹9.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP, 2700cc",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["Power Up Technology", "14.9 Tires", "Power Steering", "50HP Power"],
        applications: ["Power Up Farming", "Enhanced Operations", "Professional Use"],
        useCase: "Power up farming with 14.9 tires and power steering comfort"
      },
      {
        id: 940,
        model: "940",
        variant: "858 + 7.50X16 FT 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹9.40L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP, 2700cc",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["7.50X16 Front Tires", "Enhanced Stability", "Power Steering"],
        applications: ["Stable Operations", "Specialized Farming", "Enhanced Performance"],
        useCase: "Power up farming with special front tires for enhanced stability"
      },
      {
        id: 914,
        model: "914",
        variant: "14.9 MS 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹8.95L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP, 2700cc",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Manual Steering"
        },
        keyFeatures: ["14.9 Tires", "Manual Steering", "Cost Effective"],
        applications: ["Power Farming", "Field Operations", "Economic Use"],
        useCase: "Cost-effective power farming with 14.9 tires and manual steering"
      },
      {
        id: 915,
        model: "915",
        variant: "13.6 PS 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹9.15L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP, 2700cc",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Power Steering"
        },
        keyFeatures: ["13.6 Tires", "Power Steering", "Comfortable Operation"],
        applications: ["Comfortable Farming", "Field Operations", "Professional Use"],
        useCase: "Comfortable power farming with 13.6 tires and power steering"
      },
      {
        id: 917,
        model: "917",
        variant: "Tandem pump 2WD",
        hp: "50",
        image: mf7250DiPowerUp,
        priceRange: "₹9.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP, 2700cc",
          fuelTank: "70 Litres",
          liftingCapacity: "2000 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Tandem Pump System"
        },
        keyFeatures: ["Tandem Pump", "2000kg Lift Capacity", "Enhanced Hydraulics"],
        applications: ["Heavy Lifting", "Hydraulic Operations", "Professional Farming"],
        useCase: "Professional farming requiring tandem pump hydraulic system"
      }
    ]
  },
  {
    familyName: "MF 9500E",
    familyId: "mf-9500e",
    baseModel: "MF 9500E",
    description: "Enhanced 58HP tractor series with multiple tire configurations for versatile high-power farming operations.",
    mainImage: mf9500PS,
    category: "High Power",
    priceRange: "₹10.50L - ₹11.25L",
    seoDescription: "MF 9500E 58HP enhanced tractor with 14.9 and 16.9 tire configurations for high-power farming operations.",
    variants: [
      {
        id: 980,
        model: "980",
        variant: "14.9 2WD",
        hp: "58",
        image: mf9500PS,
        priceRange: "₹10.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 58HP",
          fuelTank: "75 Litres",
          liftingCapacity: "2000 kg",
          pto: "50 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Enhanced"
        },
        keyFeatures: ["58HP Power", "14.9 Tires", "Enhanced Performance"],
        applications: ["High Power Farming", "Heavy Operations", "Field Preparation"],
        useCase: "High-power farming with 14.9 tires for enhanced performance"
      },
      {
        id: 981,
        model: "981",
        variant: "16.9 2WD",
        hp: "58",
        image: mf9500PS,
        priceRange: "₹11.00L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 58HP",
          fuelTank: "75 Litres",
          liftingCapacity: "2000 kg",
          pto: "50 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Enhanced"
        },
        keyFeatures: ["58HP Power", "16.9 Tires", "Maximum Traction"],
        applications: ["Heavy Terrain", "Maximum Power Operations", "Difficult Conditions"],
        useCase: "Maximum power farming with 16.9 tires for extreme traction"
      }
    ]
  },
  {
    familyName: "MF 254 Dyna",
    familyId: "mf-254-dyna",
    baseModel: "MF 254 Dyna",
    description: "Advanced 50HP Dynatrack tractor with Smart technology, multiple tire configurations and 4WD capability.",
    mainImage: mf241DynatrackLoader,
    category: "High Power",
    priceRange: "₹9.25L - ₹10.75L",
    seoDescription: "MF 254 Dyna 50HP Dynatrack tractor with Smart technology, multiple tire configurations and 4WD capability.",
    variants: [
      {
        id: 847,
        model: "847",
        variant: "2wd",
        hp: "50",
        image: mf241DynatrackLoader,
        priceRange: "₹9.50L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "12 F + 12 R",
          driveType: "2WD",
          transmission: "Dynatrack"
        },
        keyFeatures: ["Dynatrack Technology", "50HP Power", "12x12 Gearbox"],
        applications: ["Advanced Farming", "Field Operations", "Professional Use"],
        useCase: "Advanced farming with Dynatrack technology and 12x12 transmission"
      },
      {
        id: 1232,
        model: "1232",
        variant: "7.5FT 2wd",
        hp: "50",
        image: mf241DynatrackLoader,
        priceRange: "₹9.65L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "12 F + 12 R",
          driveType: "2WD",
          transmission: "Dynatrack"
        },
        keyFeatures: ["7.5FT Tires", "Dynatrack Technology", "Enhanced Traction"],
        applications: ["Enhanced Traction", "Field Work", "Specialized Operations"],
        useCase: "Specialized farming with 7.5FT tires for enhanced traction"
      },
      {
        id: 1211,
        model: "1211",
        variant: "7.5FT 2wd",
        hp: "50",
        image: mf241DynatrackLoader,
        priceRange: "₹9.70L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "12 F + 12 R",
          driveType: "2WD",
          transmission: "Dynatrack"
        },
        keyFeatures: ["7.5FT Tires", "Advanced Features", "Enhanced Performance"],
        applications: ["Enhanced Performance", "Specialized Farming", "Professional Operations"],
        useCase: "Professional farming with advanced 7.5FT tire configuration"
      },
      {
        id: 1120,
        model: "1120",
        variant: "2wd, Smart",
        hp: "50",
        image: mf241DynatrackLoader,
        priceRange: "₹9.85L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "12 F + 12 R",
          driveType: "2WD",
          transmission: "Smart Technology"
        },
        keyFeatures: ["Smart Technology", "Dynatrack", "Advanced Features"],
        applications: ["Smart Farming", "Precision Agriculture", "Modern Operations"],
        useCase: "Smart farming with Dynatrack technology and advanced features"
      },
      {
        id: 1058,
        model: "1058",
        variant: "4WD",
        hp: "50",
        image: mf241DynatrackLoader,
        priceRange: "₹10.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "12 F + 12 R",
          driveType: "4WD",
          transmission: "Dynatrack"
        },
        keyFeatures: ["4WD Drive", "Dynatrack Technology", "Maximum Traction"],
        applications: ["4WD Operations", "Heavy Terrain", "Professional Farming"],
        useCase: "4WD Dynatrack farming for maximum traction and challenging terrain"
      },
      {
        id: 1141,
        model: "1141/1239",
        variant: "4wd",
        hp: "50",
        image: mf241DynatrackLoader,
        priceRange: "₹10.50L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP",
          fuelTank: "70 Litres",
          liftingCapacity: "1800 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "12 F + 12 R",
          driveType: "4WD",
          transmission: "Dynatrack"
        },
        keyFeatures: ["4WD Drive", "Enhanced Dynatrack", "Premium Features"],
        applications: ["Premium 4WD Operations", "Heavy Duty Work", "Professional Farming"],
        useCase: "Premium 4WD Dynatrack farming with enhanced features"
      }
    ]
  },
  {
    familyName: "MF 8055 Magnatrak",
    familyId: "mf-8055-magnatrak",
    baseModel: "MF 8055 Magnatrak",
    description: "Premium 50HP Magnatrak series with advanced styling, superior ergonomics and maximum productivity for heavy-duty applications.",
    mainImage: heroTractor,
    category: "Premium",
    priceRange: "₹10.75L - ₹11.75L",
    seoDescription: "MF 8055 Magnatrak 50HP premium tractor with advanced styling, superior ergonomics and maximum productivity.",
    variants: [
      {
        id: 1094,
        model: "1094",
        variant: "14.9 2WD",
        hp: "50",
        image: heroTractor,
        priceRange: "₹11.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP",
          fuelTank: "75 Litres",
          liftingCapacity: "2000 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Comfimesh (Fully Constant Mesh)"
        },
        keyFeatures: ["Magnatrak Technology", "14.9 Tires", "Premium Styling", "Constant Mesh"],
        applications: ["Premium Farming", "Heavy-duty Operations", "Professional Use"],
        useCase: "Premium heavy-duty farming with Magnatrak technology and 14.9 tires"
      },
      {
        id: 1190,
        model: "1190",
        variant: "16.9 2WD",
        hp: "50",
        image: heroTractor,
        priceRange: "₹11.50L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 50HP",
          fuelTank: "75 Litres",
          liftingCapacity: "2000 kg",
          pto: "42 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Comfimesh (Fully Constant Mesh)"
        },
        keyFeatures: ["Magnatrak Technology", "16.9 Tires", "Maximum Traction", "Premium Build"],
        applications: ["Maximum Traction", "Heavy Terrain", "Premium Operations"],
        useCase: "Premium Magnatrak farming with 16.9 tires for maximum traction"
      }
    ]
  },
  {
    familyName: "MF 9563",
    familyId: "mf-9563",
    baseModel: "MF 9563",
    description: "High-performance 63HP Smart tractor with advanced transmission options including 8X8 Super Shuttle and 12X4 configurations.",
    mainImage: mf9563,
    category: "High Power",
    priceRange: "₹11.50L - ₹13.50L",
    seoDescription: "MF 9563 63HP Smart tractor with advanced transmission options including 8X8 Super Shuttle, 12X4 and 4WD variants.",
    variants: [
      {
        id: 1208,
        model: "1208",
        variant: "2WD 8X8 SUPER SUTTLE",
        hp: "63",
        image: mf9563,
        priceRange: "₹12.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 63HP",
          fuelTank: "80 Litres",
          liftingCapacity: "2200 kg",
          pto: "54 HP, 540 RPM",
          gearBox: "8 F + 8 R",
          driveType: "2WD",
          transmission: "Super Shuttle"
        },
        keyFeatures: ["63HP Power", "8X8 Super Shuttle", "Smart Technology"],
        applications: ["High Performance", "Advanced Farming", "Professional Operations"],
        useCase: "High-performance farming with 8X8 Super Shuttle transmission"
      },
      {
        id: 1207,
        model: "1207",
        variant: "2WD 12X4",
        hp: "63",
        image: mf9563,
        priceRange: "₹12.00L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 63HP",
          fuelTank: "80 Litres",
          liftingCapacity: "2200 kg",
          pto: "54 HP, 540 RPM",
          gearBox: "12 F + 4 R",
          driveType: "2WD",
          transmission: "Smart Technology"
        },
        keyFeatures: ["63HP Power", "12X4 Gearbox", "Smart Features"],
        applications: ["Versatile Farming", "Field Operations", "Multi-purpose Use"],
        useCase: "Versatile farming with 12X4 transmission and smart technology"
      },
      {
        id: 1210,
        model: "1210",
        variant: "2WD 12X4 IPTO",
        hp: "63",
        image: mf9563,
        priceRange: "₹12.50L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 63HP",
          fuelTank: "80 Litres",
          liftingCapacity: "2200 kg",
          pto: "54 HP, 540 RPM, IPTO",
          gearBox: "12 F + 4 R",
          driveType: "2WD",
          transmission: "Smart Technology"
        },
        keyFeatures: ["IPTO (Independent PTO)", "12X4 Gearbox", "Smart Technology"],
        applications: ["PTO Operations", "Continuous Work", "Professional Farming"],
        useCase: "Professional farming with independent PTO and 12X4 transmission"
      },
      {
        id: 1209,
        model: "1209",
        variant: "4WD 12X4",
        hp: "63",
        image: mf9563,
        priceRange: "₹13.00L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 63HP",
          fuelTank: "80 Litres",
          liftingCapacity: "2200 kg",
          pto: "54 HP, 540 RPM",
          gearBox: "12 F + 4 R",
          driveType: "4WD",
          transmission: "Smart Technology"
        },
        keyFeatures: ["4WD Drive", "12X4 Gearbox", "Smart Technology"],
        applications: ["4WD Operations", "Heavy Terrain", "Professional Farming"],
        useCase: "4WD farming with 12X4 transmission and smart technology"
      },
      {
        id: 1229,
        model: "1229",
        variant: "4WD 12X4 IPTO",
        hp: "63",
        image: mf9563,
        priceRange: "₹13.25L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 63HP",
          fuelTank: "80 Litres",
          liftingCapacity: "2200 kg",
          pto: "54 HP, 540 RPM, IPTO",
          gearBox: "12 F + 4 R",
          driveType: "4WD",
          transmission: "Smart Technology"
        },
        keyFeatures: ["4WD Drive", "IPTO", "12X4 Gearbox", "Smart Technology"],
        applications: ["4WD PTO Operations", "Continuous Heavy Work", "Premium Farming"],
        useCase: "Premium 4WD farming with independent PTO and advanced transmission"
      },
      {
        id: 1230,
        model: "1230",
        variant: "4WD SUPER SUTTLE",
        hp: "63",
        image: mf9563,
        priceRange: "₹13.50L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 63HP",
          fuelTank: "80 Litres",
          liftingCapacity: "2200 kg",
          pto: "54 HP, 540 RPM",
          gearBox: "8 F + 8 R",
          driveType: "4WD",
          transmission: "Super Shuttle"
        },
        keyFeatures: ["4WD Drive", "Super Shuttle", "63HP Power", "Premium Features"],
        applications: ["Premium 4WD Operations", "Super Shuttle Efficiency", "Professional Farming"],
        useCase: "Premium 4WD farming with Super Shuttle transmission for maximum efficiency"
      }
    ]
  },
  {
    familyName: "MF 9500",
    familyId: "mf-9500",
    baseModel: "MF 9500",
    description: "Reliable 58HP Smart tractor series with advanced features for diverse agricultural applications and superior performance.",
    mainImage: mf9500Smart,
    category: "High Power",
    priceRange: "₹10.75L - ₹11.75L",
    seoDescription: "MF 9500 58HP Smart tractor with advanced features, 2WD and 4WD variants for reliable high-power farming operations.",
    variants: [
      {
        id: 1194,
        model: "1194",
        variant: "9500 2WD SMART",
        hp: "58",
        image: mf9500Smart,
        priceRange: "₹11.00L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 58HP",
          fuelTank: "75 Litres",
          liftingCapacity: "2000 kg",
          pto: "50 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "2WD",
          transmission: "Smart Technology"
        },
        keyFeatures: ["58HP Power", "Smart Technology", "Advanced Features", "Fuel Efficient"],
        applications: ["Smart Farming", "Field Operations", "Agricultural Services"],
        useCase: "Smart farming operations with 58HP power and advanced technology"
      },
      {
        id: 1195,
        model: "1195",
        variant: "9500 4WD SMART",
        hp: "58",
        image: mf9500Smart,
        priceRange: "₹11.75L",
        officialSpecs: {
          engine: "3 Cylinder Diesel, 58HP",
          fuelTank: "75 Litres",
          liftingCapacity: "2000 kg",
          pto: "50 HP, 540 RPM",
          gearBox: "8 F + 2 R",
          driveType: "4WD",
          transmission: "Smart Technology"
        },
        keyFeatures: ["4WD Drive", "58HP Power", "Smart Technology", "Maximum Traction"],
        applications: ["4WD Smart Farming", "Heavy Terrain", "Professional Operations"],
        useCase: "4WD smart farming with maximum traction and advanced technology features"
      }
    ]
  }
];

// Utility functions
export function getTractorByModel(modelId: string): TractorVariant | undefined {
  for (const family of tractorFamilies) {
    const variant = family.variants.find(v => v.model === modelId);
    if (variant) return variant;
  }
  return undefined;
}

export function filterTractorsByHP(minHP?: number, maxHP?: number): TractorFamily[] {
  return tractorFamilies.filter(family => {
    return family.variants.some(variant => {
      const hp = parseInt(variant.hp);
      if (minHP && hp < minHP) return false;
      if (maxHP && hp > maxHP) return false;
      return true;
    });
  });
}

export function filterTractorsByDriveType(driveType: "2WD" | "4WD"): TractorFamily[] {
  return tractorFamilies.filter(family => {
    return family.variants.some(variant => variant.officialSpecs.driveType === driveType);
  });
}

// Implements database
export const implementsDatabase = [
  {
    id: 1,
    name: "Rotary Tiller",
    category: "Tillage",
    description: "Heavy-duty rotary tiller for soil preparation",
    image: "/assets/rotary-tiller.jpg",
    applications: ["Soil Preparation", "Seedbed Preparation", "Weed Control"],
    compatibleTractors: ["25-45 HP"],
    price: "₹85,000 - ₹1,25,000"
  },
  {
    id: 2,
    name: "Disc Harrow",
    category: "Tillage",
    description: "Multi-disc harrow for field preparation",
    image: "/assets/disc-harrow.jpg",
    applications: ["Primary Tillage", "Stubble Management", "Field Preparation"],
    compatibleTractors: ["30-60 HP"],
    price: "₹1,10,000 - ₹1,75,000"
  },
  {
    id: 3,
    name: "Cultivator",
    category: "Tillage",
    description: "Spring loaded cultivator for secondary tillage",
    image: "/assets/cultivator.jpg",
    applications: ["Secondary Tillage", "Inter-cultivation", "Weed Control"],
    compatibleTractors: ["25-50 HP"],
    price: "₹65,000 - ₹95,000"
  },
  {
    id: 4,
    name: "Super Seeder",
    category: "Seeding",
    description: "Direct seeding equipment for zero tillage",
    image: "/assets/super-seeder.jpg",
    applications: ["Direct Seeding", "Zero Tillage", "Wheat Sowing"],
    compatibleTractors: ["45-65 HP"],
    price: "₹2,25,000 - ₹2,85,000"
  },
  {
    id: 5,
    name: "Potato Planter",
    category: "Seeding",
    description: "Automatic potato planting machine",
    image: "/assets/potato-planter.jpg",
    applications: ["Potato Planting", "Tuber Planting", "Row Planting"],
    compatibleTractors: ["35-55 HP"],
    price: "₹1,85,000 - ₹2,45,000"
  },
  {
    id: 6,
    name: "Thresher",
    category: "Harvesting",
    description: "Multi-crop threshing machine",
    image: "/assets/thresher.jpg",
    applications: ["Grain Threshing", "Crop Processing", "Seed Separation"],
    compatibleTractors: ["25-45 HP"],
    price: "₹1,45,000 - ₹1,95,000"
  },
  {
    id: 7,
    name: "Hydraulic Trailer",
    category: "Transport",
    description: "Heavy-duty hydraulic tipping trailer",
    image: "/assets/hydraulic-trailer.jpg",
    applications: ["Material Transport", "Grain Transport", "Construction Material"],
    compatibleTractors: ["35-65 HP"],
    price: "₹2,85,000 - ₹3,65,000"
  }
];