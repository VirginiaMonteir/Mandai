# Diagrama Entidade-Relacionamento (ERD) do Mandaí

## Visão Geral

Este documento apresenta o diagrama entidade-relacionamento (ERD) do aplicativo Mandaí, especificando as entidades principais, seus atributos e relacionamentos. O modelo foi projetado para suportar o fluxo completo de pedidos de delivery, desde a exploração de restaurantes até a finalização de pedidos.

## Diagrama ERD em Mermaid

```mermaid
erDiagram
    %% Entidades
    RESTAURANT {
        int id PK
        string name
        string description
        float rating
        string deliveryTime
        float deliveryFee
        string image
    }
    
    MENU_ITEM {
        int id PK
        int restaurantId FK
        string name
        string description
        float price
        string category
        string image
    }
    
    ORDER {
        int id PK
        int userId
        string status
        float totalAmount
        string deliveryAddress
        datetime createdAt
        datetime updatedAt
    }
    
    ORDER_ITEM {
        int id PK
        int orderId FK
        int menuItemId FK
        string menuItemSnapshot
        int quantity
        float unitPrice
        string specialInstructions
    }
    
    USER {
        int id PK
        string name
        string email
        string phone
        string address
        datetime createdAt
    }
    
    %% Relacionamentos
    RESTAURANT ||--o{ MENU_ITEM : "possui"
    USER ||--o{ ORDER : "faz"
    ORDER ||--o{ ORDER_ITEM : "contém"
    MENU_ITEM }|--|| ORDER_ITEM : "referencia"
    
    %% Comentários sobre os relacionamentos
    %% Um RESTAURANT possui muitos MENU_ITEM (1:N)
    %% Um USER faz muitos ORDER (1:N)
    %% Um ORDER contém muitos ORDER_ITEM (1:N)
    %% Um MENU_ITEM é referenciado por muitos ORDER_ITEM (1:N)
```

## Explicação das Decisões de Modelagem

### Snapshots em OrderItem
Uma decisão importante foi incluir um campo `menuItemSnapshot` em `ORDER_ITEM`. Isso permite armazenar uma cópia completa dos detalhes do item no momento em que o pedido foi feito. Essa abordagem é crucial porque:

1. Preços podem mudar após o pedido ser criado
2. Itens podem ser removidos do cardápio
3. Descrições podem ser atualizadas
4. É essencial manter a integridade dos dados do pedido para histórico e auditoria

### Estrutura de Status
O campo `status` em `ORDER` permite controlar o fluxo completo do pedido:
- `pending`: Pedido criado mas não confirmado
- `confirmed`: Pedido confirmado pelo restaurante
- `preparing`: Pedido em preparação
- `ready`: Pedido pronto para retirada/entrega
- `in_transit`: Pedido em rota de entrega
- `delivered`: Pedido entregue com sucesso
- `cancelled`: Pedido cancelado

### Taxas e Totais
Ao invés de calcular taxas dinamicamente, optamos por armazenar valores concretos (`totalAmount`) no pedido. Isso garante que mesmo que as políticas de entrega mudem futuramente, os registros históricos permaneçam precisos.

### Extensibilidade
O modelo foi projetado para extensões futuras:
- Avaliações podem ser adicionadas com uma entidade `REVIEW`
- Categorias de restaurantes com uma entidade `CATEGORY`
- Cupons/promoções com uma entidade `PROMOTION`
- Pagamentos com uma entidade `PAYMENT`

Esta estrutura fornece uma base sólida para o aplicativo Mandaí enquanto mantém flexibilidade para evolução futura.