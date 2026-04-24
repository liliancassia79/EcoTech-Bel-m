import { X, Leaf, Battery, Smartphone, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEcoMode } from "../contexts/EcoModeContext";
import { ActionButton } from "./design-system";

export default function EcoModeInfo() {
  const { showEcoInfo, setShowEcoInfo } = useEcoMode();

  return (
    <AnimatePresence>
      {showEcoInfo && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEcoInfo(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 top-20 bottom-20 bg-white dark:bg-[var(--eco-tech-gray)] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Leaf className="w-6 h-6" />
                <h2 className="text-xl font-bold">Modo Eco Ativado</h2>
              </div>
              <button
                onClick={() => setShowEcoInfo(false)}
                className="p-2 hover:bg-white/20 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-6 space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-l-4 border-green-500 p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <Battery className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">
                      🔋 Economia de Bateria em Telas OLED
                    </h3>
                    <p className="text-sm text-green-700 dark:text-green-200">
                      Em smartphones com tela OLED (comuns em Belém), o Modo Escuro desliga os pixels pretos,
                      economizando <strong>até 60% de bateria</strong> comparado ao modo claro.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-[var(--eco-tech-gray)] dark:text-white flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-green-600" />
                  Como Funciona:
                </h3>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-[var(--eco-tech-gray)] dark:text-white mb-3">
                    Tecnologia OLED vs LCD
                  </h4>
                  <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex gap-3">
                      <span className="font-bold min-w-[60px]">OLED:</span>
                      <span>Cada pixel emite sua própria luz. Pixels pretos = desligados = sem consumo de energia.</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-bold min-w-[60px]">LCD:</span>
                      <span>Backlight sempre ligado. Preto = luz bloqueada, mas ainda consome energia.</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-4 rounded-xl border-2 border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Benefícios Ambientais
                  </h4>
                  <ul className="space-y-2 text-sm text-green-700 dark:text-green-200">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Bateria dura mais:</strong> Menos ciclos de carga = vida útil estendida</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Menos descarte químico:</strong> Baterias têm lítio, cobalto e metais pesados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Energia economizada:</strong> Reduz consumo de eletricidade ao carregar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Impacto regional:</strong> Protege os rios e igarapés de Belém contra resíduos tóxicos</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-xl">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                    💡 Dica Educacional
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-200">
                    Ao estender a vida útil da bateria, você reduz a necessidade de trocas frequentes,
                    diminuindo o descarte de componentes químicos perigosos que podem contaminar
                    nossos rios e a Baía do Guajará.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t-2 border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800">
              <ActionButton
                variant="primary"
                fullWidth
                onClick={() => setShowEcoInfo(false)}
              >
                Entendi! Vou Economizar Bateria
              </ActionButton>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
