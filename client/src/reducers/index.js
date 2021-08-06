import {
    GET_RECIPES,
    ORDER_RECIPE_BY_NAME,
    ORDER_RECIPE_BY_DIET,
    ORDER_RECIPE_BY_SCORE,
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

        case ORDER_RECIPE_BY_DIET:
            // const allRecipes = state.allRecipes
            // const dietsFiltered = action.payload === 'all' ? allRecipes
            //     : allRecipes.filter(elem => elem.diets === action.payload)

            return {
                ...state,
                // recipes: dietsFiltered
            }

        case ORDER_RECIPE_BY_SCORE:
            // const allRecipes = state.allRecipes;
            // const scoreOrder = allRecipes.filter(i => i.score === action.payload)
            // if(action.payload === 'mayor') 
            return {
                ...state,
                // recipes: scoreOrder
            }


        default: return state
    }
}

export default rootReducer;
