import * as React from 'react';
import * as Redux from 'redux';
import keys from './ActionTypeKeys';

/**
 * Action interface for changing user name
 */
export interface IChangeUserNameAction extends Redux.Action {
    name: string;
}

/**
 * Create action for changing user name
 *
 * @param string New user name
 * @returns Redux.ActionCreator<IChangeUserNameAction> Action for changing user name
 */
export const createChangeUserNameAction: Redux.ActionCreator<IChangeUserNameAction> = (name: string) => {
    return {
        name,
        type: keys.CHANGE_USER_NAME
    };
};
