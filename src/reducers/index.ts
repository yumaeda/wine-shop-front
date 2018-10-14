/**
 * Root reducer used by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { combineReducers } from 'redux';
import { IFilteredWines } from '../states/IFilteredWines';
import { WineListReducer } from './WineListReducer';

/**
 * Declare data type of the parent state
 */
export interface IState {
    filteredWines: IFilteredWines;
}

/**
 * Root reducer
 */
const rootReducer = combineReducers<IState>({
    filteredWines: WineListReducer
});

export default rootReducer;
