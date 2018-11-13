/**
 * Defines root state used by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

import { IBannerState } from './BannerState'
import { ICountry } from './CountryState'
import { IFilteredWineState } from './FilteredWineState'
import { IImporter } from './ImporterState'
import { INews } from './NewsState'
import { IWineState } from './WineState'

/**
 * Declare data type of the parent state
 */
export interface IRootState {
    banners: IBannerState
    countries: ICountry[]
    filteredWines: IFilteredWineState
    importers: IImporter[]
    newWines: IWineState
    news: INews[]
    rankingWines: IWineState
}
