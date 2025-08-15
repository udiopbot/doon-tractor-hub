import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Award, Users, Truck, Wrench, Star, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const About = () => {
  const handleCall = () => {
    window.open('tel:+917895327351');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917895327351', '_blank');
  };

  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      number: "15+",
      label: "Years Experience",
      description: "Serving farmers across Uttarakhand"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      number: "5000+",
      label: "Happy Customers",
      description: "Satisfied farmers and dealers"
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      number: "500+",
      label: "Tractors Delivered",
      description: "Quality Massey Ferguson tractors"
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      number: "24/7",
      label: "Service Support",
      description: "Round the clock assistance"
    }
  ];

  const services = [
    {
      title: "Authorized Dealer",
      description: "Official Massey Ferguson dealer for Uttarakhand with genuine parts and warranty.",
      icon: <Star className="h-6 w-6 text-primary" />
    },
    {
      title: "Expert Consultation",
      description: "Professional advice on tractor selection based on your farming needs.",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "After-Sales Service",
      description: "Comprehensive maintenance and repair services with trained technicians.",
      icon: <Wrench className="h-6 w-6 text-primary" />
    },
    {
      title: "Quick Delivery",
      description: "Fast delivery across Uttarakhand with doorstep service available.",
      icon: <Truck className="h-6 w-6 text-primary" />
    },
    {
      title: "Financing Support",
      description: "Flexible financing options and loan assistance for easy tractor purchase.",
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support and emergency service availability.",
      icon: <Clock className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>About Doon Motors - Official Massey Ferguson Dealer Uttarakhand</title>
      <meta name="description" content="Doon Motors - Official Massey Ferguson dealer in Uttarakhand. 15+ years experience serving farmers with quality tractors, implements and service support." />
      <meta name="keywords" content="Doon Motors Uttarakhand, Massey Ferguson dealer, tractor dealer Dehradun, official MF dealer, tractor service center" />
      <meta property="og:title" content="About Doon Motors - Trusted Massey Ferguson Dealer in Uttarakhand" />
      <meta property="og:description" content="15+ years of experience serving farmers with quality Massey Ferguson tractors and implements across Uttarakhand." />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4" variant="outline">
                  Since 2008
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  About Doon Motors & Tractors
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Official Massey Ferguson dealer serving farmers across Uttarakhand with quality tractors, 
                  implements, and comprehensive support services for over 15 years.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={handleCall}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call: +91 78953 27351
                  </Button>
                  <Button size="lg" variant="outline" onClick={handleWhatsApp}>
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Our Story
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Building trust with farmers through quality products and service
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      Established in 2008, Doon Motors & Tractors has been the trusted partner for farmers 
                      across Uttarakhand. As an official Massey Ferguson dealer, we have consistently 
                      provided quality tractors, implements, and exceptional service support.
                    </p>
                    <p className="text-muted-foreground">
                      Our commitment goes beyond just selling tractors. We understand the unique challenges 
                      faced by farmers in the mountainous terrain of Uttarakhand and provide tailored 
                      solutions that enhance productivity and profitability.
                    </p>
                    <p className="text-muted-foreground">
                      With over 15 years of experience, we have built lasting relationships with our 
                      customers by delivering on our promises of quality, reliability, and comprehensive 
                      after-sales support.
                    </p>
                  </div>
                  
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold">Location</p>
                          <p className="text-sm text-muted-foreground">Uttarakhand, India</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold">Official Dealer</p>
                          <p className="text-sm text-muted-foreground">Authorized Massey Ferguson Partner</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold">Experience</p>
                          <p className="text-sm text-muted-foreground">15+ Years Serving Farmers</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Achievements
                </h2>
                <p className="text-lg text-muted-foreground">
                  Numbers that reflect our commitment to excellence
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      {achievement.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {achievement.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Services
                </h2>
                <p className="text-lg text-muted-foreground">
                  Comprehensive solutions for all your farming needs
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          {service.icon}
                        </div>
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
            <div className="container mx-auto px-4">
              <div className="text-center text-primary-foreground">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Partner with Us?
                </h2>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Experience the difference of working with Uttarakhand's trusted Massey Ferguson dealer. 
                  Contact us today for expert consultation and competitive pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={handleCall}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: +91 78953 27351
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    onClick={handleWhatsApp}
                  >
                    WhatsApp Chat
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default About;