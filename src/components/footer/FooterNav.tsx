/**
 * Renders footer navigations
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { Link } from 'react-router-dom'

/**
 * Interface for Link
 */
export interface ILink {
    path: string
    text: string
}

/**
 * Interface for FooterNav
 */
interface IFooterNav {
    links: ILink[]
}

/**
 * FooterNav component
 */
export class FooterNav extends React.Component<IFooterNav, {}> {
    /**
     * Return footer navigation JSX to render
     */
    public render(): React.ReactElement<FooterNav> {
        const jsx = this.props.links.map((link: ILink, index: number) =>
            <li className="footer__list-item" key={ index }>
                <Link className="footer__link" to={ link.path }>{ link.text }</Link>
            </li>
        )

        return <ul>{ jsx }</ul>
    }
}
