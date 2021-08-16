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
    dishes: "",
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
    if (!recipe.name)
      errors.name = `Name is requiered / El nombre es requerido`;
    else if (recipe.name.length < 5 || recipe.name.length > 50) {
      errors.name = `Name should be between 5 and 30 characters of extension / El nombre debe contener entre 5 y 30 caracteres`;
    }
    if (!recipe.description)
      errors.description = `Description is requiered / La descripcion es requerida`;
    else if (recipe.description.length < 10 || recipe.description.length > 50) {
      errors.name = `Recipe's description should be between 10 and 50 characters of extension / La descripcion debe contener entre 5 y 30 caracteres`;
    }
    if (!recipe.dishes)
      errors.dishes = `Recipe's type of dish is requiered / Se requiere un tipo de plato`;
    else if (recipe.dishes.length < 4) {
      errors.dishes = `Recipe's type of dish should be at least 5 characters of extension / El tipo de plato de la receta debe ser de al menos 4 caracteres`;
    }
    if (!recipe.score)
      errors.score = `Recipe's score is requiered / Se requiere una puntuacion de la receta`;
    else if (recipe.score < 1 || recipe.score > 100) {
      errors.score = `Recipe's score should be between 1 and 100 / La puntuacion de la receta debe ser entre 1 y 100 puntos`;
    }
    if (!recipe.healthy)
      errors.healthy = `Recipe's healthy is requiered / Se requiere un puntaje de que tan saludable es la receta`;
    else if (recipe.healthy < 1 || recipe.healthy > 100) {
      errors.healthy = `Recipe's healthy should be between 1 and 100 / La puntuacion saludable debe ser entre 1 y 100 puntos`;
    }
    if (!recipe.steps)
      errors.steps = `Recipe's instructions is requiered / Se requiere las instrucciones de la receta`;
    else if (recipe.steps.length < 50) {
      errors.steps = `Recipe's  should be between at least 50 characters of extension / Las instrucciones deben contener al menos 50 caracteres`;
    }
    if (!recipe.image) {
      errors.image = `Recipe's image is requiered / Se requiere una imagen de la receta`;
    }
    // if (recipe.diets.length < 1) {
    //   errors.diets = `Recipe's diets is requiered / Se requiere el/los tipos de dieta/s en la/s que esta incluida la receta`;
    // }
    return errors;
  };

  //Me traigo todas las dietas
  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  //Creo mi funcion onChange para el formulario para tener un estado general para todos mis inputs
  function onInputChange(e) {
    if (e.target.name === "diets") {
      const dietsSelection = recipe[e.target.name];
      setRecipe({
        ...recipe,
        [e.target.name]: dietsSelection.concat(e.target.value),
      });
    } else {
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
      console.log(recipe, "soy la receta que estas creando");
    }
  }
  // const handleDiets = (e) => {
  //   const newDiets = new Set(recipe.diets);
  //   setRecipe({
  //     ...recipe,
  //     diets: [...newDiets, e.target.value],
  //   });
  // };

  const handleCheckbox = (e) => {
    console.log(e.target.value);
    if (e.target.checked) {
      setRecipe({
        ...recipe,
        diets: [...recipe.diets, e.target.value],
      });
    } else {
      setRecipe({
        ...recipe,
        diets: recipe.diets.filter((diet) => diet !== e.target.value),
      });
    }
  };

  // const handleDeleteDietsNames = (elem) => {
  //   setRecipe({
  //     ...recipe,
  //     diets: recipe.diets.filter((diet) => diet !== elem),
  //   });
  // };

  //Aca hago mi post a mi base de datos

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(addRecipe(recipe));
      alert(
        "Your delicious recipe has been created! / Su deliciosa receta se ha creado"
      );
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
    } else {
      alert("Some ingredients are missing :(");
    }
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
        <h1 className={style.formTitle}>MAKE YOUR RECIPE !</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <label className={style.labelInput}>Nombre / Name:</label>
          <div className={style.divInput}>
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
            <label className={style.labelInput}>
              Descripcion / Description:
            </label>
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
            <label className={style.labelInput}>
              Tipo/s de Plato/s / Type of Dish:
            </label>
            <input
              type="text"
              name="dishes"
              value={recipe.dishes}
              placeholder="Recipe Dishes Types"
              onChange={(e) => onInputChange(e)}
              className={style.input}
            />
            {errors.dishes && <p className={style.errors}> {errors.dishes} </p>}
          </div>

          <label className={style.labelInput}>Puntaje / Score:</label>
          <div className={style.divInput}>
            <input
              type="number"
              min="0"
              max="99"
              name="score"
              value={recipe.score}
              placeholder="Recipe Score"
              onChange={(e) => onInputChange(e)}
              className={style.input}
            />
            {errors.score && <p className={style.errors}> {errors.score} </p>}
          </div>
          <label className={style.labelInput}>
            Puntaje Saludable / Healthy Score:
          </label>
          <div className={style.divInput}>
            <input
              type="number"
              min="0"
              max="99"
              name="healthy"
              value={recipe.healthy}
              placeholder="Recipe Healthy"
              onChange={(e) => onInputChange(e)}
              className={style.input}
            />
            {errors.healthy && (
              <p className={style.errors}> {errors.healthy} </p>
            )}
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
          <label className={style.labelInput}>Imagen / Image:</label>
          <div className={style.divInput}>
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

          {/* <label className={style.labelInput}>Dietas / Diets: </label>
        <div className={style.divInput}>

        <select className={style.containerSelect} onChange={e => handleDiets(e)}>
          {diets.map(diet => (
            <option value={diet.name}>{diet.name}</option>
          ))}

          {errors.diets && <p className={style.errors}> {errors.diets} </p>}
        </select>
        </div> */}

          <label className={style.labelInput}>Choose your diets</label>
          <div className={style.dietsCheckbox}>
            {diets.map((diet) => (
              <span className={style.checkboxsNames} key={diet.name}>
                <input
                  className={style.checkboxs}
                  type="checkbox"
                  name="diets"
                  value={diet.id}
                  onChange={(e) => handleCheckbox(e)}
                />
                <label name={diet}>{diet?.name?.toUpperCase()}</label>
              </span>
            ))}
            {/* {errors.diets && <p className={style.errors}> {errors.diets} </p>} */}
          </div>

          <div>
            <button
              className={style.formButtonCrear}
              type="submit"
              disabled={!(Object.keys(errors).length === 0)}
            >
              MAKE YOUR RECIPE / CREAR RECETA
            </button>
          </div>
        </form>

        {/* {
      recipe.diets.map(elem => 
      <div className={style.divLI}>
        <ul><li className={style.li} key={elem}>{elem}</li>
        <button onClick={e => handleDeleteDietsNames(e)} >X</button></ul>
         
        </div>
      )} */}
      </div>
    </div>
  );
}

export default MakeRecipe;
