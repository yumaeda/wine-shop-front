/**
 * Renders wine image
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface for WineImage
 */
interface IProps {
    id: string
    baseUrl: string
    className?: string
}

/**
 * WineImage component
 */
const WineImage: React.FC<IProps> = props => {
    const { baseUrl, className, id } = props
    const [src, setSrc] = React.useState(`${baseUrl}/${id}.png`)

    return (
        <img
            src={src}
            className={className}
            alt={id}
            onError={() => setSrc(`${baseUrl}/no_wine_photo.png`)}
        />
    )
}

export default React.memo(WineImage)
