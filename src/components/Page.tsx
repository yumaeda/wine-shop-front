/**
 * Page component, which is included in the root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IFilteredWines } from '../states'
import { AnywayContents } from './contents/AnywayContents'
import { AnywayFooter } from './footer/AnywayFooter'
import { AnywayHeader } from './header/AnywayHeader'
import { AnywayAside } from './sidebar/AnywayAside'

/**
 * Interface for Page props
 */
interface IPage extends IFilteredWines {
    match: any
}

/**
 * Page component
 */
export const Page: React.SFC<IPage> = (props) => (
    <React.StrictMode>
        <AnywayHeader logined={ true } />
        <div className="container">
            <AnywayAside />
            <AnywayContents { ...props } />
        </div>
        <AnywayFooter />
    </React.StrictMode>
)
