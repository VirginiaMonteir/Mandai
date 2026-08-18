# ADR-0001: Escolha do Framework Frontend

- **Status:** Accepted
- **Data:** 2026-08-05

## Contexto
Precisamos de um framework frontend moderno para desenvolver o aplicativo Mandaí com recursos de e-commerce, navegação entre páginas, gerenciamento de estado global e integração com API. A escolha deve considerar produtividade, performance, escalabilidade e facilidade de manutenção.

## Decisão
Optamos por utilizar Next.js 16 como framework principal, juntamente com React 19 e TypeScript.

## Consequências
- Facilita o desenvolvimento com App Router para roteamento e renderização do lado do servidor
- Melhora a performance com carregamento sob demanda das páginas (lazy loading)
- Permite tipagem estática com TypeScript para melhor manutenibilidade
- Oferece uma estrutura de pastas intuitiva e consistente
- Pode exigir conhecimento específico de Next.js para desenvolvedores menos experientes

## Alternativas consideradas
- **React com React Router**: Descartado por não oferecer renderização do lado do servidor nativa e maior configuração manual necessária
- **Vue.js com Nuxt**: Descartado por menor familiaridade da equipe e ecossistema menos maduro para casos de e-commerce complexos
- **Angular**: Descartado por maior complexidade e curva de aprendizado mais íngreme para o escopo do projeto