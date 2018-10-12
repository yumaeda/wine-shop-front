/**
 * Link for filtering items by category
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { createCategoryFilterAction } from '../redux/actions/FilterActionCreator';
import { WineCategory } from '../redux/actions/FilterActions';
import store from '../redux/Store';

/**
 * Interface for category filter link
 */
interface ICategoryFilterLink {
    text: string;
    category: WineCategory;
}

/**
 * CategoryFilterLink component
 */
export class CategoryFilterLink extends React.Component<ICategoryFilterLink, {}> {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<CategoryFilterLink> {
        return <a href="#" onClick={ this.onLinkClick }>{ this.props.text }</a>;
    }

    /**
     * Event handler for onclick event of the link
     */
    private onLinkClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        store.dispatch(createCategoryFilterAction(this.props.category));
    }
}
