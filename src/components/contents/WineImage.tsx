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
 * Interface for WineImage state
 */
interface IState {
    src: string
}

/**
 * WineImage component
 */
export class WineImage extends React.Component<IProps, IState> {
    /**
     * Initialize state
     */
    public state = {
        src: `${this.props.baseUrl}/${this.props.id}.png`
    }

    /**
     * Return image JSX to render
     */
    public render(): React.ReactElement<WineImage> {
        const { className, id } = this.props

        return (
            <img
                src={this.state.src}
                className={className}
                alt={id}
                onError={this.setDefaultImage}
            />
        )
    }

    /**
     * Event handler for onerror event
     */
    private setDefaultImage = (): void => {
        this.setState({
            src: `${this.props.baseUrl}/no_wine_photo.png`
        })
    }
}
