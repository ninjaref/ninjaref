/**
 * Gets a list of all competitors.
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_NINJAS } from 'containers/App/constants';
import { ninjasFetched, ninjaFetchError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Ninjas request/response handler.
 */
export function* getNinjas() {
  const requestURL = `http://localhost:9000/v1/ninjas`;

  try {
    // Call our request helper (see 'utils/request').
    const ninjas = yield call(request, requestURL)['data'];
    console.log('Fetched', ninjas)
    yield put(ninjasFetched(ninjas));
  } catch (err) {
    yield put(ninjaFetchError(err));
  }
}

/**
 * Root saga manages watcher lifecycle.
 */
export default function* ninjaData() {
  // Watches for `FETCH_NINJAS` actions and calls getNinjas when one comes in.
  //
  // By using `takeLatest` only the result of the latest API call is applied.
  //
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount.
  yield takeLatest(FETCH_NINJAS, getNinjas);
}
