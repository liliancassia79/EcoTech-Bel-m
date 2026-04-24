import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  icon
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[var(--eco-light-gray)] text-[var(--eco-graphite)]",
    success: "bg-green-100 text-green-800 border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
    danger: "bg-red-100 text-red-800 border-red-200",
    info: "bg-blue-100 text-blue-800 border-blue-200",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold border ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
