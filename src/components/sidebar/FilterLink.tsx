/**
 * Link for filtering items by category
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { Link } from 'react-router-dom'
import { WineCategory } from '../../constants/WineCategory'

/**
 * Interface for filter link
 */
export interface IFilterLink {
    category?: WineCategory
    onFilterClick: () => void
    minPrice?: number
    maxPrice?: number
    text: string
    vintage?: number
}

/**
 * CategoryFilterLink component
 */
export class FilterLink extends React.Component<IFilterLink, {}> {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<FilterLink> {
        return (
            <Link to="/"
                children={ this.props.text }
                onClick={
                    (event: React.MouseEvent<HTMLElement>) => {
                        this.props.onFilterClick()
                    }
                } />
        )
    }
}
