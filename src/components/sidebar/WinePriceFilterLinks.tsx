/**
 * Links for filtering wines by price
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { PriceFilterLink } from './PriceFilterLink';

/**
 * WinePriceFilterLinks component
 */
export class WinePriceFilterLinks extends React.Component {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<WinePriceFilterLinks> {
        const basePrice = 1000;
        const upperLimit = 10000;
        const priceRanges = [];

        for (let price = basePrice; price < upperLimit; price += basePrice) {
            const maxPrice = price + basePrice - 1;
            const dispMinPrice = price.toLocaleString();
            const dispMaxPrice = maxPrice.toLocaleString();
            priceRanges.push((
                <li key={ price }>
                    <PriceFilterLink
                        text={ `${dispMinPrice}〜${dispMaxPrice}円` }
                        minPrice={ price }
                        maxPrice={ maxPrice } />
                </li>
            ));
        }

        priceRanges.push((
            <li key={ upperLimit }>
                <PriceFilterLink
                    text={ upperLimit.toLocaleString() + '円〜' }
                    minPrice={ upperLimit }
                    maxPrice={ 999999999 } />
            </li>));

        return <ul className="price-range-ul">{ priceRanges }</ul>;
    }
}
