import * as Clone from 'clone';
import * as Redux from 'redux';
import { IChangeUserNameAction } from '../actions/UserNameActionCreator';
import keys from '../ActionTypeKeys';
import IUser, { initUser } from '../states/IUser';

/**
 * Reducer for user name change
 *
 * @return Redux.Reducer<IUser>;
 */
export const UserReducer: Redux.Reducer<IUser> = (state = initUser, action) => {
    let newState: IUser = state;
    switch (action.type) {
        case keys.CHANGE_USER_NAME:
            newState = Clone(state);
            newState.name = (action as IChangeUserNameAction).name;
            break;
        default:
            break;
    }

    return newState;
};
