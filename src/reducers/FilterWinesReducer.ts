/**
 * Reducer for fetching filtered wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Redux from 'redux'
import { ActionTypes } from '../actions'
import { IFilteredWines, initFilteredWines } from '../states'

/**
 * Reducer for fetching filtered wines
 */
const FilterWinesReducer: Redux.Reducer<IFilteredWines> =
    (state = initFilteredWines, action: Redux.AnyAction) => {
        switch (action.type) {
            case ActionTypes.FETCH_SUCCESS:
                return {
                    ...state,
                    filter: 'none',
                    wines: action.wines
                }
            case ActionTypes.FETCH_FAILURE:
            default:
                return state
        }
    }

export default FilterWinesReducer
