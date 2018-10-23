/**
 * Container for filtering wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as Redux from 'redux'
import { createCategoryFilterAction } from '../actions/FilterActionCreator'
import { FilterLink } from '../components/sidebar/FilterLink'

/**
 * Map dispatch to component.props
 */
const mapDispatchToProps = (dispatch: Redux.Dispatch<Redux.Action<any>>, props: any) => ({
    onFilterClick: () => dispatch(createCategoryFilterAction(props.category))
})

/**
 * Connect Redux state to the component
 */
export default withRouter(
    connect(null, mapDispatchToProps)(FilterLink)
)
