/**
 * Define keys for action types used by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
enum ActionTypeKeys {
    CATEGORY_FILTER             = 'CATEGORY_FILTER',
    CATEGORY_FILTER_ASYNC       = 'CATEGORY_FILTER_ASYNC',
    FETCH_START                 = 'FETCH_START',
    FETCH_RANKING_WINES_SUCCESS = 'FETCH_RANKING_WINES_SUCCESS',
    FETCH_NEW_WINES_SUCCESS     = 'FETCH_NEW_WINES_SUCCESS',
    FETCH_FAILURE               = 'FETCH_FAILURE',
    PRICE_FILTER                = 'PRICE_FILTER',
    PRICE_FILTER_ASYNC          = 'PRICE_FILTER_ASYNC',
    VINTAGE_FILTER              = 'VINTAGE_FILTER',
    VINTAGE_FILTER_ASYNC        = 'VINTAGE_FILTER_ASYNC'
}

export default ActionTypeKeys
