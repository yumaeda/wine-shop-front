/**
 * Renders banner table
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import Banner from 'components/contents/Banner'
import * as React from 'react'
import { IBanner } from 'states/IBanner'

/**
 * Props interface for BannerTable
 */
interface IProps {
    banners: IBanner[]
    onMount: () => void
    url: string
}

/**
 * BannerTable component
 */
export class BannerTable extends React.Component<IProps> {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<BannerTable> {
        const { banners } = this.props

        return (
            <table>
                <tbody>
                    <tr>
                        {banners.map((banner: IBanner, index: number) => (
                            <td key={index}>
                                <Banner
                                    pageUrl={banner.pageUrl}
                                    image={banner.image}
                                />
                            </td>
                        ))}
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
