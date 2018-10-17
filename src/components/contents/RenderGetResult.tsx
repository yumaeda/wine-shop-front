/**
 * Renders items retrieved from API call
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IAjaxGet } from '../IAjaxGet'

interface IRenderGetResult {
    url: string
    renderItems: (result: any) => any
}

/**
 * Component for rendering items, which are retrieved by API call
 */
export class RenderGetResult extends React.Component<IRenderGetResult, IAjaxGet> {
    /**
     * Constructor for IRenderGetResult
     */
    public constructor(props: IRenderGetResult) {
        super(props)
        this.state = {
            error: null,
            loaded: false,
            result: null
        }
    }

    /**
     * You should populate data with AJAX calls in the componentDidMount lifecycle method.
     * This is so you can use setState to update your component when the data is retrieved.
     */
    public componentDidMount() {
        fetch(this.props.url)
        .then((res) => res.json())
        .then(
            (result) => {
                this.setState({
                    loaded: true,
                    result
                })
            },

            (error) => {
                this.setState({
                    error,
                    loaded: true
                })
            }
        )
    }

    /**
     * Return JSX, which is rendered by renderItems render prop
     */
    public render(): React.ReactElement<IRenderGetResult> {
        const { error, loaded, result } = this.state

        if (error) {
            return <div>Error: { error.message }</div>
        }

        if (!loaded) {
            return <div>Loading...</div>
        }

        return this.props.renderItems(result)
    }
}
