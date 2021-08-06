import {
    GET_RECIPES,
    FILTER_BY_DIET,
    // SEARCH_RECIPE_BY_NAME,
    // SEARCH_RECIPE_BY_ID,
    // ORDER_RECIPE_ASC,
    // ORDER_RECIPE_DESC,
    // ADD_RECIPE,
} from '../actions/constants'

const initialState = {
    recipes: [],
    searchRecipesByName: [],
    diets: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }

        case FILTER_BY_DIET:
            return {
                ...state
            }

        default: return state
    }
}

export default rootReducer;
