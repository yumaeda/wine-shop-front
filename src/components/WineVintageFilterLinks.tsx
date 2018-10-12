/**
 * Links for filtering wines by vintage
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { VintageFilterLink } from './VintageFilterLink';

/**
 * WineVintageFilterLinks component
 */
export class WineVintageFilterLinks extends React.Component {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<WineVintageFilterLinks> {
        const currentYear = (new Date()).getFullYear();
        const vintages = [];

        for (let year = 1930; year < currentYear; year += 10) {
            vintages.push((
                <li key={ year }>
                    <VintageFilterLink text={ `${year}年代` } vintage={ year } />
                </li>
            ));
        }

        return <ul className="vintage-ul">{ vintages }</ul>;
    }
}
