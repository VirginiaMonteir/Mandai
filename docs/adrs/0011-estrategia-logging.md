# ADR-0011: Estratégia de Logging

- **Status:** Accepted
- **Data:** 2026-08-06

## Contexto
Para monitorar a saúde do aplicativo Mandaí e diagnosticar problemas, precisamos de uma estratégia de logging eficaz. Isso inclui registrar eventos importantes, erros e métricas de uso de forma estruturada e pesquisável.

## Decisão
Implementaremos um sistema de logging hierárquico com diferentes níveis (error, warn, info, debug) utilizando uma biblioteca de logging leve. Os logs serão estruturados em formato JSON para facilitar análise e filtragem. Em ambiente de desenvolvimento, os logs serão exibidos no console, enquanto em produção serão enviados para um serviço de agregação de logs.

## Consequências
- Facilita debugging e monitoramento da aplicação
- Permite auditoria de ações importantes do usuário
- Ajuda na identificação de gargalos e problemas de performance
- Logs em produção requerem infraestrutura adicional para armazenamento e análise
- Informações sensíveis devem ser cuidadosamente filtradas antes do log

## Alternativas consideradas
- **Console.log exclusivo**: Descartado por falta de estrutura e severidade, dificultando análise
- **Bibliotecas pesadas de logging enterprise**: Descartado por overengineering para o escopo inicial
- **Sem logging**: Descartado por tornar impossível diagnosticar problemas em produção
- **Logging apenas em produção**: Descartado por limitar capacidade de debugging durante desenvolvimento