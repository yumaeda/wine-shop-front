import * as React from 'react';

/**
 * UtcClock component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class Clock extends React.Component<{}, { date: Date }> {
    /**
     * Timer ID
     */
    private timerID: any;

    /**
     * Constructor for HtmlPage
     */
    public constructor(props: any) {
        super(props);
        this.state = { date: new Date() };
    }

    /**
     * Runs after the component output has been rendered to the DOM.
     */
    public componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    /**
     * Runs when the component is removed from the DOM.
     */
    public componentWillUnmount() {
        if (this.timerID !== 0) {
            clearInterval(this.timerID);
        }
    }

    /**
     * Return payment info JSX to render
     */
    public render() {
        return (
            <div>
                <h2>{ this.state.date.toLocaleTimeString() }</h2>
                <a href="#" onClick={ this.stopTimer }>Stop</a>
            </div>
        );
    }

    /**
     * Update current date
     */
    private tick() {
        this.setState((state: any, props: any) => ({
            date: new Date()
        }));
    }

    /**
     * Event handler for onclick event.
     */
    private stopTimer = (e: any): void => {
        e.preventDefault();
        clearInterval(this.timerID);
        this.timerID = 0;
    }
}
