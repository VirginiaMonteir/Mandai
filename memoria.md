# Memória do Projeto Mandaí

## Visão Geral

O Mandaí é um aplicativo de delivery desenvolvido com Next.js 16, TypeScript e React. O projeto foi criado para demonstrar a construção de um aplicativo web moderno com funcionalidades de e-commerce, incluindo navegação entre páginas, gerenciamento de estado global, carrinho de compras e integração com API.

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

## Tecnologias Principais

- **Next.js 16**: Framework React com App Router para roteamento e renderização do lado do servidor
- **TypeScript**: Tipagem estática para melhor manutenibilidade e detecção de erros
- **React 19**: Biblioteca para construção da interface do usuário
- **CSS Modules**: Estilização dos componentes com escopo limitado
- **Context API**: Gerenciamento de estado global da aplicação

## Funcionalidades Implementadas

### 1. Página Inicial
- Interface acolhedora com boas-vindas ao usuário
- Link direto para explorar restaurantes
- Navegação para outras seções do aplicativo

### 2. Listagem de Restaurantes
- Exibição de cards com informações dos restaurantes
- Visualização dos menus de cada restaurante
- Capacidade de adicionar itens ao carrinho diretamente da página

### 3. Carrinho de Compras
- Adição, remoção e atualização de quantidades de itens
- Cálculo automático do valor total do pedido
- Persistência dos itens no carrinho entre navegações
- Simulação de processo de checkout

### 4. Página de Perfil
- Exibição de informações do usuário
- Histórico de pedidos (simulado)
- Dados de contato e endereço

### 5. Componentes de Interface
- **Header**: Barra de navegação superior com links para todas as páginas e indicador do número de itens no carrinho
- **Footer**: Informações de contato e links úteis na parte inferior de todas as páginas

## Arquitetura e Padrões de Projeto

### Gerenciamento de Estado
- Utilização da Context API do React para gerenciar:
  - Estado do carrinho de compras
  - Informações de autenticação do usuário (pré-configurado)
- Isolamento dos contextos em providers específicos
- Uso de hooks personalizados (`useCart`, `useAuth`) para facilitar o consumo dos contextos

### Roteamento
- Implementação do App Router do Next.js 16
- Estrutura de pastas que reflete as rotas da aplicação
- Navegação declarativa com componente `Link` do Next.js

### Estilização
- CSS Modules para garantir escopo isolado dos estilos
- Componentização das folhas de estilo seguindo a estrutura de componentes
- Design responsivo para diferentes dispositivos

### Integração com API
- Criação de serviço dedicado (`restaurantService.ts`) para comunicação com a API
- Dados simulados para representar restaurantes e seus menus
- Estrutura preparada para fácil substituição por API real

## Problemas Encontrados e Soluções

### Erro de Formato de Módulo
- **Problema**: Conflito entre `type: "commonjs"` no `package.json` e uso de sintaxe ES Modules (`import`/`export`)
- **Solução**: Alteração do campo `type` para `"module"` no `package.json`
- **Impacto**: Resolução imediata dos erros de build e execução correta da aplicação

## Considerações Técnicas Importantes

### Performance
- Componentes otimizados com `React.memo` onde apropriado
- Carregamento sob demanda das páginas (lazy loading)
- Código particionado seguindo as rotas da aplicação

### Manutenibilidade
- Separação clara entre componentes de UI, lógica de negócios e acesso a dados
- Tipagem forte com TypeScript em todas as interfaces e props
- Estrutura de pastas intuitiva e consistente

### Extensibilidade
- Arquitetura modular pronta para expansão
- Contextos bem definidos que podem ser facilmente estendidos
- Serviços isolados que permitem troca da fonte de dados

## Instruções para Execução

1. Instalar dependências: `npm install`
2. Executar ambiente de desenvolvimento: `npm run dev`
3. Acessar http://localhost:3001

## Possíveis Melhorias Futuras

1. **Autenticação Real**: Implementar sistema de login/registro com backend
2. **Pagamento**: Integrar gateway de pagamento
3. **Busca e Filtros**: Adicionar capacidade de busca e filtragem de restaurantes
4. **Notificações**: Sistema de notificações em tempo real para status de pedidos
5. **Mapas**: Integração com mapas para localização de restaurantes e entrega
6. **Avaliações**: Sistema de avaliações de restaurantes e pratos
7. **Favoritos**: Permitir usuários marcar restaurantes e pratos favoritos

## Lições Aprendidas

- A importância de alinhar a configuração do projeto (package.json) com as práticas de codificação reais
- O poder da Context API para gerenciamento de estado em aplicações de médio porte
- A eficiência do App Router do Next.js para criação de aplicações com múltiplas páginas
- A necessidade de uma boa estrutura de pastas desde o início do projeto para manutenibilidade

## Agentes do Sistema

### Product Owner
- **Objetivo**: Definir funcionalidades através de User Stories bem estruturadas
- **Documentação**: [/docs/product-owner-memory.md](docs/product-owner-memory.md)
- **Identificação Visual**: Cor de fundo azul claro (#E3F2FD)
- **User Stories**: Armazenadas em [/docs/user-stories/](docs/user-stories/)

## User Stories Criadas

1. [US-01: Explorar lista de restaurantes](docs/user-stories/US-01-explorar-restaurantes.md)
2. [US-02: Visualizar detalhes do restaurante](docs/user-stories/US-02-visualizar-detalhes-restaurante.md)
3. [US-03: Listar restaurantes na tela inicial](docs/user-stories/US-03-listar-restaurantes-tela-inicial.md)
4. [US-04: Ver detalhes do restaurante](docs/user-stories/US-04-ver-detalhes-restaurante.md)
5. [US-05: Gerenciar itens no carrinho de compras](docs/user-stories/US-05-gerenciar-carrinho-compras.md)

Este projeto serve como uma base sólida para aplicações de delivery mais complexas e pode ser facilmente expandido com novas funcionalidades.