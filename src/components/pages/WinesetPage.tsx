/**
 * Renders wineset page
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import PageTemplate from 'components/pages/PageTemplate'
import WinesetsContainer from 'containers/WinesetsContainer'
import * as React from 'react'

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
