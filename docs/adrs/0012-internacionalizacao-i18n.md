# ADR-0012: Internacionalização (i18n)

- **Status:** Accepted
- **Data:** 2026-08-06

## Contexto
O aplicativo Mandaí pode precisar suportar múltiplos idiomas no futuro, especialmente se expandir para diferentes regiões. Precisamos decidir antecipadamente sobre a estratégia de internacionalização para evitar retrabalho significativo posteriormente.

## Decisão
Prepararemos o código para internacionalização desde o início utilizando uma biblioteca i18n leve, mas adiaremos a implementação real de múltiplos idiomas até que haja demanda de negócios concreta. Todos os textos serão externalizados em arquivos de recursos, mesmo que inicialmente contenham apenas português.

## Consequências
- Facilita a expansão para novos mercados quando necessário
- Adiciona alguma complexidade ao processo de desenvolvimento desde o início
- Garante que não será necessário refatorar código para adicionar i18n posteriormente
- Requer convenção de nomenclatura para chaves de tradução
- Pode aumentar ligeiramente o tamanho do bundle da aplicação

## Alternativas consideradas
- **Implementar i18n completo imediatamente**: Descartado por overengineering sem necessidade imediata
- **Ignorar completamente i18n**: Descartado por criar débito técnico significativo se for necessário no futuro
- **Solução customizada de i18n**: Descartado por reinventar a roda quando excelentes bibliotecas existem
- **Apenas traduções inline**: Descartado por ser difícil de manter e escalar