/**
 * Container for fetching importers
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { ActionTypes, createFetchAction, IFetchAction } from 'actions'
import ImporterTable from 'components/contents/ImporterTable'
import { connect } from 'react-redux'
import * as Redux from 'redux'
import { IRootState } from 'states'

/**
 * Map Redux state to component.props
 */
const mapStateToProps = (state: IRootState) => {
    return { importers: state.importers }
}

/**
 * Map dispatch to component.props
 */
const mapDispatchToProps = (
    dispatch: Redux.Dispatch<IFetchAction>,
    props: any
) => ({
    onMount: () =>
        dispatch(
            createFetchAction(ActionTypes.FETCH_IMPORTERS_SUCCESS, props.url)
        )
})

/**
 * Connect Redux state to the component
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImporterTable)
