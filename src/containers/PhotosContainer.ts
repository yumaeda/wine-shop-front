/**
 * Container for fetching photos
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { connect } from 'react-redux'
import * as Redux from 'redux'
import { ActionTypes, createFetchAction, IFetchAction } from '../actions'
import PhotoTable from '../components/contents/PhotoTable'
import { IRootState } from '../states'

/**
 * Map Redux state to component.props
 */
const mapStateToProps = (state: IRootState) => {
    return { photos: state.photos }
}

/**
 * Map dispatch to component.props
 */
const mapDispatchToProps = (
    dispatch: Redux.Dispatch<IFetchAction>,
    props: any
) => ({
    onMount: () =>
        dispatch(createFetchAction(ActionTypes.FETCH_PHOTOS_SUCCESS, props.url))
})

/**
 * Connect Redux state to the component
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoTable)
