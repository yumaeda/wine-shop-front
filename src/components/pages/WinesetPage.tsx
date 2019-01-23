/**
 * Renders wineset page
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import WinesetsContainer from '../../containers/WinesetsContainer'
import PageTemplate from './PageTemplate'

/**
 * WinesetPage component
 */
const WinesetPage: React.FC = () => (
    <PageTemplate>
        <div className="contents">
            <WinesetsContainer url="api/v1/winesets" />
        </div>
    </PageTemplate>
)

export default WinesetPage
