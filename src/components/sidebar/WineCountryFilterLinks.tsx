/**
 * Links for filtering wines by countries
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IUserContext, UserContext } from '../../context/UserContext'
import * as CountryInfo from '../../lib/CountryInfo'
import * as UrlUtility from '../../lib/UrlUtility'
import { ICountry } from '../../states/CountryState'

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
     * Return horizontal wine list JSX to render
     */
    public render(): React.ReactElement<WineCountryFilterLinks> {
        return (
            <UserContext.Consumer>
                {
                    (ctx: IUserContext) =>
                    <ul>
                        {
                            this.props.countries.map(
                                (country: ICountry, index: number) =>
                                <li className="sidebar__list-item" key={ index }>
                                    <a href="#" className="sidebar__link">
                                        <img
                                            src={ `${ctx.imgDir}/flags/flag-overlay.png` }
                                            className="sidebar__image"
                                            style={{
                                                backgroundImage: `url('${this.getFlagUrl(ctx.imgDir, country.name)}')`
                                            }}
                                        />
                                        { ` ${CountryInfo.getJpnName(country.name)}` }
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                }
            </UserContext.Consumer>
        )
    }

    /**
     * Execute onMount props callback
     */
    public componentDidMount() {
        this.props.onMount()
    }

    /**
     * Get flag image URL
     */
    private getFlagUrl = (imgDir: string, country: string) => {
        return `${imgDir}/flags/${UrlUtility.urlify(country)}.png`
    }
}
