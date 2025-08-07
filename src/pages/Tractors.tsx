import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Search, Filter, MapPin, Star, Fuel, Settings, Wrench, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Tractors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHP, setSelectedHP] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const tractors = [
    {
      id: 1,
      model: "MF 1035 DI Mahashakti",
      series: "Mahashakti Series",
      hp: "40 HP",
      transmission: "8F + 2R",
      priceRange: "₹6.04 - 6.72 Lakhs",
      image: "/placeholder.svg",
      features: ["Fuel Efficient", "Easy Maintenance", "Multi-Speed PTO", "Power Steering"],
      useCase: "Multi-crop farming, Small to medium farms",
      applications: ["Rice Fields", "Wheat Fields", "Vegetable Farming"],
      specifications: {
        engine: "3-Cylinder, Water Cooled",
        displacement: "2500 cc",
        fuelTank: "55 Litres",
        hydraulics: "Open Center",
        pto: "540 RPM"
      },
      seoDescription: "MF 1035 DI Mahashakti - Best 40 HP tractor in Uttarakhand. Fuel-efficient Massey Ferguson tractor perfect for small to medium farms. Contact Doon Motors for best price.",
      popular: true
    },
    {
      id: 2,
      model: "MF 245 DI - 46 HP",
      series: "245 Series",
      hp: "46 HP",
      transmission: "8F + 2R Synchromesh",
      priceRange: "₹7.50 - 8.20 Lakhs",
      image: "/placeholder.svg",
      features: ["Advanced Hydraulics", "Comfortable Cabin", "4WD Available", "Heavy Duty Axle"],
      useCase: "Medium farming operations, Heavy implements",
      applications: ["Cotton Fields", "Sugarcane", "Heavy Haulage"],
      specifications: {
        engine: "3-Cylinder, Turbocharged",
        displacement: "2900 cc",
        fuelTank: "65 Litres",
        hydraulics: "Position & Draft Control",
        pto: "540/1000 RPM"
      },
      seoDescription: "MF 245 DI 46 HP - Powerful Massey Ferguson tractor for heavy farming. Best cotton and sugarcane tractor in Dehradun. Contact for best deals.",
      popular: false
    },
    {
      id: 3,
      model: "MF 245 DI - 50 HP",
      series: "245 Series",
      hp: "50 HP",
      transmission: "12F + 3R Powershuttle",
      priceRange: "₹8.20 - 9.00 Lakhs",
      image: "/placeholder.svg",
      features: ["Powershuttle Transmission", "Climate Control", "Advanced PTO", "Premium Comfort"],
      useCase: "Large scale farming, Commercial operations",
      applications: ["Large Fields", "Commercial Farming", "Multiple Implements"],
      specifications: {
        engine: "4-Cylinder, Turbocharged",
        displacement: "3300 cc",
        fuelTank: "70 Litres",
        hydraulics: "Load Sensing",
        pto: "540/1000 RPM"
      },
      seoDescription: "MF 245 DI 50 HP - Premium Massey Ferguson tractor for commercial farming. Best 4WD tractor under 60 HP in India. Available at Doon Motors Uttarakhand.",
      popular: true
    },
    {
      id: 4,
      model: "MF 241 DI Maha Shakti",
      series: "Maha Shakti Series",
      hp: "42 HP",
      transmission: "8F + 2R Sliding Mesh",
      priceRange: "₹6.80 - 7.50 Lakhs",
      image: "/placeholder.svg",
      features: ["Mobile Charger", "Adjustable Seat", "Long Working Hours", "Cost Effective"],
      useCase: "Small farms, Orchard farming",
      applications: ["Orchards", "Vegetable Farming", "Small Fields"],
      specifications: {
        engine: "3-Cylinder, Direct Injection",
        displacement: "2500 cc",
        fuelTank: "55 Litres",
        hydraulics: "Open Center",
        pto: "540 RPM"
      },
      seoDescription: "MF 241 DI Maha Shakti - Best orchard tractor in India. Compact Massey Ferguson tractor ideal for small farms and orchards. Contact Doon Motors for price.",
      popular: false
    },
    {
      id: 5,
      model: "MaxPro 6028",
      series: "MaxPro Series",
      hp: "60 HP",
      transmission: "12F + 4R Synchromesh",
      priceRange: "₹9.50 - 10.50 Lakhs",
      image: "/placeholder.svg",
      features: ["High Ground Clearance", "Heavy Duty", "Multiple PTO Options", "Superior Build Quality"],
      useCase: "Heavy duty farming, Construction work",
      applications: ["Rice Fields", "Construction", "Heavy Implements"],
      specifications: {
        engine: "4-Cylinder, Turbocharged",
        displacement: "3800 cc",
        fuelTank: "80 Litres",
        hydraulics: "Dual Acting",
        pto: "540/1000 RPM"
      },
      seoDescription: "MaxPro 6028 - Heavy duty 60 HP tractor perfect for rice fields and construction. Best Massey Ferguson tractor for heavy work in Uttarakhand.",
      popular: false
    },
    {
      id: 6,
      model: "DynaTrack Smart",
      series: "DynaTrack Series",
      hp: "55 HP",
      transmission: "16F + 8R Powershuttle",
      priceRange: "₹10.00 - 11.00 Lakhs",
      image: "/placeholder.svg",
      features: ["Smart Technology", "GPS Ready", "Precision Farming", "Advanced Dashboard"],
      useCase: "Precision farming, Tech-enabled agriculture",
      applications: ["Precision Farming", "Large Estates", "Modern Agriculture"],
      specifications: {
        engine: "4-Cylinder, Common Rail",
        displacement: "3600 cc",
        fuelTank: "75 Litres",
        hydraulics: "Electronic Control",
        pto: "540/1000 RPM"
      },
      seoDescription: "DynaTrack Smart - Advanced precision farming tractor with smart technology. Best GPS-ready tractor in India. Available at Doon Motors Uttarakhand.",
      popular: true
    }
  ];

  const filteredTractors = tractors.filter(tractor => {
    const matchesSearch = tractor.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tractor.series.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesHP = selectedHP === "" || tractor.hp.includes(selectedHP);
    const matchesSeries = selectedCategory === "" || tractor.series.includes(selectedCategory);
    return matchesSearch && matchesHP && matchesSeries;
  });

  const handleCall = () => {
    window.open('tel:+917895327351');
  };

  const handleWhatsApp = (tractor: any) => {
    const message = `Hi, I'm interested in ${tractor.model} (${tractor.hp}). Please share more details and pricing.`;
    window.open(`https://wa.me/917895327351?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmail = (tractor: any) => {
    const subject = `Enquiry for ${tractor.model}`;
    const body = `Hi,\n\nI am interested in ${tractor.model} (${tractor.hp}).\n\nPlease share:\n- Best price\n- EMI options\n- Delivery timeline\n- Available offers\n\nThank you`;
    window.open(`mailto:doonmotors.tractortafe@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Massey Ferguson Tractors in Uttarakhand | Doon Motors & Tractors</title>
      <meta name="description" content="Authorized Massey Ferguson & DynaTrack dealer in Uttarakhand. Best prices on MF 1035 DI, 245 DI, MaxPro tractors. 15+ years experience. Contact +91 78953 27351" />
      <meta name="keywords" content="Massey Ferguson tractors Uttarakhand, TAFE tractors Dehradun, MF 1035 price, 245 DI tractor, DynaTrack Smart, best tractor dealer Uttarakhand" />
      <meta property="og:title" content="Best Massey Ferguson Tractors in Uttarakhand | Doon Motors" />
      <meta property="og:description" content="Authorized dealer for Massey Ferguson & DynaTrack tractors. Expert service, best prices, 15+ years experience in Uttarakhand." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://doonmotors.lovable.app/tractors" />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Massey Ferguson Tractors
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                  Authorized dealer for Massey Ferguson & DynaTrack tractors in Uttarakhand. 
                  Best prices, expert service, and 15+ years of experience serving Indian farmers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" onClick={handleCall} className="w-full sm:w-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: +91 78953 27351
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => window.open('https://wa.me/917895327351', '_blank')} className="w-full sm:w-auto">
                    Get Quote on WhatsApp
                  </Button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Farmers</div>
                </div>
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Service Support</div>
                </div>
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">Tractor Models</div>
                </div>
              </div>
            </div>
          </section>

          {/* Filters Section */}
          <section className="py-8 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tractors (e.g., MF 1035, 245 DI)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedHP} onValueChange={setSelectedHP}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Select HP Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All HP</SelectItem>
                    <SelectItem value="40">40 HP</SelectItem>
                    <SelectItem value="42">42 HP</SelectItem>
                    <SelectItem value="46">46 HP</SelectItem>
                    <SelectItem value="50">50 HP</SelectItem>
                    <SelectItem value="55">55 HP</SelectItem>
                    <SelectItem value="60">60 HP</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Select Series" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Series</SelectItem>
                    <SelectItem value="Mahashakti">Mahashakti</SelectItem>
                    <SelectItem value="245">245 Series</SelectItem>
                    <SelectItem value="MaxPro">MaxPro</SelectItem>
                    <SelectItem value="DynaTrack">DynaTrack</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Tractors Grid */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTractors.map((tractor) => (
                  <Card key={tractor.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2">
                    {tractor.popular && (
                      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center py-2 text-sm font-medium">
                        <Star className="inline mr-1 h-4 w-4" />
                        Most Popular Choice
                      </div>
                    )}
                    
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                      <img 
                        src={tractor.image} 
                        alt={`${tractor.model} - Best ${tractor.hp} tractor in Uttarakhand`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-accent text-accent-foreground font-bold">
                          {tractor.hp}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <Badge variant="secondary" className="text-xs">
                          {tractor.series}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-bold text-foreground">
                        {tractor.model}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{tractor.useCase}</p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Key Specifications */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center gap-1">
                          <Settings className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground">Transmission:</span>
                        </div>
                        <span className="font-medium">{tractor.transmission}</span>
                        <div className="flex items-center gap-1">
                          <Fuel className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground">Fuel Tank:</span>
                        </div>
                        <span className="font-medium">{tractor.specifications.fuelTank}</span>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {tractor.features.slice(0, 3).map((feature, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                          {tractor.features.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{tractor.features.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Applications */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Best For:</h4>
                        <div className="text-xs text-muted-foreground">
                          {tractor.applications.join(", ")}
                        </div>
                      </div>

                      {/* Contact for Price */}
                      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-3 text-center">
                        <p className="text-sm font-semibold text-foreground mb-1">Contact for Best Price</p>
                        <p className="text-xs text-muted-foreground">EMI options available</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <Button 
                          size="sm" 
                          className="text-xs"
                          onClick={handleCall}
                        >
                          <Phone className="mr-1 h-3 w-3" />
                          Call Now
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-xs"
                          onClick={() => handleWhatsApp(tractor)}
                        >
                          WhatsApp
                        </Button>
                      </div>
                      
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="w-full text-xs"
                        onClick={() => handleEmail(tractor)}
                      >
                        <Mail className="mr-1 h-3 w-3" />
                        Get Detailed Quote
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredTractors.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No tractors found matching your criteria. Please try different filters.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Choose Doon Motors for Massey Ferguson Tractors?
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="text-center p-6">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Authorized Dealer</h3>
                  <p className="text-sm text-muted-foreground">
                    Official Massey Ferguson & DynaTrack dealer with genuine parts and warranty
                  </p>
                </Card>
                
                <Card className="text-center p-6">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Expert Service</h3>
                  <p className="text-sm text-muted-foreground">
                    15+ years experience with trained technicians and 24/7 support
                  </p>
                </Card>
                
                <Card className="text-center p-6">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Local Presence</h3>
                  <p className="text-sm text-muted-foreground">
                    Located in Uttarakhand with deep understanding of local farming needs
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Location & Contact */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 md:p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Visit Our Showroom
                  </h2>
                  <p className="text-muted-foreground">
                    Experience the tractors firsthand at our authorized dealership
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-sm text-muted-foreground">
                          Doon Motors & Tractors<br />
                          Shimala Bypass Road, Via Telpur Chowk<br />
                          Harbhaj Wala, Uttarakhand 248008
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone Numbers</h3>
                        <p className="text-sm text-muted-foreground">
                          +91 78953 27351<br />
                          +91 97194 42991<br />
                          +91 98975 33499
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-sm text-muted-foreground">
                          doonmotors.tractortafe@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <Button size="lg" onClick={handleCall} className="w-full">
                      <Phone className="mr-2 h-5 w-5" />
                      Call for Tractor Demo
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => window.open('https://wa.me/917895327351', '_blank')} className="w-full">
                      Get Price Quote on WhatsApp
                    </Button>
                    <Button size="lg" variant="secondary" onClick={() => window.open('mailto:doonmotors.tractortafe@gmail.com', '_blank')} className="w-full">
                      <Mail className="mr-2 h-5 w-5" />
                      Email Enquiry
                    </Button>
                  </div>
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

export default Tractors;