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
const Banner = React.memo<IBanner>(props => (
    <a href={props.pageUrl}>
        <img src={props.image} className="banner__image" />
    </a>
))

export default Banner
