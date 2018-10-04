import * as React from 'react';

/**
 * Interface for IBoilingVerdict
 */
interface IBoilingVerdict {
    celsius: number;
}

/**
 * BoilingVerdict component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class BoilingVerdict extends React.Component<IBoilingVerdict, {}> {
    /**
     * Return JSX to render
     */
    public render() {
        return (this.props.celsius >= 100) ?
            <p>The water would boil.</p> :
            <p>The water would not boil.</p>;
    }
}
