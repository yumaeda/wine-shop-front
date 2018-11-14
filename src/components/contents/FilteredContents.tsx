/**
 * Renders filtered wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWine } from '../../interfaces/IWine'
import { WineInfoTable } from './WineInfoTable'

/**
 * FilteredContents component
 */
const SFCComponent: React.SFC<{ wines: IWine[] }> = props => (
    <table>
        <tbody>
            {props.wines.map((wine: IWine) => (
                <tr key={wine.barcode_number}>
                    <WineInfoTable wine={wine} />
                </tr>
            ))}
        </tbody>
    </table>
)

const FilteredContents = React.memo(SFCComponent)
export default FilteredContents
