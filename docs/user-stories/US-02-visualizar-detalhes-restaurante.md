#US-02: Visualizar detalhes do restaurante

**Como** usuário do aplicativo Mandaí,
**eu quero** visualizar os detalhes de um restaurante específico,
**para que** eu possa conhecer seu menu e informações antes de fazer um pedido.

## Critérios de aceite

- [] Deve exibir o nome, logo e categoria do restaurante
- [] Deve mostrar o cardápio organizado por categorias
- [] Cada item do menu deve ter nome, descrição, preço e imagem
- [] Deve permitir adicionar itens diretamente ao carrinho
- [] Deve exibir informações de entrega (tempo estimado, taxa, distância)

## Notas técnicas

- Utilizar dados já existentes no serviço restaurantService.ts
- Basear-se na página já existente em src/app/restaurants/page.tsx
- Organizar o layout do cardápio em seções por categorias de itens
- Integrar com o CartContext para funcionalidade de adicionar ao carrinho

## Fora de escopo

- Avaliações de clientes
- Fotos do restaurante
- Mapa de localização
- Opções de filtro do cardápio