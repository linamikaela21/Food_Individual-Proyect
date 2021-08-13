import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";
import  github  from '../../Images/github.jpg'
import  linkedin  from '../../Images/linkedin.jpg'
import  gmail  from '../../Images/gmail.jpg'

export default function About() {
  return (
    <div>
      <Link to="/recipes">
        <button className={style.buttonVolver}>Volver / Go back</button>
      </Link>
        <div className={style.about}>
        <h1>MUCHAS GRACIAS POR INGRESAR AL PROYECTO FOOD</h1>
            <p>Esta aplicación es un proyecto individual que fue creado durante mi bootcamp en <a href="https://www.soyhenry.com" target="_blank" rel="noopener noreferrer">Soy Henry</a>, siendo uno de los 2 proyectos requeridos.</p>
            <p>Las tecnologías utilizadas aqui son PostgreSQL, Sequelize, Express, React y Redux, entre otras ademas de varias librerias. 
             <p>No se ha utilizado apoyo de alguna libreria en la parte de diseño</p> 
              Esta aplicación se sirve de la API <a href="https://api.spoonacular.com/recipes/complexSearch/" target="_blank" rel="noopener noreferrer">Spoonacular API</a> 
               para obtener distintos tipos de recetas, captar las primeras 100 y luego almacenarlos para trabajarlos y requerirlos desde una API propia.</p>            
            <h2>CONTACTO</h2>
            <div className={style.contact}>
                <div className={style.contact_item}>
                    <img src={linkedin} alt="Not found" className={style.contact_item_img}/>
                    <a href="https://www.linkedin.com/in/lina-mikaela-gutierrez-arribas" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className={style.contact_item}>
                    <img src={github} alt="Not found" className={style.contact_item_img}/>
                    <a href="https://github.com/linamikaela21" target="_blank" rel="noopener noreferrer">GitHub</a>                   
                </div>
                <div className={style.contact_item}>
                    <img src={gmail} alt="Not found" className={style.contact_item_img}/>
                    <a href="mailto:mikaelagutierrezarribas@gmail.com" target="_blank" rel="noopener noreferrer">mikaelagutierrezarribas@gmail.com</a>
                </div>
            </div>

        </div>
    </div>
  );
}
