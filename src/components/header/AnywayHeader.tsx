/**
 * Renders header element for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { Link } from 'react-router-dom'
import { IUserContext, UserContext } from '../../context/UserContext'
import { SearchBox } from './SearchBox'

/**
 * Interface for AnywayHeader
 */
interface IAnywayHeader {
    logined: boolean
}

/**
 * AnywayHeader component
 */
export class AnywayHeader extends React.Component<IAnywayHeader, {}> {
    /**
     * Return image JSX to render
     */
    public render(): React.ReactElement<AnywayHeader> {
        const jsx = (
            <UserContext.Consumer>
                {
                    (ctx: IUserContext) => (
                        <header className="header">
                            <a href={ `${ctx.siteUrl}/index.php` }><img src={ `${ctx.imgDir}/_logo.png` } /></a>
                            <br />
                            <Link to={ '/vintages' } className="header__link">Vintages</Link>
                            <Link to={ '/producers' } className="header__link">Producers</Link>
                            <Link to={ '/critics' } className="header__link">Critics</Link>
                            <SearchBox placeholder="ワイン検索" />
                            <div id="signup-fld">
                                <a href={ `${ctx.siteUrl}/cart.php` } className="header__command">カート</a>
                                {
                                    this.props.logined ? (
                                        <>
                                            <a
                                                href={ `${ctx.siteUrl}/login.php` }
                                                className="header__command">ログイン</a>

                                            <a
                                                href="#"
                                                id="register-link"
                                                onClick={ this.showRegistrationForm }
                                                className="header__command">会員登録</a>
                                        </>
                                    ) : (
                                        <>
                                            <a
                                                href={ `${ctx.siteUrl}/logout.php` }
                                                className="header__command">ログアウト</a>

                                            <a
                                                href={ `${ctx.siteUrl}/customer_info.php` }
                                                className="header__command">会員ページ</a>
                                        </>
                                    )
                                }
                            </div>
                        </header>
                    )
                }
            </UserContext.Consumer>
        )

        return jsx
    }

    /**
     * Event handler for onclick event
     */
    private showRegistrationForm = (event: React.MouseEvent<HTMLElement>): void => {
        event.preventDefault()
        alert('Register')
    }
}
