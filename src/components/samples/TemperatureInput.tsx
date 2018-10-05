import * as React from 'react';

const scaleNames: { [ key: string]: string } = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

/**
 * Interface for Iframe
 */
interface ITemperature {
    scale: string;
    temperature: string;
    onChange: any;
}

/**
 * TemperatureInput component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class TemperatureInput extends React.Component<ITemperature, {}> {

    /**
     * Return JSX to render
     */
    public render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temperature in { scaleNames[scale] }:</legend>
                <input value={ temperature } onChange={ this.handleChange } />
            </fieldset>
        );
    }

    /**
     * Event handler for onchange event for temperature input
     */
    private handleChange = (e: any): void => {
        this.props.onChange(e.target.value);
    }
}
