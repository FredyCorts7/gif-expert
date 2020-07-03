import { getGifs } from '../../helpers/getGifs';

describe('Testing to helper getGifs', () => {
  test('should return 5 gifs with any category', async () => {
    const gifs = await getGifs('One Puch Man');

    expect(gifs.length).toBe(5);
  });

  test('should return 0 gifs without category', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
});
