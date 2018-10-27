import * as Redux from 'redux'
import { IWines } from '../states'

/**
 * Define action types used by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export enum ActionTypes {
    FETCH_FAILURE               = 'FETCH_FAILURE',
    FETCH_NEW_WINES_SUCCESS     = 'FETCH_NEW_WINES_SUCCESS',
    FETCH_RANKING_WINES_SUCCESS = 'FETCH_RANKING_WINES_SUCCESS',
    FETCH_START                 = 'FETCH_START',
    FETCH_SUCCESS               = 'FETCH_SUCCESS'
}

/**
 * Interface for fetch action
 */
export interface IFetchAction extends Redux.Action {
    success: string,
    url: string
}

/**
 * Create an action for fetching wines
 */
export const createFetchAction: Redux.ActionCreator<IFetchAction> =
    (success: string, url: string) => ({
        success,
        type: ActionTypes.FETCH_START,
        url
    })
