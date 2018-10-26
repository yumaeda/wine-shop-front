/**
 * Renders header element for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { Link } from 'react-router-dom'
import { IUserContext, UserContext } from '../../context/UserContext'
import { Menu } from './Menu'
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
                            <a href={ `${ctx.siteUrl}/index.php` }>
                                <img
                                    className="header__image"
                                    src={ `${ctx.imgDir}/_logo.png` }
                                />
                            </a>
                            <br />
                            <Link to={ '/vintages' } className="header__link">Vintages</Link>
                            <Link to={ '/producers' } className="header__link">Producers</Link>
                            <Link to={ '/critics' } className="header__link">Critics</Link>
                            <SearchBox placeholder="ワイン検索" />
                            <Menu logined={ this.props.logined } siteUrl={ ctx.siteUrl } />
                        </header>
                    )
                }
            </UserContext.Consumer>
        )

        return jsx
    }
}
