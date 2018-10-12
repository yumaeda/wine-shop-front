/**
 * Renders <aside> element for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { WineCategoryFilterLinks } from './WineCategoryFilterLinks';
import { WineVintageFilterLinks } from './WineVintageFilterLinks';

/**
 * AnywayAside component
 */
export class AnywayAside extends React.Component {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<AnywayAside> {
        return (
            <aside>
                <h2>種類</h2>
                <WineCategoryFilterLinks />
                <hr />
                <h2>年代</h2>
                <WineVintageFilterLinks />
            </aside>
        );
    }
}
