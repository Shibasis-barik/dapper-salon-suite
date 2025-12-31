import React, { useMemo, useState } from "react";
import { Mail, Phone, Twitter, Github, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * TeamMembers.tsx
 * Place under: src/components/Team/TeamMembers.tsx
 *
 * Notes:
 * - Replace 'image' values with your real image paths (public folder),
 *   e.g. "/images/team/john.jpg"
 * - Uses Tailwind classes consistent with your black & gold theme.
 */

type TeamMember = {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  bio: string;
  email?: string;
  phone?: string;
  image?: string; // relative path to public/images
  socials?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
};

const TEAM: TeamMember[] = [
  {
    id: "tm1",
    name: "Arjun Patel",
    role: "Master Barber",
    experienceYears: 12,
    bio:
      "Arjun specializes in classic cuts and fades with a meticulous eye for detail. Passionate about precision and client comfort.",
    email: "arjun@example.com",
    phone: "+91 90000 11111",
    image: "/images/team/arjun.jpg",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    id: "tm2",
    name: "Rohit Sharma",
    role: "Beard Specialist",
    experienceYears: 8,
    bio:
      "Rohit is known for his beard sculpting and hot towel treatments. He brings calm confidence and flawless finishes.",
    email: "rohit@example.com",
    phone: "+91 90000 22222",
    image: "/images/team/rohit.jpg",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    id: "tm3",
    name: "Devika Rao",
    role: "Senior Stylist",
    experienceYears: 10,
    bio:
      "Devika blends modern techniques with classic styling. Great with textured cuts and styling consultation.",
    email: "devika@example.com",
    phone: "+91 90000 33333",
    image: "/images/team/devika.jpg",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    id: "tm4",
    name: "Karan Mehta",
    role: "Razor Expert",
    experienceYears: 7,
    bio:
      "Karan focuses on traditional straight razor shaves and preshave rituals. Always delivers a smooth, luxurious shave.",
    email: "karan@example.com",
    phone: "+91 90000 44444",
    image: "/images/team/karan.jpg",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    id: "tm5",
    name: "Sahil Verma",
    role: "Junior Barber",
    experienceYears: 3,
    bio:
      "Sahil handles trims, maintenance cuts and helps with styling. Fast learner with a friendly approach to clients.",
    email: "sahil@example.com",
    phone: "+91 90000 55555",
    image: "/images/team/sahil.jpg",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    id: "tm6",
    name: "Vikram Singh",
    role: "Grooming Therapist",
    experienceYears: 6,
    bio:
      "Vikram provides scalp treatments and deluxe grooming packages. Known for a relaxing massage and premium product knowledge.",
    email: "vikram@example.com",
    phone: "+91 90000 66666",
    image: "/images/team/vikram.jpg",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    id: "tm7",
    name: "Manish Kapoor",
    role: "Barber & Trainer",
    experienceYears: 15,
    bio:
      "Manish leads our training program and oversees quality. Years of experience in show styling and editorial grooming.",
    email: "manish@example.com",
    phone: "+91 90000 77777",
    image: "/images/team/manish.jpg",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    id: "tm8",
    name: "Rhea Nair",
    role: "Color Specialist",
    experienceYears: 9,
    bio:
      "Rhea handles hair color corrections and bespoke toning for fashion-forward clients.",
    email: "rhea@example.com",
    phone: "+91 90000 88888",
    image: "/images/team/rhea.jpg",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    id: "tm9",
    name: "Amit Joshi",
    role: "Concierge",
    experienceYears: 4,
    bio:
      "Amit welcomes guests and manages appointments, ensuring the salon experience is seamless from arrival to finish.",
    email: "amit@example.com",
    phone: "+91 90000 99999",
    image: "/images/team/amit.jpg",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    id: "tm10",
    name: "Nikhil Kumar",
    role: "Apprentice",
    experienceYears: 1,
    bio:
      "Nikhil is an eager apprentice learning the craft. Friendly and reliable, he assists with wash and prep services.",
    email: "nikhil@example.com",
    phone: "+91 90000 10101",
    image: "/images/team/nikhil.jpg",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
];

export default function TeamMembers() {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return TEAM;
    return TEAM.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.role.toLowerCase().includes(q) ||
        t.bio.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-[#d4af37]">Our Team</h1>
            <p className="mt-2 text-sm text-gray-300 max-w-2xl">
              Meet the professionals who craft your look — barbers, stylists and grooming experts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or role..."
              className="rounded-full bg-[#0b0b0b] border border-[rgba(212,175,55,0.08)] px-4 py-2 w-64 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/40"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((member) => (
            <article
              key={member.id}
              className="group relative overflow-hidden rounded-2xl bg-[#0B0B0B] border border-[rgba(212,175,55,0.06)] shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={member.image ?? "/images/team/placeholder.jpg"}
                  alt={member.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-[#d4af37] mt-1">{member.role}</p>

                <p className="mt-3 text-sm text-gray-300 line-clamp-3">{member.bio}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-300">
                    <span className="mr-3">⭐ {member.experienceYears} yrs</span>
                  </div>

                  <button
                    onClick={() => setSelected(member)}
                    className="rounded-lg bg-[#d4af37] px-4 py-2 text-black text-sm font-semibold hover:brightness-95"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal (profile) */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-md"
            onMouseDown={(e) => e.target === e.currentTarget && setSelected(null)}
            aria-modal="true"
            role="dialog"
          >
            <div className="relative z-10 w-full max-w-3xl rounded-3xl bg-[#0A0A0A] border border-[rgba(212,175,55,0.08)] p-8 shadow-2xl">
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 text-[#d4af37] hover:text-white"
                aria-label="Close profile"
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-full md:w-44 h-44 rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.08)]">
                  <img
                    src={selected.image ?? "/images/team/placeholder.jpg"}
                    alt={selected.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[#d4af37]">{selected.name}</h2>
                  <p className="text-sm text-gray-300 mb-3">{selected.role}</p>

                  <p className="text-gray-300 mb-4">{selected.bio}</p>

                  <div className="flex items-center gap-6 text-sm text-gray-300 mb-4">
                    {selected.email && (
                      <a className="inline-flex items-center gap-2" href={`mailto:${selected.email}`}>
                        <Mail className="w-4 h-4 text-[#d4af37]" /> {selected.email}
                      </a>
                    )}
                    {selected.phone && (
                      <a className="inline-flex items-center gap-2" href={`tel:${selected.phone}`}>
                        <Phone className="w-4 h-4 text-[#d4af37]" /> {selected.phone}
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {selected.socials?.twitter && (
                      <a href={selected.socials.twitter} className="p-2 rounded-full hover:bg-white/5">
                        <Twitter className="w-5 h-5 text-[#d4af37]" />
                      </a>
                    )}
                    {selected.socials?.github && (
                      <a href={selected.socials.github} className="p-2 rounded-full hover:bg-white/5">
                        <Github className="w-5 h-5 text-[#d4af37]" />
                      </a>
                    )}
                    {selected.socials?.linkedin && (
                      <a href={selected.socials.linkedin} className="p-2 rounded-full hover:bg-white/5">
                        <Linkedin className="w-5 h-5 text-[#d4af37]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  className="px-5 py-2 rounded-xl border border-[rgba(212,175,55,0.12)] text-[#d4af37] hover:bg-white/2"
                  onClick={() => {
                    setSelected(null);
                    navigate(`/?staff=${selected.id}#booking`);
                  }}
                >
                  Book with {selected.name.split(" ")[0]}
                </button>

                <button
                  className="px-5 py-2 rounded-xl bg-[#d4af37] text-black font-semibold hover:brightness-95"
                  onClick={() => setSelected(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
