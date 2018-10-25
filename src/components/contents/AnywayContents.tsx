/**
 * Renders default page contents for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWine } from '../../states'
import { DefaultContents } from './DefaultContents'
import { Iframe } from './Iframe'
import { WineColumn } from './WineColumn'

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
export class AnywayContents extends React.Component<IAnywayCotents, {}> {
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
            const columns = this.props.wines.map(
                (wine: IWine) =>
                <WineColumn key={ wine.barcode_number } wine={ wine } />
            )

            jsx = (
                <table>
                    <tbody>
                        <tr>{ columns }</tr>
                    </tbody>
                </table>
            )
        }

        return <div id="page-contents">{ jsx }</div>
    }
}
