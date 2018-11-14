/**
 * Root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as Redux from 'redux'
import FilteredWinesContainer from '../containers/FilteredWinesContainer'
import { defaultContext, UserContext } from '../context/UserContext'

/**
 * Root component
 */
export const Root: React.SFC<{ store: Redux.Store }> = props => (
    <Provider store={props.store}>
        <UserContext.Provider value={defaultContext}>
            <Router>
                <Route path="/:page?" component={FilteredWinesContainer} />
            </Router>
        </UserContext.Provider>
    </Provider>
)
