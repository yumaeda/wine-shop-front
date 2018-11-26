/**
 * Renders login form
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { ILogin } from '../../interfaces/ILogin'
import { email, required } from '../../validators'
import RenderField from './RenderField'

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
                    <Field
                        label="Eメール"
                        name="email"
                        component={RenderField}
                        type="text"
                        placeholder="Email"
                        validate={[email, required]}
                    />
                </div>
                <div>
                    <Field
                        label="パスワード"
                        name="password"
                        component={RenderField}
                        type="text"
                        placeholder="Password"
                        validate={[required]}
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
