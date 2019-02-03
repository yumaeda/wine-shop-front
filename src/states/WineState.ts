/**
 * Define states mutated by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

import { IWine } from 'states/IWine'

/**
 * Interface for wine state
 */
export interface IWineState {
    wines: IWine[]
}

/**
 * Initial value for wines
 */
export const initWines: IWineState = {
    wines: []
}
