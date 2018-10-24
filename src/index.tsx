/**
 * Renders root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import FetchWinesContainer from './containers/FetchWinesContainer'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <FetchWinesContainer store={ store } url="api/v1/wines" />,
    document.getElementById('app')
)
