/**
 * Define a reducer for fetching banners
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Redux from 'redux'
import { ActionTypes } from '../actions'
import { IBannerState, initBanners } from '../states/BannerState'

/**
 * Reducer for fetching importers
 */
const FetchBannersReducer: Redux.Reducer<IBannerState> =
    (state = initBanners, action: Redux.AnyAction) => {
        switch (action.type) {
            case ActionTypes.FETCH_BANNERS_SUCCESS:
                return {
                    ...state,
                    banners: action.items
                }
            case ActionTypes.FETCH_FAILURE:
            default:
                return state
        }
    }

export default FetchBannersReducer
