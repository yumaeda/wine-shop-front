import * as React from 'react';
import { UserContext } from './context/UserContext';
import { WineImage } from './WineImage';

/**
 * Interface Wine
 */
export interface IWine {
    id: string;
    jpn_name: string;
    jpn_producer: string;
    name: string;
    producer: string;
    vintage: string;
}

/**
 * Interface for WineColumn
 */
interface IWineColumn {
    wine: IWine;
    baseImgUrl: string;
    homeUrl: string;
}

/**
 * WineColumn component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class WineColumn extends React.Component<IWineColumn, {}> {
    /**
     * Maximum number of display text to render
     */
    private maxDisplayTextLength: number = 40;

    /**
     * Return wine column JSX to render
     */
    public render() {
        const wineId = this.props.wine.id;

        return (
            <UserContext.Consumer>
                { (lang: { code: string }) => (
                    <td className="wine-column">
                        <a href={ this.getDetailPageUrl(wineId, lang.code) } target="wine_detail" className="wine-link">
                            <WineImage id={ wineId } baseUrl={ this.props.baseImgUrl } className="wine-img" />
                            <div>{ this.getDisplayText(this.getWineName(this.props.wine, lang.code)) }</div>
                        </a>
                    </td>
                )}
            </UserContext.Consumer>
        );
    }

    /**
     * Get URL of the wine detail page
     *
     * @param string id Wine ID
     * @param string lang Language code
     * @return string
     */
    private getDetailPageUrl(id: string, lang: string): string {
        return `${this.props.homeUrl}?submenu=wine_detail&id=${id}&lang=${lang}`;
    }

    /**
     * Get the text to display.
     * If the length of the text exceed the limit,
     * ellipsis chars ... is displayed.
     *
     * @param string name Name of the wine
     * @return string Name of the wine to be displayed
     */
    private getDisplayText(name: string): string {
        return (name.length > this.maxDisplayTextLength) ?
            name.substr(0, this.maxDisplayTextLength - 3) + '...' :
            name;
    }

    /**
     * Get name of the specified wine
     *
     * @param IWine wine Target wine
     * @param string lang Language code
     */
    private getWineName(wine: IWine, lang: string): string {
        const vintage = wine.vintage;
        const name = (lang === 'ja') ? wine.jpn_name : wine.name;
        const producer = (lang === 'ja') ? wine.jpn_producer : wine.producer;

        return `${vintage} ${name} / ${producer}`;
    }
}
