/**
 * Renders table column, which contains wine info
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IUserContext, UserContext } from '../../context/UserContext'
import { IWine } from '../../interfaces/IWine'
import { WineImage } from './WineImage'

/**
 * WineColumn component
 */
export class WineColumn extends React.Component<{ wine: IWine }, {}> {
    /**
     * Maximum number of display text to render
     */
    private maxDisplayTextLength: number = 40

    /**
     * Return wine column JSX to render
     */
    public render(): React.ReactElement<WineColumn> {
        const wineId = this.props.wine.barcode_number
        const params = `?submenu=wine_detail&id=${wineId}`

        return (
            <td className="wine-column">
                <UserContext.Consumer>
                    {
                        (ctx: IUserContext) =>
                        <a
                            className="wine-column__link"
                            href={ `${ctx.siteUrl}/store/index.php${params}&lang=${ctx.code}` }
                            target="wine_detail">

                            <WineImage
                                id={ wineId }
                                baseUrl={ `${ctx.imgDir}/wines/400px` }
                                className="wine-column__image"
                            />

                            <div>
                                {
                                    this.getDisplayText(
                                        this.getWineName(this.props.wine, ctx.code)
                                    )
                                }
                            </div>
                        </a>
                    }
                </UserContext.Consumer>
            </td>
        )
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
            name
    }

    /**
     * Get name of the specified wine
     *
     * @param IWine wine Target wine
     * @param string lang Language code
     */
    private getWineName(wine: IWine, lang: string): string {
        const vintage = wine.vintage
        const name = (lang === 'ja') ? wine.combined_name_jpn : wine.combined_name
        const producer = (lang === 'ja') ? wine.producer_jpn : wine.producer

        return `${vintage} ${name} / ${producer}`
    }
}
