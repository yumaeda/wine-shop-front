/**
 * Renders menu element for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import LogoutLink from 'components/header/LogoutLink'
import * as React from 'react'
import { Link } from 'react-router-dom'

/**
 * Interface for Menu
 */
interface IProps {
    logined: boolean
    siteUrl: string
}

/**
 * Menu component
 */
export class Menu extends React.Component<IProps> {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<Menu> {
        const { logined, siteUrl } = this.props
        const jsx = (
            <div className="header__menu">
                <a href={`${siteUrl}/cart.php`} className="header__command">
                    カート
                </a>
                {!logined ? (
                    <>
                        {' '}
                        <Link to="/login" className="header__command">
                            ログイン
                        </Link>{' '}
                        <Link to="/register" className="header__command">
                            会員登録
                        </Link>
                    </>
                ) : (
                    <>
                        {' '}
                        <LogoutLink />{' '}
                        <a
                            href={`${siteUrl}/customer_info.php`}
                            className="header__command"
                        >
                            会員ページ
                        </a>
                    </>
                )}
            </div>
        )

        return jsx
    }
}
