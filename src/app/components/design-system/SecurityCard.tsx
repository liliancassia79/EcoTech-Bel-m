import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface SecurityCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
  variant?: "default" | "danger" | "warning" | "success";
}

export function SecurityCard({
  icon,
  title,
  description,
  onClick,
  variant = "default"
}: SecurityCardProps) {
  const variantStyles = {
    default: "border-gray-200 hover:border-[var(--eco-forest)] hover:shadow-lg",
    danger: "border-red-200 bg-red-50 hover:border-red-400",
    warning: "border-yellow-200 bg-yellow-50 hover:border-yellow-400",
    success: "border-green-200 bg-green-50 hover:border-green-400",
  };

  const iconColors = {
    default: "text-[var(--eco-forest)]",
    danger: "text-red-600",
    warning: "text-yellow-600",
    success: "text-green-600",
  };

  return (
    <button
      onClick={onClick}
      className={`w-full bg-white rounded-xl border-2 p-5 transition-all duration-300 ${variantStyles[variant]} ${onClick ? 'cursor-pointer' : 'cursor-default'}`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--eco-forest)] to-[var(--eco-forest-dark)] flex items-center justify-center ${iconColors[variant]}`}>
          <div className="text-white">
            {icon}
          </div>
        </div>

        <div className="flex-1 text-left">
          <h3 className="font-semibold text-[var(--eco-graphite)] mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600">
            {description}
          </p>
        </div>

        {onClick && (
          <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
        )}
      </div>
    </button>
  );
}
