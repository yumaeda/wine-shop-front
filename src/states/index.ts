/**
 * Defines root state used by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

import { ICountry } from '../interfaces/ICountry'
import { IImporter } from '../interfaces/IImporter'
import { INews } from '../interfaces/INews'
import { IPhoto } from '../interfaces/IPhoto'
import { IBannerState } from './BannerState'
import { IFilteredWineState } from './FilteredWineState'
import { IWineState } from './WineState'

/**
 * Declare data type of the parent state
 */
export interface IRootState {
    banners: IBannerState
    countries: ICountry[]
    filteredWines: IFilteredWineState
    form: any
    importers: IImporter[]
    newWines: IWineState
    news: INews[]
    photos: IPhoto[]
    rankingWines: IWineState
}
