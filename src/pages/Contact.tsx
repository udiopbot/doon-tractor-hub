import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle, User, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleCall = () => {
    window.open('tel:+917895327351');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917895327351', '_blank');
  };

  const handleEmailSubmit = () => {
    const subject = `Contact Form: ${formData.subject || 'General Inquiry'}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.open(`mailto:doonmotors.tractortafe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: ["+91 78953 27351"],
      action: () => handleCall()
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: ["doonmotors.tractortafe@gmail.com"],
      action: () => window.open('mailto:doonmotors.tractortafe@gmail.com')
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      details: ["Uttarakhand, India", "Serving across the state"],
      action: null
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: By Appointment"],
      action: null
    }
  ];

  const services = [
    "New Tractor Sales",
    "Tractor Implements",
    "Service & Maintenance", 
    "Spare Parts",
    "Financing Assistance",
    "Technical Support"
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Contact Doon Motors - Massey Ferguson Dealer Uttarakhand | Call +91 78953 27351</title>
      <meta name="description" content="Contact Doon Motors for Massey Ferguson tractors in Uttarakhand. Call +91 78953 27351 or email doonmotors.tractortafe@gmail.com for expert consultation." />
      <meta name="keywords" content="contact Doon Motors, Massey Ferguson dealer Uttarakhand, tractor dealer contact, MF dealer phone number, tractor service Dehradun" />
      <meta property="og:title" content="Contact Doon Motors - Your Trusted Massey Ferguson Partner" />
      <meta property="og:description" content="Get in touch with Uttarakhand's leading Massey Ferguson dealer for tractors, implements and service support." />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4" variant="outline">
                  Get in Touch
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Contact Doon Motors
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Ready to boost your farming productivity? Contact Uttarakhand's trusted Massey Ferguson dealer 
                  for expert consultation, competitive pricing, and exceptional service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={handleCall}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call: +91 78953 27351
                  </Button>
                  <Button size="lg" variant="outline" onClick={handleWhatsApp}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Chat
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Info Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className={`text-center p-6 hover:shadow-lg transition-all duration-300 ${
                      info.action ? 'cursor-pointer hover:border-primary/50' : ''
                    }`}
                    onClick={info.action || undefined}
                  >
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form and Info */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Send className="h-5 w-5 text-primary" />
                      Send us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Name *</label>
                        <Input
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Phone *</label>
                        <Input
                          name="phone"
                          placeholder="Your phone number"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        name="email"
                        placeholder="Your email address"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <Input
                        name="subject"
                        placeholder="What can we help you with?"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message *</label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your requirements, preferred tractor model, or any questions you have..."
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={handleEmailSubmit}
                      disabled={!formData.name || !formData.phone || !formData.message}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      * Required fields. We typically respond within 2-4 hours during business hours.
                    </p>
                  </CardContent>
                </Card>

                {/* Services and Additional Info */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        How We Can Help You
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-3">
                        {services.map((service, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Contact Options</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button 
                        className="w-full" 
                        size="lg"
                        onClick={handleCall}
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now: +91 78953 27351
                      </Button>
                      
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700" 
                        size="lg"
                        onClick={handleWhatsApp}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp Chat
                      </Button>
                      
                      <Button 
                        className="w-full" 
                        variant="outline" 
                        size="lg"
                        onClick={() => window.open('mailto:doonmotors.tractortafe@gmail.com')}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Email Us Directly
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Why Choose Doon Motors?</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Official Massey Ferguson dealer</li>
                        <li>• 15+ years of experience</li>
                        <li>• Competitive pricing & financing</li>
                        <li>• Expert consultation & support</li>
                        <li>• Genuine parts & warranty</li>
                        <li>• Fast delivery across Uttarakhand</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Quick answers to common questions
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do you provide financing options?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, we offer flexible financing options and can assist with loan applications 
                      to make tractor purchase easy and affordable.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Is delivery available across Uttarakhand?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Absolutely! We provide doorstep delivery across Uttarakhand with our 
                      professional delivery team.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What warranty do you offer?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      All our Massey Ferguson tractors come with official manufacturer warranty 
                      and comprehensive after-sales support.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do you service other tractor brands?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      While we specialize in Massey Ferguson, we can provide general maintenance 
                      and repair services for most tractor brands.
                    </p>
                  </CardContent>
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

export default Contact;