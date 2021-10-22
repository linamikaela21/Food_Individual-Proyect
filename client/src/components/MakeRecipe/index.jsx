import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import style from "./index.module.css";

import { addRecipe, getDiets, getRecipes } from "../../redux/actions"

export function MakeRecipe() {
  //const {name, description, score, healthy, image, steps, diets} = req.body

  //Para redireccionarme una vez que envio el formulario
  const history = useHistory();

  const dispatch = useDispatch();

  //Me estoy trayendo el estado de diets
  const diets = useSelector(state => state.diets);

  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    dishes: [],
    score: "",
    healthy: "",
    steps: [],
    image: "",
    diets: [],
  });

const [step, setStep] = useState('')

const [dish, setDish] = useState('')

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
    else if (recipe.dishes.length < 1) {
      errors.dishes = `Recipe's type of dish should be al least one / El tipo de plato de la receta debe ser al menos uno`;
    }
    if (!recipe.score)
      errors.score = `Recipe's score is requiered / Se requiere una puntuacion de la receta`;
    else if (recipe.score < 1 || recipe.score > 100) {
      errors.score = `Recipe's score should be between 1 and 99 / La puntuacion de la receta debe ser entre 1 y 99 puntos`;
    }
    if (!recipe.healthy)
      errors.healthy = `Recipe's healthy is requiered / Se requiere un puntaje de que tan saludable es la receta`;
    else if (recipe.healthy < 1 || recipe.healthy > 100) {
      errors.healthy = `Recipe's healthy should be between 1 and 99 / La puntuacion saludable debe ser entre 1 y 99 puntos`;
    }
    if (!recipe.steps)
      errors.steps = `Recipe's instructions is requiered / Se requiere las instrucciones de la receta`;
    else if (recipe.steps.length < 1) {
      errors.steps = `Recipe's steps should be al least one step / Las instrucciones deben contener al menos un paso`;
    }
    if (!recipe.image) {
      errors.image = `Recipe's image is requiered / Se requiere una imagen de la receta`;
    }
    if (recipe.diets.length < 1) {
      errors.diets = `Recipe's diets is requiered / Se requiere el/los tipos de dieta/s en la/s que esta incluida la receta`;
    }
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
    }
  }

  const handleCheckbox = (e) => {
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
  }

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
        dishes: [],
        score: "",
        healthy: "",
        steps: [],
        image: "",
        diets: [],
      });
      dispatch(getRecipes());
      history.push("/recipes");
    } else {
      alert("Some ingredients are missing :(")
    }
  };

  const onChangeStep = (e) => {
    setStep(e.target.value)
  }

  const addStep = (e) => {
    e.preventDefault()
    setRecipe({...recipe, steps: [...recipe.steps, step]})
    setStep('')
  }

  const deleteStep = (e, s) => {
    e.preventDefault()
    setRecipe({...recipe, steps: recipe.steps.filter(x => x !== s)})
  }

  const onChangeDish = (e) => {
    setDish(e.target.value)
  }

  const addDish = (e) => {
    e.preventDefault()
    setRecipe({...recipe, dishes: [...recipe.dishes, dish]})
    setDish('')
  }

  const deleteDish = (e, d) => {
    e.preventDefault()
    setRecipe({...recipe, dishes: recipe.dishes.filter(x => x !== d)})
  }

  console.log(recipe, 'que estoy haciendo ?')

  return (
    <div className={style.formFondo}>
      <div className={style.formContainer}>
        <h1 className={style.formTitle}>MAKE YOUR RECIPE !</h1>
        <h1 className={style.formTitle}>CREA TU PROPIA RECETA !</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <label className={style.labelInput}>Name | Nombre:</label>
          <div className={style.divInput}>
            <input
              type="text"
              name="name"
              value={recipe.name}
              placeholder="Recipe Name.. | Nombre de la receta.."
              onChange={(e) => onInputChange(e)}
              className={style.input}
            />
            {errors.name && <p className="errors"> {errors.name} </p>}
          </div>

          <div className={style.divInput}>
            <label className={style.labelInput}>
              Description | Descripcion:
            </label>
            <input
              type="text"
              name="description"
              value={recipe.description}
              placeholder="Recipe Description.. | Descripcion de la receta.."
              onChange={(e) => onInputChange(e)}
              className={style.input}
            />
            {errors.description && (
              <p className={style.errors}> {errors.description} </p>
            )}
          </div>

          <div className={style.divInput}>
            <label className={style.labelInput}>
              Type of Dish | Tipo/s de Plato/s:
            </label>
            <input
              type="text"
              name="dishes"
              value={dish}
              placeholder="Recipe Dishes Types.. | Tipo/s de plato/s.."
              onChange={e => onChangeDish(e)}
              className={style.input}
            />
            {errors.dishes && <p className={style.errors}> {errors.dishes} </p>}
          </div>
          <button className={style.stepButtonAdd} onClick={e => addDish(e)}> Add Dish | Agregar plato</button>
          <div className={style.divInput}>
            <ol className={style.step}> {recipe.dishes?.map(d => (
             <div > <li> {d} <button className={style.stepButton} onClick={e => deleteDish(e, d)}>Delete | Borrar</button> </li></div>
            ))} </ol>
          </div>

          <label className={style.labelInput}>Score | Puntaje:</label>
          <div className={style.divInput}>
            <input
              type="number"
              min="0"
              max="99"
              name="score"
              value={recipe.score}
              placeholder="Recipe Score.. | Puntaje de la receta.."
              onChange={(e) => onInputChange(e)}
              className={style.input}
            />
            {errors.score && <p className={style.errors}> {errors.score} </p>}
          </div>
          <label className={style.labelInput}>
            Healthy Score | Puntaje Saludable:
          </label>
          <div className={style.divInput}>
            <input
              type="number"
              min="0"
              max="99"
              name="healthy"
              value={recipe.healthy}
              placeholder="Recipe Healthy.. | Puntaje saluble de la receta.."
              onChange={(e) => onInputChange(e)}
              className={style.input}
            />
            {errors.healthy && (
              <p className={style.errors}> {errors.healthy} </p>
            )}
          </div>
          <label className={style.labelInput}>Steps | Instrucciones:</label>
           <div className={style.divInput}>
            <textarea
              type="text"
              name="step"
              value={step}
              onChange={e => onChangeStep(e)}
              placeholder="Recipe Steps.. | Instrucciones de la receta.."
              className={style.input}
            />
            {errors.steps && <p className={style.errors}> {errors.steps} </p>}
          </div> 
            <button className={style.stepButtonAdd} onClick={e => addStep(e)}> Add Step | Agregar paso</button>
          <div className={style.divInput}>
            <ol className={style.step}> {recipe.steps?.map(s => (
             <div > <li> {s} <button className={style.stepButton} onClick={e => deleteStep(e, s)}>Delete | Borrar</button> </li></div>
            ))} </ol>
          </div>

          <label className={style.labelInput}>Image | Imagen:</label>
          <div className={style.divInput}>
            <input
              type="text"
              name="image"
              value={recipe.image}
              placeholder="Recipe Image.. | Imagen de la receta.."
              onChange={(e) => onInputChange(e)}
              className={style.input}
            />
            {errors.image && <p className={style.errors}> {errors.image} </p>}
          </div>

          <label className={style.labelInput}>
            Choose your diets | Elije tus dietas:
          </label>
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
          </div>

          <div>
            <button
              className={style.formButtonCrear}
              type="submit"
              disabled={!(Object.keys(errors).length === 0)}
            >
              MAKE YOUR RECIPE | CREAR RECETA
            </button>
          </div>
        </form>

        <Link to="/recipes">
          <div>
            <button className={style.formButton}> GO BACK | VOLVER</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MakeRecipe;
