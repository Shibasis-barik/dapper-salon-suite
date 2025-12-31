import React, { useState } from "react";
import { Scissors } from "lucide-react";

export default function RoyalShave() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold text-primary mb-6">Royal Shave</h1>
        <p className="text-muted-foreground mb-8">
          Choose a Royal Shave service below to continue with your booking.
        </p>

        {/* STEP 1 SCREEN */}
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Royal Shave", "Beard Grooming", "Signature Haircut", "Complete Package"].map(
              (service) => (
                <button
                  key={service}
                  className="
                    p-6 
                    bg-secondary 
                    hover:bg-primary/10 
                    border-2 border-transparent 
                    hover:border-primary 
                    rounded-xl 
                    text-left 
                    transition-all 
                    group
                  "
                  onClick={() => setStep(2)}
                >
                  <Scissors className="h-6 w-6 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">{service}</h4>
                  <p className="text-sm text-muted-foreground">40 min • $55</p>
                </button>
              )
            )}
          </div>
        )}

        {/* STEP 2 SCREEN */}
        {step === 2 && (
          <div className="mt-10 bg-card p-6 rounded-2xl border border-primary/20">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Selected: Royal Shave
            </h2>

            <p className="text-muted-foreground mb-6">
              A traditional hot towel straight razor shave with pre-shave oils and post-shave balm.
              You may proceed with the booking or choose another service.
            </p>

            <div className="flex gap-4">
              <button
                className="px-6 py-3 rounded-xl bg-primary text-black font-semibold hover:brightness-95"
              >
                Continue Booking
              </button>

              <button
                className="px-6 py-3 rounded-xl border border-primary text-primary hover:bg-primary/10"
                onClick={() => setStep(1)}
              >
                ← Back
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
