function getCharacters(page) {
  return {
    type: "GET_CHARACTERS",
    page,
  };
}

function getCharactersSuccess(characters) {
  return {
    type: "GET_CHARACTERS_SUCCESS",
    characters,
  };
}

function getCharacter(id) {
  return {
    type: "GET_CHARACTER",
    id,
  };
}

function getCharacterSuccess(character) {
  return {
    type: "GET_CHARACTER_SUCCESS",
    character,
  };
}

function updatePage(page) {
  return {
    type: "UPDATE_PAGE",
    page,
  };
}

function orderCharacterByName() {
  return {
    type: "UPDATE_CHARACTERS",
  };
}

function orderByGender() {
  return {
    type: "ORDER_BY_GENDER",
  };
}

export default {
  getCharacters,
  getCharactersSuccess,
  getCharacter,
  getCharacterSuccess,
  updatePage,
  orderCharacterByName,
  orderByGender
}
