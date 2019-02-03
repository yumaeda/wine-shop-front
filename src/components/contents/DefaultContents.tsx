/**
 * Renders default page contents for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import FeatureBannersContainer from 'containers/FeatureBannersContainer'
import ImportersContainer from 'containers/ImportersContainer'
import NewsContainer from 'containers/NewsContainer'
import NewWinesContainer from 'containers/NewWinesContainer'
import OtherDrinkBannersContainer from 'containers/OtherDrinkBannersContainer'
import RankingWinesContainer from 'containers/RankingWinesContainer'
import SaleBannersContainer from 'containers/SaleBannersContainer'
import * as React from 'react'

/**
 * DefaultContents component
 */
const DefaultContents: React.FC = () => (
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
            <FeatureBannersContainer url="api/v1/banners" />
        </div>
        <h2 className="container__title">セール</h2>
        <div className="banner">
            <SaleBannersContainer url="api/v1/banners" />
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
            <OtherDrinkBannersContainer url="api/v1/banners" />
        </div>
    </>
)

export default DefaultContents
