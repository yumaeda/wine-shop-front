/**
 * Renders header element for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { Menu } from 'components/header/Menu'
import { SearchBox } from 'components/header/SearchBox'
import { IUserContext, UserContext } from 'context/UserContext'
import * as React from 'react'
import { Link } from 'react-router-dom'

/**
 * Interface for AnywayHeader
 */
interface IProps {
    logined: boolean
}

/**
 * AnywayHeader component
 */
export default class AnywayHeader extends React.Component<IProps> {
    /**
     * Return image JSX to render
     */
    public render(): React.ReactElement<AnywayHeader> {
        const { logined } = this.props

        return (
            <header className="header">
                <UserContext.Consumer>
                    {(ctx: IUserContext) => (
                        <>
                            <a href={`${ctx.siteUrl}/index.php`}>
                                <img
                                    className="header__image"
                                    src={`${ctx.imgDir}/_logo.png`}
                                />
                            </a>
                            <br />
                            <Link to={'/vintages'} className="header__link">
                                Vintages
                            </Link>
                            <Link to={'/producers'} className="header__link">
                                Producers
                            </Link>
                            <Link to={'/critics'} className="header__link">
                                Critics
                            </Link>
                            <SearchBox
                                placeholder="ワイン検索"
                                imgDir={ctx.imgDir}
                            />
                            <Menu logined={logined} siteUrl={ctx.siteUrl} />
                        </>
                    )}
                </UserContext.Consumer>
            </header>
        )
    }
}
