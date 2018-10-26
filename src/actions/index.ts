/**
 * Creates filtering action
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Redux from 'redux'
import { WineCategory } from '../constants/WineCategory'
import keys from './ActionTypeKeys'

/**
 * Action interface for filtering wines by vintage
 */
interface IVintageFilterAction extends Redux.Action {
    vintage: number
}

/**
 * Create an action for filtering wines with the specifiedvintage
 */
export const createVintageFilterAction: Redux.ActionCreator<IVintageFilterAction> =
    (vintage: number) => {
        return {
            type: keys.VINTAGE_FILTER_ASYNC,
            vintage
        }
    }

/**
 * Action interface for filtering wines by price
 */
interface IPriceFilterAction extends Redux.Action {
    minPrice: number
    maxPrice: number
}

/**
 * Create an action for filtering wines with the specified
 * price range
 */
export const createPriceFilterAction: Redux.ActionCreator<IPriceFilterAction> =
    (minPrice: number, maxPrice: number) => {
        return {
            maxPrice,
            minPrice,
            type: keys.PRICE_FILTER_ASYNC
        }
    }
