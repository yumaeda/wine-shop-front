/**
 * Define states mutated by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

/**
 * Banner category string literals
 */
type BannerCategory =
    'Features'     |
    'Sales'        |
    'Other Drinks' |
    'Food'

/**
 * Interface for banner
 */
export interface IBanner {
    image: string
    pageUrl: string
}

/**
 * Interface for feature banner state
 */
export interface IBannerState {
    featureBanners: IBanner[]
    otherDrinkBanners: IBanner[]
    saleBanners: IBanner[]
}

/**
 * Initial value for banner
 */
export const initBanners: IBannerState = {
    featureBanners: [],
    otherDrinkBanners: [],
    saleBanners: []
}
