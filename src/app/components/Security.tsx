import { useState } from "react";
import { useNavigate } from "react-router";
import { MapPin, Shield, Heart, Terminal, X, AlertCircle, HardDrive, CheckCircle, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TutorialCard, ActionButton, Badge } from "./design-system";
import EcoModeToggle from "./EcoModeToggle";
import EcoModeInfo from "./EcoModeInfo";

export default function Security() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="size-full bg-gradient-to-br from-[var(--eco-light-gray)] to-white dark:from-gray-900 dark:to-black flex flex-col"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="bg-gradient-to-r from-[var(--eco-graphite)] to-black text-white p-4 shadow-lg"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Wiping de Dados</h1>
              <p className="text-xs text-gray-300">Por que formatar não basta</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <EcoModeToggle />
            <Badge variant="danger" size="sm">
              Importante
            </Badge>
          </div>
        </div>
      </motion.div>

      {/* Eco Mode Info Modal */}
      <EcoModeInfo />

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 border-l-4 border-[var(--eco-warning)] p-4 rounded-xl shadow-md"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-[var(--eco-warning)] dark:text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-[var(--eco-graphite)] dark:text-yellow-300 mb-1">
                ⚠️ Por que formatar não basta?
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Simplesmente formatar o disco ou deletar arquivos <strong>não remove seus dados permanentemente</strong>.
                Ferramentas de recuperação forense podem restaurar suas informações pessoais, fotos, documentos e senhas.
                É essencial fazer o <strong>wiping completo</strong> antes de reciclar ou doar equipamentos eletrônicos.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <ActionButton
            variant="danger"
            fullWidth
            icon={<AlertCircle className="w-5 h-5" />}
            onClick={() => setShowPopup(true)}
          >
            Ver Guia Completo de Proteção
          </ActionButton>
        </motion.div>

        <div className="space-y-3">
          <h3 className="font-bold text-lg text-[var(--eco-graphite)] dark:text-white flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[var(--eco-forest)] dark:text-green-400" />
            Tutoriais de Sanitização
          </h3>

          <TutorialCard
            icon={<Shield className="w-5 h-5" />}
            title="Higiene Digital Ante-Descarte"
            description="Antes de levar seu PC ao ponto de coleta no bairro do Marco ou em Icoaraci, proteja seus dados."
            command="sudo dd if=/dev/urandom of=/dev/sdX bs=4M status=progress"
            explanation="Este comando substitui cada bit do seu HD por ruído aleatório. Diferente de uma formatação comum, isso impede que softwares de recuperação forense restaurem seus arquivos pessoais."
            steps={[
              "Faça backup de TODOS os dados importantes",
              "Identifique o disco correto com: lsblk -o NAME,SIZE,TYPE",
              "Substitua /dev/sdX pelo dispositivo correto (ex: /dev/sdb)",
              "Execute o comando dd com privilégios de administrador (sudo)",
              "Aguarde a conclusão (status=progress mostra o andamento)",
              "Após concluído, leve o equipamento ao ponto de coleta",
            ]}
          />

          <TutorialCard
            icon={<Trash2 className="w-5 h-5" />}
            title="Apagar Arquivos com Shred"
            description="Sobrescreva arquivos sensíveis de forma segura"
            command="shred -vfz -n 10 arquivo_sensivel.txt"
            explanation="-v = modo verbose (mostra progresso), -f = força permissões de escrita, -z = zera os dados no final, -n 10 = executa 10 passadas de sobrescrita"
            steps={[
              "Identifique os arquivos que contêm dados sensíveis",
              "Navegue até o diretório usando cd",
              "Execute o comando shred com as flags apropriadas",
              "Aguarde a conclusão e verifique com ls -la",
            ]}
          />

          <TutorialCard
            icon={<HardDrive className="w-5 h-5" />}
            title="Wiping Completo com Shred (Recomendado)"
            description="Sobrescreva todo o disco impedindo recuperação forense"
            command="sudo shred -v -n 3 /dev/sdX"
            explanation="Este comando sobrescreve o disco INTEIRO 3 vezes com dados aleatórios, impossibilitando recuperação forense. -v = modo verbose (mostra progresso), -n 3 = 3 passadas de sobrescrita (padrão DoD 5220.22-M). ATENÇÃO: Isso APAGA TUDO permanentemente!"
            steps={[
              "Faça backup de TODOS os dados importantes antes de começar",
              "Liste os discos disponíveis: lsblk -o NAME,SIZE,TYPE",
              "Identifique o disco correto (ex: /dev/sdb, NUNCA /dev/sda se for seu sistema principal)",
              "Execute: sudo shred -v -n 3 /dev/sdX (substitua sdX pelo disco correto)",
              "Aguarde a conclusão (pode levar horas dependendo do tamanho do disco)",
              "Verifique que os dados foram destruídos: sudo fdisk -l /dev/sdX",
            ]}
          />

          <TutorialCard
            icon={<CheckCircle className="w-5 h-5" />}
            title="Verificar Dispositivos de Armazenamento"
            description="Liste todos os dispositivos antes de sanitizar"
            command="lsblk -o NAME,SIZE,TYPE,MOUNTPOINT"
            explanation="Este comando lista todos os dispositivos de bloco (discos, partições, pendrives) com informações sobre tamanho, tipo e pontos de montagem. Use sempre antes de executar comandos destrutivos!"
            steps={[
              "Abra o terminal",
              "Execute o comando lsblk",
              "Identifique o dispositivo correto pela capacidade e nome",
              "Anote o caminho completo (ex: /dev/sdb)",
              "Use este caminho nos comandos de sanitização",
            ]}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-l-4 border-[var(--eco-success)] p-4 rounded-xl shadow-md"
        >
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-[var(--eco-success)] dark:text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-[var(--eco-graphite)] dark:text-green-300 mb-2">
                ✅ Dicas de Segurança
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Sempre faça backup dos dados importantes antes de apagar</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Verifique DUAS VEZES o dispositivo correto com lsblk</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Use pelo menos 3 passadas de sobrescrita para segurança básica</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Para SSDs, use ferramentas específicas do fabricante (secure erase)</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Considere criptografia de disco para proteção contínua</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Popup Overlay */}
      <AnimatePresence>
        {showPopup && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 top-20 bottom-20 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            >
              {/* Popup Header */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6" />
                  <h2 className="text-xl font-bold">Guia Completo de Proteção de Dados</h2>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Popup Content */}
              <div className="flex-1 overflow-auto p-6 space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-800 mb-2">⚠️ Por que apagar dados?</h3>
                  <p className="text-sm text-yellow-700">
                    Antes de reciclar ou doar equipamentos eletrônicos, é essencial apagar completamente
                    seus dados pessoais para evitar roubo de identidade e proteger sua privacidade.
                    Simplesmente "deletar" arquivos não é suficiente - eles podem ser recuperados com
                    ferramentas especializadas.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-[var(--eco-graphite)]">Métodos Recomendados:</h3>

                  <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
                    <h4 className="font-semibold text-[var(--eco-graphite)] mb-2 flex items-center gap-2">
                      <Trash2 className="w-4 h-4" />
                      1. Para arquivos individuais
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Use o comando <code className="bg-[var(--eco-graphite)] text-green-400 px-2 py-1 rounded font-['JetBrains_Mono']">shred</code> para
                      sobrescrever arquivos sensíveis múltiplas vezes.
                    </p>
                    <div className="bg-[var(--eco-graphite)] p-3 rounded-lg font-['JetBrains_Mono']">
                      <code className="text-green-400 text-sm">shred -vfz -n 10 arquivo.txt</code>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
                    <h4 className="font-semibold text-[var(--eco-graphite)] mb-2 flex items-center gap-2">
                      <HardDrive className="w-4 h-4" />
                      2. Wiping completo com Shred (Recomendado)
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Use o comando <code className="bg-[var(--eco-graphite)] text-green-400 px-2 py-1 rounded font-['JetBrains_Mono']">shred</code> para
                      sobrescrever todo o disco 3 vezes, impedindo recuperação forense.
                    </p>
                    <div className="bg-[var(--eco-graphite)] p-3 rounded-lg font-['JetBrains_Mono']">
                      <code className="text-green-400 text-sm">sudo shred -v -n 3 /dev/sdX</code>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      <strong className="text-[var(--eco-graphite)]">Explicação:</strong> O comando sobrescreve o disco inteiro
                      com 3 passadas de dados aleatórios (padrão DoD 5220.22-M), tornando impossível a recuperação
                      forense dos dados originais.
                    </p>
                    <p className="text-xs text-red-600 mt-2 font-semibold">
                      ⚠️ ATENÇÃO: Isso apaga TUDO permanentemente! Verifique o dispositivo correto com lsblk antes de executar.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      ✅ Checklist de Segurança
                    </h4>
                    <ul className="text-sm text-green-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Faça backup de dados importantes antes de iniciar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Verifique o dispositivo correto com <code className="font-['JetBrains_Mono']">lsblk</code></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Use pelo menos 3-7 passadas de sobrescrita</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Para SSDs, use ferramentas específicas do fabricante</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Considere destruição física para dados extremamente sensíveis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Popup Footer */}
              <div className="border-t-2 border-gray-200 p-4">
                <ActionButton
                  variant="primary"
                  fullWidth
                  onClick={() => setShowPopup(false)}
                >
                  Entendi! Vou Proteger Meus Dados
                </ActionButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <div className="bg-white dark:bg-gray-900 border-t-2 border-gray-200 dark:border-gray-700 p-4 flex justify-around shadow-2xl">
        <button
          onClick={() => navigate("/home")}
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-[var(--eco-forest)] transition-all duration-200 hover:scale-110"
        >
          <div className="p-2 rounded-xl bg-gray-100 hover:bg-[var(--eco-forest)] transition-colors group">
            <MapPin className="w-5 h-5 group-hover:text-white" />
          </div>
          <span className="text-xs font-semibold">Mapa</span>
        </button>
        <button
          onClick={() => navigate("/security")}
          className="flex flex-col items-center gap-1 text-[var(--eco-graphite)] transition-transform duration-200 hover:scale-110"
        >
          <div className="p-2 rounded-xl bg-gradient-to-br from-[var(--eco-graphite)] to-black">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-xs font-bold">Segurança</span>
        </button>
        <button
          onClick={() => navigate("/donations")}
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-[var(--eco-forest)] transition-all duration-200 hover:scale-110"
        >
          <div className="p-2 rounded-xl bg-gray-100 hover:bg-[var(--eco-forest)] transition-colors group">
            <Heart className="w-5 h-5 group-hover:text-white" />
          </div>
          <span className="text-xs font-semibold">Doações</span>
        </button>
      </div>
    </motion.div>
  );
}
