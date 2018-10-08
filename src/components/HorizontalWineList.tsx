import * as React from 'react';
import { IWine, WineColumn } from './WineColumn';

/**
 * Interface for HorizontalWineList
 */
interface IHorizontalWineList {
    wines: IWine[];
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
            (wine: IWine) =>
            <WineColumn
                key={ wine.id }
                wine={ wine }
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
}
