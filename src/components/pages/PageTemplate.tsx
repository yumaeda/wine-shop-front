/**
 * PageTemplate component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import ErrorBoundary from '../ErrorBoundary'

// Code-Splitting
const AnywayAside = React.lazy(() => import('../sidebar/AnywayAside'))
const AnywayFooter = React.lazy(() => import('../footer/AnywayFooter'))
const AnywayHeader = React.lazy(() => import('../header/AnywayHeader'))

/**
 * Props interface for PageTemplate
 */
interface IProps {
    children: React.ReactNode
}

/**
 * PageTemplate component
 */
const PageTemplate: React.FC<IProps> = props => {
    const { children } = props

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <AnywayHeader logined={false} />
            <div className="container">
                <AnywayAside />
                <ErrorBoundary>{children}</ErrorBoundary>
            </div>
            <AnywayFooter />
        </React.Suspense>
    )
}

export default React.memo(PageTemplate)
