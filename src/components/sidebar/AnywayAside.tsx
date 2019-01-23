/**
 * Renders <aside> element for Anyway
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import CountriesContainer from '../../containers/CountriesContainer'
import WineCategoryFilterLinks from './WineCategoryFilterLinks'
import { WinePriceFilterLinks } from './WinePriceFilterLinks'
import { WineVintageFilterLinks } from './WineVintageFilterLinks'

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
