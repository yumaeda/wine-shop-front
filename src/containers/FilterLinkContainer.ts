/**
 * Container for link, which filte wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { connect } from 'react-redux'
import * as Redux from 'redux'
import { ActionTypes, createFetchAction, IFetchAction } from '../actions'
import { FilterLink } from '../components/sidebar/FilterLink'

/**
 * Map dispatch to Component.props
 */
const mapDispatchToProps = (
    dispatch: Redux.Dispatch<IFetchAction>,
    props: any
) => ({
    onFilterClick: () =>
        dispatch(createFetchAction(ActionTypes.FETCH_SUCCESS, props.url))
})

/**
 * Connect Redux state to the component
 */
export default connect(
    null,
    mapDispatchToProps
)(FilterLink)
