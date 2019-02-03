/**
 * Container for fetching banners
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { ActionTypes, createFetchAction, IFetchAction } from 'actions'
import { BannerTable } from 'components/contents/BannerTable'
import { connect } from 'react-redux'
import * as Redux from 'redux'
import { IRootState } from 'states'

/**
 * Map Redux state to component.props
 */
const mapStateToProps = (state: IRootState) => {
    return {
        banners: state.banners.otherDrinkBanners
    }
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
            createFetchAction(
                ActionTypes.FETCH_OTHER_DRINK_BANNERS_SUCCESS,
                `${props.url}?category=Other Drinks`
            )
        )
})

/**
 * Connect Redux state to the component
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BannerTable)
