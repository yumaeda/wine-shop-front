/**
 * Renders importer table
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IImporter } from '../../interfaces/IImporter'
import ImporterColumn from './ImporterColumn'

/**
 * Interface for rendering importer table
 */
export interface IImporterTable {
    onMount: () => void
    url: string
    importers: IImporter[]
}

/**
 * Importer table component
 */
export default class ImporterTable extends React.Component<IImporterTable> {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<ImporterTable> {
        const rows = this.convertToRows(this.props.importers)
        const jsx = (
            rows.map(
                (row: IImporter[], index: number) => (
                    <tr key={ `importer_row_${index}`}>
                        {
                            row.map(
                                (importer: IImporter) =>
                                <ImporterColumn
                                    key={ importer.name }
                                    name={ importer.name }
                                    url={ importer.url }
                                    dir={ importer.dir }
                                    filename={ importer.filename }
                                />
                            )
                        }
                    </tr>
                )
            )
        )

        return (
            <table className="importer__table">
                <tbody>{ jsx }</tbody>
            </table>
        )
    }

    /**
     * Dispatch FETCH_START action
     */
    public componentDidMount() {
        this.props.onMount();
    }

    /**
     * Convert the specified array into array of rows.
     * Each row contains 4 columns at max.
     */
    private convertToRows = (importers: IImporter[]): IImporter[][] => {
        if (importers.length <= 5) {
            return [ importers ]
        }

        const [ first, second, third, forth, fifth, ...rest] = importers

        return [[ first, second, third, forth, fifth ], ...this.convertToRows(rest)]
    }
}
