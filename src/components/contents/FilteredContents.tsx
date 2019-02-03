/**
 * Renders filtered wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { WineInfoTable } from 'components/contents/WineInfoTable'
import * as React from 'react'
import { IWine } from 'states/IWine'

/**
 * Props interface for FilteredContents
 */
interface IProps {
    wines: IWine[]
}

/**
 * FilteredContents component
 */
const FilteredContents: React.FC<IProps> = props => {
    const { wines } = props

    return (
        <table>
            <tbody>
                {wines.map((wine: IWine) => (
                    <tr key={wine.barcode_number}>
                        <WineInfoTable wine={wine} />
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default React.memo(FilteredContents)
