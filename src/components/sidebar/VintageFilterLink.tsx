/**
 * Link for filtering items by vintage
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { createVintageFilterAction } from '../../actions/FilterActionCreator';
import store from '../../Store';

/**
 * Interface for vintage filter link
 */
interface IVintageFilterLink {
    onFilterClick: () => void;
    text: string;
    vintage: number;
}

/**
 * VintageFilterLink component
 */
export class VintageFilterLink extends React.Component<IVintageFilterLink, {}> {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<VintageFilterLink> {
        return (
            <a
                href="#"
                onClick={
                    (event: React.MouseEvent<HTMLElement>) => {
                        event.preventDefault();
                        this.props.onFilterClick();
                    }
                }>
                { this.props.text }
            </a>
        );
    }
}
