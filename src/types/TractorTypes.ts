import { TractorSpecs } from "@/data/tractorDatabase";

export interface TractorVariant {
  id: number;
  model: string;
  variant: string;
  hp: string;
  image: string;
  officialSpecs: TractorSpecs;
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

export interface VariantOption {
  type: 'drive' | 'series' | 'power' | 'special';
  label: string;
  options: string[];
}