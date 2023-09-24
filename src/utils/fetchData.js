//in this we made connection with rapid api

//recommend: you have to hide your key (we hide it in .env)
export const exerciseOptions = {
    method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEYY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEYY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
  
export const fetchData = async(url, options) => 
{
    const response = await fetch(url, options);
    const data = await response.json();
    
    return data;
}