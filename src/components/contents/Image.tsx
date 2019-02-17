/**
 * Renders image
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface for Image
 */
interface IProps {
    alt: string
    srcUrl: string
    errorUrl: string
    className?: string
}

/**
 * Image component
 */
const Image: React.FC<IProps> = props => {
    const [srcUrl, setSrcUrl] = React.useState(props.srcUrl)
    const { alt, className, errorUrl } = props

    return (
        <img
            src={srcUrl}
            className={className}
            alt={alt}
            onError={() => setSrcUrl(errorUrl)}
        />
    )
}

export default React.memo(Image)
