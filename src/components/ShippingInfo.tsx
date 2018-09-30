import * as React from 'react';

/**
 * ShippingInfo component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class ShippingInfo extends React.Component {
    /**
     * Return shipping info JSX to render
     */
    public render() {
        return <div id="shipping-info-pane"></div>;
    }
}

/*
strLang = UrlQuery.getValue('lang');
if ((strLang != 'en') && (strLang != 'fr'))
{
    strLang = 'ja';
}

HtmlUtility.renderPage($shippingInfoPane, '//anyway-grapes.jp/pages/' + strLang + '/shipping_fee.html');
*/
