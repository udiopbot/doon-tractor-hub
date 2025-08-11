import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Download, Phone, MessageCircle, Wrench, Fuel, Gauge, Settings } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { tractors } from "@/data/tractorDatabase";
import type { TractorData } from "@/data/tractorDatabase";

const TractorDetails = () => {
  const { model } = useParams<{ model: string }>();
  const navigate = useNavigate();
  const [tractor, setTractor] = useState<TractorData | null>(null);

  useEffect(() => {
    if (model) {
      const decodedModel = decodeURIComponent(model);
      const foundTractor = tractors.find(t => 
        t.model.toLowerCase().replace(/\s+/g, '-') === decodedModel.toLowerCase() ||
        t.model === decodedModel
      );
      setTractor(foundTractor || null);
    }
  }, [model]);

  if (!tractor) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Tractor Not Found</h1>
            <p className="text-muted-foreground mb-8">The tractor model you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/tractors')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Tractors
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in the ${tractor.model}. Can you provide more details about pricing and availability?`;
    window.open(`https://wa.me/917895327351?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleBrochureDownload = () => {
    const subject = `Brochure Request for ${tractor.model}`;
    window.open(
      `mailto:doonmotors.tractortafe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        "Hi, please share the official brochure for " + tractor.model
      )}`
    );
  };

    const TitleValue = ({ label, value }: { label: string; value?: string | number }) => {
      if (!value) return null;
    return (
      <div className="grid grid-cols-2 gap-2 text-sm py-2">
        <div className="text-muted-foreground font-medium">{label}</div>
        <div className="font-semibold text-foreground">{value}</div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/tractors')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Tractors
        </Button>

        {/* Tractor Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Tractor Image */}
          <div className="space-y-4">
            <div className="aspect-video bg-secondary/30 rounded-lg overflow-hidden">
              <img
                src={tractor.image || "/placeholder.svg"}
                alt={`${tractor.model} detailed view`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Tractor Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {tractor.model}
              </h1>
              {tractor.series && (
                <p className="text-lg text-muted-foreground mb-4">{tractor.series}</p>
              )}
              {tractor.hp && (
                <Badge className="text-base px-3 py-1">{tractor.hp}</Badge>
              )}
            </div>

            {tractor.useCase && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Best For</h3>
                <p className="text-muted-foreground">{tractor.useCase}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button onClick={handleWhatsApp} className="w-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </Button>
              <Button variant="outline" onClick={() => window.open('tel:+917895327351')} className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                Call Dealer
              </Button>
              <Button variant="secondary" onClick={handleBrochureDownload} className="w-full sm:col-span-2">
                <Download className="mr-2 h-4 w-4" />
                Request Brochure via Email
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Key Features */}
          {tractor.keyFeatures && tractor.keyFeatures.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wrench className="mr-2 h-5 w-5" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tractor.keyFeatures.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Applications */}
          {tractor.applications && tractor.applications.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-2 h-5 w-5" />
                  Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {tractor.applications.map((app, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground">
                      • {app}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Quick Specs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gauge className="mr-2 h-5 w-5" />
                Quick Specs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <TitleValue label="Power" value={tractor.officialSpecs?.powerRange || tractor.hp} />
              <TitleValue label="Transmission" value={tractor.officialSpecs?.transmissionType} />
              <TitleValue label="Cylinders" value={tractor.officialSpecs?.cylinders} />
              <TitleValue label="Max Speed" value={tractor.officialSpecs?.forwardSpeed} />
            </CardContent>
          </Card>
        </div>

        {/* Detailed Specifications */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Detailed Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Engine Specifications */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Fuel className="mr-2 h-5 w-5" />
                  Engine & Performance
                </h4>
                <div className="space-y-1">
                  <TitleValue label="Power Range" value={tractor.officialSpecs?.powerRange || tractor.hp} />
                  <TitleValue label="Engine" value={tractor.officialSpecs?.engine} />
                  <TitleValue label="Displacement" value={tractor.officialSpecs?.cubicCapacity} />
                  <TitleValue label="Cylinders" value={tractor.officialSpecs?.cylinders} />
                  <TitleValue label="Max Speed" value={tractor.officialSpecs?.forwardSpeed} />
                  <TitleValue label="Fuel Tank" value={tractor.officialSpecs?.fuelTankCapacity} />
                </div>
              </div>

              {/* Transmission & Features */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Settings className="mr-2 h-5 w-5" />
                  Transmission & Features
                </h4>
                <div className="space-y-1">
                  <TitleValue label="Transmission" value={tractor.officialSpecs?.transmissionType} />
                  <TitleValue label="Clutch Type" value={tractor.officialSpecs?.clutchType} />
                  <TitleValue label="PTO Speed" value={tractor.officialSpecs?.ptoSpeed} />
                  <TitleValue label="Hydraulic Capacity" value={tractor.officialSpecs?.hydraulicsLiftingCapacity} />
                  <TitleValue label="Steering" value={tractor.officialSpecs?.steeringType} />
                  <TitleValue label="Brakes" value={tractor.officialSpecs?.brakeType} />
                  <TitleValue label="Total Weight" value={tractor.officialSpecs?.totalWeight} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="mt-8 bg-primary/5">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Interested in this tractor?</h3>
              <p className="text-muted-foreground">
                Get the best price quote and financing options from our authorized dealers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={handleWhatsApp}>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Price Quote on WhatsApp
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.open('tel:+917895327351')}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91 78953 27351
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default TractorDetails;