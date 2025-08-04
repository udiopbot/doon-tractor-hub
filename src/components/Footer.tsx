import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="bg-trust text-trust-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Doon Motors & Tractors</h3>
            <p className="text-sm text-trust-foreground/80 leading-relaxed">
              Your trusted Massey Ferguson dealer in Uttarakhand, serving farmers 
              with quality tractors and equipment for over 25 years.
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <span className="text-sm font-medium">Official MF Dealer</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/tractors" className="hover:text-accent transition-colors">Our Tractors</a></li>
              <li><a href="/implements" className="hover:text-accent transition-colors">Implements</a></li>
              <li><a href="/about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                <span>Doon Motors nd Tractors Shimala by pass road, Via, Telpur, chowk, Harbhaj Wala, Uttarakhand 248008</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 78953 27351, +91 97194 42991,
+91 98975 33499</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>doonmotors.tractortafe@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-0.5 text-accent" />
                <div>
                  <div>Mon-Sat: 10:00 AM - 5:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>

            <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
              WhatsApp Us Now
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-trust-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-trust-foreground/60">© 2025 Doon Motors & Tractors. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0 text-sm">
            <span className="text-trust-foreground/60">Powered by</span>
            <span className="font-medium text-accent">Massey Ferguson</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;