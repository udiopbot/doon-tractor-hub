import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Tractors", href: "/tractors" },
    { label: "Implements", href: "/implements" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl font-bold text-primary">Doon Motors & Tractors</h1>
              <p className="text-xs text-muted-foreground">Official Massey Ferguson Dealer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="text-center">
                  <h2 className="text-lg font-bold text-primary">Doon Motors</h2>
                  <p className="text-sm text-muted-foreground">Official Massey Ferguson Dealer</p>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="space-y-3 pt-6 border-t">
                  <Button className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now: +91 98765 43210
                  </Button>
                  <Button className="w-full gap-2 bg-green-600 hover:bg-green-700">
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;