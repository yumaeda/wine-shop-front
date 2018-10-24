/**
 * Container for fetching all wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { connect } from 'react-redux'
import * as Redux from 'redux'
import keys from '../actions/ActionTypeKeys'
import { Root } from '../components/Root'

/**
 * Map dispatch to component.props
 */
const mapDispatchToProps = (dispatch: Redux.Dispatch<Redux.Action<any>>, props: any) => ({
    onMount: () => dispatch({ type: keys.FETCH_START, url: props.url })
})

/**
 * Connect Redux state to the component
 */
export default connect(null, mapDispatchToProps)(Root)
