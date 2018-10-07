import keys from '../ActionTypeKeys';

/**
 * Initial state
 */
const initialState: { articles: any[] } = {
    articles: []
};

/**
 * Root reducer for Redux
 */
const rootReducer = (state = initialState, action: { payload: any, type: string }) => {
    switch (action.type) {
        case keys.ADD_ARTICLE:
            return {
                ...state,
                articles: [
                    ...state.articles,
                    action.payload
                ]
            };
        default:
            return state;
    }
};

export default rootReducer;
