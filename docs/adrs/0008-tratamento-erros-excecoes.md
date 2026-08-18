# ADR-0008: Tratamento de Erros e Exceções

- **Status:** Accepted
- **Data:** 2026-08-06

## Contexto
O aplicativo Mandaí precisa de uma estratégia consistente para tratamento de erros e exceções tanto no frontend quanto potencialmente no backend. É essencial fornecer feedback útil aos usuários sobre falhas e registrar adequadamente os erros para facilitar a depuração e manutenção.

## Decisão
Implementaremos um sistema centralizado de tratamento de erros com camadas distintas: 
1. Tratamento específico para erros de rede e API
2. Componentes de UI para exibição de mensagens de erro amigáveis
3. Sistema de logging centralizado para erros críticos
4. Tipagem estrita de erros usando TypeScript

## Consequências
- Melhora a experiência do usuário ao lidar com falhas de forma elegante
- Facilita a manutenção e debugging com logs estruturados
- Permite respostas consistentes a diferentes tipos de erro
- Pode aumentar ligeiramente a complexidade inicial do projeto
- Necessita definição clara de quais erros são registrados e como

## Alternativas consideradas
- **Tratamento ad-hoc de erros**: Descartado por resultar em experiência inconsistente e dificultar manutenção
- **Bibliotecas externas como Sentry**: Descartado para o início do projeto, podendo ser adicionado posteriormente
- **Promises sem tratamento específico**: Descartado por causar falhas silenciosas e má experiência do usuário
- **Alerts nativos do navegador**: Descartado por serem intrusivos e não integrarem bem com o design