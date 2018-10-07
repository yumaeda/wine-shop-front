import * as React from 'react';

/**
 * Define props, which is passed by parent component
 */
interface IProps {
    label: string;
    type: 'text' | `password`;
    value: string;
    onTextChange: (value: string) => void;
}

/**
 * TextBox component
 */
export class TextBox extends React.Component<IProps, {}> {
    /**
     * Return JSX to render
     */
    public render() {
        const label = this.props.label ?
            <label>{ this.props.label }</label> :
            null;

        return (
            <span>
                { label }
                <input
                    name="username"
                    type={ this.props.type }
                    value={ this.props.value }
                    onChange={ this.onTextChange } />
            </span>
        );
    }

    /**
     * Event handler for onchange event of the text box.
     *
     * When the text is changed, store.dispatch pass an action to the reducer.
     * As a result, state is updated.
     *
     * After the state is updated, props of the component is updated and re-rendered.
     */
    private onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onTextChange(e.target.value);
    }
}
