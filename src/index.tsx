import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AnywayFooter } from './components/AnywayFooter';
import { AnywayHeader } from './components/AnywayHeader';
import { APIWineList } from './components/APIWineList';
import { UserContext } from './components/context/UserContext';
import { Calculator } from './components/samples/Calculator';
import UserForm from './components/samples/UserForm';
import store from './redux/Store';

const rootUrl = 'http://anyway-grapes.jp';
const linkInfos = [
    { href: './index.php?submenu=guide', text: 'ご利用ガイド' },
    { href: './index.php?submenu=quality', text: '品質の保証' },
    { href: './index.php?submenu=company', text: '会社概要' },
    { href: './index.php?submenu=privacy', text: '個人情報' },
    { href: './index.php?submenu=cmtransaction', text: '特定商取引法' },
    { href: 'mailto:mail@anyway-grapes.jp?subject=問い合わせ', text: 'お問い合わせ' },
    { href: './index.php?submenu=faq', text: 'よくあるご質問' },
];

render(
    (
        <div className="wrapper">
            <React.StrictMode>
                <Provider store={ store }>
                    <UserForm />
                </Provider>
                <Calculator />
                <UserContext.Provider value={ { code: 'ja', rootUrl } }>
                    <AnywayHeader logined={ true } />
                    <div id="page-container">
                        <aside></aside>
                        <div id="page-contents">
                            <APIWineList url="//anyway-grapes.jp/laravel5.3/public/api/v1/new-wines" />
                            <APIWineList url="//anyway-grapes.jp/laravel5.3/public/api/v1/ranking-wines" />
                        </div>
                    </div>
                    <AnywayFooter links={ linkInfos } />
                </UserContext.Provider>
            </React.StrictMode>
        </div>
    ),
    document.getElementById('pageBody')
);
