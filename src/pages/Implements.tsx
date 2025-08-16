import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Search, Wrench, Tractor, Wheat, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Import implement images
import loaderImage from "@/assets/mf-loader.jpg";
import seederImage from "@/assets/super-seeder.jpg";
import tillerImage from "@/assets/rotary-tiller.jpg";
import harrowImage from "@/assets/disc-harrow.jpg";
import trailerImage from "@/assets/hydraulic-trailer.jpg";
import cultivatorImage from "@/assets/cultivator.jpg";
import thresherImage from "@/assets/thresher.jpg";
import planterImage from "@/assets/potato-planter.jpg";

const Implements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCompatibility, setSelectedCompatibility] = useState("");

  const equipmentList = [
    {
      id: 1,
      name: "MF 241 DynaTrack Loader",
      category: "Loaders",
      compatibility: "40-50 HP Tractors",
      image: loaderImage,
      features: ["Hydraulic Control", "High Lifting Capacity", "Easy Attachment", "Durable Build"],
      applications: ["Material Handling", "Construction Work", "Farm Loading"],
      specifications: {
        liftingCapacity: "800 kg",
        maxHeight: "3.2 meters",
        bucketCapacity: "0.5 cubic meters",
        weight: "450 kg"
      },
      priceRange: "Contact for Price",
      description: "Heavy-duty front-end loader perfect for material handling and construction work on farms.",
      popular: true
    },
    {
      id: 2,
      name: "Super Seeder",
      category: "Seeders",
      compatibility: "45-65 HP Tractors",
      image: seederImage,
      features: ["Zero Tillage", "Seed & Fertilizer", "Adjustable Depth", "Multiple Crop Support"],
      applications: ["Direct Seeding", "Zero Tillage Farming", "Wheat Seeding"],
      specifications: {
        workingWidth: "2.5 meters",
        seedRate: "Variable",
        furrowOpeners: "25 nos",
        weight: "680 kg"
      },
      priceRange: "Contact for Price",
      description: "Advanced seeder for zero-tillage farming, perfect for wheat and other crop direct seeding.",
      popular: true
    },
    {
      id: 3,
      name: "Rotary Tiller",
      category: "Tillers",
      compatibility: "35-55 HP Tractors",
      image: tillerImage,
      features: ["Heavy Duty Gearbox", "Adjustable Depth", "Side Drive", "Replaceable Blades"],
      applications: ["Land Preparation", "Seedbed Preparation", "Stubble Management"],
      specifications: {
        workingWidth: "1.8 meters",
        noOfBlades: "48 nos",
        gearboxType: "Side Drive",
        weight: "420 kg"
      },
      priceRange: "Contact for Price",
      description: "Robust rotary tiller for effective land preparation and seedbed preparation.",
      popular: false
    },
    {
      id: 4,
      name: "Disc Harrow",
      category: "Harrows",
      compatibility: "50-75 HP Tractors",
      image: harrowImage,
      features: ["Heat Treated Discs", "Heavy Frame", "Grease Nipples", "Adjustable Angle"],
      applications: ["Primary Tillage", "Stubble Breaking", "Soil Mixing"],
      specifications: {
        workingWidth: "2.4 meters",
        noOfDiscs: "24 nos",
        discSize: "22 inch",
        weight: "850 kg"
      },
      priceRange: "Contact for Price",
      description: "Heavy-duty disc harrow for primary tillage and effective stubble management.",
      popular: false
    },
    {
      id: 5,
      name: "Hydraulic Trailer",
      category: "Trailers",
      compatibility: "40-80 HP Tractors",
      image: trailerImage,
      features: ["Hydraulic Tipping", "High Load Capacity", "Steel Body", "Four Wheel Design"],
      applications: ["Cargo Transport", "Farm Produce", "Construction Material"],
      specifications: {
        loadCapacity: "5 Tonnes",
        bodyDimensions: "3.0 x 1.8 x 0.6 meters",
        tyreSize: "7.50-16",
        weight: "1200 kg"
      },
      priceRange: "Contact for Price",
      description: "Hydraulic tipping trailer with high load capacity for efficient farm transportation.",
      popular: true
    },
    {
      id: 6,
      name: "Cultivator",
      category: "Cultivators",
      compatibility: "35-60 HP Tractors",
      image: cultivatorImage,
      features: ["Spring Loaded Tines", "Adjustable Depth", "Compact Design", "Easy Maintenance"],
      applications: ["Secondary Tillage", "Weed Control", "Soil Aeration"],
      specifications: {
        workingWidth: "2.1 meters",
        noOfTines: "11 nos",
        workingDepth: "15-25 cm",
        weight: "380 kg"
      },
      priceRange: "Contact for Price",
      description: "Efficient cultivator for secondary tillage operations and effective weed control.",
      popular: false
    },
    {
      id: 7,
      name: "Thresher",
      category: "Threshers",
      compatibility: "45-65 HP Tractors",
      image: thresherImage,
      features: ["High Capacity", "Clean Output", "Low Grain Damage", "Easy Operation"],
      applications: ["Wheat Threshing", "Rice Threshing", "Grain Separation"],
      specifications: {
        capacity: "15-20 quintals/hour",
        powerRequirement: "50-60 HP",
        cleaningSystem: "Double Fan",
        weight: "1800 kg"
      },
      priceRange: "Contact for Price",
      description: "High-capacity thresher for efficient grain separation with minimal damage.",
      popular: true
    },
    {
      id: 8,
      name: "Potato Planter",
      category: "Planters",
      compatibility: "40-55 HP Tractors",
      image: planterImage,
      features: ["Precise Spacing", "Fertilizer Unit", "Ridger Attachment", "Adjustable Depth"],
      applications: ["Potato Planting", "Ridge Formation", "Fertilizer Application"],
      specifications: {
        noOfRows: "2 rows",
        rowSpacing: "60 cm",
        plantToPlant: "15-30 cm",
        weight: "650 kg"
      },
      priceRange: "Contact for Price",
      description: "Precision potato planter with fertilizer unit for efficient potato cultivation.",
      popular: false
    }
  ];

  const filteredImplements = equipmentList.filter(implement => {
    const matchesSearch = implement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         implement.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === "all" || implement.category === selectedCategory;
    const matchesCompatibility = !selectedCompatibility || selectedCompatibility === "all" || 
                                implement.compatibility.includes(selectedCompatibility);
    return matchesSearch && matchesCategory && matchesCompatibility;
  });

  const handleCall = () => {
    window.open('tel:+917895327351');
  };

  const handleWhatsApp = (implement: any) => {
    const message = `Hi, I'm interested in ${implement.name}. Please share more details and pricing.`;
    window.open(`https://wa.me/917895327351?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmail = (implement: any) => {
    const subject = `Enquiry for ${implement.name}`;
    const body = `Hi,\n\nI am interested in ${implement.name}.\n\nPlease share:\n- Best price\n- Compatibility with my tractor\n- Delivery timeline\n- Available offers\n\nThank you`;
    window.open(`mailto:doonmotors.tractortafe@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Tractor Implements & Attachments | Doon Motors Uttarakhand</title>
      <meta name="description" content="Complete range of tractor implements - loaders, seeders, tillers, harrows at Doon Motors. Compatible with Massey Ferguson tractors. Best prices in Uttarakhand." />
      <meta name="keywords" content="tractor implements Uttarakhand, MF 241 loader, super seeder, rotary tiller, disc harrow, potato planter, tractor attachments Dehradun" />
      <meta property="og:title" content="Best Tractor Implements & Attachments in Uttarakhand | Doon Motors" />
      <meta property="og:description" content="Wide range of quality tractor implements compatible with Massey Ferguson tractors. Expert advice and best prices." />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Tractor Implements & Attachments
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                  Complete range of high-quality implements and attachments compatible with 
                  Massey Ferguson tractors. Enhance your farming efficiency with the right tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" onClick={handleCall} className="w-full sm:w-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: +91 78953 27351
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => window.open('https://wa.me/917895327351', '_blank')} className="w-full sm:w-auto">
                    <Wrench className="mr-2 h-5 w-5" />
                    Get Implement Quote
                  </Button>
                </div>
              </div>

              {/* Categories Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4">
                  <Tractor className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">Implement Types</div>
                </div>
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4">
                  <Wrench className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">MF Compatible</div>
                </div>
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4">
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4">
                  <Wheat className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
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
                    placeholder="Search implements (e.g., loader, seeder, tiller)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent className="z-50 bg-popover">
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Loaders">Loaders</SelectItem>
                    <SelectItem value="Seeders">Seeders</SelectItem>
                    <SelectItem value="Tillers">Tillers</SelectItem>
                    <SelectItem value="Harrows">Harrows</SelectItem>
                    <SelectItem value="Trailers">Trailers</SelectItem>
                    <SelectItem value="Cultivators">Cultivators</SelectItem>
                    <SelectItem value="Threshers">Threshers</SelectItem>
                    <SelectItem value="Planters">Planters</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedCompatibility} onValueChange={setSelectedCompatibility}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="HP Range" />
                  </SelectTrigger>
                  <SelectContent className="z-50 bg-popover">
                    <SelectItem value="all">All HP</SelectItem>
                    <SelectItem value="35">35-45 HP</SelectItem>
                    <SelectItem value="40">40-50 HP</SelectItem>
                    <SelectItem value="45">45-55 HP</SelectItem>
                    <SelectItem value="50">50-65 HP</SelectItem>
                    <SelectItem value="60">60-75 HP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Implements Grid */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredImplements.map((implement) => (
                  <Card key={implement.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    {implement.popular && (
                      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center py-2 text-sm font-medium">
                        <Star className="inline mr-1 h-4 w-4" />
                        Popular Choice
                      </div>
                    )}
                    
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                      <img 
                        src={implement.image} 
                        alt={`${implement.name} - ${implement.category} for tractors`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-accent text-accent-foreground">
                          {implement.category}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-bold text-foreground">
                        {implement.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{implement.description}</p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Compatibility */}
                      <div className="bg-primary/10 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Tractor className="h-4 w-4 text-primary" />
                          <span className="text-sm font-semibold">Compatible with:</span>
                        </div>
                        <span className="text-sm">{implement.compatibility}</span>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {implement.features.slice(0, 3).map((feature, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                          {implement.features.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{implement.features.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Applications */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Applications:</h4>
                        <div className="text-xs text-muted-foreground">
                          {implement.applications.join(", ")}
                        </div>
                      </div>

                      {/* Key Specifications */}
                      <div className="grid grid-cols-2 gap-2 text-xs bg-secondary/20 rounded-lg p-2">
                        {Object.entries(implement.specifications).slice(0, 2).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}:
                            </div>
                            <div className="font-medium">{value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Price Range */}
                      <div className="bg-gradient-to-r from-primary/10 to-primary/20 rounded-lg p-3 text-center">
                        <p className="text-sm font-semibold text-primary mb-1">
                          Contact for Best Price
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Call us for competitive pricing and special offers
                        </p>
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
                          onClick={() => handleWhatsApp(implement)}
                        >
                          WhatsApp
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredImplements.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No implements found matching your criteria. Please try different filters.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Choose Our Implements?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Quality implements that enhance your tractor's performance and farming efficiency
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center p-6">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Perfect Compatibility</h3>
                  <p className="text-sm text-muted-foreground">
                    All implements tested and compatible with Massey Ferguson tractors
                  </p>
                </Card>
                
                <Card className="text-center p-6">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Quality Assured</h3>
                  <p className="text-sm text-muted-foreground">
                    High-quality materials and construction for long-lasting performance
                  </p>
                </Card>
                
                <Card className="text-center p-6">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional guidance on selection, installation, and maintenance
                  </p>
                </Card>
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

export default Implements;