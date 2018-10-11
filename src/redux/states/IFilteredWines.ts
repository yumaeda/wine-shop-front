/**
 * String literal types for filter
 */
export type FilterType =
    'none' |
    'category' |
    'price' |
    'vintage';

/**
 * Interface for Wine
 */
export interface IWine {
    barcode_number: string;
    combined_name: string;
    combined_name_jpn: string;
    producer: string;
    producer_jpn: string;
    vintage: string;
}

/**
 * Interface for filtered wines
 */
export interface IFilteredWines {
    filter: FilterType;
    wines: IWine[];
}

/**
 * Default value for the filtered wines
 */
export const initFilteredWines: IFilteredWines = {
    filter: 'none',
    wines: []
};
