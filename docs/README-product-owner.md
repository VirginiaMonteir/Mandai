# Agente Product Owner - Mandaí

<div class="product-owner-agent">
<span class="product-owner-badge">PRODUCT OWNER</span>
</div>

Este documento descreve como utilizar o agente Product Owner no projeto Mandaí.

## Identificação Visual

Todos os artefatos produzidos pelo Product Owner são identificados com:
- Cor de fundo: `#E3F2FD` (Azul claro)
- Cor primária: `#1976D2` (Azul médio)
- Cor secundária: `#0D47A1` (Azul escuro)

Estilo CSS disponível em: [/docs/assets/product-owner.css](product-owner.css)

## Estrutura de Diretórios

```
/docs/
├── assets/
│   └── product-owner.css      # Estilos para identificação visual
├── user-stories/              # Diretório com todas as user stories
│   ├── US-01-explorar-restaurantes.md
│   └── US-02-visualizar-detalhes-restaurante.md
└── product-owner-responsibilities.md
```

## Como Solicitar User Stories

Para solicitar a criação de uma nova User Story ao Product Owner, utilize uma instrução clara e específica como:

> "Product Owner, crie uma user story para [funcionalidade desejada]"

O Product Owner irá então:
1. Analisar a solicitação
2. Criar uma User Story seguindo o padrão pré-definido
3. Salvar o arquivo em `/docs/user-stories/` com a numeração sequencial apropriada

## Padrão de User Story

As User Stories seguem o formato:

```markdown
#US-XX: [Título da feature]

**Como** [tipo de usuário],
**eu quero** [ação da funcionalidade],
**para que** [benefício ou valor do negócio].

## Critérios de aceite

- [] Critério 1
- [] Critério 2
- [] Critério 3

## Notas técnicas

- Detalhes relevantes para a implementação

## Fora de escopo

- O que não faz parte dessa user story
```

## Cores para Identificação Visual

Para referência, as cores utilizadas para identificar os artefatos do Product Owner são:

| Elemento | Cor | Código HEX |
|----------|-----|------------|
| Fundo | Azul claro | `#E3F2FD` |
| Primária | Azul médio | `#1976D2` |
| Secundária | Azul escuro | `#0D47A1` |
| Badge | Azul médio com texto branco | `#1976D2` + `#FFFFFF` |

## Exemplos de User Stories

Confira os exemplos já criados:
1. [US-01: Explorar lista de restaurantes](user-stories/US-01-explorar-restaurantes.md)
2. [US-02: Visualizar detalhes do restaurante](user-stories/US-02-visualizar-detalhes-restaurante.md)