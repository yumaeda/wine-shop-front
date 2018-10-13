/**
 * Renders footer element for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { IUserContext, UserContext } from '../../context/UserContext';
import { Iframe } from '../contents/Iframe';
import { FooterNav, ILink } from './FooterNav';

/**
 * AnywayFooter component
 */
export class AnywayFooter extends React.Component {
    /**
     * Information of the footer links
     */
    private links: ILink[] = [
        { path: '/guide', text: 'ご利用ガイド' },
        { path: '/quality', text: '品質の保証' },
        { path: '/company', text: '会社概要' },
        { path: '/privacy', text: '個人情報' },
        { path: '/cmtransaction', text: '特定商取引法' },
        { path: '/inquiry', text: 'お問い合わせ' },
        { path: '/faq', text: 'よくあるご質問' },
    ];

    /**
     * Return image JSX to render
     */
    public render(): React.ReactElement<AnywayFooter> {
        const noticeText = '!! 未成年の方には酒類の販売を行いません。!!';
        const jsx = (
            <UserContext.Consumer>
                {
                    (ctx: IUserContext) => (
                        <footer>
                            <div>
                                <span className="notice-text">{ noticeText }</span>
                                <br /><br />
                                <FooterNav links={ this.links } />
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
