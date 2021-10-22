import axios from "axios";

import { URL_ALL_RECIPES, URL_DIETS, URL_RECIPES_BY_NAME } from "../../constantes"

import {
  GET_RECIPES,
  GET_DIETS,
  SEARCH_RECIPE_BY_NAME,
  SEARCH_RECIPE_BY_ID,
  ORDER_RECIPE_BY_NAME,
  ORDER_RECIPE_BY_DIET,
  ORDER_RECIPE_BY_SCORE,
  ADD_RECIPE,
  DELETE_RECIPE,
} from "./constants";

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
  return async function (dispatch) {
    var allRecipes = await axios(URL_ALL_RECIPES)
    return dispatch({
      type: GET_RECIPES,
      payload: allRecipes.data,
    });
  };
}

//CREACION DE RECETA
export function getDiets() {
  return async (dispatch) => {
    var allDiets = await axios.get(URL_DIETS)
    return dispatch({
      type: GET_DIETS,
      payload: allDiets.data,
    });
  };
}

export function addRecipe(payload) {
  return async  (dispatch) => {
    var addRecipe = await axios.post(URL_ALL_RECIPES, payload);
    return {
      type: ADD_RECIPE,
      addRecipe,
    };
  };
}

//FUNCIONES PARA EL SEARCH BAR
export function getRecipeByName(name) {
  return async function (dispatch) {
    try {
      const recipesNames = await axios(URL_RECIPES_BY_NAME + `?name=${name}`);
      return dispatch({
        type: SEARCH_RECIPE_BY_NAME,
        payload: recipesNames.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//FUNCION PARA DETALLE DE LA RECETA
export function getRecipeById(id) {
  return async function (dispatch) {
    try {
      const recipeId = await axios(URL_ALL_RECIPES + `${id}`)
      return dispatch({
        type: SEARCH_RECIPE_BY_ID,
        payload: recipeId.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//FUNCION PARA BORRAR DE LA RECETA
export function deleteRecipe(id) {
  return async function (dispatch) {
    var deleteRecipe = await axios.delete(URL_ALL_RECIPES + `${id}`);
    return {
      type: DELETE_RECIPE,
      deleteRecipe,
    };
  };
}

//FUNCIONES PARA ORDENAR
export function orderRecipeByName(payload) {
  return {
    type: ORDER_RECIPE_BY_NAME,
    payload,
  };
}

export function orderRecipeByDiet(payload) {
  return {
    type: ORDER_RECIPE_BY_DIET,
    payload,
  };
}

export function orderRecipeByScore(payload) {
  return {
    type: ORDER_RECIPE_BY_SCORE,
    payload,
  };
}
