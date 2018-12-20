/**
 * Define a reducer for fetching winesets
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Redux from 'redux'
import { ActionTypes } from '../actions'
import { IWineset } from '../interfaces/IWineset'

/**
 * Reducer for fetching winesets
 */
const FetchWinesetsReducer: Redux.Reducer<IWineset[]> = (
    state = [],
    action: Redux.AnyAction
) => {
    switch (action.type) {
        case ActionTypes.FETCH_WINESETS_SUCCESS:
            return action.items
        case ActionTypes.FETCH_FAILURE:
        default:
            return state
    }
}

export default FetchWinesetsReducer
