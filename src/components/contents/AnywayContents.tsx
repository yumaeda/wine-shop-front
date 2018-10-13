/**
 * Renders default page contents for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { IWine } from '../../states/IFilteredWines';
import { DefaultContents } from './DefaultContents';
import { Iframe } from './Iframe';
import { WineColumn } from './WineColumn';

/**
 * Interface for AnywayContents
 */
interface IAnywayCotents {
    url?: string;
    wines: IWine[];
}

/**
 * AnywayContents component
 */
export class AnywayContents extends React.Component<IAnywayCotents, {}> {
    /**
     * Return image JSX to render
     */
    public render(): React.ReactElement<AnywayContents> {
        if (this.props.url) {
            return <Iframe src={ this.props.url } />;
        } else if (this.props.children) {
            return <>{ this.props.children }</>;
        } else if (!this.props.wines || this.props.wines.length === 0) {
            return <DefaultContents />;
        }

        const wineColumns = this.props.wines.map(
            (wine: IWine) =>
            <WineColumn key={ wine.barcode_number } wine={ wine } />
        );

        return (
            <div id="page-contents">
                <table>
                    <tbody><tr>{ wineColumns }</tr></tbody>
                </table>
            </div>
        );
    }
}
