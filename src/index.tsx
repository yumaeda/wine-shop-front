import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AnywayFooter } from './components/AnywayFooter';
import { UserContext } from './components/context/UserContext';
import { Calculator } from './components/samples/Calculator';
import { WineImage } from './components/WineImage';

const wineId = '10484';
const wineImgBaseUrl = '//anyway-grapes.jp/images/wines/400px';
const linkInfos = [
    { href: './index.php?submenu=guide', text: 'ご利用ガイド' },
    { href: './index.php?submenu=quality', text: '品質の保証' },
    { href: './index.php?submenu=company', text: '会社概要' },
    { href: './index.php?submenu=privacy', text: '個人情報' },
    { href: './index.php?submenu=cmtransaction', text: '特定商取引法' },
    { href: 'mailto:mail@anyway-grapes.jp?subject=問い合わせ', text: 'お問い合わせ' },
    { href: './index.php?submenu=faq', text: 'よくあるご質問' },
];

ReactDOM.render(
    (
        <div className="wrapper">
            <React.StrictMode>
                <Calculator />
                <WineImage id={ wineId } baseUrl={ wineImgBaseUrl } />
                <header></header>
                <div id="page-container">
                    <aside></aside>
                    <div id="page-contents"></div>
                </div>
                <UserContext.Provider value={ { code: 'en' } }>
                    <AnywayFooter links={ linkInfos } />
                </UserContext.Provider>
            </React.StrictMode>
        </div>
    ),
    document.getElementById('pageBody')
);
