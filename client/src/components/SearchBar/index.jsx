import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeByName } from "../../redux/actions/index";

import style from "./index.module.css";

function SearchBar() {
  const [name, setName] = useState("");

  const dispatch = useDispatch(getRecipeByName);

  const handleChangeSearchBar = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmitSearchBar = (e) => {
    e.preventDefault();
    dispatch(getRecipeByName(name));
    //Esto es para borrar el imput despues de la busqueda
    setName("");
  };

  return (
    <div className={style.containerSearchBar}>
      <input
        type="text"
        placeholder="Search your recipe.. | Busca tu receta.."
        onChange={(e) => handleChangeSearchBar(e)}
        className={style.inputSearchBar}
      />
      <button
        type="submit"
        className={style.buttonSearchBar}
        onClick={(e) => handleSubmitSearchBar(e)}
      >
        SEND | ENVIAR
      </button>
    </div>
  );
}

export default SearchBar;
