# ADR-0013: Estratégia de Deploy e CI/CD

- **Status:** Accepted
- **Data:** 2026-08-06

## Contexto
É fundamental estabelecer uma estratégia clara de deploy e integração contínua para o aplicativo Mandaí, garantindo releases consistentes, testadas e reversíveis. O processo deve ser automatizado para reduzir erros humanos e acelerar o ciclo de desenvolvimento.

## Decisão
Utilizaremos GitHub Actions para CI/CD, com workflow que inclui:
1. Execução automática de testes em cada pull request
2. Build e análise estática do código
3. Deploy automático para ambientes de staging em pushes para branch develop
4. Deploy manual para produção em pushes para branch main
5. Versionamento semântico automático com git tags

## Consequências
- Garante que todas as alterações sejam testadas antes de serem mescladas
- Reduz significativamente o risco de deploys manuais
- Permite rollbacks rápidos através de git tags
- Requer configuração e manutenção dos pipelines de CI/CD
- Necessita definição clara de ambientes (dev, staging, prod)

## Alternativas consideradas
- **Deploys manuais exclusivos**: Descartado por ser propenso a erros e difícil de escalar
- **Ferramentas CI/CD pagas especializadas**: Descartado por overkill para o estágio inicial do projeto
- **GitLab CI**: Descartado assumindo que o repositório esteja no GitHub conforme práticas comuns
- **Sem automação**: Descartado por tornar o processo de release lento e arriscado