#US-01: Explorar lista de restaurantes

**Como** usuário do aplicativo Mandaí,
**eu quero** visualizar uma lista de restaurantes disponíveis,
**para que** eu possa escolher onde fazer meu pedido.

## Critérios de aceite

- [] Deve exibir cards com os restaurantes disponíveis
- [] Cada card deve conter nome, imagem, categoria e tempo estimado de entrega
- [] Ao clicar em um card, o usuário deve ser redirecionado para a página do restaurante
- [] Deve haver um título indicando a seção "Restaurantes Disponíveis"

## Notas técnicas

- Utilizar componente Card já existente no projeto, se disponível
- Os dados dos restaurantes serão obtidos através do serviço restaurantService.ts
- A página de listagem de restaurantes já existe em src/app/restaurants/page.tsx
- Usar CSS Modules para estilização

## Fora de escopo

- Filtros avançados por categoria ou distância
- Ordenação dos restaurantes
- Busca textual por nome de restaurante