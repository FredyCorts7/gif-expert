import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

describe('Testing to customHook useFetchGifs', () => {
  const category = 'One Piece';

  test('should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    const { data: gifs, loading } = result.current;

    await waitForNextUpdate();
    expect(gifs).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('should return images array and loading with false value', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    await waitForNextUpdate();
    const { data: gifs, loading } = result.current;

    expect(gifs.length).toBe(5);
    expect(loading).toBeFalsy();
  });
});
