import axios from 'axios'

const getCharacters = async (page) => {
  return await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`).then((res)=> {return res})
};

export default getCharacters