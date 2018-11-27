/**
 * Validators for form fields
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

/**
 * Validates whether the value is specified or not
 */
export const required = (value: string | number) =>
    value || typeof value === 'number' ? undefined : 'Required'

/**
 * Validates whether the specified value is an email address
 */
export const email = (value: string) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(value)
        ? 'Invalid email address'
        : undefined
