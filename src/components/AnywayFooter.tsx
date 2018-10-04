import * as React from 'react';
import { FooterNav } from './FooterNav';
import { Iframe } from './Iframe';

/**
 * Interface for AnywayFooter
 */
interface IAnywayFooter {
    links: Array<{ href: string, text: string }>;
}

/**
 * AnywayFooter component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class AnywayFooter extends React.Component<IAnywayFooter, {}> {
    /**
     * Return image JSX to render
     */
    public render() {
        const noticeText = '!! 未成年の方には酒類の販売を行いません。!!';
        const paymentPageUrl = './pages/ja/payment.html';
        const shippingPageUrl = './pages/ja/shipping_fee.html';

        return (
            <footer>
                <div>
                    <span className="notice-text">{ noticeText }</span>
                    <br /><br />
                    <FooterNav links={ this.props.links } />
                </div>
                <Iframe src={ paymentPageUrl } />
                <Iframe src={ shippingPageUrl } />
            </footer>
        );
    }
}
