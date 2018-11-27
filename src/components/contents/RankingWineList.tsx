/**
 * List of ranking wines retrieved from API call
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWine } from '../../interfaces/IWine'
import HorizontalWineList from './HorizontalWineList'

/**
 * Interface for rendering ranking wines
 */
export interface IRankingWineList {
    onMount: () => void
    url: string
    wines: IWine[]
}

/**
 * Component for rendering ranking wines, which is retrieved by API call
 */
export class RankingWineList extends React.Component<IRankingWineList> {
    /**
     * Return horizontal wine list JSX to render
     */
    public render(): React.ReactElement<RankingWineList> {
        return <HorizontalWineList wines={this.props.wines} />
    }

    /**
     * Dispatch FETCH_START action
     */
    public componentDidMount() {
        this.props.onMount()
    }
}
