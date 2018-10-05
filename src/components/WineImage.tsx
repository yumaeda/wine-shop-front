import * as React from 'react';

/**
 * Interface for WineImage
 */
interface IWineImage {
    id: string;
    baseUrl: string;
    className: string;
}

/**
 * WineImage component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class WineImage extends React.Component<IWineImage, { src: string }> {
    /**
     * Constructor for WineImage
     */
    public constructor(props: any) {
        super(props);
        this.state = {
            src: `${this.props.baseUrl}/${this.props.id}.png`
        };
    }

    /**
     * Return image JSX to render
     */
    public render() {
        return (
            <img src={ this.state.src }
                 className={ this.props.className }
                 alt={ this.props.id }
                 onError={ this.setDefaultImage }
            />
        );
    }

    /**
     * Event handler for onerror event
     */
    private setDefaultImage = (e: any): void => {
        this.setState({
            src: `${this.props.baseUrl}/no_wine_photo.png`
        });
    }
}
