import { ADD_ARTICLE } from '../ActionTypes';

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
        case ADD_ARTICLE:
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
