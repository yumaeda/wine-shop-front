/**
 * Renders page contents for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWine } from '../../interfaces/IWine'
import FilteredContents from './FilteredContents'

/**
 * AnywayContents component
 */
const AnywayContents = React.memo<{ wines: IWine[] }>(props => (
    <div className="contents">
        <FilteredContents wines={props.wines} />
    </div>
))

export default AnywayContents
