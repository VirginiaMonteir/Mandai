# ADR-0004: Arquitetura de Componentes

- **Status:** Accepted
- **Data:** 2026-08-05

## Contexto
É necessário definir uma arquitetura de componentes consistente para o aplicativo Mandaí que promova reutilização, manutenibilidade e escalabilidade. A estrutura deve facilitar o desenvolvimento colaborativo e a organização do código.

## Decisão
Adotaremos uma arquitetura baseada em componentes modulares com a seguinte estrutura:
- Componentes reutilizáveis na pasta `components/`
- Estilização com CSS Modules para escopo isolado
- Hooks personalizados para lógica compartilhada
- Separação clara entre componentes de UI e lógica de negócios

## Consequências
- Facilita a reutilização de componentes em diferentes partes da aplicação
- Melhora a manutenibilidade com estilos encapsulados
- Permite desenvolvimento paralelo por diferentes membros da equipe
- Promove a consistência visual e comportamental em toda a aplicação
- Pode exigir mais arquivos e estrutura inicial, mas compensa no longo prazo

## Alternativas consideradas
- **Componentes inline sem estrutura definida**: Descartado por levar a código desorganizado e difícil de manter
- **Styled-components**: Descartado por preferência por CSS Modules que oferecem escopo isolado sem aumentar o tamanho do bundle significativamente
- **Arquitetura flat sem agrupamento**: Descartado por não escalar bem em projetos maiores
- **Componentes altamente acoplados**: Descartado por dificultar reutilização e testes