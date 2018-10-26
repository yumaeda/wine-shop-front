import { delay, SagaIterator } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import keys from '../actions/ActionTypeKeys'

function* categoryFilter(): SagaIterator {
    yield call(delay, 2000)
    yield put({ type: keys.CATEGORY_FILTER })
}

function* vintageFilter(): SagaIterator {
    yield call(delay, 2000)
    yield put({ type: keys.VINTAGE_FILTER })
}

function* priceFilter(): SagaIterator {
    yield call(delay, 2000)
    yield put({ type: keys.PRICE_FILTER })
}

function* watchCategoryFilter(): SagaIterator {
    yield takeEvery(keys.CATEGORY_FILTER_ASYNC, categoryFilter)
}

function* watchVintageFilter(): SagaIterator {
    yield takeEvery(keys.VINTAGE_FILTER_ASYNC, vintageFilter)
}

function* watchPriceFilter(): SagaIterator {
    yield takeEvery(keys.PRICE_FILTER_ASYNC, priceFilter)
}

/**
 * Saga for fetching wine and send 'FETCH_SUCCESS' or 'FETCH_FAILURE'
 * based on the result
 */
function* fetchWines(action: { type: string, url: string, success: string }): SagaIterator {
    // Wait 5 seconds for demonstration purpose
    yield call(delay, 5000)

    try {
        const response = yield call(fetch, action.url)
        const data = yield call([ response, response.json ])
        yield put({ type: action.success, wines: data.wines })
    } catch (error) {
        yield put({ type: keys.FETCH_FAILURE, error })
    }
}

/**
 * Saga for calling fetchWines() whenever 'FETCH_START'
 * action is dispatched
 */
function* watchFetchWines(): SagaIterator {
    yield takeEvery(keys.FETCH_START, fetchWines)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        watchCategoryFilter(),
        watchVintageFilter(),
        watchPriceFilter(),
        watchFetchWines()
    ])
}
