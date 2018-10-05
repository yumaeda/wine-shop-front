import * as React from 'react';
import { WineColumn } from './WineColumn';

/**
 * Interface for HorizontalWineList
 */
interface IHorizontalWineList {
    wines: Array<{
        id: string,
        vintage: string,
        name: string,
        producer: string,
    }>;
    baseImgUrl: string;
    homeUrl: string;
}

/**
 * Horizontal wine list component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class HorizontalWineList extends React.Component<IHorizontalWineList, {}> {
    /**
     * Return horizontal wine list JSX to render
     */
    public render() {
        const wineColumns = this.props.wines.map(
            (wine: { id: string, vintage: string, name: string, producer: string }, index: number) =>
            <WineColumn
                key={ index }
                id={ wine.id }
                name={ this.getWineName(wine.vintage, wine.name, wine.producer) }
                baseImgUrl={ this.props.baseImgUrl }
                homeUrl={ this.props.homeUrl } />
        );

        return (
            <table>
                <tbody>
                    <tr>{ wineColumns }</tr>
                </tbody>
            </table>
        );
    }

    /**
     * Generate name of wine
     *
     * @param string vintage Vintage of wine
     * @param string name Name of wine
     * @param string producer Producer of wine
     * @return string Full wine name
     */
    private getWineName(vintage: string, name: string, producer: string): string {
        return `${vintage} ${name} / ${producer}`;
    }
}
