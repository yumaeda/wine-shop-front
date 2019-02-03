/**
 * Container for fetching all news
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { ActionTypes, createFetchAction, IFetchAction } from 'actions'
import { NewsList } from 'components/contents/NewsList'
import { connect } from 'react-redux'
import * as Redux from 'redux'
import { IRootState } from 'states'

/**
 * Map Redux state to component.props
 */
const mapStateToProps = (state: IRootState) => {
    return { news: state.news }
}

/**
 * Map dispatch to component.props
 */
const mapDispatchToProps = (
    dispatch: Redux.Dispatch<IFetchAction>,
    props: any
) => ({
    onMount: () =>
        dispatch(createFetchAction(ActionTypes.FETCH_NEWS_SUCCESS, props.url))
})

/**
 * Connect Redux state to the component
 */
const NewsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsList)

export default NewsContainer
