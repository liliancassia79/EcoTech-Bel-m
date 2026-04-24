# EcoTech Belém - Design System

## 🎨 Paleta de Cores

### Cores Principais
- **Verde Floresta** (`#2D5A27`) - Cor primária, representa sustentabilidade e natureza
- **Grafite** (`#1A1A1A`) - Cor de texto principal, representa tecnologia e segurança
- **Cinza Claro** (`#F5F5F5`) - Cor de fundo, suavidade e clareza

### Cores Complementares
- **Verde Floresta Claro** (`#3A7234`) - Variação mais clara para hover e accent
- **Verde Floresta Escuro** (`#1F3E1B`) - Variação mais escura para gradientes
- **Verde Sucesso** (`#4CAF50`) - Feedback positivo
- **Laranja Aviso** (`#FF9800`) - Alertas e avisos
- **Vermelho Perigo** (`#F44336`) - Erros e ações destrutivas

## 📝 Tipografia

### Fontes
- **Inter** - Fonte principal para leitura e interface
  - Pesos: 300, 400, 500, 600, 700, 800
  - Uso: Títulos, parágrafos, botões, labels
  
- **JetBrains Mono** - Fonte monoespaçada para código
  - Pesos: 400, 500, 600, 700
  - Uso: Comandos, snippets de código, terminal

### Escalas de Tamanho
- **Small (sm)**: 14px - Texto secundário, labels
- **Base (md)**: 16px - Texto principal
- **Large (lg)**: 18px - Títulos de seção
- **Extra Large (xl)**: 20px - Títulos de página
- **2XL**: 24px - Títulos principais

## 🧩 Componentes

### SecurityCard
Card para exibir tutoriais e informações de segurança.

**Props:**
- `icon`: Ícone do card
- `title`: Título do tutorial
- `description`: Descrição breve
- `onClick`: Função de callback ao clicar
- `variant`: "default" | "danger" | "warning" | "success"

**Uso:**
```tsx
import { SecurityCard } from "./components/design-system";
import { Shield } from "lucide-react";

<SecurityCard
  icon={<Shield className="w-5 h-5" />}
  title="Proteção de Dados"
  description="Aprenda a proteger seus dados antes de reciclar"
  onClick={() => handleClick()}
  variant="default"
/>
```

### ActionButton
Botão de ação principal do sistema.

**Props:**
- `children`: Conteúdo do botão
- `icon`: Ícone opcional
- `onClick`: Função de callback
- `variant`: "primary" | "secondary" | "outline" | "danger"
- `size`: "sm" | "md" | "lg"
- `loading`: Estado de carregamento
- `disabled`: Estado desabilitado
- `fullWidth`: Largura total

**Uso:**
```tsx
import { ActionButton } from "./components/design-system";
import { MapPin } from "lucide-react";

<ActionButton
  variant="primary"
  size="md"
  icon={<MapPin className="w-5 h-5" />}
  onClick={() => handleLocate()}
>
  Localizar Pontos
</ActionButton>
```

### GPSButton
Botão especializado para ações de GPS e localização.

**Props:**
- `onClick`: Função de callback
- `loading`: Estado de carregamento
- `active`: Estado ativo (pulsante)
- `variant`: "locate" | "navigate"
- `label`: Texto do botão (opcional)

**Uso:**
```tsx
import { GPSButton } from "./components/design-system";

<GPSButton
  variant="locate"
  active={isLocating}
  loading={isLoading}
  onClick={() => getCurrentLocation()}
  label="Minha Localização"
/>
```

### TutorialCard
Card expansível para tutoriais passo a passo.

**Props:**
- `title`: Título do tutorial
- `description`: Descrição breve
- `command`: Comando a ser executado (opcional)
- `explanation`: Explicação do comando
- `steps`: Array de passos do tutorial
- `icon`: Ícone customizado (padrão: Terminal)

**Uso:**
```tsx
import { TutorialCard } from "./components/design-system";

<TutorialCard
  title="Apagar Dados com Shred"
  description="Sobrescreva arquivos sensíveis"
  command="shred -vfz -n 10 arquivo.txt"
  explanation="Este comando sobrescreve o arquivo 10 vezes antes de apagá-lo"
  steps={[
    "Identifique o arquivo a ser apagado",
    "Execute o comando shred",
    "Verifique se o arquivo foi removido"
  ]}
/>
```

### Badge
Badge para status e categorização.

**Props:**
- `children`: Conteúdo do badge
- `variant`: "default" | "success" | "warning" | "danger" | "info"
- `size`: "sm" | "md" | "lg"
- `icon`: Ícone opcional

**Uso:**
```tsx
import { Badge } from "./components/design-system";
import { Check } from "lucide-react";

<Badge 
  variant="success" 
  size="md"
  icon={<Check className="w-3 h-3" />}
>
  Verificado
</Badge>
```

## 🎭 Variantes e Estados

### Botões
- **Primary**: Ação principal (verde floresta com gradiente)
- **Secondary**: Ação secundária (cinza claro)
- **Outline**: Ação terciária (borda verde)
- **Danger**: Ação destrutiva (vermelho)

### Cards
- **Default**: Informação padrão
- **Danger**: Avisos críticos de segurança
- **Warning**: Alertas importantes
- **Success**: Confirmações e sucessos

## 🌈 Gradientes

### Gradiente Principal
```css
background: linear-gradient(to right, var(--eco-forest), var(--eco-forest-dark));
```

### Gradiente de Cards
```css
background: linear-gradient(to bottom right, var(--eco-forest), var(--eco-forest-dark));
```

## 📐 Espaçamento

### Padding
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)

### Border Radius
- **sm**: 0.5rem (8px)
- **md**: 0.75rem (12px)
- **lg**: 1rem (16px)
- **xl**: 1.5rem (24px)
- **full**: 9999px (circular)

## 🎨 Acessibilidade

### Contraste
- Todos os textos têm contraste mínimo de 4.5:1 (WCAG AA)
- Botões e elementos interativos têm contraste de 3:1

### Estados de Foco
- Todos os elementos interativos têm estado de foco visível
- Anel de foco: `ring-2 ring-[var(--eco-forest)] ring-offset-2`

### Tamanho de Toque
- Botões e elementos interativos têm mínimo de 44x44px
- Espaçamento adequado entre elementos clicáveis

## 🔄 Animações

### Transições
- **Rápida**: 150ms - Hover de botões
- **Normal**: 300ms - Abertura de modais
- **Lenta**: 500ms - Animações complexas

### Tipos de Easing
- **ease-in-out**: Transições suaves
- **spring**: Animações com bounce (Motion)

## 📱 Responsividade

### Breakpoints
- **sm**: 640px - Mobile
- **md**: 768px - Tablet
- **lg**: 1024px - Desktop
- **xl**: 1280px - Desktop grande

### Grid
- Mobile: 1 coluna
- Tablet: 2 colunas
- Desktop: 3-4 colunas

## 🎯 Boas Práticas

1. **Consistência**: Use sempre os componentes do design system
2. **Hierarquia**: Mantenha hierarquia visual clara com tamanhos e pesos
3. **Espaçamento**: Use a escala de espaçamento definida
4. **Cores**: Use apenas as cores definidas no sistema
5. **Tipografia**: Use Inter para UI e JetBrains Mono apenas para código
6. **Acessibilidade**: Sempre teste com leitores de tela e navegação por teclado
7. **Performance**: Otimize imagens e use animações com moderação
