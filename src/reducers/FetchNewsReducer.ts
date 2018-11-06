/**
 * Define a reducer for fetching news
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Redux from 'redux'
import { ActionTypes } from '../actions'
import { INewsState, initNews } from '../states/NewsState'

/**
 * Reducer for fetching news
 */
const FetchNewsReducer: Redux.Reducer<INewsState> =
    (state = initNews, action: Redux.AnyAction) => {
        switch (action.type) {
            case ActionTypes.FETCH_NEWS_SUCCESS:
                return {
                    ...state,
                    news: action.items
                }
            case ActionTypes.FETCH_FAILURE:
            default:
                return state
        }
    }

export default FetchNewsReducer
