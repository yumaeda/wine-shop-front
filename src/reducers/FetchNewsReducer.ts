/**
 * Define a reducer for fetching news
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Redux from 'redux'
import { ActionTypes } from '../actions'
import { INews } from '../states/NewsState'

/**
 * Reducer for fetching news
 */
const FetchNewsReducer: Redux.Reducer<INews[]> =
    (state = [], action: Redux.AnyAction) => {
        switch (action.type) {
            case ActionTypes.FETCH_NEWS_SUCCESS:
                return action.items
            case ActionTypes.FETCH_FAILURE:
            default:
                return state
        }
    }

export default FetchNewsReducer
