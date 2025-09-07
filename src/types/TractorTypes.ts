// Update types to match new database structure
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
  keyFeatures: string[];
  applications: string[];
}

export interface TractorFamily {
  familyName: string;
  familyId: string;
  description: string;
  category: string;
  mainImage: string;
  models: TractorModel[];
  hpRange: string;
}

export interface VariantOption {
  type: 'drive' | 'series' | 'power' | 'special';
  label: string;
  options: string[];
}