import {
    GET_RECIPES,
    // FILTER_BY_DIET,
    // SEARCH_RECIPE_BY_NAME,
    // SEARCH_RECIPE_BY_ID,
    // ORDER_RECIPE_ASC,
    // ORDER_RECIPE_DESC,
    // ADD_RECIPE,
} from '../actions/constants'

const initialState = {
    //Estado con todas las recetas 
    allRecipes: [],
    //Estado con las recetas fltradas sino me filtraba sobre lo filtrado
    recipes: [],
    diets: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_RECIPES:
            return {
                ...state,
                allRecipes: action.payload,
                recipes: action.payload
            }

    //     case FILTER_BY_DIET:
    //         const allRecipes = state.allRecipes
    //         const dietsFiltered = action.payload === 'all' ? allRecipes
    //             : allRecipes.filter(elem => elem.diets === action.payload)

    //         console.log(allRecipes, 'allRecipes', dietsFiltered, 'dietsFiltered', state)
    //         return {
    //             ...state,
    //             recipes: dietsFiltered
    //         }
        default: return state
    }
}

export default rootReducer;
