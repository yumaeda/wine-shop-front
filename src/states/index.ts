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
    capacity: number
    combined_name: string
    combined_name_jpn: string
    country: string
    producer: string
    producer_jpn: string
    region_jpn: string
    type: string
    vintage: string
}

/**
 * Interface for Country
 */
export interface ICountry {
    name: string
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
export interface IWineState {
    wines: IWine[]
}

/**
 * Interface for the country state
 */
export interface ICountryState {
    countries: ICountry[]
}

/**
 * Interface for filtered wines
 */
export interface IFilteredWineState extends IWineState {
    filter: FilterType
}

/**
 * Interface for importers
 */
export interface IImporterState {
    importers: IImporter[]
}

/**
 * Declare data type of the parent state
 */
export interface IRootState {
    countries: ICountryState
    filteredWines: IFilteredWineState
    importers: IImporterState
    newWines: IWineState
    rankingWines: IWineState
}

/**
 * Initial value for the country state
 */
export const initCountryState: ICountryState = {
    countries: []
}

/**
 * Initial value for wines
 */
export const initWines: IWineState = {
    wines: []
}

/**
 * Initial value for filtered wines
 */
export const initFilteredWines: IFilteredWineState = {
    filter: 'none',
    wines: []
}

/**
 * Initial value for importers
 */
export const initImporters: IImporterState = {
    importers: []
}
