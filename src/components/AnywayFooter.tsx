import * as React from 'react';
import { FooterNav } from './FooterNav';
import { Iframe } from './Iframe';
import { UserContext } from './UserContext';

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
        const jsx = (
            <UserContext.Consumer>
                { (lang: { code: string }) => (
                    <footer>
                        <div>
                            <span className="notice-text">{ noticeText }</span>
                            <br /><br />
                            <FooterNav links={ this.props.links } />
                        </div>
                        <Iframe src={ `./pages/${lang.code}/payment.html` } />
                        <Iframe src={ `./pages/${lang.code}/shipping_fee.html` } />
                    </footer>
                )}
            </UserContext.Consumer>
        );

        return jsx;
    }
}
