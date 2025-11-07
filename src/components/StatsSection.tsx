import { Award, Users, Star, Clock } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "15+",
    label: "Years of Excellence",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Satisfied Clients",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
  },
  {
    icon: Clock,
    value: "50K+",
    label: "Appointments Done",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-card leather-texture border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
