/**
 * Renders List of news
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import * as DateTimeUtility from '../../lib/DateTimeUtility'
import { INews } from '../../states/NewsState'

/**
 * Interface for rendering news
 */
export interface INewsList {
    onMount: () => void
    url: string
    news: INews[]
}

/**
 * Component for rendering a info list, which is retrieved by API call
 */
export class NewsList extends React.Component<INewsList> {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<NewsList> {
        const newsRows = this.props.news.map(
            (info: INews, index: number) => (
                <tr key={ index }>
                    <td className={ `new-info__column ${this.getDateClassName(info)}` }>
                        { this.getDateText(info) }
                    </td>
                    <td
                        className="new-info__column"
                        dangerouslySetInnerHTML={
                            { __html: info.description }
                        } />
                </tr>
            )
        )

        return <table><tbody>{ newsRows }</tbody></table>
    }

    /**
     * Dispatch FETCH_START action
     */
    public componentDidMount() {
        this.props.onMount();
    }

    /**
     * Get class name for the date column
     */
    private getDateClassName = ({ year, month, date }: INews): string => {
        const weeks = DateTimeUtility.getWeekNames()
        const dayOfWeek =
            DateTimeUtility.getDayOfWeek(year, month, date)

        const isSunday = (dayOfWeek === weeks[0])
        const isSaturday = (dayOfWeek === weeks[6])

        return isSunday ?
            'new-info--sunday' :
            (isSaturday ? 'new-info--saturday' : '')
    }

    /**
     * Get date text
     */
    private getDateText = ({ year, month, date }: INews): string => {
        const tokens = [
            year,
            DateTimeUtility.prependZeros(month, 2),
            DateTimeUtility.prependZeros(date, 2)
        ]

        return tokens.join('.')
    }
}
