import * as React from 'react';
import { IWine } from '../redux/states/IFilteredWines';
import { WineColumn } from './WineColumn';

/**
 * Interface for HorizontalWineList
 */
interface IHorizontalWineList {
    wines: IWine[];
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
            <WineColumn key={ wine.barcode_number } wine={ wine } />
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
