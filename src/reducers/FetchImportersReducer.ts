/**
 * Define a reducer for fetching importers
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Redux from 'redux'
import { ActionTypes } from '../actions'
import { IImporterState, initImporters } from '../states'

/**
 * Reducer for fetching importers
 */
const FetchImportersReducer: Redux.Reducer<IImporterState> =
    (state = initImporters, action: Redux.AnyAction) => {
        switch (action.type) {
            case ActionTypes.FETCH_IMPORTERS_SUCCESS:
                return {
                    ...state,
                    importers: action.items
                }
            case ActionTypes.FETCH_FAILURE:
            default:
                return state
        }
    }

export default FetchImportersReducer
