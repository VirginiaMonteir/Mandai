#US-06: Adicionar item ao carrinho de compras

**Como** usuário do aplicativo Mandaí,
**eu quero** adicionar itens do cardápio ao meu carrinho de compras,
**para que** eu possa acumular os produtos que desejo comprar antes de finalizar o pedido.

## Critérios de aceite

- [] Ao clicar no botão "Adicionar" em um item do cardápio, o item deve ser adicionado ao carrinho
- [] Deve abrir um popup/modal com detalhes do item antes de adicionar ao carrinho
- [] O popup deve mostrar imagem, nome, descrição e preço do item
- [] Deve permitir selecionar quantidade antes de adicionar ao carrinho
- [] Deve mostrar contador atualizado no ícone do carrinho no header após adicionar item
- [] Deve manter os dados do item conforme definido no ADR-0003 (snapshot completo)
- [] Deve persistir os itens no carrinho entre navegações (localStorage)

## Notas técnicas

- Utilizar o CartContext já existente para gerenciamento de estado
- Implementar popup/modal seguindo as especificações do handoff-design.md (seção 5)
- Utilizar localStorage para persistência dos itens conforme ADR-0003
- Armazenar snapshot completo do item no momento da adição conforme modelo ERD
- Integrar com componente de selector de quantidade conforme handoff-design.md
- Manter consistência visual com as demais páginas do aplicativo

## Fora de escopo

- Personalização avançada de itens (observações especiais)
- Combinação de itens em combos/promoções
- Limitação de estoque
- Validação de horário de funcionamento do restaurante