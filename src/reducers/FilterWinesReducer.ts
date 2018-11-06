/**
 * Reducer for fetching filtered wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Redux from 'redux'
import { ActionTypes } from '../actions'
import { IFilteredWineState, initFilteredWines } from '../states/FilteredWineState'

/**
 * Reducer for fetching filtered wines
 */
const FilterWinesReducer: Redux.Reducer<IFilteredWineState> =
    (state = initFilteredWines, action: Redux.AnyAction) => {
        switch (action.type) {
            case ActionTypes.FETCH_SUCCESS:
                return {
                    ...state,
                    filter: 'none',
                    wines: action.items
                }
            case ActionTypes.FETCH_FAILURE:
            default:
                return state
        }
    }

export default FilterWinesReducer
