/**
 * Define a reducer for fetching winesets
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { ActionTypes } from 'actions'
import * as Redux from 'redux'
import { IWineset } from 'states/IWineset'

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
