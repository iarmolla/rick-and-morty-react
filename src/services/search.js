import axios from 'axios'

const searchByName = async (name) => {
    return await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`).
    then((res)=> {
      return res
    })
  };
  
export default searchByName