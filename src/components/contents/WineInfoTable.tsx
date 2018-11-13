/**
 * Renders wine info table
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IUserContext, UserContext } from '../../context/UserContext'
import { IWine } from '../../interfaces/IWine'
import { AddToCart } from './AddToCart'
import { WineImage } from './WineImage'
import WineProperties from './WineProperties'

/**
 * WineInfoTable component
 */
export class WineInfoTable extends React.Component<{ wine: IWine }> {
    /**
     * Return wine column JSX to render
     */
    public render(): React.ReactElement<WineInfoTable> {
        const wine = this.props.wine
        const detailUrl =
            `store/index.php?submenu=wine_detail&id=${wine.barcode_number}`

        const jsx = (
            <UserContext.Consumer>
                {
                    (ctx: IUserContext) =>
                    <>
                        <td className="wine-info__column">
                            <a href={ `${ctx.siteUrl}/${detailUrl}` }>
                                <WineImage
                                    id={ wine.barcode_number }
                                    baseUrl={ `${ctx.imgDir}/wines/400px` }
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
                                siteUrl={ ctx.siteUrl }
                                type={ wine.type } />
                        </td>
                        <td className="wine-info__cart-column">
                            <AddToCart {...wine } />
                        </td>
                    </>
                }
            </UserContext.Consumer>
        )

        return <table><tbody><tr>{ jsx }</tr></tbody></table>
    }
}
