import { fetchWords } from '../src';

it('returns all the 320140 words available on the words.txt file', async () => {
  const words = await fetchWords();

  expect(words.length).toEqual(320139);
});
