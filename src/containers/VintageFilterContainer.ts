/**
 * Container for filtering wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { createVintageFilterAction } from '../actions/FilterActionCreator';
import { FilterLink } from '../components/sidebar/FilterLink';
import { IState } from '../reducers';

/**
 * Map Redux state to component.props
 */
const mapStateToProps = (state: IState, props: RouteComponentProps<{}>) => {
    return state.filteredWines;
};

/**
 * Map dispatch to component.props
 */
const mapDispatchToProps = (dispatch: any, props: any) => ({
    onFilterClick: () => dispatch(createVintageFilterAction(props.vintage))
});

/**
 * Connect Redux state to the component
 */
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(FilterLink));
