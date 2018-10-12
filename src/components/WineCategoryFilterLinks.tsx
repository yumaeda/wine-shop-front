/**
 * Links for filtering wines by category
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { CategoryFilterLink } from './CategoryFilterLink';

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
                    <CategoryFilterLink text="スパークリング・ワイン" category="Mousseux" />
                </li>
                <li>
                    <CategoryFilterLink text="シャンパーニュ" category="Champagne" />
                </li>
                <li>
                    <CategoryFilterLink text="白ワイン" category="Blanc" />
                </li>
                <li>
                    <CategoryFilterLink text="ロゼ" category="Rosé" />
                </li>
                <li>
                    <CategoryFilterLink text="赤ワイン" category="Rouge" />
                </li>
                <li>
                    <CategoryFilterLink text="デザートワイン" category="Doux" />
                </li>
                <li>
                    <CategoryFilterLink text="オー・ド・ヴィ" category="Eau de Vie" />
                </li>
            </ul>
        );
    }
}
