/**
 * Container for fetching all wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { connect } from 'react-redux'
import * as Redux from 'redux'
import keys from '../actions/ActionTypeKeys'
import { NewWineList } from '../components/contents/NewWineList'
import { IState } from '../states'

/**
 * Map Redux state to component.props
 */
const mapStateToProps = (state: IState, props: any) => {
    return state.newWines
}

/**
 * Map dispatch to component.props
 */
const mapDispatchToProps = (dispatch: Redux.Dispatch<Redux.Action<any>>, props: any) => ({
    onMount: () => dispatch({
        success: keys.FETCH_NEW_WINES_SUCCESS,
        type: keys.FETCH_START,
        url: props.url
    })
})

/**
 * Connect Redux state to the component
 */
export default connect(mapStateToProps, mapDispatchToProps)(NewWineList)
