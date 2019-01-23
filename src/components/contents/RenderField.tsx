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
interface IProps extends WrappedFieldProps {
    label: string
    placeholder: string
    type: string
}

/**
 * RenderField component
 */
const RenderField: React.FC<IProps> = props => {
    const { label, input, meta, placeholder, type } = props

    return (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={placeholder} type={type} />
                {meta.touched &&
                    ((meta.error && <span>{meta.error}</span>) ||
                        (meta.warning && <span>{meta.warning}</span>))}
            </div>
        </div>
    )
}

export default React.memo(RenderField)
