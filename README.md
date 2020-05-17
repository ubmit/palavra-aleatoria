# Palavra Aleatória

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

## Usage

The `randomWord` function returns a promise that contains a random PT-BR word:

```ts
import { randomWord } from 'palavra-aleatoria";

const word = await randomWord();
// oftalmotorrinolaringologia
```

The `fetchWords` function returns a promise that contains an array of all PT-BR words available [here](https://github.com/pythonprobr/palavras):

```ts
import { fetchWords } from 'palavra-aleatoria";

const words = await fetchWords();
// [...]
```
