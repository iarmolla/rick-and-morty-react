import { put, takeLatest } from "redux-saga/effects";
import actions from "../actions/characters";
import services from "../services/characters";
import character from "../services/character";

function* getCharacters(action) {
  const response = yield services(action.page);
  yield put(actions.getCharactersSuccess(response.data));
}

function* getCharacter(action) {
  const response = yield character(action.id);
  yield put(actions.getCharacterSuccess(response.data));
}

function* characters() {
  yield takeLatest("GET_CHARACTERS", getCharacters);
  yield takeLatest("GET_CHARACTER", getCharacter);
}

export default characters;
