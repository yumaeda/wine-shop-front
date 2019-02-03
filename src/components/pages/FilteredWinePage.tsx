/**
 * Page component for rendering filterd wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import PageTemplate from 'components/pages/PageTemplate'
import FilteredWinesContainer from 'containers/FilteredWinesContainer'
import * as React from 'react'

/**
 * FilteredWinePage component
 */
const FilteredWinePage: React.FC = () => (
    <PageTemplate>
        <div className="contents">
            <FilteredWinesContainer />
        </div>
    </PageTemplate>
)

export default FilteredWinePage
