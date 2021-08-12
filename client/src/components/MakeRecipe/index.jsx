import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import style from "./index.module.css";


import { addRecipe, getDiets } from "../../actions";

export function MakeRecipe() {
  //const {name, description, score, healthy, image, steps, diets} = req.body

  //Para redireccionarme una vez que envio el formulario
  const history = useHistory();

  const dispatch = useDispatch();

  //Me estoy trayendo el estado de diets
  const diets = useSelector((state) => state.diets);

  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    score: "",
    healthy: "",
    steps: "",
    image: "",
    diets: [],
  });

  //VALIDACION Y MANEJO DE ERRORES

  const [errors, setErrors] = useState({});

  const validations = (recipe) => {
    let errors = {};
    if (!recipe.name || recipe.name.length < 5 || recipe.name.length > 50) {
      errors.name = `Se requiere un nombre de entre 5 y 30 caracteres / Name is requiered between 5 and 30 characters of extension`;
    } else if (!recipe.description || recipe.description.length < 10 || recipe.description.length > 50) {
      errors.description = `Se requiere una descripcion de la receta 10 y 50 caracteres / Recipe's description is requiered between 10 and 50 characters of extension`;
    } else if (!recipe.dishes || recipe.dishes.length < 4) {
      errors.dishes = `Se requiere un tipo de plato de la receta de al menos 4 caracteres / Recipe's type of dish with at least 5 characters of extension is requiered`;
    } else if (!recipe.score || recipe.score < 0 || recipe.score > 100) {
      errors.score = `Se requiere una puntuacion de la receta entre 1 y 100 puntos / Recipe's score between 1 and 100 is requiered`;
    } else if (!recipe.healthy || recipe.healthy < 0 || recipe.healthy > 100) {
      errors.healthy = `Se requiere un puntaje de que tan saludable es la receta entre 1 y 100 puntos / Recipe's healthy between 1 and 100 is requiered`;
    } else if (!recipe.steps || recipe.steps.length < 50) {
      errors.steps = `Se requieren las instrucciones de la receta con al menos 50 caracteres / Recipe's score with at least 50 characters of extension is requiered`;
    } else if (!recipe.image) {
      errors.image = `Se requiere una imagen de la receta / Recipe's image is requiered`;
    } else if (!recipe.diets || recipe.diets.length > 1) {
      errors.diets = `Se requiere el/los tipos de dieta/s en la/s que esta incluida la receta / Recipe's diets is requiered`;
    }
    return errors;
  };

  //Me traigo todas las dietas
  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  //Creo mi funcion onChange para el formulario para tener un estado general para todos mis inputs
  function onInputChange(e) {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validations({
        ...recipe,
        [e.target.name]: e.target.value,
      })
    );
    console.log(recipe);
  }

  const handleDiets = (e) => {
    setRecipe({
      ...recipe,
      diets: [
        ...recipe.diets, 
        e.target.value]
    });
  };

  const handleDeleteDietsNames = (elem) => {
    setRecipe({
      ...recipe,
      diets: recipe.diets.filter(diet => diet !== elem)
    });
  };

  //Aca hago mi post a mi base de datos
  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(addRecipe(recipe));
      alert("Se ha creado una nueva receta");
      setRecipe({
        name: "",
        description: "",
        dishes: "",
        score: "",
        healthy: "",
        steps: "",
        image: "",
        diets: [],
      });
    history.push("/recipes");
  };



  return (

    <div className={style.formFondo}>
    <div className={style.formContainer}>
      <Link to="/recipes">
        <div>
          <button className={style.formButton}>VOLVER</button>
        </div>
      </Link>
      <h1 className={style.formTitle}>CREA TU PROPIA RECETA !</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
      <label className={style.labelInput}>Nombre / Name:</label>
        <div  className={style.divInput}>
          <input
            type="text"
            name="name"
            value={recipe.name}
            placeholder="Recipe Name"
            onChange={(e) => onInputChange(e)}
            className={style.input}
          />
          {errors.name && <p className="errors"> {errors.name} </p>}
        </div>

        <div className={style.divInput}>
          <label className={style.labelInput}>Descripcion / Description: </label>
          <input
            type="text"
            name="description"
            value={recipe.description}
            placeholder="Recipe Description"
            onChange={(e) => onInputChange(e)}
            className={style.input}
          />
          {errors.description && (
            <p className={style.errors}> {errors.description} </p>
          )}
        </div>

        <div className={style.divInput}>
          <label className={style.labelInput}>Tipo/s de Plato/s / Type of Dish: </label>
          <input
            type="text"
            name="dishes"
            value={recipe.dishes}
            placeholder="Recipe Dishes Types"
            onChange={(e) => onInputChange(e)}
            className={style.input}
          />
          {errors.dishes && (
            <p className={style.errors}> {errors.dishes} </p>
          )}
        </div>

        <label className={style.labelInput}>Puntaje / Score:</label>
        <div className={style.divInput}>

          <input
            type="number"
            name="score"
            value={recipe.score}
            placeholder="Recipe Score"
            onChange={(e) => onInputChange(e)}
            className={style.input}
          />
          {errors.score && <p className={style.errors}> {errors.score} </p>}
        </div>
        <label className={style.labelInput}>Puntaje Saludable / Healthy Score:</label>
        <div>

          <input
            type="number"
            name="healthy"
            value={recipe.healthy}
            placeholder="Recipe Healthy"
            onChange={(e) => onInputChange(e)}
            className={style.input}
          />
          {errors.healthy && <p className={style.errors}> {errors.healthy} </p>}
        </div>
        <label className={style.labelInput}>Instrucciones / Steps:</label>
        <div className={style.divInput}>

          <textarea
            type="textarea"
            name="steps"
            value={recipe.steps}
            placeholder="Recipe Steps"
            onChange={(e) => onInputChange(e)}
            className={style.input}
          />
          {errors.steps && <p className={style.errors}> {errors.steps} </p>}
        </div>
        <label className={style.labelInput}>Imagen / Image: </label>
        <div>
          <input
            type="text"
            name="image"
            value={recipe.image}
            placeholder="Recipe Image"
            onChange={(e) => onInputChange(e)}
            className={style.input}
          />
          {errors.image && <p className={style.errors}> {errors.image} </p>}
        </div>

        <label className={style.labelInput}>Dietas / Diets: </label>
        <div className={style.divInput}>

        <select className={style.containerSelect} onChange={e => handleDiets(e)}>
          {diets.map(diet => (
            <option value={diet.name}>{diet.name}</option>
          ))}

          {errors.diets && <p className={style.errors}> {errors.diets} </p>}
        </select>
        </div>

        <div>
          <button className={style.formButtonCrear} type="submit">CREAR RECETA</button>
        </div>

      </form>

      {recipe.diets.map(elem => 
      <div className={style.divLI}>
        <ul><li className={style.li}>{elem}</li>
        <button onClick={e => handleDeleteDietsNames(elem)} >X</button></ul>
         
        </div>
      )}
    </div>
    </div>

  );
}

export default MakeRecipe;
