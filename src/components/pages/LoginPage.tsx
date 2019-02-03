/**
 * Renders login page
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import LoginForm from 'components/contents/LoginForm'
import * as React from 'react'
import { ILogin } from 'states/ILogin'

/**
 * Callback function which is executed on submit
 */
const confirmUser = (login: ILogin) =>
    alert(`Email: ${login.email}, Pwd: ${login.password}`)

/**
 * LoginPage component
 */
const LoginPage: React.FC = () => (
    <div className="contents">
        <LoginForm onSubmit={confirmUser} />
    </div>
)

export default LoginPage
