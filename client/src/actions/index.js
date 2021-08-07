import axios from 'axios'

import { URL_ALL_RECIPES, URL_DIETS, URL_RECIPES_BY_NAME } from '../constantes'

import {
    GET_RECIPES,
    GET_DIETS,
    SEARCH_RECIPE_BY_NAME,
    ORDER_RECIPE_BY_NAME,
    ORDER_RECIPE_BY_DIET,
    ORDER_RECIPE_BY_SCORE
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

//CREACION DE RECETA  
export function getDiets() {
    return async (dispatch) => {
        var allDiets = await axios.get (URL_DIETS)
        return dispatch({
                type: GET_DIETS,
                payload: allDiets.data
            })
    }
}

export function addRecipe(payload) {
    return async function(dispatch) {
        var addRecipe = await axios.post(URL_ALL_RECIPES, payload)
        console.log(payload)
        return addRecipe
    }
}


//FUNCIONES PARA EL SEARCH BAR
export function getRecipeByName(name) {
        return async function(dispatch) {
            try {
                const recipesNames = await axios (URL_RECIPES_BY_NAME + `?name=${name}`)
                return dispatch({
                    type: SEARCH_RECIPE_BY_NAME,
                    payload: recipesNames.data
                })
            } catch (error) {
                console.log(error)
            }
}
}


//FUNCIONES PARA ORDENAR
export function orderRecipeByName(payload) {
    return {
            type: ORDER_RECIPE_BY_NAME,
            payload
        }
}

export function orderRecipeByDiet(payload) {
    return {
            type: ORDER_RECIPE_BY_DIET,
            payload
        }
}

export function orderRecipeByScore(payload) {
    return {
            type: ORDER_RECIPE_BY_SCORE,
            payload
        }
}