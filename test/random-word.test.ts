import { randomWord } from '../src';

it('returns a random word', async () => {
  const word = await randomWord();

  expect(typeof word).toEqual('string');
});
