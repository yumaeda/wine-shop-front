import * as React from 'react';
import { IUserContext, UserContext } from '../context/UserContext';
import { Iframe } from '../Iframe';

/**
 * VintagePage component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class VintagePage extends React.Component {
    /**
     * Return vintage page JSX to render
     */
    public render() {
        return (
            <UserContext.Consumer>
                {
                    (ctx: IUserContext) => (
                        <div>
                            <Iframe src={ `./pages/${ctx.code}/vintage.html` } />
                        </div>
                    )
                }
            </UserContext.Consumer>
        );
    }
}
