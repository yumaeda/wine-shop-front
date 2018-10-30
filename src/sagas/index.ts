import { SagaIterator } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { ActionTypes } from '../actions'

/**
 * Saga for fetching wine and send the specified action
 * based on the result
 */
function* fetchWines(action: { type: string, url: string, success: string }): SagaIterator {
    try {
        const response = yield call(fetch, action.url)
        const data = yield call([ response, response.json ])
        const items = data.items ? data.items : data;
        yield put({ type: action.success, items })
    } catch (error) {
        yield put({ type: ActionTypes.FETCH_FAILURE, error })
    }
}

/**
 * Saga for calling fetchWines() whenever 'FETCH_START'
 * action is dispatched
 */
function* watchFetchWines(): SagaIterator {
    yield takeEvery(ActionTypes.FETCH_START, fetchWines)
}

/**
 * Root saga, which contains all the child sagas
 */
export default function* rootSaga() {
    yield all([
        watchFetchWines()
    ])
}
