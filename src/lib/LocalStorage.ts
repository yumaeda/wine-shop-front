import * as moment from 'moment'

/**
 * Interface for local storage
 */
interface ILocalStorage {
    expiry: moment.Moment
    value: any
}

/**
 * Local storage class with expiration
 */
export default class LocalStorage {
    /**
     * Set the specified value to the key with expiration days.
     *
     * Exception may be thrown if the storage is full.
     */
    public static set(key: string, value: any, expiresIn: number = 7) {
        const expireAt = { expiry: moment().add(expiresIn, 'days') }
        const newValue =
            value instanceof Object
                ? { value: { ...value }, ...expireAt }
                : { value, ...expireAt }

        localStorage.setItem(key, JSON.stringify(newValue))
    }

    /**
     * Get the value for the specified key
     */
    public static get(key: string) {
        const value = localStorage.getItem(key)
        if (value) {
            const json: ILocalStorage = JSON.parse(value)
            if (moment(json.expiry).isAfter(moment())) {
                return json.value
            } else {
                localStorage.removeItem(key)
            }
        }

        return null
    }
}
