# Palavra Aleatória

![https://www.npmjs.com/package/palavra-aleatoria](https://img.shields.io/bundlephobia/min/palavra-aleatoria?style=flat-square)

A package to help you when you need a random Brazilian Portuguese word.

## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

## Installation

```sh
yarn add palavra-aleatoria
# npm i palavra-aleatoria
```

## Usage

The `randomWord` function returns a promise that contains a random PT-BR word:

```ts
import { randomWord } from 'palavra-aleatoria';

(async () => {
  const word = await randomWord();
  // oftalmotorrinolaringologia
})();
```

The `fetchWords` function returns a promise that contains an array of all PT-BR words available [here](https://github.com/pythonprobr/palavras):

```ts
import { fetchWords } from 'palavra-aleatoria';

(async () => {
  const words = await fetchWords();
  // [...]
})();
```
