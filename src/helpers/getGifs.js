export const getGifs = async category => {
  const urlApi = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&api_key=6MHVl6HTJ4twJYLAyRECVLcbOdEfZxmF&limit=5`;
  const res = await fetch(urlApi);
  const { data } = await res.json();
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    };
  });
  return gifs;
};
