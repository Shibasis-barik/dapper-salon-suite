import { useState } from "react";
import { Calendar, Clock, User, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const BookingSection = () => {
  const [step, setStep] = useState(1);

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary font-semibold">Book Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Reserve Your <span className="text-gradient-gold">Appointment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple 3-step booking process to secure your spot with our master barbers
          </p>
        </div>

        {/* Booking Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                    step >= s
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-24 md:w-48 h-1 mx-2 transition-all ${
                      step > s ? "bg-primary" : "bg-secondary"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <span className="text-sm text-muted-foreground">Choose Service</span>
            <span className="text-sm text-muted-foreground">Select Barber</span>
            <span className="text-sm text-muted-foreground">Pick Time</span>
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 card-premium">
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Select Your Service</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Signature Haircut", "Beard Grooming", "Royal Shave", "Complete Package"].map(
                    (service) => (
                      <button
                        key={service}
                        className="p-6 bg-secondary hover:bg-primary/10 border-2 border-transparent hover:border-primary rounded-lg text-left transition-all group"
                        onClick={() => setStep(2)}
                      >
                        <Scissors className="h-6 w-6 text-primary mb-3" />
                        <h4 className="font-semibold text-foreground mb-2">{service}</h4>
                        <p className="text-sm text-muted-foreground">45 min • $65</p>
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Choose Your Barber</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Marcus Stone", "Alexander Hunt", "Any Available"].map((barber) => (
                    <button
                      key={barber}
                      className="p-6 bg-secondary hover:bg-primary/10 border-2 border-transparent hover:border-primary rounded-lg text-left transition-all"
                      onClick={() => setStep(3)}
                    >
                      <User className="h-6 w-6 text-primary mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">{barber}</h4>
                      <p className="text-sm text-muted-foreground">★ 4.9 • 200+ reviews</p>
                    </button>
                  ))}
                </div>
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Select Date & Time</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-foreground">
                      Choose Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 bg-secondary border border-border rounded-lg text-foreground"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-foreground">
                      Choose Time
                    </label>
                    <select className="w-full p-3 bg-secondary border border-border rounded-lg text-foreground">
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>2:00 PM</option>
                      <option>3:00 PM</option>
                      <option>4:00 PM</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button variant="premium" className="flex-1">
                    <Calendar className="h-5 w-5" />
                    Confirm Booking
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
