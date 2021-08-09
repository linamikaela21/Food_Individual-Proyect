import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeByName } from "../../actions/index";

import style from './index.moduless.css'

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
        placeholder="Busca tu receta.."
        onChange={(e) => handleChangeSearchBar(e)}
        className={style.input}
      />
      <button type="submit" onClick={(e) => handleSubmitSearchBar(e)}>Enviar</button>
    </div>
  );
}

export default SearchBar;
