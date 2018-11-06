/**
 * Container for filtering wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Page } from '../components/Page'
import { IRootState } from '../states'

/**
 * Map Redux state to component.props
 */
const mapStateToProps = (state: IRootState, props: RouteComponentProps<{ page: string }>) => {
    return state.filteredWines
}

/**
 * Connect Redux state to the component
 */
const FilteredWinesContainer =
    withRouter(connect(mapStateToProps)(Page))

export default FilteredWinesContainer
