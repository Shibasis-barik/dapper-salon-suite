import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginModal({ open, onClose }) {
  const navigate = useNavigate();
  const closeBtnRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      // focus the close button for keyboard users
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-md"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Real black & gold modal */}
      <div
        className={
          "relative z-10 w-full max-w-md rounded-2xl p-8 shadow-[0_0_25px_rgba(212,175,55,0.4)] text-white"
        }
        style={{ background: 'rgba(10,10,10,0.95)', border: '1px solid rgba(212,175,55,0.12)' }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close login modal"
          ref={closeBtnRef}
          className="absolute top-4 right-4 text-[#d4af37] hover:text-white rounded focus:outline-none focus:ring-2 focus:ring-[#d4af37] p-1"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="h-16 w-16 rounded-full border-2 border-[#d4af37] flex items-center justify-center">
            <span className="text-2xl text-[#d4af37]">★</span>
          </div>

          <h3 id="login-title" className="text-3xl font-bold text-[#d4af37]">
            Log In
          </h3>
          <p className="text-sm text-gray-300">Sign in to manage your bookings</p>

          <div className="w-full h-[1px] bg-[#d4af3733] mt-2"></div>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            console.log("login", {
              email: form.get("email"),
              password: form.get("password"),
            });
            onClose();
          }}
        >
          {/* Email */}
          <label className="block text-[#d4af37] mb-2 text-sm">Email</label>
          <input
            name="email"
            type="email"
            placeholder="you@domain.com"
            className={
              "w-full mb-4 px-4 py-3 rounded-xl bg-transparent border border-[#2b2b2b] text-white placeholder-gray-400 focus:outline-none"
            }
            style={{ backgroundColor: 'rgba(26,26,26,0.6)', borderColor: 'rgba(212,175,55,0.18)' }}
            required
          />

          {/* Password */}
          <label className="block text-[#d4af37] mb-2 text-sm">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className={
              "w-full mb-4 px-4 py-3 rounded-xl bg-transparent border border-[#2b2b2b] text-white placeholder-gray-400 focus:outline-none"
            }
            style={{ backgroundColor: 'rgba(26,26,26,0.6)', borderColor: 'rgba(212,175,55,0.18)' }}
            required
          />

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between mb-5">
            <label className="flex items-center gap-2 text-gray-300 text-sm">
              <input type="checkbox" className="accent-[#d4af37]" />
              Remember me
            </label>

            <button type="button" className="text-[#d4af37] hover:text-white text-sm">
              Forgot?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 mt-3 rounded-xl bg-[#d4af37] text-black font-semibold hover:bg-[#f1cf62] transition"
          >
            Sign In
          </button>

          {/* Bottom text */}
          <p className="text-center text-gray-300 text-sm mt-4">
            Don’t have an account?{' '}
            <button type="button" className="text-[#d4af37] hover:underline">
              Sign up
            </button>
          </p>
          <p className="text-center text-gray-300 text-sm mt-2">
            <button
              onClick={() => {
                onClose();
                navigate('/admin');
              }}
              className="text-[#d4af37] hover:underline"
            >
              Admin Access
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
