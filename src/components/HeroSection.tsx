import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium barbershop interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary font-semibold">Premium Grooming Experience</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Where <span className="text-gradient-gold">Style</span> Meets
            <br />
            Sophistication
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Experience the pinnacle of men's grooming with our expert barbers, 
            premium services, and sophisticated atmosphere tailored for the modern gentleman.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="premium" size="xl" className="hover-glow">
              <Calendar className="h-5 w-5" />
              Book Your Appointment
            </Button>
            <Button variant="hero" size="xl">
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border/50">
            <div>
              <div className="text-3xl font-bold text-gradient-gold mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient-gold mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient-gold mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
