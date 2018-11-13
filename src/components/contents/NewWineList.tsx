/**
 * List of new wines retrieved from API call
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWine } from '../../interfaces/IWine'
import { HorizontalWineList } from './HorizontalWineList'

/**
 * Interface for rendering new wines
 */
export interface INewWineList {
    onMount: () => void
    url: string
    wines: IWine[]
}

/**
 * Component for rendering new wines, which is retrieved by API call
 */
export class NewWineList extends React.Component<INewWineList, {}> {
    /**
     * Return horizontal wine list JSX to render
     */
    public render(): React.ReactElement<NewWineList> {
        return <HorizontalWineList wines={ this.props.wines } />
    }

    /**
     * Dispatch FETCH_START action
     */
    public componentDidMount() {
        this.props.onMount();
    }
}
