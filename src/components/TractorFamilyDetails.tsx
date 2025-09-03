import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, ArrowLeft } from "lucide-react";
import { TractorFamily, TractorVariant } from "@/types/TractorTypes";
import { getVariantOptions } from "@/utils/tractorFamilyUtils";

interface TractorFamilyDetailsProps {
  family: TractorFamily;
  onBack: () => void;
}

const TractorFamilyDetails = ({ family, onBack }: TractorFamilyDetailsProps) => {
  const [selectedVariant, setSelectedVariant] = useState<TractorVariant>(
    family.variants.find(v => v.popular) || family.variants[0]
  );
  const [filters, setFilters] = useState<Record<string, string>>({});

  const variantOptions = getVariantOptions(family.variants);

  const handleVariantSelect = (variantId: string) => {
    const variant = family.variants.find(v => v.id.toString() === variantId);
    if (variant) {
      setSelectedVariant(variant);
    }
  };

  const filteredVariants = family.variants.filter(variant => {
    return Object.entries(filters).every(([filterType, filterValue]) => {
      if (!filterValue || filterValue === 'all') return true;
      return variant.variant.toLowerCase().includes(filterValue.toLowerCase());
    });
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Families
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">{family.familyName} Series</h1>
          <p className="text-muted-foreground">{family.description}</p>
        </div>
      </div>

      {/* Variant Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Variant</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={selectedVariant.id.toString()} onValueChange={handleVariantSelect}>
              <SelectTrigger>
                <SelectValue placeholder="Choose variant" />
              </SelectTrigger>
              <SelectContent className="bg-background border shadow-lg">
                {family.variants.map(variant => (
                  <SelectItem key={variant.id} value={variant.id.toString()}>
                    {variant.model} ({variant.hp})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Dynamic Filters */}
            {variantOptions.map(option => (
              <Select 
                key={option.type}
                value={filters[option.type] || "all"} 
                onValueChange={(value) => setFilters(prev => ({ ...prev, [option.type]: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder={`Filter by ${option.label}`} />
                </SelectTrigger>
                <SelectContent className="bg-background border shadow-lg">
                  <SelectItem value="all">All {option.label}</SelectItem>
                  {option.options.map(opt => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Selected Variant Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image and Basic Info */}
        <Card>
          <CardContent className="p-6">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden mb-4">
              <img 
                src={selectedVariant.image} 
                alt={selectedVariant.model}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{selectedVariant.model}</h3>
                <Badge className="bg-primary text-primary-foreground">
                  {selectedVariant.hp}
                </Badge>
              </div>
              <p className="text-muted-foreground">{selectedVariant.useCase}</p>
              {selectedVariant.popular && (
                <Badge variant="secondary">Most Popular</Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Specifications */}
        <Card>
          <CardHeader>
            <CardTitle>Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="engine" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="engine">Engine</TabsTrigger>
                <TabsTrigger value="transmission">Transmission</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
              </TabsList>
              
              <TabsContent value="engine" className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><span className="font-medium">Power:</span> {selectedVariant.officialSpecs.powerRange || 'N/A'}</div>
                  <div><span className="font-medium">Engine:</span> {selectedVariant.officialSpecs.engine || 'N/A'}</div>
                  <div><span className="font-medium">Cylinders:</span> {selectedVariant.officialSpecs.cylinders || 'N/A'}</div>
                  <div><span className="font-medium">CC:</span> {selectedVariant.officialSpecs.cubicCapacity || 'N/A'}</div>
                  <div><span className="font-medium">RPM:</span> {selectedVariant.officialSpecs.rpm || 'N/A'}</div>
                  <div><span className="font-medium">Fuel Tank:</span> {selectedVariant.officialSpecs.fuelTank || 'N/A'}</div>
                </div>
              </TabsContent>
              
              <TabsContent value="transmission" className="space-y-3">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div><span className="font-medium">Transmission:</span> {selectedVariant.officialSpecs.transmission || 'N/A'}</div>
                  <div><span className="font-medium">PTO:</span> {selectedVariant.officialSpecs.pto || 'N/A'}</div>
                  <div><span className="font-medium">Hydraulics:</span> {selectedVariant.officialSpecs.hydraulics || 'N/A'}</div>
                  <div><span className="font-medium">Brakes:</span> {selectedVariant.officialSpecs.brakes || 'N/A'}</div>
                  <div><span className="font-medium">Steering:</span> {selectedVariant.officialSpecs.steering || 'N/A'}</div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {selectedVariant.keyFeatures.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4">
                  <h4 className="font-medium text-sm mb-2">Best For:</h4>
                  <p className="text-sm text-muted-foreground">{selectedVariant.officialSpecs.bestFor || 'General farming applications'}</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Contact Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Interested in {selectedVariant.model}?</h3>
              <p className="text-muted-foreground">Contact us for pricing and availability</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => window.open('tel:+917895327351')}>
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://wa.me/917895327351?text=' + encodeURIComponent(`I'm interested in ${selectedVariant.model}. Please share more details and pricing.`), '_blank')}
              >
                WhatsApp Quote
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Other Variants in Family */}
      <Card>
        <CardHeader>
          <CardTitle>Other Variants in {family.familyName} Series</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {family.variants.filter(v => v.id !== selectedVariant.id).map(variant => (
              <Card 
                key={variant.id} 
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedVariant(variant)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={variant.image} 
                      alt={variant.model}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{variant.model}</h4>
                      <p className="text-xs text-muted-foreground">{variant.variant}</p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {variant.hp}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TractorFamilyDetails;
