/**
 * Store used by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { createStore } from 'redux';
import rootReducer from './reducers';

/**
 * Create store object based on the combined reducer
 */
const store = createStore(rootReducer);

export default store;
