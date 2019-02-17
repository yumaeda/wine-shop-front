/**
 * Renders wine info table
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { AddToCart } from 'components/contents/AddToCart'
import WineImage from 'components/contents/WineImage'
import WineProperties from 'components/contents/WineProperties'
import { IUserContext, UserContext } from 'context/UserContext'
import * as React from 'react'
import { IWine } from 'states/IWine'

/**
 * Props interface for WineInfoTable
 */
interface IProps {
    wine: IWine
}

/**
 * WineInfoTable component
 */
export class WineInfoTable extends React.Component<IProps> {
    /**
     * Return wine column JSX to render
     */
    public render(): React.ReactElement<WineInfoTable> {
        const { wine } = this.props
        const detailUrl = `store/index.php?submenu=wine_detail&id=${
            wine.barcode_number
        }`

        const jsx = (
            <UserContext.Consumer>
                {(ctx: IUserContext) => (
                    <>
                        <td className="wine-info__column">
                            <a href={`${ctx.siteUrl}/${detailUrl}`}>
                                <WineImage
                                    id={wine.barcode_number}
                                    baseUrl={`${ctx.imgDir}/wines/400px`}
                                    className="wine-info__image-column"
                                />
                            </a>
                        </td>
                        <td>
                            <span className="wine-info__title">
                                {`${wine.vintage} ${wine.combined_name_jpn}`}
                            </span>
                            <br />
                            <br />
                            {'by '}
                            <a
                                href="javascript:void(0)"
                                className="wine-info__producer-link"
                                rel={wine.producer}
                                target="producer_window"
                                children={wine.producer_jpn}
                            />
                            <br />
                            <br />
                            <WineProperties
                                capacity={wine.capacity}
                                country={wine.country}
                                region_jpn={wine.region_jpn}
                                siteUrl={ctx.siteUrl}
                                type={wine.type}
                            />
                        </td>
                        <td className="wine-info__cart-column">
                            <AddToCart {...wine} />
                        </td>
                    </>
                )}
            </UserContext.Consumer>
        )

        return (
            <table>
                <tbody>
                    <tr>{jsx}</tr>
                </tbody>
            </table>
        )
    }
}
