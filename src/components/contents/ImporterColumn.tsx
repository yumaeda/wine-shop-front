/**
 * Renders importer table column
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { IUserContext, UserContext } from 'context/UserContext'
import * as React from 'react'
import { IImporter } from 'states/IImporter'

/**
 * Importer table column component
 */
export default class ImporterColumn extends React.Component<IImporter> {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<ImporterColumn> {
        const { dir, filename, name, url } = this.props

        return (
            <td className="importer__column">
                <a href={url} title={name}>
                    <UserContext.Consumer>
                        {(ctx: IUserContext) => (
                            <img
                                className="importer__image"
                                src={`${ctx.siteUrl}/${dir}${filename}`}
                            />
                        )}
                    </UserContext.Consumer>
                </a>
            </td>
        )
    }
}
