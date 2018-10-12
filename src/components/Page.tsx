/**
 * Page component, which is included in the root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AnywayAside } from './AnywayAside';
import AnywayContents from './AnywayContents';
import { AnywayFooter } from './AnywayFooter';
import { AnywayHeader } from './AnywayHeader';
import { defaultContext, IUserContext, UserContext } from './context/UserContext';
import { Iframe } from './Iframe';
import { InquiryPage } from './pages/InquiryPage';
import { ProducerPage } from './pages/ProducerPage';

/**
 * Page component
 */
export class Page extends React.Component {
    /**
     * Return image JSX to render
     */
    public render(): React.ReactElement<Page> {
        const iframeDir = `./pages/${defaultContext.code}`;
        const jsx = (
            <React.StrictMode>
                <UserContext.Provider value={ defaultContext }>
                    <AnywayHeader logined={ true } />
                    <div className="page-container">
                        <AnywayAside />
                        { this.props.children }
                    </div>
                    <AnywayFooter />
                </UserContext.Provider>
            </React.StrictMode>
        );

        return jsx;
    }
}
