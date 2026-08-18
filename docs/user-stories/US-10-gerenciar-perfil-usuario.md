#US-10: Gerenciar perfil de usuário

**Como** usuário do aplicativo Mandaí,
**eu quero** gerenciar minhas informações de perfil,
**para que** eu possa manter meus dados pessoais e endereços atualizados.

## Critérios de aceite

- [] Deve permitir acesso à página de perfil através do header ou menu
- [] Deve exibir informações básicas do usuário: nome, email, telefone
- [] Deve permitir editar e salvar alterações nos dados pessoais
- [] Deve permitir gerenciar endereços de entrega (adicionar, editar, remover)
- [] Deve definir um endereço como principal/padrão
- [] Deve mostrar histórico de pedidos realizados
- [] Deve permitir logout da conta

## Notas técnicas

- Criar nova página em src/app/profile/page.tsx
- Utilizar AuthContext para gerenciamento de autenticação
- Implementar formulários de edição com validação
- Utilizar localStorage ou serviço mockado para persistência inicial
- Manter consistência visual com as demais páginas do aplicativo
- Seguir especificações de design do handoff-design.md para formulários

## Fora de escopo

- Integração com redes sociais
- Verificação de email/telefone
- Recuperação de senha
- Planos de assinatura ou fidelidade
- Preferências de comunicação