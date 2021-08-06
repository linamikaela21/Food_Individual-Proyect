import './index.css'
import { filterRecipeByDiet } from '../../actions/index'
import { useDispatch } from 'react-redux';

export function SearchBar() {
  
  const dispatch = useDispatch()
  //Esta es la funcion que conecta mi accion con cada uno de los valores de mi select 
  //en funcion de lo que presiona el usuario
  function handleFilterRecipeByDiet(e) {
    dispatch(filterRecipeByDiet(e.target.value))
  }
  console.log(filterRecipeByDiet)
  return (
    <div>
      <div>
        <input type="text" placeholder="Busca tu receta.." />
      </div>
      <div>
        <select>
        <option value="orden">Orden</option>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select>
        <select>
        <option value="puntaje">Score</option>
          <option value="may-men">Mayor - Menor</option>
          <option value="men-may">Menor - Mayor</option>
        </select>
        {/*Es importante que en el value le ponga lo que me llega por back porque va a ser lo que me va a filtrar mi action.payload */}
        <select onChange={(e)=> handleFilterRecipeByDiet(e)}>
          <option value='all'>Tipo de Dieta</option>
          <option value='Gluten free'>Dieta: Gluten Free</option>
          <option value='Dairy Free'>Dieta: Dairy Free</option>      
          <option value='Lacto Vegetarian'>Dieta: LactoVegetarian</option>
          <option value='Ovo Vegetarian'> Dieta: OvoVegetarian</option>
          <option value='Vegetarian'>Dieta: Vegetarian</option>
          <option value='Vegan'>Dieta: Vegan</option>
          <option value='Pescetarian'>Dieta: Pescetarian</option>
          <option value='Paleo'>Dieta: Paleo</option>
          <option value='Ketogenic'>Dieta: Ketogenic</option>
          <option value='Primal'>Dieta: Primal</option>
          <option value='Whole30'>Dieta: Whole30</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
