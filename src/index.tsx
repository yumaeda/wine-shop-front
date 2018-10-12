/**
 * Root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AnywayContents from './components/AnywayContents';
import { defaultContext, UserContext } from './components/context/UserContext';
import { Iframe } from './components/Iframe';
import { Page } from './components/Page';
import { InquiryPage } from './components/pages/InquiryPage';
import { ProducerPage } from './components/pages/ProducerPage';
import store from './redux/Store';

const iframeDir = `./pages/${defaultContext.code}`;

render(
    (
        <Provider store={ store }>
            <UserContext.Provider value={ defaultContext }>
                <Router>
                    <Switch>
                        <Route exact path="/"
                            render={
                                () => <Page><AnywayContents /></Page>
                            }
                        />

                        <Route path="/cmtransaction"
                            render={
                                () => <Page><Iframe src={ `${iframeDir}/cmtransaction.html` } /></Page>
                            }
                        />

                        <Route path="/company"
                            render={
                                () => <Page><Iframe src={ `${iframeDir}/company.html` } /></Page>
                            }
                        />

                        <Route path="/critics"
                            render={
                                () => <Page><Iframe src={ `${iframeDir}/critics.html` } /></Page>
                            }
                        />

                        <Route path="/faq"
                            render={
                                () => <Page><Iframe src={ `${iframeDir}/faq.html` } /></Page>
                            }
                        />

                        <Route path="/guide"
                            render={
                                () => <Page><Iframe src={ `${iframeDir}/guide.html` } /></Page>
                            }
                        />

                        <Route path="/inquiry"
                            render={
                                () => <Page><InquiryPage /></Page>
                            }
                        />

                        <Route path="/privacy"
                            render={
                                () => <Page><Iframe src={ `${iframeDir}/privacy.html` } /></Page>
                            }
                        />

                        <Route path="/producers"
                            render={
                                () => <Page><ProducerPage /></Page>
                            } />

                        <Route path="/quality"
                            render={
                                () => <Page><Iframe src={ `${iframeDir}/quality.html` } /></Page>
                            }
                        />

                        <Route path="/vintages"
                            render={
                                () => <Page><Iframe src={ `${iframeDir}/vintage.html` } /></Page>
                            }
                        />
                    </Switch>
                </Router>
            </UserContext.Provider>
        </Provider>
    ),
    document.getElementById('app')
);
