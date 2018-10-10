import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AnywayContents } from './AnywayContents';
import { AnywayFooter } from './AnywayFooter';
import { AnywayHeader } from './AnywayHeader';
import { IUserContext, UserContext } from './context/UserContext';
import { CriticPage } from './pages/CriticPage';
import { ProducerPage } from './pages/ProducerPage';
import { VintagePage } from './pages/VintagePage';
import { Calculator } from './samples/Calculator';
import UserForm from './samples/UserForm';

const siteUrl = 'http://anyway-grapes.jp';
const imgDir = `${siteUrl}/images`;
const linkInfos = [
    { href: './index.php?submenu=guide', text: 'ご利用ガイド' },
    { href: './index.php?submenu=quality', text: '品質の保証' },
    { href: './index.php?submenu=company', text: '会社概要' },
    { href: './index.php?submenu=privacy', text: '個人情報' },
    { href: './index.php?submenu=cmtransaction', text: '特定商取引法' },
    { href: 'mailto:mail@anyway-grapes.jp?subject=問い合わせ', text: 'お問い合わせ' },
    { href: './index.php?submenu=faq', text: 'よくあるご質問' },
];

const context: IUserContext = {
    code: 'ja',
    imgDir,
    siteUrl
};

/**
 * App component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class App extends React.Component<{}, {}> {
    /**
     * Return image JSX to render
     */
    public render() {
        const jsx = (
            <React.StrictMode>
                <UserContext.Provider value={ context }>
                    <UserForm />
                    <Calculator />
                    <AnywayHeader logined={ true } />
                    <div id="page-container">
                        <aside></aside>
                        <Switch>
                            <Route exact path="/" component={ AnywayContents } />
                            <Route path="/vintages" component={ VintagePage } />
                            <Route path="/producers" component={ ProducerPage } />
                            <Route path="/critics" component={ CriticPage } />
                        </Switch>
                    </div>
                    <AnywayFooter links={ linkInfos } />
                </UserContext.Provider>
            </React.StrictMode>
        );

        return jsx;
    }
}
