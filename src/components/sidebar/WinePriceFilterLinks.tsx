/**
 * Links for filtering wines by price
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import FilterLinkContainer from '../../containers/FilterLinkContainer'

/**
 * WinePriceFilterLinks component
 */
export class WinePriceFilterLinks extends React.Component {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<WinePriceFilterLinks> {
        const api = 'api/v1/wines'
        const basePrice = 1000
        const upperLimit = 10000
        const priceRanges = []

        for (let price = basePrice; price < upperLimit; price += basePrice) {
            const maxPrice = price + basePrice - 1
            const dispMinPrice = price.toLocaleString()
            const dispMaxPrice = maxPrice.toLocaleString()
            priceRanges.push((
                <li className="sidebar__list-item" key={ price }>
                    <FilterLinkContainer
                        text={ `${dispMinPrice}〜${dispMaxPrice}円` }
                        url={ `${api}?price_gte=${price}&price_lte=${maxPrice}` }
                    />
                </li>
            ))
        }

        priceRanges.push((
            <li className="sidebar__list-item" key={ upperLimit }>
                <FilterLinkContainer
                    text={ upperLimit.toLocaleString() + '円〜' }
                    url={ `${api}?price_gte=${upperLimit}&price_lte=999999999` }
                />
            </li>))

        return <ul>{ priceRanges }</ul>
    }
}
