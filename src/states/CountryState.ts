/**
 * Define states mutated by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

/**
 * Interface for Country
 */
export interface ICountry {
    name: string
}

/**
 * Interface for the country state
 */
export interface ICountryState {
    countries: ICountry[]
}

/**
 * Initial value for the country state
 */
export const initCountryState: ICountryState = {
    countries: []
}
