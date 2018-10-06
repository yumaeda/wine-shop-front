import { ADD_ARTICLE } from '../ActionTypes';

/**
 * Action to add an article
 */
export const addArticle =
    (article: { payload: any, type: string }) => ({
        payload: article,
        type: ADD_ARTICLE
    });
