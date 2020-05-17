import fetchWords from './fetch-words';

async function randomWord(): Promise<String> {
  const words = await fetchWords();

  const randomIndex = Math.floor(Math.random() * words.length);

  return words[randomIndex];
}

export default randomWord;
