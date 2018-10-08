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
    {
        id: '10473',
        jpn_name: 'W.O. ・ヘメル・エン・アーデ・リッジ・シャルドネ',
        jpn_producer: 'アタラクシア・ワインズ',
        name: '1KSJDFLKDSJFLKSDJFsdfasdfasdfsadfads1',
        producer: 'Gackt.C',
        vintage: '2012'
    },
    {
        id: '11474',
        jpn_name: 'テラス・デュ・ラルザック・ラ・レゼルヴ・ドォ・ルージュ',
        jpn_producer: 'ドメーヌ・ド・ラ・レゼルヴ・ドォ',
        name: '2KSJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJDF2',
        producer: 'Mana',
        vintage: '2013'
    },
    {
        id: '10475',
        jpn_name: 'W.O. ・ザ・ブレンド',
        jpn_producer: 'ガブリエルスクルーフ',
        name: '3KSJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJDF3',
        producer: 'Kozi',
        vintage: '2014'
    },
    {
        id: '10476',
        jpn_name: 'ブルイイ',
        jpn_producer: 'シャトー・カンボン',
        name: '4KSJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJDF4',
        producer: 'Yuki',
        vintage: '2015'
    },
    {
        id: '10477',
        jpn_name: 'W.O. ・ローズバッド',
        jpn_producer: 'ガブリエルスクルーフ',
        name: '5KSJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJDF5',
        producer: 'Kami',
        vintage: '2016'
    },
    {
        id: '10478',
        jpn_name: 'モルゴン',
        jpn_producer: 'ジョルジュ・デコンブ',
        name: '6KSJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJDF6',
        producer: 'Tamori',
        vintage: '2017'
    },
    {
        id: '10479',
        jpn_name: 'レニエ・グラン・エ・グラニート',
        jpn_producer: 'チャーリー・テヴネ',
        name: '7KSJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJDF7',
        producer: 'Hide',
        vintage: '2018'
    },
    {
        id: '10480',
        jpn_name: 'コンドリュー・レジェンド・ボネッタ',
        jpn_producer: 'クロ・ド・ラ・ボネット',
        name: '8KSJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJDF8',
        producer: 'Hyde',
        vintage: '2014'
    },
    {
        id: '10481',
        jpn_name: 'コート・ド・ブルイイ・レ・セット・ヴィーニュ',
        jpn_producer: 'シャトー・ティヴァン',
        name: '9KSJDFLKDSJFLKSDJFLKSDJFLKSDJFLKSJDF9',
        producer: 'Yoshiki',
        vintage: '2015'
    }
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
                <UserContext.Provider value={ { code: 'ja' } }>
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
