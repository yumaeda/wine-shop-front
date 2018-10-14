/**
 * Root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { InquiryPage } from './components/pages/InquiryPage';
import { ProducerPage } from './components/pages/ProducerPage';
import FilteredWinesContainer from './containers/FilteredWinesContainer';
import { defaultContext, UserContext } from './context/UserContext';
import rootReducer from './reducers';
const store = createStore(rootReducer);

const iframeDir = `./pages/${defaultContext.code}`;
const jsx = (
    <Provider store={ store }>
        <UserContext.Provider value={ defaultContext }>
            <Router>
                <Switch>
                    <Route
                        exact path="/"
                        render={ () => <FilteredWinesContainer /> }
                    />

                    <Route
                        path="/cmtransaction"
                        render={ () => <FilteredWinesContainer url={ `${iframeDir}/cmtransaction.html` } /> }
                    />

                    <Route
                        path="/company"
                        render={ () => <FilteredWinesContainer url={ `${iframeDir}/company.html` } /> }
                    />

                    <Route
                        path="/critics"
                        render={ () => <FilteredWinesContainer url={ `${iframeDir}/critics.html` } /> }
                    />

                    <Route
                        path="/faq"
                        render={ () => <FilteredWinesContainer url={ `${iframeDir}/faq.html` } /> }
                    />

                    <Route
                        path="/guide"
                        render={ () => <FilteredWinesContainer url={ `${iframeDir}/guide.html` } /> }
                    />

                    <Route
                        path="/inquiry"
                        render={ () => <FilteredWinesContainer><InquiryPage /></FilteredWinesContainer> }
                    />

                    <Route
                        path="/privacy"
                        render={ () => <FilteredWinesContainer url={ `${iframeDir}/privacy.html` } /> }
                    />

                    <Route
                        path="/producers"
                        render={
                            () => <FilteredWinesContainer><ProducerPage /></FilteredWinesContainer>
                        } />

                    <Route
                        path="/quality"
                        render={ () => <FilteredWinesContainer url={ `${iframeDir}/quality.html` } /> }
                    />

                    <Route
                        path="/vintages"
                        render={ () => <FilteredWinesContainer url={ `${iframeDir}/vintage.html` } /> }
                    />
                </Switch>
            </Router>
        </UserContext.Provider>
    </Provider>
);

render(jsx, document.getElementById('app'));
