/**
 * Defines interface fro wine
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

import { ICartItem } from '../lib/CartUtility'

/**
 * Interface for wine
 */
export interface IWine extends ICartItem {
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
