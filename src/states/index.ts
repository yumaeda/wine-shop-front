/**
 * Defines root state used by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

import { IBannerState } from './BannerState'
import { ICountryState } from './CountryState'
import { IFilteredWineState } from './FilteredWineState'
import { IImporterState } from './ImporterState'
import { INewsState } from './NewsState'
import { IWineState } from './WineState'

/**
 * Declare data type of the parent state
 */
export interface IRootState {
    banners: IBannerState
    countries: ICountryState
    filteredWines: IFilteredWineState
    importers: IImporterState
    newWines: IWineState
    news: INewsState
    rankingWines: IWineState
}
