import * as React from 'react';
import { IUserContext, UserContext } from './context/UserContext';

/**
 * Interface for SearchBox
 */
interface ISearchBox {
    placeholder: string;
}

/**
 * SearchBox component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class SearchBox extends React.Component<ISearchBox, {}> {
    /**
     * Return image JSX to render
     */
    public render() {
        const jsx = (
            <UserContext.Consumer>
                {
                    (ctx: IUserContext) => (
                        <div id="simple-search-fld">
                            <input type="text" placeholder={ this.props.placeholder } className="search-input" />
                            <img
                                src={ `${ctx.imgDir}/search_wine.png` }
                                className="search-button"
                                onClick={ this.onSearch } />
                        </div>
                    )
                }
            </UserContext.Consumer>
        );

        return jsx;
    }

    /**
     * Event handler for onclick event for the search button
     */
    private onSearch = (event: React.MouseEvent<HTMLElement>): void => {
        event.preventDefault();
        alert('Search');
    }
}
