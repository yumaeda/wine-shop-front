/**
 * Reducer for fetching new wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Clone from 'clone'
import * as Redux from 'redux'
import keys from '../actions/ActionTypeKeys'
import { INewWines, initNewWines } from '../states'

/**
 * Reducer for fetching new wines
 */
export const FetchNewWinesReducer: Redux.Reducer<INewWines> =
    (state = initNewWines, action: Redux.AnyAction) => {
        switch (action.type) {
            case keys.FETCH_NEW_WINES_SUCCESS:
                const newState = Clone(state)
                newState.wines = action.wines
                return newState
            default:
                return state
        }
    }
