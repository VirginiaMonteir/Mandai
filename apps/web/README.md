# Mandaí - Frontend

Frontend do aplicativo de delivery Mandaí, construído com Next.js 16, React 19 e TypeScript.

## Estrutura de Pastas

```
apps/web/
├── src/
│   ├── app/              # Páginas da aplicação usando App Router do Next.js
│   │   ├── page.tsx      # Página inicial
│   │   ├── restaurants/  # Páginas relacionadas a restaurantes
│   │   ├── cart/         # Página do carrinho
│   │   └── profile/      # Página de perfil do usuário
│   ├── components/       # Componentes reutilizáveis
│   └── lib/              # Funções utilitárias e serviços
├── public/               # Arquivos estáticos
└── styles/              # Estilos globais e temas
```

## Tecnologias

- **Next.js 16** - Framework React com renderização híbrida (SSG/SSR)
- **React 19** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para JavaScript
- **CSS Modules** - Estilização com escopo isolado

## Padrões de Desenvolvimento

- **App Router** - Utilização do novo sistema de rotas do Next.js
- **Server Components** - Componentes que são renderizados no servidor
- **CSS Modules** - Estilização com escopo isolado para evitar conflitos
- **TypeScript** - Tipagem estática para melhor manutenibilidade

## Comandos Disponíveis

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Iniciar servidor de produção
npm start

# Executar linting
npm run lint
```

## Estratégia de Dados

Os dados são atualmente mockados para fins de desenvolvimento. Em um ambiente de produção, os dados seriam obtidos através de chamadas à API do backend.

## Arquitetura de Componentes

Os componentes são organizados seguindo a arquitetura baseada em componentes modulares:
- Componentes reutilizáveis na pasta `components/`
- Estilização com CSS Modules para escopo isolado
- Separação clara entre componentes de UI e lógica de negócios

## Integração com Backend

Em uma implementação completa, este frontend se integraria com o backend através de chamadas HTTP para a API REST.