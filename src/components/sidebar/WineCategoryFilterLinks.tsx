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
        return (
            <ul>
                <li className="sidebar__list-item">
                    <CategoryFilterContainer text="スパークリング・ワイン" category="Mousseux" />
                </li>
                <li className="sidebar__list-item">
                    <CategoryFilterContainer text="シャンパーニュ" category="Champagne" />
                </li>
                <li className="sidebar__list-item">
                    <CategoryFilterContainer text="白ワイン" category="Blanc" />
                </li>
                <li className="sidebar__list-item">
                    <CategoryFilterContainer text="ロゼ" category="Rosé" />
                </li>
                <li className="sidebar__list-item">
                    <CategoryFilterContainer text="赤ワイン" category="Rouge" />
                </li>
                <li className="sidebar__list-item">
                    <CategoryFilterContainer text="デザートワイン" category="Doux" />
                </li>
                <li className="sidebar__list-item">
                    <CategoryFilterContainer text="オー・ド・ヴィ" category="Eau de Vie" />
                </li>
            </ul>
        )
    }
}
