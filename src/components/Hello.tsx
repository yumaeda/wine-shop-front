import * as React from 'react';

/**
 * HelloProps describes the shape of props
 */
export interface HelloProps {
    compiler: string;
    framework: string;
}

/**
 * State is never set so we use the '{}' type.
*/
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from { this.props.compiler } and { this.props.framework }!</h1>;
    }
}
