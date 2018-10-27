/**
 * Reducer for fetching filtered wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Clone from 'clone'
import * as Redux from 'redux'
import keys from '../actions/ActionTypeKeys'
import { IFilteredWines, initFilteredWines } from '../states'

/**
 * Reducer for fetching filtered wines
 */
export const WineListReducer: Redux.Reducer<IFilteredWines> =
    (state = initFilteredWines, action: Redux.AnyAction) => {
        switch (action.type) {
            case keys.FETCH_SUCCESS:
                const newState = Clone(state)
                newState.filter = 'none'
                newState.wines = action.wines
                return newState
            default:
                return state
        }
    }
