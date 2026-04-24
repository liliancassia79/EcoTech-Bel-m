import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Shield,
  Terminal,
  AlertCircle,
  MapPin,
  Navigation,
  Trash2,
  HardDrive,
  Check,
  ArrowLeft,
} from "lucide-react";
import { motion } from "motion/react";
import {
  SecurityCard,
  ActionButton,
  GPSButton,
  TutorialCard,
  Badge,
} from "./design-system";

export default function DesignSystemDemo() {
  const navigate = useNavigate();
  const [gpsActive, setGpsActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGPSClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGpsActive(!gpsActive);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--eco-light-gray)] to-white p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <button
          onClick={() => navigate("/home")}
          className="flex items-center gap-2 text-[var(--eco-forest)] hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao App
        </button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-[var(--eco-graphite)] mb-2">
            EcoTech Design System
          </h1>
          <p className="text-gray-600">
            Componentes de sustentabilidade e segurança digital
          </p>
          <div className="flex gap-2 justify-center mt-4">
            <Badge variant="success" icon={<Check className="w-3 h-3" />}>
              Verde Floresta #2D5A27
            </Badge>
            <Badge variant="default">Grafite #1A1A1A</Badge>
            <Badge variant="info">Inter & JetBrains Mono</Badge>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Color Palette */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--eco-graphite)] mb-4">
            🎨 Paleta de Cores
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <div className="w-full h-24 rounded-xl bg-[var(--eco-forest)] shadow-md" />
              <p className="text-sm font-semibold">Verde Floresta</p>
              <code className="text-xs font-['JetBrains_Mono']">#2D5A27</code>
            </div>
            <div className="space-y-2">
              <div className="w-full h-24 rounded-xl bg-[var(--eco-graphite)] shadow-md" />
              <p className="text-sm font-semibold">Grafite</p>
              <code className="text-xs font-['JetBrains_Mono']">#1A1A1A</code>
            </div>
            <div className="space-y-2">
              <div className="w-full h-24 rounded-xl bg-[var(--eco-light-gray)] border-2 border-gray-200 shadow-md" />
              <p className="text-sm font-semibold">Cinza Claro</p>
              <code className="text-xs font-['JetBrains_Mono']">#F5F5F5</code>
            </div>
            <div className="space-y-2">
              <div className="w-full h-24 rounded-xl bg-[var(--eco-success)] shadow-md" />
              <p className="text-sm font-semibold">Sucesso</p>
              <code className="text-xs font-['JetBrains_Mono']">#4CAF50</code>
            </div>
            <div className="space-y-2">
              <div className="w-full h-24 rounded-xl bg-[var(--eco-danger)] shadow-md" />
              <p className="text-sm font-semibold">Perigo</p>
              <code className="text-xs font-['JetBrains_Mono']">#F44336</code>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--eco-graphite)] mb-4">
            📝 Tipografia
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-md space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">Inter - Interface</p>
              <h1 className="text-4xl font-bold">Heading 1</h1>
              <h2 className="text-3xl font-bold">Heading 2</h2>
              <h3 className="text-2xl font-semibold">Heading 3</h3>
              <p className="text-base">Parágrafo com fonte Inter para leitura fluida</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">JetBrains Mono - Código</p>
              <code className="font-['JetBrains_Mono'] text-sm bg-[var(--eco-graphite)] text-green-400 p-2 rounded block">
                shred -vfz -n 10 arquivo_sensivel.txt
              </code>
            </div>
          </div>
        </section>

        {/* Security Cards */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--eco-graphite)] mb-4">
            🛡️ Security Cards
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <SecurityCard
              icon={<Shield className="w-5 h-5" />}
              title="Proteção de Dados"
              description="Aprenda a proteger seus dados antes de reciclar equipamentos"
              onClick={() => alert("Card clicado!")}
            />
            <SecurityCard
              icon={<AlertCircle className="w-5 h-5" />}
              title="Alerta de Segurança"
              description="Importante: Sempre faça backup antes de apagar dados"
              variant="warning"
            />
            <SecurityCard
              icon={<Trash2 className="w-5 h-5" />}
              title="Remoção Segura"
              description="Comandos para apagar dados de forma permanente"
              variant="danger"
            />
            <SecurityCard
              icon={<Check className="w-5 h-5" />}
              title="Verificação Completa"
              description="Seus dados foram protegidos com sucesso"
              variant="success"
            />
          </div>
        </section>

        {/* Action Buttons */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--eco-graphite)] mb-4">
            🎯 Action Buttons
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-md space-y-4">
            <div className="flex flex-wrap gap-3">
              <ActionButton
                variant="primary"
                icon={<MapPin className="w-5 h-5" />}
              >
                Primary Button
              </ActionButton>
              <ActionButton variant="secondary">Secondary Button</ActionButton>
              <ActionButton variant="outline">Outline Button</ActionButton>
              <ActionButton variant="danger">Danger Button</ActionButton>
            </div>
            <div className="flex flex-wrap gap-3">
              <ActionButton size="sm">Small</ActionButton>
              <ActionButton size="md">Medium</ActionButton>
              <ActionButton size="lg">Large</ActionButton>
            </div>
            <div>
              <ActionButton loading variant="primary" fullWidth>
                Loading State
              </ActionButton>
            </div>
          </div>
        </section>

        {/* GPS Buttons */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--eco-graphite)] mb-4">
            📍 GPS Buttons
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex flex-wrap gap-4 justify-center">
              <GPSButton
                variant="locate"
                active={gpsActive}
                loading={loading}
                onClick={handleGPSClick}
              />
              <GPSButton
                variant="navigate"
                label="Navegar"
                onClick={() => alert("Navegação iniciada")}
              />
              <GPSButton
                variant="locate"
                label="Minha Localização"
                active={gpsActive}
                onClick={handleGPSClick}
              />
            </div>
          </div>
        </section>

        {/* Tutorial Cards */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--eco-graphite)] mb-4">
            📚 Tutorial Cards
          </h2>
          <div className="space-y-4">
            <TutorialCard
              icon={<Terminal className="w-5 h-5" />}
              title="Apagar Dados com Shred"
              description="Use o comando shred para sobrescrever arquivos sensíveis"
              command="shred -vfz -n 10 arquivo_sensivel.txt"
              explanation="-v = verbose, -f = força permissões, -z = zera no final, -n 10 = 10 passadas"
              steps={[
                "Identifique o arquivo que contém dados sensíveis",
                "Execute o comando shred com as flags apropriadas",
                "Verifique se o arquivo foi removido com ls -la",
              ]}
            />
            <TutorialCard
              icon={<HardDrive className="w-5 h-5" />}
              title="Limpar Disco com DD"
              description="Sobrescreva todo o disco com dados aleatórios"
              command="sudo dd if=/dev/urandom of=/dev/sdX bs=1M status=progress"
              explanation="CUIDADO: Isso apaga TUDO no disco. Verifique o dispositivo correto!"
              steps={[
                "Liste os discos com lsblk",
                "Identifique o disco correto (ex: /dev/sdb)",
                "Execute o comando dd com muito cuidado",
                "Aguarde a conclusão (pode demorar horas)",
              ]}
            />
          </div>
        </section>

        {/* Badges */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--eco-graphite)] mb-4">
            🏷️ Badges
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-md space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="info">Info</Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
              <Badge size="lg">Large</Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="success" icon={<Check className="w-3 h-3" />}>
                Com Ícone
              </Badge>
              <Badge variant="danger" icon={<AlertCircle className="w-3 h-3" />}>
                Alerta
              </Badge>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-12 text-center text-sm text-gray-500">
        <p>
          Design System criado para EcoTech Belém - Sustentabilidade e Segurança
          Digital
        </p>
      </div>
    </div>
  );
}
