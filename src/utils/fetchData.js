export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '4078ad3a5cmshb3424c404cf42cbp11b3e7jsna53b8adcbdb2',
  },
};

export const YoutubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4078ad3a5cmshb3424c404cf42cbp11b3e7jsna53b8adcbdb2',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};