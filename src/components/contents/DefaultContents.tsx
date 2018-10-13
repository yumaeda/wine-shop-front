/**
 * Renders default page contents for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react';
import { APIWineList } from './APIWineList';

/**
 * DefaultContents component
 */
export class DefaultContents extends React.Component {
    /**
     * Return default contents JSX to render
     */
    public render(): React.ReactElement<DefaultContents> {
        return (
            <div id="page-contents">
                <APIWineList url="//anyway-grapes.jp/laravel5.3/public/api/v1/new-wines" />
                <APIWineList url="//anyway-grapes.jp/laravel5.3/public/api/v1/ranking-wines" />
            </div>
        );
    }
}
