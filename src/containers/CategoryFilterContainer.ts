/**
 * Container for filtering wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as Redux from 'redux'
import keys from '../actions/ActionTypeKeys'
import { FilterLink } from '../components/sidebar/FilterLink'

/**
 * Map dispatch to component.props
 */
const mapDispatchToProps = (dispatch: Redux.Dispatch<Redux.Action<any>>, props: any) => ({
    onFilterClick: () => dispatch({
        success: keys.FETCH_SUCCESS,
        type: keys.FETCH_START,
        url: props.url
    })
})

/**
 * Connect Redux state to the component
 */
export default withRouter(
    connect(null, mapDispatchToProps)(FilterLink)
)
