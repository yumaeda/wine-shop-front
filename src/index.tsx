import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FooterNav } from './components/FooterNav';
import { Iframe } from './components/Iframe';
import { Calculator } from './components/Sample/Calculator';
import { WineImage } from './components/WineImage';

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
        <div>
            <Calculator />
            <WineImage id="10484" baseUrl="//anyway-grapes.jp/images/wines/400px" />
            <div>
                <span className="emphasis-span">!! 未成年の方には酒類の販売を行いません。!!</span>
                <br /><br />
                <FooterNav links={ linkInfos } />
            </div>
            <Iframe src="./pages/ja/payment.html" />
            <Iframe src="./pages/ja/shipping_fee.html" />
        </div>
    ),
    document.getElementById('footer')
);
