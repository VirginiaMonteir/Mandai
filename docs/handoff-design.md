# Handoff de Design - Mandaí

## Visão Geral

Este documento fornece as especificações completas de design para os desenvolvedores implementarem os mockups criados para o aplicativo Mandaí. Ele inclui detalhes sobre paleta de cores, tipografia, componentes, espaçamentos e interações.

## Paleta de Cores

### Cores Primárias
- **Laranja Vibrante (Primária)**: #FF5722
- **Verde Escuro (Secundária)**: #2E7D32
- **Amarelo Dourado (Acento)**: #FFD700

### Cores Neutras
- **Branco (Fundo principal)**: #FFFFFF
- **Cinza Claro (Fundos secundários)**: #F5F5F5
- **Cinza Escuro (Texto principal)**: #333333
- **Cinza Médio (Bordas e texto secundário)**: #CCCCCC

### Estados Interativos
- **Hover Primário**: #E64A19 (versão escura do laranja)
- **Hover Secundário**: #1B5E20 (versão escura do verde)
- **Erro**: #F44336
- **Sucesso**: #4CAF50

## Tipografia

### Fonte Principal
- **Família**: 'Open Sans', sans-serif
- **CDN**: `@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');`

### Hierarquia Tipográfica
- **Títulos H1**: 32px, Negrito (700), #333333
- **Títulos H2**: 24px, Médio (500), #333333
- **Títulos H3**: 20px, Médio (500), #333333
- **Subtítulos**: 18px, Regular (400), #333333
- **Corpo do Texto**: 16px, Regular (400), #333333
- **Texto Secundário**: 14px, Regular (400), #666666
- **Legendas/Captions**: 12px, Regular (400), #999999

## Ícones

### Biblioteca de Ícones
- **Material Icons** para elementos de interface
- **Fonte**: `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`
- **Exemplos**: search, shopping_cart, favorite, star, arrow_forward, add, remove

### Ícones Personalizados
- Ícones específicos para categorias de comida (pizza, sushi, etc.)
- Devem estar disponíveis em formato SVG
- Tamanho padrão: 24px × 24px

## Componentes

### 1. Header

#### Propriedades
- **Altura**: 80px (desktop), 70px (tablet), variável (mobile)
- **Background**: #FFFFFF
- **Sombra**: `box-shadow: 0 2px 10px rgba(0,0,0,0.1)`
- **Z-index**: 100

#### Elementos
1. **Logo**:
   - Texto: "Mandaí"
   - Cor: #FF5722
   - Tamanho: 24px
   - Peso: Negrito (700)

2. **Barra de Busca**:
   - Altura: 40px
   - Border-radius: 20px
   - Placeholder: "Buscar restaurantes ou pratos"
   - Ícone de busca à esquerda (Material Icons: search)

3. **Ícone de Sacola**:
   - Ícone: shopping_cart (Material Icons)
   - Tamanho: 24px
   - Cor: #333333

4. **Contador da Sacola**:
   - Background: #FF5722
   - Cor do texto: #FFFFFF
   - Border-radius: 50%
   - Min-width: 20px
   - Height: 20px
   - Font-size: 12px
   - Position: absolute, top: -5px, right: -5px

### 2. Seção de Promoções em Destaque

#### Propriedades
- **Altura**: 120px
- **Background**: gradiente linear de #FF5722 para #FF4500
- **Border-radius**: 8px

#### Conteúdo
1. **Texto Principal**:
   - Cor: #FFFFFF
   - Tamanho: 20px
   - Peso: Negrito (700)

2. **Botão CTA "Ver promoções"**:
   - Background: #FFFFFF
   - Cor do texto: #FF5722
   - Border-radius: 4px
   - Padding: 8px 16px
   - Hover: background #F0F0F0

### 3. Seção de Categorias Horizontais

#### Propriedades
- **Altura**: 100px
- **Overflow-x**: auto
- **Scrollbar**: estilizada ou oculta

#### Itens de Categoria
1. **Ícone**:
   - Tamanho: 40px × 40px
   - Cor: #FF5722

2. **Texto**:
   - Cor: #333333
   - Tamanho: 14px
   - Peso: Regular (400)

3. **Hover Effect**:
   - Transform: translateY(-2px)
   - Transition: all 0.3s ease
   - Box-shadow: 0 4px 8px rgba(0,0,0,0.1)

### 4. Lista de Restaurantes

#### Layout
- **Grade**: 4 colunas (desktop), 2 colunas (tablet), 1 coluna (mobile)
- **Gap entre cards**: 20px

#### Card de Restaurante
1. **Imagem**:
   - Width: 100%
   - Height: 160px
   - Object-fit: cover
   - Border-radius: 8px 8px 0 0

2. **Informações**:
   - Padding: 15px
   - Background: #FFFFFF
   - Border-radius: 0 0 8px 8px

3. **Nome do Restaurante**:
   - Cor: #333333
   - Tamanho: 18px
   - Peso: Negrito (700)

4. **Categoria e Tempo de Entrega**:
   - Cor: #666666
   - Tamanho: 14px
   - Peso: Regular (400)

5. **Hover Effect**:
   - Transform: translateY(-4px)
   - Box-shadow: 0 8px 16px rgba(0,0,0,0.15)
   - Transition: all 0.3s ease

### 5. Popup de Adicionar Item

#### Propriedades
- **Overlay**:
  - Background: rgba(0,0,0,0.5)
  - Z-index: 1000
  - Position: fixed, top: 0, left: 0, width: 100%, height: 100%

- **Modal**:
  - Background: #FFFFFF
  - Border-radius: 8px
  - Max-width: 500px
  - Width: 90%
  - Position: relative
  - Top: 50%, left: 50%, transform: translate(-50%, -50%)

#### Conteúdo
1. **Imagem do Item**: altura fixa de 200px, object-fit cover
2. **Nome do Item**: 20px, Negrito
3. **Descrição**: 16px, #666666
4. **Preço**: 18px, Negrito, #FF5722
5. **Selector de Quantidade**:
   - Botões "-" e "+" com background #F5F5F5
   - Input central com bordas em ambos os lados
   - Tamanho: 40px × 40px
6. **Botão "Adicionar à Sacola"**:
   - Background: #FF5722
   - Cor: #FFFFFF
   - Full width
   - Padding: 12px
   - Hover: background #E64A19

### 6. Barra Lateral da Sacola

#### Propriedades
- **Width**: 320px
- **Position**: fixed, right: 0, top: 0, height: 100%
- **Background**: #FFFFFF
- **Box-shadow**: -2px 0 10px rgba(0,0,0,0.1)
- **Z-index**: 999

#### Conteúdo
1. **Header**:
   - Altura: 60px
   - Border-bottom: 1px solid #EEEEEE
   - Padding: 0 20px

2. **Lista de Itens**:
   - Max-height: calc(100vh - 200px)
   - Overflow-y: auto

3. **Item Individual**:
   - Padding: 15px 20px
   - Border-bottom: 1px solid #EEEEEE

4. **Totais**:
   - Padding: 20px
   - Background: #F5F5F5
   - Position: absolute, bottom: 60px, width: 100%

5. **Botão "Continuar"**:
   - Altura: 60px
   - Background: #FF5722
   - Cor: #FFFFFF
   - Position: absolute, bottom: 0, width: 100%

## Espaçamentos e Bordas

### Padding Padrão
- **Containers principais**: 20px
- **Cards de conteúdo**: 15px
- **Elementos internos**: 10px

### Margens
- **Entre seções**: 40px
- **Entre elementos relacionados**: 20px
- **Entre elementos independentes**: 30px

### Bordas
- **Border-radius padrão**: 8px
- **Bordas de inputs**: 1px solid #CCCCCC
- **Bordas de cards**: 1px solid #EEEEEE

## Efeitos e Transições

### Transições Padrão
- **Duração**: 0.3s
- **Função de timing**: ease
- **Propriedades animadas**: opacity, transform, background-color, box-shadow

### Efeitos de Hover
- **Botões**: background-color change
- **Cards**: elevation (box-shadow increase)
- **Links**: color change
- **Inputs**: border-color change

### Estados Interativos
- **Focus**: outline: 2px solid #FF5722
- **Active**: slight scale reduction (0.98)
- **Disabled**: opacity 0.6, pointer-events none

## Responsividade

### Breakpoints
- **Desktop**: 1025px e acima
- **Tablet**: 769px - 1024px
- **Mobile**: Até 768px

### Ajustes por Dispositivo
1. **Tablet**:
   - Header altura: 70px
   - Grid de restaurantes: 2 colunas
   - Categorias: scroll horizontal mantido

2. **Mobile**:
   - Header altura: variável
   - Logo à esquerda, ícone de menu hamburger à direita
   - Barra de busca oculta (ativa via menu)
   - Grid de restaurantes: 1 coluna
   - Footer: ícones de navegação na parte inferior
   - Sacola: drawer na parte inferior ao invés de sidebar

## Imagens e Assets

### Fontes de Imagens
- Utilizar imagens de stock (Unsplash) para:
  - Imagens de hero restaurants
  - Imagens de itens do cardápio
  - Imagens de categorias

### Formatos e Tamanhos
- **Formatos preferenciais**: WebP para melhor compressão
- **Fallback**: JPEG/PNG
- **Resoluções**: 
  - Imagens de hero: 1200px width
  - Imagens de itens de cardápio: 600px width
  - Ícones: 48px × 48px (2x para retina)

## Métricas e Performance

### Diretrizes de Performance
- **Tempo de carregamento inicial**: < 3 segundos
- **First Contentful Paint**: < 1.8 segundos
- **Time to Interactive**: < 5 segundos

### Otimizações Recomendadas
1. **Lazy loading** para imagens fora do viewport
2. **Componente Image do Next.js** para otimização automática
3. **Minificação de CSS/JS**
4. **Cache de assets estáticos**
5. **Prefetch de rotas principais**

## Implementação

### Estrutura de Arquivos CSS
```
src/
├── app/
│   ├── globals.css
│   ├── layout.module.css
│   └── page.module.css
├── components/
│   ├── Header/
│   │   └── Header.module.css
│   ├── RestaurantCard/
│   │   └── RestaurantCard.module.css
│   └── ...
└── styles/
    ├── variables.css
    ├── mixins.css
    └── utilities.css
```

### Variáveis CSS Recomendadas
```css
:root {
  --color-primary: #FF5722;
  --color-primary-dark: #E64A19;
  --color-secondary: #2E7D32;
  --color-accent: #FFD700;
  --color-background: #FFFFFF;
  --color-surface: #F5F5F5;
  --color-text-primary: #333333;
  --color-text-secondary: #666666;
  --color-border: #CCCCCC;
  
  --font-family: 'Open Sans', sans-serif;
  --font-size-h1: 32px;
  --font-size-h2: 24px;
  --font-size-body: 16px;
  
  --spacing-small: 10px;
  --spacing-medium: 20px;
  --spacing-large: 40px;
  
  --border-radius: 8px;
  --box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  --transition: all 0.3s ease;
}
```

## Testes e Qualidade

### Checkpoints de Qualidade Visual
1. **Consistência de cores** entre todas as telas
2. **Hierarquia tipográfica** clara e legível
3. **Alinhamento e espaçamento** uniforme
4. **Responsividade** em todos os breakpoints
5. **Acessibilidade** (contraste de cores, tamanhos de fonte)

### Ferramentas de Validação Recomendadas
1. **Lighthouse** para métricas de performance e acessibilidade
2. **Contrast Checker** para validar acessibilidade de cores
3. **Device Mode** no Chrome DevTools para testar responsividade
4. **CSS Validator** para verificar conformidade com padrões

## Integração com Desenvolvimento

### Fluxo de Trabalho
1. Revisar este documento completo antes de iniciar o desenvolvimento
2. Consultar os mockups em `mandai/docs/mockups/all-screens-canvas.md` para referência visual
3. Utilizar o guia de estilo em `mandai/docs/design-spec.md` como referência técnica
4. Reportar quaisquer inconsistências encontradas entre este documento e os mockups
5. Solicitar revisão após implementação de cada tela principal

### Pontos de Contato
- Design System: Referência para componentes reutilizáveis
- UX Lead: Dúvidas sobre interações ou fluxos de usuário
- Product Manager: Questões sobre priorização ou escopo

## Próximos Passos

Após a implementação do design system:
1. Criar biblioteca de componentes reutilizáveis
2. Desenvolver protótipos interativos para validação de fluxos
3. Realizar testes de usabilidade com usuários reais
4. Iterar no design com base no feedback recebido
5. Documentar padrões de desenvolvimento frontend