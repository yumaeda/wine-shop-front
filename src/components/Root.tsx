/**
 * Root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as Redux from 'redux';
import FilteredWinesContainer from '../containers/FilteredWinesContainer';
import { defaultContext, UserContext } from '../context/UserContext';

/**
 * Root component
 */
export class Root extends React.Component<{ store: Redux.Store }, {}> {
    /**
     * Return image JSX to render
     */
    public render(): React.ReactElement<Root> {
        return (
            <Provider store={ this.props.store }>
                <UserContext.Provider value={ defaultContext }>
                    <Router>
                        <Route path="/:page?" component={ FilteredWinesContainer } />
                    </Router>
                </UserContext.Provider>
            </Provider>
        );
    }
}
