/**
 * Renders page contents for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWine } from '../../interfaces/IWine'
import FilteredContents from './FilteredContents'

/**
 * Interface for AnywayContents
 */
interface IAnywayCotents {
    wines: IWine[]
}

/**
 * AnywayContents component
 */
const SFCComponent: React.SFC<IAnywayCotents> = props => (
    <div className="contents">
        <FilteredContents wines={props.wines} />
    </div>
)

export const AnywayContents = React.memo(SFCComponent)
export default AnywayContents
