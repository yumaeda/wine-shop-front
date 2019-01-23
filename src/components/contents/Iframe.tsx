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
 * Interface for Iframe state
 */
interface IState {
    height: number
}

/**
 * Iframe component
 */
export class Iframe extends React.Component<IProps, IState> {
    /**
     * Initialize state
     */
    public state = { height: 0 }

    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<Iframe> {
        const { src } = this.props
        const { height } = this.state

        return (
            <iframe
                src={src || ''}
                onLoad={this.setContentHeight}
                width="100%"
                height={height + 'px'}
                scrolling="no"
                frameBorder="0"
            />
        )
    }

    /**
     * Event handler for onload event
     */
    private setContentHeight = (e: any): void => {
        this.setState({
            height: e.target.contentWindow.document.body.scrollHeight
        })
    }
}
