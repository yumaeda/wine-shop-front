/**
 * List of wines retrieved from API call
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { HorizontalWineList } from './HorizontalWineList'
import { RenderGetResult } from './RenderGetResult'

/**
 * Component for rendering a wine list, which is retrieved by API call
 */
export class APIWineList extends React.Component<{ url: string }, {}> {
    /**
     * Return horizontal wine list JSX to render
     */
    public render(): React.ReactElement<APIWineList> {
        return (
            <RenderGetResult
                url={ this.props.url }
                renderItems={ this.renderWines }
            />
        )
    }

    /**
     * Event handler for onclick event of the link
     */
    private renderWines = (result: any) => {
        return <HorizontalWineList wines={ result.wines } />
    }
}
