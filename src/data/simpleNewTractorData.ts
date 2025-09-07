// Simplified New Tractor Database based on Master SHEET.xlsx structure
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
  };
  keyFeatures: string[];
  applications: string[];
  useCase: string;
  popular?: boolean;
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
    description: "Versatile mid-range tractor perfect for diverse farming operations with excellent fuel efficiency.",
    mainImage: mf5118_4WD,
    category: "Mid-Range",
    priceRange: "₹8.5L - ₹9.5L",
    seoDescription: "MF 5118 tractor series with 4WD and 2WD options. Best for medium-scale farming operations.",
    variants: [
      {
        id: 1,
        model: "812",
        variant: "4WD",
        hp: "51",
        image: mf5118_4WD,
        officialSpecs: {
          engine: "Simpson A4.248 - 4 Cylinder",
          fuelTank: "65 Litres",
          liftingCapacity: "1800 kg",
          pto: "540/750 RPM"
        },
        keyFeatures: ["4WD Drive", "Power Steering", "Advanced Hydraulics"],
        applications: ["Field Preparation", "Harvesting", "Transportation"],
        useCase: "Large farms requiring high traction and power",
        popular: true
      },
      {
        id: 2,
        model: "1082",
        variant: "5.25FT 2WD",
        hp: "51",
        image: mf5118_2WD,
        officialSpecs: {
          engine: "Simpson A4.248 - 4 Cylinder",
          fuelTank: "65 Litres",
          liftingCapacity: "1800 kg",
          pto: "540 RPM"
        },
        keyFeatures: ["2WD Drive", "Compact Design", "Easy Maintenance"],
        applications: ["Small Field Operations", "Orchard Work", "Light Cultivation"],
        useCase: "Small to medium farms with moderate power requirements"
      }
    ]
  },
  {
    familyName: "MF 5222",
    familyId: "mf-5222",
    baseModel: "MF 5222",
    description: "Reliable mid-range tractor with excellent performance for various agricultural applications.",
    mainImage: mf5225,
    category: "Mid-Range",
    priceRange: "₹9.2L - ₹10.2L",
    seoDescription: "MF 5222 tractor with MS 2WD configuration. Ideal for modern farming operations.",
    variants: [
      {
        id: 3,
        model: "1163",
        variant: "MS 2WD",
        hp: "55",
        image: mf5225,
        officialSpecs: {
          engine: "Simpson A4.248 - 4 Cylinder",
          fuelTank: "70 Litres",
          liftingCapacity: "2000 kg",
          pto: "540/750 RPM"
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
    description: "High-performance tractor series designed for professional farming with advanced features.",
    mainImage: mf6026MaxPro,
    category: "Premium",
    priceRange: "₹12.5L - ₹14.5L",
    seoDescription: "6026 Maxpro tractors with 4WD options. Premium choice for professional farming operations.",
    variants: [
      {
        id: 4,
        model: "1113",
        variant: "Wide Track 4WD",
        hp: "60",
        image: mf6026MaxPro,
        officialSpecs: {
          engine: "Perkins 1104D-44T - 4 Cylinder Turbo",
          fuelTank: "85 Litres",
          liftingCapacity: "2500 kg",
          pto: "540/750/1000 RPM"
        },
        keyFeatures: ["Wide Track", "4WD", "Turbo Engine", "Advanced Hydraulics"],
        applications: ["Large Scale Farming", "Heavy Implements", "Field Preparation"],
        useCase: "Large farms requiring maximum traction and stability",
        popular: true
      },
      {
        id: 5,
        model: "1112",
        variant: "Narrow Track 4WD",
        hp: "60",
        image: mf6026MaxPro,
        officialSpecs: {
          engine: "Perkins 1104D-44T - 4 Cylinder Turbo",
          fuelTank: "85 Litres",
          liftingCapacity: "2500 kg",
          pto: "540/750/1000 RPM"
        },
        keyFeatures: ["Narrow Track", "4WD", "Turbo Engine", "Compact Design"],
        applications: ["Row Crop", "Narrow Rows", "Precision Farming"],
        useCase: "Farms with narrow row spacing requirements"
      }
    ]
  },
  {
    familyName: "MF 1035 DOST",
    familyId: "mf-1035-dost",
    baseModel: "MF 1035",
    description: "Entry-level tractor series perfect for small farmers with essential features and affordability.",
    mainImage: mf1035DiDost,
    category: "Entry Level",
    priceRange: "₹6.5L - ₹7.5L",
    seoDescription: "MF 1035 DOST series tractors. Affordable and reliable choice for small-scale farming.",
    variants: [
      {
        id: 6,
        model: "939",
        variant: "Dry Disc 2WD",
        hp: "35",
        image: mf1035DiDost,
        officialSpecs: {
          engine: "Simpson 3 Cylinder",
          fuelTank: "45 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM"
        },
        keyFeatures: ["Dry Disc Brakes", "Economic Operation", "Easy Maintenance"],
        applications: ["Basic Farming", "Light Cultivation", "Small Operations"],
        useCase: "Small farmers looking for basic, reliable tractor",
        popular: true
      },
      {
        id: 7,
        model: "994",
        variant: "OIB 2WD",
        hp: "35",
        image: mf1035DiDost,
        officialSpecs: {
          engine: "Simpson 3 Cylinder",
          fuelTank: "45 Litres",
          liftingCapacity: "1200 kg",
          pto: "540 RPM"
        },
        keyFeatures: ["Oil Immersed Brakes", "Better Braking", "Durability"],
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
    image: mf241Pd,
    description: "Heavy-duty front loader for material handling and construction work."
  },
  {
    name: "MF 7235 Loader",
    category: "Loaders", 
    image: mf7235LFT,
    description: "Premium loader attachment for heavy lifting operations."
  },
  {
    name: "TAFE AgriStar Super Seeder",
    category: "Seeders",
    image: mf9500Smart,
    description: "Advanced seeding equipment for precision planting."
  },
  {
    name: "Hydraulic Trailers",
    category: "Trailers",
    image: mf9563,
    description: "Heavy-duty trailers for transportation and material handling."
  },
  {
    name: "Rotavators",
    category: "Cultivation",
    image: mf245Di,
    description: "Soil preparation equipment for efficient land cultivation."
  }
];