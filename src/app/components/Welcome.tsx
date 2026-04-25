import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  Recycle,
  MapPin,
  Shield,
  Heart,
  Leaf,
  ArrowRight,
  Sparkles,
  TreePine,
} from "lucide-react";

export default function Welcome() {
  const navigate = useNavigate();

  const features = [
    {
      icon: MapPin,
      title: "Mapa de Coleta",
      description:
        "Encontre pontos de coleta de eletrônicos em Belém: shoppings, universidades e cooperativas parceiras.",
      color: "from-emerald-500 to-emerald-700",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-300",
    },
    {
      icon: Shield,
      title: "Sanitização Segura",
      description:
        "Aprenda a apagar seus dados de forma definitiva antes de doar ou descartar com tutoriais passo a passo.",
      color: "from-slate-600 to-slate-800",
      iconBg: "bg-slate-500/10",
      iconColor: "text-slate-200",
    },
    {
      icon: Heart,
      title: "Mural de Doações",
      description:
        "Doe ou receba equipamentos que ainda funcionam e contribua para a inclusão digital na Amazônia.",
      color: "from-amber-500 to-orange-600",
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-300",
    },
  ];

  const stats = [
    { value: "6+", label: "Pontos de coleta" },
    { value: "100%", label: "Dados seguros" },
    { value: "0", label: "Lixo no rio" },
  ];

  return (
    <div className="size-full overflow-y-auto bg-gradient-to-br from-[var(--eco-amazon-dark)] via-[var(--eco-amazon)] to-[var(--eco-tech-gray)] text-white">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute -top-24 -left-16 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute top-1/3 -right-20 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 flex min-h-full flex-col px-6 pt-12 pb-8">
        {/* Brand row */}
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-emerald-400/30 blur-xl" />
              <div className="relative rounded-2xl bg-white/10 p-2.5 backdrop-blur-sm border border-white/10">
                <Recycle className="w-6 h-6 text-emerald-200" />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold tracking-tight">EcoTech Belém</p>
              <p className="text-xs text-emerald-200/80">Tecnologia da Amazônia</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/home")}
            className="text-xs font-medium text-emerald-100/80 hover:text-white transition-colors"
          >
            Pular
          </button>
        </motion.header>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex flex-col items-start gap-5"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-100">
              Reciclagem inteligente
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance">
            Sua tecnologia de volta{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
              à floresta
            </span>
            , sem deixar rastros.
          </h1>

          <p className="text-base leading-relaxed text-emerald-50/85 text-pretty">
            O EcoTech Belém conecta moradores da capital paraense a pontos de
            coleta de lixo eletrônico, ensina a apagar dados com segurança e
            promove a doação de equipamentos para quem mais precisa.
          </p>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid grid-cols-3 gap-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm"
            >
              <p className="text-2xl font-bold text-emerald-200">{stat.value}</p>
              <p className="mt-1 text-[11px] leading-tight text-emerald-50/70">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.section>

        {/* Features */}
        <section className="mt-10 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <TreePine className="w-4 h-4 text-emerald-300" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-100/90">
              O que você pode fazer
            </h2>
          </div>

          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <div
                  aria-hidden="true"
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${feature.color} opacity-20 blur-2xl transition-opacity group-hover:opacity-30`}
                />
                <div className="relative flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 rounded-xl ${feature.iconBg} p-2.5 ring-1 ring-white/10`}
                  >
                    <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-emerald-50/75 text-pretty">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </section>

        {/* Mission card */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 rounded-2xl border border-emerald-300/20 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 p-5 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-emerald-300" />
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
              Nossa missão
            </p>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-emerald-50/90 text-pretty">
            Reduzir o impacto ambiental do descarte de eletrônicos na Amazônia
            ao mesmo tempo em que protegemos a privacidade dos cidadãos e
            ampliamos o acesso à tecnologia.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <button
            onClick={() => navigate("/splash")}
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-4 font-bold text-[var(--eco-amazon-dark)] shadow-2xl shadow-emerald-900/40 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">Começar agora</span>
            <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
            <div
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </button>

          <p className="text-center text-[11px] text-emerald-100/60">
            Powered by Pixel e Papel · Belém · Pará
          </p>
        </motion.div>
      </div>
    </div>
  );
}
