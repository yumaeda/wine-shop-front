/**
 * Page component for rendering filterd wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import FilteredWinesContainer from '../../containers/FilteredWinesContainer'
import PageTemplate from './PageTemplate'

/**
 * FilteredWinePage component
 */
const FilteredWinePage = React.memo(() => (
    <PageTemplate>
        <div className="contents">
            <FilteredWinesContainer />
        </div>
    </PageTemplate>
))

export default FilteredWinePage
