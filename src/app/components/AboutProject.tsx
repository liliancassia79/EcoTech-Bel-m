import { motion } from "motion/react";
import { ArrowLeft, Heart, Leaf, MapPin, Recycle, Shield, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";
import { ActionButton } from "./design-system";

const features = [
  {
    title: "Reciclagem inteligente",
    text: "Conecta moradores, pontos de coleta e instituições para garantir uma destinação adequada de eletrônicos e resíduos tecnológicos.",
    icon: Recycle,
  },
  {
    title: "Segurança digital",
    text: "Ensina práticas de sanitização e cuidado com dados antes de doar, reciclar ou descartar equipamentos.",
    icon: Shield,
  },
  {
    title: "Impacto social",
    text: "Promove doações e reaproveitamento de hardware para estudantes, comunidades e projetos locais da região de Belém.",
    icon: Heart,
  },
];

const stats = [
  { label: "Histórico local", value: "Belém / PA" },
  { label: "Foco", value: "Tecnologia + sustentabilidade" },
  { label: "Objetivo", value: "Reduzir lixo eletrônico" },
];

export default function AboutProject() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--eco-light-gray)] to-white dark:from-gray-900 dark:to-black text-[var(--eco-tech-gray)] dark:text-white">
      <header className="bg-gradient-to-r from-[var(--eco-amazon)] via-[var(--eco-amazon-light)] to-[var(--eco-amazon-dark)] text-white p-4 shadow-lg">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <button
            onClick={() => navigate("/home")}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium hover:bg-white/20 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </button>

          <div className="flex items-center gap-2 text-sm font-medium text-emerald-100">
            <Sparkles className="h-4 w-4" />
            Sobre o projeto
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-emerald-200 bg-white p-6 shadow-lg dark:border-emerald-900 dark:bg-gray-950"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
              <Recycle className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
                EcoTech Belém
              </p>
              <h1 className="text-3xl font-bold">Tecnologia para a Amazônia</h1>
            </div>
          </div>

          <p className="text-base leading-7 text-gray-700 dark:text-gray-300">
            O EcoTech Belém é uma solução digital pensada para conectar pessoas, empresas e instituições que
            querem reduzir o impacto ambiental do descarte de eletrônicos em Belém. A ideia central é transformar a
            preocupação com resíduos tecnológicos em uma ação simples, útil e acessível para a comunidade.
          </p>
        </motion.section>

        <section className="grid gap-4 md:grid-cols-3">
          {features.map(({ title, text, icon: Icon }) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-950"
            >
              <div className="mb-4 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mb-2 text-xl font-bold">{title}</h2>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">{text}</p>
            </motion.article>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-dashed border-emerald-300 bg-emerald-50 p-4 text-center dark:border-emerald-700 dark:bg-emerald-950/30"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-bold text-[var(--eco-tech-gray)] dark:text-white">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-950"
          >
            <div className="mb-4 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-emerald-600" />
              <h2 className="text-xl font-bold">Objetivo do projeto</h2>
            </div>

            <ul className="space-y-4 text-sm leading-6 text-gray-700 dark:text-gray-300">
              <li>• Facilitar o encontro entre moradores e pontos de coleta de equipamentos eletrônicos.</li>
              <li>• Incentivar a doação de hardware em bom estado para estudantes e comunidades locais.</li>
              <li>• Dar orientações sobre higiene digital e proteção de dados antes do descarte.</li>
              <li>• Criar uma cultura de reutilização, segurança e responsabilidade ambiental.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-gray-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 dark:border-gray-700 dark:from-emerald-950/20 dark:to-gray-900"
          >
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
              <h2 className="text-xl font-bold">Contexto local</h2>
            </div>

            <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
              Belém tem uma grande potencialidade de transformação quando a tecnologia é pensada com responsabilidade.
              O EcoTech Belém busca unir sustentabilidade, inclusão digital e segurança da informação em uma experiência
              conectada ao contexto da região amazônica.
            </p>
          </motion.div>
        </section>

        <section className="rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm dark:border-emerald-900 dark:bg-gray-950">
          <h2 className="mb-4 text-2xl font-bold">Como participar</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-900">
              <p className="mb-2 text-sm font-bold text-emerald-700 dark:text-emerald-300">1. Localize</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Descubra pontos de coleta próximos da sua região.</p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-900">
              <p className="mb-2 text-sm font-bold text-emerald-700 dark:text-emerald-300">2. Proteja</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Antes de doar ou descartar, siga os passos de sanitização de dados.</p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-900">
              <p className="mb-2 text-sm font-bold text-emerald-700 dark:text-emerald-300">3. Reaproveite</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Doe equipamentos úteis e ajude estudantes e comunidades a acessarem tecnologia.</p>
            </div>
          </div>
        </section>

        <div className="pb-4">
          <ActionButton variant="primary" onClick={() => navigate("/home")} fullWidth>
            Explorar o app
          </ActionButton>
        </div>
      </main>
    </div>
  );
}
