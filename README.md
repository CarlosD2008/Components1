# Calculadora Simples — React JS

Projeto desenvolvido para o desafio **Calculadora Simples**, com React JS e Vite.

## Funcionalidades

- Entrada do primeiro número;
- Entrada do segundo número;
- Seleção das operações de adição, subtração, multiplicação e divisão;
- Botão **Calcular**;
- Botão **Limpar**;
- Exibição do resultado na tela;
- Validação de campos vazios;
- Tratamento de divisão por zero;
- Layout responsivo e estilização própria do componente.

## Como executar

É necessário ter o [Node.js](https://nodejs.org/) instalado.

```bash
npm install
npm run dev
```

Depois, acesse o endereço exibido pelo Vite no terminal, normalmente `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
```

## Estrutura principal

```text
src/
├── components/
│   ├── FormCalculadora.jsx
│   └── FormCalculadora.css
├── App.jsx
├── index.css
└── main.jsx
```

## Conceitos aplicados

### Componentização

O formulário foi separado no componente reutilizável `FormCalculadora.jsx`, localizado dentro da pasta `src/components`, conforme solicitado no desafio.

### JSX

A interface é descrita usando JSX, que permite escrever a estrutura visual com elementos semelhantes ao HTML dentro do JavaScript.

### Estado com `useState`

O hook `useState` controla os valores dos dois números, da operação selecionada, do resultado e da mensagem de erro. Quando um estado muda, o React atualiza a tela automaticamente.

### Eventos

Foram utilizados eventos como `onChange` para acompanhar a digitação e a seleção da operação, `onSubmit` para calcular e `onClick` para limpar o formulário.

### Renderização condicional

O resultado e a mensagem de erro são mostrados de forma condicional. Assim, a interface apresenta o resultado somente depois do cálculo e exibe mensagens úteis quando há algum problema.

### Boas práticas

Os campos possuem `label` associado, os botões têm tipos definidos e o resultado usa `aria-live` para melhorar a acessibilidade ao ser atualizado.

## Operações

As operações são organizadas no objeto `OPERACOES`, que relaciona cada símbolo a uma função matemática. Essa abordagem mantém a lógica de cálculo clara e evita repetição de código.

## Autor

Projeto acadêmico desenvolvido como exercício de React JS.
