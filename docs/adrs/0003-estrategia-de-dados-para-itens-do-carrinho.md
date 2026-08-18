# ADR-0003: Estratégia de Dados para Itens do Carrinho

- **Status:** Accepted
- **Data:** 2026-08-05

## Contexto
Ao adicionar itens ao carrinho, é necessário decidir como armazenar as informações dos itens para garantir consistência de dados mesmo quando os itens são modificados no cardápio após a adição ao carrinho. Além disso, é importante manter os itens no carrinho entre navegações.

## Decisão
Armazenaremos uma cópia completa (snapshot) dos dados do item no momento em que ele é adicionado ao carrinho, em vez de armazenar apenas uma referência ao item original. Também utilizaremos localStorage para persistência dos itens do carrinho entre navegações.

## Consequências
- Garante que os dados do pedido permaneçam consistentes mesmo se os itens do cardápio forem modificados posteriormente
- Permite que os usuários mantenham seus itens no carrinho ao navegar entre páginas
- Aumenta ligeiramente o uso de memória e armazenamento local
- Facilita a implementação de histórico de pedidos com dados precisos

## Alternativas consideradas
- **Referência ao item original**: Descartado pois poderia levar a inconsistências caso os itens do cardápio fossem modificados após a adição ao carrinho
- **Sessão do servidor**: Descartado por não ser adequado para aplicações frontend modernas e pela preferência por soluções client-side
- **Cookies**: Descartado por limitações de tamanho e pela natureza menos apropriada para dados estruturados complexos