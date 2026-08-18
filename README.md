# Mandaí - Aplicativo de Delivery

Mandaí é um aplicativo de delivery desenvolvido com Next.js 16, TypeScript e React. O aplicativo permite aos usuários navegar por restaurantes, visualizar menus, adicionar itens ao carrinho e simular um processo de checkout.

## Funcionalidades

- Página inicial com navegação para restaurantes
- Listagem de restaurantes com seus respectivos menus
- Carrinho de compras funcional com adição, remoção e atualização de quantidades
- Página de perfil do usuário
- Cabeçalho com navegação e contador de itens no carrinho
- Rodapé com informações de contato

## Tecnologias Utilizadas

- Next.js 16 (App Router)
- TypeScript
- React 19
- CSS Modules para estilização
- Context API para gerenciamento de estado

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- Node.js (versão 18 ou superior)
- npm (geralmente vem com o Node.js)

## Instalação

1. Clone o repositório ou navegue até o diretório do projeto:
   ```
   cd mandai
   ```

2. Instale as dependências do projeto:
   ```
   npm install
   ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute:

```
npm run dev
```

O servidor será iniciado e estará disponível nos seguintes endereços:

- Local: http://localhost:3001
- Network: http://10.30.40.31:3001

A porta padrão é 3001. Se essa porta estiver ocupada, o Next.js automaticamente tentará outras portas disponíveis.

## Estrutura do Projeto

```
mandai/
├── src/
│   ├── app/                 # Páginas da aplicação usando App Router
│   │   ├── page.tsx         # Página inicial
│   │   ├── restaurants/     # Página de restaurantes
│   │   ├── cart/            # Página do carrinho
│   │   └── profile/         # Página de perfil
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Header/          # Cabeçalho da aplicação
│   │   └── Footer/          # Rodapé da aplicação
│   ├── context/             # Contextos do React para gerenciamento de estado
│   └── lib/                 # Funções auxiliares e serviços
├── public/                  # Arquivos estáticos
└── ...
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria a versão otimizada para produção
- `npm run start`: Inicia o servidor de produção (requer build prévio)
- `npm run lint`: Executa o linter para verificar problemas no código

## Navegação

Após iniciar o aplicativo, você pode navegar pelas seguintes páginas:

- Página inicial: http://localhost:3001/
- Restaurantes: http://localhost:3001/restaurants
- Carrinho: http://localhost:3001/cart
- Perfil: http://localhost:3001/profile

## Funcionalidade do Carrinho

- Adicione itens ao carrinho a partir da página de restaurantes
- Visualize e edite os itens no carrinho na página do carrinho
- Atualize quantidades ou remova itens conforme necessário
- Simule o processo de checkout na página do carrinho

## Contribuindo

Como este é um projeto de demonstração, não há um processo formal de contribuição. No entanto, sinta-se à vontade para clonar, modificar e experimentar com o código.

## Licença

Este projeto é destinado apenas para fins educacionais e demonstração.

## Suporte

Para dúvidas sobre o projeto, consulte a documentação do Next.js em https://nextjs.org/docs