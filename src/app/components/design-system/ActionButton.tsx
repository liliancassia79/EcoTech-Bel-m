import { ReactNode } from "react";
import { Loader2 } from "lucide-react";

interface ActionButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

export function ActionButton({
  children,
  icon,
  onClick,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
}: ActionButtonProps) {
  const baseStyles = "font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: "bg-gradient-to-r from-[var(--eco-forest)] to-[var(--eco-forest-dark)] text-white hover:shadow-lg hover:scale-105 active:scale-95",
    secondary: "bg-[var(--eco-light-gray)] text-[var(--eco-graphite)] hover:bg-gray-300",
    outline: "border-2 border-[var(--eco-forest)] text-[var(--eco-forest)] hover:bg-[var(--eco-forest)] hover:text-white",
    danger: "bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-lg hover:scale-105 active:scale-95",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''}`}
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Carregando...</span>
        </>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          <span>{children}</span>
        </>
      )}
    </button>
  );
}
