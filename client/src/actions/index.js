import axios from 'axios'

import { URL_ALL_RECIPES  } from '../constantes'

import {
    FILTER_BY_DIET,
     GET_RECIPES,
//     SEARCH_RECIPE_BY_NAME,
//     ADD_RECIPE,
//     GET_DIETS_TYPES
} from './constants'

//SIEMPRE DEBO TRATAR DE TENER LA MENOR LOGICA EN MI ACTIONS !

//PROMESAS Puedo usar Fetch o Axios pero Fetch solo con promesas
// export function getRecipes() {
//     return function(dispatch) {
//         return fetch (URL_ALL_RECIPES)
//         .then((recipes) => {
//             dispatch({
//                 type: GET_RECIPES,
//                 payload: recipes
//             })
//         })
//     }
// }

//Esto me trae todas las recetas a  'http://localhost:3001/recipes/
//ASYNC AWAIT
export function getRecipes() {
    return async function(dispatch) {
        var allRecipes = await axios (URL_ALL_RECIPES, {

        })
        return dispatch({
                type: GET_RECIPES,
                payload: allRecipes.data
            })
    }
}

export function orderRecipe() {
        return {
                type: FILTER_BY_DIET,
                payload
            }
    }
