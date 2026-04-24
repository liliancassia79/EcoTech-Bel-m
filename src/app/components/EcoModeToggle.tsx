import { Leaf } from "lucide-react";
import { motion } from "motion/react";
import { useEcoMode } from "../contexts/EcoModeContext";

export default function EcoModeToggle() {
  const { ecoMode, toggleEcoMode } = useEcoMode();

  return (
    <button
      onClick={toggleEcoMode}
      className="relative inline-flex items-center gap-2 p-2 rounded-full transition-colors hover:bg-white/20"
      title={ecoMode ? "Modo Eco Ativo" : "Ativar Modo Eco"}
    >
      <div
        className={`relative w-12 h-6 rounded-full transition-colors ${
          ecoMode ? "bg-green-500" : "bg-gray-400"
        }`}
      >
        <motion.div
          className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
          animate={{
            x: ecoMode ? 26 : 2,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
      <Leaf className={`w-5 h-5 ${ecoMode ? "text-green-400" : "text-gray-300"}`} />
    </button>
  );
}
