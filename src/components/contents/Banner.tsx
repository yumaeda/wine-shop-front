/**
 * Renders banner
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IBanner } from '../../interfaces/IBanner'

/**
 * Banner component
 */
const SFCComponent: React.SFC<IBanner> = (props) => (
    <a href={ props.pageUrl }>
        <img src={ props.image } className="banner__image" />
    </a>
)

export const Banner = React.memo(SFCComponent)
