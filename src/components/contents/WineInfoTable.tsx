/**
 * Renders wine info table
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { UserContext } from '../../context/UserContext'
import { IWine } from '../../states/WineState'
import { AddToCart } from './AddToCart'
import { WineImage } from './WineImage'
import WineProperties from './WineProperties'

/**
 * WineInfoTable component
 */
export class WineInfoTable extends React.Component<{ wine: IWine }> {
    /**
     * Set the current context
     */
    public static contextType = UserContext

    /**
     * Return wine column JSX to render
     */
    public render(): React.ReactElement<WineInfoTable> {
        const wine = this.props.wine
        const wineUrl =
            `${this.context.siteUrl}/store/index.php?submenu=wine_detail&id=${wine.barcode_number}`

        return (
            <table>
                <tbody>
                    <tr>
                        <td className="wine-info__column">
                            <a href={ wineUrl }>
                                <WineImage
                                    id={ wine.barcode_number }
                                    baseUrl={ `${this.context.imgDir}/wines/400px` }
                                    className="wine-info__image-column"
                                />
                            </a>
                        </td>
                        <td>
                            <span className="wine-info__title">
                                { `${wine.vintage} ${wine.combined_name_jpn}` }
                            </span>
                            <br /><br />
                            { 'by ' }
                            <a
                                href="javascript:void(0)"
                                className="wine-info__producer-link"
                                rel={ wine.producer }
                                target="producer_window"
                                children={ wine.producer_jpn }
                            />
                            <br /><br />
                            <WineProperties
                                capacity={ wine.capacity }
                                country={ wine.country }
                                region_jpn={ wine.region_jpn }
                                type={ wine.type } />
                        </td>
                        <td>
                            <AddToCart {...wine } />
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
