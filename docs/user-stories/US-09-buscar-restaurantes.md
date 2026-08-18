#US-09: Buscar restaurantes por nome ou categoria

**Como** usuário do aplicativo Mandaí,
**eu quero** buscar restaurantes por nome ou categoria,
**para que** eu possa encontrar rapidamente opções específicas de delivery.

## Critérios de aceite

- [] Deve exibir barra de busca no topo da tela inicial
- [] Deve permitir digitar nome de restaurante ou categoria para filtrar resultados
- [] Deve atualizar resultados em tempo real conforme o usuário digita
- [] Deve mostrar sugestões de busca enquanto o usuário digita
- [] Deve exibir mensagem quando nenhum resultado for encontrado
- [] Deve permitir limpar a busca e retornar aos resultados originais
- [] Deve manter a mesma apresentação em cards dos restaurantes encontrados

## Notas técnicas

- Implementar barra de busca conforme especificado no handoff-design.md (seção 1.2)
- Utilizar dados mockados do arquivo src/lib/data/restaurantes.ts
- Implementar filtragem client-side para busca por nome e categoria
- Adicionar debounce de 300ms para evitar chamadas excessivas durante digitação
- Manter consistência visual com as demais páginas do aplicativo
- Utilizar CSS Modules para estilização

## Fora de escopo

- Busca por itens do cardápio
- Filtros avançados (distância, preço, avaliações)
- Ordenação dos resultados de busca
- Histórico de buscas recentes
- Busca por voz