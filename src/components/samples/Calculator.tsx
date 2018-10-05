import * as React from 'react';
import { BoilingVerdict } from './BoilingVerdict';
import { TemperatureInput } from './TemperatureInput';

/**
 * Calculator component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class Calculator extends React.Component<{}, { temperature: string, scale: string}> {
    /**
     * Calculator component
     */
    public constructor(props: any) {
        super(props);
        this.state = { temperature: '', scale: 'c' };
    }

    /**
     * Return JSX to render
     */
    public render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = (scale === 'f') ?
            this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = (scale === 'c') ?
            this.tryConvert(temperature, this.toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={ celsius }
                    onChange={ this.onCelsiusChange } />

                <TemperatureInput
                    scale="f"
                    temperature={ fahrenheit }
                    onChange={ this.onFahrenheitChange } />

                <BoilingVerdict celsius={ parseFloat(celsius) } />
            </div>
        );
    }

    /**
     * Event handler for onchange event for celsius
     */
    private onFahrenheitChange = (temperature: string): void => {
        this.setState({ scale: 'f', temperature });
    }

    /**
     * Event handler for onchange event for celsius
     */
    private onCelsiusChange = (temperature: string): void => {
        this.setState({ scale: 'c', temperature });
    }

    /**
     * Convert fahrenheit into celsius
     *
     * @param number: fahrenheit
     * @return decimal Celsius value of the specified fahrenheit value
     */
    private toCelsius = (fahrenheit: number): number => {
        return (fahrenheit - 32) * 5 / 9;
    }

    /**
     * Convert celsius into fahrenheit
     *
     * @param number: celsius
     * @return decimal Fahrenheit value of the specified celsius value
     */
    private toFahrenheit = (celsius: number): number => {
        return (celsius * 9 / 5) + 32;
    }

    /**
     * Convert celsius into fahrenheit
     *
     * @param number: celsius
     * @param (n: number) => float Callback function for conversion
     * @return string Converted value rounded to the third decimal place:
     */
    private tryConvert(temperature: string, convert: any): string {
        const input = parseFloat(temperature);
        if (isNaN(input)) {
            return '';
        }

        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;

        return rounded.toString();
    }
}
