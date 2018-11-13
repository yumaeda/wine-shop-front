/**
 * Page component, which is included in the root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IFilteredWineState } from '../states/FilteredWineState'

// Code-Splitting
const AnywayAside    = React.lazy(() => import('./sidebar/AnywayAside'))
const AnywayContents = React.lazy(() => import('./contents/AnywayContents'))
const AnywayFooter   = React.lazy(() => import('./footer/AnywayFooter'))
const AnywayHeader   = React.lazy(() => import('./header/AnywayHeader'))

/**
 * Interface for Page props
 */
interface IPage extends IFilteredWineState {
    match: any
}

/**
 * Page component
 */
export const Page: React.SFC<IPage> = (props) => (
    <React.Suspense fallback={ <div>Loading...</div> }>
        <AnywayHeader logined={ true } />
        <div className="container">
            <AnywayAside />
            <AnywayContents { ...props } />
        </div>
        <AnywayFooter />
    </React.Suspense>
)
