/**
 * Renders page contents for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import FilteredContents from 'components/contents/FilteredContents'
import * as React from 'react'
import { IWine } from 'states/IWine'

/**
 * Props interface for AnywayContents
 */
interface IProps {
    wines: IWine[]
}

/**
 * AnywayContents component
 */
const AnywayContents: React.FC<IProps> = props => {
    const { wines } = props

    return (
        <div className="contents">
            <FilteredContents wines={wines} />
        </div>
    )
}

export default React.memo(AnywayContents)
