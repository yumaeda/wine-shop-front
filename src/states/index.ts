/**
 * Define states mutated by Redux
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
 * Interface for wine
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
 * Interface for importer
 */
export interface IImporter {
    dir: string
    filename: string
    name: string
    url: string
}

/**
 * Interface for array of wines
 */
export interface IWines {
    wines: IWine[]
}

/**
 * Interface for filtered wines
 */
export interface IFilteredWines extends IWines {
    filter: FilterType
}

/**
 * Interface for importers
 */
export interface IImporters {
    importers: IImporter[]
}

/**
 * Declare data type of the parent state
 */
export interface IState {
    filteredWines: IFilteredWines
    importers: IImporters
    newWines: IWines
    rankingWines: IWines
}

/**
 * Initial value for wines
 */
export const initWines: IWines = {
    wines: []
}

/**
 * Initial value for filtered wines
 */
export const initFilteredWines: IFilteredWines = {
    filter: 'none',
    wines: []
}

/**
 * Initial value for importers
 */
export const initImporters: IImporters = {
    importers: []
}
