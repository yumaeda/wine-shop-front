/**
 * Links for filtering wines by category
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import FilterLinkContainer from '../../containers/FilterLinkContainer'

const api = 'api/v1/wines'

/**
 * WineCategoryFilterLinks component
 */
export const WineCategoryFilterLinks: React.SFC = () => (
    <ul>
        <li className="sidebar__list-item">
            <FilterLinkContainer text="スパークリング・ワイン" url={ `${api}?type=Mousseux` } />
        </li>
        <li className="sidebar__list-item">
            <FilterLinkContainer text="シャンパーニュ" url={ `${api}?type=Champagne` } />
        </li>
        <li className="sidebar__list-item">
            <FilterLinkContainer text="白ワイン" url={ `${api}?type=Blanc` } />
        </li>
        <li className="sidebar__list-item">
            <FilterLinkContainer text="ロゼ" url={ `${api}?type=Rosé` } />
        </li>
        <li className="sidebar__list-item">
            <FilterLinkContainer text="赤ワイン" url={ `${api}?type=Rouge` } />
        </li>
        <li className="sidebar__list-item">
            <FilterLinkContainer text="デザートワイン" url={ `${api}?type=Doux` } />
        </li>
        <li className="sidebar__list-item">
            <FilterLinkContainer text="オー・ド・ヴィ" url={ `${api}?type=Eau de Vie` } />
        </li>
    </ul>
)
