/**
 * Define a reducer for fetching countries
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Redux from 'redux'
import { ActionTypes } from '../actions'
import { ICountryState, initCountryState } from '../states/CountryState'

/**
 * Reducer for fetching countries
 */
const FetchCountriesReducer: Redux.Reducer<ICountryState> =
    (state = initCountryState, action: Redux.AnyAction) => {
        switch (action.type) {
            case ActionTypes.FETCH_COUNTRIES_SUCCESS:
                return {
                    ...state,
                    countries: action.items
                }
            case ActionTypes.FETCH_FAILURE:
            default:
                return state
        }
    }

export default FetchCountriesReducer
