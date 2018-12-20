/**
 * Renders image
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface for Image
 */
interface IImage {
    alt: string
    srcUrl: string
    errorUrl: string
    className?: string
}

/**
 * Interface for Image state
 */
interface IImageState {
    srcUrl: string
}

/**
 * Image component
 */
export class Image extends React.Component<IImage, IImageState> {
    /**
     * Constructor for Image
     */
    public constructor(props: IImage) {
        super(props)
        this.state = {
            srcUrl: this.props.srcUrl
        }
    }

    /**
     * Return image JSX to render
     */
    public render() {
        const { alt, className } = this.props
        const { srcUrl } = this.state

        return (
            <img
                src={srcUrl}
                className={className}
                alt={alt}
                onError={this.handleError}
            />
        )
    }

    /**
     * Event handler for onerror event
     */
    private handleError = () => {
        this.setState({
            srcUrl: this.props.errorUrl
        })
    }
}
