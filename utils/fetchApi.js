import axios from 'axios';

export const baseUrl="https://bayut.p.rapidapi.com"

export const fetchApi =async(url)=>{
    const {data} =await axios.get((url),{
        headers: {
          'x-rapidapi-host': 'bayut.p.rapidapi.com',
          'x-rapidapi-key': '1c97d8219bmshe37a197d07acfb4p126f39jsna930ff25d533'
        }
    })
    return data;
}

