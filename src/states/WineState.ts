/**
 * Define states mutated by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

import { IWine } from '../interfaces/IWine'

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
