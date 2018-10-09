import * as React from 'react';
import { UserContext } from './context/UserContext';

/**
 * Interface for AnywayHeader
 */
interface IAnywayHeader {
    logined: boolean;
}

/** * AnywayHeader component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class AnywayHeader extends React.Component<IAnywayHeader, {}> {
    /**
     * Return image JSX to render
     */
    public render() {
        const jsx = (
            <UserContext.Consumer>
                { (ctx: { code: string, rootUrl: string }) => (
                    <header>
                        <a href={ `${ctx.rootUrl}/index.php` }><img src={ `${ctx.rootUrl}/images/_logo.png` } /></a>
                        <br />
                        <a href={ `${ctx.rootUrl}/index.php?submenu=vintage_info` } className="page-links">Vintages</a>
                        <a href={ `${ctx.rootUrl}/producers/index.html` } className="page-links">Producers</a>
                        <a href={ `${ctx.rootUrl}/index.php?submenu=critics` } className="page-links">Critics</a>
                        <div id="simple-search-fld">
                            <input type="text" placeholder=" ワイン検索" className="search-input" />
                            <img src={ `${ctx.rootUrl}/images/search_wine.png` } className="search-button" />
                        </div>
                        <div id="signup-fld">
                            <a href={ `${ctx.rootUrl}/cart.php` } className="cmd-links">カート</a>
                            {
                                this.props.logined ? (
                                    <>
                                        <a href={ `${ctx.rootUrl}/login.php` } className="cmd-links">ログイン</a>
                                        <a
                                            href="#"
                                            id="register-link"
                                            onClick={ this.showRegistrationForm }
                                            className="cmd-links">会員登録</a>
                                    </>
                                ) : (
                                    <>
                                        <a href={ `${ctx.rootUrl}/logout.php` } className="cmd-links">ログアウト</a>
                                        <a href={ `${ctx.rootUrl}/customer_info.php` } className="cmd-links">会員ページ</a>
                                    </>
                                )
                            }
                        </div>
                    </header>
                )}
            </UserContext.Consumer>
        );

        return jsx;
    }

    /**
     * Event handler for onclick event
     */
    private showRegistrationForm = (event: React.MouseEvent<HTMLElement>): void => {
        event.preventDefault();
        alert('HO');
    }
}
