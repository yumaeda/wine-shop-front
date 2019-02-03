/**
 * List of new wines retrieved from API call
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import HorizontalWineList from 'components/contents/HorizontalWineList'
import * as React from 'react'
import { IWine } from 'states/IWine'

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
export class NewWineList extends React.Component<INewWineList> {
    /**
     * Return horizontal wine list JSX to render
     */
    public render(): React.ReactElement<NewWineList> {
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
