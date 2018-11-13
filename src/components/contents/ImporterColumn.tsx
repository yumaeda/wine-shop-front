/**
 * Renders importer table column
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { UserContext } from '../../context/UserContext'
import { IImporter } from '../../interfaces/IImporter'

/**
 * Importer table column component
 */
export default class ImporterColumn extends React.Component<IImporter> {
    /**
     * Set the current context
     */
    public static contextType = UserContext

    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<ImporterColumn> {
        return (
            <td className="importer__column">
                <a href={ this.props.url } title={ this.props.name }>
                    <img
                        className="importer__image"
                        src={ `${this.context.siteUrl}/${this.props.dir}${this.props.filename}` }
                    />
                </a>
            </td>
        )
    }
}
