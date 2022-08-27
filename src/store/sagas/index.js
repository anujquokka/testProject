import {all, fork} from 'redux-saga/effects';
import {watchUserSignOut} from './user-saga';

export default function* rootSaga() {
  yield all([
   fork(watchUserSignOut)
  ]);
}
