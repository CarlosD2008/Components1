# 🧮 Calculadora Simples — React JS

<p align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=26&duration=2800&pause=900&color=61DAFB&center=true&vCenter=true&width=700&lines=🧮+Calculadora+Simples;⚛️+Projeto+com+React+JS;🚀+Desenvolvido+com+Vite;💡+Praticando+Componentização" alt="Typing Animation">

</p>

<p align="center">

<img src="https://img.shields.io/badge/React-18%2B-61DAFB?style=for-the-badge&logo=react&logoColor=20232A">
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">

</p>

<p align="center">

<strong>Uma calculadora simples, responsiva e componentizada desenvolvida para praticar os fundamentos do React JS.</strong>

</p>

---

## ✨ Sobre o Projeto

Este projeto foi desenvolvido como parte do desafio **Calculadora Simples — React JS**, utilizando **React JS + Vite**.

A proposta é construir uma calculadora capaz de receber dois números, permitir a escolha de uma operação matemática e apresentar o resultado de maneira clara e interativa.

> 💡 **Objetivo:** praticar conceitos fundamentais do React através de um projeto pequeno, funcional e fácil de entender.

---

## 🎯 O que o projeto faz?

```text
┌─────────────────────────────────────┐
│         🧮 CALCULADORA              │
├─────────────────────────────────────┤
│                                     │
│  🔢 Primeiro número                 │
│  ┌───────────────────────────────┐  │
│  │            10                 │  │
│  └───────────────────────────────┘  │
│                                     │
│  🔢 Segundo número                  │
│  ┌───────────────────────────────┐  │
│  │             5                 │  │
│  └───────────────────────────────┘  │
│                                     │
│  ⚙️ Operação                        │
│  ┌───────────────────────────────┐  │
│  │       +  Adição               │  │
│  └───────────────────────────────┘  │
│                                     │
│       [ 🧮 CALCULAR ]               │
│       [ 🧹 LIMPAR   ]               │
│                                     │
│  ✨ Resultado: 15                   │
│                                     │
└─────────────────────────────────────┘
```

---

# 🚀 Funcionalidades

| Recurso             | Descrição                                |
| ------------------- | ---------------------------------------- |
| 🔢 Primeiro número  | Campo para informar o primeiro valor     |
| 🔢 Segundo número   | Campo para informar o segundo valor      |
| ➕ Adição            | Soma os dois números                     |
| ➖ Subtração         | Subtrai o segundo número do primeiro     |
| ✖️ Multiplicação    | Multiplica os dois valores               |
| ➗ Divisão           | Divide o primeiro número pelo segundo    |
| 🧮 Calcular         | Executa a operação selecionada           |
| 🧹 Limpar           | Remove os valores preenchidos            |
| ⚠️ Validação        | Verifica campos vazios                   |
| 🛑 Divisão por zero | Impede operações matemáticas inválidas   |
| 📱 Responsividade   | Interface adaptada para diferentes telas |

---

# ⚛️ Tecnologias utilizadas

<p align="center">

<img src="https://skillicons.dev/icons?i=react,vite,js,css,html" />

</p>

### 🧩 React JS

Utilizado para construir a interface através de componentes reutilizáveis e controlar os estados da aplicação.

### ⚡ Vite

Responsável pelo ambiente de desenvolvimento e pela geração da versão de produção.

### 🟨 JavaScript

Utilizado para implementar toda a lógica matemática e comportamento da calculadora.

### 🎨 CSS

Responsável pela aparência, organização, responsividade e estilização da interface.

### 📝 HTML / JSX

Utilizado para estruturar os elementos da aplicação.

---

# 🧠 Conceitos de React aplicados

## 1️⃣ Componentização

O formulário da calculadora foi separado em um componente próprio:

```text
src/
└── components/
    └── FormCalculadora.jsx
```

Essa organização permite separar a responsabilidade da interface e facilita futuras alterações.

---

## 2️⃣ JSX

O React utiliza **JSX** para descrever a interface.

Exemplo:

```jsx
<form onSubmit={handleSubmit}>

    <label>
        Primeiro número
    </label>

    <input
        type="number"
        value={primeiroNumero}
        onChange={handlePrimeiroNumero}
    />

</form>
```

✨ Dessa forma, podemos combinar JavaScript com uma estrutura semelhante ao HTML.

---

# 🔄 useState

O hook `useState` é
