/**
 * Application component, which is included in the root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import AnywayAside from './AnywayAside';
import { AnywayContents } from './AnywayContents';
import { AnywayFooter } from './AnywayFooter';
import { AnywayHeader } from './AnywayHeader';
import { defaultContext, IUserContext, UserContext } from './context/UserContext';
import { Iframe } from './Iframe';
import { InquiryPage } from './pages/InquiryPage';
import { ProducerPage } from './pages/ProducerPage';

/**
 * App component
 */
export class App extends React.Component {
    /**
     * Return image JSX to render
     */
    public render(): React.ReactElement<App> {
        const iframeDir = `./pages/${defaultContext.code}`;
        const jsx = (
            <React.StrictMode>
                <UserContext.Provider value={ defaultContext }>
                    <AnywayHeader logined={ true } />
                    <div className="page-container">
                        <AnywayAside />
                        <Switch>
                            <Route exact path="/" component={ AnywayContents } />

                            <Route
                                path="/vintages"
                                render={
                                    () => <Iframe src={ `${iframeDir}/vintage.html` } />
                                }
                            />

                            <Route path="/producers" component={ ProducerPage } />

                            <Route
                                path="/critics"
                                render={
                                    () => <Iframe src={ `${iframeDir}/critics.html` } />
                                }
                            />

                            <Route
                                path="/guide"
                                render={
                                    () => <Iframe src={ `${iframeDir}/guide.html` } />
                                }
                            />

                            <Route
                                path="/quality"
                                render={
                                    () => <Iframe src={ `${iframeDir}/quality.html` } />
                                }
                            />

                            <Route
                                path="/company"
                                render={
                                    () => <Iframe src={ `${iframeDir}/company.html` } />
                                }
                            />

                            <Route
                                path="/privacy"
                                render={
                                    () => <Iframe src={ `${iframeDir}/privacy.html` } />
                                }
                            />

                            <Route
                                path="/cmtransaction"
                                render={
                                    () => <Iframe src={ `${iframeDir}/cmtransaction.html` } />
                                }
                            />

                            <Route path="/inquiry" component={ InquiryPage } />

                            <Route
                                path="/faq"
                                render={
                                    () => <Iframe src={ `${iframeDir}/faq.html` } />
                                }
                            />
                        </Switch>
                    </div>
                    <AnywayFooter />
                </UserContext.Provider>
            </React.StrictMode>
        );

        return jsx;
    }
}
