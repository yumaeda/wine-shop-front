/**
 * Define a root reducer for Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { combineReducers } from 'redux'
import { IState } from '../states'
import { WineListReducer } from './WineListReducer'

/**
 * Root reducer
 */
const rootReducer = combineReducers<IState>({
    filteredWines: WineListReducer
})

export default rootReducer
