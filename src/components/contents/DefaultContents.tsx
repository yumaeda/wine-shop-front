/**
 * Renders default page contents for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import BannersContainer from '../../containers/BannersContainer'
import ImportersContainer from '../../containers/ImportersContainer'
import NewsContainer from '../../containers/NewsContainer'
import NewWinesContainer from '../../containers/NewWinesContainer'
import RankingWinesContainer from '../../containers/RankingWinesContainer'

/**
 * DefaultContents component
 */
export const DefaultContents: React.SFC = () => (
    <>
        <h2 className="container__title">新着情報</h2>
        <div className="new-info">
            <NewsContainer url="api/v1/new-infos" />
        </div>
        <h2 className="container__title">入荷ワイン</h2>
        <div className="new-arrival">
            <NewWinesContainer url="api/v1/new-wines" />
        </div>
        <h2 className="container__title">特集</h2>
        <div className="banner">
            <BannersContainer url="api/v1/banners?category=Features" />
        </div>
        <h2 className="container__title">セール</h2>
        <div className="banner">
            <BannersContainer url="api/v1/banners?category=Sales" />
        </div>
        <h2 className="container__title">ランキング</h2>
        <div className="ranking">
            <RankingWinesContainer url="api/v1/ranking-wines" />
        </div>
        <h2 className="container__title">輸入元</h2>
        <div className="importer">
            <ImportersContainer url="api/v1/importers" />
        </div>
        <h2 className="container__title">その他のドリンク</h2>
        <div className="banner">
            <BannersContainer url="api/v1/banners?category=Other Drinks" />
        </div>
    </>
)
