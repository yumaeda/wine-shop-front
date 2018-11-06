/**
 * Renders wine info table
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { UserContext } from '../../context/UserContext'
import * as CountryInfo from '../../lib/CountryInfo'
import * as UrlUtility from '../../lib/UrlUtility'
import * as WineUtility from '../../lib/WineUtility'

/**
 * Interface fro WineProperties
 */
interface IWineProperties {
    capacity: number
    country: string
    region_jpn: string
    type: string
}

/**
 * WineProperties component
 */
export default class WineProperties extends React.Component<IWineProperties> {
    /**
     * Set the current context
     */
    public static contextType = UserContext

    /**
     * Return wine column JSX to render
     */
    public render(): React.ReactElement<WineProperties> {
        const country = UrlUtility.urlify(this.props.country)
        const countryUrl = `${this.context.siteUrl}/producers/${country}`

        return (
            <table className="wine-info__properties">
                <tbody>
                    <tr>
                        <td className="wine-info__column wine-info__label-column">タイプ</td>
                        <td className="wine-info__column">{ WineUtility.getJpnType(this.props.type) }</td>
                    </tr>
                    <tr>
                        <td className="wine-info__column wine-info__label-column">生産地</td>
                        <td className="wine-info__column">
                            <a href={ countryUrl } target="country_window">
                                { CountryInfo.getJpnName(this.props.country) }
                            </a>
                            <span>{ ` > ${this.props.region_jpn}` }</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="wine-info__column wine-info__label-column">容量</td>
                        <td className="wine-info__column">{ `${this.props.capacity}ml` }</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
