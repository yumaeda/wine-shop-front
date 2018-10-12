/**
 * Renders default page contents for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { IFilteredWines, IWine } from '../redux/states/IFilteredWines';
import { IState } from '../redux/Store';
import { APIWineList } from './APIWineList';
import { WineColumn } from './WineColumn';

/**
 * AnywayContents component
 */
class AnywayContents extends React.Component<IFilteredWines, {}> {
    /**
     * Return image JSX to render
     */
    public render(): React.ReactElement<AnywayContents> {
        let contents = (
            <>
                <APIWineList url="//anyway-grapes.jp/laravel5.3/public/api/v1/new-wines" />
                <APIWineList url="//anyway-grapes.jp/laravel5.3/public/api/v1/ranking-wines" />
            </>
        );

        if (this.props.wines && this.props.wines.length > 0) {
            const wineColumns = this.props.wines.map(
                (wine: IWine) =>
                <WineColumn key={ wine.barcode_number } wine={ wine } />
            );

            contents = (
                <table>
                    <tbody><tr>{ wineColumns }</tr></tbody>
                </table>
            );
        }

        return (
            <div id="page-contents">{ contents }</div>
        );
    }
}

/**
 * Map Redux state to component.props
 */
const mapStateToProps = (state: IState, props: RouteComponentProps<{}>) => {
    return state.filteredWines;
};

/**
 * Connect Redux state to the component
 */
export default withRouter(connect(mapStateToProps)(AnywayContents));
