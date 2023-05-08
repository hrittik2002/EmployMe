import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY
export const searchJobByQuery = async(jobRole , jobLocation) => {
    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: `${jobRole} in ${jobLocation}`,
        },
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}



