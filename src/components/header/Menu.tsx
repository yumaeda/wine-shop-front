/**
 * Renders menu element for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface for Menu
 */
interface IMenu {
    logined: boolean
    siteUrl: string
}

/**
 * Menu component
 */
export class Menu extends React.Component<IMenu, {}> {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<Menu> {
        const siteUrl = this.props.siteUrl
        const jsx = (
            <div className="header__menu">
                <a href={ `${siteUrl}/cart.php` } className="header__command">カート</a>
                {
                    this.props.logined ? (
                        <>
                            { ' ' }

                            <a
                                href={ `${siteUrl}/login.php` }
                                className="header__command">ログイン</a>

                            { ' ' }

                            <a
                                href="#"
                                id="register-link"
                                onClick={ this.showRegistrationForm }
                                className="header__command">会員登録</a>
                        </>
                    ) : (
                        <>
                            { ' ' }

                            <a
                                href={ `${siteUrl}/logout.php` }
                                className="header__command">ログアウト</a>

                            { ' ' }

                            <a
                                href={ `${siteUrl}/customer_info.php` }
                                className="header__command">会員ページ</a>
                        </>
                    )
                }
            </div>
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
