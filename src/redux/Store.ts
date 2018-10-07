import { combineReducers, createStore } from 'redux';
import { UserReducer } from './reducers/UserReducer';
import IUser from './states/IUser';

/**
 * Declare data type of the parent state
 */
export interface IState {
    user: IUser;
}

/**
 * Combined reducer
 */
const combinedReducer = combineReducers<IState>({
    user: UserReducer
});

/**
 * Create store object based on the combined reducer
 */
const store = createStore(combinedReducer);

// Enable importing as "import store from './Store'"
export default store;
