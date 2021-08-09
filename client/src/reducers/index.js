import {
    GET_RECIPES,
    GET_DIETS,
    SEARCH_RECIPE_BY_NAME,
    SEARCH_RECIPE_BY_ID,
    ORDER_RECIPE_BY_NAME,
    ORDER_RECIPE_BY_DIET,
    ORDER_RECIPE_BY_SCORE,
    ADD_RECIPE,
} from '../actions/constants'

const initialState = {
    //Estado con todas las recetas 
    allRecipes: [],
    //Estado con los detalles todas las recetas 
    details: [],
    //Estado con las recetas fltradas sino me filtraba sobre lo filtrado
    recipes: [],
    //Este estado es para las dietas que van a ir al formulario
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

        case ADD_RECIPE:
            return {
                ...state,
            }

        case GET_DIETS:
            return {
                ...state,
                diets: action.payload,
            }
        case SEARCH_RECIPE_BY_ID:
            return {
                ...state,
                details: action.payload
            }
        case SEARCH_RECIPE_BY_NAME:
            return {
                ...state,
                recipes: action.payload
            }

        case ORDER_RECIPE_BY_NAME:

            const orderByName = action.payload === 'asc' ?

                state.allRecipes.sort(function (a, b) {

                    if (a.name > b.name) {
                        return 1;
                    }

                    if (b.name > a.name) {
                        return -1;
                    }

                    return 0;
                }) :
                state.allRecipes.sort(function (a, b) {

                    if (a.name > b.name) {
                        return -1;
                    }

                    if (b.name > a.name) {
                        return 1;
                    }

                    return 0;
                });
            return {
                ...state,
                recipes: orderByName
            }

        case ORDER_RECIPE_BY_SCORE:

            const orderByScore = action.payload === 'mayor' ?

                state.allRecipes.sort(function (a, b) {

                    if (a.score > b.score) {
                        return 1;
                    }

                    if (b.score > a.score) {
                        return -1;
                    }

                    return 0;
                }) :
                state.allRecipes.sort(function (a, b) {

                    if (a.score > b.score) {
                        return -1;
                    }

                    if (b.score > a.score) {
                        return 1;
                    }

                    return 0;
                });
            return {
                ...state,
                recipes: orderByScore
            }


        case ORDER_RECIPE_BY_DIET:
            // const allRecipes = state.allRecipes
            // const dietsFiltered = action.payload === 'all' ? allRecipes
            //     : allRecipes.filter(elem => elem.diets === action.payload)

            return {
                ...state,
                // recipes: dietsFiltered
            }


        default: return state
    }
}

export default rootReducer;
