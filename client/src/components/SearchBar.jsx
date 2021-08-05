import React from "react";

export function SearchBar() {
  return (
    <div>
      <div>
        <input type="text" placeholder="Busca tu receta.." />
      </div>
      <div>
        <select id="asc/desc">
        <option value="orden">Orden</option>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select>
        <select id="score">
        <option value="puntaje">Score</option>
          <option value="may-men">Mayor - Menor</option>
          <option value="men-may">Menor - Mayor</option>
        </select>
        <select id="types-diets">
          <option value="tipo">Tipo de Dieta</option>
          <option value="gluten_free">Dieta: Gluten Free</option>
          <option value="dairy_free">Dieta: Dairy Free</option>      
          <option value="lacto_vegetarian">Dieta: LactoVegetarian</option>
          <option value="ovo_vegetarian"> Dieta: OvoVegetarian</option>
          <option value="vegetarian">Dieta: Vegetarian</option>
          <option value="vegan">Dieta: Vegan</option>
          <option value="pescetarian">Dieta: Pescetarian</option>
          <option value="paleo">Dieta: Paleo</option>
          <option value="whole30">Dieta: Whole30</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
