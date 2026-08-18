#US-04: Ver detalhes do restaurante

**Como** usuário do aplicativo Mandaí,
**eu quero** acessar a página de detalhes de um restaurante específico,
**para que** eu possa ver seu cardápio completo e informações detalhadas antes de fazer um pedido.

## Critérios de aceite

- [] Ao clicar em um card de restaurante na tela inicial, deve navegar para a página de detalhes
- [] Deve exibir informações detalhadas do restaurante: nome, categoria, avaliação, tempo de entrega, taxa de entrega
- [] Deve mostrar o cardápio completo organizado por categorias (entradas, pratos principais, sobremesas, bebidas)
- [] Cada item do cardápio deve ter nome, descrição, preço e imagem
- [] Deve permitir adicionar itens diretamente ao carrinho de compras
- [] Deve manter a navegação para outras seções do app através do header
- [] Deve manter o mesmo rodapé padrão do aplicativo

## Notas técnicas

- Criar nova página em src/app/restaurants/[id]/page.tsx (rota dinâmica)
- Utilizar dados mockados do arquivo src/lib/data/restaurantes.ts
- Implementar organização do cardápio por categorias
- Integrar com o CartContext para funcionalidade de adicionar ao carrinho
- Manter consistência visual com as demais páginas do aplicativo
- Utilizar componentes reutilizáveis existentes quando possível

## Fora de escopo

- Sistema de busca dentro do cardápio
- Filtros avançados do cardápio
- Personalização de itens do menu
- Visualização de restaurantes similares
- Mapa de localização do restaurante