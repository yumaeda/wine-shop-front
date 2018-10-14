/**
 * Links for filtering wines by category
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import CategoryFilterContainer from '../../containers/CategoryFilterContainer';

/**
 * WineCategoryFilterLinks component
 */
export class WineCategoryFilterLinks extends React.Component {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<WineCategoryFilterLinks> {
        return (
            <ul className="type-ul">
                <li>
                    <CategoryFilterContainer text="スパークリング・ワイン" category="Mousseux" />
                </li>
                <li>
                    <CategoryFilterContainer text="シャンパーニュ" category="Champagne" />
                </li>
                <li>
                    <CategoryFilterContainer text="白ワイン" category="Blanc" />
                </li>
                <li>
                    <CategoryFilterContainer text="ロゼ" category="Rosé" />
                </li>
                <li>
                    <CategoryFilterContainer text="赤ワイン" category="Rouge" />
                </li>
                <li>
                    <CategoryFilterContainer text="デザートワイン" category="Doux" />
                </li>
                <li>
                    <CategoryFilterContainer text="オー・ド・ヴィ" category="Eau de Vie" />
                </li>
            </ul>
        );
    }
}
