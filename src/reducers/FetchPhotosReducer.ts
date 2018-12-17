/**
 * Define a reducer for fetching photos
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Redux from 'redux'
import { ActionTypes } from '../actions'
import { IPhoto } from '../interfaces/IPhoto'

/**
 * Reducer for fetching photos
 */
const FetchPhotosReducer: Redux.Reducer<IPhoto[]> = (
    state = [],
    action: Redux.AnyAction
) => {
    switch (action.type) {
        case ActionTypes.FETCH_PHOTOS_SUCCESS:
            return action.items
        case ActionTypes.FETCH_FAILURE:
        default:
            return state
    }
}

export default FetchPhotosReducer
