/**
 * Renders wineset table
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWineset } from '../../interfaces/IWineset'
import WinesetColumn from './WinesetColumn'

/**
 * Interface for rendering wineset table
 */
export interface IWinesetTable {
    onMount: () => void
    winesets: IWineset[]
}

/**
 * Wineset table component
 */
export default class WinesetTable extends React.Component<IWinesetTable> {
    /**
     * Return JSX to render
     */
    public render() {
        const { winesets } = this.props
        if (winesets.length <= 0) {
            return <span>Coming soon...</span>
        }

        const rows = this.convertToRows(winesets)
        const jsx = rows.map((row: IWineset[], index: number) => (
            <tr key={`wineset_row_${index}`}>
                {row.map((wineset: IWineset) => (
                    <WinesetColumn key={wineset.id} {...wineset} />
                ))}
            </tr>
        ))

        return (
            <table className="wineset__table">
                <tbody>{jsx}</tbody>
            </table>
        )
    }

    /**
     * Dispatch FETCH_START action
     */
    public componentDidMount() {
        this.props.onMount()
    }

    /**
     * Convert the specified array into array of rows.
     * Each row contains 3 columns at max.
     */
    private convertToRows = (winesets: IWineset[]): IWineset[][] => {
        if (winesets.length <= 3) {
            return [winesets]
        }

        const [first, second, third, ...rest] = winesets

        return [[first, second, third], ...this.convertToRows(rest)]
    }
}
