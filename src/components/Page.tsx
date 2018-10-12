/**
 * Page component, which is included in the root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import FilteredWinesContainer from '../containers/FilteredWinesContainer';
import { IFilteredWines } from '../redux/states/IFilteredWines';
import { AnywayAside } from './AnywayAside';
import { AnywayContents } from './AnywayContents';
import { AnywayFooter } from './AnywayFooter';
import { AnywayHeader } from './AnywayHeader';

/**
 * Interface for Page props
 */
interface IPage extends IFilteredWines {
    url?: string;
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
