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
const BannerTable: React.FC<IProps> = props => {
    const { banners, onMount } = props

    // Similar to componentDidMount and componentDidUpdate:
    React.useEffect(() => {
        onMount()
    })

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

export default React.memo(BannerTable)
