# Mockup - Tela Home (Desktop - Versão 1)

## Descrição Visual

Este mockup representa a tela inicial do aplicativo Mandaí para desktop (1440px), seguindo a especificação de design aprovada.

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│  HEADER                                                                                                                     │
│  ┌─────────────┐  ┌─────────────────────────────────────────────────────────────────────────────────────┐  ┌─────────────┐   │
│  │   MANDAÍ    │  │  🔍 Buscar restaurantes ou pratos                                                    │  │    🛒 (3)   │   │
│  └─────────────┘  └─────────────────────────────────────────────────────────────────────────────────────┘  └─────────────┘   │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  PROMOÇÕES EM DESTAQUE                                                                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐ │
│  │  FRETE GRÁTIS em pedidos acima de R$50                                                                                 │ │
│  │  [Ver promoções]                                                                                                        │ │
│  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  CATEGORIAS                                                                                                                 │
│  ← →                                                                                                                        │
│  [🍕 Pizza]  [🍣 Japonês]  [🍎 Saudável]  [🍔 Lanches]  [🍰 Sobremesas]  [🌱 Vegetariano]  [🥤 Bebidas]                     │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  RESTAURANTES EM DESTAQUE                                                                                                   │
│  ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐                                │
│  │      REST 1       │  │      REST 2       │  │      REST 3       │  │      REST 4       │                                │
│  │ ┌───────────────┐ │  │ ┌───────────────┐ │  │ ┌───────────────┐ │  │ ┌───────────────┐ │                                │
│  │ │ [Imagem]      │ │  │ │ [Imagem]      │ │  │ │ [Imagem]      │ │  │ │ [Imagem]      │ │                                │
│  │ └───────────────┘ │  │ └───────────────┘ │  │ └───────────────┘ │  │ └───────────────┘ │                                │
│  │ Nome do Restaurante │  │ Nome do Restaurante │  │ Nome do Restaurante │  │ Nome do Restaurante │                                │
│  │ Italiano • 30-40 min│  │ Japonês • 25-35 min │  │ Mexicano • 20-30 min│  │ Vegetariano • 35-45 min│                                │
│  └───────────────────┘  └───────────────────┘  └───────────────────┘  └───────────────────┘                                │
│                                                                                                                             │
│  ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐                                │
│  │      REST 5       │  │      REST 6       │  │      REST 7       │  │      REST 8       │                                │
│  │ ┌───────────────┐ │  │ ┌───────────────┐ │  │ ┌───────────────┐ │  │ ┌───────────────┐ │                                │
│  │ │ [Imagem]      │ │  │ │ [Imagem]      │ │  │ │ [Imagem]      │ │  │ │ [Imagem]      │ │                                │
│  │ └───────────────┘ │  │ └───────────────┘ │  │ └───────────────┘ │  │ └───────────────┘ │                                │
│  │ Nome do Restaurante │  │ Nome do Restaurante │  │ Nome do Restaurante │  │ Nome do Restaurante │                                │
│  │ Churrasco • 40-50 min│ │ Pizza • 25-35 min  │ │ Árabe • 30-40 min   │ │ Marmita • 20-30 min │                                │
│  └───────────────────┘  └───────────────────┘  └���──────────────────┘  └───────────────────┘                                │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                                                                     │
│  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐ │
│  │  © 2026 Mandaí - Todos os direitos reservados                                                                          │ │
│  │  [Termos de uso] • [Política de privacidade] • [Contato]                                                               │ │
│  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## Especificações Visuais

### Header (80px altura)
- Background: #FFFFFF
- Sombra: 0 2px 10px rgba(0,0,0,0.1)
- Logo "MANDAÍ": #FF5722, 24px, negrito
- Barra de busca: 400px largura, bordas arredondadas
- Ícone sacola: 🛒 com contador (3) em bolha #FF5722

### Seção de Promoções (120px altura)
- Background: Gradiente de #FF5722 para #FF4500
- Texto principal: Branco, 20px
- Botão "Ver promoções": #FFFFFF background, #FF5722 texto

### Seção de Categorias (100px altura)
- Scroll horizontal indicado por setas ← →
- Cada categoria: Ícone + texto em #333333
- Hover effect: Elevação suave

### Seção de Restaurantes
- Grade: 4 colunas com 20px espaçamento
- Card de restaurante (220px largura):
  - Imagem: 160px altura, cobertura total
  - Nome: 18px, negrito, #333333
  - Categoria e tempo: 14px, #666666

### Footer (60px altura)
- Background: #333333
- Texto: Branco, 14px, centralizado

## Notas de Design

1. **Imagens**: Utilizar fotos de alta qualidade de pratos e restaurantes (stock images)
2. **Responsividade**: Esta versão é otimizada para 1440px de largura
3. **Interações**: 
   - Hover nos cards de restaurantes eleva levemente
   - Categorias têm efeito de destaque no hover
   - Botão de promoções muda de cor no hover
4. **Tipografia**: 'Open Sans' utilizada em todos os textos

## Próximos Passos

1. Criar variações de cor para diferentes estados (hover, active)
2. Desenvolver versões para tablet e mobile
3. Criar mockups para as outras telas do fluxo de usuário