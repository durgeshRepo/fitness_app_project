//in this we made connection with rapid api

export const exerciseOptions = {
    method: 'GET',
    headers: {
        //recommend: you have to hide your key (we hide it in .env)
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
  };
  
export const fetchData = async(url, options) => 
{
    const response = await fetch(url, options);
    const data = await response.json();
    
    return data;
}