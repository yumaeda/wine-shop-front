/**
 * Link for filtering items by price
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { createPriceFilterAction } from '../../actions/FilterActionCreator';

/**
 * Interface for vintage filter link
 */
interface IPriceFilterLink {
    onFilterClick: () => void;
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
        return (
            <a
                href="#"
                children={ this.props.text }
                onClick={
                    (event: React.MouseEvent<HTMLElement>) => {
                        event.preventDefault();
                        this.props.onFilterClick();
                    }
                }
            />
        );
    }
}
