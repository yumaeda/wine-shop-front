/**
 * Define a root reducer for Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import FetchBannersReducer from 'reducers/FetchBannersReducer'
import FetchCountriesReducer from 'reducers/FetchCountriesReducer'
import FetchImportersReducer from 'reducers/FetchImportersReducer'
import FetchNewsReducer from 'reducers/FetchNewsReducer'
import FetchNewWinesReducer from 'reducers/FetchNewWinesReducer'
import FetchPhotosReducer from 'reducers/FetchPhotosReducer'
import FetchRankingWinesReducer from 'reducers/FetchRankingWinesReducer'
import FetchWinesetsReducer from 'reducers/FetchWinesetsReducer'
import FilterWinesReducer from 'reducers/FilterWinesReducer'
import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import { IRootState } from 'states'

/**
 * Root reducer
 */
const rootReducer = combineReducers<IRootState>({
    banners: FetchBannersReducer,
    countries: FetchCountriesReducer,
    filteredWines: FilterWinesReducer,
    form: FormReducer,
    importers: FetchImportersReducer,
    newWines: FetchNewWinesReducer,
    news: FetchNewsReducer,
    photos: FetchPhotosReducer,
    rankingWines: FetchRankingWinesReducer,
    winesets: FetchWinesetsReducer
})

export default rootReducer
