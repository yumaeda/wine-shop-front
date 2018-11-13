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
export class Banner extends React.Component<IBanner> {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<Banner> {
        return (
            <a href={ this.props.pageUrl }>
                <img src={ this.props.image } className="banner__image" />
            </a>
        )
    }
}
