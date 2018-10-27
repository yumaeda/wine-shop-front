/**
 * Renders page contents for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWine } from '../../states'
import { DefaultContents } from './DefaultContents'
import FilteredContents from './FilteredContents'
import { Iframe } from './Iframe'

/**
 * Interface for AnywayContents
 */
interface IAnywayCotents {
    match: any
    wines: IWine[]
}

/**
 * AnywayContents component
 */
export default class AnywayContents extends React.Component<IAnywayCotents, {}> {
    /**
     * Return image JSX to render
     */
    public render(): React.ReactElement<AnywayContents> {
        const { page } = this.props.match.params

        let jsx = null
        if (page && page.length > 0) {
            jsx = <Iframe src={ `./pages/ja/${page}.html` } />
        } else if (this.props.children) {
            jsx = <>{ this.props.children }</>
        } else if (!this.props.wines || this.props.wines.length === 0) {
            jsx = <DefaultContents />
        } else {
            jsx = <FilteredContents wines={ this.props.wines } />
        }

        return <div className="contents">{ jsx }</div>
    }
}
