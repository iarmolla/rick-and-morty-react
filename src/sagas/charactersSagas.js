import { put, takeLatest } from "redux-saga/effects";
import actions from "../actions/characters";
import services from "../services/characters";
import character from "../services/character";
import search from "../services/search";

function* getCharacters(action) {
  const response = yield services(action.page);
  yield put(actions.getCharactersSuccess(response.data));
}

function* getCharacter(action) {
  const response = yield character(action.id);
  yield put(actions.getCharacterSuccess(response.data));
}

function* searchByName(action) {
  try {
    const response = yield search(action.query);
    yield put(actions.searchByNameSuccess(response.data));
  } catch {
    const error = 'not found'
    yield put(actions.searchByNameFailed(error));
  }
}

function* characters() {
  yield takeLatest("GET_CHARACTERS", getCharacters);
  yield takeLatest("GET_CHARACTER", getCharacter);
  yield takeLatest("SEARCH_BY_NAME", searchByName);
}

export default characters;
