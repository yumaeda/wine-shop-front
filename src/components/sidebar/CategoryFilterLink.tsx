/**
 * Link for filtering items by category
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { createCategoryFilterAction } from '../../actions/FilterActionCreator';
import { WineCategory } from '../../actions/FilterActions';

/**
 * Interface for category filter link
 */
export interface ICategoryFilterLink {
    onFilterClick: () => void;
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
