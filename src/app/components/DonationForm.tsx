import { useState } from "react";
import { useNavigate } from "react-router";
import { X, Camera, MapPin, AlertCircle, CheckCircle, Shield, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ActionButton, Badge } from "./design-system";

interface DonationFormProps {
  show: boolean;
  onClose: () => void;
}

export default function DonationForm({ show, onClose }: DonationFormProps) {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    item: "",
    condition: "",
    neighborhood: "",
    securityAgreed: false,
    photoUploaded: false,
  });

  const neighborhoods = [
    // Belém - Centro Histórico e Comercial
    "Batista Campos",
    "Nazaré",
    "Umarizal",
    "Reduto",
    "Cidade Velha",
    "Campina",
    "Comércio",
    "Jurunas",
    "Condor",

    // Belém - Zona Norte
    "Marco",
    "Pedreira",
    "Canudos",
    "Telégrafo",
    "Telégrafo Sem Fio",
    "Sacramenta",
    "São Brás",
    "Cremação",
    "Fátima",
    "Souza",
    "Barreiro",
    "Miramar",

    // Belém - Zona Sul
    "Guamá",
    "Terra Firme",
    "Universitário",
    "Montese",
    "Curió-Utinga",
    "Castanheira",
    "Parque Guajará",

    // Belém - Zona Leste
    "Marambaia",
    "Pratinha",
    "Val-de-Cães",
    "Parque Bolonha",
    "Guanabara",
    "Cidade Nova",
    "Maracacuera",

    // Belém - Expansão e Periferias
    "Bengui",
    "Cabanagem",
    "Tapanã",
    "Tenoné",
    "Mangueirão",
    "Parque Verde",
    "Coqueiro",
    "Águas Lindas",
    "Águas Negras",
    "Mata Fome",
    "Jaderlândia",
    "40 Horas",
    "Sideral",
    "Una",
    "Paracuri",
    "Águas Claras",

    // Belém - Distritos e Ilhas
    "Icoaraci",
    "Mosqueiro",
    "Outeiro (Caratateua)",
    "Cotijuba",

    // Belém - Entroncamento e Adjacências
    "Entroncamento",
    "Parque Amazônia",
    "Nova Marambaia",

    // Região Metropolitana - Ananindeua
    "Ananindeua (Centro)",
    "Ananindeua (PAAR)",
    "Ananindeua (Cidade Nova)",
    "Ananindeua (Coqueiro)",
    "Ananindeua (Guanabara)",
    "Ananindeua (Icuí-Guajará)",
    "Ananindeua (Águas Lindas)",
    "Ananindeua (Águas Brancas)",

    // Região Metropolitana - Marituba
    "Marituba (Centro)",
    "Marituba (Almir Gabriel)",
    "Marituba (Decouville)",

    // Região Metropolitana - Outros Municípios
    "Benevides",
    "Santa Bárbara do Pará",
    "Santa Isabel do Pará",
    "Castanhal",
    "Santo Antônio do Tauá",
    "Barcarena",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.securityAgreed) {
      alert("⚠️ Você deve concordar com o termo de segurança antes de doar!");
      return;
    }
    if (!formData.item || !formData.condition || !formData.neighborhood) {
      alert("⚠️ Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    // Mostrar tela de confirmação antes de finalizar
    setShowConfirmation(true);
  };

  const handleConfirmDonation = () => {
    if (!termsAccepted) {
      alert("⚠️ Você deve concordar com os termos de responsabilidade antes de confirmar a doação!");
      return;
    }

    alert(`✅ Doação cadastrada com sucesso!\n\nItem: ${formData.item}\nEstado: ${formData.condition}\nBairro: ${formData.neighborhood}\n\nLembre-se de fazer o wiping de dados antes de entregar o equipamento!`);
    setShowConfirmation(false);
    setTermsAccepted(false);
    onClose();
    setFormData({
      item: "",
      condition: "",
      neighborhood: "",
      securityAgreed: false,
      photoUploaded: false,
    });
  };

  const handleGoToSecurity = () => {
    setShowConfirmation(false);
    setTermsAccepted(false);
    onClose();
    navigate("/security");
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 top-16 bottom-16 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--eco-amazon)] to-[var(--eco-amazon-dark)] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Cadastrar Doação</h2>
                  <p className="text-xs text-green-100">Dê uma segunda vida ao seu hardware</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-auto p-6 space-y-6">
              {/* Info Banner */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-l-4 border-blue-500 p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-700 dark:text-blue-200">
                    Sua doação será visível para estudantes de toda a Região Metropolitana de Belém.
                    Certifique-se de apagar seus dados pessoais antes de doar!
                  </p>
                </div>
              </div>

              {/* Item Name */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[var(--eco-tech-gray)] dark:text-white">
                  O que você vai doar? *
                </label>
                <input
                  type="text"
                  value={formData.item}
                  onChange={(e) => setFormData({ ...formData, item: e.target.value })}
                  placeholder="Ex: Teclado mecânico, Monitor 22', CPU i5 8GB..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[var(--eco-tech-gray)] dark:text-white focus:border-[var(--eco-amazon)] focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Condition */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[var(--eco-tech-gray)] dark:text-white">
                  Está funcionando? *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "Sim", label: "✅ Funcionando", color: "green" },
                    { value: "Com defeito", label: "⚠️ Com defeito", color: "yellow" },
                    { value: "Não", label: "❌ Não funciona", color: "red" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, condition: option.value })}
                      className={`p-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                        formData.condition === option.value
                          ? `border-${option.color}-500 bg-${option.color}-50 dark:bg-${option.color}-900/30 text-${option.color}-700 dark:text-${option.color}-300`
                          : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Photo Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[var(--eco-tech-gray)] dark:text-white">
                  Fotos do aparelho
                </label>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, photoUploaded: !formData.photoUploaded })}
                  className={`w-full p-6 rounded-xl border-2 border-dashed transition-all ${
                    formData.photoUploaded
                      ? "border-green-500 bg-green-50 dark:bg-green-900/30"
                      : "border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-600"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Camera className={`w-8 h-8 ${formData.photoUploaded ? "text-green-600 dark:text-green-400" : "text-gray-400"}`} />
                    <p className={`text-sm font-semibold ${formData.photoUploaded ? "text-green-700 dark:text-green-300" : "text-gray-600 dark:text-gray-400"}`}>
                      {formData.photoUploaded ? "✅ Foto adicionada!" : "Toque para adicionar foto"}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      (Simulação de upload)
                    </p>
                  </div>
                </button>
              </div>

              {/* Neighborhood */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[var(--eco-tech-gray)] dark:text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--eco-amazon)]" />
                  Bairro *
                </label>
                <select
                  value={formData.neighborhood}
                  onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[var(--eco-tech-gray)] dark:text-white focus:border-[var(--eco-amazon)] focus:outline-none transition-colors"
                  required
                >
                  <option value="">Selecione seu bairro</option>
                  {neighborhoods.map((neighborhood) => (
                    <option key={neighborhood} value={neighborhood}>
                      {neighborhood}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Isso facilita a logística de coleta em Belém
                </p>
              </div>

              {/* Security Agreement */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-500 p-4 rounded-xl">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.securityAgreed}
                    onChange={(e) => setFormData({ ...formData, securityAgreed: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-2 border-red-400 text-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-0"
                    required
                  />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-red-800 dark:text-red-300 mb-1">
                      🔒 Termo de Segurança *
                    </p>
                    <p className="text-sm text-red-700 dark:text-red-200">
                      Estou ciente de que devo realizar a <strong>limpeza de dados (Wiping)</strong> conforme
                      as instruções do guia de segurança deste app antes de entregar o equipamento.
                    </p>
                  </div>
                </label>
              </div>

              {/* Success Tips */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-500 p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">
                      ✅ Dicas para uma boa doação:
                    </p>
                    <ul className="text-xs text-green-700 dark:text-green-200 space-y-1">
                      <li>• Limpe o equipamento fisicamente antes de doar</li>
                      <li>• Inclua cabos e acessórios, se possível</li>
                      <li>• Execute o wiping de dados na seção "Segurança"</li>
                      <li>• Descreva defeitos com clareza para evitar frustrações</li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>

            {/* Footer */}
            <div className="border-t-2 border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800 space-y-2">
              <ActionButton
                variant="primary"
                fullWidth
                onClick={handleSubmit}
                disabled={!formData.securityAgreed || !formData.item || !formData.condition || !formData.neighborhood}
              >
                Cadastrar Doação
              </ActionButton>
              <button
                type="button"
                onClick={onClose}
                className="w-full text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </motion.div>

          {/* Confirmation Screen */}
          <AnimatePresence>
            {showConfirmation && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="fixed inset-8 top-24 bottom-24 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-[60] flex flex-col overflow-hidden border-4 border-red-500"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white p-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <AlertCircle className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">⚠️ Aviso de Segurança</h2>
                        <p className="text-sm text-orange-100">Ação necessária antes de doar</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 overflow-auto p-6">
                    <div className="max-w-2xl mx-auto space-y-5">
                      {/* Title */}
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-[var(--eco-tech-gray)] dark:text-white mb-2">
                          🛡️ Termo de Responsabilidade e Compromisso Ambiental
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Doação para: <strong className="text-[var(--eco-amazon)] dark:text-green-400">{formData.item}</strong> em <strong className="text-[var(--eco-amazon)] dark:text-green-400">{formData.neighborhood}</strong>
                        </p>
                      </div>

                      {/* Terms Container */}
                      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-yellow-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-2xl p-6 space-y-5">
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          Ao prosseguir com a doação no <strong className="text-[var(--eco-amazon)] dark:text-green-400">EcoTech Belém</strong>, o usuário declara estar ciente de que:
                        </p>

                        {/* Term 1: Security */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-l-4 border-red-500">
                          <h4 className="font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                            <Shield className="w-5 h-5" />
                            1. Segurança dos Dados
                          </h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            É de <strong>responsabilidade exclusiva do doador</strong> a exclusão permanente de arquivos pessoais,
                            senhas e contas vinculadas ao hardware. Recomendamos o uso do nosso <strong>Guia de Sanitização (Wiping)</strong> disponível
                            na aba de Segurança.
                          </p>
                        </div>

                        {/* Term 2: Equipment State */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-l-4 border-blue-500">
                          <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            2. Estado do Equipamento
                          </h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            O doador deve informar <strong>honestamente o estado de conservação</strong> do item para que a destinação
                            (reuso ou reciclagem) seja feita de forma eficiente.
                          </p>
                        </div>

                        {/* Term 3: Environmental Commitment */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-l-4 border-green-500">
                          <h4 className="font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            3. Compromisso Ambiental
                          </h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            O equipamento doado <strong>não deve ser descartado em vias públicas ou canais de Belém</strong> caso
                            a doação não seja concluída. Se o item não servir para reuso, utilize nosso mapa para encontrar um
                            <strong> Ponto de Logística Reversa</strong>.
                          </p>
                        </div>

                        {/* Term 4: Ethical Destination */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-l-4 border-purple-500">
                          <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            4. Destinação Ética
                          </h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Os itens doados através desta plataforma destinam-se <strong>exclusivamente à inclusão digital e à
                            economia circular</strong>, sendo <strong className="text-red-600 dark:text-red-400">proibida a sua venda por terceiros</strong>.
                          </p>
                        </div>
                      </div>

                      {/* Checkbox Agreement */}
                      <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800 dark:to-slate-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl p-5">
                        <label className="flex items-start gap-4 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            className="mt-1 w-6 h-6 rounded border-2 border-[var(--eco-amazon)] text-[var(--eco-amazon)] focus:ring-2 focus:ring-[var(--eco-amazon)] focus:ring-offset-0 cursor-pointer"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-bold text-[var(--eco-tech-gray)] dark:text-white group-hover:text-[var(--eco-amazon)] dark:group-hover:text-green-400 transition-colors">
                              ✓ Li e concordo com as diretrizes de segurança e descarte consciente.
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              Marque esta opção para habilitar o botão de confirmação
                            </p>
                          </div>
                        </label>
                      </div>

                    </div>
                  </div>

                  {/* Footer */}
                  <div className="border-t-4 border-orange-400 dark:border-orange-600 p-4 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800 dark:to-slate-800 space-y-3">
                    <ActionButton
                      variant="danger"
                      fullWidth
                      icon={<Shield className="w-5 h-5" />}
                      onClick={handleGoToSecurity}
                    >
                      Ir para Guia de Segurança
                    </ActionButton>

                    <button
                      onClick={handleConfirmDonation}
                      disabled={!termsAccepted}
                      className={`w-full px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 ${
                        termsAccepted
                          ? "bg-gradient-to-r from-[var(--eco-amazon)] to-[var(--eco-amazon-dark)] hover:from-[var(--eco-amazon-dark)] hover:to-[var(--eco-amazon)] text-white shadow-lg hover:shadow-xl hover:scale-105"
                          : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 cursor-not-allowed opacity-60"
                      }`}
                    >
                      <ArrowRight className="w-5 h-5" />
                      {termsAccepted ? "Confirmar Doação" : "Aceite os termos para continuar"}
                    </button>

                    {!termsAccepted && (
                      <p className="text-xs text-center text-gray-500 dark:text-gray-400 italic">
                        ⚠️ O botão será ativado após marcar o checkbox acima
                      </p>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        setShowConfirmation(false);
                        setTermsAccepted(false);
                      }}
                      className="w-full text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                    >
                      Voltar ao Formulário
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
