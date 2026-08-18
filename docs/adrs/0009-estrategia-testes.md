# ADR-0009: Estratégia de Testes

- **Status:** Accepted
- **Data:** 2026-08-06

## Contexto
É essencial estabelecer uma estratégia de testes eficaz para garantir a qualidade do aplicativo Mandaí. Precisamos de uma abordagem equilibrada que cubra os aspectos mais críticos do sistema sem adicionar complexidade excessiva ao fluxo de desenvolvimento.

## Decisão
Adotaremos uma abordagem de pirâmide de testes com foco em:
1. Testes unitários para funções puras, utilitários e hooks customizados
2. Testes de componente para componentes React reutilizáveis
3. Testes E2E para fluxos críticos de usuário (como explorar restaurantes, adicionar ao carrinho e finalizar pedido)

## Consequências
- Melhora a confiabilidade e estabilidade do aplicativo
- Facilita refatorações futuras com segurança
- Pode aumentar o tempo inicial de desenvolvimento
- Requer configuração de ferramentas de teste apropriadas
- Necessita definição de métricas mínimas de cobertura

## Alternativas consideradas
- **Sem testes automatizados**: Descartado por resultar em instabilidade e dificuldade de manutenção
- **Somente testes E2E**: Descartado por ser lento e frágil para cobrir toda a base de código
- **100% de cobertura de testes**: Descartado por ser excessivo e não necessariamente agregar valor proporcional ao esforço
- **Testes manuais exclusivamente**: Descartado por não escalar e ser propenso a erros humanos