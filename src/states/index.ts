/**
 * Defines root state used by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

import { IBannerState } from 'states/BannerState'
import { IFilteredWineState } from 'states/FilteredWineState'
import { ICountry } from 'states/ICountry'
import { IImporter } from 'states/IImporter'
import { INews } from 'states/INews'
import { IPhoto } from 'states/IPhoto'
import { IWineset } from 'states/IWineset'
import { IWineState } from 'states/WineState'

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
    winesets: IWineset[]
}
