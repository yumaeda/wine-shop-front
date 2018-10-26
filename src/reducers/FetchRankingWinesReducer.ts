/**
 * Reducer for fetching ranking wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Clone from 'clone'
import * as Redux from 'redux'
import keys from '../actions/ActionTypeKeys'
import { initRankingWines, IRankingWines } from '../states'

/**
 * Reducer for fetching ranking wines
 */
export const FetchRankingWinesReducer: Redux.Reducer<IRankingWines> =
    (state = initRankingWines, action: Redux.AnyAction) => {
        switch (action.type) {
            case keys.FETCH_RANKING_WINES_SUCCESS:
                const newState = Clone(state)
                newState.wines = action.wines
                return newState
            default:
                return state
        }
    }
