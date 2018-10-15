/**
 * Page component, which is included in the root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import FilteredWinesContainer from '../containers/FilteredWinesContainer';
import { IFilteredWines } from '../states/IFilteredWines';
import { AnywayContents } from './contents/AnywayContents';
import { AnywayFooter } from './footer/AnywayFooter';
import { AnywayHeader } from './header/AnywayHeader';
import { AnywayAside } from './sidebar/AnywayAside';

/**
 * Interface for Page props
 */
interface IPage extends IFilteredWines {
    match: any;
}

/**
 * Page component
 */
export class Page extends React.Component<IPage, {}> {
    /**
     * Return image JSX to render
     */
    public render(): React.ReactElement<Page> {
        return (
            <React.StrictMode>
                <AnywayHeader logined={ true } />
                <div className="page-container">
                    <AnywayAside />
                    <AnywayContents { ...this.props } />
                </div>
                <AnywayFooter />
            </React.StrictMode>
        );
    }
}
