/**
 * Define news state
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

/**
 * Interface for news
 */
export interface INews {
    date: number
    description: string
    month: number
    year: number
}

/**
 * Interface for the news state
 */
export interface INewsState {
    news: INews[]
}

/**
 * Initial value for news
 */
export const initNews: INewsState = {
    news: []
}
