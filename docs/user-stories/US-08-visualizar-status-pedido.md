#US-08: Visualizar status do pedido em tempo real

**Como** usuário do aplicativo Mandaí,
**eu quero** acompanhar o status do meu pedido em tempo real,
**para que** eu saiba quando meu pedido será preparado, enviado e entregue.

## Critérios de aceite

- [] Após confirmar o pedido, deve redirecionar para página de acompanhamento
- [] Deve exibir timeline visual com os estágios do pedido (confirmado, preparando, pronto, em trânsito, entregue)
- [] Deve mostrar informações do pedido: número, itens, valor total, tempo estimado
- [] Deve atualizar automaticamente o status do pedido a cada 30 segundos
- [] Deve mostrar informações do entregador quando o pedido estiver em trânsito
- [] Deve permitir contato com o restaurante ou suporte
- [] Deve manter histórico dos pedidos anteriores acessível

## Notas técnicas

- Criar nova página em src/app/orders/[id]/page.tsx (rota dinâmica)
- Implementar polling a cada 30 segundos para atualização de status
- Utilizar dados mockados inicialmente seguindo modelo ERD
- Integrar com notificações push quando disponíveis
- Manter consistência visual com as demais páginas do aplicativo
- Utilizar ícones e cores conforme handoff-design.md

## Fora de escopo

- Mapa em tempo real da localização do entregador
- Chat em tempo real com o entregador
- Avaliação imediata do pedido
- Compartilhamento de status em redes sociais