# ADR-0010: Versionamento de API

- **Status:** Accepted
- **Data:** 2026-08-06

## Contexto
O aplicativo Mandaí dependerá de uma API backend para operações de CRUD, autenticação e processamento de pedidos. É importante definir uma estratégia de versionamento de API que permita evoluir o backend sem quebrar o frontend existente e vice-versa.

## Decisão
Adotaremos versionamento de API através de prefixo na URL (/api/v1/, /api/v2/, etc.) combinado com versionamento semântico (SemVer). Começaremos com v1 e incrementaremos versões conforme necessário para mudanças que quebrem compatibilidade.

## Consequências
- Permite evoluir a API sem afetar clientes existentes
- Facilita a manutenção de múltiplas versões da API simultaneamente
- Torna claro para os desenvolvedores qual versão estão utilizando
- Pode levar ao acúmulo de versões antigas se não gerenciado corretamente
- Requer disciplina para definir quando uma mudança quebra compatibilidade

## Alternativas consideradas
- **Versionamento via cabeçalho HTTP**: Descartado por ser menos visível e difícil de testar manualmente
- **Versionamento via parâmetro de query**: Descartado por violar o princípio REST de identificadores únicos de recurso
- **Sem versionamento**: Descartado por tornar impossível fazer mudanças que quebrem compatibilidade
- **Versionamento automático/baseado em conteúdo**: Descartado por complexidade desnecessária para o escopo atual