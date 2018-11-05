/**
 * Links for filtering wines by countries
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { UserContext } from '../../context/UserContext'
import * as CountryInfo from '../../lib/CountryInfo'
import * as UrlUtility from '../../lib/UrlUtility'
import { ICountry } from '../../states'

/**
 * Interface for rendering countries
 */
export interface IWineCountryFilterLinks {
    onMount: () => void
    url: string
    countries: ICountry[]
}

/**
 * WineCountryFilterLinks component
 */
export class WineCountryFilterLinks extends React.Component<IWineCountryFilterLinks, {}> {
    /**
     * Set the current context
     */
    public static contextType = UserContext

    /**
     * Return horizontal wine list JSX to render
     */
    public render(): React.ReactElement<WineCountryFilterLinks> {
        const flagDir = `${this.context.imgDir}/flags`
        return (
            <ul>
                {
                    this.props.countries.map(
                        (country: ICountry, index: number) =>
                        <li className="sidebar__list-item" key={ index }>
                            <a href="#" className="sidebar__link">
                                <img
                                    src={ `${flagDir}/flag-overlay.png` }
                                    className="sidebar__image"
                                    style={
                                        {
                                            backgroundImage: `url('${flagDir}/${UrlUtility.urlify(country.name)}.png')`
                                        }
                                    }
                                />
                                { ` ${CountryInfo.getJpnName(country.name)}` }
                            </a>
                        </li>
                    )
                }
            </ul>
        )
    }

    /**
     * Execute onMount props callback
     */
    public componentDidMount() {
        this.props.onMount()
    }
}
