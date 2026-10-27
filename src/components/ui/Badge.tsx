type BadgeVariant = "instock" | "limited";
import { cn } from './../../utils/cn';

interface BadgeProps {
  variant: BadgeVariant;
  label?: string;
  index?: number;
}

export default function Badge({ variant, label, index }: BadgeProps) {
  const variants: Record<BadgeVariant, string> = {
    instock: "bg-neutral text-white",
    limited: "bg-[#7A150F] text-light",
  };

  const defaultLabels: Record<BadgeVariant, string> = {
    instock: "In Stock",
    limited: "Limited Stock",
  };

  return (
    <span
      className={cn("w-fit px-3 py-1  rounded-full text-xs font-semibold", variants[variant],index !== 0 && "hidden")  }
    >
      {label ?? defaultLabels[variant]}
    </span>
  );
}