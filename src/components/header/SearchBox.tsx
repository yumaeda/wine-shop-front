/**
 * Renders search box
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { UserContext } from '../../context/UserContext'

/**
 * Interface for SearchBox
 */
interface ISearchBox {
    placeholder: string
}

/**
 * SearchBox component
 */
export class SearchBox extends React.Component<ISearchBox, {}> {
    /**
     * Set the current context
     */
    public static contextType = UserContext

    /**
     * Return image JSX to render
     */
    public render(): React.ReactElement<SearchBox> {
        return (
            <div className="search-box">
                <input type="text" placeholder={ this.props.placeholder } className="search-box__input" />
                <img
                    src={ `${this.context.imgDir}/search_wine.png` }
                    className="search-box__button"
                    onClick={ this.onSearch } />
            </div>
        )
    }

    /**
     * Event handler for onclick event for the search button
     */
    private onSearch = (event: React.MouseEvent<HTMLElement>): void => {
        event.preventDefault()
        alert('Search')
    }
}
