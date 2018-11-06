/**
 * Container for fetching all countries
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { connect } from 'react-redux'
import * as Redux from 'redux'
import { ActionTypes, createFetchAction, IFetchAction } from '../actions'
import { WineCountryFilterLinks } from '../components/sidebar/WineCountryFilterLinks'
import { IRootState } from '../states'

/**
 * Map Redux state to component.props
 */
const mapStateToProps = (state: IRootState) => {
    return state.countries
}

/**
 * Map dispatch to component.props
 */
const mapDispatchToProps = (dispatch: Redux.Dispatch<IFetchAction>, props: any) => (
    {
        onMount: () => dispatch(
            createFetchAction(ActionTypes.FETCH_COUNTRIES_SUCCESS, props.url)
        )
    }
)

/**
 * Connect Redux state to the component
 */
const CountriesContainer = connect(mapStateToProps, mapDispatchToProps)(WineCountryFilterLinks)

export default CountriesContainer
