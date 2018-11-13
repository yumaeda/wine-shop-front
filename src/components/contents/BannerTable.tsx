/**
 * Renders banner table
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IBanner } from '../../interfaces/IBanner'
import { Banner } from './Banner'

/**
 * Interface for banner table
 */
interface IBannerTable {
    banners: IBanner[]
    onMount: () => void
    url: string
}

/**
 * BannerTable component
 */
export class BannerTable extends React.Component<IBannerTable> {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<BannerTable> {
        return (
            <table>
                <tbody>
                    <tr>
                        {
                            this.props.banners.map(
                                (banner: IBanner, index: number) =>
                                <td key={ index }>
                                    <Banner
                                        pageUrl={ banner.pageUrl }
                                        image={ banner.image }
                                    />
                                </td>
                            )
                        }
                    </tr>
                </tbody>
            </table>
        )
    }

    /**
     * Dispatch FETCH_START action
     */
    public componentDidMount() {
        this.props.onMount()
    }
}
