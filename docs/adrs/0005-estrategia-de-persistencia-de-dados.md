# ADR-0005: Estratégia de Persistência de Dados

- **Status:** Accepted
- **Data:** 2026-08-05

## Contexto
O aplicativo Mandaí precisa armazenar dados como itens do carrinho, preferências do usuário e possivelmente histórico de pedidos. É necessário definir uma estratégia de persistência de dados que funcione bem em um aplicativo frontend moderno e que seja confiável para os usuários.

## Decisão
Utilizaremos uma combinação de localStorage para dados locais não críticos (como itens do carrinho) e uma API backend simulada para dados que eventualmente serão persistentes em um banco de dados real.

## Consequências
- Permite manter dados do usuário entre sessões sem depender de um backend real no momento
- Facilita o desenvolvimento e teste com dados simulados
- Prepara a arquitetura para fácil substituição por API real no futuro
- localStorage tem limitações de tamanho e segurança, mas é adequado para dados não críticos
- Dados sensíveis não devem ser armazenados em localStorage

## Alternativas consideradas
- **Cookies**: Descartado por limitações de tamanho e pela natureza menos apropriada para dados estruturados complexos
- **IndexedDB**: Descartado por ser excessivamente complexo para o escopo atual
- **Backend real imediato**: Descartado por atrasar o desenvolvimento frontend e pela decisão de começar com dados simulados
- **SessionStorage apenas**: Descartado por não persistir dados entre sessões diferentes