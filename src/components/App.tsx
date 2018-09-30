import * as React from 'react';
import { Hello } from './Hello';

/**
 * App component
 */
export class App extends React.Component {
    /**
     * Return an element to render
     *
     * @return object
     */
    public render() {
        const jsx = (
            <div>
                <Hello compiler="TypeScript" framework="ReactJS" />
                <Hello compiler="Babel" framework="AngularJS" />
            </div>
        );

        return jsx;
    }
}
