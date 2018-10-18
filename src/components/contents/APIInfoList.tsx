/**
 * List of wines retrieved from API call
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import * as DateTimeUtility from '../../lib/DateTimeUtility'
import { RenderGetResult } from './RenderGetResult'

interface IInfo {
    date: number
    description: string
    month: number
    year: number
}

/**
 * Component for rendering a info list, which is retrieved by API call
 */
export class APIInfoList extends React.Component<{ url: string }, {}> {
    /**
     * Return info list JSX to render
     */
    public render(): React.ReactElement<APIInfoList> {
        return (
            <RenderGetResult
                url={ this.props.url }
                renderItems={ this.renderInfo }
            />
        )
    }

    /**
     * Event handler for onclick event of the link
     */
    private renderInfo = (result: any) => {
        const infoRows = result.infos.map(
            (info: IInfo) => (
                <tr>
                    <td className={ this.getDateClassName(info) }>
                        { this.getDateText(info) }
                    </td>
                    <td dangerouslySetInnerHTML={{ __html: info.description }} />
                </tr>
            )
        )

        return (
            <table>
                <tbody>{ infoRows }</tbody>
            </table>
        )
    }

    /**
     * Get class name for the date column
     */
    private getDateClassName = ({ year, month, date }: IInfo): string => {
        const weeks = DateTimeUtility.getWeekNames()
        const dayOfWeek =
            DateTimeUtility.getDayOfWeek(year, month, date)

        const isSunday = (dayOfWeek === weeks[0])
        const isSaturday = (dayOfWeek === weeks[6])

        return isSunday ?
            'sunday-color' :
            (isSaturday ? 'saturday-color' : '')
    }

    /**
     * Get date text
     */
    private getDateText = ({ year, month, date }: IInfo): string => {
        const tokens = [
            year,
            DateTimeUtility.prependZeros(month, 2),
            DateTimeUtility.prependZeros(date, 2)
        ]

        return tokens.join('.')
    }
}
