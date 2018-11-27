/**
 * Renders field with a warning or error message
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { WrappedFieldProps } from 'redux-form'

/**
 * Interface for RenderField component
 */
interface IRenderField extends WrappedFieldProps {
    label: string
    placeholder: string
    type: string
}

/**
 * RenderField component
 */
const RenderField = React.memo<IRenderField>(props => (
    <div>
        <label>{props.label}</label>
        <div>
            <input
                {...props.input}
                placeholder={props.placeholder}
                type={props.type}
            />
            {props.meta.touched &&
                ((props.meta.error && <span>{props.meta.error}</span>) ||
                    (props.meta.warning && <span>{props.meta.warning}</span>))}
        </div>
    </div>
))

export default RenderField
