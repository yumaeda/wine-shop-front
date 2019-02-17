/**
 * Renders <iframe> element
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface for Iframe props
 */
interface IProps {
    src?: string
}

/**
 * Iframe component
 */
const IFrame: React.FC<IProps> = props => {
    const [height, setHeight] = React.useState(0)
    const { src } = props

    return (
        <iframe
            src={src || ''}
            onLoad={(e: any) => {
                setHeight(e.target.contentWindow.document.body.scrollHeight)
            }}
            width="100%"
            height={height + 'px'}
            scrolling="no"
            frameBorder="0"
        />
    )
}

export default React.memo(IFrame)
