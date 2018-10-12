/**
 * Renders <aside> element for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { IFilteredWines, IWine } from '../redux/states/IFilteredWines';
import { IState } from '../redux/Store';
import { WineCategoryFilterLinks } from './WineCategoryFilterLinks';
import { WineColumn } from './WineColumn';

/**
 * AnywayAside component
 */
class AnywayAside extends React.Component<IFilteredWines, {}> {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<AnywayAside> {
        const wineColumns = this.props.wines.map(
            (wine: IWine) =>
            <WineColumn key={ wine.barcode_number } wine={ wine } />
        );

        return (
            <aside>
                <WineCategoryFilterLinks />
                <hr />
                <table>
                    <tr>
                        { wineColumns }
                    </tr>
                </table>
            </aside>
        );
    }
}

/**
 * Map Redux state to component.props
 */
const mapStateToProps = (state: IState) => {
    return state.filteredWines;
};

/**
 * Connect Redux state to the component
 */
export default connect(mapStateToProps)(AnywayAside);
