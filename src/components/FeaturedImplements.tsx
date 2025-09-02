import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Eye, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { implementDatabase } from "@/data/tractorDatabase";

const FeaturedImplements = () => {
  const navigate = useNavigate();
  
  // Get the first 3 implements for featured section
  const featuredImplements = implementDatabase.slice(0, 3);

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agricultural Implements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete your farming setup with our range of high-quality implements 
            designed to work perfectly with Massey Ferguson tractors.
          </p>
        </div>

        {/* Implements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredImplements.map((implement) => (
            <Card key={implement.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <img 
                  src={implement.image} 
                  alt={implement.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {implement.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {implement.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{implement.category}</p>
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
                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {implement.description}
                  </p>

                  {/* Key Features */}
                  {implement.specifications && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Specifications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {implement.specifications.slice(0, 3).map((spec, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

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
                      onClick={() => window.open('https://wa.me/917895327351?text=' + encodeURIComponent(`I'm interested in ${implement.name}. Please share more details and pricing.`), '_blank')}
                    >
                      <MessageCircle className="mr-1 h-3 w-3" />
                      WhatsApp Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8" onClick={() => navigate('/implements')}>
            View All Implements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedImplements;