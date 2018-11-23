/**
 * Renders login page
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { ILogin } from '../../interfaces/ILogin'
import LoginForm from '../contents/LoginForm'

/**
 * Callback function which is executed on submit
 */
const confirmUser = (login: ILogin) =>
    alert(`Email: ${login.email}, Pwd: ${login.password}`)

/**
 * LoginPage component
 */
const SFCComponent: React.SFC = () => (
    <div className="contents">
        <LoginForm onSubmit={confirmUser} />
    </div>
)

const LoginPage = React.memo(SFCComponent)
export default LoginPage
