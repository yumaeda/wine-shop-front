/**
 * Container for filtering wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import AnywayContents from '../components/contents/AnywayContents'
import { IRootState } from '../states'

/**
 * Map Redux state to component.props
 *
 */
const mapStateToProps = (
    state: IRootState,
    // @ts-ignore:6133
    props: RouteComponentProps<{}>
) => {
    return state.filteredWines
}

/**
 * Connect Redux state to the component
 */
const FilteredWinesContainer = withRouter(
    connect(mapStateToProps)(AnywayContents)
)

export default FilteredWinesContainer
