import p from 'phin';

const wordsSourceUrl =
  'https://raw.githubusercontent.com/pythonprobr/palavras/master/palavras.txt';

async function fetchWords(): Promise<String[]> {
  const response = await p(wordsSourceUrl);

  const words = response.body.toString().split('\n');

  return words;
}

export default fetchWords;
