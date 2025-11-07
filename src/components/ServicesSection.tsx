import { Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import haircutImage from "@/assets/service-haircut.jpg";
import beardImage from "@/assets/service-beard.jpg";
import shaveImage from "@/assets/service-shave.jpg";

const services = [
  {
    id: 1,
    title: "Signature Haircut",
    description: "Precision cut tailored to your face shape and style preferences. Includes consultation, wash, cut, and styling.",
    duration: "45 min",
    price: "$65",
    image: haircutImage,
  },
  {
    id: 2,
    title: "Beard Grooming",
    description: "Complete beard sculpting and maintenance with hot towel treatment and premium products.",
    duration: "30 min",
    price: "$45",
    image: beardImage,
  },
  {
    id: 3,
    title: "Royal Shave",
    description: "Traditional hot towel straight razor shave with pre-shave oils and post-shave balm.",
    duration: "40 min",
    price: "$55",
    image: shaveImage,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium <span className="text-gradient-gold">Grooming</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our curated selection of premium grooming services designed for the discerning gentleman
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card-premium hover-lift overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    {service.duration}
                  </div>
                  <div className="flex items-center gap-1 text-primary font-semibold text-lg">
                    <DollarSign className="h-4 w-4" />
                    {service.price.replace('$', '')}
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  Book This Service
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-premium p-6 hover-lift">
            <h4 className="text-xl font-bold mb-2 text-foreground">Complete Grooming Package</h4>
            <p className="text-muted-foreground mb-4">Haircut + Beard Trim + Hot Towel Shave</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary">$135</span>
              <span className="text-sm text-muted-foreground line-through">$165</span>
              <Button variant="premium">Book Package</Button>
            </div>
          </div>
          <div className="card-premium p-6 hover-lift">
            <h4 className="text-xl font-bold mb-2 text-foreground">Monthly Membership</h4>
            <p className="text-muted-foreground mb-4">Unlimited basic services + priority booking</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary">$199/mo</span>
              <Button variant="premium">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
