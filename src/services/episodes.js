import axios from 'axios'


const getAllEpisodes = async (pageEpisode) => {    
    const request = await axios.get( `https://rickandmortyapi.com/api/episode?page=${pageEpisode}`).then((res)=> {
      return res
    })
    return request
  };
  
  export default getAllEpisodes