/**
 * Renders default page contents for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import NewWinesContainer from '../../containers/NewWinesContainer'
import RankingWinesContainer from '../../containers/RankingWinesContainer'
import { APIInfoList } from './APIInfoList'

/**
 * DefaultContents component
 */
export class DefaultContents extends React.Component {
    /**
     * Return default contents JSX to render
     */
    public render(): React.ReactElement<DefaultContents> {
        return (
            <>
                <h2 className="container__title">新着情報</h2>
                <div className="new-info">
                    <APIInfoList url="api/v1/new-infos" />
                </div>
                <h2 className="container__title">入荷ワイン</h2>
                <div className="new-arrival">
                    <NewWinesContainer url="api/v1/new-wines" />
                </div>
                <h2 className="container__title">ランキング</h2>
                <div className="ranking">
                    <RankingWinesContainer url="api/v1/ranking-wines" />
                </div>
            </>
        )
    }
}
