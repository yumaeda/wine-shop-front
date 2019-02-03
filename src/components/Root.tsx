/**
 * Root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import FilteredWinePage from 'components/pages/FilteredWinePage'
import HomePage from 'components/pages/HomePage'
import IframePage from 'components/pages/IframePage'
import LoginPage from 'components/pages/LoginPage'
import PhotoPage from 'components/pages/PhotoPage'
import RegistrationPage from 'components/pages/RegistrationPage'
import WinesetPage from 'components/pages/WinesetPage'
import { defaultContext, UserContext } from 'context/UserContext'
import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as Redux from 'redux'

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
                    <Route path="/wineset" component={WinesetPage} />
                    <Route path="/register" component={RegistrationPage} />
                    <Route path="/:page?" component={IframePage} />
                </Switch>
            </Router>
        </UserContext.Provider>
    </Provider>
)
