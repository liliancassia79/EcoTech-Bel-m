import { ReactNode, useState } from "react";
import { ChevronDown, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TutorialCardProps {
  title: string;
  description: string;
  command?: string;
  explanation?: string;
  steps?: string[];
  icon?: ReactNode;
}

export function TutorialCard({
  title,
  description,
  command,
  explanation,
  steps,
  icon = <Terminal className="w-5 h-5" />,
}: TutorialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 flex items-center justify-between hover:bg-[var(--eco-light-gray)] transition-colors duration-200"
      >
        <div className="flex items-center gap-4 text-left">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--eco-forest)] to-[var(--eco-forest-dark)] flex items-center justify-center text-white flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-[var(--eco-graphite)] mb-1">
              {title}
            </h3>
            <p className="text-sm text-gray-600">
              {description}
            </p>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4 border-t border-gray-200 pt-4">
              {command && (
                <div>
                  <div className="mb-2">
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                      Comando:
                    </span>
                  </div>
                  <div className="bg-[var(--eco-graphite)] p-4 rounded-lg overflow-x-auto">
                    <code className="text-green-400 text-sm font-['JetBrains_Mono']">
                      {command}
                    </code>
                  </div>
                </div>
              )}

              {explanation && (
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <p className="text-sm text-blue-900">
                    <span className="font-semibold">💡 Explicação: </span>
                    {explanation}
                  </p>
                </div>
              )}

              {steps && steps.length > 0 && (
                <div>
                  <div className="mb-3">
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                      Passos:
                    </span>
                  </div>
                  <ol className="space-y-2">
                    {steps.map((step, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--eco-forest)] text-white text-xs flex items-center justify-center font-semibold">
                          {index + 1}
                        </span>
                        <span className="text-sm text-gray-700 pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
