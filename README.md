# Bem vindo!

Este é o repositório do teste de frontend para a MarQ :clock12:. Você está preparado? :rocket::rocket::rocket:

## Descrição

O teste consiste em avaliar suas capacidades técnicas e o seu processo ao desenvolver uma aplicação dado um prazo x;
Para isto, você deverá usar a [API pública de pokémon](https://pokeapi.co) e a [biblioteca de gráficos Echarts](https://echarts.apache.org/en/index.html);
Você pode usar sua criatividade para nos mostrar o que você quiser utilizando as bibliotecas acima(mas lembre-se do prazo especificado durante a entrevista);

Aqui vai uma lista de requisitos obrigatórios:

- O projeto deve ser feito em React (javascript ou typescript, fica à seu critério)
- Deve-se utilizar as bibliotecas mencionadas acima
- Ao final do projeto, abra um pull request para a branch main deste repositório. O PR deve seguir o seguinte padrão [Seu nome] - Teste frontend

### Passos

- Crie um fork do projeto
- Clone o projeto
- Crie uma branch com seu nome antes de iniciar o desenvolvimento
- Desenvolva :)
- Crie um pull request seguindo o padrão descrito acima

### Critérios avaliativos e considerações:

- Organização do projeto
- Legibilidade do código
- Capacidade de utilizar a documentação da API e da biblioteca utilizada
- Não se esqueça de abrir um PR seguindo a regra e manter seus commits curtos

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
