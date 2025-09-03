import { TractorData } from "@/data/tractorDatabase";
import { TractorFamily, TractorVariant } from "@/types/TractorTypes";

export const groupTractorsByFamily = (tractors: TractorData[]): TractorFamily[] => {
  const familyMap = new Map<string, TractorData[]>();
  
  // Group tractors by family
  tractors.forEach(tractor => {
    // Extract family name (e.g., "MF 1035" from "Massey Ferguson 1035 DI")
    let familyKey = '';
    
    if (tractor.model.includes('1035')) {
      familyKey = 'MF 1035';
    } else if (tractor.model.includes('245')) {
      familyKey = 'MF 245';
    } else if (tractor.model.includes('241')) {
      familyKey = 'MF 241';
    } else if (tractor.model.includes('MF 30')) {
      familyKey = 'MF 30';
    } else if (tractor.model.includes('6026') || tractor.model.includes('6028')) {
      familyKey = 'MF MaxPro';
    } else if (tractor.model.includes('7250')) {
      familyKey = 'MF 7250';
    } else if (tractor.model.includes('7235')) {
      familyKey = 'MF 7235';
    } else if (tractor.model.includes('9500')) {
      familyKey = 'MF 9500';
    } else if (tractor.model.includes('5118')) {
      familyKey = 'MF 5118';
    } else if (tractor.model.includes('5225')) {
      familyKey = 'MF 5225';
    } else if (tractor.model.includes('5245')) {
      familyKey = 'MF 5245';
    } else if (tractor.model.includes('9563')) {
      familyKey = 'MF 9563';
    } else if (tractor.model.includes('Udaan')) {
      familyKey = 'MF Udaan';
    } else if (tractor.model.includes('DynaTrack')) {
      familyKey = 'DynaTrack';
    } else {
      // Fallback: use the series name
      familyKey = tractor.series.split(' ')[0] + ' ' + tractor.series.split(' ')[1] || tractor.model.split(' ').slice(0, 2).join(' ');
    }
    
    if (!familyMap.has(familyKey)) {
      familyMap.set(familyKey, []);
    }
    familyMap.get(familyKey)!.push(tractor);
  });

  // Convert to TractorFamily format
  const families: TractorFamily[] = [];
  
  familyMap.forEach((tractors, familyName) => {
    // Find the most popular or first tractor as the main one
    const mainTractor = tractors.find(t => t.popular) || tractors[0];
    
    const variants: TractorVariant[] = tractors.map(tractor => ({
      id: tractor.id,
      model: tractor.model,
      variant: extractVariantName(tractor.model, familyName),
      hp: tractor.hp,
      image: tractor.image,
      officialSpecs: tractor.officialSpecs,
      keyFeatures: tractor.keyFeatures,
      applications: tractor.applications,
      useCase: tractor.useCase,
      popular: tractor.popular
    }));

    families.push({
      familyName,
      familyId: familyName.toLowerCase().replace(/\s+/g, '-'),
      baseModel: mainTractor.model,
      description: generateFamilyDescription(familyName, variants),
      mainImage: mainTractor.image,
      variants,
      category: mainTractor.category,
      priceRange: mainTractor.priceRange,
      seoDescription: `${familyName} Series - ${variants.length} variants available. ${mainTractor.seoDescription}`
    });
  });

  return families.sort((a, b) => {
    // Sort by popularity (families with popular variants first), then alphabetically
    const aPopular = a.variants.some(v => v.popular);
    const bPopular = b.variants.some(v => v.popular);
    
    if (aPopular && !bPopular) return -1;
    if (!aPopular && bPopular) return 1;
    return a.familyName.localeCompare(b.familyName);
  });
};

const extractVariantName = (model: string, familyName: string): string => {
  // Remove family name and "Massey Ferguson" to get variant
  let variant = model.replace('Massey Ferguson', '').replace(familyName, '').trim();
  
  if (!variant) {
    // Extract from series or model specifics
    if (model.includes('4WD')) variant = '4WD';
    else if (model.includes('2WD')) variant = '2WD';
    else if (model.includes('PowerUp')) variant = 'PowerUp';
    else if (model.includes('Smart')) variant = 'Smart';
    else if (model.includes('Orchard')) variant = 'Orchard Plus';
    else if (model.includes('Loader')) variant = 'Loader';
    else if (model.includes('LFT')) variant = 'LFT';
    else if (model.includes('Super Plus')) variant = 'Super Plus';
    else if (model.includes('Dost')) variant = 'Dost';
    else if (model.includes('Enhanced')) variant = 'Enhanced';
    else if (model.includes('MaxPro')) variant = 'MaxPro';
    else variant = 'Standard';
  }
  
  return variant;
};

const generateFamilyDescription = (familyName: string, variants: TractorVariant[]): string => {
  const hpRange = variants.map(v => parseInt(v.hp)).sort((a, b) => a - b);
  const minHp = hpRange[0];
  const maxHp = hpRange[hpRange.length - 1];
  
  const hpText = minHp === maxHp ? `${minHp} HP` : `${minHp}-${maxHp} HP`;
  
  return `${familyName} series offers ${variants.length} variants ranging from ${hpText}. Perfect for ${variants[0]?.useCase || 'various farming applications'}.`;
};

export const getVariantOptions = (variants: TractorVariant[]) => {
  const driveOptions = new Set<string>();
  const seriesOptions = new Set<string>();
  const powerOptions = new Set<string>();
  
  variants.forEach(variant => {
    if (variant.variant.includes('4WD')) driveOptions.add('4WD');
    else if (variant.variant.includes('2WD')) driveOptions.add('2WD');
    
    if (variant.variant.includes('PowerUp')) powerOptions.add('PowerUp');
    if (variant.variant.includes('Smart')) powerOptions.add('Smart');
    if (variant.variant.includes('Enhanced')) powerOptions.add('Enhanced');
    if (variant.variant.includes('Super Plus')) powerOptions.add('Super Plus');
    if (variant.variant.includes('Orchard')) seriesOptions.add('Orchard');
    if (variant.variant.includes('Loader')) seriesOptions.add('Loader');
    if (variant.variant.includes('MaxPro')) seriesOptions.add('MaxPro');
  });
  
  const options = [];
  
  if (driveOptions.size > 1) {
    options.push({
      type: 'drive' as const,
      label: 'Drive Type',
      options: Array.from(driveOptions)
    });
  }
  
  if (seriesOptions.size > 0) {
    options.push({
      type: 'series' as const,
      label: 'Series',
      options: Array.from(seriesOptions)
    });
  }
  
  if (powerOptions.size > 0) {
    options.push({
      type: 'power' as const,
      label: 'Power Options',
      options: Array.from(powerOptions)
    });
  }
  
  return options;
};