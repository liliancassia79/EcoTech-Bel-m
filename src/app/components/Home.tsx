import { useState } from "react";
import { useNavigate } from "react-router";
import { MapPin, Shield, Heart, Palette, Info, Building2, GraduationCap, Users } from "lucide-react";
import { motion } from "motion/react";
import { GPSButton, Badge } from "./design-system";
import EcoModeToggle from "./EcoModeToggle";
import EcoModeInfo from "./EcoModeInfo";
import BottomSheet from "./BottomSheet";

export default function Home() {
  const navigate = useNavigate();
  const [gpsActive, setGpsActive] = useState(false);

  const locations = [
    {
      name: "E+ Reciclagem (Equatorial)",
      type: "cooperative",
      x: "40%",
      y: "40%",
      address: "Sede FIEPA - Av. Nazaré, 273 - Nazaré, Belém - PA",
      hours: "Seg-Sex: 8h-17h",
      coordinates: "-1.4514,-48.4895",
      mapUrl: "https://www.google.com/maps/place/-1.4514,-48.4895",
      icon: Users
    },
    {
      name: "Parque Shopping Belém",
      type: "shopping",
      x: "75%",
      y: "20%",
      address: "Rod. Augusto Montenegro, KM 10 - Parque Verde, Belém - PA",
      hours: "Seg-Sáb: 10h-22h, Dom: 12h-20h",
      coordinates: "-1.4115,-48.4347",
      mapUrl: "https://www.google.com/maps/place/-1.4115,-48.4347",
      icon: Building2
    },
    {
      name: "CRC Belém",
      type: "university",
      x: "50%",
      y: "55%",
      address: "Centro de Recondicionamento - Benguí, Belém - PA",
      hours: "Seg-Sex: 8h-18h",
      coordinates: "-1.4256,-48.4589",
      mapUrl: "https://www.google.com/maps/place/-1.4256,-48.4589",
      icon: GraduationCap
    },
    {
      name: "Líder Doca",
      type: "cooperative",
      x: "25%",
      y: "50%",
      address: "Supermercado Líder - Área da Doca, Belém - PA",
      hours: "Seg-Dom: 7h-22h",
      coordinates: "-1.4506,-48.5014",
      mapUrl: "https://www.google.com/maps/place/-1.4506,-48.5014",
      icon: Users
    },
    {
      name: "Líder Independência",
      type: "cooperative",
      x: "55%",
      y: "60%",
      address: "Supermercado Líder - Tv. Independência, Belém - PA",
      hours: "Seg-Dom: 7h-22h",
      coordinates: "-1.4489,-48.4856",
      mapUrl: "https://www.google.com/maps/place/-1.4489,-48.4856",
      icon: Users
    },
    {
      name: "Líder Icoaraci",
      type: "cooperative",
      x: "85%",
      y: "15%",
      address: "Supermercado Líder - Icoaraci, Belém - PA",
      hours: "Seg-Dom: 7h-22h",
      coordinates: "-1.3088,-48.4829",
      mapUrl: "https://www.google.com/maps/place/-1.3088,-48.4829",
      icon: Users
    },
  ];

  const typeColors = {
    shopping: "from-blue-500 to-blue-700",
    university: "from-purple-500 to-purple-700",
    cooperative: "from-orange-500 to-orange-700",
  };

  const typeLabels = {
    shopping: "Shopping",
    university: "Universidade",
    cooperative: "Cooperativa",
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
            <div>
              <h1 className="text-xl font-bold">EcoTech Belém</h1>
              <p className="text-xs text-green-100">Tecnologia da Amazônia</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <EcoModeToggle />
            <button
              onClick={() => navigate("/")}
              className="p-2 hover:bg-white/20 rounded-full transition"
              title="Sobre o app"
              aria-label="Sobre o app"
            >
              <Info className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate("/design-system")}
              className="p-2 hover:bg-white/20 rounded-full transition"
              title="Design System"
            >
              <Palette className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Eco Mode Info Modal */}
      <EcoModeInfo />

      {/* Map Area */}
      <div className="flex-1 relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-black dark:to-gray-800 overflow-hidden">
        {/* Amazon Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-5 w-96 h-96 bg-[var(--eco-amazon)] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-5 w-80 h-80 bg-[var(--eco-tech-gray)] rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500 rounded-full blur-3xl" />
        </div>

        {/* Map Grid - Amazonia Tech Style */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(27, 63, 34, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(27, 63, 34, 0.15) 1px, transparent 1px),
            linear-gradient(rgba(43, 43, 43, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(43, 43, 43, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px'
        }} />

        {/* Location Markers */}
        {locations.map((location, index) => {
          const Icon = location.icon;
          return (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                left: location.x,
                top: location.y,
              }}
              whileHover={{ scale: 1.15 }}
            >
              <div className="relative">
                {/* Pulse Animation */}
                <motion.div
                  className={`absolute inset-0 -m-4 bg-gradient-to-r ${typeColors[location.type]} rounded-full opacity-20`}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />

                {/* Pin Icon */}
                <div className={`relative bg-gradient-to-br ${typeColors[location.type]} p-3 rounded-xl shadow-xl border-2 border-white`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Info Popup */}
                <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 min-w-[220px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 border-2 border-gray-100 dark:border-gray-700">
                  <Badge variant="info" size="sm" className="mb-2">
                    {typeLabels[location.type]}
                  </Badge>
                  <h4 className="font-bold text-sm text-[var(--eco-tech-gray)] dark:text-white mb-2">
                    {location.name}
                  </h4>
                  <div className="space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                    <p className="flex items-start gap-1">
                      <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                      <span>{location.address}</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <Info className="w-3 h-3 flex-shrink-0" />
                      <span>{location.hours}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => window.open(location.mapUrl, '_blank')}
                    className="mt-3 w-full bg-gradient-to-r from-[var(--eco-amazon)] to-[var(--eco-amazon-dark)] text-white text-xs py-2 px-3 rounded-lg font-semibold hover:shadow-lg transition pointer-events-auto"
                  >
                    Ver no Mapa
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* GPS Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute top-20 right-4 z-10"
        >
          <GPSButton
            variant="locate"
            active={gpsActive}
            onClick={() => setGpsActive(!gpsActive)}
            label="Localizar"
          />
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute top-20 left-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 border-2 border-gray-100 dark:border-gray-700 z-10"
        >
          <h4 className="font-bold text-xs text-[var(--eco-tech-gray)] dark:text-white mb-3">
            Tipos de Ponto
          </h4>
          <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Shoppings</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Universidades</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span>Cooperativas</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Sheet */}
        <BottomSheet locations={locations} />
      </div>

      {/* Bottom Navigation */}
      <div className="bg-gradient-to-r from-[var(--eco-tech-gray)] to-black dark:from-black dark:to-gray-900 border-t-2 border-[var(--eco-amazon)] p-4 flex justify-around shadow-2xl relative z-30">
        <button
          onClick={() => navigate("/home")}
          className="flex flex-col items-center gap-1 text-white transition-transform duration-200 hover:scale-110"
        >
          <div className="p-2 rounded-xl bg-gradient-to-br from-[var(--eco-amazon)] to-[var(--eco-amazon-dark)]">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <span className="text-xs font-bold">Mapa</span>
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
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
        >
          <div className="p-2 rounded-xl bg-gray-700 hover:bg-[var(--eco-amazon)] transition-colors group">
            <Heart className="w-5 h-5 group-hover:text-white" />
          </div>
          <span className="text-xs font-semibold">Doações</span>
        </button>
      </div>
    </motion.div>
  );
}
