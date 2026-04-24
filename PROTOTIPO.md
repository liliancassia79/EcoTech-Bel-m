# 📱 Protótipo de Alta Fidelidade - EcoTech Belém

## 🎯 Visão Geral

Protótipo mobile de alta fidelidade para aplicativo de reciclagem inteligente de tecnologia, focado em sustentabilidade e segurança da informação.

## 🎨 Design System

### Paleta de Cores
- **Verde Floresta** (`#2D5A27`) - Ações sustentáveis e elementos principais
- **Grafite** (`#1A1A1A`) - Seções técnicas e segurança
- **Cinza Claro** (`#F5F5F5`) - Backgrounds e elementos secundários

### Tipografia
- **Inter** - Sans-serif para interface e leitura
- **JetBrains Mono** - Monoespaçada para comandos de código

### Componentes Customizados
Acesse `/design-system` para ver todos os componentes em ação.

## 📲 Telas do Protótipo

### 1. Splash Screen (/)
**Funcionalidades:**
- Animação de entrada com logo rotativo
- Efeitos de pulse e gradiente
- Loading bar animado
- Transição automática após 3 segundos
- Background com partículas animadas

**Elementos Visuais:**
- Ícone de reciclagem com animação 3D
- Gradiente verde floresta degradê
- Badges de features (Sustentável, Seguro, Digital)
- Branding "Powered by Pixel e Papel"

---

### 2. Home - Mapa Interativo (/home)
**Funcionalidades:**
- Mapa estilizado de Belém com grid customizado
- 3 pontos de coleta interativos (Umarizal, Marco, Batista Campos)
- Popups informativos com endereço e horário ao hover
- Botão GPS com animação de pulso
- Badges de status (Aberto/Fechado)
- Contador de pontos de coleta
- Legenda do mapa
- Navegação inferior com estados ativos

**Elementos Visuais:**
- Background gradiente verde/azul
- Marcadores animados com pulse effect
- Cards informativos com glassmorphism
- Ícones de localização em gradiente
- Botões de navegação com micro-interações

**Interações:**
- Hover nos marcadores revela detalhes
- Clique no GPS ativa/desativa localização
- Animações de entrada escalonadas
- Transições suaves entre telas

---

### 3. Sanitização de Dados (/security)
**Funcionalidades:**
- Tutorial cards expansíveis com comandos
- 3 tutoriais principais:
  1. **Shred** - Apagar arquivos individuais
  2. **DD** - Limpar disco completo
  3. **Lsblk** - Verificar dispositivos
- Popup modal com guia completo
- Código em sintaxe highlighting (verde terminal)
- Checklist de segurança
- Warnings e alertas visuais
- Passos numerados para cada tutorial

**Elementos Visuais:**
- Header gradiente grafite para seção técnica
- Cards com border-left colorido (warning/danger)
- Blocos de código com fundo preto e texto verde
- Ícones contextuais (Terminal, HardDrive, CheckCircle)
- Badges de importância
- Modal fullscreen com glassmorphism

**Interações:**
- Cards expansíveis ao clicar
- Modal overlay com backdrop blur
- Animações de slide-down para conteúdo
- Copy-to-clipboard nos comandos (futuro)

---

### 4. Mural de Doações (/donations)
**Funcionalidades:**
- Grid de produtos doados
- Filtro por categoria (Todos, Monitores, Computadores, Periféricos, Componentes)
- 6 itens de exemplo com fotos reais
- Badges de condição (Novo, Bom estado, Usado, Para peças)
- Informações do doador e localização
- Botões de ação duplos (Tenho Interesse + Ver Detalhes)
- Contador dinâmico de itens filtrados
- Estado vazio quando não há resultados

**Elementos Visuais:**
- Cards com hover effect e scale
- Imagens com fallback placeholder
- Filtros em chips horizontais
- Gradientes em headers
- Ícones categoriais (Monitor, CPU, Mouse, Keyboard)
- Layout responsivo com grid

**Interações:**
- Filtro dinâmico por categoria
- Animação de entrada dos cards
- Hover states nos botões
- Clique manifesta interesse
- Scroll horizontal nos filtros

---

## 🎭 Animações e Transições

### Motion Framework
Todas as telas usam **Framer Motion** para:
- Fade in/out entre páginas
- Spring animations nos botões
- Staggered children (entrada sequencial)
- Hover e tap states
- Loading states
- Pulse effects
- Glassmorphism

### Micro-interações
- Botões com scale ao hover (1.05-1.1)
- Cards com subtle lift (shadow)
- Ícones com rotate e bounce
- Loading spinners
- Progress bars
- Pulse animations nos badges

---

## 🧭 Navegação

### Bottom Navigation
Presente em todas as telas principais com:
- 3 opções: Mapa, Segurança, Doações
- Estado ativo com gradiente
- Ícones com background circular
- Labels descritivos
- Hover states
- Micro-animações ao clicar

### Flow de Usuário
```
Splash (3s auto) → Home → Segurança/Doações
                     ↑____________↓
```

---

## 📐 Layout e Responsividade

### Mobile First
- Viewport: 375px × 667px (iPhone SE base)
- Expandível até tablets
- Stack vertical
- Touch-friendly (44px minimum)
- Swipe gestures ready

### Grid System
- Cards: full-width mobile
- Filtros: horizontal scroll
- Tutoriais: stack vertical
- Mapa: aspect ratio preservado

---

## 🔒 Segurança e Privacidade

### Sanitização de Dados
- Tutoriais educativos
- Comandos Linux verificados
- Warnings claros
- Checklist de segurança
- Boas práticas destacadas

### UX de Segurança
- Cores de alerta (vermelho/amarelo)
- Ícones de aviso
- Confirmações em ações destrutivas
- Informações contextuais

---

## ♿ Acessibilidade

### WCAG AA Compliance
- Contraste mínimo 4.5:1
- Tamanhos de fonte legíveis (14px+)
- Áreas de toque 44×44px
- Estados de foco visíveis
- Labels descritivos
- Hierarquia semântica

### Recursos
- Alt text em imagens
- ARIA labels nos botões
- Navegação por teclado
- Screen reader friendly
- Cores não como único indicador

---

## 🚀 Tecnologias Utilizadas

### Core
- **React 18** - UI Library
- **TypeScript** - Type Safety
- **React Router 7** - Navegação
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animações

### Bibliotecas
- **Lucide React** - Ícones
- **Inter & JetBrains Mono** - Tipografia

### Build Tools
- **Vite 6** - Dev Server
- **pnpm** - Package Manager

---

## 📦 Estrutura de Arquivos

```
src/
├── app/
│   ├── components/
│   │   ├── design-system/      # Componentes reutilizáveis
│   │   │   ├── SecurityCard.tsx
│   │   │   ├── ActionButton.tsx
│   │   │   ├── GPSButton.tsx
│   │   │   ├── TutorialCard.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── index.ts
│   │   ├── SplashScreen.tsx    # Tela inicial
│   │   ├── Home.tsx            # Mapa interativo
│   │   ├── Security.tsx        # Sanitização
│   │   ├── Donations.tsx       # Mural de doações
│   │   └── DesignSystemDemo.tsx
│   ├── routes.tsx              # Configuração de rotas
│   └── App.tsx                 # Entry point
├── styles/
│   ├── fonts.css               # Google Fonts
│   └── theme.css               # CSS Variables
└── imports/                    # Assets
```

---

## 🎨 Guia de Estilo

### Botões
```tsx
// Primário - Ações principais
<ActionButton variant="primary">Ação</ActionButton>

// Secundário - Ações secundárias  
<ActionButton variant="secondary">Cancelar</ActionButton>

// Outline - Ações terciárias
<ActionButton variant="outline">Ver Mais</ActionButton>

// Danger - Ações destrutivas
<ActionButton variant="danger">Apagar</ActionButton>
```

### Cards
```tsx
// Tutorial Card
<TutorialCard
  title="Título"
  description="Descrição"
  command="comando"
  explanation="Explicação"
  steps={["Passo 1", "Passo 2"]}
/>

// Security Card
<SecurityCard
  icon={<Icon />}
  title="Título"
  description="Descrição"
  variant="default|danger|warning|success"
/>
```

### Badges
```tsx
<Badge variant="success">Aberto</Badge>
<Badge variant="warning">Usado</Badge>
<Badge variant="danger">Importante</Badge>
<Badge variant="info">Informação</Badge>
```

---

## 🔧 Customização

### Cores (theme.css)
```css
--eco-forest: #2D5A27;
--eco-graphite: #1A1A1A;
--eco-light-gray: #F5F5F5;
--eco-success: #4CAF50;
--eco-warning: #FF9800;
--eco-danger: #F44336;
```

### Fontes (fonts.css)
```css
@import url('Inter');
@import url('JetBrains Mono');
```

---

## 📈 Próximos Passos

### Features Planejadas
- [ ] Integração com API de mapas real
- [ ] Sistema de autenticação
- [ ] Chat entre doadores/receptores
- [ ] Notificações push
- [ ] Gamificação (pontos por reciclagem)
- [ ] QR Code para rastreamento
- [ ] Dashboard de impacto ambiental

### Melhorias UX
- [ ] Onboarding tutorial
- [ ] Modo escuro
- [ ] Multilíngue (PT/EN)
- [ ] Gestos avançados
- [ ] Feedback háptico
- [ ] Offline mode

---

## 📝 Notas de Implementação

### Performance
- Lazy loading de imagens
- Code splitting por rota
- Memoização de componentes pesados
- Otimização de animações (GPU)

### SEO (Futuro Web)
- Meta tags dinâmicas
- Schema.org markup
- Sitemap
- Open Graph

### Analytics
- Eventos de navegação
- Cliques em CTAs
- Taxa de conversão doações
- Heatmaps (futuro)

---

## 🤝 Contribuindo

Este protótipo foi desenvolvido como parte do projeto EcoTech Belém - Reciclagem Inteligente de Tecnologia.

**Desenvolvido por:** Pixel e Papel  
**Data:** Abril 2026  
**Versão:** 1.0.0 (Protótipo de Alta Fidelidade)

---

## 📄 Licença

Protótipo educacional - EcoTech Belém © 2026
