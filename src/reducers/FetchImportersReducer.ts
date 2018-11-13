/**
 * Define a reducer for fetching importers
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Redux from 'redux'
import { ActionTypes } from '../actions'
import { IImporter } from '../interfaces/IImporter'

/**
 * Reducer for fetching importers
 */
const FetchImportersReducer: Redux.Reducer<IImporter[]> =
    (state = [], action: Redux.AnyAction) => {
        switch (action.type) {
            case ActionTypes.FETCH_IMPORTERS_SUCCESS:
                return action.items
            case ActionTypes.FETCH_FAILURE:
            default:
                return state
        }
    }

export default FetchImportersReducer
