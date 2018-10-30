/**
 * Renders default page contents for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import ImportersContainer from '../../containers/ImportersContainer'
import NewWinesContainer from '../../containers/NewWinesContainer'
import RankingWinesContainer from '../../containers/RankingWinesContainer'
import { APIInfoList } from './APIInfoList'

/**
 * DefaultContents component
 */
export const DefaultContents: React.SFC = () => (
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
        <h2 className="container__title">輸入元</h2>
        <div className="importer">
            <ImportersContainer url="api/v1/importers" />
        </div>
    </>
)
