import * as React from 'react'

/**
 * Interface for the stack trace
 */
interface IErrorInfo {
    componentStack: string
}

/**
 * State interface for ErrorBoundary
 */
interface IState {
    error: any
    hasError: boolean
    info: IErrorInfo
}

/**
 * Catch errors during rendering, in lifecycle methods,
 * and in constructors of the child components.
 */
class ErrorBoundary extends React.Component<{}, IState> {
    /**
     * Initialize state
     *
     * @type {{error: null; info: {componentStack: string}; hasError: boolean}}
     */
    public state = {
        error: null,
        hasError: false,
        info: { componentStack: '' }
    }

    /**
     * Set error info to the state when a error is caught
     *
     * @param {Error} error
     * @param {React.ErrorInfo} info
     */
    public componentDidCatch(error: Error, info: IErrorInfo) {
        this.setState({
            error,
            hasError: true,
            info
        })
    }

    /**
     * Render child components or error message
     *
     * @returns {any}
     */
    public render() {
        if (!this.state.hasError) {
            return this.props.children
        }

        const { error, info } = this.state
        return (
            <div>
                <h2>!! Error is thrown !!</h2>
                <details>
                    {error}
                    <br />
                    {info.componentStack}
                </details>
            </div>
        )
    }
}

export default ErrorBoundary
