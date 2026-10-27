import { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "buy-pink"
  | "buy-blue"
  | "buy-red"
  | "cta";

interface ButtonProps {
  variant: ButtonVariant;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant,
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "cursor-pointer font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2";

  const variants: Record<ButtonVariant, string> = {
    // Gold explore button
    primary:
      "px-6 py-3 bg-tertiary text-neutral text-sm font-bold rounded-lg hover:brightness-110",

    // Outlined sign up button
    secondary:
      "px-6 py-3 border border-primary text-neutral text-sm font-medium rounded-full hover:bg-primary hover:text-white",

    // Card buy buttons
    "buy-pink":
      "px-6 w-50 py-2.5 bg-[#B35BAA] text-light text-sm font-semibold rounded-lg hover:brightness-110",

    "buy-blue":
      "px-6 py-2.5 bg-[#015CD9] text-light text-sm font-semibold rounded-lg hover:brightness-110",

    "buy-red":
      "px-6 py-2.5 bg-[#B22E3E] text-light text-sm font-semibold rounded-lg hover:brightness-110",

    // CTA claim button
    cta: "px-6 py-3 bg-primary text-white text-sm font-bold rounded-full shadow-[0_4px_24px_rgba(103,80,164,0.5)] [box-shadow:inset_0_-3px_8px_rgba(0,0,0,0.25),0_4px_24px_rgba(103,80,164,0.5)] hover:brightness-110",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}