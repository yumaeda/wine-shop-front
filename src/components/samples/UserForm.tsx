import * as React from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { createChangeUserNameAction } from '../../redux/actions/UserNameActionCreator';
import IUser from '../../redux/states/IUser';
import store, { IState } from '../../redux/Store';
import { TextBox } from './TextBox';

/**
 * UserForm component
 */
class UserForm extends React.Component<IUser, {}> {
    /**
     * Return JSX to render
     */
    public render() {
        return (
            <div>
                <p>
                    <TextBox
                        label="User Name"
                        type="text"
                        value={ this.props.name }
                        onTextChange={ this.onTextChange } />
                </p>
                <p>Name: { this.props.name }</p>
            </div>
        );
    }

    /**
     * Event handler for onchange event of the text box.
     */
    private onTextChange = (value: string) => {
        store.dispatch(createChangeUserNameAction(value));
    }
}

/**
 * Map Redux state to component.props
 */
const mapStateToProps = (state: IState) => {
    return state.user;
};

/**
 * Connect Redux state to the component
 */
export default connect(mapStateToProps)(UserForm);
