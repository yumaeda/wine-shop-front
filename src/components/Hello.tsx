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
    public render() {
        return <h1>Hello from { this.props.compiler } and { this.props.framework }!</h1>;
    }
}
