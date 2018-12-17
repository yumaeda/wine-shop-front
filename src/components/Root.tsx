/**
 * Root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as Redux from 'redux'
import { defaultContext, UserContext } from '../context/UserContext'
import FilteredWinePage from './pages/FilteredWinePage'
import HomePage from './pages/HomePage'
import IframePage from './pages/IframePage'
import LoginPage from './pages/LoginPage'
import PhotoPage from './pages/PhotoPage'
import RegistrationPage from './pages/RegistrationPage'

/**
 * Root component
 */
export const Root: React.FC<{ store: Redux.Store }> = props => (
    <Provider store={props.store}>
        <UserContext.Provider value={defaultContext}>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/filter" component={FilteredWinePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/photo" component={PhotoPage} />
                    <Route path="/register" component={RegistrationPage} />
                    <Route path="/:page?" component={IframePage} />
                </Switch>
            </Router>
        </UserContext.Provider>
    </Provider>
)
