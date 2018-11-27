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
 * FilterLink component
 */
const FilterLink = React.memo<IFilterLink>(props => (
    <Link
        to="/filter"
        className="sidebar__link"
        children={props.text}
        onClick={() => {
            props.onFilterClick()
        }}
    />
))

export default FilterLink
