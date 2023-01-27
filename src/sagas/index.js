import { all, fork } from 'redux-saga/effects';
import characters from './charactersSagas';
import episodes from './episodesSagas'


function* rootSaga () {
  yield all([
    fork(characters),
    fork(episodes),

  ]);
}

export default rootSaga
