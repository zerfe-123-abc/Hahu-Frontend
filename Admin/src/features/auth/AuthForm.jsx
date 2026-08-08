import useTheme from "@/hooks/useTheme";
import UseAuthStore from "@/stores/AuthStore";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = ({
  title,
  description,
  submitLabel,
  role,
  onSubmit,
  onSuccessNavigate = "/dashboard",
}) => {
  const currentThem = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const login = UseAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    const normalizedEmail = email.trim().toLowerCase();
    const result = onSubmit
      ? await onSubmit({ email: normalizedEmail, password, role })
      : await login({ email: normalizedEmail, password, role });
    setIsSubmitting(false);
    if (!result.success) {
      setError(result.error || "Invalid Email or Password.");
      return;
    }
    navigate(onSuccessNavigate);
  };

  return (
    <div
      className={`w-full max-w-md rounded-2xl p-8 shadow-2xl
       ${currentThem.background}
       ${currentThem.text}
    `}
    >
      <div className="mb-7">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="mt-3 text-sm leading-6">{description}</p>
      </div>
      {error && (
        <div className="mb-4 rounded-2xl bg-red-600/20 px-4 py-3 text-sm text-red-100">
          {error}
        </div>
      )}
      <label className="block mb-4">
        <span className="text-sm">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
        />
      </label>
      <label className="block mb-6">
        <span className="text-sm">Password</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
        />
      </label>
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full rounded-2xl px-4 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/20 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Processing..." : submitLabel}
      </button>

      <div className="mt-6 flex items-center justify-between text-xs">
        <span>Secure access</span>
        <span className="flex items-center gap-1">
          <ArrowRight size={14} />
          Powered by Tailwind UI style
        </span>
      </div>
    </div>
  );
};

export default AuthForm;
