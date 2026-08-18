# ADR-0002: Gerenciamento de Estado Global

- **Status:** Accepted
- **Data:** 2026-08-05

## Contexto
O aplicativo Mandaí requer gerenciamento de estado global para funcionalidades como carrinho de compras e autenticação de usuário. Precisamos de uma solução que seja simples de implementar, de fácil compreensão e que não adicione complexidade desnecessária ao projeto.

## Decisão
Utilizaremos a Context API do React para gerenciamento de estado global, isolando contextos em providers específicos e criando hooks personalizados para facilitar o consumo.

## Consequências
- Facilita o gerenciamento de estado para o carrinho de compras e autenticação do usuário
- Mantém a simplicidade sem a necessidade de bibliotecas externas como Redux
- Permite separação clara entre componentes de UI, lógica de negócios e acesso a dados
- Pode ter problemas de performance em aplicações muito grandes, mas é adequado para o escopo atual

## Alternativas consideradas
- **Redux**: Descartado por adicionar complexidade desnecessária para o tamanho e escopo do projeto
- **MobX**: Descartado por requerer paradigmas diferentes e maior curva de aprendizado
- **Zustand**: Descartado por ser uma biblioteca externa quando a solução nativa é suficiente
- **Recoil**: Descartado por ainda estar em fase experimental e pela preferência por soluções mais estáveis