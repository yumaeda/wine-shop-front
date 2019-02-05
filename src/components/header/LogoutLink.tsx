/**
 * Renders logout link
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import LocalStorage from 'lib/LocalStorage'
import * as React from 'react'

/**
 * LogoutLink component
 */
class LogoutLink extends React.Component {
    /**
     * Return JSX to render
     */
    public render() {
        return (
            <a href="#" className="header__command" onClick={this.handleClick}>
                ログアウト
            </a>
        )
    }

    /**
     * Click event handler
     */
    private handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        LocalStorage.set('isLogined', false)
        window.location.reload()
    }
}

export default LogoutLink
