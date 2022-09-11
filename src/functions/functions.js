import axios from 'axios'

//llamar a todos los personajes a la api
const getAllCharacter = async (updateCharacters,page,updatePage,state) => { 
    //state valida si se quiere ir a la otra pagina o hacia atras
    if(state){
        if(page>1)updatePage(page=page+1)
        if(page==1)updatePage(page=page+1) 
    }else{
        if(page>1){
            updatePage(page=page-1)
        }
    }          
    const request = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)   
    updateCharacters(request.data.results)
}
//obtener la cantidad de paginas de la api para despues hacer el tope maximo de paginas
export async function getAllPages(updateAllPages){
    const request = await axios.get(`https://rickandmortyapi.com/api/character`)
    updateAllPages(request.data.info.pages)
}
export const getCharacterById = (async (id, updateCharacter) => {
    const request = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    updateCharacter(request.data)
})
//obtener todos los episodios
export const getAllEpisodes = async (updateEpisodes,pageEpisode,state) => {    
    const request = await axios.get(`https://rickandmortyapi.com/api/episode?page=${pageEpisode}`)
    updateEpisodes(request.data.results)    
}
export const getAllPagesEpisodes=async (updateAllPages)=>{
    const request=await axios.get('https://rickandmortyapi.com/api/episode')
    updateAllPages(request.data.info)
}
export default getAllCharacter