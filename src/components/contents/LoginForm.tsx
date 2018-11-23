/**
 * Renders login form
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { ILogin } from '../../interfaces/ILogin'

/**
 * LoginForm component
 */
class LoginForm extends React.Component<InjectedFormProps<ILogin>> {
    /**
     * Return JSX to render
     */
    public render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <label>Eメール</label>
                    <Field
                        name="email"
                        component="input"
                        type="text"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <label>パスワード</label>
                    <Field
                        name="password"
                        component="input"
                        type="text"
                        placeholder="Password"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        disabled={this.props.pristine || this.props.submitting}
                        onClick={this.props.reset}
                    >
                        Clear Values
                    </button>
                </div>
            </form>
        )
    }
}

export default reduxForm<ILogin>({
    form: 'loginForm'
})(LoginForm)
