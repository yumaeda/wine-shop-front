/**
 * Reducer for wine list used by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Clone from 'clone'
import * as Redux from 'redux'
import keys from '../actions/ActionTypeKeys'
import { IFilteredWines, initFilteredWines } from '../states'

/**
 * Reducer for wine filter change
 */
export const WineListReducer: Redux.Reducer<IFilteredWines> =
    (state = initFilteredWines, action: Redux.AnyAction) => {
        let newState = state
        switch (action.type) {
            case keys.FETCH_SUCCESS:
                newState = Clone(state)
                newState.filter = 'category'
                newState.wines = action.wines
                break
            case keys.VINTAGE_FILTER:
                if (state.filter !== 'vintage') {
                    newState = Clone(state)
                    newState.filter = 'vintage'
                    newState.wines = [
                        {
                            barcode_number: '11111',
                            combined_name: 'Chambolle-Musigny',
                            combined_name_jpn: 'シャンボール・ミュジニー',
                            producer: 'Rumier',
                            producer_jpn: 'ルーミエ',
                            vintage: '1980'
                        },
                        {
                            barcode_number: '11112',
                            combined_name: 'Chateau Margaux',
                            combined_name_jpn: 'シャト・マルゴー',
                            producer: 'Chateau Margaux',
                            producer_jpn: 'シャト・マルゴー',
                            vintage: '2005'
                        },
                    ]
                }
                break
            case keys.PRICE_FILTER:
                if (state.filter !== 'price') {
                    newState = Clone(state)
                    newState.filter = 'price'
                    newState.wines = [
                        {
                            barcode_number: '11111',
                            combined_name: 'Vin de France Raisin de  Rou',
                            combined_name_jpn: 'ヴァン・ド・フランス・レザン・ド・ルー',
                            producer: 'Domaine de Marc',
                            producer_jpn: 'ドメーヌ・ド・マルクー',
                            vintage: '2015'
                        },
                        {
                            barcode_number: '11112',
                            combined_name: 'Riesling Vindange Tartive Forbourg 1500ml',
                            combined_name_jpn: 'リースリング・ヴァンダンジュ・タルディヴ・フォルブルグ 1500ml',
                            producer: 'Domain Mure',
                            producer_jpn: 'ドメーヌ・ミューレ',
                            vintage: '1989'
                        },
                    ]
                }
                break
            default:
                break
        }

        return newState
    }
