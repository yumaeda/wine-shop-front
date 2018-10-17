/**
 * Persists user context data
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface for the user context
 */
export interface IUserContext {
    code: string
    imgDir: string
    siteUrl: string
}

/**
 * Default user context
 */
export const defaultContext: IUserContext = {
    code: 'ja',
    imgDir: 'http://anyway-grapes.jp/images',
    siteUrl: 'http://anyway-grapes.jp'
}

/**
 * UserContext component
 */
export const UserContext = React.createContext(defaultContext)
