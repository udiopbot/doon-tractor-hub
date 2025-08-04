import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Award, Users, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-tractor.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-2xl">
          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              Official Massey Ferguson Dealer
            </Badge>
            <Badge variant="secondary">
              Serving Uttarakhand Since 1995
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Find Your Ideal
            <span className="text-accent block">Massey Ferguson</span>
            Tractor
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
            Trusted by farmers across Uttarakhand for over 25 years. 
            Get the best deals, genuine parts, and expert service for your farming needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-12">
            <Button 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-primary hover:bg-primary/90 shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Quote Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-green-600 border-green-600 text-white hover:bg-green-700 hover:border-green-700"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 text-white">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              <span className="text-sm">Authorized Dealer</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              <span className="text-sm">5000+ Happy Farmers</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-accent" />
              <span className="text-sm">Expert Service Center</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="absolute bottom-0 right-0 left-0">
        <div className="container mx-auto px-4 pb-4 sm:pb-8">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 sm:gap-4 max-w-3xl ml-auto">
            <Card className="bg-white/10 backdrop-blur border-white/20 p-2 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-white">25+</div>
              <div className="text-xs sm:text-sm text-gray-200">Years</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-2 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-white">50+</div>
              <div className="text-xs sm:text-sm text-gray-200">Models</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-2 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-white">24/7</div>
              <div className="text-xs sm:text-sm text-gray-200">Support</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;