/**
 * Renders header element for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
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
export default class AnywayHeader extends React.Component<IAnywayHeader, {}> {
    /**
     * Set the current context
     */
    public static contextType = UserContext

    /**
     * Return image JSX to render
     */
    public render(): React.ReactElement<AnywayHeader> {
        return (
            <header className="header">
                <a href={ `${this.context.siteUrl}/index.php` }>
                    <img
                        className="header__image"
                        src={ `${this.context.imgDir}/_logo.png` }
                    />
                </a>
                <br />
                <Link to={ '/vintages' } className="header__link">Vintages</Link>
                <Link to={ '/producers' } className="header__link">Producers</Link>
                <Link to={ '/critics' } className="header__link">Critics</Link>
                <SearchBox placeholder="ワイン検索" />
                <Menu logined={ this.props.logined } siteUrl={ this.context.siteUrl } />
            </header>
        )
    }
}
