import { useState } from "react";
import { useNavigate } from "react-router";
import { MapPin, Shield, Heart, ImageIcon, Monitor, Cpu, Mouse, Keyboard, Filter, GraduationCap, Plus } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { ActionButton, Badge } from "./design-system";
import EcoModeToggle from "./EcoModeToggle";
import EcoModeInfo from "./EcoModeInfo";
import DonationForm from "./DonationForm";

export default function Donations() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>("all");
  const [showDonationForm, setShowDonationForm] = useState(false);

  const locations = [
    {
      name: "Shopping Pátio Belém",
      address: "Tv. Padre Eutíquio, 1078 - Batista Campos, Belém - PA",
      mapUrl: "https://www.google.com/maps/place/-1.4514,-48.4895"
    },
    {
      name: "UFPA - Campus Guamá",
      address: "Rua Augusto Corrêa, 01 - Guamá, Belém - PA",
      mapUrl: "https://www.google.com/maps/place/-1.4732,-48.4506"
    },
    {
      name: "IFPA - Icoaraci",
      address: "Icoaraci, Belém - PA",
      mapUrl: "https://www.google.com/maps/place/-1.3088,-48.4829"
    },
  ];

  const donations = [
    {
      id: 1,
      title: "Monitor Dell 22' Full HD",
      description: "Monitor profissional para estudos, ideal para engenharia e design",
      image: "https://images.unsplash.com/photo-1761985109815-444abdd60533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxvbGQlMjBjb21wdXRlciUyMG1vbml0b3IlMjBlbGVjdHJvbmljJTIwd2FzdGV8ZW58MXx8fHwxNzc2OTY0OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Batista Campos",
      category: "monitor",
      condition: "Bom estado",
      donor: "Estudante UFPA",
      targetAudience: "Estudantes de Design/Eng."
    },
    {
      id: 2,
      title: "Notebook para Peças i5 8GB",
      description: "Placa-mãe e RAM funcionando, tela com defeito",
      image: "https://images.unsplash.com/photo-1728610996936-d93900f1886b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBjb21wdXRlciUyMG1vbml0b3IlMjBlbGVjdHJvbmljJTIwd2FzdGV8ZW58MXx8fHwxNzc2OTY0OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Guamá",
      category: "computer",
      condition: "Para peças",
      donor: "Prof. IFPA",
      targetAudience: "Estudantes TI/Eletrônica"
    },
    {
      id: 3,
      title: "Teclado Mecânico RGB",
      description: "Teclado gamer, switches blue, perfeito para programação",
      image: "https://images.unsplash.com/photo-1728610996938-2583cc25ebb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxvbGQlMjBjb25wdXRlciUyMG1vbml0b3IlMjBlbGVjdHJvbmljJTIwd2FzdGV8ZW58MXx8fHwxNzc2OTY0OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      location: "Icoaraci",
      category: "peripheral",
      condition: "Bom estado",
      donor: "Dev Icoaraci",
      targetAudience: "Estudantes Programação"
    },
    {
      id: 4,
      title: "Webcam Logitech 1080p",
      description: "Essencial para aulas online e EAD, funcionando perfeitamente",
      image: null,
      location: "Batista Campos",
      category: "peripheral",
      condition: "Novo",
      donor: "Estudante UEPA",
      targetAudience: "Estudantes EAD"
    },
    {
      id: 5,
      title: "SSD 240GB Kingston",
      description: "Acelere seu notebook antigo, 500MB/s leitura",
      image: null,
      location: "Guamá",
      category: "component",
      condition: "Usado",
      donor: "Lab. UFPA",
      targetAudience: "Todos os estudantes"
    },
    {
      id: 6,
      title: "Raspberry Pi 3 B+",
      description: "Kit completo com case e fonte, ideal para projetos IoT",
      image: null,
      location: "Icoaraci",
      category: "component",
      condition: "Bom estado",
      donor: "Eng. Computação",
      targetAudience: "Estudantes Eng./TI"
    },
  ];

  const categories = [
    { id: "all", label: "Todos", icon: Filter },
    { id: "monitor", label: "Monitores", icon: Monitor },
    { id: "computer", label: "Notebooks", icon: Cpu },
    { id: "peripheral", label: "Periféricos", icon: Mouse },
    { id: "component", label: "Componentes", icon: Keyboard },
  ];

  const filteredDonations = filter === "all"
    ? donations
    : donations.filter(d => d.category === filter);

  const conditionColors: Record<string, "success" | "warning" | "info"> = {
    "Novo": "success",
    "Bom estado": "info",
    "Usado": "warning",
    "Para peças": "warning",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="size-full bg-gradient-to-br from-[var(--eco-light-gray)] to-gray-100 dark:from-gray-900 dark:to-black flex flex-col"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="bg-gradient-to-r from-[var(--eco-amazon)] via-[var(--eco-amazon-light)] to-[var(--eco-amazon-dark)] text-white p-4 shadow-lg"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Mural de Doações</h1>
              <p className="text-xs text-green-100">Dê uma segunda vida ao seu hardware</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <EcoModeToggle />
            <Badge variant="success" size="sm">
              {filteredDonations.length} itens
            </Badge>
          </div>
        </div>
      </motion.div>

      {/* Eco Mode Info Modal */}
      <EcoModeInfo />

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="m-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border-l-4 border-[var(--eco-success)] p-4 rounded-xl shadow-md"
        >
          <div className="flex items-start gap-3">
            <GraduationCap className="w-6 h-6 text-[var(--eco-success)] dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-[var(--eco-tech-gray)] dark:text-emerald-300 mb-1">
                🎓 Economia Circular Estudantil
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Hardware circulando entre estudantes da Região Metropolitana de Belém.
                Todos os itens passaram por wiping de dados seguindo protocolos InfoSec.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Donate Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="px-4 mb-4"
        >
          <button
            onClick={() => setShowDonationForm(true)}
            className="w-full bg-gradient-to-r from-[var(--eco-amazon)] to-[var(--eco-amazon-dark)] hover:from-[var(--eco-amazon-dark)] hover:to-[var(--eco-amazon)] text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
              <Plus className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-lg font-bold">Doar Hardware</p>
              <p className="text-xs text-green-100">Ajude estudantes da sua região</p>
            </div>
          </button>
        </motion.div>

        {/* Category Filter */}
        <div className="px-4 mb-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setFilter(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                    filter === cat.id
                      ? "bg-gradient-to-r from-[var(--eco-amazon)] to-[var(--eco-amazon-dark)] text-white shadow-lg scale-105"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Donations Grid */}
        <div className="px-4 pb-4 space-y-4">
          {filteredDonations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border-2 border-gray-100 dark:border-gray-700 hover:border-[var(--eco-amazon)] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-4 p-4">
                {/* Image */}
                <div className="w-28 h-28 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl flex-shrink-0 overflow-hidden">
                  {item.image ? (
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--eco-amazon)] to-[var(--eco-amazon-dark)]">
                      <ImageIcon className="w-12 h-12 text-white" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-[var(--eco-tech-gray)] dark:text-white line-clamp-1">
                      {item.title}
                    </h3>
                    <Badge
                      variant={conditionColors[item.condition] || "default"}
                      size="sm"
                    >
                      {item.condition}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Badge variant="info" size="sm">
                      {item.targetAudience}
                    </Badge>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <GraduationCap className="w-3 h-3 inline mr-1" />
                    {item.donor}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-gray-100 dark:border-gray-700 p-3 bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-800">
                <div className="flex gap-2">
                  <ActionButton
                    variant="primary"
                    size="sm"
                    fullWidth
                    icon={<MapPin className="w-4 h-4" />}
                    onClick={() => {
                      const location = locations.find(loc =>
                        item.location.includes(loc.name.split(' ')[0]) ||
                        item.location.includes(loc.name.split('-')[0])
                      );
                      if (location) {
                        window.open(location.mapUrl, '_blank');
                      } else {
                        window.open(locations[1].mapUrl, '_blank'); // Default UFPA
                      }
                    }}
                  >
                    Tenho Interesse
                  </ActionButton>
                  <ActionButton
                    variant="outline"
                    size="sm"
                    onClick={() => alert(`Contato: ${item.donor}\nLocal: ${item.location}\nPara: ${item.targetAudience}`)}
                  >
                    Contato
                  </ActionButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredDonations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <ImageIcon className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 font-semibold">
              Nenhum item encontrado nesta categoria
            </p>
          </motion.div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-gradient-to-r from-[var(--eco-tech-gray)] to-black dark:from-black dark:to-gray-900 border-t-2 border-[var(--eco-amazon)] p-4 flex justify-around shadow-2xl">
        <button
          onClick={() => navigate("/home")}
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
        >
          <div className="p-2 rounded-xl bg-gray-700 hover:bg-[var(--eco-amazon)] transition-colors group">
            <MapPin className="w-5 h-5 group-hover:text-white" />
          </div>
          <span className="text-xs font-semibold">Mapa</span>
        </button>
        <button
          onClick={() => navigate("/security")}
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
        >
          <div className="p-2 rounded-xl bg-gray-700 hover:bg-[var(--eco-tech-gray)] transition-colors group">
            <Shield className="w-5 h-5 group-hover:text-white" />
          </div>
          <span className="text-xs font-semibold">Segurança</span>
        </button>
        <button
          onClick={() => navigate("/donations")}
          className="flex flex-col items-center gap-1 text-white transition-transform duration-200 hover:scale-110"
        >
          <div className="p-2 rounded-xl bg-gradient-to-br from-[var(--eco-amazon)] to-[var(--eco-amazon-dark)]">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="text-xs font-bold">Doações</span>
        </button>
      </div>

      {/* Donation Form Modal */}
      <DonationForm show={showDonationForm} onClose={() => setShowDonationForm(false)} />
    </motion.div>
  );
}
