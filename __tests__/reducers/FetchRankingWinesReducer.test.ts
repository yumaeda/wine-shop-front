import FetchRankingWinesReducer from '../../src/reducers/FetchRankingWinesReducer';
import { IWines, initWines } from '../../src/states';
import { ActionTypes } from '../../src/actions';

/**
 * Pass an action with empty type with an ititial state
 */
test('Empty action type', () => {
    const action = {
        wines: [],
        type: ''
    }

    expect(FetchRankingWinesReducer(initWines, action)).toEqual(initWines);
});

/**
 * Pass an action with FETCH_NEW_WINES_SUCCESS type with an ititial state
 */
test('Succeeded fetching new wines', () => {
    const wines = [
        { barcode_number: '1111' },
        { barcode_number: '1112' },
        { barcode_number: '1113' }
    ]

    const action = {
        type: ActionTypes.FETCH_RANKING_WINES_SUCCESS,
        wines
    };

    expect(FetchRankingWinesReducer(initWines, action)).toEqual({ wines });
});
