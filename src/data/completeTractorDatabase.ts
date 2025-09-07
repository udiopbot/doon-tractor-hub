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