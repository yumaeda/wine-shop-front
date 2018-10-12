/**
 * Link for filtering items by vintage
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { createVintageFilterAction } from '../redux/actions/FilterActionCreator';
import store from '../redux/Store';

/**
 * Interface for vintage filter link
 */
interface IVintageFilterLink {
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
        return <a href="#" onClick={ this.onLinkClick }>{ this.props.text }</a>;
    }

    /**
     * Event handler for onclick event of the link
     */
    private onLinkClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        store.dispatch(createVintageFilterAction(this.props.vintage));
    }
}
