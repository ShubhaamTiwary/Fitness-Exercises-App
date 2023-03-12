export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ce4af4f226mshdf0f1a5f68c5df5p135ea3jsne57d420481f8',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const YoutubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ce4af4f226mshdf0f1a5f68c5df5p135ea3jsne57d420481f8',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};