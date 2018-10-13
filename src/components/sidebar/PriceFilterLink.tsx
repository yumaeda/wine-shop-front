/**
 * Link for filtering items by price
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { createPriceFilterAction } from '../../actions/FilterActionCreator';
import store from '../../Store';

/**
 * Interface for vintage filter link
 */
interface IPriceFilterLink {
    text: string;
    minPrice: number;
    maxPrice: number;
}

/**
 * PriceFilterLink component
 */
export class PriceFilterLink extends React.Component<IPriceFilterLink, {}> {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<PriceFilterLink> {
        return <a href="#" onClick={ this.onLinkClick }>{ this.props.text }</a>;
    }

    /**
     * Event handler for onclick event of the link
     */
    private onLinkClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        store.dispatch(
            createPriceFilterAction(this.props.minPrice, this.props.maxPrice)
        );
    }
}
