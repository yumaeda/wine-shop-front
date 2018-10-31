/**
 * Renders filtered wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWine } from '../../states'
import { WineInfoTable } from './WineInfoTable'

/**
 * FilteredContents component
 */
const FilteredContents: React.SFC<{ wines: IWine[] }> = (props) => (
    <table>
        <tbody>
            {
                props.wines.map(
                    (wine: IWine, index: number) => (
                        <tr key={ wine.barcode_number }>
                            <WineInfoTable wine={ wine } />
                        </tr>
                    )
                )
            }
        </tbody>
    </table>
)

export default FilteredContents
