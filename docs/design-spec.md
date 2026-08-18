# Especificação de Design do Mandaí

## Visão Geral

Este documento define a especificação de design para o aplicativo Mandaí, focando na tela Home para desktop (1440px) como ponto de partida. O design segue uma identidade visual equilibrada com cores fortes em um layout limpo.

## Paleta de Cores

- **Primária**: #FF5722 (Laranja vibrante)
- **Secundária**: #2E7D32 (Verde escuro)
- **Acento**: #FFD700 (Amarelo dourado)
- **Neutras**:
  - Fundo: #FFFFFF (Branco) e #F5F5F5 (Cinza claro)
  - Texto: #333333 (Cinza escuro)
  - Bordas: #CCCCCC (Cinza médio)

## Tipografia

- **Fonte Principal**: 'Open Sans'
- **Hierarquia**:
  - Títulos: Negrito, 32px
  - Subtítulos: Médio, 24px
  - Corpo do texto: Regular, 16px

## Tela Home (Desktop - 1440px)

### Estrutura

```
+-------------------------------------------------------------+
| Header                                                      |
| [Logo] [Barra de busca] [Ícone sacola (contador)]          |
+-------------------------------------------------------------+
| Seção de promoções em destaque                              |
| [Banner promocional]                                        |
+-------------------------------------------------------------+
| Seção de categorias horizontais                             |
| [Scroll horizontal de categorias com ícones]                |
+-------------------------------------------------------------+
| Lista de restaurantes em destaque                           |
| [Grade 4 colunas de cards de restaurantes]                  |
+-------------------------------------------------------------+
| Footer                                                      |
| [Links e informações de contato]                            |
+-------------------------------------------------------------+
```

### Componentes Detalhados

#### 1. Header

- **Altura**: 80px
- **Background**: #FFFFFF
- **Sombra**: 0 2px 10px rgba(0,0,0,0.1)
- **Elementos**:
  - Logo: "Mandaí" em #FF5722, 24px, negrito
  - Barra de busca: Campo arredondado com placeholder "Buscar restaurantes ou pratos"
  - Ícone de sacola: Material Icons, 24px
    - Contador: Bolha circular #FF5722 com texto branco

#### 2. Seção de Promoções em Destaque

- **Altura**: 120px
- **Background**: Gradiente sutil de #FF5722 para #FF4500
- **Conteúdo**:
  - Texto principal: "Frete grátis em pedidos acima de R$50" em branco, 20px
  - Botão CTA: "Ver promoções" com background #FFFFFF e texto #FF5722

#### 3. Seção de Categorias Horizontais

- **Altura**: 100px
- **Scroll**: Horizontal com indicação de scroll disponível
- **Itens**:
  - Ícones representativos para categorias (Pizza, Japa, Açaí, etc.)
  - Texto abaixo do ícone em #333333
  - Hover: Elevação suave e mudança de background para #F5F5F5

#### 4. Lista de Restaurantes em Destaque

- **Layout**: Grade de 4 colunas
- **Espaçamento**: 20px entre cards
- **Card de Restaurante**:
  - **Imagem**: 100% width, altura fixa de 160px, object-fit cover
  - **Informações**:
    - Nome: Negrito, 18px, #333333
    - Categoria: 14px, #666666
    - Tempo estimado: 14px, #666666
  - **Hover**: Sombra aumentada e leve elevação

#### 5. Footer

- **Altura**: 60px
- **Background**: #333333
- **Texto**: #FFFFFF, centralizado, 14px
- **Conteúdo**: Copyright e links úteis

## Design Responsivo

### Tablet (769px - 1024px)

- Header: Mesmo layout, altura reduzida para 70px
- Categorias: Scroll horizontal mantido
- Restaurantes: Grade reduzida para 2 colunas
- Footer: Altura reduzida para 50px

### Mobile (Até 768px)

- Header:
  - Logo à esquerda
  - Ícone de menu hamburger à direita
  - Barra de busca oculta (ativa via menu)
- Categorias: Scroll horizontal com ítens menores
- Restaurantes: Grade de 1 coluna
- Footer: Ícones de navegação na parte inferior

## Diretrizes Adicionais

1. **Espaçamento**:
   - Padding padrão: 20px
   - Margem entre seções: 40px
   - Espaçamento interno de cards: 15px

2. **Bordas e Sombras**:
   - Cards: Border-radius 8px
   - Sombra padrão: 0 4px 12px rgba(0,0,0,0.1)

3. **Transições**:
   - Hover effects: Transições de 0.3s para todos os elementos interativos
   - Mudanças de estado: Transições suaves em elementos dinâmicos

4. **Ícones**:
   - Material Icons para elementos de interface
   - Ícones personalizados para categorias de comida

## Mockups

Os mockups de alta fidelidade devem seguir esta especificação rigorosamente, utilizando imagens de stock (Unsplash) para preenchimento visual e mantendo a consistência da marca em todas as telas.