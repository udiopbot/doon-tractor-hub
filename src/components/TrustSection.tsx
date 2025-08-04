import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, MapPin, Clock, Wrench } from "lucide-react";

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: "Official Authorized Dealer",
      description: "Certified Massey Ferguson dealer with genuine parts & warranty"
    },
    {
      icon: Award,
      title: "25+ Years Experience",
      description: "Serving farmers in Uttarakhand with dedication since 1995"
    },
    {
      icon: Users,
      title: "5000+ Happy Customers",
      description: "Trusted by farmers across the region for quality service"
    },
    {
      icon: MapPin,
      title: "Local Presence",
      description: "Located in the heart of Uttarakhand with easy accessibility"
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Fast delivery, installation & 24/7 emergency support"
    },
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Factory-trained mechanics for professional service & repairs"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Doon Motors & Tractors?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are committed to providing the best tractors and agricultural equipment to farmers 
            in Uttarakhand with unmatched service quality and genuine Massey Ferguson products.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Massey Ferguson Logo Section */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Proud Partner of Massey Ferguson
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            As an official dealer, we ensure you get genuine Massey Ferguson products 
            with full manufacturer warranty and authentic parts support.
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
            <span>✓ Genuine Parts</span>
            <span>✓ Factory Warranty</span>
            <span>✓ Authorized Service</span>
            <span>✓ Technical Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;