/**
 * Defines filtering actions
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Redux from 'redux';

/**
 * String literal types fro wine type
 */
export type WineCategory =
    'Mousseux'  |
    'Champagne' |
    'Blanc'     |
    'Rosé'     |
    'Rouge'     |
    'Doux'      |
    'Eau de Vie';

/**
 * Action interface for filtering wines by category
 */
export interface ICategoryFilterAction extends Redux.Action {
    category: WineCategory;
}

/**
 * Action interface for filtering wines by price
 */
export interface IPriceFilterAction extends Redux.Action {
    minPrice: number;
    maxPrice: number;
}

/**
 * Action interface for filtering wines by vintage
 */
export interface IVintageFilterAction extends Redux.Action {
    fromYear: number;
    toYear: number;
}
