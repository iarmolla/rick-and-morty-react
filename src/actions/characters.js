function getCharacters(page) {
    return {
        type: "GET_CHARACTERS",
        page
    }
}

function getCharactersSuccess(characters) {
    return {
        type: "GET_CHARACTERS_SUCCESS",
        characters
    }
}

function getCharacter(id) {
    return {
        type: "GET_CHARACTER",
        id
    }
}

function getCharacterSuccess(character) {
    return {
        type: "GET_CHARACTER_SUCCESS",
        character
    }
}


export default {getCharacters,getCharactersSuccess,getCharacter,getCharacterSuccess}