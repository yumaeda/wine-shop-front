/**
 * CartUtility (Singleton)
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

/**
 * Interface for CartItem
 */
export interface ICartItem {
    apply: string
    availability: string
    etc: string
    member_price: number
    price: number
    stock: number
}

/**
 * Gets an boolean value whether the specified item is purchasable or not
 *
 * @param ICartItem item to check
 * @return boolean
 */
export function isPurchasable(item: ICartItem): boolean {
    return (
        (item.apply !== 'SO') &&
        (item.apply !== 'DP') &&
        (item.availability === 'Online') &&
        (item.stock > 0) &&
        (item.price > 0)
    )
}

/**
 * Gets an boolean value whether the specified item will be coming soon or not
 *
 * @param ICartItem item to check
 * @return boolean
 */
export function isComingSoon(item: ICartItem): boolean {
    const { availability, etc, stock } = item
    const regexp = new RegExp(/^\d{1,2}\.\d{1,2}$/)

    if (!etc || !regexp.test(etc)) {
        return false
    }

    return (stock > 0) && (availability === 'Online')
}
