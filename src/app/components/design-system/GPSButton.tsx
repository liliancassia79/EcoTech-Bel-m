import { MapPin, Navigation, Loader2 } from "lucide-react";
import { motion } from "motion/react";

interface GPSButtonProps {
  onClick?: () => void;
  loading?: boolean;
  active?: boolean;
  variant?: "locate" | "navigate";
  label?: string;
}

export function GPSButton({
  onClick,
  loading = false,
  active = false,
  variant = "locate",
  label,
}: GPSButtonProps) {
  const icons = {
    locate: MapPin,
    navigate: Navigation,
  };

  const Icon = icons[variant];

  return (
    <motion.button
      onClick={onClick}
      disabled={loading}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative overflow-hidden rounded-full p-4 shadow-lg transition-all duration-300
        ${active
          ? 'bg-gradient-to-br from-[var(--eco-forest)] to-[var(--eco-forest-dark)] text-white'
          : 'bg-white text-[var(--eco-forest)] border-2 border-[var(--eco-forest)]'
        }
        ${loading ? 'cursor-wait' : 'cursor-pointer'}
        hover:shadow-xl
      `}
    >
      {active && (
        <motion.div
          className="absolute inset-0 bg-white opacity-20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <div className="relative flex items-center gap-2">
        {loading ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : (
          <Icon className={`w-6 h-6 ${active ? 'animate-pulse' : ''}`} />
        )}
        {label && (
          <span className="font-semibold text-sm whitespace-nowrap">
            {label}
          </span>
        )}
      </div>
    </motion.button>
  );
}
