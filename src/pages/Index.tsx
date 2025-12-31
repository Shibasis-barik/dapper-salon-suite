// pages/index.jsx (or wherever your Index component is)
/* ... your existing imports ... */
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "@/components/LoginPage"; // adjust path if you put it elsewhere
import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StaffSection from "@/components/StaffSection";
import BookingSection from "@/components/BookingSection";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scissors className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gradient-gold">Gents Elite</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <Link to="/team" className="text-foreground hover:text-primary transition-colors">Our Team</Link>
              <a href="#booking" className="text-foreground hover:text-primary transition-colors">Book Now</a>

              {/* open modal on click */}
              <Button variant="hero" size="xl" onClick={() => setLoginOpen(true)}>
                Log-in
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Staff Section */}
      <StaffSection />

      {/* Booking Section */}
      <BookingSection />

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        {/* ... your existing footer content ... */}
      </footer>
    </div>
  );
};

export default Index;
