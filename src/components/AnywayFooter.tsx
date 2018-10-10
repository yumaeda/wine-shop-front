import * as React from 'react';
import { IUserContext, UserContext } from './context/UserContext';
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
        const jsx = (
            <UserContext.Consumer>
                {
                    (ctx: IUserContext) => (
                        <footer>
                            <div>
                                <span className="notice-text">{ noticeText }</span>
                                <br /><br />
                                <FooterNav links={ this.props.links } />
                            </div>
                            <Iframe src={ `./pages/${ctx.code}/payment.html` } />
                            <Iframe src={ `./pages/${ctx.code}/shipping_fee.html` } />
                        </footer>
                    )
                }
            </UserContext.Consumer>
        );

        return jsx;
    }
}
