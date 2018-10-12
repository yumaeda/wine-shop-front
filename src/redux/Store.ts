/**
 * Store used by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { combineReducers, createStore } from 'redux';
import { WineListReducer } from './reducers/WineListReducer';
import { IFilteredWines } from './states/IFilteredWines';

/**
 * Declare data type of the parent state
 */
export interface IState {
    filteredWines: IFilteredWines;
}

/**
 * Combined reducer
 */
const combinedReducer = combineReducers<IState>({
    filteredWines: WineListReducer
});

/**
 * Create store object based on the combined reducer
 */
const store = createStore(combinedReducer);

export default store;
