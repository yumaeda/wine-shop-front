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
 * Props interface for FooterNav
 */
interface IProps {
    links: ILink[]
}

/**
 * FooterNav component
 */
const FooterNav: React.FC<IProps> = props => {
    const { links } = props

    return (
        <ul>
            {links.map((link: ILink, index: number) => (
                <li className="footer__list-item" key={index}>
                    <Link
                        className="footer__link"
                        to={link.path}
                        children={link.text}
                    />
                </li>
            ))}
        </ul>
    )
}

export default React.memo(FooterNav)
