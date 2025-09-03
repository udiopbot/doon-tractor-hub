import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Phone } from "lucide-react";
import { TractorFamily } from "@/types/TractorTypes";

interface TractorFamilyCardProps {
  family: TractorFamily;
  onViewDetails: (family: TractorFamily) => void;
}

const TractorFamilyCard = ({ family, onViewDetails }: TractorFamilyCardProps) => {
  const popularVariant = family.variants.find(v => v.popular) || family.variants[0];
  const hasPopular = family.variants.some(v => v.popular);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      {hasPopular && (
        <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
          Most Popular Family
        </div>
      )}
      
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <img 
          src={family.mainImage} 
          alt={family.familyName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-accent text-accent-foreground">
            {popularVariant.hp}
          </Badge>
        </div>
        <div className="absolute top-4 left-4">
          <Badge variant="secondary">
            {family.variants.length} Variants
          </Badge>
        </div>
      </div>

      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold text-foreground">
              {family.familyName}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{family.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* Variant Overview */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Available Variants:</h4>
            <div className="flex flex-wrap gap-1">
              {family.variants.slice(0, 3).map((variant, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {variant.variant}
                </Badge>
              ))}
              {family.variants.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{family.variants.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Key Features from main variant */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
            <div className="flex flex-wrap gap-1">
              {popularVariant.keyFeatures.slice(0, 2).map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Button 
              size="sm" 
              className="text-xs"
              onClick={() => window.open('tel:+917895327351')}
            >
              <Phone className="mr-1 h-3 w-3" />
              Call Us
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="text-xs"
              onClick={() => onViewDetails(family)}
            >
              <Eye className="mr-1 h-3 w-3" />
              View Variants
            </Button>
          </div>
          
          <Button 
            size="sm" 
            variant="secondary" 
            className="w-full text-xs"
            onClick={() => window.open('https://wa.me/917895327351?text=' + encodeURIComponent(`I'm interested in ${family.familyName} series. Please share details about available variants and pricing.`), '_blank')}
          >
            Get Quote on WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TractorFamilyCard;