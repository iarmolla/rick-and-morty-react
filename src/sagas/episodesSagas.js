import { put, takeLatest } from "redux-saga/effects";
import actions from "../actions/episodes";
import services from "../services/episodes";

function* getEpisodes(action) {
  const response = yield services(action.page);
  yield put(actions.getEpisodesSuccess(response.data));
}

function* episodes() {
  yield takeLatest("GET_EPISODES", getEpisodes);
}

export default episodes;
