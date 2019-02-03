/**
 * PageTemplate component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import ErrorBoundary from 'components/ErrorBoundary'
import { IUserContext, UserContext } from 'context/UserContext'
import * as React from 'react'
import { Redirect } from 'react-router-dom'

// Code-Splitting
const AnywayAside = React.lazy(() => import('components/sidebar/AnywayAside'))
const AnywayFooter = React.lazy(() => import('components/footer/AnywayFooter'))
const AnywayHeader = React.lazy(() => import('components/header/AnywayHeader'))

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
        <UserContext.Consumer>
            {(ctx: IUserContext) => {
                return ctx.isLogined ? (
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <AnywayHeader logined={ctx.isLogined} />
                        <div className="container">
                            <AnywayAside />
                            <ErrorBoundary>{children}</ErrorBoundary>
                        </div>
                        <AnywayFooter />
                    </React.Suspense>
                ) : (
                    <Redirect to="/login" />
                )
            }}
        </UserContext.Consumer>
    )
}

export default React.memo(PageTemplate)
