/**
 * Renders <aside> element for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import WineCategoryFilterLinks from 'components/sidebar/WineCategoryFilterLinks'
import { WinePriceFilterLinks } from 'components/sidebar/WinePriceFilterLinks'
import { WineVintageFilterLinks } from 'components/sidebar/WineVintageFilterLinks'
import CountriesContainer from 'containers/CountriesContainer'
import * as React from 'react'

/**
 * AnywayAside component
 */
const AnywayAside: React.FC = () => (
    <aside className="sidebar">
        <h2 className="sidebar__title">産地</h2>
        <CountriesContainer url="api/v1/countries" />
        <hr className="sidebar__separator" />
        <h2 className="sidebar__title">価格</h2>
        <WinePriceFilterLinks />
        <hr className="sidebar__separator" />
        <h2 className="sidebar__title">種類</h2>
        <WineCategoryFilterLinks />
        <hr className="sidebar__separator" />
        <h2 className="sidebar__title">年代</h2>
        <WineVintageFilterLinks />
    </aside>
)

export default AnywayAside
