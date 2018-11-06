/**
 * Define a reducer for fetching ranking wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Redux from 'redux'
import { ActionTypes } from '../actions'
import { initWines, IWineState } from '../states'

/**
 * Reducer for fetching ranking wines
 */
const FetchRankingWinesReducer: Redux.Reducer<IWineState> =
    (state = initWines, action: Redux.AnyAction) => {
        switch (action.type) {
            case ActionTypes.FETCH_RANKING_WINES_SUCCESS:
                return {
                    ...state,
                    wines: action.items
                }
            case ActionTypes.FETCH_FAILURE:
            default:
                return state
        }
    }

export default FetchRankingWinesReducer
