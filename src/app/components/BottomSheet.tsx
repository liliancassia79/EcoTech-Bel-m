import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp, ChevronDown, Leaf, Droplet, MapPin } from "lucide-react";

interface BottomSheetProps {
  locations: any[];
}

export default function BottomSheet({ locations }: BottomSheetProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Overlay when expanded */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="absolute inset-0 bg-black/20 dark:bg-black/40 z-10"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isExpanded ? -280 : 0 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-auto"
      >
        <div className="bg-white/98 dark:bg-gray-900/98 backdrop-blur-md rounded-t-3xl shadow-2xl border-t-4 border-[var(--eco-amazon)]">
        {/* Pull Handle */}
        <div
          className="pt-3 pb-2 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-3" />
          <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 animate-bounce" />
            ) : (
              <ChevronUp className="w-5 h-5 animate-bounce" />
            )}
            <span className="text-xs font-semibold">
              {isExpanded ? "Recolher" : "Deslize para mais info"}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 pb-6">
          {/* Header Section - Always Visible */}
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gradient-to-br from-[var(--eco-amazon)] to-[var(--eco-amazon-dark)] rounded-lg">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-[var(--eco-tech-gray)] dark:text-white">
                  Proteja nossas águas
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Não descarte eletrônicos nos canais ou na Baía do Guajará
                </p>
              </div>
            </div>
          </div>

          {/* Expanded Content */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-4">
              {/* Environmental Message */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border-l-4 border-[var(--eco-success)] p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <Droplet className="w-5 h-5 text-[var(--eco-success)] dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      O descarte incorreto afeta desde as ilhas até o centro urbano.
                      Seja sustentável em qualquer bairro, de Mosqueiro à Cidade Velha.
                    </p>
                  </div>
                </div>
              </div>

              {/* Collection Points Stats */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="font-bold text-[var(--eco-tech-gray)] dark:text-white text-sm">
                    Pontos de Coleta Certificados
                  </h4>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {locations.filter(loc => loc.type === "shopping").length}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Shoppings</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {locations.filter(loc => loc.type === "university").length}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Universidades</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                      {locations.filter(loc => loc.type === "cooperative").length}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Cooperativas</div>
                  </div>
                </div>
              </div>

              {/* Impact Message */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl">
                <h4 className="font-bold text-green-800 dark:text-green-300 mb-2 text-sm">
                  💚 Impacto Ambiental Positivo
                </h4>
                <ul className="space-y-1.5 text-xs text-green-700 dark:text-green-200">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Evita contaminação de rios e igarapés por metais pesados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Reduz poluição da Baía do Guajará e áreas costeiras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Protege a fauna aquática amazônica do descarte tóxico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Contribui para economia circular na região metropolitana</span>
                  </li>
                </ul>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-[var(--eco-amazon)] to-[var(--eco-amazon-dark)] p-4 rounded-xl text-white text-center">
                <p className="text-sm font-bold mb-1">
                  🗺️ Encontre o ponto mais próximo
                </p>
                <p className="text-xs opacity-90">
                  Toque nos marcadores no mapa acima para ver endereço e horários
                </p>
              </div>
            </div>
          </motion.div>

          {/* Compact Summary When Collapsed */}
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">
                <strong className="text-[var(--eco-amazon)] dark:text-green-400">{locations.length} pontos certificados</strong> • De Icoaraci ao Ver-o-Peso
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
    </>
  );
}
