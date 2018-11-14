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
const FetchBannersReducer: Redux.Reducer<IBannerState> = (
    state = initBanners,
    action: Redux.AnyAction
) => {
    switch (action.type) {
        case ActionTypes.FETCH_FEATURE_BANNERS_SUCCESS:
            return {
                ...state,
                featureBanners: action.items
            }
        case ActionTypes.FETCH_SALE_BANNERS_SUCCESS:
            return {
                ...state,
                saleBanners: action.items
            }
        case ActionTypes.FETCH_OTHER_DRINK_BANNERS_SUCCESS:
            return {
                ...state,
                otherDrinkBanners: action.items
            }
        case ActionTypes.FETCH_FAILURE:
        default:
            return state
    }
}

export default FetchBannersReducer
