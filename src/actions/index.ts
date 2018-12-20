import * as Redux from 'redux'

/**
 * Define action types used by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export enum ActionTypes {
    FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS',
    FETCH_FAILURE = 'FETCH_FAILURE',
    FETCH_FEATURE_BANNERS_SUCCESS = 'FETCH_FEATURE_BANNERS_SUCCESS',
    FETCH_IMPORTERS_SUCCESS = 'FETCH_IMPORTERS_SUCCESS',
    FETCH_NEW_WINES_SUCCESS = 'FETCH_NEW_WINES_SUCCESS',
    FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
    FETCH_OTHER_DRINK_BANNERS_SUCCESS = 'FETCH_OTHER_DRINK_BANNERS_SUCCESS',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
    FETCH_RANKING_WINES_SUCCESS = 'FETCH_RANKING_WINES_SUCCESS',
    FETCH_SALE_BANNERS_SUCCESS = 'FETCH_SALE_BANNERS_SUCCESS',
    FETCH_START = 'FETCH_START',
    FETCH_SUCCESS = 'FETCH_SUCCESS',
    FETCH_WINESETS_SUCCESS = 'FETCH_WINESETS_SUCCESS'
}

/**
 * Interface for fetch action
 */
export interface IFetchAction extends Redux.Action {
    success: string
    url: string
}

/**
 * Create an action for fetching wines
 */
export const createFetchAction: Redux.ActionCreator<IFetchAction> = (
    success: string,
    url: string
) => ({
    success,
    type: ActionTypes.FETCH_START,
    url
})
