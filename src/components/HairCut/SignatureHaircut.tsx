// pages/SignatureHaircut.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";

type ServiceVariant = {
  id: string;
  title: string;
  durationMin: number;
  price: number;
  short: string;
  long: string;
  image?: string;
};

const variants: ServiceVariant[] = [
  {
    id: "classic",
    title: "Classic Signature Cut",
    durationMin: 45,
    price: 65,
    short: "Precision cut tailored to your face shape and style preferences.",
    long:
      "Our Classic Signature Cut is a precision haircut tailored to your face shape and preferences. Includes consultation, shampoo, precision cutting, styling and a finishing touch with premium products.",
    image: "/images/signature-classic.jpg",
  },
  {
    id: "fade",
    title: "Modern Fade Signature",
    durationMin: 50,
    price: 75,
    short: "Clean tapered fade with textured top and finishing styling.",
    long:
      "A contemporary tapered fade blended with textured scissors work on top. This service includes a thorough consultation, skin or low fade, scissor/texturizing work, wash and styling using premium pomades and sprays.",
    image: "/images/signature-fade.jpg",
  },
  {
    id: "scissor",
    title: "Scissor Over Comb Signature",
    durationMin: 55,
    price: 80,
    short: "Detail-focused scissor over comb for a refined, tailored finish.",
    long:
      "This service focuses on precision scissor-over-comb techniques for a refined silhouette. Ideal for clients seeking a sharp, long-lasting shape and classic look with natural movement.",
    image: "/images/signature-scissor.jpg",
  },
  {
    id: "deluxe",
    title: "Deluxe Signature Experience",
    durationMin: 75,
    price: 110,
    short: "VIP experience — includes hot towel, scalp massage and finishing treatment.",
    long:
      "The Deluxe Signature Experience pairs a precision haircut with a hot towel service, scalp massage, premium styling and a nourishing hair treatment. Perfect for special occasions or when you want to relax and look your best.",
    image: "/images/signature-deluxe.jpg",
  },
];

export default function SignatureHaircutPage() {
  const navigate = useNavigate();

  function onBook(variantId: string) {
    // navigate to booking page with the selected service
    // e.g. /booking?service=signature&variant=classic
    navigate(`/booking?service=signature-haircut&variant=${variantId}`);
  }

  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-[#d4af37]">Signature Haircut</h1>
            <p className="mt-2 text-sm text-gray-300 max-w-2xl">
              Choose a Signature Haircut variant — each is a curated experience with our
              master stylists. Click a variant to view details or book.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/" className="rounded-full border border-[#3b3218] px-4 py-2 text-sm text-gray-300 hover:bg-white/2">
              ← Back
            </Link>
            <Link to="/booking" className="rounded-lg bg-[#d4af37] px-4 py-2 text-black font-semibold hover:brightness-95">
              Book Now
            </Link>
          </div>
        </div>

        {/* Variants grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {variants.map((v) => (
            <article
              key={v.id}
              className="group relative rounded-3xl overflow-hidden bg-[#0B0B0B] border border-[rgba(212,175,55,0.08)] shadow-[0_6px_30px_rgba(0,0,0,0.6)]"
            >
              {/* image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={v.image ?? "/images/placeholder-hair.jpg"}
                  alt={v.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-300 min-h-[48px]">{v.short}</p>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#d4af37]" />
                    <span>{v.durationMin} min</span>
                  </div>

                  <div className="text-[#d4af37] font-semibold">${v.price}</div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => onBook(v.id)}
                    className="flex-1 rounded-2xl border border-[rgba(212,175,55,0.18)] py-3 text-sm text-white hover:bg-white/3 transition"
                  >
                    Book This Service
                  </button>

                  <button
                    onClick={() =>
                      navigate(`/signature-haircut/details?variant=${v.id}`)
                    }
                    className="rounded-2xl px-4 py-3 text-sm text-[#d4af37] border border-transparent hover:underline"
                  >
                    Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Expanded info / note */}
        <div className="mt-12 rounded-2xl bg-[#0B0B0B] border border-[rgba(212,175,55,0.06)] p-6 text-gray-300">
          <h4 className="text-lg font-semibold text-[#d4af37]">What to expect</h4>
          <p className="mt-2 text-sm">
            Each Signature Haircut includes a consultation with your stylist to define the look,
            a premium wash and conditioning, precision cutting and styling, and product
            recommendations for at-home maintenance.
          </p>
        </div>
      </div>
    </div>
  );
}
