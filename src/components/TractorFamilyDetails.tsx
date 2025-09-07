import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, ArrowLeft } from "lucide-react";
import { TractorFamily, TractorVariant } from "@/data/simpleNewTractorData";

interface TractorFamilyDetailsProps {
  family: TractorFamily;
  onBack: () => void;
}

const TractorFamilyDetails = ({ family, onBack }: TractorFamilyDetailsProps) => {
  const [selectedVariant, setSelectedVariant] = useState<TractorVariant>(
    family.variants.find(v => v.popular) || family.variants[0]
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={onBack} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Families
        </Button>
        <Button onClick={() => window.open('tel:+917895327351')}>
          <Phone className="mr-2 h-4 w-4" />
          Call Now
        </Button>
      </div>

      {/* Family Header */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <img 
                src={family.mainImage} 
                alt={family.familyName}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <div>
                <CardTitle className="text-3xl font-bold text-foreground">
                  {family.familyName}
                </CardTitle>
                <p className="text-muted-foreground mt-2">{family.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary text-primary-foreground">
                  {family.category}
                </Badge>
                <Badge variant="outline">
                  {family.variants.length} Variants
                </Badge>
                <Badge variant="secondary">
                  {family.priceRange}
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Variant Selector */}
      <Card>
        <CardHeader>
          <CardTitle>Select Variant</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select 
              value={selectedVariant.id.toString()} 
              onValueChange={(value) => {
                const variant = family.variants.find(v => v.id.toString() === value);
                if (variant) setSelectedVariant(variant);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select variant" />
              </SelectTrigger>
              <SelectContent className="bg-background border shadow-lg">
                {family.variants.map((variant) => (
                  <SelectItem key={variant.id} value={variant.id.toString()}>
                    {variant.variant} - {variant.hp} HP (Model: {variant.model})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Selected Variant Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Variant Image and Basic Info */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <img 
                src={selectedVariant.image} 
                alt={selectedVariant.variant}
                className="w-full h-48 object-cover rounded-lg"
              />
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{selectedVariant.variant}</h3>
                <div className="flex gap-2">
                  <Badge className="bg-accent text-accent-foreground">
                    {selectedVariant.hp} HP
                  </Badge>
                  <Badge variant="outline">
                    Model: {selectedVariant.model}
                  </Badge>
                  {selectedVariant.popular && (
                    <Badge className="bg-primary text-primary-foreground">
                      Popular
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {selectedVariant.useCase}
                </p>
              </div>
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
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
              </TabsList>
              
              <TabsContent value="engine" className="space-y-3">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div><span className="font-medium">Power:</span> {selectedVariant.hp} HP</div>
                  <div><span className="font-medium">Engine:</span> {selectedVariant.officialSpecs.engine}</div>
                  <div><span className="font-medium">Fuel Tank:</span> {selectedVariant.officialSpecs.fuelTank}</div>
                  <div><span className="font-medium">PTO:</span> {selectedVariant.officialSpecs.pto}</div>
                  <div><span className="font-medium">Lifting Capacity:</span> {selectedVariant.officialSpecs.liftingCapacity}</div>
                </div>
              </TabsContent>
              
              <TabsContent value="details" className="space-y-3">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div><span className="font-medium">Variant:</span> {selectedVariant.variant}</div>
                  <div><span className="font-medium">Model Number:</span> {selectedVariant.model}</div>
                  <div><span className="font-medium">Use Case:</span> {selectedVariant.useCase}</div>
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
                  <h4 className="font-medium text-sm mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedVariant.applications.map((app, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Contact Actions */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button 
              className="w-full"
              onClick={() => window.open('tel:+917895327351')}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call for Price & Details
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open('https://wa.me/917895327351?text=' + encodeURIComponent(`I'm interested in ${selectedVariant.variant} (Model: ${selectedVariant.model}). Please share pricing and availability details.`), '_blank')}
            >
              Get Quote on WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TractorFamilyDetails;