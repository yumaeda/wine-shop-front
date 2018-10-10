import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnywayContents } from './components/AnywayContents';
import { AnywayFooter } from './components/AnywayFooter';
import { AnywayHeader } from './components/AnywayHeader';
import { IUserContext, UserContext } from './components/context/UserContext';
import { CriticPage } from './components/pages/CriticPage';
import { ProducerPage } from './components/pages/ProducerPage';
import { VintagePage } from './components/pages/VintagePage';
import { Calculator } from './components/samples/Calculator';
import UserForm from './components/samples/UserForm';
import store from './redux/Store';

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

render(
    (
        <Router>
            <div className="wrapper">
                <React.StrictMode>
                    <Provider store={ store }>
                        <UserForm />
                    </Provider>
                    <Calculator />
                    <UserContext.Provider value={ context }>
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
            </div>
        </Router>
    ),
    document.getElementById('pageBody')
);
