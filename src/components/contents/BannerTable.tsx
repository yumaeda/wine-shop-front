/**
 * Renders banner table
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IBanner } from '../../states/BannerState'
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
                                <td>
                                    <Banner
                                        key={ index }
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
        if (this.props.banners.length === 0) {
            this.props.onMount()
        }
    }
}
