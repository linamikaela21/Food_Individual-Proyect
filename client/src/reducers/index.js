import {
    GET_RECIPES,
    SEARCH_RECIPE_BY_NAME,
    SEARCH_RECIPE_BY_ID,
    ORDER_RECIPE_ASC,
    ORDER_RECIPE_DESC,
    ADD_RECIPE,
    GET_DIETS_TYPES
} from '../actions/constants'

const initialState = {
    recipes: [],
    searchRecipesByName: [],
    searchRecipesByID: [],
    diets: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }
        case SEARCH_RECIPE_BY_NAME:
            return {
                ...state
            }
        case SEARCH_RECIPE_BY_ID:
            return {
                ...state
            }
            case ORDER_RECIPE_ASC:
                return {
                    ...state
                }
                case ORDER_RECIPE_DESC:
                return {
                    ...state
                }
        case ADD_RECIPE:
            return {
                ...state
            }
            case GET_DIETS_TYPES:
            return {
                ...state
            }
        default: return state
    }
}

export default rootReducer;
