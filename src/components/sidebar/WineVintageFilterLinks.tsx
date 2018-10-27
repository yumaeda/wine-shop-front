/**
 * Links for filtering wines by vintage
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import FilterLinkContainer from '../../containers/FilterLinkContainer'

/**
 * WineVintageFilterLinks component
 */
export class WineVintageFilterLinks extends React.Component {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<WineVintageFilterLinks> {
        const api = 'api/v1/wines'
        const currentYear = (new Date()).getFullYear()
        const vintages = []

        for (let year = 1930; year < currentYear; year += 10) {
            vintages.push((
                <li className="sidebar__list-item" key={ year }>
                    <FilterLinkContainer
                        text={ `${year}年代` }
                        url={ `${api}?vintage_gte=${year}&vintage_lte=${year + 9}` }
                    />
                </li>
            ))
        }

        return <ul>{ vintages }</ul>
    }
}
