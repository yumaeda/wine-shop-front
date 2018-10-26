/**
 * Links for filtering wines by vintage
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import VintageFilterContainer from '../../containers/VintageFilterContainer'

/**
 * WineVintageFilterLinks component
 */
export class WineVintageFilterLinks extends React.Component {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<WineVintageFilterLinks> {
        const currentYear = (new Date()).getFullYear()
        const vintages = []

        for (let year = 1930; year < currentYear; year += 10) {
            vintages.push((
                <li className="sidebar__list-item" key={ year }>
                    <VintageFilterContainer text={ `${year}年代` } vintage={ year } />
                </li>
            ))
        }

        return <ul>{ vintages }</ul>
    }
}
