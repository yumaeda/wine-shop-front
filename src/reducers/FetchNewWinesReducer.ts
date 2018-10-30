/**
 * Define a reducer for fetching new wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Redux from 'redux'
import { ActionTypes } from '../actions'
import { initWines, IWines } from '../states'

/**
 * Reducer for fetching new wines
 */
const FetchNewWinesReducer: Redux.Reducer<IWines> =
    (state = initWines, action: Redux.AnyAction) => {
        switch (action.type) {
            case ActionTypes.FETCH_NEW_WINES_SUCCESS:
                return {
                    ...state,
                    wines: action.items
                }
            case ActionTypes.FETCH_FAILURE:
            default:
                return state
        }
    }

export default FetchNewWinesReducer
