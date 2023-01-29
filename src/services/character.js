import axios from 'axios'

const getCharacterById = async (id) => {
  return await axios.get(`https://rickandmortyapi.com/api/character/${id}`).
  then((res)=> {
    return res
  })
};



export default getCharacterById