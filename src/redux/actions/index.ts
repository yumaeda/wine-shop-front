import keys from '../ActionTypeKeys';

/**
 * Action to add an article
 */
export const addArticle =
    (article: { payload: any, type: string }) => ({
        payload: article,
        type: keys.ADD_ARTICLE
    });
