import * as React from 'react';

/**
 * IHello describes the shape of props
 */
export interface IHello {
    compiler: string;
    framework: string;
}

/**
 * State is never set so we use the '{}' type.
 */
export class Hello extends React.Component<IHello, {}> {
    /**
     * Return an element to render
     *
     * @return object
     */
    public render() {
        const jsx = (
            <div>
                <h1>Hello { this.props.compiler } and { this.props.framework }!</h1>
                <h2>Mess with the best.  Die like the rest.</h2>
                <p>It is { new Date().toLocaleTimeString() }</p>.
            </div>
        );

        return jsx;
    }
}
