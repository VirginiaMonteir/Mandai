#US-05: Gerenciar itens no carrinho de compras

**Como** usuário do aplicativo Mandaí,
**eu quero** gerenciar os itens no meu carrinho de compras,
**para que** eu possa revisar, ajustar quantidades e remover itens antes de finalizar meu pedido.

## Critérios de aceite

- [] Deve exibir todos os itens adicionados ao carrinho com nome, descrição, preço unitário e quantidade
- [] Deve mostrar o cálculo automático do subtotal, taxa de entrega e total do pedido
- [] Deve permitir aumentar ou diminuir a quantidade de cada item
- [] Deve permitir remover itens individuais do carrinho
- [] Deve atualizar automaticamente os valores totais quando itens são modificados
- [] Deve manter os itens no carrinho mesmo ao navegar entre páginas
- [] Deve exibir mensagem quando o carrinho está vazio
- [] Deve ter um botão para limpar todo o carrinho

## Notas técnicas

- Utilizar o CartContext já existente para gerenciamento de estado
- A página do carrinho já existe em src/app/cart/page.tsx
- Implementar controles de quantidade (+/-) para cada item
- Utilizar localStorage para persistência dos itens do carrinho
- Implementar hook useCart para facilitar o acesso ao contexto
- Manter consistência visual com as demais páginas do aplicativo
- Calcular valores: subtotal (quantidade × preço), taxa de entrega fixa, total (subtotal + taxa)

## Fora de escopo

- Processo de checkout e pagamento
- Validação de estoque
- Cupons de desconto
- Cálculo de descontos promocionais
- Divisão do pedido entre múltiplos restaurantes