#US-07: Finalizar pedido e ir para checkout

**Como** usuário do aplicativo Mandaí,
**eu quero** finalizar meu pedido e prosseguir para o checkout,
**para que** eu possa fornecer informações de entrega e pagamento.

## Critérios de aceite

- [] Ao clicar no botão "Continuar" na barra lateral do carrinho, deve navegar para a página de checkout
- [] Deve exibir resumo completo do pedido: itens, quantidades, preços e totais
- [] Deve permitir edição dos itens (retornar ao carrinho)
- [] Deve solicitar informações de entrega: endereço completo, ponto de referência, número de telefone
- [] Deve mostrar opções de pagamento: cartão de crédito, débito, PIX
- [] Deve exibir o tempo estimado de entrega e taxa aplicável
- [] Deve ter um botão para confirmar o pedido

## Notas técnicas

- Criar nova página em src/app/checkout/page.tsx
- Utilizar dados do CartContext para resumo do pedido
- Implementar formulário de informações de entrega com validação
- Integrar com sistema de pagamento (mockado inicialmente)
- Manter consistência visual com as demais páginas do aplicativo
- Seguir especificações de design do handoff-design.md para formulários

## Fora de escopo

- Integração real com gateways de pagamento
- Validação avançada de endereço
- Múltiplos métodos de entrega
- Programação de horário de entrega
- Cupons de desconto