/**
 * Container for fetching all wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { connect } from 'react-redux'
import { createFetchWinesAction } from '../actions'
import { Root } from '../components/Root'

/**
 * Map dispatch to component.props
 */
const mapDispatchToProps = (dispatch: any, props: any) => ({
    onMount: () => dispatch(createFetchWinesAction())
})

/**
 * Connect Redux state to the component
 */
export default connect(null, mapDispatchToProps)(Root)
