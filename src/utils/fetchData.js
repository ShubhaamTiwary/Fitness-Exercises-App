export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '7fb4b0b00dmsha1d6c6b36ee2687p1c06d7jsnc25e8b0f6172',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const YoutubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  params: {
    id: 'UCE_M8A5yxnLfW0KghEeajjw'
  },
  headers: {
    'X-RapidAPI-Key': '7fb4b0b00dmsha1d6c6b36ee2687p1c06d7jsnc25e8b0f6172',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};