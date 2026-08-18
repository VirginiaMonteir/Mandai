#US-03: Listar restaurantes na tela inicial

**Como** usuário do aplicativo Mandaí,
**eu quero** ver uma lista de restaurantes na tela inicial,
**para que** eu possa começar a explorar opções de delivery rapidamente.

## Critérios de aceite

- [] Deve exibir o logo "Mandaí" em laranja no topo da página
- [] Deve mostrar o título "Restaurantes perto de você" abaixo do logo
- [] Deve apresentar um grid de cards de restaurantes (3 colunas no desktop, 2 colunas no tablet, 1 coluna no mobile)
- [] Cada card deve exibir foto do restaurante compatível com sua categoria
- [] Cada card deve mostrar nome do restaurante, categoria, avaliação (estrela + nota 0-5), tempo estimado de entrega e taxa de entrega
- [] Ao passar o mouse sobre um card, ele deve ter um destaque visual (sombra suave aumenta)
- [] Inicialmente, deve mostrar 6 restaurantes mockados de categorias variadas
- [] Os dados devem ser obtidos do arquivo src/lib/data/restaurantes.ts

## Notas técnicas

- Esta será a nova página inicial do aplicativo (rota /)
- Substituirá a tela de boas-vindas atual
- Utilizar componente de grid responsivo para organizar os cards
- Implementar efeito de hover suave nos cards de restaurantes
- Os dados dos restaurantes são mockados e não requerem backend neste momento
- Manter o rodapé atual: "Construído com Claude Code - Demonstração de criação de agentes"

## Fora de escopo

- Navegação para detalhes do restaurante ao clicar no card
- Filtragem ou ordenação de restaurantes
- Busca textual por nome de restaurante
- Carregamento dinâmico de mais restaurantes