/**
 * Links for filtering wines by category
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import CategoryFilterContainer from '../../containers/CategoryFilterContainer'

/**
 * WineCategoryFilterLinks component
 */
export class WineCategoryFilterLinks extends React.Component {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<WineCategoryFilterLinks> {
        const api = 'api/v1/wines'

        return (
            <ul>
                <li className="sidebar__list-item">
                    <CategoryFilterContainer text="スパークリング・ワイン" url={ `${api}?type=Mousseux` } />
                </li>
                <li className="sidebar__list-item">
                    <CategoryFilterContainer text="シャンパーニュ" url={ `${api}?type=Champagne` } />
                </li>
                <li className="sidebar__list-item">
                    <CategoryFilterContainer text="白ワイン" url={ `${api}?type=Blanc` } />
                </li>
                <li className="sidebar__list-item">
                    <CategoryFilterContainer text="ロゼ" url={ `${api}?type=Rosé` } />
                </li>
                <li className="sidebar__list-item">
                    <CategoryFilterContainer text="赤ワイン" url={ `${api}?type=Rouge` } />
                </li>
                <li className="sidebar__list-item">
                    <CategoryFilterContainer text="デザートワイン" url={ `${api}?type=Doux` } />
                </li>
                <li className="sidebar__list-item">
                    <CategoryFilterContainer text="オー・ド・ヴィ" url={ `${api}?type=Eau de Vie` } />
                </li>
            </ul>
        )
    }
}
