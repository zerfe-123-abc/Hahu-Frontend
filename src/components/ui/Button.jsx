import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-black text-white hover:bg-gray-600 shadow-md hover:shadow-lg w-full h-12 transition-all duration-700 hover:scale-105 ease-in-out active:scale-95 active:translate-y-2",

    secondary: "bg-slate-800 text-white hover:bg-slate-700",

    ghost:
      "bg-transparent text-slate-400 hover:bg-white/10 hover:text-white rounded-full",

    danger: "bg-red-600 text-white hover:bg-red-700",

    outline: "border border-slate-600 text-slate-300 hover:bg-slate-800",

    login: "flex flex-1 text-slate-300 hover:bg-white/10 hover:text-white",
  };

  const sizes = {
    sm: "h-10 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
    icon: "w-10 h-10",
  };

  return (
    <button
      className={twMerge(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
