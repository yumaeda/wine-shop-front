import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AnywayFooter } from './components/AnywayFooter';
import { UserContext } from './components/context/UserContext';
import { HorizontalWineList } from './components/HorizontalWineList';
import { Calculator } from './components/samples/Calculator';
import UserForm from './components/samples/UserForm';
import store from './redux/Store';

const wines = [
    { id: '10473', vintage: '2012', name: '1KSJDFLKDSJFLKSDJFsdfasdfasdfsadfads1', producer: 'Gackt.C' },
    { id: '10474', vintage: '2013', name: '2KSJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJDF2', producer: 'Mana' },
    { id: '10475', vintage: '2014', name: '3KSJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJDF3', producer: 'Kozi' },
    { id: '10476', vintage: '2015', name: '4KSJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJDF4', producer: 'Yuki' },
    { id: '10477', vintage: '2016', name: '5KSJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJDF5', producer: 'Kami' },
    { id: '10478', vintage: '2017', name: '6KSJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJDF6', producer: 'Tamori' },
    { id: '10479', vintage: '2018', name: '7KSJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJDF7', producer: 'Hide' },
    { id: '10480', vintage: '2014', name: '8KSJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJDF8', producer: 'Hyde' },
    { id: '10481', vintage: '2015', name: '9KSJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJDF9', producer: 'Yoshiki' },
    { id: '10482', vintage: '2016', name: '10SJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJF10', producer: 'Tetsu' },
    { id: '10483', vintage: '2017', name: '11SJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJD11', producer: 'Kota' },
    { id: '10484', vintage: '2018', name: '12SJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJD12', producer: 'Shazna' },
];

const wineId = '10484';
const wineImgBaseUrl = '//anyway-grapes.jp/images/wines/400px';
const homeUrl = 'http://anyway-grapes.jp/store/index.php';
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
                </Provider>,
                <Calculator />
                <UserContext.Provider value={ { code: 'en' } }>
                    <HorizontalWineList wines={ wines } baseImgUrl={ wineImgBaseUrl } homeUrl={ homeUrl } />
                    <header></header>
                    <div id="page-container">
                        <aside></aside>
                        <div id="page-contents"></div>
                    </div>
                    <AnywayFooter links={ linkInfos } />
                </UserContext.Provider>
            </React.StrictMode>
        </div>
    ),
    document.getElementById('pageBody')
);
