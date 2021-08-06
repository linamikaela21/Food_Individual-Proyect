import React from 'react';
import './index.css'

//Me traigo las propiedades desde Recipes
function Paginado({recipesPerPage, allRecipes, paginado}) {

    const pageNumbers = [];

    //Voy a recorrer un arreglo donde tomo el numero redondo que corresponde a dividir todos los recetas 
    //por la cantidad de recetas que quiero por pagina creando mi arreglo con la cantidad de paginas de la App
    for(let i = 1; i <= Math.ceil(allRecipes/recipesPerPage); i++) {
        pageNumbers.push(i)
    }
    
    return (
        <nav>
            <ul className='pagination'>
                { //Por cada pagina quiero que me imprima el numero de pagina
                pageNumbers?.map(number => (
                    <li className='number' key={number}>
                        <a className='number-a' onClick={() => paginado(number)}> {number} </a>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
};

export default Paginado;


/* 

    */ 