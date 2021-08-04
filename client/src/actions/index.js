import axios from 'axios'

import { URL_ALL_RECIPES  } from '../constantes'

import {
     GET_RECIPES,
//     SEARCH_RECIPE_BY_NAME,
//     SEARCH_RECIPE_BY_ID,
//     ADD_RECIPE,
//     GET_DIETS_TYPES
} from './constants'

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

//ASYNC AWAIT
export function getRecipes() {
    return async function(dispatch) {
        var recetas = await axios (URL_ALL_RECIPES, {

        })
        return dispatch({
                type: GET_RECIPES,
                payload: recetas.data
            })
    }
}



