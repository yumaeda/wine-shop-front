/**
 * Page component, which is included in the root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IFilteredWineState } from '../states/FilteredWineState'

/**
 * Workaround code for using lazy and Suspense
 *
 * TODO: Remove workaround code when @types/react 16.6.0 will be released
 *
 */
const lazy = (React as any).lazy
const Suspense = (React as any).Suspense

const AnywayAside    = lazy(() => import('./sidebar/AnywayAside'))
const AnywayContents = lazy(() => import('./contents/AnywayContents'))
const AnywayFooter   = lazy(() => import('./footer/AnywayFooter'))
const AnywayHeader   = lazy(() => import('./header/AnywayHeader'))

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
    <Suspense fallback={ <div>Loading...</div> }>
        <AnywayHeader logined={ true } />
        <div className="container">
            <AnywayAside />
            <AnywayContents { ...props } />
        </div>
        <AnywayFooter />
    </Suspense>
)
