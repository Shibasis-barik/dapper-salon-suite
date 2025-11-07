import { useState } from "react";
import { Calendar, Clock, Star, Scissors, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StaffSection from "@/components/StaffSection";
import BookingSection from "@/components/BookingSection";
import StatsSection from "@/components/StatsSection";

const Index = () => {
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
              <a href="#team" className="text-foreground hover:text-primary transition-colors">Our Team</a>
              <a href="#booking" className="text-foreground hover:text-primary transition-colors">Book Now</a>
              <Button variant="premium" size="lg">
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </nav>

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
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scissors className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-gradient-gold">Gents Elite</span>
              </div>
              <p className="text-muted-foreground">Premium grooming experience for the modern gentleman</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#team" className="hover:text-primary transition-colors">Our Team</a></li>
                <li><a href="#booking" className="hover:text-primary transition-colors">Book Now</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Hours</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Mon - Fri: 9AM - 8PM</li>
                <li>Saturday: 9AM - 6PM</li>
                <li>Sunday: 10AM - 4PM</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>123 Premium Street</li>
                <li>New York, NY 10001</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 Gents Elite Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
