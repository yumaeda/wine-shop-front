import * as React from 'react';
import { HtmlPage } from './HtmlPage';

/**
 * Functional component for link separator
 *
 * @param any props
 */
function LinkSeparator(props: any) {
    return <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>;
}

/**
 * Footer component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class Footer extends React.Component {
    /**
     * Return footer JSX to render
     */
    public render() {
        const jsx = (
            <div>
                <div>
                    <span className="emphasis-span">!! 未成年の方には酒類の販売を行いません。!!</span>
                    <br /><br />
                    <p>
                        <a href="./index.php?submenu=guide">ご利用ガイド</a>
                        <LinkSeparator />
                        <a href="./index.php?submenu=quality">品質の保証</a>
                        <LinkSeparator />
                        <a href="./index.php?submenu=company">会社概要</a>
                        <LinkSeparator />
                        <a href="./index.php?submenu=privacy">個人情報</a>
                        <LinkSeparator />
                        <a href="./index.php?submenu=cmtransaction">特定商取引法</a>
                        <LinkSeparator />
                        <a href="mailto:mail@anyway-grapes.jp?subject=問い合わせ">お問い合わせ</a>
                        <LinkSeparator />
                        <a href="./index.php?submenu=faq">よくあるご質問</a>
                    </p>
                </div>
                <HtmlPage file="payment.html" />
                <HtmlPage file="shipping.html" />
            </div>
        );

        return jsx;
    }
}
