/**
 * Define states mutated by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

import { IWineState } from './WineState'

/**
 * String literal types for filter
 */
export type FilterType = 'none' | 'category' | 'price' | 'vintage'

/**
 * Interface for filtered wines
 */
export interface IFilteredWineState extends IWineState {
    filter: FilterType
}

/**
 * Initial value for filtered wines
 */
export const initFilteredWines: IFilteredWineState = {
    filter: 'none',
    wines: []
}
