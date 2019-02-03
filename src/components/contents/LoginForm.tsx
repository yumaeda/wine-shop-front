/**
 * Renders login form
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import RenderField from 'components/contents/RenderField'
import * as React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { ILogin } from 'states/ILogin'
import { email, required } from '../../validators'

/**
 * LoginForm component
 */
class LoginForm extends React.Component<InjectedFormProps<ILogin>> {
    /**
     * Return JSX to render
     */
    public render() {
        const { handleSubmit, pristine, reset, submitting } = this.props

        return (
            <form onSubmit={handleSubmit}>
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
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button
                        type="button"
                        disabled={pristine || submitting}
                        onClick={reset}
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
