/**
 * Defines interface for photo
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

/**
 * Interface for photo
 */
export interface IPhoto {
    comment: string
    dir: string
    filename: string
    onClick: () => void
}
