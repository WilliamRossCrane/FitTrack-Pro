export const exerciseOptions = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
};

export const fetchData = async (URL, options) => {
  const response = await fetch(URL, options);
  const data = await response.json(); 
  return data;
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};