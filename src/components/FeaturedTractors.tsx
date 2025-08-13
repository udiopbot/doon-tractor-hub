import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Download, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturedTractors = () => {
  const navigate = useNavigate();
  const tractors = [
    {
      id: 1,
      series: "MF 7250 DI",
      hp: "75 HP",
      category: "Power Pro Series",
      features: ["4WD Available", "Power Steering", "Dual Clutch"],
      priceRange: "₹12-15 Lakhs",
      image: "/placeholder.svg",
      popular: true
    },
    {
      id: 2,
      series: "MF 9500",
      hp: "50 HP",
      category: "Arjun Series",
      features: ["Fuel Efficient", "Easy Maintenance", "Multi-Speed PTO"],
      priceRange: "₹8-10 Lakhs",
      image: "/placeholder.svg",
      popular: false
    },
    {
      id: 3,
      series: "MF 1035 DI",
      hp: "42 HP",
      category: "Yuva Series",
      features: ["Compact Design", "Ideal for Small Farms", "Cost Effective"],
      priceRange: "₹6-8 Lakhs",
      image: "/placeholder.svg",
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Massey Ferguson Tractors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of genuine Massey Ferguson tractors, 
            perfect for Indian farming conditions and built to last.
          </p>
        </div>

        {/* Tractor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {tractors.map((tractor) => (
            <Card key={tractor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {tractor.popular && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                  Most Popular Choice
                </div>
              )}
              
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <img 
                  src={tractor.image} 
                  alt={tractor.series}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {tractor.hp}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {tractor.series}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{tractor.category}</p>
                  </div>
                  <div className="text-right">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-xs"
                      onClick={() => window.open('tel:+917895327351')}
                    >
                      Contact for Price
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tractor.features.map((feature, index) => (
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
                      onClick={() => {
                        const encodedModel = encodeURIComponent(tractor.series.toLowerCase().replace(/\s+/g, '-'));
                        navigate(`/tractors/${encodedModel}`);
                      }}
                    >
                      <Eye className="mr-1 h-3 w-3" />
                      View Details
                    </Button>
                  </div>
                  
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="w-full text-xs"
                    onClick={() => window.open('mailto:doonmotors.tractortafe@gmail.com?subject=Brochure Request for ' + tractor.series)}
                  >
                    <Download className="mr-1 h-3 w-3" />
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8" onClick={() => navigate('/tractors')}>
            View All Tractors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTractors;