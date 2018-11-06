/**
 * Define a root reducer for Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { combineReducers } from 'redux'
import { IRootState } from '../states'
import FetchCountriesReducer from './FetchCountriesReducer'
import FetchImportersReducer from './FetchImportersReducer'
import FetchNewsReducer from './FetchNewsReducer'
import FetchNewWinesReducer from './FetchNewWinesReducer'
import FetchRankingWinesReducer from './FetchRankingWinesReducer'
import FilterWinesReducer from './FilterWinesReducer'

/**
 * Root reducer
 */
const rootReducer = combineReducers<IRootState>({
    countries: FetchCountriesReducer,
    filteredWines: FilterWinesReducer,
    importers: FetchImportersReducer,
    newWines: FetchNewWinesReducer,
    news: FetchNewsReducer,
    rankingWines: FetchRankingWinesReducer
})

export default rootReducer
