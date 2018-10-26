/**
 * Filterd wine state used by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

/**
 * String literal types for filter
 */
export type FilterType =
    'none'     |
    'category' |
    'price'    |
    'vintage'

/**
 * Interface for Wine
 */
export interface IWine {
    barcode_number: string
    combined_name: string
    combined_name_jpn: string
    producer: string
    producer_jpn: string
    vintage: string
}

/**
 * Interface for filtered wines
 */
export interface IFilteredWines {
    filter: FilterType
    wines: IWine[]
}

/**
 * Interface for new wines
 */
export interface INewWines {
    wines: IWine[]
}

/**
 * Interface for ranking wines
 */
export interface IRankingWines {
    wines: IWine[]
}

/**
 * Declare data type of the parent state
 */
export interface IState {
    filteredWines: IFilteredWines
    newWines: INewWines
    rankingWines: IRankingWines
}

/**
 * Default value for the filtered wines
 */
export const initFilteredWines: IFilteredWines = {
    filter: 'none',
    wines: []
}

/**
 * Default value for the new wines
 */
export const initNewWines: INewWines = {
    wines: []
}

/**
 * Default value for the ranking wines
 */
export const initRankingWines: IRankingWines = {
    wines: []
}
