# ADR-0006: Estratégia de Estilização

- **Status:** Accepted
- **Data:** 2026-08-05

## Contexto
É necessário definir uma estratégia de estilização consistente para o aplicativo Mandaí que garanta encapsulamento de estilos, reutilização de variáveis e fácil manutenção. A solução deve suportar design responsivo e ser compatível com a arquitetura de componentes escolhida.

## Decisão
Utilizaremos CSS Modules para estilização dos componentes, combinados com variáveis CSS globais definidas em um arquivo de variáveis compartilhadas.

## Consequências
- Garante escopo isolado dos estilos, evitando conflitos entre componentes
- Permite reutilização de variáveis de design (cores, espaçamentos, tipografia) através de variáveis CSS
- Facilita a manutenção com estilos próximos aos componentes que os utilizam
- Mantém o desempenho sem adicionar bibliotecas de estilo extras ao bundle
- Suporta facilmente design responsivo através de media queries

## Alternativas consideradas
- **Styled-components**: Descartado por aumentar o tamanho do bundle e pela preferência por soluções CSS nativas
- **Sass/Less**: Descartado por não resolver o problema de escopo de estilos e pela preferência por CSS moderno
- **Tailwind CSS**: Descartado por não alinhar com o design system detalhado fornecido e pela preferência por CSS semântico
- **CSS tradicional global**: Descartado por causar conflitos de estilo e dificultar manutenção