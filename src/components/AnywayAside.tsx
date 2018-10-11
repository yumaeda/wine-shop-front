import * as React from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { createCategoryFilterAction } from '../redux/actions/FilterActionCreator';
import { IFilteredWines, IWine } from '../redux/states/IFilteredWines';
import store, { IState } from '../redux/Store';
import { WineColumn } from './WineColumn';

/**
 * AnywayAside component
 */
class AnywayAside extends React.Component<IFilteredWines, {}> {
    /**
     * Return JSX to render
     */
    public render() {
        const wineColumns = this.props.wines.map(
            (wine: IWine) =>
            <WineColumn key={ wine.barcode_number } wine={ wine } />
        );

        return (
            <aside>
                <ul className="type-ul">
                    <li><a href="#" onClick={ this.onLinkClick } rel="Mousseux">スパークリング・ワイン</a></li>
                    <li><a href="#" rel="Champagne">シャンパーニュ</a></li>
                    <li><a href="#" rel="Blanc">白ワイン</a></li>
                    <li><a href="#" rel="Rosé">ロゼ</a></li>
                    <li><a href="#" rel="Rouge">赤ワイン</a></li>
                    <li><a href="#" rel="Doux">デザートワイン</a></li>
                    <li><a href="#" rel="Eau de Vie">オー・ド・ヴィ</a></li>
                </ul>
                <hr />
                <table>
                    <tr>
                        { wineColumns }
                    </tr>
                </table>
            </aside>
        );
    }

    /**
     * Event handler for onclick event of the link
     */
    private onLinkClick = (event: React.MouseEvent<HTMLElement>): void => {
        event.preventDefault();
        store.dispatch(createCategoryFilterAction('Red'));
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
