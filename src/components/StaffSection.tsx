import { Star, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import barber1Image from "@/assets/barber-1.jpg";
import barber2Image from "@/assets/barber-2.jpg";

const staff = [
  {
    id: 1,
    name: "Marcus Stone",
    title: "Master Barber",
    experience: "12 Years",
    specialties: ["Fades", "Classic Cuts", "Beard Sculpting"],
    rating: 4.9,
    reviews: 287,
    image: barber1Image,
  },
  {
    id: 2,
    name: "Alexander Hunt",
    title: "Senior Stylist",
    experience: "8 Years",
    specialties: ["Modern Styles", "Hot Shaves", "Color Work"],
    rating: 4.8,
    reviews: 214,
    image: barber2Image,
  },
];

const StaffSection = () => {
  return (
    <section id="team" className="py-24 bg-card leather-texture">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary font-semibold">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-gradient-gold">Master</span> Barbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our award-winning team of expert barbers is dedicated to delivering exceptional grooming experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {staff.map((barber, index) => (
            <div
              key={barber.id}
              className="bg-background border border-border rounded-lg overflow-hidden hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-96 overflow-hidden group">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
                  <span className="font-bold text-primary-foreground">{barber.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1 text-foreground">{barber.name}</h3>
                <p className="text-primary font-semibold mb-4">{barber.title}</p>

                <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    {barber.experience}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    {barber.reviews} Reviews
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold mb-2 text-foreground">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {barber.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full" variant="premium">
                  Book with {barber.name.split(' ')[0]}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to choose your preferred barber?</p>
          <Button variant="outline" size="lg">
            View All Team Members
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
