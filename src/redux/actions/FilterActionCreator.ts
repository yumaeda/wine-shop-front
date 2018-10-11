import * as Redux from 'redux';
import keys from './ActionTypeKeys';
import { ICategoryFilterAction, WineCategory } from './FilterActions';

/**
 * Create an action for filtering wines with the specified category
 *
 * @param WineCategory Category of wine
 * @returns Redux.ActionCreator<ICategoryFilterAction> Action for changing user name
 */
export const createCategoryFilterAction: Redux.ActionCreator<ICategoryFilterAction> =
    (category: WineCategory) => {
        return {
            category,
            type: keys.CATEGORY_FILTER
        };
    };
