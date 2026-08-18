# ADR-0007: Estratégia de Autenticação e Autorização

- **Status:** Accepted
- **Data:** 2026-08-06

## Contexto
O aplicativo Mandaí requer um sistema robusto de autenticação e autorização para proteger os dados dos usuários e garantir acesso apropriado às funcionalidades. Precisamos de uma solução segura, escalável e fácil de implementar que suporte diferentes tipos de usuários (clientes, administradores) e integrações futuras.

## Decisão
Utilizaremos autenticação baseada em tokens JWT (JSON Web Tokens) com refresh tokens armazenados de forma segura. Para autorização, implementaremos RBAC (Role-Based Access Control) simples, distinguindo entre usuários clientes e administradores.

## Consequências
- Permite sessões persistentes e seguras
- Reduz a carga no servidor ao evitar consultas frequentes ao banco de dados
- Facilita a implementação de políticas de segurança como expiração de tokens
- Suporta múltiplos níveis de acesso conforme necessário
- Pode exigir mecanismos adicionais de segurança como rotação de tokens

## Alternativas consideradas
- **Session-based authentication**: Descartado por não ser ideal para aplicações escaláveis e mobile-first
- **OAuth 2.0**: Descartado por complexidade desnecessária para o escopo inicial do projeto
- **API Keys**: Descartado por não fornecer controle fino de permissões por usuário
- **Firebase Authentication**: Descartado por criar dependência externa quando a solução própria é suficiente