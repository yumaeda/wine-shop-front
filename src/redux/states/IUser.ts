/**
 * Interface for user state
 */
export default interface IUser {
    name: string;
}

/**
 * Default value for the user state
 */
export const initUser: IUser = {
    name: '',
};
