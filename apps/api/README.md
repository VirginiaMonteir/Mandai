# Mandaí API

API backend para o aplicativo de delivery Mandaí.

## Estrutura do Projeto

```
apps/api/
├── src/
│   ├── domain/          # Entidades e modelos de domínio
│   ├── application/     # Lógica de aplicação e casos de uso
│   ├── infrastructure/  # Implementações concretas (repositórios, rotas, etc.)
│   ├── types/           # Declarações de tipos TypeScript
│   └── server.ts        # Ponto de entrada da aplicação
├── package.json         # Dependências e scripts
└── tsconfig.json        # Configuração do TypeScript
```

## Tecnologias

- Fastify - Framework web rápido e leve
- TypeScript - Tipagem estática para JavaScript
- DDD (Domain-Driven Design) - Arquitetura orientada ao domínio

## Rotas Disponíveis

### Restaurantes

- `GET /api/v1/restaurants` - Obter todos os restaurantes
- `GET /api/v1/restaurants/:id` - Obter um restaurante pelo ID
- `GET /api/v1/restaurants/:id/menu` - Obter todos os itens do menu de um restaurante
- `GET /api/v1/restaurants/:id/menu/category/:category` - Obter itens do menu por categoria
- `GET /api/v1/restaurants/:id/menu/search?q=:term` - Pesquisar itens do menu
- `GET /api/v1/restaurants/:id/menu/categories` - Obter categorias do menu

### Pedidos

- `POST /api/v1/orders` - Criar um novo pedido
- `GET /api/v1/orders/:id` - Obter um pedido pelo ID
- `GET /api/v1/users/:userId/orders` - Obter todos os pedidos de um usuário
- `PATCH /api/v1/orders/:id/status` - Atualizar status do pedido
- `POST /api/v1/orders/:id/items` - Adicionar item ao pedido
- `GET /api/v1/orders/:id/items` - Obter itens do pedido
- `DELETE /api/v1/orders/:id/items/:itemId` - Remover item do pedido

## Scripts Disponíveis

- `npm run dev` - Iniciar o servidor em modo de desenvolvimento
- `npm run start` - Iniciar o servidor em modo de produção
- `npm run test` - Executar testes

## Contribuindo

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Inicie o servidor com `npm run dev`
4. A API estará disponível em `http://localhost:3001`