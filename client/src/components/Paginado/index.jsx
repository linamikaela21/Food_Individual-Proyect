import React from 'react';
import './index.module.css'

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
<<<<<<< HEAD
                        <a href="value" className='number-a' onClick={() => paginado(number)}> {number} </a>
=======
                        <a href={number} className='number-a'onClick={() => paginado(number)}>{number}</a>
>>>>>>> 2faedd5
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