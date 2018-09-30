import * as React from 'react';

/**
 * PaymentInfo component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class PaymentInfo extends React.Component {
    /**
     * Return payment info JSX to render
     */
    public render() {
        return <div id="payment-info-pane"></div>;
    }
}

/*
strLang = UrlQuery.getValue('lang');
if ((strLang != 'en') && (strLang != 'fr'))
{
    strLang = 'ja';
}

HtmlUtility.renderPage($paymentInfoPane, '//anyway-grapes.jp/pages/' + strLang + '/payment.html');
*/
