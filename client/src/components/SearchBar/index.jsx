import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeByName } from "../../actions/index";

<<<<<<< HEAD
=======
import style from './index.module.css'

>>>>>>> 2faedd5
function SearchBar() {
  const [name, setName] = useState("");

  const dispatch = useDispatch(getRecipeByName);

  const handleChangeSearchBar = (e) => {
    e.preventDefault();
    console.log(name)
    setName(e.target.value)
  };

  const handleSubmitSearchBar = (e) => {
    e.preventDefault();
    dispatch(getRecipeByName(name))
    //Esto es para borrar el imput despues de la busqueda
    setName('')
  }

  return (
    <div>
      <input
        type="text"
<<<<<<< HEAD
        placeholder="Busca tu receta"
        onChange={(e) => handleChangeSearchBar(e)}
=======
        placeholder="Busca tu receta.."
        onChange={(e) => handleChangeSearchBar(e)}
        className={style.input}
>>>>>>> 2faedd5
      />
      <button type="submit" onClick={(e) => handleSubmitSearchBar(e)}>Enviar</button>
    </div>
  );
}

export default SearchBar;
