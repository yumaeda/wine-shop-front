import * as React from 'react';
import { UserContext } from './context/UserContext';
import { WineImage } from './WineImage';

/**
 * Interface for WineColumn
 */
interface IWineColumn {
    id: string;
    name: string;
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
        return (
            <UserContext.Consumer>
                { (lang: { code: string }) => (
                    <td>
                        <a href={ this.getDetailPageUrl(this.props.id, lang.code) } target="wine_detail">
                            <WineImage id={ this.props.id } baseUrl={ this.props.baseImgUrl } className="wine-img" />
                            <div>{ this.getDisplayText(this.props.name) }</div>
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
}
