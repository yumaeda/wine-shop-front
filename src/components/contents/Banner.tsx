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
const Banner: React.FC<IBanner> = props => {
    const { image, pageUrl } = props

    return (
        <a href={pageUrl}>
            <img src={image} className="banner__image" />
        </a>
    )
}

export default React.memo(Banner)
