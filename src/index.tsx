/**
 * Renders root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { Root } from 'components/Root'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import rootReducer from 'reducers'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
