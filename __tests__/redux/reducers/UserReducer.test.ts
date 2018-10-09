import { UserReducer } from '../../../src/redux/reducers/UserReducer';
import IUser, { initUser } from '../../../src/redux/states/IUser';
import keys from '../../../src/redux/ActionTypeKeys';

/**
 * Pass an action with empty type with an ititial state
 */
test('Empty action type', () => {
    expect(UserReducer(initUser, { type: '', name: ''})).toEqual(initUser);
});

/**
 * Pass an action with CHANGE_USER_NAME type with an ititial state
 */
test('Change user name', () => {
    const name = 'Bill Gates';
    const action = {
        name, 
        type: keys.CHANGE_USER_NAME
    };

    expect(UserReducer(initUser, action)).toEqual({ name });
});
