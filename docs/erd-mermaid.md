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