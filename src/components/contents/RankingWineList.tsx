/**
 * List of ranking wines retrieved from API call
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import HorizontalWineList from 'components/contents/HorizontalWineList'
import * as React from 'react'
import { IWine } from 'states/IWine'

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
        const { wines } = this.props

        return <HorizontalWineList wines={wines} />
    }

    /**
     * Dispatch FETCH_START action
     */
    public componentDidMount() {
        this.props.onMount()
    }
}
