/**
 * Container for fetching ranking wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { connect } from 'react-redux'
import * as Redux from 'redux'
import { ActionTypes, createFetchAction, IFetchAction } from '../actions'
import { RankingWineList } from '../components/contents/RankingWineList'
import { IRootState } from '../states'

/**
 * Map Redux state to component.props
 */
const mapStateToProps = (state: IRootState) => {
    return state.rankingWines
}

/**
 * Map dispatch to component.props
 */
const mapDispatchToProps = (dispatch: Redux.Dispatch<IFetchAction>, props: any) => (
    {
        onMount: () => dispatch(
            createFetchAction(ActionTypes.FETCH_RANKING_WINES_SUCCESS, props.url)
        )
    }
)

/**
 * Connect Redux state to the component
 */
export default connect(mapStateToProps, mapDispatchToProps)(RankingWineList)
