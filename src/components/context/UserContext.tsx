import * as React from 'react';

/**
 * Interface for the user context
 */
export interface IUserContext {
    code: string;
    imgDir: string;
    siteUrl: string;
}

/**
 * UserContext component
 */
export const UserContext = React.createContext({
    code: 'ja',
    imgDir: 'http://localhost:8080/images',
    siteUrl: 'http://localhost:8080'
});
