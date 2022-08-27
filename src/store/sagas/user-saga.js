import { put, takeEvery, call } from 'redux-saga/effects';
import {
  USER, setAllPost, setAppLoader
} from '../actions';
import {
  apiUserPostList
} from '../../api';



function* handleUserGetPost() {
  try {
    const response = yield call(
      apiUserPostList,
    );
    console.log(response, 'response');
    yield put(setAppLoader(false));
    if (response) {
      yield put(setAllPost(response));
    }
  } catch (error) {
    console.log('handleUserSignOut');
  }
}



export function* watchUserSignOut() {
  yield takeEvery(USER.GET_POST, handleUserGetPost);
}
