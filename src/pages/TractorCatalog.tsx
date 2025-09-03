import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import TractorFamilyCard from "@/components/TractorFamilyCard";
import TractorFamilyDetails from "@/components/TractorFamilyDetails";
import SEOHead from "@/components/SEOHead";
import { allTractorData } from "@/data/tractorDatabase";
import { groupTractorsByFamily } from "@/utils/tractorFamilyUtils";
import { TractorFamily } from "@/types/TractorTypes";

const TractorCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedHpRange, setSelectedHpRange] = useState('all');
  const [viewMode, setViewMode] = useState<'families' | 'details'>('families');
  const [selectedFamily, setSelectedFamily] = useState<TractorFamily | null>(null);

  // Group tractors by families
  const tractorFamilies = useMemo(() => groupTractorsByFamily(allTractorData), []);

  // Filter families based on search and filters
  const filteredFamilies = useMemo(() => {
    return tractorFamilies.filter(family => {
      const matchesSearch = searchTerm === '' || 
        family.familyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        family.variants.some(v => v.model.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || family.category === selectedCategory;
      
      const matchesHp = selectedHpRange === 'all' || family.variants.some(variant => {
        const hp = parseInt(variant.hp);
        switch (selectedHpRange) {
          case '20-30': return hp >= 20 && hp <= 30;
          case '31-40': return hp >= 31 && hp <= 40;
          case '41-50': return hp >= 41 && hp <= 50;
          case '51+': return hp >= 51;
          default: return true;
        }
      });

      return matchesSearch && matchesCategory && matchesHp;
    });
  }, [tractorFamilies, searchTerm, selectedCategory, selectedHpRange]);

  const handleViewDetails = (family: TractorFamily) => {
    setSelectedFamily(family);
    setViewMode('details');
  };

  const handleBackToFamilies = () => {
    setViewMode('families');
    setSelectedFamily(null);
  };

  // Get unique categories and HP ranges
  const categories = [...new Set(tractorFamilies.map(f => f.category))];
  const hpRanges = ['20-30', '31-40', '41-50', '51+'];

  if (viewMode === 'details' && selectedFamily) {
    return (
      <>
        <SEOHead 
          title={`${selectedFamily.familyName} Series - Massey Ferguson Tractors | Doon Motors`}
          description={selectedFamily.seoDescription}
          keywords={`${selectedFamily.familyName}, Massey Ferguson, tractor variants, specifications, Doon Motors`}
        />
        <div className="min-h-screen bg-background">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <TractorFamilyDetails 
              family={selectedFamily} 
              onBack={handleBackToFamilies}
            />
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead 
        title="Massey Ferguson Tractor Families - Complete Catalog | Doon Motors"
        description="Browse our complete catalog of Massey Ferguson tractor families. Compare variants, specifications, and find the perfect tractor for your farming needs."
        keywords="Massey Ferguson tractors, tractor families, tractor variants, MF 1035, MF 241, MF 245, Doon Motors"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Massey Ferguson Tractor Families
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive catalog of Massey Ferguson tractor families. 
              Each family offers multiple variants to suit different farming needs and budgets.
            </p>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          {/* Filters Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Find Your Perfect Tractor Family
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tractor families..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border shadow-lg">
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedHpRange} onValueChange={setSelectedHpRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Power Ranges" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border shadow-lg">
                    <SelectItem value="all">All Power Ranges</SelectItem>
                    {hpRanges.map(range => (
                      <SelectItem key={range} value={range}>{range} HP</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="text-sm text-muted-foreground flex items-center">
                  Showing {filteredFamilies.length} of {tractorFamilies.length} families
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tractor Families Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFamilies.map((family) => (
              <TractorFamilyCard
                key={family.familyId}
                family={family}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {filteredFamilies.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                No tractor families found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search terms
              </p>
            </div>
          )}

          {/* Why Choose Us Section */}
          <section className="mt-16 py-12 bg-secondary/20 rounded-lg">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-foreground mb-8">
                Why Choose Doon Motors?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">15+</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Years Experience</h3>
                  <p className="text-muted-foreground">Trusted Massey Ferguson dealer with extensive expertise</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">✓</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Genuine Parts</h3>
                  <p className="text-muted-foreground">100% original Massey Ferguson tractors and parts</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">24/7</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Support</h3>
                  <p className="text-muted-foreground">Round-the-clock customer support and service</p>
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

export default TractorCatalog;