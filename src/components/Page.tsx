/**
 * Page component, which is included in the root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IFilteredWines } from '../states'
import AnywayContents from './contents/AnywayContents'
import AnywayFooter from './footer/AnywayFooter'
import AnywayHeader from './header/AnywayHeader'
import AnywayAside from './sidebar/AnywayAside'

/**
 * Uncomment below when @types/react 16.6.0 will be released
 *
 * const AnywayContents = React.lazy(() => import('./contents/AnywayContents'))
 * const AnywayFooter   = React.lazy(() => import('./footer/AnywayFooter'))
 * const AnywayHeader   = React.lazy(() => import('./header/AnywayHeader'))
 * const AnywayAside    = React.lazy(() => import('./sidebar/AnywayAside'))
 */

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
    <>
    { /* <React.StrictMode> */ }
        { /* <Suspense fallback={ <div>Loading...</div> }> */ }
        <AnywayHeader logined={ true } />
        <div className="container">
            <AnywayAside />
            <AnywayContents { ...props } />
        </div>
        <AnywayFooter />
        { /* </Suspense> */ }
    { /* </React.StrictMode> */ }
    </>
)
