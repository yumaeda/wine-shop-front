/**
 * Define a reducer for fetching importers
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { ActionTypes } from 'actions'
import * as Redux from 'redux'
import { IImporter } from 'states/IImporter'

/**
 * Reducer for fetching importers
 */
const FetchImportersReducer: Redux.Reducer<IImporter[]> = (
    state = [],
    action: Redux.AnyAction
) => {
    switch (action.type) {
        case ActionTypes.FETCH_IMPORTERS_SUCCESS:
            return action.items
        case ActionTypes.FETCH_FAILURE:
        default:
            return state
    }
}

export default FetchImportersReducer
