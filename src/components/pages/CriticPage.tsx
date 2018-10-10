import * as React from 'react';
import { IUserContext, UserContext } from '../context/UserContext';
import { Iframe } from '../Iframe';

/**
 * CriticPage component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class CriticPage extends React.Component {
    /**
     * Return critic page JSX to render
     */
    public render() {
        return (
            <UserContext.Consumer>
                {
                    (ctx: IUserContext) => (
                        <div>
                            <Iframe src={ `./pages/${ctx.code}/critics.html` } />
                        </div>
                    )
                }
            </UserContext.Consumer>
        );
    }
}
